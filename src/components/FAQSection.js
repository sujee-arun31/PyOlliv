import React, { useState } from "react";

const faqs = [
  {
    question: "What are the advantages of online hotel booking?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
        <li>You can check reviews, images, ratings and amenities easily</li>
        <li>Great discounts and cashback on Goibibo</li>
        <li>Avoid last-minute hotel searches and overpaying</li>
        <li>Attractive offers on credit/debit cards and wallets</li>
        <li>Custom room plans and hassle-free stays</li>
      </ul>
    ),
  },
  {
    question: "In current situation of Corona pandemic (Covid 19), where can we find safe and well sanitized hotels?",
    answer: (
      <span>
        Goibibo offers goSafe Hotels — sanitized hotels with trained staff and daily hygiene checks. These are available in cities like Goa, Mumbai, Delhi, Bangalore and more.
      </span>
    ),
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full flex justify-center py-16 px-4 bg-gradient-to-br from-indigo-50 via-blue-50 to-pink-50 overflow-hidden mt-10">
      {/* Background Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <path
          d="M0,96L80,106.7C160,117,320,139,480,160C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          fill="#a5b4fc"
        />
      </svg>

      {/* Content Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl px-8 py-10 w-full max-w-6xl z-10 ">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Hotel Booking FAQs
        </h3>

        <div className="space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md"
              >
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[1000px] mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-gray-600 text-base">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
