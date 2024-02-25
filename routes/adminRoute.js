import express from "express";

import {
  requireAdminSignIn,
  requireSignIn,
} from "../middlewares/authMiddleware.js";
import {
  getAdminEmailController,
  loginController,
  registerController,
} from "../controllers/admin/authController.js";
import {
  editBalanceController,
  addBalanceController,
  getBalanceRequestListController,
} from "../controllers/admin/balanceController.js";

import {
  addCommissionController,
  editCommissionController,
  getCommissionController,
} from "../controllers/comissionControler.js";
import {
  addSliderImageController,
  deleteSliderImageController,
  getSliderImageController,
} from "../controllers/sliderController.js";
import {
  deleteUserController,
  getAllUserController,
  getSingleUserController,
} from "../controllers/admin/userController.js";
import {
  fetchAllBankingOrderController,
  fetchAllBillPayOrderController,
  fetchAllMobileBankingOrderController,
  fetchAllOfferOrderController,
  fetchAllRechargeOrderController,
} from "../controllers/admin/orderController.js";
import {
  addNewOfferController,
  deleteAnOfferController,
  getAllOfferByAdminController,
  getAllOfferController,
} from "../controllers/offerController.js";
import {
  addNotificationController,
  deleteNotificationController,
  getAllNotificationController,
} from "../controllers/admin/notificationController.js";
import {
  addBankPaymentController,
  addMobilePaymentController,
  deleteABankPaymentController,
  deleteAMobilePaymentController,
  getAllBankPaymentController,
  getAllMobilePaymentController,
} from "../controllers/admin/paymentController.js";
import { addRateController, deleteRateController, getAllRate } from "../controllers/admin/rateController.js";

//router object
const router = express.Router();
//routing
//Register || METHOD  POST
router.post("/register", registerController);

//login
router.post("/login", loginController);

router.post("/add-balance-to-user", requireAdminSignIn, addBalanceController);
router.post("/edit-user-balance", requireAdminSignIn, editBalanceController);

// router.post('/edit-first-payment-method',requireAdminSignIn,editFirstPaymentController)
// router.post('/edit-second-payment-method',requireAdminSignIn,editSecondPaymentController)
// router.post('/edit-third-payment-method',requireAdminSignIn,editThirdPaymentController)

// router.post('/add-all-payment-method',addPaymentController)

router.post(
  "/add-mobile-payment-method",
  requireAdminSignIn,

  addMobilePaymentController
);
router.post(
  "/add-bank-payment-method",
  requireAdminSignIn,

  addBankPaymentController
);

router.post(
  "/get-all-mobile-payment-method",
  requireAdminSignIn,

  getAllMobilePaymentController
);

router.post(
  "/delete-mobile-payment-method",
  requireAdminSignIn,

  deleteAMobilePaymentController
);

router.post(
  "/get-all-bank-payment-method",
  requireAdminSignIn,

  getAllBankPaymentController
);

router.post(
  "/delete-bank-payment-method",
  requireAdminSignIn,

  deleteABankPaymentController
);

router.post("/edit-commission", requireAdminSignIn, editCommissionController);
router.post("/get-commission", requireAdminSignIn, getCommissionController);

router.post(
  "/add-a-slider-image",
  requireAdminSignIn,
  addSliderImageController
);
router.post("/get-slider-images", requireAdminSignIn, getSliderImageController);
router.post(
  "/delete-a-slider-image",
  requireAdminSignIn,
  deleteSliderImageController
);

router.post("/get-all-users", requireAdminSignIn, getAllUserController);
router.post("/get-single-user", requireAdminSignIn, getSingleUserController);
router.post("/delete-user", requireAdminSignIn, deleteUserController);

router.post(
  "/get-all-mobile-banking-order",
  requireAdminSignIn,
  fetchAllMobileBankingOrderController
);
router.post(
  "/get-all-banking-order",
  requireAdminSignIn,
  fetchAllBankingOrderController
);
router.post(
  "/get-all-bill-pay-order",
  requireAdminSignIn,
  fetchAllBillPayOrderController
);
router.post(
  "/get-all-recharge-order",
  requireAdminSignIn,
  fetchAllRechargeOrderController
);
router.post(
  "/get-all-offer-order",
  requireAdminSignIn,
  fetchAllOfferOrderController
);

router.post(
  "/get-all-offers",
  requireAdminSignIn,
  getAllOfferByAdminController
);

router.post("/add-new-offer", requireAdminSignIn, addNewOfferController);

router.post("/delete-an-offers", requireAdminSignIn, deleteAnOfferController);

router.post("/add-notification", requireAdminSignIn, addNotificationController);
router.post(
  "/get-all-notification-by-user",
  requireSignIn,
  getAllNotificationController
);
router.post(
  "/get-all-notification",
  requireAdminSignIn,
  getAllNotificationController
);
router.post(
  "/delete-notification",
  requireAdminSignIn,
  deleteNotificationController
);

router.post("/get-admin-email", getAdminEmailController);


router.post("/add-new-rate", requireAdminSignIn, addRateController);
router.post(
  "/get-all-rate",
  requireAdminSignIn,
  getAllRate
);

router.post("/delete-a-rate", requireAdminSignIn, deleteRateController);

router.post("/get-all-rate-by-user", requireSignIn, getAllRate);




export default router;
