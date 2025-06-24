import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // لو بتحب تستخدم أيقونات Lucide

const faqData = [
  {
    question: "What Types of Projects Do You Take on?",
    answer:
      "We take on a range of creative projects including media production, videography, photography, video editing, and motion graphics — all crafted to bring your vision to life with style and precision.",
  },
  {
    question: "Do you handle execution or just design?",
    answer:
      "We handle both design and execution depending on the client’s needs. Our goal is to provide full creative support from concept to delivery.",
  },
  {
    question: "How do I begin a project with Traffic Studio?",
    answer:
      "You can begin by reaching out via our contact form or booking a consultation. We'll guide you through the process step-by-step.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but we’ll provide a detailed schedule after the initial consultation.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" max-w-7xl mx-auto py-10   px-4 mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sansita">Frequently Asked <span className="font-sansation">Questions</span></h2>
      <p className=" text-lg mb-8">Questions? We’ve Got Answers.</p>

      <div className="space-y-4 text-left">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 transition-all duration-300 ${
              openIndex === index ? "bg-gray-100" : "bg-gray-100"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold font-inter">{faq.question}</h3>
              <div className="text-white bg-orange-500 rounded-full">
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-[#918888] text-lg leading-relaxed max-w-3xl">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
