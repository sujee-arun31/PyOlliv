import React from "react";

const SearchSection = () => (
  <section className="relative w-full flex justify-center mt-8">
    {/* Attractive large gradient background */}
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-300 rounded-b-[150px] z-0"
      style={{ maxWidth: 1600 }}
    ></div>
    {/* Search box */}
    <div className="relative bg-white rounded-2xl shadow-lg px-6 py-8 w-full max-w-6xl flex flex-col items-center z-10 mt-12">
      <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
        Book Hotels and Homestays
      </h2>
      <form className="w-full flex flex-col md:flex-row items-center gap-4">
        {/* Where to */}
        <div className="w-full md:flex-1">
          <label className="block text-gray-500 text-sm mb-1">Where to</label>
          <input
            type="text"
            placeholder="Chennai"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 font-semibold"
          />
        </div>
        {/* Check-in */}
        <div className="w-full md:flex-1">
          <label className="block text-gray-500 text-sm mb-1">Check-in</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 font-semibold"
          />
        </div>
        {/* Check-out */}
        <div className="w-full md:flex-1">
          <label className="block text-gray-500 text-sm mb-1">Check-out</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 font-semibold"
          />
        </div>
        {/* Guests & Rooms */}
        <div className="w-full md:flex-1">
          <label className="block text-gray-500 text-sm mb-1">Guests & Rooms</label>
          <input
            type="text"
            placeholder="2 Adults | 1 Room"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 font-semibold"
          />
        </div>
        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-8 py-3 mt-2 md:mt-6 shadow transition"
        >
          SEARCH
        </button>
      </form>
    </div>
  </section>
);

export default SearchSection;
