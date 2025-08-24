import React from 'react'
import style from '../Header/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <>
    <div className="  relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="my-15 text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 leading-tight font-poppins p-4">
            We Don’t Just Create Content.<br /> We Tell Your Brand’s Story
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-6xl mb-6 px-2">
            From media production to product photography and motion graphics, we help brands capture attention and tell stories that resonate with precision and purpose.
 </p>
         <Link to='/allproject'> <button className=" bg-orange-500 hover:bg-orange-600 transition text-white  text-2xl font-bold mt-2 py-3 px-6 rounded-full shadow-lg">
            Explore Our Portfolio   
          </button></Link>
        </div>

       
       
   </>
  )
}
