import mongoose, { mongo } from "mongoose";

const MetricsSchema = new mongoose.Schema({
    duration: { type: Number },              // Duración del ejercicio
    cardioKilometers: { type: Number },            // Kilómetros recorridos (para cardio)
    weightReps: { type: Number },                  // Repeticiones (para ejercicios de peso)
    weightExerciseType: { type: String },          // Tipo de ejercicio (flexiones, bíceps, etc.)
    weightBodyZone: { type: String }               // Zona del cuerpo (pecho, hombro, bíceps, tríceps)
}, { _id: false });

//CREACION DE SCHEMA
const activitySchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        training:{
            type: String,
            enum:['cardio','weight'],
            required: [true, "please complete the field"] 
            
            
      
        },
        type:{
            type:String,
            required:[true,"please complete the field"]
        },

        metrics:MetricsSchema,
       
        
    },
    {
        timestamps : true,
        versionKey:false
    }
    )

export const ActivityModel = mongoose?.models?.Activity || mongoose.model("Activity", activitySchema)