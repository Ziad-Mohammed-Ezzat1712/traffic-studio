import React from 'react';
import motion from '../../../Images/motion.png'
export default function OurServices() {
  return (
    <section className="bg-white px-4 ml-0 lg:mb-5 md:px-16 xl:px-32">
      <div className="max-w-screen-xl  mx-auto text-center">
        {/* العنوان الرئيسي */}
        <div className='mr-0  mb-10'>
          <h2 className="text-4xl font-extrabold mb-2 font-sansita">
            Our <span className='font-sansita'> Services</span>
          </h2>
          <p className="text-lg mb-12 font-inter">
            Each Service Is Made To Match Effectively Your Needs.
          </p>
        </div>

        {/* الشبكة المعدلة */}
<div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
  {/* عنصر 1 */}
  <div className="hover:scale-105  bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    <div><i className=" text-4xl mb-4 fa-solid fa-video"></i></div>
    <h3 className="text-xl font-bold mb-2 font-sansita">Videography</h3>
    <p className="text-[#918888] font-inter">
      Bring your brand to life through dynamic visuals that tell a story. From product shoots to full-scale commercials, our videography team captures every moment, style, and purpose — tailored to your goals and audience.</p>
  </div>

  {/* عنصر 2 */}
  <div className="hover:scale-105 bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    <div><i className="text-4xl mb-4 fa-solid fa-camera"></i></div>
    <h3 className="text-xl font-bold mb-2 font-sansita">Photography</h3>
    <p className="text-[#918888] font-inter">
      Clean, crisp, and crafted to fit your brand. Whether it’s portraits, products, events, or lifestyle shots, we deliver high-quality imagery that grabs attention and keeps your content looking sharp across platforms.
 </p>
  </div>

  {/* عنصر 3 */}
  <div className=" hover:scale-105 bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300">
    <div><i className=" text-4xl mb-4 fa-solid fa-wand-magic-sparkles"></i> </div>
    <h3 className="text-xl font-bold mb-2 font-sansita">Video editing</h3>
    <p className="text-[#918888] font-inter">
     It’s not just about cutting clips — it’s about building flow, mood, and message. We turn raw footage into compelling content, blending visuals, audio, and pacing to create videos that actually connect and convert. </p>
  </div>

  {/* عنصر 4 */}
  <div className="bg-gray-200 text-center shadow-md rounded-xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
     <div className='flex justify-center items-center p-0 mb-2'> <img src={motion} alt="motion" className=' w-14 h-14 ' /></div>
    <h3 className="text-xl font-bold mb-2 font-sansita">Motion graphics</h3>
    <p className="text-[#918888] font-inter">
      Add movement, meaning, and magic. From animated text to full explainer videos, our motion graphics enhance your content with custom visuals that simplify ideas, amplify branding, and engage your audience. </p>
  </div>
</div>

      </div>
    </section>
  );
}
  