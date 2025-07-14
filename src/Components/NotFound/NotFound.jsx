import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../public/LogoDark.png'; // غيّر المسار حسب مكان الصورة

export default function NotFound() {
  return (
    <div className='relative min-h-screen  flex flex-col justify-center items-center gap-y-12 text-center px-4'>

    
      <img src={logo} alt="Logo" className='absolute top-4 left-4 w-24 h-auto' />


      <div className='flex items-center gap-3 text-3xl font-bold text-red-600'>
        <h1>Wroooooooong</h1>
        <span>❌❌❌</span>
      </div>

     
      <Link to='/' className='text-4xl font-bold text-orange-600 hover:underline'>
        Back To Home
      </Link>

    </div>
  )
}
