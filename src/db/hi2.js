import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import mongoDB from "mongodb"



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://anshugupta351613:Anshu32@cluster0.aagz0kw.mongodb.net")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        
        console.log("MONGODB Connection Intrupet",error);
        process.exit(1); // Exit process with failure
    }

}
export default connectDB;
