const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const training = require("../models/trainingRecords");

const getTrainingRecordById = async (req, res, next) => {
  const trainingId = req.params.bid;

  let trainingRecord;
  try {
    trainingRecord = await training.findById(trainingId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find training Record",
      500
    );
    return next(error);
  }

  if (!trainingRecord) {
    const error = new HttpError(
      "Could not find a training Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    trainingRecord: trainingRecord.toObject({ getters: true }),
  });
};

const getTrainingRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let trainingRecord;
  try {
    trainingRecord = await training.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find training Record",
      500
    );
    return next(error);
  }

  if (!trainingRecord) {
    const error = new HttpError(
      "Could not find a training Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    trainingRecord: trainingRecord.map((trainingRecord) =>
      trainingRecord.toObject({ getters: true })
    ),
  });
};
const getTrainingRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let trainingRecord;
  try {
    trainingRecord = await training.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find training Record",
      500
    );
    return next(error);
  }

  if (!trainingRecord) {
    const error = new HttpError(
      "Could not find a training Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    trainingRecord: trainingRecord.map((trainingRecord) =>
      trainingRecord.toObject({ getters: true })
    ),
  });
};
const getTrainingRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let trainingRecord;
  try {
    trainingRecord = await training.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find training Record",
      500
    );
    return next(error);
  }

  if (!trainingRecord) {
    const error = new HttpError(
      "Could not find a training Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    trainingRecord: trainingRecord.map((trainingRecord) =>
      trainingRecord.toObject({ getters: true })
    ),
  });
};

const createTrainingRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, phone, gender, dateOfBirth, trainingHistory } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !trainingHistory
  ) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await training.findOne({ email: email });

    if (recordExist) {
      recordExist.trainingHistory = recordExist.trainingHistory.concat(
        trainingHistory[0]
      );
      await recordExist.save();
      return res.status(200).json({ TrainingRecord: recordExist });
    } else {
      const record = new training({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        trainingHistory,
      });

      await record.save();
      res.status(200).json({ TrainingRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getTrainingRecordById = getTrainingRecordById;
exports.getTrainingRecordByName = getTrainingRecordByName;
exports.getTrainingRecordByEmail = getTrainingRecordByEmail;
exports.getTrainingRecordByPhone = getTrainingRecordByPhone;
exports.createTrainingRecord = createTrainingRecord;
