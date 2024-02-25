import express from "express";

const router = express.Router();

import {
  requireAdminSignIn,
  requireSignIn,
} from "../middlewares/authMiddleware.js";
import {
  addSettingsController,
  getSettingsController,
} from "../controllers/settingsController.js";

router.post("/get-settings-by-user", requireSignIn, getSettingsController);

router.post("/add-settings", requireAdminSignIn, addSettingsController);
export default router;
