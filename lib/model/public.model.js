import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema=new mongoose.Schema({
    entity:{
        type:String,
        required:true,
        enum:['patient','admin','doctor']
    },
    password:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
})
userSchema.pre('save', async function (next) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!regEmail.test(this.email)) {
      return next(new Error('Invalid Email'));
    }
    if (this.entity === 'doctor') {
            this.password = '@doctor123';
    }
    if (!regPass.test(this.password)) {
      return next(new Error('Invalid Password'));
    }
    this.password=await bcrypt.hash(this.password,10);

    next();
});

const doubtSchema=new mongoose.Schema({
    comment:{type:String},
    date:{
        type:String,default:()=>{
        const date=new Date();
        return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear();
    }},
    postedBy:{
        type:String},
    parent:{type:mongoose.Schema.Types.ObjectId,ref:'DoubtModel'},
    children:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DoubtModel'}],
})
doubtSchema.pre('save',async function(next){
    if(this.parent){
        const doubt=await doubtModel.findById(this.parent);
        doubt.children.push(this._id); 
    }
    next();
});
const appointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PatientModel'
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DoctorModel'
    },
    date:{
        type:Date,
        required:true
    },
    isChecked:{
        type:Boolean,
        default:false
    }

})

const userModel=mongoose.models.UserModel || mongoose.model('UserModel',userSchema);
const doubtModel= mongoose.models.DoubtModel || mongoose.model('DoubtModel',doubtSchema);
const appointmentModel= mongoose.models.AppointmentModel || mongoose.model('AppointmentModel',appointmentSchema);

export {userModel,doubtModel,appointmentModel}