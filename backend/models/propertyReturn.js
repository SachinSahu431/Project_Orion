const mongoose = require("mongoose");

const propertyReturnSchema = new mongoose.Schema({
  propertyuniqueid: {
    type: String,
    required: true,
  },
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
  propertyReturnFile: {
    type: Buffer,
  },
  filename: {
    type: String,
  },
});

const propertyReturn = mongoose.model("property", propertyReturnSchema);
module.exports = propertyReturn;
