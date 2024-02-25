import express from "express";
import { addBankingOrderController, 
    addMobileBankingOrderController,
    addRechargeOrderController,
    getAllBankingOrderController,
    getAllMobileBankingOrderController,
    performTransactionController,
    addBillPayOrderController,
    getAllBillPayOrderController, 
    getAllRechargeOrderController,
    getAllOfferOrderController } from "../controllers/orderController.js";
import { isReseller, requireAdminSignIn, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()
//routing
//Register || METHOD  POST

// router.post('/add-balance',addBalanceController)
router.post('/add-mobile-banking-order',requireSignIn,addMobileBankingOrderController)
router.post('/add-banking-order',requireSignIn,addBankingOrderController)
router.post('/add-bill-pay-order',requireSignIn,addBillPayOrderController)
router.post('/add-recharge-order',requireSignIn,addRechargeOrderController)
router.post('/get-all-mobile-banking-order',requireSignIn,getAllMobileBankingOrderController)
router.post('/get-all-banking-order',requireSignIn,getAllBankingOrderController)
router.post('/get-all-bill-pay-order',requireSignIn,getAllBillPayOrderController)
router.post('/get-all-recharge-order',requireSignIn,getAllRechargeOrderController)
router.post('/get-all-offer-order',requireSignIn,getAllOfferOrderController)




//Admin
router.post('/edit-transaction-order',requireAdminSignIn,performTransactionController)



// //test route
// router.get('/test',requireSignIn,isReseller,(req,res)=>{
//     res.status(200).send({
//         message: 'testing'
//     })

// })
export default router;