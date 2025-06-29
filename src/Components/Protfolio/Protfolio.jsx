

import React from 'react';

// استيراد الصور
import img1 from '../../../Images/protfolio1.jpg';
import img2 from '../../../Images/protfolio2.jpg';
import img3 from '../../../Images/protfolio3.jpg';
import img4 from '../../../Images/protfolio4.jpg';

export default function Portfolio() {
  return (
    // لف السيكشن داخل div للتمركز
    <div className="lg:my-5 flex justify-center">
      <section className="w-full max-w-screen-2xl px-4 md:px-16 xl:px-32 py-12 bg-white">
        {/* العنوان والزر */}
        <div className="flex flex-col md:flex-row justify-between  items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-sansita font-extrabold ">
            Our <span className="font-sansita">Portfolio</span>
          </h2>
          <button className="border bg-orange-500  text-white font-bold rounded-full px-6 py-2 hover:bg-orange-600 hover:text-white transition duration-300 flex items-center gap-2">
            Explore Our Portfolio
          </button>
        </div>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          <div className="overflow-hidden rounded-xl shadow-sm  transform transition-transform duration-300 hover:scale-105 md:hover:scale-110">
            <img src={img3} alt="portfolio-1" className="w-full h-[350px] object-cover rounded-xl" />
          </div>
          <div className="overflow-hidden rounded-xl shadow-sm  transform transition-transform duration-300 hover:scale-105 md:hover:scale-110">
            <img src={img2} alt="portfolio-2" className="w-full h-[350px] object-cover rounded-xl" />
          </div>
          <div className="overflow-hidden rounded-xl shadow-sm  transform transition-transform duration-300 hover:scale-105 md:hover:scale-110">
            <img src={img1} alt="portfolio-3" className="w-full h-[350px] object-cover rounded-xl" />
          </div>
          <div className="overflow-hidden rounded-xl shadow-sm  transform transition-transform duration-300 hover:scale-105 md:hover:scale-110">
            <img src={img4} alt="portfolio-4" className="w-full h-[350px] object-cover rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
