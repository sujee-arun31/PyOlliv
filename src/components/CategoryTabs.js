import React, { useState, useRef } from "react";

const categories = [
  { name: "Beach Vacations", destinations: [
    { name: "Maldives", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { name: "Krabi", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { name: "Phuket", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { name: "Langkawi", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" }
 
  ]},
  { name: "Weekend Getaways", destinations: [
    { name: "Lonavala", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { name: "Mahabaleshwar", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { name: "Pune", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { name: "Lonavala", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" }
  ]},
  { name: "Mountains Calling", destinations: [
    { name: "Manali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { name: "Shimla", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
    { name: "Munnar", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { name: "Manali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" }
  ]},
  { name: "Stay Like Royals", destinations: [
    { name: "Udaipur", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { name: "Jaipur", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  ]},
  { name: "Indian Pilgrimages", destinations: [
    { name: "Varanasi", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
    { name: "Haridwar", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
  ]},
  { name: "Party Destinations", destinations: [
    { name: "Goa", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { name: "Bangkok", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  ]},
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
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
        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`pb-2 text-lg font-semibold whitespace-nowrap transition border-b-2 ${
                activeTab === idx
                  ? "text-blue-700 border-blue-600"
                  : "text-gray-700 border-transparent hover:text-blue-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {/* Destinations Row */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100"
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories[activeTab].destinations.map((dest, idx) => (
              <div
                key={idx}
                className="flex flex-col min-w-[300px] max-w-[300px] items-start"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <span className="font-bold text-lg">{dest.name}</span>
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

export default CategoryTabs;