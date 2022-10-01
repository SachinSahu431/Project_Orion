const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const accountsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

accountsSchema.plugin(passportLocalMongoose);
const accounts = mongoose.model("accounts", accountsSchema);
module.exports = accounts;
