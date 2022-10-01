const express = require("express");
const recruitmentControllers = require("../controllers/recruitment-controllers");

const router = express.Router();

router.get(
  "/department/:department",
  recruitmentControllers.getRecruitmentDataByDepartment
);

router.get("/success/:id", recruitmentControllers.recruitSuccess);
router.get("/fail/:id", recruitmentControllers.recruitFail);

router.post("/create", recruitmentControllers.createRecruitmentRecord);

module.exports = router;
