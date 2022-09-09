const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const cea = require("../models/ceaAllowance");

const getCeaRecordById = async (req, res, next) => {
  const ceaId = req.params.bid;

  let ceaRecord;
  try {
    ceaRecord = await cea.findById(ceaId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    ceaRecord: ceaRecord.toObject({ getters: true }),
  });
};

const getCeaRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let ceaRecord;
  try {
    ceaRecord = await cea.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    ceaRecord: ceaRecord.map((ceaRecord) =>
      ceaRecord.toObject({ getters: true })
    ),
  });
};
const getCeaRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let ceaRecord;
  try {
    ceaRecord = await cea.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    ceaRecord: ceaRecord.map((ceaRecord) =>
      ceaRecord.toObject({ getters: true })
    ),
  });
};
const getCeaRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let ceaRecord;
  try {
    ceaRecord = await cea.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    ceaRecord: ceaRecord.map((ceaRecord) =>
      ceaRecord.toObject({ getters: true })
    ),
  });
};

const getCeaRecordByApproved = async (req, res, next) => {
  const approved = req.params.approved;
  let ceaRecord;
  try {
    ceaRecord = await cea.find({ approvedOrNot: approved });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided approval status.",
      404
    );
    return next(error);
  }

  res.json({
    ceaRecord: ceaRecord.map((ceaRecord) =>
      ceaRecord.toObject({ getters: true })
    ),
  });
};

const updateCeaRecord = async (req, res, next) => {
  const { email, approvedOrNot, amountApproved, incomeTaxDeducted } = req.body;
  let ceaRecord;
  try {
    ceaRecord = await cea.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find cea Record",
      500
    );
    return next(error);
  }

  if (!ceaRecord) {
    const error = new HttpError(
      "Could not find a cea Record for the provided email.",
      404
    );
    return next(error);
  }

  const result = await cea.updateOne(
    { email: email },
    {
      $set: {
        amountApproved: amountApproved,
        approvedOrNot: approvedOrNot,
        incomeTaxDeducted: incomeTaxDeducted,
      },
    }
  );
  console.log(result);

  ceaRecord = await cea.find({ email: email });
  res.json({
    ceaRecord: ceaRecord.map((ceaRecord) =>
      ceaRecord.toObject({ getters: true })
    ),
  });
};

const createCeaRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    name,
    email,
    phone,
    childName1,
    monthlyCeaDemanded1,
    numberOfMonthsDemanded1,
    childName2,
    monthlyCeaDemanded2,
    numberOfMonthsDemanded2,
  } = req.body;

  const approvedOrNot = false;
  const amountApproved = 0;
  const incomeTaxDeducted = 0;

  if (
    !name ||
    !email ||
    !phone ||
    !childName1 ||
    !monthlyCeaDemanded1 ||
    !numberOfMonthsDemanded1
  ) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await cea.findOne({ email: email });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new cea({
        name,
        email,
        phone,
        childName1,
        monthlyCeaDemanded1,
        numberOfMonthsDemanded1,
        childName2,
        monthlyCeaDemanded2,
        numberOfMonthsDemanded2,
        approvedOrNot,
        amountApproved,
        incomeTaxDeducted,
      });

      await record.save();
      res.status(200).json({ ceaRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getCeaRecordById = getCeaRecordById;
exports.getCeaRecordByName = getCeaRecordByName;
exports.getCeaRecordByEmail = getCeaRecordByEmail;
exports.getCeaRecordByPhone = getCeaRecordByPhone;
exports.getCeaRecordByApproved = getCeaRecordByApproved;
exports.updateCeaRecord = updateCeaRecord;
exports.createCeaRecord = createCeaRecord;
