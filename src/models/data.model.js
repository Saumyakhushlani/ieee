import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        scholar_number:{
            type:String,
            required:true,
        },
        department:{
            type:String,
            required:"true"
        }
    },{timestamps:true}
)

const User = mongoose.models.users || mongoose.model("users",userSchema)

export {User}