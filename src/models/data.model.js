import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
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

const Data = mongoose.models.data || mongoose.model("data",dataSchema)

export {Data}