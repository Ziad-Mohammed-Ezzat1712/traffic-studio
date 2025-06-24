import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import clientImg from '../../../Images/lap.jpg';

export default function ClientTestimonials() {
  return (
    <div className="flex justify-center">
      <section className="max-w-screen-2xl w-full px-4 md:px-12 xl:px-32 py-10 md:py-16 bg-white text-center">
        {/* العنوان */}
        <h2 className="text-2xl md:text-3xl font-extrabold font-sansita mb-2">
          Client <span className="font-sansita">Testimonials</span>
        </h2>
        <p className="text-base md:text-lg mb-10 font-inter text-gray-700">
          What Our Clients Say About Working With Traffic Studio
        </p>

        {/* السلايدر */}
        <div className="bg-black rounded-xl px-6 py-6 md:p-10 relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 md:p-6 rounded-xl mx-auto max-w-sm md:max-w-md flex flex-col justify-between h-full text-left shadow-sm">
                  <p className="text-sm text-black mb-4 font-inter leading-relaxed">
                    “Professional From Start To Finish. The Space Planning Elevated Our Office Flow In Ways We Never Imagined.”
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    {/* <img
                      src={clientImg}
                      alt="client"  
                      className="w-10 h-10 rounded-full object-cover"
                    /> */}
                    <div>
                      <p className="font-semibold text-sm text-black">Ms. Mary</p>
                      <p className="text-xs text-gray-500">Egypt, Cairo</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* تخصيص الأسهم والبوينتس */}
          <style>
            {`
              .swiper-button-next,
              .swiper-button-prev {
                width: 28px;
                height: 28px;
                background-color: #d1d5db;
                color: white;
                border-radius: 9999px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
                font-weight: bold;
              }

              .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background-color: #ffffff;
                opacity: 0.5;
                border-radius: 50%;
                margin: 0 6px;
              }

              .swiper-pagination-bullet-active {
                background-color: #FF6F1F;
                opacity: 1;
              }

              .swiper-pagination {
                bottom: -20px !important;
                margin-top: 16px;
              }
            `}
          </style>
        </div>
      </section>
    </div>
  );
}
