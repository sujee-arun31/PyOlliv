import React from "react";

const destinations = [
  {
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    description: "Cosmopolitan and financial capital of India"
  },
  {
    name: "Ho Chi Minh",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description: "Historical and entertainment centre of Vietnam"
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "The City of Light"
  },
  {
    name: "Krabi",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Endless natural beauty and scenic views"
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80",
    description: "Luxurious and romantic holiday destination"
  },
  {
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "A tropical paradise with stunning beaches"
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description: "Land of the Gods"
  },
  {
    name: "Hyderabad",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    description: "City of Nizams known for radiant pearls"
  },
  {
    name: "Udaipur",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    description: "Venice of the East with royal palaces"
  },
  {
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "Where tradition meets modern marvels"
  },
  {
    name: "Barcelona",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  
    description: "Vibrant city of Gaudi architecture"
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

    description: "The city that never sleeps"
  },
];

const PopularDestinations = () => (
  <section className="w-full flex justify-center mt-8 px-4">
    <div className="max-w-7xl w-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-1">Popular Destinations</h3>
      <p className="text-gray-500 mb-6">We have selected some best locations around the world for you.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, idx) => {
          const isLarge = idx % 3 === 0; // Every 3rd card is large
          return (
            <div
              key={idx}
              className={`relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
                isLarge ? "sm:col-span-2 sm:row-span-2 h-[400px]" : "h-[200px]"
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <div className="text-white text-xl font-bold drop-shadow">{dest.name}</div>
                <div className="text-white text-sm drop-shadow">{dest.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PopularDestinations;
