import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello From Backend");
})


const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is Running port ${3000}`);
});
