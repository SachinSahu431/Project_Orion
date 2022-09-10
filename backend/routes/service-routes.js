const express = require("express");
const serviceControllers = require("../controllers/service-controllers");

const router = express.Router();

router.get("/:bid", serviceControllers.getServiceRecordById);

router.get("/name/:name", serviceControllers.getServiceRecordByName);

router.get("/email/:email", serviceControllers.getServiceRecordByEmail);

router.get("/phone/:phone", serviceControllers.getServiceRecordByPhone);

router.post("/create", serviceControllers.createServiceRecord);

module.exports = router;
