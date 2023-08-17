import { error } from "console";
import mongoose from "mongoose";

export default async function connect()
{
    try {
        mongoose.connect(process.env.MONGO_DB!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Mongodb connected successfully");
        })

        connection.on('error',()=>{
            console.log("error is ",error);
        })
    } catch (error) {
        console.log(error);
    }
}