import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // لو بتحب تستخدم أيقونات Lucide

const faqData = [
  {
    question: "What kind of brands do you usually work with?",
    answer:
      "We work with a wide range, from startups and content creators to established businesses. Whether you’re launching a product, telling your stories, or just need clean, professional visuals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the type of project — but generally, we deliver within 2 to 7 working days after the shoot. For urgent projects, we can always talk timelines and adjust.",
  },
  {
    question: "Do you rent out your equipment or studio space?",
    answer:
      "We don’t rent out equipment separately, but you can book our studio, complete with tools and crew, for your project. Whether you’re coming with your own team or need full support, we’ll be there to help and make sure everything runs smoothly.",
  },
  {
    question: " Can I be involved in the creative direction?",
    answer:
      "Absolutely. We love collaborating with our clients. You can share your ideas, references, or let us take the lead creatively. Either way, you’re part of the process.  ",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" max-w-7xl mx-auto py-10   px-4 mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sansita">Q&A</h2>
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
