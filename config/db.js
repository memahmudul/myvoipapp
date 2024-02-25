import mongoose from "mongoose";
import dotenv from 'dotenv'
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error is MongoDB ${error}`);
        
    }
}


export const conn = mongoose.connection;
