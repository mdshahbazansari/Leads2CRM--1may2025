"use client";

import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <>
    <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 pt-32 pb-10 lg:flex-row ">
      {/* Left Section */}
      <div className="w-full space-y-6 lg:w-5/12">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
          Get in Touch
        </h4>
        <h2 className="text-3xl font-semibold leading-snug text-[#0A0033] lg:text-4xl">
          Find Us Here. Make Real <br /> Results Happen.
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-full bg-[#0400d2] p-3 text-white">
            <SlLocationPin />
            </div>
            <div>
              <p className="font-semibold text-[#0A0033]">Locations</p>
              <p className="text-sm text-gray-700">
                New Delhi,India
              </p>

              <p className="text-sm text-gray-700">
              Dubai,UAE
              </p>

              <p className="text-sm text-gray-700">
              Jeddah, Saudai Arabia
              </p>



            </div>
          </div>

          {/* <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-full bg-[#0400d2] p-3 text-white">
            <IoIosCall />
            </div>
            <div>
              <p className="font-semibold text-[#0A0033]">Any Questions?</p>
              <p className="text-sm text-gray-700">+96 1234567892</p>
            </div>
          </div> */}

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-full bg-[#0400d2] p-3 text-white">
            <MdEmail />
            </div>
            <div>
              <p className="font-semibold text-[#0A0033]">Write Email</p>
              <p className="text-sm text-gray-700">info@leads2crm.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <form className="w-full space-y-5 rounded-lg bg-white px-4 lg:px-8 py-10 shadow-xl lg:w-6/12">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 bg-slate-200 px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5000d2]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 bg-slate-200 px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5000d2]"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-md border border-gray-300 bg-slate-200 px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5000d2]"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full rounded-md border border-gray-300 bg-slate-200 px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5000d2]"
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Apps Needed
          </label>
          <div className="max-h-32 space-y-2 overflow-y-auto rounded-md border border-gray-300 p-3">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="accent-[#5000d2]" /> Zoho CRM
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="accent-[#5000d2]" /> Zoho
              Payroll KSA
            </label>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 ">
            Customer Requirements
          </label>
          <textarea
            placeholder="Customer Requirements"
            className="min-h-[120px] w-full rounded-md border border-gray-300 bg-slate-200 px-4 py-3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5000d2]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#0400d2] py-3 font-semibold text-white transition hover:bg-[#4274ff]"
        >
          SEND
        </button>
      </form>

      

    </section>

    {/* Location Maps Section */}
    <div className="space-y-2 py-10 px-6 text-black">
    <h3 className="text-3xl font-semibold text-center py-6 font-sans">Our Locations</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {/* New Delhi */}
      <div className="space-y-2">
        <h4 className="font-sans font-normal text-center">New Delhi, India</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.80721420755!2d77.04417224953296!3d28.52755440935843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b6a69319c1%3A0x6c1c08e61182b6e4!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1589987485271!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen
          loading="lazy"
          className="rounded-md border"
        ></iframe>
      </div>

      {/* Dubai */}
      <div className="space-y-2">
        <h4 className="font-sans font-normal text-center">Dubai, UAE</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.379240239571!2d55.27078211501194!3d25.204849983897967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43490812c34f%3A0xc8c06b38fd4ffb9c!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1589987604717!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen
          loading="lazy"
          className="rounded-md border"
        ></iframe>
      </div>

      {/* Jeddah */}
      <div className="space-y-2">
        <h4 className="font-sans font-normal text-center">Jeddah, Saudi Arabia</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5129583609056!2d39.19797121500478!3d21.48581197961639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d14295e0c477%3A0x4b11bd4e544bf35d!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1589987738385!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen
          loading="lazy"
          className="rounded-md border"
        ></iframe>
      </div>
    </div>
  </div>

  </>
  );
};

export default ContactForm;
