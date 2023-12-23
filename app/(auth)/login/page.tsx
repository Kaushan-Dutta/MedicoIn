"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import { userLogin } from '@/lib/controller/authController';

const SignUp = () => {

  const [loading,setLoading]=useState<boolean>(false);
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
    
    const AuthList=[
      {
          type:'email',
          placeholder:'Enter your email',
          label:'Email',
          onChange:(e:any)=>{
              setEmail(e.target.value)
          }
      },
      {
          type:'password',
          placeholder:'Enter your password',
          label:'Password',
          onChange:(e:any)=>{
              setPassword(e.target.value)
          }
      }
    ]
    const handleLogin=async(e:any)=>{
      e.preventDefault();
      try{
        setLoading(true);
        const token:any=await userLogin({email,password});
        localStorage.setItem('MedicoIn',token);

        setLoading(false);
      }catch(err){ 
        console.log(err);
      }
    }
  return (
    <div className='container-center'>
      <div className='border rounded-md p-5 w-96 flex flex-col gap-5'>
        <form onSubmit={handleLogin}>
          {AuthList.map((obj,id)=>(
            <div key={id} className='font-alata'>
              <p>{obj.label}</p>
              <input {...obj} className='w-full outline-none p-2 '/>
            </div>
          ))}
          <button className='primary-btn w-1/3 mx-auto' type="submit">Login</button>
        </form>
        <p>Not Registered?&nbsp;<Link href="/register" className='text-shade1 font-bold'>Click Here</Link></p>
      </div>
    </div>
  )
}

export default SignUp