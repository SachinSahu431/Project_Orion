const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  facultyType: {
    type: String,
    required: true,
  }, // to identify whether the faculty is visiting / guest/ permanent
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  }, // this will store whether the faculty or user is faculty / management / financial
  // this can be used to distinguish between the admin and non-admin accounts
});

const Faculty = mongoose.model("faculty", facultySchema);
module.exports = Faculty;
