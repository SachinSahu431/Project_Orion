const express = require("express");
const medicalControllers = require("../controllers/medical-controllers");

const router = express.Router();

router.get("/:bid", medicalControllers.getMedicalRecordById);

router.get("/name/:name", medicalControllers.getMedicalRecordByName);

router.get("/email/:email", medicalControllers.getMedicalRecordByEmail);

router.get("/phone/:phone", medicalControllers.getMedicalRecordByPhone);

router.post("/create", medicalControllers.createMedicalRecord);

module.exports = router;
