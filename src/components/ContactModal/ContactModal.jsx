import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactModal({ showModal, closeModal }) {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl shadow-2xl p-10 relative w-full max-w-6xl">
            <button
              className="absolute top-3 right-4 text-white text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="grid md:grid-cols-2 gap-10 text-white">
              {/* Left Side Info */}
              <div>
                <h2 className="text-3xl font-bold mb-2">Let&apos;s Discuss Your Project</h2>
                <h3 className="text-xl font-semibold mb-6">Contact us</h3>
                <ul className="space-y-4 text-base">
                  <li className="flex items-center gap-3">
                    <FaPhoneAlt className="text-lg" /> 04 566 8044
                  </li>
                  <li className="flex items-center gap-3">
                    <FaWhatsapp className="text-lg" /> WhatsApp
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-lg" /> info@belsonsdigital.com
                  </li>
                </ul>
              </div>

              {/* Right Side Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Free 60-Minute Consultation</h2>
                <form className="space-y-5 text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full rounded-full px-4 py-2 bg-white text-black" />
                    <input type="tel" placeholder="Phone" className="w-full rounded-full px-4 py-2 bg-white text-black" />
                    <input type="email" placeholder="Email" className="w-full rounded-full px-4 py-2 bg-white text-black" />
                    <input type="text" placeholder="Website" className="w-full rounded-full px-4 py-2 bg-white text-black" />
                  </div>
                  <div className="bg-white rounded-3xl p-4 space-y-2 text-gray-900">
                    <label className="block font-semibold text-gray-700">Select Service(s)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-1" /> SEO
                      </label>
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-1" /> Google Ads
                      </label>
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-1 accent-white bg-white" /> Social Media
                      </label>
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-1" /> Graphic Designing
                      </label>
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Content Writing
                      </label>
                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Website
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Web Development
                      </label>

                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Mobile App Development (iOS & Android)
                      </label>

                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> System Integration & API Development
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" />Custom Software Solutions
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> E-Commerce Store Setup
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Zoho CRM & Zoho Creator Services
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> ERP Setup for Growing Businesses (Zoho & Odoo)
                      </label>


                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> UI/UX Design
                      </label>

                      <label className="flex items-start">
                        <input type="checkbox" className="mr-2" /> Cloud Hosting & Deployment
                      </label>



















                    </div>
                  </div>
                  <textarea placeholder="Type your message" className="w-full rounded-3xl px-4 py-2 bg-white text-black" rows={2}></textarea>
                  <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 py-2 shadow-lg">
                    SUBMIT ↗
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
