import React, {useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.png';


export default function AllProjects() {
  const [projects, setProjects] = useState([]);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(saved);
  }, []);
  return (
   <>
    <nav className="bg-black  opacity-97 w-full z-20 top-0 left-0 py-4 px-4 md:px-8 lg:px-16  ">
           <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
             {/* Logo */}
             <span >
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
       <button className="w-3/4 mx-5  bg-orange-500  hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
          Let’s Talk
       </button>
     </div>
   )}
   
         </nav>
         

      <div className="px-4 md:px-10 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">أحدث المشاريع</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{proj.name}</h3>
            <p className="text-sm text-gray-600">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
<Footer/>
   </>
  )
}
