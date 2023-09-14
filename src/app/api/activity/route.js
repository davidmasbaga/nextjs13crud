import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ActivityModel } from "@/models/Activity";
import { UserModel } from "@/models/User";

export const POST = async (req, res) => {
    await connectDB();
    try {
        const body = await req.json();
        const { userId, ...activityData } = body;

        // Encuentra al usuario por su ID.
        const user = await UserModel.findById(userId);

        if (!user) {
            return NextResponse.json({ data: null, message: "Usuario no encontrado" }, { status: 404 });
        }

        
        activityData.userId = user._id;

        const newActivity = await ActivityModel.create(activityData);

        
        user.activities.push(newActivity._id);
        await user.save();

        return NextResponse.json({ data: newActivity }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};


export const GET = async () => {
    await connectDB()
    try {
        const result = await ActivityModel.find({})
        return NextResponse.json({data:result}, {status:200})
        
    } catch (error) {
        return NextResponse.json({data:null}, {status:500} )
    }
    
    };