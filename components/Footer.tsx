import React,{useState} from 'react'
import NavLinks from '@/routes.config'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-theme px-[5vw] py-3  text-white flx-row justify-between absolute bottom-0 w-full'>
        <div className='text-3xl font-comf'>
            <Link href="/" >smarthealth</Link>
        </div>
        <div className='font-inter text-lg list-none flx-row justify-between'>
                {NavLinks.filter((item)=>item.showNav).map((obj, id) => (
                    <li key={id} className='mr-5'><Link href={obj.path}>{obj.name}</Link></li>
                ))}
                
                    <li>Logout</li>
                    <li ><Link href="/login">Login</Link></li>
                
            </div>
    </footer>
  )
}

export default Footer