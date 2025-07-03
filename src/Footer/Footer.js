import React from "react";

const footerLinks = [
    {
        heading: "OUR PRODUCTS",
        links: [
            "Domestic Hotels", "International Hotels", "International Flights", "Bus Booking", "Cab Booking", "Train Ticket Booking", "Cheap Flights", "Train Running Status", "PNR Status", "Airport Cabs", "Hotels in India", "Hotels near me", "Popular Airlines", "IRCTC Forgot UserID", "IRCTC Forgot Password"
        ]
    },
    {
        heading: "COMPANY",
        links: [
            "About Us", "Terms & Conditions", "User Agreement", "Privacy", "Customer Support", "Careers", "Corporate Social Responsibility", "Goibibo on Mobile", "Goibibo TV Advertisement", "Technology@Goibibo", "FAQs"
        ]
    },
    {
        heading: "TRENDING HOTEL CITIES",
        links: [
            "Hotels in Goa", "Hotels in Delhi", "Hotels in Mumbai", "Hotels in Bangalore", "Hotels in Hyderabad", "Hotels in Pune", "Hotels in Agra", "Hotels in Jaipur", "Hotels in Ahmedabad", "Hotels in Mysore", "Hotels in Munnar", "Hotels in Chennai", "Hotels in Madurai", "Hotels in Kolkata", "Hotels in Ooty", "Hotels in Mahabaleshwar", "Hotels in Shimla", "Hotels in Manali", "Hotels in Nainital"
        ]
    },
    {
        heading: "TRENDING INTERNATIONAL HOTEL CITIES",
        links: [
            "Hotels in Dubai", "Hotels in Singapore", "Hotels in Bangkok", "Hotels in Kathmandu", "Hotels in Pattaya", "Hotels in Krabi", "Hotels in Paris", "Hotels in London", "Hotels in Amsterdam", "Hotels in Colombo", "Hotels in Maldives", "Hotels in Rome", "Hotels in Bali", "Hotels in Hong Kong", "Hotels in Kuala Lumpur", "Hotels in Abu Dhabi", "Hotels in Moscow", "Hotels in Zurich", "Hotels in Dhaka"
        ]
    },
    {
        heading: "TOP SEARCHED HOTELS BY AREA",
        links: [
            "Hotels in Panchgani", "Hotels in Juhu", "Hotels in Srisailam", "Hotels in Bandra", "Hotels in Goa Near Beach", "Auli Hotels", "Ernakulam Hotel", "Hotels in Fort Kochi", "Taki Hotels", "Palolem Beach Hotels", "Hotels in Powai", "Hotels in Colaba", "Hotels in Bkc", "Hotels in Bandra West", "Hotels in Puri Beach", "Hotels in Panjim", "Hotel in Malad West", "Hotels in Thirukadaiyur", "Hotels in Baga", "Hotels in Connaught Place", "Hotels in Calangute", "Hotels in Goa Airport", "Hotels in Delhi Airport"
        ]
    },
    {
        heading: "ALTERNATE ACCOMODATION IN CITY",
        links: [
            "Homestays in Coorg", "Homestays in Ooty", "Homestays in Sakleshpur", "Homestays in Darjeeling", "Homestays in Wayanad", "Homestays in Munnar", "Homestays in Kodaikanal", "Villas in Lonavala", "Villas in Goa", "Villas in Igatpuri", "Villas in Karjat", "Villas in Alibaug", "Villas in Mahabaleshwar", "Villas in Pondicherry", "Jim Corbett Resort", "Resorts in Gokarna", "Resorts in Manesar", "Resorts in Bandipur", "Resorts in Kumarakom", "Resorts in Kanakapura"
        ]
    },
    {
        heading: "TOP 5 STAR HOTEL CITIES",
        links: [
            "5 Star Hotels in Dharamshala", "5 Star Hotels in Nainital", "5 Star Hotels in Surat", "5 Star Hotels in Dalhousie", "5 Star Hotels in Ranchi", "5 Star Hotels in Mount Abu", "5 Star Hotels in Bangalore", "5 Star Hotels in Coorg", "5 Star Hotels in Jaisalmer", "5 Star Hotels in Gangtok", "5 Star Hotels in Madurai", "5 Star Hotels in Raipur", "5 Star Hotels in Shillong", "5 Star Hotels in Matheran", "5 Star Hotels in Port Blair", "5 Star Hotels in Ranthambore", "5 Star Hotels in Andaman"
        ]
    }
];

const socialIcons = [
    { icon: "facebook", url: "https://facebook.com", svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12z" /></svg> },
    { icon: "twitter", url: "https://twitter.com", svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" /></svg> },
    { icon: "youtube", url: "https://youtube.com", svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.993 2.993 0 00-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.993 2.993 0 00.502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.993 2.993 0 002.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.993 2.993 0 002.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> }
];

const appBadges = [
    { alt: "Google Play", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg", url: "https://play.google.com/store" },
    { alt: "App Store", src: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg", url: "https://www.apple.com/app-store/" }
];

const paymentIcons = [
    { alt: "Verified", src: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
    { alt: "MasterCard", src: "https://cdn-icons-png.flaticon.com/512/196/196561.png" },
    { alt: "Visa", src: "https://cdn-icons-png.flaticon.com/512/349/349221.png" },

];

const Footer = () => (
    <footer className="bg-white mt-12 pt-8 pb-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {footerLinks.map((col, idx) => (
                    <div key={idx} className="text-center md:text-left flex flex-col">
                        <div className="font-bold mb-2 text-xs md:text-sm text-gray-800 uppercase tracking-wide leading-snug line-clamp-2 min-h-[40px]">
                            {col.heading}
                        </div>
                        <ul className="space-y-0.5">
                            {col.links.map((link, i) => (
                                <li key={i} className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer leading-relaxed">{link}</li>
                            ))}
                        </ul>
                    </div>

                ))}

            </div>
            {/* Social and App Download */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 border-t border-gray-100 pt-6 space-y-4 md:space-y-0">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                    <span className="font-medium text-xs text-gray-700">Follow Us</span>
                    {socialIcons.map((icon, idx) => (
                        <a key={idx} href={icon.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">{icon.svg}</a>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-medium text-xs text-gray-700 mb-2 text-center">Book Tickets faster. Download our mobile Apps</span>
                    <div className="flex space-x-2">
                        {appBadges.map((badge, idx) => (
                            <a key={idx} href={badge.url} target="_blank" rel="noopener noreferrer">
                                <img src={badge.src} alt={badge.alt} className="h-8" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                    {paymentIcons.map((icon, idx) => (
                        <img key={idx} src={icon.src} alt={icon.alt} className="h-6 w-auto" />
                    ))}
                    {/* RuPay SVG */}
                    <svg className="h-6 w-auto" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="22" fill="#1B3A7C">Ru</text>
                        <text x="36" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="22" fill="#E94E1B">Pay</text>
                    </svg>
                </div>
            </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6 px-4">&copy; {new Date().getFullYear()} Makemytrip (India) Private Limited. All rights reserved</div>
    </footer>
);

export default Footer;