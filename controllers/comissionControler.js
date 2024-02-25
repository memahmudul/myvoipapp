import commissionModel from "../models/commissionModel.js";

export const addCommissionController = async(req,res)=>{
    try { 
        const {mobile_banking_rate,drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate} = req.body
        
        
        if(!mobile_banking_rate){
            return res.send({error: 'can not find mobile banking'})
        }
        if(!drive_offer_rate){
            return res.send({error: 'can not find drive offer'})
        }
        if(!bank_transfer_rate){
            return res.send({error: 'can not find bank transfer'})
        }
        if(!recharge_rate){
            return res.send({error: 'can not find recharge'})
        }
        if(!bill_pay_rate){
            return res.send({error: 'can not find bill pay'})
        }

        const mobileBankingObject = {
            transaction_type:'mobile-banking',
            rate: mobile_banking_rate
        }

        const driveOfferObject = {
            transaction_type:'drive-offer',
            rate: drive_offer_rate
        }
        const bankTransferObject = {
            transaction_type:'bank-transfer',
            rate: bank_transfer_rate
        }
        const rechargeObject = {
            transaction_type:'mobile-recharge',
            rate: recharge_rate
        }
        const billPayObject = {
            transaction_type:'bill-pay',
            rate: bill_pay_rate
        }

        const commission = [mobileBankingObject,driveOfferObject,bankTransferObject,rechargeObject,billPayObject]
       


        const data = await new commissionModel({commission}).save()
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "new commission rate table added successfully",
                    data
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in adding new commission table",
            error

        })
    }
       
}



export const editCommissionController = async(req,res)=>{
    try { 
        const {mobile_banking_rate,drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate} = req.body
        
        
        if(!mobile_banking_rate){
            return res.send({error: 'can not find mobile banking'})
        }
        if(!drive_offer_rate){
            return res.send({error: 'can not find drive offer'})
        }
        if(!bank_transfer_rate){
            return res.send({error: 'can not find bank transfer'})
        }
        if(!recharge_rate){
            return res.send({error: 'can not find recharge'})
        }
        if(!bill_pay_rate){
            return res.send({error: 'can not find bill pay'})
        }

        const mobileBankingObject = {
            transaction_type:'mobile-banking',
            rate: mobile_banking_rate
        }

        const driveOfferObject = {
            transaction_type:'drive-offer',
            rate: drive_offer_rate
        }
        const bankTransferObject = {
            transaction_type:'bank-transfer',
            rate: bank_transfer_rate
        }
        const rechargeObject = {
            transaction_type:'mobile-recharge',
            rate: recharge_rate
        }
        const billPayObject = {
            transaction_type:'bill-pay',
            rate: bill_pay_rate
        }

        const commission = [mobileBankingObject,driveOfferObject,bankTransferObject,rechargeObject,billPayObject]


        const data = await commissionModel.findOneAndUpdate({},{commission})
        
       


       
       
        
        
            if(!data){
                return res.status(201).send({
                    success:false,
                    message: "Something wrong happend"
                })
            }else{
                res.status(200).send({
                    success:true,
                    message: "commission rate table edited successfully",
                  
        
                })
               
            
                
           
            }
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in editing  commission table",
            error

        })
    }
       
}


export const getCommissionController = async(req,res)=>{
    try {
       
        
        
        
        
   

 
    
    const result = await commissionModel.find({})
  
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any commission"
            })
        }else{
             
           
            
            
            
            res.status(200).send({
                success:true,
                message: 'Commission fetched Successfully',
                
                result
            })
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success:false,
            message: "error in fetching transaction",
            error

        })
        
    }
}

