const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const recruitment = require("../models/recruitmentData");
const nodemailer = require("nodemailer");

const getRecruitmentDataByDepartment = async (req, res, next) => {
  const department = req.params.department;
  let recruitmentRecord;
  try {
    recruitmentRecord = await recruitment.find({
      department: department,
      isRecruited: false,
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  if (!recruitmentRecord) {
    const error = new HttpError(
      "Could not find a faculty Record for the provided phone number.",
      404
    );
    return next(error);
  }

  res.json({
    recruitmentRecord: recruitmentRecord.map((recruitmentRecord) =>
      recruitmentRecord.toObject({ getters: true })
    ),
  });
};

const recruitFail = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let recruitmentRecord;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "orionteam5.tech@gmail.com",
      pass: "lxmagyvbypwiivbd",
    },
  });

  try {
    recruitmentRecord = await recruitment.findById(id);

    var mailOptions = {
      from: "orionteam5.tech@gmail.com",
      to: "orionteam5.tech@gmail.com",
      subject: "Regret Message",
      text: "Sorry to inform you that you are not selected Thanks for applying --- Team Orion",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    await recruitmentRecord.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  res.json({
    recruitmentRecord: recruitmentRecord.toObject({ getters: true }),
  });
};

const recruitSuccess = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let recruitmentRecord;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "orionteam5.tech@gmail.com",
      pass: "lxmagyvbypwiivbd",
    },
  });

  try {
    recruitmentRecord = await recruitment.findById(id);
    recruitmentRecord.isRecruited = true;

    var mailOptions = {
      from: "orionteam5.tech@gmail.com",
      to: "orionteam5.tech@gmail.com",
      subject: "Congratulations",
      text: "It is our pleasure to add you",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    await recruitmentRecord.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find faculty Record",
      500
    );
    return next(error);
  }

  res.json({
    recruitmentRecord: recruitmentRecord.toObject({ getters: true }),
  });
};

const createRecruitmentRecord = async (req, res, next) => {
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
    dateOfBirth,
    bio,
    qualification,
    department,
    yearsOfExperience,
    resume,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !dateOfBirth ||
    !bio ||
    !qualification ||
    !department ||
    !yearsOfExperience ||
    !resume
  ) {
    return res.status(422).json({ error: "Please fill everything properly" });
  }

  try {
    const recordExist = await recruitment.findOne({ email: email });

    if (recordExist) {
      return res.status(500).json({ message: "Record already exists" });
    } else {
      const record = new recruitment({
        name,
        email,
        phone,

        dateOfBirth,

        bio,
        qualification,
        department,

        yearsOfExperience,
        resume,
      });

      await record.save();
      res.status(200).json({ facultyRecord: record });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getRecruitmentDataByDepartment = getRecruitmentDataByDepartment;
exports.createRecruitmentRecord = createRecruitmentRecord;
exports.recruitSuccess = recruitSuccess;
exports.recruitFail = recruitFail;
