import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ⬅️ جديد

  useEffect(() => {
    setIsLoading(true); // ⬅️ يبدأ التحميل
    axios.get('https://trafficstudio360.com/projects/allProjects.php')
      .then(response => {
        if (response.data?.data) {
          setProjects(response.data.data.slice(0, 4));
        }
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      })
      .finally(() => {
        setIsLoading(false); // ⬅️ انتهى التحميل
      });
  }, []);

  return (
    <div className="lg:my-5 flex justify-center">
      <section className="w-full max-w-screen-2xl px-4 md:px-16 xl:px-32 py-12 bg-white">
        
        {/* العنوان والزر */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-sansita font-extrabold">
            Our <span className="font-sansita">Portfolio</span>
          </h2>
          <Link to="/allproject">
            <button className="border bg-orange-500 text-white font-bold rounded-full px-6 py-2 hover:bg-orange-600 hover:text-white transition duration-300 flex items-center gap-2">
              Explore Our Portfolio
            </button>
          </Link>
        </div>

        {/* ✅ عرض الـ Spinner أثناء التحميل */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <div
                  className="relative overflow-hidden rounded-xl shadow-sm transform transition-transform duration-300 hover:scale-105 md:hover:scale-110 group"
                  onTouchStart={() => setActiveIndex(index)}
                >
                  <img
                    src={`https://trafficstudio360.com/${project.file_path}`}
                    alt={`portfolio-${index + 1}`}
                    className="w-full h-[430px] object-cover rounded-xl"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1/4 bg-black opacity-90 flex flex-col justify-center items-start p-4 transform transition-all duration-500 ease-in-out rounded-b-xl ${
                      activeIndex === index ? 'translate-y-0' : 'translate-y-full'
                    } group-hover:translate-y-0`}
                  >
                    <h1 className="text-white text-xl font-bold mb-1">{project.title}</h1>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
