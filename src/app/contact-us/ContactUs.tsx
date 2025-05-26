'use client'
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = ({ id }) => {
    const pathname = usePathname();
    useEffect(() => {
        // AOS or any animation init here if needed
    }, []);

    const searchParams = useSearchParams();
    const source = searchParams.get('source') || '';
    const service = searchParams.get('service') || '';

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: service,
        source: pathname,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "contactRequests"), form);
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                service: service,
                source: pathname,
            });
            setSubmitted(true);
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div
            id={id}
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#cac6ff] via-[#c3dfff] to-[#d9e1f7] px-2 py-16"
        >
            <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-b from-[#ffffff] via-[#f5f9ff] to-[#d9e1f7] relative p-8 overflow-hidden">
                {/* Browser bar mock */}
                <div className="flex items-center px-6 pt-6 pb-4">
                    <div className="w-16 h-5 bg-[#e6f3e6] rounded-full mr-auto"></div>
                    <div className="flex gap-2 ml-auto">
                        <div className="w-6 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-6 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-6 h-2 rounded-full bg-gray-200"></div>
                    </div>
                </div>
                {/* Main form */}
                <form
                    className="px-8 pb-8 pt-2 flex flex-col md:flex-row gap-8"
                    onSubmit={handleSubmit}
                >
                    {/* Left: Heading and labels */}
                    <div className="flex-1 flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-6  text-gray-700 tracking-widest">
                            Lets chat.
                        </h2>
                        <div className="hidden md:block mt-6 space-y-8">
                            <div className="gap gap-y-10 text-gray-700" data-aos="fade-right">
                                <div className="flex items-start gap-6 mb-4">
                                    <MapPin className="text-cyan-600 w-6 h-6" />
                                    <p className="mb-4 leading-relaxed text-gray-700">
                                        Kingdom of Saudi Arabia<br />
                                        AL Madinah Al Monwarah street, <br /> Al Bawadi Dis, Al Madina Plaza Building,
                                        Floor 5, Office 505
                                    </p>
                                </div>
                                <div className="flex items-start gap-6 mb-4">
                                    <Phone className="text-cyan-600 w-6 h-6" />
                                    <p>
                                        Tel: 00 966 114 229 922<br />
                                        Fax: 00 966 11 211 411
                                    </p>
                                </div>
                                <div className="flex items-start gap-6 mb-4">
                                    <Mail className="text-cyan-600 w-6 h-6" />
                                    <p>info@sedra.net.sa</p>
                                </div>
                                <div className="flex items-start gap-6 mb-4">
                                    <MapPin className="text-cyan-600 w-6 h-6" />
                                    <p>www.sedra.net.sa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right: Inputs */}
                    <div className="flex-1 flex flex-col gap-4 justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 tracking-widest">
                            GET IN TOUCH
                        </h2>
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="service">Service</label>
                            <select
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-1 py-2 text-lg focus:outline-none focus:border-black transition"
                            >
                                <option value="" aria-placeholder="Select a service">Select a service</option>
                                <option value="zoho crm">Zoho CRM</option>
                                <option value="zoho one">Zoho One</option>
                                <option value="zohoOne step">Zoho One Step</option>
                                <option value="app development">App Development</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={3}
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition resize-none"
                                required
                            />
                        </div>
                        <input type="hidden" name="source" value={form.source} />
                        <button
                            type="submit"
                            className="bg-[#3d5494] text-white rounded px-6 py-2 mt-0 shadow hover:bg-[#4763ad] transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>
                        {submitted && (
                            <div className="bg-teal-600 px-2 py-4 text-white rounded shadow text-center font-semibold mt-4">
                                Thank you for contacting us!<br />
                                We have received your message and will get back to you soon.
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
