

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');

 const token = localStorage.getItem('adminToken');
useEffect(() => {
  axios.get('https://trafficstudio360.com/booking/allBooking.php', {
    headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
  })
  .then(res => {
    if (res.data?.data) {
      setBookings(res.data.data);
      console.log(res.data.data);
      
    } else {
      setBookings([]);
    }
    setIsLoading(false);
  })
  .catch(err => {
    console.error("خطأ أثناء جلب البيانات:", err);
    setIsLoading(false);
  });
}, []);

  useEffect(() => {
    if (filterType === 'all') {
      setFiltered(bookings);
    } else {
      const filteredList = bookings.filter(
        (booking) => booking.booking_type === filterType
      );
      setFiltered(filteredList);
    }
  }, [filterType, bookings]);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600">Bookings</h2>

        <select
          className="border border-orange-600 px-4 py-2 rounded-md"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Booking</option>
          <option value="rent_studio">Rent Studio</option>
          <option value="booking_service">Booking Service</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid gap-6">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow p-6 border"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black">
              <span className='text-md font-bold'>Client_Name :</span>    {booking.client_name}
                </h3>
                
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Booking Type:</strong> {booking.booking_type}</p>
                <p><strong>Created At:</strong> {booking.created_at}</p>
              </div>

              {booking.booking_type === 'rent_studio' && booking.rent_studio_details && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-orange-600">Rent Studio Details</h4>
                  <p><strong>Camera Type:</strong> {booking.rent_studio_details.camera_type}</p>
                  <p><strong>Mic Type:</strong> {booking.rent_studio_details.mic_type}</p>
                  <p><strong>Light Type:</strong> {booking.rent_studio_details.light_type}</p>
                  <p><strong>Booking Duration:</strong> {booking.rent_studio_details.hours}</p>
                  <p><strong>Content Type:</strong> {booking.rent_studio_details.content_type}</p>
                  <p><strong>Need Photographer:</strong> {booking.rent_studio_details.need_photographer}</p>
                  <p><strong>Preferred Time:</strong> {booking.rent_studio_details.preferred_time}</p>
                  <p><strong>Time Period:</strong> {booking.rent_studio_details.time_period}</p>
                  <p><strong>Comments:</strong> {booking.rent_studio_details.comments}</p>
                </div>
              )}

              {booking.booking_type === 'booking_service' && booking.booking_service_details && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-orange-600">Service Details</h4>
                  <p><strong>Requested Services:</strong> {JSON.parse(booking.booking_service_details.services).join(', ')}</p>
                  <p><strong>Project Details:</strong> {booking.booking_service_details.project_details}</p>
                  <p><strong>Comments:</strong> {booking.booking_service_details.comments}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

