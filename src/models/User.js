import mongoose, { mongo } from "mongoose";

//CREACION DE SCHEMA
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "please complete the field"]
        
        },
        lastname:{
            type:String,
            required:[true, "please complete the field"]
        
        },
        age:{
            type:Number,
            required:[true, "please complete the field"]
        
        },
        activities:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Activity'
        }]
       
        
    },
    {
        timestamps : true,
        versionKey:false
    }
    )

export const UserModel = mongoose?.models?.User || mongoose.model("User", userSchema)