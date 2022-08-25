const mongoose = require("mongoose");

const ceaAllowanceSchema = new mongoose.Schema({
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
  childName1: {
    type: String,
    required: true,
  },
  monthlyCeaDemanded1: {
    type: Number,
    required: true,
  },
  numberOfMonthsDemanded1: {
    type: Number,
    required: true,
  },
  childName2: {
    type: String,
  },
  monthlyCeaDemanded2: {
    type: Number,
  },
  numberOfMonthsDemanded2: {
    type: Number,
  },
  //stored by the financialDept
  approvedOrNot: {
    type: Boolean,
  },
  amountApproved: {
    type: Number,
  },
  incomeTaxDeducted: {
    type: Number,
  },
});

const cea = mongoose.model("cea", ceaAllowanceSchema);
module.exports = cea;
