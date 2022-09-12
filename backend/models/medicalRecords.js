const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
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
  medicalHistory: [
    {
      diagnosis: {
        type: String,
      },
      referredPhysician: {
        type: String,
      },
      referredClinic: {
        type: String,
      },
      date: {
        type: String,
      },
      severity: {
        type: String,
      },
      otherInfo: {
        type: String,
      },
      paymentAmount: {
        type: Number,
      },
      medicalFile: {
        type: String,
      },
    },
  ],
});

const medicalRecord = mongoose.model("medical", medicalRecordSchema);
module.exports = medicalRecord;
