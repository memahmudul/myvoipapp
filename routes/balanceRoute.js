import express from "express";
import {
  loginController,
  registerController,
  confirmPinController,
} from "../controllers/authController.js";
import {
  getBalanceController,
  addBalanceRequestController,
  reduceBalanceController,
} from "../controllers/balanceController.js";
import { isReseller, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();
//routing
//Register || METHOD  POST

// router.post('/add-balance',addBalanceController)
router.post("/get-balance", requireSignIn, getBalanceController);
router.post("/add-balance-request", requireSignIn, addBalanceRequestController);
router.post("/reduce-balance", requireSignIn, reduceBalanceController);

// //test route
// router.get('/test',requireSignIn,isReseller,(req,res)=>{
//     res.status(200).send({
//         message: 'testing'
//     })

// })
export default router;
