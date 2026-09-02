import Activity from "../models/activity.js";

export const createActivity=async(userId,action,description)=>{
    try{

         await Activity.create({user:userId,
            action,description
         })
    }catch(error){
        console.log("ACTIVITY ERROR:", error.message)
    }
}