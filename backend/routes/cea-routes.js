const express = require("express");
const ceaControllers = require("../controllers/cea-controllers");

const router = express.Router();

router.get("/:bid", ceaControllers.getCeaRecordById);

router.get("/name/:name", ceaControllers.getCeaRecordByName);

router.get("/email/:email", ceaControllers.getCeaRecordByEmail);

router.get("/phone/:phone", ceaControllers.getCeaRecordByPhone);

router.get("/approved/:approved", ceaControllers.getCeaRecordByApproved);

router.put("/update", ceaControllers.updateCeaRecord);

router.post("/create", ceaControllers.createCeaRecord);

module.exports = router;
