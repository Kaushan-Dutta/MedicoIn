import mongoose from 'mongoose'

const doctorSchema=new mongoose.Schema({
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
    },
    specialist:{
        type:String},
    patients:{
        type:Number,default:0}    
})


const doctorModel=mongoose.models.DoctorModel || mongoose.model('DoctorModel',doctorSchema);

export {doctorModel}