import rateModel from "../../models/rateModel.js";

export const getAllRate = async (req, res) => {
    try { 


      
        
 
        const result = await rateModel.find({})
    
    
    
        
    
    
        
            if(!result){
                return res.status(201).send({
                    success:false,
                    message: "Do not have any Rate"
                })
            }else{
               
              
           
                
                res.status(200).send({
                    success:true,
                    message: 'Rate List fetched successfully',
                    
                    result
                })
            }
        
        
        
            
        } catch (error) {
            console.log(error);
           
            res.status(200).send({
                success:false,
                message: "error in fetching Rate List",
                error
    
            })
            
        }
};

export const addRateController= async(req,res)=>{
    try { 

        const {country,rate} = req.body







        
 
        if(!country){
            return res.send({error: 'can not find country'})
        }
        if(!rate){
            return res.send({error: 'can not find rate'})
        }
       


        const result = await new rateModel({country,rate}).save()

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not add Rate"
            })
        }else{

            res.status(200).send({
                success:true,
                message: 'Rate Added Successfully',
                
               
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in adding rate",
            error

        })
        
    }
}




export const deleteRateController = async(req,res)=>{
    try {
        
        const {id} = req.body

        if(!id){
            return res.send({error: 'can not find ID'})
        }



        
 
    const result = await rateModel.findOneAndDelete({_id:id})

    


    
        if(!result){
            return res.status(201).send({
                success:false,
                message: "Can not delete Rate"
            })
        }else{
           
          
       
            
            res.status(200).send({
                success:true,
                message: 'Rate deleted successfully',
                
                result
            })
        }
    
    
    
        
    } catch (error) {
        console.log(error);
       
        res.status(200).send({
            success:false,
            message: "error in deleting Rate",
            error

        })
        
    }
}