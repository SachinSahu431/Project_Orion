const express = require("express");
const propertyControllers = require("../controllers/property-controllers");

const router = express.Router();

router.get("/:bid", propertyControllers.getPropertyRecordById);

router.get("/name/:name", propertyControllers.getPropertyRecordByName);

router.get("/email/:email", propertyControllers.getPropertyRecordByEmail);

router.get("/phone/:phone", propertyControllers.getPropertyRecordByPhone);

router.post("/create", propertyControllers.createPropertyRecord);

module.exports = router;
