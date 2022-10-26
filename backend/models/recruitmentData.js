const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  isRecruited: {
    type: Boolean,
    default: false,
  },
  other: [mongoose.Schema.Types.Mixed],
});

const Recruitment = mongoose.model("recruitment", recruitmentSchema);
module.exports = Recruitment;
