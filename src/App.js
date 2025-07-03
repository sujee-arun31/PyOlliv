import React from "react";
import Header from "./Header/Header";
import SearchSection from "./components/SearchSection";
import Offers from "./components/Offers";
import CategoryTabs from "./components/CategoryTabs";
import PopularDestinations from "./components/PopularDestinations";
import FAQSection from "./components/FAQSection";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SearchSection />
      <Offers />
      <CategoryTabs />
      <PopularDestinations />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;