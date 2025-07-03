import React, { useRef } from "react";

const offers = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Get Up to 25% OFF* on Hotels & Homestays.",
    description: "Valid till: 4th July'25",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Get Up to 45% OFF* on Premium Hotels.",
    description: "Valid till: Limited Period Offers",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    title: "Luxury Resorts: Exclusive deals for premium stays.",
    description: "Valid till: 10th July'25",
  },
  
  // ...add more offers as needed
];

const Offers = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 400 : -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full flex justify-center mt-8">
      <div className="bg-white rounded-2xl shadow px-4 py-6 w-full max-w-6xl">
        <h3 className="text-3xl font-extrabold text-center mb-6">Offers for you</h3>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100"
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          {/* Offers Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide px-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="flex bg-white border-2 border-gray-200 rounded-xl p-4 min-w-[420px] max-w-[420px] items-center gap-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-28 h-28 object-cover rounded-lg border"
                />
                <div className="flex flex-col flex-1">
                  <div className="font-bold text-lg mb-2">{offer.title}</div>
                  <div className="text-gray-500 text-base">{offer.description}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100"
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      </div>
      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Offers;