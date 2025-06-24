import React from 'react';

export default function OurServices() {
  return (
    <section className="bg-white px-4 ml-0  md:px-16 xl:px-32">
      <div className="max-w-screen-xl  mx-auto text-center">
        {/* العنوان الرئيسي */}
        <div className='mr-0  mb-10'>
          <h2 className="text-4xl font-extrabold mb-2 font-sansita">
            Our <span className='font-sansita'> Services</span>
          </h2>
          <p className="text-lg mb-12 font-inter">
            Thoughtful Interiors Tailored to Each Space and Story
          </p>
        </div>

        {/* الشبكة المعدلة */}
<div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
  {/* عنصر 1 */}
  <div className="hover:scale-105  bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    
    <h3 className="text-xl font-bold mb-2 font-sansita">Videography</h3>
    <p className="text-[#918888] font-inter">
      We capture high-quality video content that tells your story with clarity and creativity.
      From events to brand films, our videography brings moments to life with style and precision.
    </p>
  </div>

  {/* عنصر 2 */}
  <div className="hover:scale-105 bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    <h3 className="text-xl font-bold mb-2 font-sansita">Photography</h3>
    <p className="text-[#918888] font-inter">
      We deliver professional photography that highlights the essence of every moment.
      Whether it’s products, people, or spaces — we capture visuals that speak for themselves.
    </p>
  </div>

  {/* عنصر 3 */}
  <div className=" hover:scale-105 bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    <h3 className="text-xl font-bold mb-2 font-sansita">Video editing</h3>
    <p className="text-[#918888] font-inter">
      We transform raw footage into polished, engaging videos through seamless editing.
      Every cut, sound, and effect is crafted to enhance your story and captivate your audience.
    </p>
  </div>

  {/* عنصر 4 */}
  <div className="bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
    <h3 className="text-xl font-bold mb-2 font-sansita">Motion graphics</h3>
    <p className="text-[#918888] font-inter">
      We create dynamic motion graphics that add energy and clarity to your message.
      From animated logos to explainer videos, we bring visuals to life with movement and meaning.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
  