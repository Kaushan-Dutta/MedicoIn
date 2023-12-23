import mongoose from 'mongoose'

const adminSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel',
        required:true
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})


const adminModel= mongoose.models.AdminModel || mongoose.model('AdminModel',adminSchema);


export {adminModel}