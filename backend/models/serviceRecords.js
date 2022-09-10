const mongoose = require("mongoose");

const serviceRecordSchema = new mongoose.Schema({
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
  eServiceRecord: [
    {
      record: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
    },
  ],
});

const serviceRecord = mongoose.model("service", serviceRecordSchema);
module.exports = serviceRecord;
