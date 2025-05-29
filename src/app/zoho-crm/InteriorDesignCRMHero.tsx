// components/InteriorDesignCRMHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function InteriorDesignCRMHero() {
    return (
        <section className="bg-white w-full py-10 px-4 md:px-0">
            <h1 className="text-3xl md:text-6xl md:py-10 py-4 text-center font-extrabold text-mai mb-4 leading-tight">
                Interior design CRM<br className="hidden md:block" /> software
            </h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-700 mb-4">
                        Optimize client projects with interior design CRM software
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg mb-3">
                        Even the simplest interior design project has many moving parts, from managing clients and vendors to tracking timelines.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-3">
                        Interior design CRM software brings all client interactions, documents and project management tools into one centralized system.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-6">
                        Discover how Lead2CRM interior design CRM software helps you nurture client relationships and deliver exceptional results.
                    </p>
                    <Link href="/contact-us"><button className="bg-mai hover:bg-maihover text-white font-bold text-lg px-8 py-3 rounded mt-2 transition">
                        Try for free
                    </button></Link>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex items-center justify-center md:justify-end">
                    <div className="w-full max-w-full m-2 overflow-hidden ">
                        <Image
                            src="/images/zoho/zoho-crm/Customizable-reports.svg" // Use your image path here
                            alt="Interior design CRM"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 mt-10">

                <div className="flex-1 flex items-start gap-8 justify-center md:justify-end mt-8 md:mt-0">
                    <div className="flex-1 flex items-center justify-center md:justify-end">
                        <div className="w-full max-w-full m-2 overflow-hidden ">
                            <Image
                                src="/images/zoho/zoho-crm/Segmentation-of-leads.svg" // Use your image path here
                                alt="Interior design CRM"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
                {/* Left: Text */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-700 mb-4">
                        Create unique client experiences with a customizable CRM
                    </h2>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        Every interior design business has its own way of working, and more rigid CRM systems force you to adapt how you work.
                    </p>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        A fully customizable CRM enables you to shape the software around your business, ensuring that every feature aligns with your unique design process.
                    </p>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        Lead2CRM makes it easy to create custom pipelines, fields and stages that perfectly suit your business operations.
                    </p>
                    <p className="text-[#1a2734] text-base md:text-lg">
                        Discover Lead2CRM <a href="/contact-us" className="text-mai underline font-medium">customizable CRM features.</a>
                    </p>
                </div>
                {/* Right: Graphics */}

            </div>
        </section>
    );
}
