const express = require("express");
const rtiControllers = require("../controllers/rti-controllers");

const router = express.Router();

router.get("/:bid", rtiControllers.getRtiRecordById);

router.get("/name/:name", rtiControllers.getRtiRecordByName);

router.get("/email/:email", rtiControllers.getRtiRecordByEmail);

router.get("/phone/:phone", rtiControllers.getRtiRecordByPhone);

router.get("/type/:type", rtiControllers.getRtiRecordByQueryType);

router.put("/update", rtiControllers.updateRtiRecord);

router.post("/create", rtiControllers.createRtiRecord);

module.exports = router;
