import express from "express";
const router = express.Router();
import {
  getFcmTokenOfAUserController,
  getFcmTokenOfAdminController,
  getFcmTokenOfAllUserController,
  registerFcmTokenControllerforAdmin,
  registerFcmTokenControllerforUser,
  updateFcmTokenControllerforAdmin,
  updateFcmTokenControllerforUser,
} from "../controllers/pushNotificationController.js";
import {
  requireAdminSignIn,
  requireSignIn,
} from "../middlewares/authMiddleware.js";

router.post("/register", registerFcmTokenControllerforUser);
router.post("/update", updateFcmTokenControllerforUser);

router.post("/register-admin", registerFcmTokenControllerforAdmin);
router.post("/update-admin", updateFcmTokenControllerforAdmin);

router.post(
  "/get-fcm-token-of-a-user",
  requireAdminSignIn,
  getFcmTokenOfAUserController
);

router.post(
  "/get-fcm-token-of-all-user",
  requireAdminSignIn,
  getFcmTokenOfAllUserController
);

router.post(
  "/get-fcm-token-of-admin",
  requireSignIn,
  getFcmTokenOfAdminController
);

export default router;
