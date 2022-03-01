const mongoose = require("mongoose");
const RegistrationSchema = new mongoose.Schema(
  {
    firstnameandlastname: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Pleaseselect: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const register = new mongoose.model("Register", RegistrationSchema);
module.exports = register;
