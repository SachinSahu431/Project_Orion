const mongoose = require("mongoose");

const trainingRecordSchema = new mongoose.Schema({
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
  trainingHistory: [
    {
      trainingName: {
        type: String,
      },
      trainingInstitute: {
        type: String,
      },
      trainingDomain: {
        type: String,
      }, // whether technical, social, teaching, etc.
      trainingYear: {
        type: Number,
      },
      otherInfo: {
        type: String,
      },
      paymentAmount: {
        type: Number,
      },
      timesTaken: {
        type: Number,
      },
    },
  ],
});

const trainingRecord = mongoose.model("training", trainingRecordSchema);
module.exports = trainingRecord;
