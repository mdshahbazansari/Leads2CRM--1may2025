'use client'
import Link from "next/link";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';


export default function ZohoCrmHero() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        agree: false,
        page: pathname,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "ZohoCrm"), form);
            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                agree: false,
                page: pathname,
            });
            router.push("https://go.zoho.com/IId");
        } catch (err) {
            alert("Submission failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section className="bg-[#d3dafa] mt-16 py-12 px-2">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left: Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#18113c] mb-6 leading-tight">
                        An Extensive System to Increase<br />
                        Your Productivity and Improve<br />
                        Customer Relationships
                    </h1>
                    <p className="text-gray-700 text-lg mb-6 max-w-2xl">
                        Achieve greater success with Zoho customized CRM system, where you can track all your customer interactions, enhance your communications, and boost your sales easily and efficiently.
                    </p>
                    <ul className="mb-8 space-y-2 text-base text-gray-700">
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Sync emails with CRM.</span>
                        </li>
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Track and nurture leads.</span>
                        </li>
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Visualize sales pipeline stages.</span>
                        </li>
                    </ul>
                    <Link href="#contactUs">
                        <button className="bg-[#425b9f] hover:bg-[#4c69b8] text-white text-lg font-semibold px-8 py-3 rounded transition">
                            START TODAY FOR FREE
                        </button>
                    </Link>
                </div>
                {/* Right: Form Card */}
                <div className="flex-1 flex justify-end z-10"
                    style={{
                        backgroundImage: "url('/images/bg7.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // transform: "rotate(-10deg)",
                    }}
                >
                    {/* <div className="w-full">
                        <img src="/images/bg7.png" alt="" />
                    </div> */}
                    <div className="bg-[#ffffff6b] rounded-2xl shadow-xl p-8 w-full max-w-sm">
                        <div className="text-gray-900 text-lg font-semibold my-6 text-center">
                            Get 15-day free trial
                        </div>
                        <form className="space-y-8 text-black" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name *"
                                className="w-full border bg-[#ffffff7f] border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425b9f]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                className="w-full border bg-[#ffffff5d] border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425b9f]"
                                required
                            />
                            <div className="flex">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number *"
                                    className="w-full border rounded bg-[#ffffff89] border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#425b9f]"
                                    required
                                />
                            </div>
                            <label className="flex items-center mt-2 text-xs text-gray-600">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={form.agree}
                                    onChange={handleChange}
                                    className="mr-2 accent-[#425b9f]"
                                    required
                                />
                                I agree to the&nbsp;
                                <a href="#" className="underline">Terms of Service</a> and&nbsp;
                                <a href="#" className="underline">Privacy Policy</a>.
                            </label>
                            <button
                                type="submit"
                                className="mt-3 w-full rounded bg-[#e53935] hover:bg-[#c62828] text-white font-bold py-3 text-base shadow transition"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "SIGN UP FOR FREE"}
                            </button>
                            {submitted && (
                                <div className="mt-4 text-green-700 bg-green-50 p-2 rounded text-center font-semibold">
                                    Thank you! We have received your request.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
