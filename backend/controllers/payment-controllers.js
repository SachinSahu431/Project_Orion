const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const payment = require("../models/paymentManagement");

const getPaymentRecordById = async (req, res, next) => {
  const paymentId = req.params.bid;

  let paymentRecord;
  try {
    paymentRecord = await payment.findById(paymentId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    paymentRecord: paymentRecord.toObject({ getters: true }),
  });
};

const getPaymentRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let paymentRecord;
  try {
    paymentRecord = await payment.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    paymentRecord: paymentRecord.map((paymentRecord) =>
      paymentRecord.toObject({ getters: true })
    ),
  });
};
const getPaymentRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let paymentRecord;
  try {
    paymentRecord = await payment.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    paymentRecord: paymentRecord.map((paymentRecord) =>
      paymentRecord.toObject({ getters: true })
    ),
  });
};
const getPaymentRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let paymentRecord;
  try {
    paymentRecord = await payment.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    paymentRecord: paymentRecord.map((paymentRecord) =>
      paymentRecord.toObject({ getters: true })
    ),
  });
};

const getPaymentRecordByApproved = async (req, res, next) => {
  const approved = req.params.approved;
  let paymentRecord;
  try {
    paymentRecord = await payment.find({ approvedOrNot: approved });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided approval status.",
      404
    );
    return next(error);
  }

  res.json({
    paymentRecord: paymentRecord.map((paymentRecord) =>
      paymentRecord.toObject({ getters: true })
    ),
  });
};

const updatePaymentRecord = async (req, res, next) => {
  const { email, approvedOrNot, amountApproved } = req.body;
  let paymentRecord;
  try {
    paymentRecord = await payment.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find payment Record",
      500
    );
    return next(error);
  }

  if (!paymentRecord) {
    const error = new HttpError(
      "Could not find a payment Record for the provided email.",
      404
    );
    return next(error);
  }

  const result = await payment.updateOne(
    { email: email },
    {
      $set: {
        amountApproved: amountApproved,
        approvedOrNot: approvedOrNot,
      },
    }
  );
  console.log(result);

  paymentRecord = await payment.find({ email: email });
  res.json({
    paymentRecord: paymentRecord.map((paymentRecord) =>
      paymentRecord.toObject({ getters: true })
    ),
  });
};

const createPaymentRecord = async (req, res, next) => {
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
    gender,
    dateOfBirth,
    leaveEncashment,
    ltc,
    temporaryAdvances,
    medicalReimbusement,
    travelReimbusement,
    medicalReimbusementFile,
    otherReimbusements,
  } = req.body;

  const approvedOrNot = false;
  const amountApproved = 0;

  if (!name || !email || !phone || !gender || !dateOfBirth) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await payment.findOne({ email: email });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new payment({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        leaveEncashment,
        ltc,
        temporaryAdvances,
        medicalReimbusement,
        travelReimbusement,
        medicalReimbusementFile,
        otherReimbusements,
        approvedOrNot,
        amountApproved,
      });

      await record.save();
      res.status(200).json({ paymentRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getPaymentRecordById = getPaymentRecordById;
exports.getPaymentRecordByName = getPaymentRecordByName;
exports.getPaymentRecordByEmail = getPaymentRecordByEmail;
exports.getPaymentRecordByPhone = getPaymentRecordByPhone;
exports.getPaymentRecordByApproved = getPaymentRecordByApproved;
exports.updatePaymentRecord = updatePaymentRecord;
exports.createPaymentRecord = createPaymentRecord;
