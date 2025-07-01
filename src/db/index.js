import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// while designing a database we always use async and await and try and catch 

const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error at mongodb connection" , error);
        process.exit(1);
    }
}

export default connectDB;