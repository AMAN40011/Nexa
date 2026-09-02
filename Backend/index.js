import "dotenv/config";
import express from 'express';

import mongoose from 'mongoose';
import userRoute from './routes/user.js'
import cors from 'cors';
import cookieParser from "cookie-parser";
import aiRoute from './routes/ai.js';

const app=express();

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

const allowedOrigins = [
  "http://localhost:5173",
  "https://nexatech-seven.vercel.app",
];

app.use(cors({
  origin: (origin, callback) => {

    console.log("REQUEST ORIGIN:", origin);

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("BLOCKED ORIGIN:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


app.use('/user',userRoute);
app.use('/ai',aiRoute);

app.get("/",(req,res)=>{
    res.send("Hello From Backend");
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});