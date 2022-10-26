const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true,
  },
  name: [
    {
      type: String,
    },
  ],
  schemaType: [
    {
      type: String,
    },
  ],
  required: [
    {
      type: Boolean,
    },
  ],
  frontend: [
    {
      type: Boolean,
    },
  ],
  label: [
    {
      type: String,
    },
  ],
  placeholder: [
    {
      type: String,
    },
  ],
  type: [
    {
      type: String,
    },
  ],
  valid: [
    {
      type: String,
    },
  ],
  invalid: [
    {
      type: String,
    },
  ],
  formText: [
    {
      type: String,
    },
  ],
});

const forms = mongoose.model("forms", formsSchema);
module.exports = forms;
