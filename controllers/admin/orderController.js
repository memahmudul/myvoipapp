import bankTransferModel from "../../models/bankTransferModel.js";
import billPayModel from "../../models/billPayModel.js";
import mobileBankingModel from "../../models/mobileBankingModel.js";
import placeOfferOrderModel from "../../models/placeOfferOrderModel.js";
import rechargeModel from "../../models/rechargeModel.js";

export const fetchAllMobileBankingOrderController = async(req,res)=>{
    try {
        
        
        
        
    
    const result = await mobileBankingModel.find({})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any order"
            })
        }else{
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all transaction history",
            error

        })
        
    }
}

export const fetchAllBankingOrderController = async(req,res)=>{
   
    try {
        
        
     
    
     
      
       
        
        
    
    const result = await bankTransferModel.find({})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any order"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Banking Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all Banking transaction history",
            error

        })
        
    }
}








export const fetchAllBillPayOrderController = async(req,res)=>{
   
    try {
        
        
     
   
     
      
       
        
    
    
    const result = await billPayModel.find({})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any order"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Bill Pay Transaction history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all bill pay transaction history",
            error

        })
        
    }
}


export const fetchAllRechargeOrderController = async(req,res)=>{
   
    try {
        
        
     
     
    
    const result = await rechargeModel.find({})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any order"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Recharge history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all recharge  history",
            error

        })
        
    }
}



export const fetchAllOfferOrderController = async(req,res)=>{
   
    try {
        
        
    
    
    const result = await placeOfferOrderModel.find({})
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any order"
            })
        }else{
            
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Offer Order history fetched successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching all offer order history",
            error

        })
        
    }
}


