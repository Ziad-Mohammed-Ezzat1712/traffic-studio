import React from 'react'
import style from '../OurDesignPhilosophy/OurDesignPhilosophy.module.css'
import lapPhoto from '../../../Images/lap.jpg' 
export default function OurDesignPhilosophy() {
  return (
   <>
  <div className="w-full flex flex-col items-center mx-auto gap-16">
    {/* العنوان والنص */}
    <div className="flex flex-col md:flex-row items-start gap-8 text-center md:text-left w-full justify-center">
      {/* العنوان */}
      <div className="text-4xl sm:text-5xl leading-tight min-w-[150px] md:min-w-[180px] space-y-2">
        <div className="font-sansita">Our</div>
        <div className="font-sansita">Design</div>
        <div className="font-sansita">Philosophy</div>
      </div>

      {/* الفقرات */}
      <div className="space-y-6 mt-6 md:mt-0 font-inter max-w-5xl text-base sm:text-lg md:text-xl">
        <p className="font-bold">
          At Traffic Studio, we believe that great design is quiet, balanced, and deeply intentional. Every space we create is shaped by how people live—not just how it looks.
        At Traffic Studio, we believe that great design is quiet, balanced, and deeply intentional. Every space we create is shaped by how people live—not just how it looks.
     At Traffic Studio, we believe that great design is quiet, balanced, and deeply intentional. Every space we create is shaped by how people live—not just how it looks.
   
        </p>
        <p className="text-gray-500 text-base">
          We focus on timeless choices, thoughtful details, and a sense of calm that lingers long after the first impression.
        </p>
      </div>
    </div>

    {/* الصورة الخلفية مع النص */}
    <div className="relative w-full h-[600px] md:h-[500px] overflow-hidden ">
      <div
        className={`${style.bg} absolute inset-0 bg-cover bg-center bg-no-repeat`}
    
      />
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-inter  leading-tight p-4 text-white">
          Let's Work 
          <span className=" ml-4 font-sansita">Together</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl max-w-xl mb-6 px-2 text-white">
          Are You Ready To Start Your Journey With Us At Traffic Studio?
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-lg sm:text-xl font-bold mt-2 py-3 px-6 rounded-full shadow-lg">
          Book a Consultation
        </button>
      </div>
    </div>
  </div>
</>

  )
}
