import React, { useState } from 'react';

const faqs = [
  { question: 'What is the first step in the design process?' },
  { question: 'How long does an interior design project take?' },
  { question: 'What’s included in your design fees?' },
  { question: 'Do you offer virtual design services?' },
  { question: 'Will I be able to see a preview of the design before it’s finalized?' },
  { question: 'Do you offer post-project support?' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-24 py-20 flex flex-col md:flex-row justify-between gap-5">
      
      {/* Left Title */}
      <div className="md:w-1/2 mb-12 md:mb-0 ">
        <h2 className="text-5xl font-semibold mb-6">FAQ's</h2>
        <p className="text-white/90 max-w-md !mt-8">
          Common questions about our interior design services, processes, and what to expect when working with us.
        </p>
      </div>

      {/* Right Accordion */}
      <div className="md:w-1/2 space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-white/10 pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center !mt-6">
              <p className="text-white text-sm md:text-base">{item.question}</p>
              <span className="text-white/70 transition-transform duration-300 transform !mt-10" 
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-white/60 text-sm">
                This is the answer to the question. You can replace this text with real content.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
