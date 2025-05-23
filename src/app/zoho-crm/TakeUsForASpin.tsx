// components/TakeUsForASpin.jsx
import { FaPlay } from "react-icons/fa";

export default function TakeUsForASpin() {
    return (
        <>
            <section className="relative mt-20 rounded-2xl md:min-h-screen min-h-40 md:mx-32 mx-4 flex flex-col items-center justify-start bg-gradient-to-b from-[#e9e2f6] via-[#e7f0fa] to-[#f7ecd9] pt-12 pb-4">
                {/* Headline and Button */}
                <div className="w-full flex flex-col items-center mb-0">
                    <h1 className="text-3xl md:text-7xl font-bold text-center text-[#2176ff] mt-4 my-6 leading-tight">
                        Take us for a spin!
                    </h1>
                    <button className="flex items-center gap-3 px-6 py-4 md:py-4 md:px-4 rounded-full bg-[#e53935] hover:bg-[#c62828] transition text-white text-md md:text-xl font-semibold shadow-lg mb-8">
                        WATCH OVERVIEW
                        <span className="bg-white bg-opacity-20 rounded-full p-2 flex items-center justify-center">
                            <FaPlay className="text-white text-lg" />
                        </span>
                    </button>
                </div>
                {/* CRM Mockup */}
                <div className="w-full flex justify-center">
                    <div className="relative overflow-hidden max-w-6xl w-full">
                        <img src="/video/crm-home.svg"></img>
                    </div>
                </div>
            </section>
            <div className="relative mt-6 md:mt-10 rounded-2xl min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#fff7c2] via-[#fffccc] to-[#ffedcd77] py-12">
                <div className="mx-auto flex-col items-center justify-center">
                    <div className=" my-6 md:my-10">
                        <h1 className="text-3xl md:text-6xl text-center text-black font-semibold">Perfect for your <br />
                            sales,
                            marketing, service,</h1>
                        <p className="text-2xl text-center text-gray-500 my-4">and other customer-facing teams</p>
                    </div>
                    <div className="mx-auto px-2 flex my-10 items-center justify-center">
                        <img src="video/zcplus-integration-concept.svg" alt="zcplus-integration-concept" />
                    </div>
                </div>
            </div>
        </>
    );
}
