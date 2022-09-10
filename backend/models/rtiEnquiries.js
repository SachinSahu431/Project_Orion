const mongoose = require("mongoose");

const rtiEnquirySchema = new mongoose.Schema({
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
  rtiQuery: {
    type: String,
    required: true,
  }, // query description
  queryType: {
    type: String,
    required: true,
  }, // whether administrative, financial, medical etc.
  queryResponse: {
    type: String,
  },
});

const rtiEnquiry = mongoose.model("rti", rtiEnquirySchema);
module.exports = rtiEnquiry;
