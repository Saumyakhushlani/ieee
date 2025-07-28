import { dbConnect } from "@/Db/dbConnect";
import { NextResponse } from "next/server";
import { User } from "@/models/data.model";


export async function POST(req){
    try {
        await dbConnect()
        const {name,scholar_number,department}= await req.json()
        const dummy= await User.findOne({name,scholar_number})
        if(dummy){
            return NextResponse.json(
                {error:"You have Already Registered"},
                {status:409}
            )
        }
        const newData = new User({name,scholar_number,department})
        const savedData = await newData.save()
        return NextResponse.json(
            {Message:"Data Saved Succesfully",savedData},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:error.message ||"Unable to Add Data"},
            {status:404}
        )
    }
}

export async function GET(){
    try {
        await dbConnect()
        const formData = await User.find()
        return NextResponse.json(
            {formData},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:error.message||"Error in fetching Data"},
            {status:404}
        )
    }
}