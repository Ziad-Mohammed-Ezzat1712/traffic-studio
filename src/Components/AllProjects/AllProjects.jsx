import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://trafficstudio360.com/projects/allProjects.php')
      .then((response) => {
        const data = response.data;
        if (data.status === 200 && Array.isArray(data.data)) {
          setProjects(data.data);
          setFilteredProjects(data.data);
          const uniqueCategories = ['All', ...new Set(data.data.map((p) => p.category_name).filter(Boolean))];
          setCategories(uniqueCategories);
        } else {
          console.error('Unexpected data format:', data);
          setProjects([]);
          setFilteredProjects([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((p) => p.category_name === selectedCategory);
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

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
            <button className="w-3/4 mx-5 bg-orange-500 hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
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
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {Navbar}

      <div className="px-4 md:px-10 py-10">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">All Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border-2 transition font-semibold text-sm
                ${selectedCategory === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <Link to={`/project/${proj.id}`} key={proj.id} className="block w-full">
                <div className="border border-orange-600 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center hover:scale-105 duration-300">
                  <img
                    src={`https://trafficstudio360.com/${proj.file_path}`}
                    alt={proj.title}
                    className="w-full h-60  rounded mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-1"><span className="text-lg text-black font-semibold ">Title :</span>  {proj.title}</h3>
                  <p className="text-sm text-gray-600 mb-2"><span className="text-xs text-black font-semibold ">Description :</span>  {proj.description}</p>
                  <span className="text-xs text-orange-500 font-semibold uppercase">
                    <span className="text-xs text-black font-semibold " >Category :</span>  {proj.category_name}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-xl font-bold text-gray-600 col-span-full">
              No projects found in this category ❗
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
