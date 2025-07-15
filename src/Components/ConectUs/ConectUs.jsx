import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
setLoading(true);

    try {
      if (!formData.name.trim()) {
        alert('يرجى إدخال الاسم');
        return;
      }

      const data = new FormData();
      data.append('client_name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('booking_type', formData.service === 'marketing' ? 'booking_service' : 'rent_studio');
      data.append('social_media_link', formData.social);
      data.append('comments', formData.recommendations || '');

      if (formData.service === 'marketing') {
        formData.servicesBooked.forEach((service) => {
          data.append('services[]', service);
        });
        data.append('project_details', formData.projectDetails);
      } else if (formData.service === 'design') {
        data.append('content_type', formData.contentType);
        data.append('hours', formData.duration);
        data.append('camera_type', formData.cameraType);
        data.append('light_type', formData.lighting);
        data.append('mic_type', formData.micType);
        data.append('need_photographer', formData.needPhotographer);

        if (formData.bookingDate) {
          const date = new Date(formData.bookingDate);
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
          const formattedTime = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
          const timePeriod = date.getHours() >= 12 ? 'PM' : 'AM';

          data.append('preferred_date', formattedDate);
          data.append('preferred_time', formattedTime);
          data.append('time_period', timePeriod);
        }
      }

      const response = await axios.post(
        'https://trafficstudio360.com/booking/clientBooking.php',
        data
      );

      if (response.data.status !== 200) {
        alert('حدث خطأ: ' + (response.data.message || 'Something went wrong.'));
        return;
      }

           toast.success('Booking submitted successfully! Thank you for contacting us.');


      setFormData({
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

    } catch (error) {
     toast.error('An error occurred. Please try again later.');
      console.error(error.response?.data || error.message);
    }finally {
  setLoading(false);
}
  };

  return (
    <>
    <ToastContainer />
     <nav className="bg-black opacity-97 w-full z-20 top-0 left-0 py-4 px-4 md:px-8 lg:px-16">
                   <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                     <span>
                       <img src={logo} alt="Logo" className="h-16 w-auto" />
                     </span>
           
                     <div className="hidden md:flex justify-center flex-1">
                       <ul className="flex items-center text-lg text-white px-6 py-2 gap-6 font-semibold">
                         <li className="px-10">
                           <Link to="/#header" className="text-white hover:text-orange-500 font-bold">
                             Home
                           </Link>
                         </li>
                         <li className="px-10">
                           <Link to="/#about" className="text-white hover:text-orange-500">
                             About
                           </Link>
                         </li>
                         <li className="px-10">
                           <Link to="/#services" className="text-white hover:text-orange-500">
                             Services
                           </Link>
                         </li>
                         <li className="px-10">
                           <Link to="/#portfolio" className="text-white hover:text-orange-500">
                             Portfolio
                           </Link>
                         </li>
                         <li className="px-10">
                           <Link to="/#testimonials" className="text-white hover:text-orange-500">
                             Testimonials
                           </Link>
                         </li>
                         <li className="px-10">
                           <Link to="/#faqs" className="text-white hover:text-orange-500">
                             Q&A
                           </Link>
                         </li>
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
           
                   {isOpen && (
                     <div className="bg-black text-md pl-4 font-semibold py-3 my-2 p-[5px] mb-2 w-[200px] md:hidden rounded-lg shadow-md space-y-1">
                       <Link to="/#header" className="text-white hover:text-orange-500">Home</Link>
                       <Link to="/#about" className="block text-white hover:text-orange-500">About</Link>
                       <Link to="/#services" className="block text-white hover:text-orange-500">Services</Link>
                       <Link to="/#portfolio" className="block text-white hover:text-orange-500">Portfolio</Link>
                       <Link to="/#testimonials" className="block text-white hover:text-orange-500">Testimonials</Link>
                       <Link to="/#faqs" className="block text-white hover:text-orange-500">Q&A</Link>
                       <Link to="/conectus">
                       <button className="w-3/4 mx-5  bg-orange-500  hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
                              Let’s Talk
                       </button>
                            </Link>
                     </div>
                   )}
           
                 </nav>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto text-xl bg-gray-200 my-7 p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" />
        <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg" />
        <input type="text" name="company" placeholder="Company Name (optional)" value={formData.company} onChange={handleChange} className="w-full p-3 border rounded-lg" />
        <input type="url" name="social" placeholder="Social Media Link" value={formData.social} onChange={handleChange} className="w-full p-3 border rounded-lg" />

        {/* Service Type */}
        <div>
          <label className="block font-semibold mb-2">Service Type:</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="service" value="marketing" onChange={handleChange} required className="accent-orange-500" />
              Booking a service
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="service" value="design" onChange={handleChange} className="accent-orange-500" />
              Rent Studio
            </label>
          </div>
        </div>

        {/* Conditional Booking Details */}
        {formData.service === 'marketing' && (
          <div className="space-y-4 border-t pt-4">
            <h3 className="text-xl font-semibold">Which service do you want to book?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Photography', 'Videography', 'Video Editing', 'Motion Graphic'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" value={item} checked={formData.servicesBooked.includes(item)} onChange={handleChange} className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            <textarea name="projectDetails" placeholder="Project details" required value={formData.projectDetails} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            <textarea name="recommendations" placeholder="Any recommendations?" value={formData.recommendations} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          </div>
        )}

        {formData.service === 'design' && (
          <div className="space-y-4 border-t pt-4">
            {/* Content Type */}
            <div>
              <label className="block font-medium">Type of Content:</label>
              {['Reels', 'Promo', 'Podcast', 'Products', 'Personal content', 'Photoshoot', 'Other'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="contentType" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Hours */}
            <div>
              <label className="block font-medium">Booking Duration:</label>
              {['1 Hour', '2 Hours', 'Half Day (4 Hours)', 'Full Day (8 Hours)', 'Other'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="duration" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Camera */}
            <div>
              <label className="block font-medium">Camera Type:</label>
              {['None','Canon M50','Sony A7 III','2 Sony A7 III','Other'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="cameraType" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Lights */}
            <div>
              <label className="block font-medium">Lighting:</label>
              {['None', '2 HeadLights + 2 LedTubes', 'Full lights equipments','Other'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="lighting" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Mic */}
            <div>
              <label className="block font-medium">Mic Type:</label>
              {['None', 'Pixel Mic', 'HollyLand Mic', 'Podcast Mics (2 MIC)','Other'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="micType" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Photographer */}
            <div>
              <label className="block font-medium">Need Photographer:</label>
              {['Yes, I need', 'No, I dont need', 'Need more than one'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="needPhotographer" value={item} onChange={handleChange} required className="accent-orange-500" />
                  {item}
                </label>
              ))}
            </div>

            {/* Booking Date */}
            <input type="datetime-local" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required className="w-full p-3 border rounded-lg" />

            <textarea name="recommendations" placeholder="Any recommendations?" value={formData.recommendations} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          </div>
        )}

      <button
  type="submit"
  disabled={loading}
  className="w-full bg-orange-500 text-white font-semibold p-3 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline-block"></span>
      <span>Sending...</span>
    </>
  ) : (
    'Book Now'
  )}
</button>
      </form>
      <Footer />
    </>
  );
}
