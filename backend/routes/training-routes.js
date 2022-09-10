const express = require("express");
const trainingControllers = require("../controllers/training-controllers");

const router = express.Router();

router.get("/:bid", trainingControllers.getTrainingRecordById);

router.get("/name/:name", trainingControllers.getTrainingRecordByName);

router.get("/email/:email", trainingControllers.getTrainingRecordByEmail);

router.get("/phone/:phone", trainingControllers.getTrainingRecordByPhone);

router.post("/create", trainingControllers.createTrainingRecord);

module.exports = router;
