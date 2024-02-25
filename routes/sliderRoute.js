import express from "express";

import {
  addSliderImageController,
  getSliderImageController,
} from "../controllers/sliderController.js";
import {
  isReseller,
  requireAdminSignIn,
  requireSignIn,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/get-slider-images", requireSignIn, getSliderImageController);

//admin
router.post("/add-slider-images", requireAdminSignIn, addSliderImageController);

export default router;
