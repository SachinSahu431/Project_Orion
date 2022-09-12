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
  },
  dateOfBirth: {
    type: String,
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
  medicalReimbusementFile: {
    type: String,
  },
  otherReimbusements: {
    type: Number,
  },
  approvedOrNot: {
    type: Boolean,
  },
  amountApproved: {
    type: Number,
  },
});

const paymentRecord = mongoose.model("payment", paymentManagementSchema);
module.exports = paymentRecord;
