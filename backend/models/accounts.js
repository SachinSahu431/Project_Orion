const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const accountsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  accounttype: {
    type: String,
    enum: ["admin", "faculty", "root"],
    default: "faculty",
  },
  password: {
    type: String,
  },
});

accountsSchema.plugin(passportLocalMongoose);
const accounts = mongoose.model("accounts", accountsSchema);
module.exports = accounts;
