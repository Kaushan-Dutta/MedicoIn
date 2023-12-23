"use server"
import {userModel,doubtModel,appointmentModel} from '../model/public.model'
import {patientModel} from '../model/patient.model'
import {doctorModel} from '../model/doctor.model'
import {adminModel} from '../model/admin.model'
import {connectToDB} from '../connectDb'

type AppointmentBook={
    patientId:string,
    doctorId:string,
    date:Date
}
type Doubt={
    comment:string,
    postedBy:string,
    parent:string
}
/* export const fetchDoctors=async()=>{
    try{
        return await doctorModel.find({}).populate('userId')
    }
    catch(err){
        throw new Error("Error in fetching doctors")
    }
} */
export const bookAppoint=async({patientId,doctorId,date}:AppointmentBook)=>{
    try{
        connectToDB();

        const book=new appointmentModel({patientId,doctorId,date});
        console.log(book)
        await book.save()
    }
    catch(err){
        throw new Error("Error in Appointment Booking")
    }
}
/* export const fetchAppointments=async()=>{
    try{
        return await appointmentModel.find({})
    }
    catch(err){
        throw new Error("Error in Fetching")
    }
}) */
export const postdoubt=async({comment,postedBy,parent}:Doubt)=>{
    try{
        connectToDB();

        const post=new doubtModel({comment,postedBy,parent})
        await post.save();
    }
    catch(err){
        throw new Error("Error in Commenting")
    }
}
/* router.get('/getdoubts',async(req,res)=>{
    try{
        return res.status(200).json({message:await doubtModel.find({})})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}) */
