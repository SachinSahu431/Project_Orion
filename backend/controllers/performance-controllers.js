const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const performance = require("../models/performanceRecords");

const getPerformanceRecordById = async (req, res, next) => {
  const performanceId = req.params.bid;

  let performanceRecord;
  try {
    performanceRecord = await performance.findById(performanceId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find performance Record",
      500
    );
    return next(error);
  }

  if (!performanceRecord) {
    const error = new HttpError(
      "Could not find a performance Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    performanceRecord: performanceRecord.toObject({ getters: true }),
  });
};

const getPerformanceRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let performanceRecord;
  try {
    performanceRecord = await performance.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find performance Record",
      500
    );
    return next(error);
  }

  if (!performanceRecord) {
    const error = new HttpError(
      "Could not find a performance Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    performanceRecord: performanceRecord.map((performanceRecord) =>
      performanceRecord.toObject({ getters: true })
    ),
  });
};
const getPerformanceRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let performanceRecord;
  try {
    performanceRecord = await performance.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find performance Record",
      500
    );
    return next(error);
  }

  if (!performanceRecord) {
    const error = new HttpError(
      "Could not find a performance Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    performanceRecord: performanceRecord.map((performanceRecord) =>
      performanceRecord.toObject({ getters: true })
    ),
  });
};
const getPerformanceRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let performanceRecord;
  try {
    performanceRecord = await performance.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find performance Record",
      500
    );
    return next(error);
  }

  if (!performanceRecord) {
    const error = new HttpError(
      "Could not find a performance Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    performanceRecord: performanceRecord.map((performanceRecord) =>
      performanceRecord.toObject({ getters: true })
    ),
  });
};

const createPerformanceRecord = async (req, res, next) => {
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
    jobKnowledge,
    workQuality,
    workQuantity,
    reliability,
    initiative,
    creativity,
    judgement,
    cooperation,
    socialSkills,
    decisionMaking,
    overallRating,
    otherInfo,
  } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !gender ||
    !dateOfBirth ||
    !jobKnowledge ||
    !workQuality ||
    !workQuantity ||
    !reliability ||
    !initiative ||
    !creativity ||
    !judgement ||
    !cooperation ||
    !socialSkills ||
    !decisionMaking ||
    !overallRating ||
    !otherInfo
  ) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await performance.findOne({ email: email });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new performance({
        name,
        email,
        phone,
        gender,
        dateOfBirth,
        jobKnowledge,
        workQuality,
        workQuantity,
        reliability,
        initiative,
        creativity,
        judgement,
        cooperation,
        socialSkills,
        decisionMaking,
        overallRating,
        otherInfo,
      });

      await record.save();
      res.status(200).json({ performanceRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getPerformanceRecordById = getPerformanceRecordById;
exports.getPerformanceRecordByName = getPerformanceRecordByName;
exports.getPerformanceRecordByEmail = getPerformanceRecordByEmail;
exports.getPerformanceRecordByPhone = getPerformanceRecordByPhone;
exports.createPerformanceRecord = createPerformanceRecord;
