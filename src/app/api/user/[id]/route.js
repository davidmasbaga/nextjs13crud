import connectDB from "@/lib/dbConnect";
import { UserModel } from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req, {params})=>{
    await connectDB();
    const id = params.id

    try {
        const result = await UserModel.findById(id)
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data:null}, {status:500})
    }

}

export const DELETE = async(req,{params})=>{
    await connectDB;
    const id = params.id

    try {
        const result = await UserModel.findByIdAndDelete(id)
        if(!result){return NextResponse.json({message:`User with ID:${id} not found`}, {status:404})}
        return NextResponse.json({message: `The user ${result.name} ${result.lastname} with ID:${id} has been deleted: `}, {status:200})
    } catch (error) {
        return NextResponse.json({data:null}, {status:500})
    }
}

export const PUT = async(req,{params})=>{
    await connectDB;
    const id = params.id
    const body = await req.json()

    try {
        const result = await UserModel.findByIdAndUpdate(id, {$set:{...body}}, {new:true})
        if(!result){return NextResponse.json({message:`User with ID:${id} not found`}, {status:404})}
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data:null}, {status:500})
    }
}