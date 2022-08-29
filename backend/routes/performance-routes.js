const express = require("express");
const performanceControllers = require("../controllers/performance-controllers");

const router = express.Router();

router.get("/:bid", performanceControllers.getPerformanceRecordById);

router.get("/name/:name", performanceControllers.getPerformanceRecordByName);

router.get("/email/:email", performanceControllers.getPerformanceRecordByEmail);

router.get("/phone/:phone", performanceControllers.getPerformanceRecordByPhone);

router.post("/create", performanceControllers.createPerformanceRecord);

module.exports = router;
