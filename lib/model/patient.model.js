import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    name:{
        type:String  
    },
    profileImage:{
        type:String
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    }
})


const patientModel= mongoose.models.PatientModel ||mongoose.model('PatientModel',patientSchema);


export {patientModel}