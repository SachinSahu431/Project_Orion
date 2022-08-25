const mongoose = require("mongoose");

const paymentManagementSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  leaveEncashment: {
    type: Number,
  },
  ltc: {
    type: Number,
  },
  temporaryAdvances: {
    type: Number,
  },
  medicalReimbusement: {
    type: Number,
  }, // take the proof from medical Records Schema
  travelReimbusement: {
    type: Number,
  },
  travelReimbusementFile: {
    type: Buffer,
  },
  travelReimbusementFilename: {
    type: String,
  },
  otherReimbusements: {
    type: Number,
  },
});

const paymentRecord = mongoose.model("payment", paymentManagementSchema);
module.exports = paymentRecord;
