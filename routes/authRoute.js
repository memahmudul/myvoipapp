import express from "express";
import {
  loginController,
  registerController,
  registerFirstPageController,
  confirmPinController,
  changePasswordController,
  changePinController,
} from "../controllers/authController.js";
import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();
//routing
//Register || METHOD  POST
router.post("/register", registerController);
router.post("/register-first-page", registerFirstPageController);

//login
router.post("/login", loginController);
router.post("/confirmpin", confirmPinController);

router.post("/changePassword", requireSignIn, changePasswordController);
router.post("/changePin", requireSignIn, changePinController);

//test route
router.get("/test", requireSignIn, isReseller, (req, res) => {
  res.status(200).send({
    message: "testing",
  });
});

//admin auth
export default router;
