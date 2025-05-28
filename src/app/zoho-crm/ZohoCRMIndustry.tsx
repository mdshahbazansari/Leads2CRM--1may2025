// components/ZohoCRMIndustry.jsx
'use client'

const industries = [
    {
        title: "Travel Agency CRM",
        desc: "Designed for travel companies to organize tours, leads, bookings, invoices, and vendor data with ease—streamlining trip management and improving customer experiences.",
        image: "/images/zoho/zoho-crm/industry-travel-agency-img.jpg",
        bg: "bg-sky-50",
        btn: "border-sky-300 text-sky-800 hover:bg-sky-200",
    },
    {
        title: "Real Estate Agency CRM",
        desc: "Helps property agents manage listings, buyer inquiries, sales activity, follow-ups, and deal flow from one place—ensuring no opportunity is missed during the sales journey.",
        image: "/images/zoho/zoho-crm/industry-realestate-agency-img.jpg",
        bg: "bg-violet-50",
        btn: "border-violet-300 text-violet-800 hover:bg-violet-200",
    },
    {
        title: "Real Estate Developer CRM",
        desc: "Enables developers to oversee client relationships, property deals, site offers, contracts, and project timelines efficiently—boosting coordination and sales outcomes.",
        image: "/images/zoho/zoho-crm/industry-realestate-developer-img.jpg",
        bg: "bg-amber-50",
        btn: "border-amber-300 text-amber-800 hover:bg-amber-200",
    },
    {
        title: "Training Provider CRM",
        desc: "Built for educational institutions and tutors to manage learners, course schedules, registrations, feedback, and communication—all from one smart dashboard.",
        image: "/images/zoho/zoho-crm/industry-training-provider-img.jpg",
        bg: "bg-red-50",
        btn: "border-red-300 text-red-800 hover:bg-red-200",
    },
    {
        title: "Law Firm CRM",
        desc: "Empowers lawyers and law firms to track case files, billing hours, client data, legal contracts, and court schedules—reducing admin work and improving accuracy.",
        image: "/images/zoho/zoho-crm/industry-law-firm-img.jpg",
        bg: "bg-purple-50",
        btn: "border-purple-300 text-purple-800 hover:bg-purple-200",
    },
    {
        title: "Entertainer CRM",
        desc: "Tailored for performers like DJs, singers, or speakers to handle leads, bookings, schedules, services, and invoicing—letting artists focus more on their performance.",
        image: "/images/zoho/zoho-crm/industry-entertainer-img.jpg",
        bg: "bg-orange-50",
        btn: "border-orange-300 text-orange-800 hover:bg-orange-200",
    },
];


export default function ZohoCRMIndustry() {

    return (
        <section className="py-12 px-2" style={{
            backgroundImage:
                "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
        }}>
            <div className="max-w-4xl mx-auto mb-10 text-center">
                <div className="text-lg text-mai font-semibold mb-2">Ready-to-use</div>
                <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-4">Zoho CRM Industry Solutions</h2>
                <p className="text-gray-700 max-w-3xl text-center mx-auto">
                    Every industry is different, and so are their requirements from CRM. Based on our experience of deploying Zoho CRM for various industries, we have tailored industry-specific CRM solutions to give you maximum benefit with minimum customization.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.map((item, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        className={`rounded-2xl mx-2 overflow-hidden shadow-sm flex flex-col md:flex-row ${item.bg}`}
                    >
                        {/* Left: Image */}
                        <div className="md:w-1/2 w-full h-56 md:h-auto">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Right: Content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between p-8">
                            <div>
                                <h3 className="font-bold text-gray-700 text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-700 mb-7">{item.desc}</p>
                            </div>
                            <button
                                className={` px-6 py-2 border font-medium transition ${item.btn}`}
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
