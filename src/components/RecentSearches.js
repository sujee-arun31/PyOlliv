import React from "react";

const recentSearches = [
  {
    city: "Chennai",
    dateRange: "Jul 9, 2025 - Jul 10, 2025",
    guests: "2 Guests in 1 Room",
  },
  // You can add more recent searches here if you want
];

const RecentSearches = () => (
  <section className="w-full flex justify-center mt-8">
    <div className="bg-white rounded-2xl shadow px-4 py-6 w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Searches</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {recentSearches.map((search, idx) => (
          <div
            key={idx}
            className="flex-1 border border-orange-200 rounded-xl px-4 py-3 flex flex-col justify-between hover:shadow-md transition"
          >
            <span className="text-orange-500 font-bold text-base mb-1">{search.city}</span>
            <span className="text-gray-700 text-sm">{search.dateRange}</span>
            <span className="text-gray-500 text-xs mt-1">{search.guests}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecentSearches;