import express from "express";

import {
  requireAdminSignIn,
  requireSignIn,
} from "../middlewares/authMiddleware.js";
import {
  getBankPaymentController,
  getMobilePaymentController,
} from "../controllers/paymentController.js";
const router = express.Router();

router.post(
  "/get-mobile-payment-method",
  requireSignIn,
  getMobilePaymentController
);
router.post(
  "/get-bank-payment-method",
  requireSignIn,
  getBankPaymentController
);

//admin

export default router;
