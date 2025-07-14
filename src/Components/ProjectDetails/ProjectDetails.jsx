import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import logo from '../../../public/logo.png';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://trafficstudio360.com/projects/viewOneProject.php?id=${id}`)
      .then((response) => {
        if (response.data.status === 200 && response.data.data) {
          setProject(response.data.data);
        } else {
          console.error('Unexpected response:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const galleryImages = Array.isArray(project?.media_files) && project.media_files.length > 0
    ? project.media_files.map((img) => `https://trafficstudio360.com/${img.trim()}`)
    : [];

  const Navbar = (
    <nav className="bg-black opacity-97 w-full z-20 top-0 left-0 py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <span>
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </span>

        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex items-center text-lg text-white px-6 py-2 gap-6 font-semibold">
            <li className="px-10"><Link to="/#header" className="text-white hover:text-orange-500 font-bold">Home</Link></li>
            <li className="px-10"><Link to="/#about" className="text-white hover:text-orange-500">About</Link></li>
            <li className="px-10"><Link to="/#services" className="text-white hover:text-orange-500">Services</Link></li>
            <li className="px-10"><Link to="/#portfolio" className="text-white hover:text-orange-500">Portfolio</Link></li>
            <li className="px-10"><Link to="/#testimonials" className="text-white hover:text-orange-500">Testimonials</Link></li>
            <li className="px-10"><Link to="/#faqs" className="text-white hover:text-orange-500">Q&A</Link></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Link to="/conectus">
            <button className="border-2 hover:bg-transparent hover:shadow-sm hover:border-0 hover:text-orange-500 text-white font-bold text-lg px-6 py-2 rounded-full shadow-md transition">
              Let’s Talk
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-orange-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black text-md pl-4 font-semibold py-3 my-2 p-[5px] mb-2 w-[200px] md:hidden rounded-lg shadow-md space-y-1">
          <Link to="/#header" className="text-white hover:text-orange-500 block">Home</Link>
          <Link to="/#about" className="text-white hover:text-orange-500 block">About</Link>
          <Link to="/#services" className="text-white hover:text-orange-500 block">Services</Link>
          <Link to="/#portfolio" className="text-white hover:text-orange-500 block">Portfolio</Link>
          <Link to="/#testimonials" className="text-white hover:text-orange-500 block">Testimonials</Link>
          <Link to="/#faqs" className="text-white hover:text-orange-500 block">Q&A</Link>
          <Link to="/conectus">
          <button className="w-3/4 mx-5  bg-orange-500  hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
                 Let’s Talk
          </button>
               </Link>
        </div>
      )}
    </nav>
  );

  if (isLoading) {
    return (
      <>
        {Navbar}
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        {Navbar}
        <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-600">
          Project Not Found ❌
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {Navbar}
      <div className="min-h-screen px-6 md:px-16 py-20 flex flex-col items-center justify-start bg-white">
        <div className="w-full max-w-8xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/2">
              <img
                src={`https://trafficstudio360.com/${project.file_path}`}
                alt={project.title}
                className="max-w-[600px] w-full h-90 rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="w-full md:w-3/4 space-y-4">
              <h1 className="text-3xl font-bold text-orange-600">{project.title}</h1>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
              <div className="text-sm  space-y-1">
                <p><span className="font-semibold">Category:</span> {project.category_name}</p>
              </div>
              <div><p><span className="font-semibold">uploaded_at:</span> {project.uploaded_at}</p></div>
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4 text-orange-600">More From This Project</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {galleryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`gallery-${idx}`}
                    className="w-full aspect-square object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='mb-10 ml-15'><Link to="/allproject">
                  <button className="border bg-orange-500 text-white font-bold rounded-full px-6 py-2 hover:bg-orange-600 hover:text-white transition duration-300 flex items-center gap-2">
                    View All Projects
                  </button>
                </Link></div>
      <Footer />
    </>
  );
}
