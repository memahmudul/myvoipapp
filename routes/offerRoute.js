import express from "express";
import { getAllOfferController,addNewOfferController } from "../controllers/offerController.js";
import { placeOfferOrderController } from "../controllers/orderController.js";

import { isReseller, requireAdminSignIn, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router()


router.post('/get-all-offers',requireSignIn,getAllOfferController)
router.post('/place-offer-order',requireSignIn,placeOfferOrderController)

//admin
router.post('/add-new-offer',requireAdminSignIn,addNewOfferController)



export default router;