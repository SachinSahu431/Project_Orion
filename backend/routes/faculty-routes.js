const express = require("express");
const facultyControllers = require("../controllers/faculty-controllers");

const router = express.Router();

router.get("/:bid", facultyControllers.getFacultyRecordById);

router.get("/name/:name", facultyControllers.getFacultyRecordByName);

router.get("/email/:email", facultyControllers.getFacultyRecordByEmail);

router.get("/phone/:phone", facultyControllers.getFacultyRecordByPhone);
router.get("/gender/:gender", facultyControllers.getFacultyRecordByGender);
router.get(
  "/department/:department",
  facultyControllers.getFacultyRecordByDepartment
);
router.get(
  "/facultyType/:facultyType",
  facultyControllers.getFacultyRecordByFacultyType
);
router.get(
  "/userType/:userType",
  facultyControllers.getFacultyRecordByUserType
);

router.post("/create", facultyControllers.createFacultyRecord);

module.exports = router;
