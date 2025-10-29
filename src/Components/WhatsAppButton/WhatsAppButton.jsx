import React, { useState } from 'react';
import whatsappIcon from '../../../Images/whatsapp.png';

const WhatsAppButton = () => {
  const [isTouched, setIsTouched] = useState(false);

  const handleClick = () => {
    window.open("https://wa.me/201096496428", '_blank'); 
  };


  return (
    <div
      onClick={handleClick}
    
      className={`
        fixed bottom-5 md:right-10 right-[-16px] z-50 cursor-pointer 
        text-white px-6 py-2 rounded-full flex items-center 
        transition-all duration-300 group
        hover:bg-[#5FD669] hover:pr-5
        ${isTouched ? 'bg-[#5FD669] pr-5' : ''}
      `}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-10 h-10 transition-all duration-300"
      />
      <span
        className={`
          ml-2 font-bold overflow-hidden whitespace-nowrap
          transition-all duration-300
          max-w-0 opacity-0
          group-hover:max-w-[200px] group-hover:opacity-100
          ${isTouched ? 'max-w-[200px] opacity-100' : ''}
        `}
      >
        WhatsApp us
      </span>
    </div>
  );
};

export default WhatsAppButton;
