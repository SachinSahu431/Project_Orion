const express = require("express");
const paymentControllers = require("../controllers/payment-controllers");

const router = express.Router();

router.get("/:bid", paymentControllers.getPaymentRecordById);

router.get("/name/:name", paymentControllers.getPaymentRecordByName);

router.get("/email/:email", paymentControllers.getPaymentRecordByEmail);

router.get("/phone/:phone", paymentControllers.getPaymentRecordByPhone);
router.get(
  "/approved/:approved",
  paymentControllers.getPaymentRecordByApproved
);
router.put("/update", paymentControllers.updatePaymentRecord);

router.post("/create", paymentControllers.createPaymentRecord);

module.exports = router;
