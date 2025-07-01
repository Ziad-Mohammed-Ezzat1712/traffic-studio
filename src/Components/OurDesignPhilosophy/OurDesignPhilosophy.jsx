import React from 'react'
import style from '../OurDesignPhilosophy/OurDesignPhilosophy.module.css'
import lapPhoto from '../../../Images/lap.jpg' 
import { Link } from 'react-router-dom';
export default function OurDesignPhilosophy() {
  return (
   <>
  <div className="lg:my-32 w-full flex flex-col items-center mx-auto gap-16">
 


    {/* الصورة الخلفية مع النص */}
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden ">
      <div
        className={`${style.bg} absolute inset-0 bg-cover bg-center bg-no-repeat`}
    
      />
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sansita  leading-tight p-4 text-white">
         Let’s Bring Your Ideas To Life
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl max-w-2xl mb-6 px-2 text-white">
         Be Ready To Start Telling Your Brand’s Stories With Us.
        </p>
      <Link to="/conectus">  <button className=" bg-orange-500 hover:bg-orange-600 transition text-white text-lg sm:text-xl font-bold mt-2 py-3 px-6 rounded-full shadow-lg ">
          Get In Touch
        </button></Link>
      </div>
    </div>
  </div>
</>

  )
}
