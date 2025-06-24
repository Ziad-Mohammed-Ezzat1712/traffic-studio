import React from 'react';
import img1 from '../../../Images/mobile.jpg';
import img2 from '../../../Images/camera.jpg';
import img3 from '../../../Images/vabe.jpg';
import img4 from '../../../Images/lap.jpg';
import logo2 from '../../../Images/LogoDark.png';

export default function About() {
  return (
      <section className=" bg-white w-full px-4 md:px-20 xl:px-32 pb-20">
        <div className="w-full flex flex-col items-center mx-auto gap-16">
          {/* العنوان والنص */}
          <div className="flex flex-col md:flex-row items-start gap-0  md:text-left w-full justify-center">
            {/* العنوان */}
            <div className="text-5xl font-extrabold leading-tight min-w-[180px] space-y-2">
              <div className=''><h1 className='font-sansita'>About</h1></div>
              <div className=''><h1 className='font-sansita'>Traffic</h1></div>
              <div className=''><h1 className='font-sansita'>Studio</h1></div>
             
            </div>

            {/* الفقرات */}
            <div className="space-y-5 my-4  max-w-5xl text-lg">
              <p className='font-bold'>
                With a focus on timeless aesthetics and subtle storytelling, we create photography
                that captures emotion, character, and purpose — from personal moments to brand visions.
                 With a focus on timeless aesthetics and subtle storytelling, we create photography
                that captures emotion, character, and purpose — from personal moments to brand visions.
                  </p>
              <p className="text-gray-500 text-base">
                Dedicated to minimal style and meaningful visuals, our studio crafts photography
                that tells stories — blending artistry with authenticity for brands, people, and
                moments that matter.
              </p>
            </div>
          </div>

          {/* الصور */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-2  w-full">
            {/* صورة الموبايل */}
            <img
              src={img1}
              alt="Mobile"
              className="object-cover rounded-xl w-full sm:w-[90%] lg:w-[720px] h-[455px] transition-all duration-300"
            />

            {/* البلوك التاني */}
            <div className="flex flex-col items-center gap-4 w-full lg:max-w-[540px]">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <img
                  src={img2}
                  alt="Camera"
                  className="object-cover rounded-xl w-full sm:w-[440px] h-[220px]"
                />
                <img
                  src={img3}
                  alt="Vape"
                  className="object-cover rounded-xl w-full sm:w-[440px] h-[220px]"
                />
              </div>

              <img
                src={img4}
                alt="Laptop"
                className="object-cover rounded-xl w-full sm:w-[700px] h-[220px]"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
