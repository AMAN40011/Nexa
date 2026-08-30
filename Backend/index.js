import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.js'
import cors from 'cors';
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
//Mongodb Connection 
const MB=process.env.MongoDB;
try{
    await mongoose.connect(MB);
    console.log("Server is Connected to MongoDb Database");
}catch(error)
{
    console.log("Error While Database Connection",error);
}

const corsOptions = {
origin: 'http://localhost:5173',
methods: 'GET,POST,PUT,DELETE',
allowedHeaders: ['Content-Type', 'Authorization'],
optionsSuccessStatus: 200, // For legacy browsers
credentials: true,
};

app.use(cors(corsOptions));
app.use('/user',userRoute);

app.get("/",(req,res)=>{
    res.send("Hello From Backend");
})


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is Running port ${3000}`);
});
