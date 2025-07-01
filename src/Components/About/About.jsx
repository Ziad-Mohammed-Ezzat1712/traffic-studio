import React from 'react';
import img1 from '../../../Images/mobile.jpg';
import img2 from '../../../Images/camera.jpg';
import img3 from '../../../Images/vabe.jpg';
import img4 from '../../../Images/lap.jpg';
import logo2 from '../../../Images/LogoDark.png';

export default function About() {
  return (
      <section className=" my-16 bg-white w-full px-4 md:px-20 xl:px-32 pb-20">
        <div className="w-full flex flex-col items-center mx-auto gap-16">
          {/* العنوان والنص */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full justify-center">
            {/* العنوان */}
            <div className="text-center md:text-left mx-auto md:mx-0 text-4xl sm:text-5xl leading-tight min-w-[150px] md:min-w-[180px] space-y-2">
              <div className=''><h1 className='font-sansita'>About</h1></div>
              <div className=''><h1 className='font-sansita'>Traffic</h1></div>
              <div className=''><h1 className='font-sansita'>Studio</h1></div>
             
            </div>

            {/* الفقرات */}
            <div className="space-y-5 my-4  max-w-5xl text-lg">
              <p className='font-bold'>
                At Traffic Studio 360, we don’t just shoot, we tell visual stories that reflect the true value of your brand. We’re a full production team with everything in place: a fully equipped studio, a skilled crew of videographers, photographers, editors, and creatives, all working together to bring your vision to life.
   </p>
              <p className="text-gray-500 text-base">
              From sharp visuals to powerful narratives, we create content that connects, elevates, and performs. Whether it’s a branded video, a social campaign, or a full ad production — we’re here to deliver it seamlessly, professionally, and with style. </p>
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
