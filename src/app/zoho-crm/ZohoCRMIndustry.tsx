// components/ZohoCRMIndustry.jsx

const industries = [
    {
        title: "Travel Agency CRM",
        desc: "the Travel Agency CRM is meant for travel agencies and tour operators to better manage their leads, clients, trips, quotes, invoices, vendors, and reservations.",
        image: "/images/zoho/zoho-crm/industry-travel-agency-img.jpg", // Replace with your image path
        bg: "bg-sky-50",
        btn: "border-sky-300 text-sky-800 hover:bg-sky-200",
    },
    {
        title: "Real Estate Agency CRM",
        desc: "the Real Estate Agency CRM is meant for brokerage firms to better manage their properties, leads, recommendations, deals, invoices, and activities.",
        image: "/images/zoho/zoho-crm/industry-realestate-agency-img.jpg",
        bg: "bg-violet-50",
        btn: "border-violet-300 text-violet-800 hover:bg-violet-200",
    },
    {
        title: "Real Estate Developer CRM",
        desc: "the Real Estate Developer CRM is meant for developers to better manage their properties, clients, deals, offers, contracts, and activities.",
        image: "/images/zoho/zoho-crm/industry-realestate-developer-img.jpg",
        bg: "bg-amber-50",
        btn: "border-amber-300 text-amber-800 hover:bg-amber-200",
    },
    {
        title: "Training Provider CRM",
        desc: "the Training Provider CRM is meant for training institutes and individual trainers to better manage their leads, contacts, courses, enrolments, and activities.",
        image: "/images/zoho/zoho-crm/industry-training-provider-img.jpg",
        bg: "bg-red-50",
        btn: "border-red-300 text-red-800 hover:bg-red-200",
    },
    {
        title: "Law Firm CRM",
        desc: "the Law Firm CRM is meant for law firms and individual lawyers to better manage their leads, contacts, matters, contracts, hourly billing, and activities.",
        image: "/images/zoho/zoho-crm/industry-law-firm-img.jpg",
        bg: "bg-purple-50",
        btn: "border-purple-300 text-purple-800 hover:bg-purple-200",
    },
    {
        title: "Entertainer CRM",
        desc: "the Entertainer CRM is meant for magicians, musicians, singers, and DJs to better manage their leads, contacts, services, shows, invoices, and activities.",
        image: "/images/zoho/zoho-crm/industry-entertainer-img.jpg",
        bg: "bg-orange-50",
        btn: "border-orange-300 text-orange-800 hover:bg-orange-200",
    },
    // Add more industries as needed
];

export default function ZohoCRMIndustry() {
    return (
        <section className="py-12 px-2" style={{
            backgroundImage:
                "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
        }}>
            <div className="max-w-4xl mx-auto mb-10 text-center">
                <div className="text-lg text-sky-700 font-semibold mb-2">Ready-to-use</div>
                <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-4">Zoho CRM Industry Solutions</h2>
                <p className="text-gray-700 max-w-3xl text-center mx-auto">
                    Every industry is different, and so are their requirements from CRM. Based on our experience of deploying Zoho CRM for various industries, we have tailored industry-specific CRM solutions to give you maximum benefit with minimum customization.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.map((item, i) => (
                    <div
                        key={i}
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
                                className={`rounded-lg px-6 py-2 border font-medium transition ${item.btn}`}
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
