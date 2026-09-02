import mongoose from "mongoose";

const mesageSchema=new mongoose.Schema({
     
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true
    }

},{
        timestamps:true,
    });

const Message=mongoose.model("Message",mesageSchema);

export default Message;