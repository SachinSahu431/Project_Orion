const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const forms = require("../models/forms");
const Recruitment = require("../models/recruitmentData");

const getFormByName = async (req, res, next) => {
  const formName = req.params.formName;
  let formsRecord;
  try {
    formsRecord = await forms.find({ formName: formName });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find forms Record",
      500
    );
    return next(error);
  }

  if (!formsRecord) {
    const error = new HttpError(
      "Could not find a forms Record for the provided form name.",
      404
    );
    return next(error);
  }

  res.json({
    formsRecord: formsRecord.map((formsRecord) =>
      formsRecord.toObject({ getters: true })
    ),
  });
};

const updateFormByName = async (req, res, next) => {
  const formName = "FacultyRecruitment";
  const {
    name,
    schemaType,
    required,
    frontend,
    label,
    placeholder,
    type,
    valid,
    invalid,
    formText,
  } = req.body;

  console.log(req.body);

  let formsRecord;
  try {
    formsRecord = await forms.findOne({
      formName: "FacultyRecruitment",
    });
    formsRecord.name = [...formsRecord.name, name];
    formsRecord.schemaType = [...formsRecord.schemaType, schemaType];
    formsRecord.required = [...formsRecord.required, required];
    formsRecord.frontend = [...formsRecord.frontend, frontend];
    formsRecord.label = [...formsRecord.label, label];
    formsRecord.placeholder = [...formsRecord.placeholder, placeholder];
    formsRecord.type = [...formsRecord.type, type];

    await formsRecord.save();

    res
      .status(200)
      .json({ formsRecord: formsRecord.toObject({ getters: true }) });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find forms Record",
      500
    );
    return next(error);
  }
};

exports.getFormByName = getFormByName;
exports.updateFormByName = updateFormByName;
