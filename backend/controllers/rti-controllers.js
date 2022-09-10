const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const rti = require("../models/rtiEnquiries");

const getRtiRecordById = async (req, res, next) => {
  const rtiId = req.params.bid;

  let rtiRecord;
  try {
    rtiRecord = await rti.findById(rtiId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    rtiRecord: rtiRecord.toObject({ getters: true }),
  });
};

const getRtiRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let rtiRecord;
  try {
    rtiRecord = await rti.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    rtiRecord: rtiRecord.map((rtiRecord) =>
      rtiRecord.toObject({ getters: true })
    ),
  });
};
const getRtiRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let rtiRecord;
  try {
    rtiRecord = await rti.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    rtiRecord: rtiRecord.map((rtiRecord) =>
      rtiRecord.toObject({ getters: true })
    ),
  });
};
const getRtiRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let rtiRecord;
  try {
    rtiRecord = await rti.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    rtiRecord: rtiRecord.map((rtiRecord) =>
      rtiRecord.toObject({ getters: true })
    ),
  });
};

const getRtiRecordByQueryType = async (req, res, next) => {
  const type = req.params.type;
  let rtiRecord;
  try {
    rtiRecord = await rti.find({ queryType: type });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided query type.",
      404
    );
    return next(error);
  }

  res.json({
    rtiRecord: rtiRecord.map((rtiRecord) =>
      rtiRecord.toObject({ getters: true })
    ),
  });
};

const updateRtiRecord = async (req, res, next) => {
  const { email, rtiQuery, queryResponse } = req.body;
  let rtiRecord;
  try {
    rtiRecord = await rti.find({ rtiQuery: rtiQuery, email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find rti Record",
      500
    );
    return next(error);
  }

  if (!rtiRecord) {
    const error = new HttpError(
      "Could not find a rti Record for the provided query.",
      404
    );
    return next(error);
  }

  const result = await rti.updateOne(
    { rtiQuery: rtiQuery, email: email },
    {
      $set: {
        queryResponse: queryResponse,
      },
    }
  );
  console.log(result);

  rtiRecord = await rti.find({ email: email, rtiQuery: rtiQuery });
  res.json({
    rtiRecord: rtiRecord.map((rtiRecord) =>
      rtiRecord.toObject({ getters: true })
    ),
  });
};

const createRtiRecord = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, phone, rtiQuery, queryType } = req.body;

  if (!name || !email || !phone || !rtiQuery || !queryType) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  const queryResponse = "";

  try {
    const recordExist = await rti.findOne({ rtiQuery: rtiQuery });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new rti({
        name,
        email,
        phone,
        rtiQuery,
        queryType,
        queryResponse,
      });

      await record.save();
      res.status(200).json({ rtiRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getRtiRecordById = getRtiRecordById;
exports.getRtiRecordByName = getRtiRecordByName;
exports.getRtiRecordByEmail = getRtiRecordByEmail;
exports.getRtiRecordByPhone = getRtiRecordByPhone;
exports.getRtiRecordByQueryType = getRtiRecordByQueryType;
exports.updateRtiRecord = updateRtiRecord;
exports.createRtiRecord = createRtiRecord;
