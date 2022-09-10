const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const property = require("../models/propertyReturn");

const getPropertyRecordById = async (req, res, next) => {
  const propertyId = req.params.bid;

  let propertyRecord;
  try {
    propertyRecord = await property.findById(propertyId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find property Record",
      500
    );
    return next(error);
  }

  if (!propertyRecord) {
    const error = new HttpError(
      "Could not find a property Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    propertyRecord: propertyRecord.toObject({ getters: true }),
  });
};

const getPropertyRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let propertyRecord;
  try {
    propertyRecord = await property.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find property Record",
      500
    );
    return next(error);
  }

  if (!propertyRecord) {
    const error = new HttpError(
      "Could not find a property Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    propertyRecord: propertyRecord.map((propertyRecord) =>
      propertyRecord.toObject({ getters: true })
    ),
  });
};
const getPropertyRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let propertyRecord;
  try {
    propertyRecord = await property.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find property Record",
      500
    );
    return next(error);
  }

  if (!propertyRecord) {
    const error = new HttpError(
      "Could not find a property Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    propertyRecord: propertyRecord.map((propertyRecord) =>
      propertyRecord.toObject({ getters: true })
    ),
  });
};
const getPropertyRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let propertyRecord;
  try {
    propertyRecord = await property.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find property Record",
      500
    );
    return next(error);
  }

  if (!propertyRecord) {
    const error = new HttpError(
      "Could not find a property Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    propertyRecord: propertyRecord.map((propertyRecord) =>
      propertyRecord.toObject({ getters: true })
    ),
  });
};

const createPropertyRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, phone, gender, dateOfBirth, returnHistory } = req.body;
  if (!name || !email || !phone || !gender || !dateOfBirth || !returnHistory) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await property.findOne({ email: email });

    if (recordExist) {
      recordExist.returnHistory = recordExist.returnHistory.concat(
        returnHistory[0]
      );
      await recordExist.save();
      return res.status(200).json({ PropertyRecord: recordExist });
    } else {
      const record = new property({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        returnHistory,
      });

      await record.save();
      res.status(200).json({ PropertyRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getPropertyRecordById = getPropertyRecordById;
exports.getPropertyRecordByName = getPropertyRecordByName;
exports.getPropertyRecordByEmail = getPropertyRecordByEmail;
exports.getPropertyRecordByPhone = getPropertyRecordByPhone;
exports.createPropertyRecord = createPropertyRecord;
