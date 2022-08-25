const mongoose = require("mongoose");

const performanceRecordSchema = new mongoose.Schema({
  performanceuniqueid: {
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
  // below details have to be rated on a scale of 1 to 5
  jobKnowledge: {
    type: Number,
    required: true,
  },
  workQuality: {
    type: Number,
    required: true,
  },
  workQuantity: {
    type: Number,
    required: true,
  },
  reliability: {
    type: Number,
    required: true,
  },
  initiative: {
    type: Number,
    required: true,
  },
  creativity: {
    type: Number,
    required: true,
  },
  judgement: {
    type: Number,
    required: true,
  },
  cooperation: {
    type: Number,
    required: true,
  },
  socialSkills: {
    type: Number,
    required: true,
  },
  decisionMaking: {
    type: Number,
    required: true,
  },
  overallRating: {
    type: Number,
    required: true,
  },
  otherInfo: {
    type: String,
    required: true,
  },
});

const performanceRecord = mongoose.model(
  "performance",
  performanceRecordSchema
);
module.exports = performanceRecord;
