import React, { useState } from 'react'

import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';


export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    social: '',
    service: '',
    servicesBooked: [],
    projectDetails: '',
    recommendations: '',
    contentType: '',
    duration: '',
    cameraType: '',
    lighting: '',
    micType: '',
    needPhotographer: '',
    bookingDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.servicesBooked, value]
          : prev.servicesBooked.filter((item) => item !== value);
        return { ...prev, servicesBooked: updated };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };


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
  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto text-xl bg-gray-200 my-7 p-8 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>

      {/* Basic Info */}
      <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange}
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />

      <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition " />

      <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange}
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />

      <input type="text" name="company" placeholder="Company Name (optional)" value={formData.company} onChange={handleChange}
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />

      <input type="url" name="social" placeholder="Social Media Link"  value={formData.social} onChange={handleChange}
        className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" />

      {/* Service Type */}
      <div>
        <label className="block font-semibold mb-2">Service Type:</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="service" value="marketing" onChange={handleChange} required className="accent-orange-500 " />
            Booking a service
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="service" value="design" onChange={handleChange} className="accent-orange-500" />
            Rent Studio
          </label>
        </div>
      </div>

      {/* Booking a service */}
      {formData.service === 'marketing' && (
        <div className="space-y-4 border-t pt-4">
          <h3 className="text-xl font-semibold">Which service do you want to book?</h3>

          <div className="grid grid-cols-2 gap-4">
            {["Photography", "Videography", "Video Editing", "Motion Graphic"].map((item) => (
              <label key={item} className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.servicesBooked.includes(item)}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                {item}
              </label>
            ))}
          </div>

          <div>
            <label className="block font-medium text-black mb-1">
              PLEASE let us know more details about your project
            </label>
            <textarea
              name="projectDetails"
              required
              value={formData.projectDetails}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition "
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-black mb-1">
              Any other recommendations or comments
            </label>
            <textarea
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            ></textarea>
          </div>
        </div>
      )}

      {/* Rent Studio */}
      {formData.service === 'design' && (
        <div className="space-y-4 border-t pt-4">
          

          {/* Content Type */}
          <div>
            <label className="font-medium text-black mb-1 block">
              * What type of content do you want to record?
            </label>
 {['Reels', 'Promo', 'Podcast', 'Product', 'Personal content', 'Photoshoot', 'Other'].map(item => (
  <label key={item} className="flex items-center gap-2 text-black">
    <input
      type="radio"
      name="contentType"
      value={item}
      onChange={handleChange}
      required
      className="accent-orange-500 focus:ring-orange-500"
    />
    {item}
  </label>
))}     </div>

          {/* Duration */}
          <div>
            <label className="font-medium text-black mb-1 block">
              * How many hours do you want to book?
            </label>
            {['1 Hour', '2 Hours', 'Half Day (4 Hours)', 'Full Day (8 Hours)', 'Other'].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" name="duration" value={item} onChange={handleChange} required className="accent-orange-500 focus:ring-orange-500" />
                {item}
              </label>
            ))}
          </div>

          {/* Camera Type */}
          <div>
            <label className="font-medium text-black mb-1 block">
              * What type of camera do you want to be included?
            </label>
            {['None', 'Canon M50', 'Sony A7 III', 'Sony A7 IV'].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" className="accent-orange-500 focus:ring-orange-500" name="cameraType" value={item} onChange={handleChange} required />
                {item}
              </label>
            ))}
          </div>

          {/* Lighting */}
          <div>
            <label className="font-medium text-black mb-1 block">
               How many lights do you want to be included?
            </label>
            {['None', '2 Basic Lights + 1 Softbox', 'Full Light Kit'].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" className="accent-orange-500 focus:ring-orange-500" name="lighting" value={item} onChange={handleChange} required />
                {item}
              </label>
            ))}
          </div>

          {/* Mic Type */}
          <div>
            <label className="font-medium text-black mb-1 block">
               What type of Mic do you want to be included?
            </label>
            {['None', 'Rode Mic', 'Lapel Mic', 'Podcast Mic (USB)'].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" className="accent-orange-500 focus:ring-orange-500" name="micType" value={item} onChange={handleChange} required />
                {item}
              </label>
            ))}
          </div>

          {/* Need Videographer */}
          <div>
            <label className="font-medium text-black mb-1 block">
               Do you need a Videographer or Photographer with you?
            </label>
            {['Yes, I need', 'No, I don’t need', 'Need more than one'].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" className="accent-orange-500 focus:ring-orange-500" name="needPhotographer" value={item} onChange={handleChange} required />
                {item}
              </label>
            ))}
          </div>

          {/* Booking Date */}
          <div>
            <label className="font-medium block mb-1">
               What is your preferred Booking Date and Time
            </label>
            <input
              type="datetime-local"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              required
              className="w-full p-3 border  border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>

          {/* Recommendations */}
          <div>
            <label className="block font-medium text-black mb-1">
              Any other recommendations or comments
            </label>
            <textarea
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            ></textarea>
          </div>
        </div>
      )}

      <button type="submit" className="w-full bg-orange-500 text-white font-semibold p-3 rounded-lg hover:bg-orange-600 transition-all">
        Submit
      </button>
    </form>
    <Footer/>
    </>
  );
}






