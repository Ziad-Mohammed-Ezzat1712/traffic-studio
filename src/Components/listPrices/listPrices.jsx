import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import footerImage from '../../../Images/prices/img40.jpg';
import headerImage from '../../../Images/prices/img5.jpg';
import Footer from '../Footer/Footer';
import Navebar from '../Navebar/Navebar';

const images = [
  { src: '/images/prices/img15.jpg', alt: 'Categories Overview' },
  { src: '/images/prices/reels.jpg', alt: 'Categories Overview' },
  { src: '/images/prices/products.jpg', alt: 'Personal Photoshoot Overview' },
  { src: '/images/prices/photoshoot.jpg', alt: 'Photoshoot Plan 1' },
  { src: '/images/prices/fashion.jpg', alt: 'Photoshoot Plan 2' },
  { src: '/images/prices/renting.jpg', alt: 'Studio Renting Plan' },
  // ضيف باقي الصور هنا
];

export default function ListPrices() {
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
  <div className='mb-20'>
      <nav className="absolute w-full bg-black z-20 top-0 left-0 py-4 px-4 md:px-8 lg:px-16 ">
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <span to="/">
                <img src={logo} alt="Logo" className="h-16  w-auto" />
              </span>
    
              {/* Nav links (centered) */}
              <div className="hidden md:flex  justify-center flex-1">
              <ul className="flex items-center text-lg text-white px-6 py-2 gap-6 font-semibold">
      <li className='px-10'>
        <Link to="/#header" className="text-white hover:text-orange-500 font-bold">
          Home
        </Link>
      </li>
        <li className='px-10'>
        <Link to="/#about" className="text-white hover:text-orange-500">
          About
        </Link>
      </li>
       <li className='px-10'>
        <Link to="/#services" className="text-white hover:text-orange-500">
           Services
        </Link>
      </li>
      <li className='px-10'>
        <Link to="/#portfolio" className="text-white hover:text-orange-500">
          Portfolio
        </Link>
      </li>
     
    
      <li className='px-10'>
        <Link to="/#testimonials" className="text-white hover:text-orange-500">
          Testimonials
        </Link>
      </li>
      <li className='px-10'>
        <Link to="/#faqs" className="text-white hover:text-orange-500">
         Q&A
        </Link>
      </li>
    </ul>
    
              </div>
    
              {/* Let’s Talk Button */}
              <div className="hidden md:block">
                <Link to="/conectus"><button  className=" border-2 hover:bg-transparent hover:shadow-sm hover:border-0 hover:text-orange-500 text-white font-bold text-lg px-6 py-2 rounded-full shadow-md transition">
                  Let’s Talk
                </button></Link>
              </div>
    
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-orange-500 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
    
            {/* Mobile menu links */}
       {isOpen && (
      <div className="bg-black text-md pl-4 font-semibold py-3  my-2 p-[5px] mb-2  w-[200px] md:hidden rounded-lg shadow-md  space-y-1">
        <Link to="/#header" className=" text-white hover:text-orange-500">Home</Link>
         <Link to="/#about" className="block text-white hover:text-orange-500">About</Link>
          <Link to="/#services" className="block text-white hover:text-orange-500"> Services</Link>
        <Link to="/#portfolio" className="block text-white hover:text-orange-500">Portfolio</Link>
        <Link to="/#testimonials" className="block text-white hover:text-orange-500">Testimonials</Link>
        <Link to="/#faqs" className="block text-white hover:text-orange-500">Q&A</Link>
    <Link to="/conectus">
    <button className="w-3/4 mx-5  bg-orange-500  hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
           Let’s Talk
    </button>
         </Link>
      </div>
    )}
    
          </nav>
  </div>
    <div className="container mx-auto mb-0 px-4 py-10">
       <div className='max-w-2xl mx-auto my-10  '>
        <img src={headerImage} className='w-full h-[40%] object-contain' alt="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
   <div className='max-w-2xl mx-auto my-10  '>
        <img src={footerImage} className='w-full h-[40%] object-contain' alt="" />
      </div>
    </div>
 <div>
    <footer className={`relative bg-black opacity-97 bg-center bg-cover text-white px-6 md:px-12 py-10 overflow-hidden`}>
        <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo */}
          <div className="flex flex-col gap-4 items-start">
            <img src={logo} alt="Logo" className="h-40 w-auto" />
          </div>
  
          {/* Contact Info */}
          <div className="text-center text-md flex flex-col items-end">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="mb-2">tarfficstudio@gmial.com</p>
            <p className="mb-2">+20150 0929449‬
  </p>
            <p>2 Mohamed Zaki Barakat, 8th District, Nasr City, Cairo Governorate 
  </p>
  
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl text-white">
              <Link to="/facebook" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/instagram" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/linkedin" className="hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="/x" className="hover:text-gray-400">
                <i className="fab fa-x-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
  
        {/* Footer bottom */}
        <div className="relative z-10 mt-10 border-t border-white border-opacity-20 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="flex items-center gap-2">
            <span>©</span>
            <span>Traffic Studio All Copy Right</span>
          </div>
    
        </div>
      </footer>
 </div>
      </>
  );
}
