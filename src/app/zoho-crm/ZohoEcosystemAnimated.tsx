'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


// Service data
// const services = [
//     {
//         name: "Zoho SalesIQ",
//         icon: "/images/zoho/zoho-crm/services-icons/salesIQ.png",
//     },
//     {
//         name: "Zoho Analytics",
//         icon: "/images/zoho/zoho-crm/services-icons/analytics.png",
//     },
//     {
//         name: "Zoho Campaigns",
//         icon: "/images/zoho/zoho-crm/services-icons/campaigns.webp",
//     },
//     {
//         name: "Zoho Projects",
//         icon: "/images/zoho/zoho-crm/services-icons/projects.png",
//     },
//     {
//         name: "Zoho Desk",
//         icon: "/images/zoho/zoho-crm/services-icons/desk.png",
//     },
//     {
//         name: "Zoho Forms",
//         icon: "/images/zoho/zoho-crm/services-icons/forms.png",
//     },
//     {
//         name: "Zoho Mail",
//         icon: "/images/zoho/zoho-crm/services-icons/mail.png",
//     },
//     {
//         name: "Zoho Survey",
//         icon: "/images/zoho/zoho-crm/services-icons/servey.webp",
//     },
// ];

// // Keyframes for up animation (add to your global CSS or use a CSS-in-JS solution)
// const style = `
// @keyframes floatUp {
//   0% { transform: translateY(40px); opacity: 0; }
//   20% { opacity: 1; }
//   80% { opacity: 1; }
//   100% { transform: translateY(-40px); opacity: 0; }
// }
// `;
// ZohoEcosystemStatic.jsx


const services = [
    {
        name: "Zoho Survey",
        icon: "/images/zoho/zoho-crm/services-icons/servey.webp",
        style: "left-6 top-10",
    },
    {
        name: "Zoho Desk",
        icon: "/images/zoho/zoho-crm/services-icons/desk.png",
        style: "left-0 top-44",
    },
    {
        name: "Zoho Forms",
        icon: "/images/zoho/zoho-crm/services-icons/forms.png",
        style: "left-28 top-80",
    },
    {
        name: "Zoho Mail",
        icon: "/images/zoho/zoho-crm/services-icons/mail.png",
        style: "left-1/3 -translate-x-1/2 top-40",
    },
    {
        name: "Zoho Projects",
        icon: "/images/zoho/zoho-crm/services-icons/projects.png",
        style: "left-72 top-96",
    },
    {
        name: "Zoho Campaigns",
        icon: "/images/zoho/zoho-crm/services-icons/campaigns.webp",
        style: "right-0 top-60",
    },
    {
        name: "Zoho Analytics",
        icon: "/images/zoho/zoho-crm/services-icons/analytics.png",
        style: "right-0 top-20",
    },
    {
        name: "Zoho SalesIQ",
        icon: "/images/zoho/zoho-crm/services-icons/salesIQ.png",
        style: "left-56 -translate-x-1/2 top-0",
    },
];

export default function ZohoEcosystemAnimated() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Loop through each card, one at a time
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 1200); // Change active every 1.2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-10/12  rounded-lg my-10 mx-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-mai to-[#005fb8] px-4 py-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Cards in fixed positions */}
                <div className="relative flex-1 flex items-center justify-center min-h-[480px]">
                    <div className="relative w-[520px] h-[400px]">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.name}
                                className={`absolute ${service.style} w-40 h-32 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center select-none transition-all duration-300`}
                                animate={{
                                    scale: i === activeIndex ? 1.15 : 1,
                                    zIndex: i === activeIndex ? 10 : 1,
                                    boxShadow:
                                        i === activeIndex
                                            ? "0 8px 32px 0 rgba(60,60,120,0.18)"
                                            : "0px 4px 24px 0px #0000000D",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                style={{ transformOrigin: "center center" }}
                            >
                                <img src={service.icon} alt={service.name} className="w-10 h-10 mb-2" />
                                <span className="text-base font-semibold text-gray-700">{service.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Right: Text */}
                <div className="flex-1 flex flex-col justify-center items-start md:pl-16">
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Enter the<br />Zoho Ecosystem
                    </h2>
                    <p className="text-[#e2e8f0] text-lg max-w-lg mb-2">
                        Zoho is best used with Zoho. You can integrate the free editions of some of the best Zoho applications with Zoho CRM for customer support, marketing campaigns, surveys, and more. Sign up for one Zoho product and gain access to the entire portfolio with the same credentials.
                    </p>
                </div>
            </div>
        </section>
    );
}
