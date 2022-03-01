const express = require("express");
const Students = require("../models/studentmodel");
const Registers = require("../models/Registrationmodal");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");

router.use(express.json());
router.use(
  cors({
    origin: "*",
  })
);

router.get("/", async (req, res) => {
  res.status(200).json({ msg: "Welcome to Creek Backend" });
});

//using get request to database
router.get("/students", async (req, res) => {
  const student = await Students.find();

  res.status(200).json(student);
});

//using post request to database

router.post("/student", async (req, res) => {
  const {
    firstname,
    middlename,
    lastname,
    dateofbirth,
    education,
    gender,
    stateoforigin,
    local,
    email,
    phonenumber,
    address,
  } = req.body;

  const newStudent = new Students({
    firstname,
    middlename,
    lastname,
    dateofbirth,
    education,
    gender,
    stateoforigin,
    local,
    email,
    phonenumber,
    address,
  });

  await newStudent.save();

  return res.status(200).json({
    msg: "registration successful",
  });
});

router.post("/registeration", async (req, res) => {
  const { firstnameandlastname, Email, Pleaseselect, password } = req.body;
  const newRegister = new Registers({
    firstnameandlastname,
    Email,
    Pleaseselect,
    password,
  });
  await newRegister.save();
  return res.status(200).json({
    msg: "registration successful",
  });
});

module.exports = router;
