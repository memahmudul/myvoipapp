import express from "express";


import { isReseller, requireAdminSignIn, requireSignIn } from "../middlewares/authMiddleware.js";
import { addCommissionController, getCommissionController } from "../controllers/comissionControler.js";
const router = express.Router()



router.post('/get-commission',requireSignIn,getCommissionController)





export default router;