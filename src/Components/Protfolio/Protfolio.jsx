import React from 'react';

// استيراد الصور
import img1 from '../../../Images/99.png';
import img2 from '../../../Images/protfolio2.jpg';
import img3 from '../../../Images/protfolio3.jpg';
import img4 from '../../../Images/protfolio4.jpg';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      img: img1,
      title: 'Everest cloud photoshoot',
      description: 'Everest Cloud is a vape liquid that features a variety of flavors and tastes to suit different tastes, from fruits to tobacco and more.',
    },
    {
      img: img2,
      title: 'Social Media Design',
      description: 'Creative designs for social platforms.',
    },
    {
      img: img3,
      title: 'Web Design',
      description: 'Responsive and modern web interfaces.',
    },
    {
      img: img4,
      title: 'Motion Graphics',
      description: 'Animated visuals to tell your story.',
    },
  ];

  return (
    <div className="lg:my-5 flex justify-center">
      <section className="w-full max-w-screen-2xl px-4 md:px-16 xl:px-32 py-12 bg-white">
        {/* العنوان والزر */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-sansita font-extrabold ">
            Our <span className="font-sansita">Portfolio</span>
          </h2>
          <Link to="/allproject">
            <button className="border bg-orange-500 text-white font-bold rounded-full px-6 py-2 hover:bg-orange-600 hover:text-white transition duration-300 flex items-center gap-2">
              Explore Our Portfolio
            </button>
          </Link>
        </div>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-sm transform transition-transform duration-300 hover:scale-105 md:hover:scale-110 group"
            >
              <img
                src={project.img}
                alt={`portfolio-${index + 1}`}
                className="w-full h-[430px] object-cover rounded-xl"
              />
              {/* طبقة ال hover */}
              <div className="absolute bottom-0 left-0 w-full h-1/4   bg-black opacity-90 flex flex-col justify-center items-start p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-b-xl">
                <h1 className="text-white text-xl font-bold mb-1">{project.title}</h1>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
