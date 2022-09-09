const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const faculty = require("../models/facultyData");

const getFacultyRecordById = async (req, res, next) => {
  const facultyId = req.params.bid;

  let facultyRecord;
  try {
    facultyRecord = await faculty.findById(facultyId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.toObject({ getters: true }),
  });
};

const getFacultyRecordByName = async (req, res, next) => {
  const name = req.params.name;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided name.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};
const getFacultyRecordByEmail = async (req, res, next) => {
  const email = req.params.email;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided email.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};
const getFacultyRecordByPhone = async (req, res, next) => {
  const phone = req.params.phone;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ phone: phone });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};

const getFacultyRecordByGender = async (req, res, next) => {
  const gender = req.params.gender;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ gender: gender });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided gender.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};

const getFacultyRecordByDepartment = async (req, res, next) => {
  const department = req.params.department;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ department: department });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided department.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};

const getFacultyRecordByFacultyType = async (req, res, next) => {
  const facultyType = req.params.facultyType;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ facultyType: facultyType });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided faculty type.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};

const getFacultyRecordByUserType = async (req, res, next) => {
  const userType = req.params.userType;
  let facultyRecord;
  try {
    facultyRecord = await faculty.find({ userType: userType });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!facultyRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided user type.",
      404
    );
    return next(error);
  }

  res.json({
    facultyRecord: facultyRecord.map((facultyRecord) =>
      facultyRecord.toObject({ getters: true })
    ),
  });
};

const createFacultyRecord = async (req, res, next) => {
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
    address,
    gender,
    dateOfBirth,
    maritalStatus,
    bio,
    education,
    department,
    facultyType,
    password,
    confirmPassword,
    userType,
  } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !gender ||
    !dateOfBirth ||
    !maritalStatus ||
    !bio ||
    !education ||
    !department ||
    !facultyType ||
    !password ||
    !confirmPassword ||
    !userType
  ) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  if (password !== confirmPassword) {
    return res
      .status(422)
      .json({ error: "Password and confirm password are not same" });
  }
  try {
    const recordExist = await faculty.findOne({ email: email });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new faculty({
        name,
        email,
        phone,
        address,
        gender,
        dateOfBirth,
        maritalStatus,
        bio,
        education,
        department,
        facultyType,
        password,
        confirmPassword,
        userType,
      });

      await record.save();
      res.status(200).json({ facultyRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getFacultyRecordById = getFacultyRecordById;
exports.getFacultyRecordByName = getFacultyRecordByName;
exports.getFacultyRecordByEmail = getFacultyRecordByEmail;
exports.getFacultyRecordByPhone = getFacultyRecordByPhone;
exports.getFacultyRecordByGender = getFacultyRecordByGender;
exports.getFacultyRecordByDepartment = getFacultyRecordByDepartment;
exports.getFacultyRecordByFacultyType = getFacultyRecordByFacultyType;
exports.getFacultyRecordByUserType = getFacultyRecordByUserType;
exports.createFacultyRecord = createFacultyRecord;
