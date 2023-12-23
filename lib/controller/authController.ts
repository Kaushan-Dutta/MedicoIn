"use server"
import {userModel} from '../model/public.model'
import { doctorModel } from '../model/doctor.model'
import { patientModel } from '../model/patient.model'
import { adminModel } from '../model/admin.model'

import {connectToDB} from '../connectDb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const JWT_SECRET:any=process.env.NEXT_APP_JWT_SECRET;

type User={
    email:string,password:string
}
export const userCheck=async(token:string)=>{
    try{
        connectToDB();
        const user:any=jwt.verify(token,JWT_SECRET);
        console.log(user,"JWT Token")
        if(user.entity==='doctor'){
            return await doctorModel.findById(user._id);
        }
        if(user.entity==='patient'){
            console.log(await patientModel.findById(user._id));
        }
        if(user.entity==='admin'){
            return await adminModel.findById(user._id);
        }
        return null;
    }
    catch(err){
        throw new Error("Error in Signing Up")
    }
}
export const patientSignup=async({email,password}:User)=>{
    try{
        connectToDB();
        const user=new userModel({entity:'patient',email,password});
        await user.save(); 
    }
    catch(err){
        console.log(err);
        throw new Error("Error in Signing Up")
    }
}
export const doctorSignup=async({email}:User)=>{
    try{
        connectToDB();
        const user=new userModel({entity:'doctor',email});
        await user.save();
    }
    catch(err){
        throw new Error("Error in Signing Up")
    }
}
export const userLogin=async({email,password}:User)=>{
    try{
        connectToDB();
        const user:any=await userModel.findOne({email});
        if(!user){
            throw new Error("User Not Found")
        }
        //console.log(user)
        const isMatch = await bcrypt.compare(password, user?.password );
         if(!isMatch){
            throw new Error("Invalid Password")
        }
        //console.log(user);
        const token=jwt.sign({_id:user._id,entity:user.entity,email:user.email},JWT_SECRET,{expiresIn:'1d'});
        return(token);
        
    }
    catch(err:any){
        console.log(err.message)
        //throw new Error("Error in Signing Up")
    }
}
