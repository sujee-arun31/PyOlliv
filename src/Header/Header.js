import React from "react";
import { UserCircleIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const navItems = [
    { label: "Flights", icon: "✈️" },
    { label: "Hotels", icon: "🏨", active: true },
    { label: "Trains", icon: "🚄" },
    { label: "Cabs", icon: "🚗" },
    { label: "Bus", icon: "🚌" },
    { label: "Holidays", icon: "🏖️" },
    { label: "Forex", icon: "💱" },
    { label: "Insurance", icon: "🛡️" },
];

const Header = () => (
    <>
        <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-200 flex flex-col md:flex-row items-center justify-between px-2 md:px-8 py-2">
            {/* Logo */}
            <div className="flex items-center justify-center w-full md:w-auto mb-2 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-orange-500 select-none">
                    PY<span className="text-blue-600">OLLIV</span>
                </span>
            </div>
            {/* Navigation */}
            <nav className="flex overflow-x-auto md:overflow-visible space-x-4 md:space-x-8 w-full md:w-auto justify-center">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href="#"
                        className={`flex flex-col items-center text-xs md:text-sm font-semibold px-2 py-1 ${
                            item.active
                                ? "text-blue-600 font-bold"
                                : "text-gray-600 hover:text-blue-600"
                        }`}
                    >
                        <span className="text-lg md:text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
            {/* Right: User/Trips */}
            <div className="flex items-center justify-center md:justify-end w-full md:w-auto space-x-2 md:space-x-6 mt-2 md:mt-0">
                <div className="hidden sm:flex items-center text-gray-500">
                    <BriefcaseIcon className="h-5 w-5 mr-1" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs md:text-sm font-semibold text-black group-hover:text-blue-600">
                            My Trips
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-500 group-hover:text-gray-700">
                            Manage Booking
                        </span>
                    </div>
                </div>
                <button className="flex items-center border border-blue-600 text-blue-600 px-3 md:px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition text-xs md:text-base">
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    Login / Signup
                </button>
            </div>
        </header>
        <div className="h-1 bg-gradient-to-r from-blue-100 via-white to-orange-100"></div>
    </>
);

export default Header;