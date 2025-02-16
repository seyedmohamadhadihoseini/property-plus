import mongoose from "mongoose";

let isConnected = false;

export default async function Connect(){
    if(isConnected){
        console.log("the database connected already")
    }else{
        await mongoose.connect(process.env.DATABASE_URL||"");
        isConnected = true;
        console.log("connect to database succefully")
    }

}