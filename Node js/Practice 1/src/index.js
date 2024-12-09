import express from "express";
import connetDB from "./db/connection.js";
import dotenv from "dotenv";
const app = express()

dotenv.config( {
    path : "./env"
})

connetDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`The server is running at port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MONGO db connection failed !!!" , err);
})
