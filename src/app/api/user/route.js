import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { UserModel } from "@/models/User";


export const POST = async (req,res) => {
    await connectDB()
    try {
        const  body = await req.json()
        const newUser = await UserModel.create(body)
        return NextResponse.json({data:newUser},{status:201})

    } catch (error) {
        return NextResponse.json({data:null}, {status:500} )
    }

};

export const GET = async (req, res) => {
await connectDB()
try {
    const result = await UserModel.find({})
    return NextResponse.json({data:result}, {status:200})
    
} catch (error) {
    return NextResponse.json({data:null}, {status:500} )
}

};

