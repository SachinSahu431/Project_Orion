const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const service = require("../models/serviceRecords");

const getServiceRecordById = async (req, res, next) => {
  const serviceId = req.params.bid;

  let serviceRecord;
  try {
    serviceRecord = await service.findById(serviceId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find service Record",
      500
    );
    return next(error);
  }

  if (!serviceRecord) {
    const error = new HttpError(
      "Could not find a service Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    serviceRecord: serviceRecord.toObject({ getters: true }),
  });
};

const getServiceRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let serviceRecord;
  try {
    serviceRecord = await service.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find service Record",
      500
    );
    return next(error);
  }

  if (!serviceRecord) {
    const error = new HttpError(
      "Could not find a service Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    serviceRecord: serviceRecord.map((serviceRecord) =>
      serviceRecord.toObject({ getters: true })
    ),
  });
};
const getServiceRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let serviceRecord;
  try {
    serviceRecord = await service.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find service Record",
      500
    );
    return next(error);
  }

  if (!serviceRecord) {
    const error = new HttpError(
      "Could not find a service Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    serviceRecord: serviceRecord.map((serviceRecord) =>
      serviceRecord.toObject({ getters: true })
    ),
  });
};
const getServiceRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let serviceRecord;
  try {
    serviceRecord = await service.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find service Record",
      500
    );
    return next(error);
  }

  if (!serviceRecord) {
    const error = new HttpError(
      "Could not find a service Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    serviceRecord: serviceRecord.map((serviceRecord) =>
      serviceRecord.toObject({ getters: true })
    ),
  });
};

const createServiceRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, phone, gender, dateOfBirth, eServiceRecord } = req.body;
  if (!name || !email || !phone || !gender || !dateOfBirth || !eServiceRecord) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await service.findOne({ email: email });

    if (recordExist) {
      recordExist.eServiceRecord = recordExist.eServiceRecord.concat(
        eServiceRecord[0]
      );
      await recordExist.save();
      return res.status(200).json({ ServiceRecord: recordExist });
    } else {
      const record = new service({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        eServiceRecord,
      });

      await record.save();
      res.status(200).json({ ServiceRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getServiceRecordById = getServiceRecordById;
exports.getServiceRecordByName = getServiceRecordByName;
exports.getServiceRecordByEmail = getServiceRecordByEmail;
exports.getServiceRecordByPhone = getServiceRecordByPhone;
exports.createServiceRecord = createServiceRecord;
