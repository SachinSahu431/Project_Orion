const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Medical = require("../models/medicalRecords");

const getMedicalRecordById = async (req, res, next) => {
  const medicalId = req.params.bid;

  let medicalRecord;
  try {
    medicalRecord = await Medical.findById(medicalId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find Medical Record",
      500
    );
    return next(error);
  }

  if (!medicalRecord) {
    const error = new HttpError(
      "Could not find a Medical Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ medicalRecord: medicalRecord.toObject({ getters: true }) });
};

const getMedicalRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let medicalRecord;
  try {
    medicalRecord = await Medical.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find Medical Record",
      500
    );
    return next(error);
  }

  if (!medicalRecord) {
    const error = new HttpError(
      "Could not find a Medical Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    medicalRecord: medicalRecord.map((medicalRecord) =>
      medicalRecord.toObject({ getters: true })
    ),
  });
};
const getMedicalRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let medicalRecord;
  try {
    medicalRecord = await Medical.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find Medical Record",
      500
    );
    return next(error);
  }

  if (!medicalRecord) {
    const error = new HttpError(
      "Could not find a Medical Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    medicalRecord: medicalRecord.map((medicalRecord) =>
      medicalRecord.toObject({ getters: true })
    ),
  });
};
const getMedicalRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let medicalRecord;
  try {
    medicalRecord = await Medical.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find Medical Record",
      500
    );
    return next(error);
  }

  if (!medicalRecord) {
    const error = new HttpError(
      "Could not find a Medical Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    medicalRecord: medicalRecord.map((medicalRecord) =>
      medicalRecord.toObject({ getters: true })
    ),
  });
};

const createMedicalRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, phone, gender, dateOfBirth, medicalHistory } = req.body;
  if (!name || !email || !phone || !gender || !dateOfBirth || !medicalHistory) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await Medical.findOne({ email: email });

    if (recordExist) {
      recordExist.medicalHistory = recordExist.medicalHistory.concat(
        medicalHistory[0]
      );
      await recordExist.save();
      return res.status(200).json({ MedicalRecord: recordExist });
    } else {
      const record = new Medical({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        medicalHistory,
      });

      await record.save();
      res.status(200).json({ MedicalRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getMedicalRecordById = getMedicalRecordById;
exports.getMedicalRecordByName = getMedicalRecordByName;
exports.getMedicalRecordByEmail = getMedicalRecordByEmail;
exports.getMedicalRecordByPhone = getMedicalRecordByPhone;
exports.createMedicalRecord = createMedicalRecord;
