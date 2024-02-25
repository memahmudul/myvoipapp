import mongoose from "mongoose";

const commissionSchema = new mongoose.Schema({
   

    commission:{
        type:Array,
        required:true,
       
    },
    
    
    

},)

export default mongoose.model('commission',commissionSchema)