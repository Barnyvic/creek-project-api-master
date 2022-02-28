const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    dateofbirth: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    stateoforigin: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const student = new mongoose.model("Student", studentSchema);

module.exports = student;
