import notificationModel from "../../models/admin/notificationModel.js";


export const addNotificationController= async(req,res)=>{
    try { 

        const {title,message} = req.body







        
 
        if(!title){
            return res.send({error: 'can not find title'})
        }
        if(!message){
            return res.send({error: 'can not find message'})
        }
       


        const result = await new notificationModel({title,message}).save()

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not add notification"
            })
        }else{

            res.status(200).send({
                success:true,
                message: 'notification Added Successfully',
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in adding notification",
            error

        })
        
    }
}




export const getAllNotificationController = async(req,res)=>{

 
    try { 


      
        
 
    const result = await notificationModel.find({})



    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Do not have any Notification"
            })
        }else{
           
          
       
            
            res.status(200).send({
                success:true,
                message: 'Notification List fetched successfully',
                
                result
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in fetching Notification List",
            error

        })
        
    }
}






export const deleteNotificationController = async(req,res)=>{
    try {
        
        const {id} = req.body

        if(!id){
            return res.send({error: 'can not find ID'})
        }



        
 
    const result = await notificationModel.findOneAndDelete({_id:id})

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not delete Notification"
            })
        }else{
           
          
       
            
            res.status(200).send({
                success:true,
                message: 'Notification deleted successfully',
                
                result
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in deleting Notification",
            error

        })
        
    }
}