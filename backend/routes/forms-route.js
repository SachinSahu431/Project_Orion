const express = require("express");
const formsControllers = require("../controllers/forms-controllers");

const router = express.Router();

router.get("/:formName", formsControllers.getFormByName);
router.post("/custom", formsControllers.updateFormByName);
module.exports = router;
