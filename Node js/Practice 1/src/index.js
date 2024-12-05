import express from "express";
import connetDB from "./db/connection.js";
import dotenv from "dotenv";
const app = express()

dotenv.config( {
    path : "./env"
})

connetDB()

// // Database Connection Method 1
// ;( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error) => {
//             console.log("ERR " , error);
//             throw error;
//         })
//     } catch(error) {
//         console.error("Error: " , error );
//         throw err
//     }
// } )()