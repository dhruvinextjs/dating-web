"use client";
import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Advertise from "./LandingPage/Advertise";

export default function ContactUs() {
  return (
    <div className="w-full bg-[#ffffff]">
      {/* ===== BANNER WITH BG IMAGE ===== */}
      <div
        className="relative w-full py-40 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-[#1C2023CC]" />

        {/* content */}
        <div className="relative z-10 text-center">
          <h1 className="text-[#FEFEFE] text-3xl md:text-4xl font-bold">
            CONTACT US
          </h1>
          <p className="text-[#FFFFFF] mt-3 text-sm md:text-base">
            Fill up the form and our team will get back to you within 24 hours
          </p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-16 relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Form */}
          <div
            className="
              md:col-span-7 
              lg:col-span-8 
              bg-[#FFFFFF] rounded-3xl shadow-lg p-6 md:p-8
            "
          >
            <h2 className="font-semibold text-lg mb-4 text-[#000000]">
              Get A Free Quote
            </h2>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-[#23272D]">Name*</label>
                <input
                  className="w-full mt-1 px-3 py-2 border text-[#000000] border-[#CCCCCC] rounded-md bg-[#FAFAFA] outline-none"
                  placeholder="Enter First Name"
                />
              </div>

              <div>
                <label className="text-sm text-[#23272D]">Email*</label>
                <input
                  className="w-full mt-1 px-3 py-2 text-[#000000] border border-[#CCCCCC] bg-[#FAFAFA] rounded-md outline-none"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="text-sm text-[#23272D]">Phone No.*</label>
                <input
                  className="w-full mt-1 px-3 py-2 text-[#000000] border border-[#CCCCCC] bg-[#FAFAFA] rounded-md outline-none"
                  placeholder="Enter Phone No."
                />
              </div>

              <div>
                <label className="text-sm text-[#23272D]">
                  Please tell us in detail. The more we know about your query.*
                </label>
                <textarea
                  rows={4}
                  className="w-full mt-1 px-3 py-2 text-[#000000] border border-[#CCCCCC] bg-[#FAFAFA] rounded-md outline-none"
                  placeholder="Write your message here"
                />
              </div>

              <button className="bg-[#7B00F7] text-[#ffffff] px-8 py-2 rounded-md">
                SEND
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div
            className="
              md:col-span-5 
              lg:col-span-4 
              bg-[#FFFFFF] rounded-3xl shadow-lg p-6 md:p-8 
              flex flex-col justify-between
            "
          >
            <div className="mt-4 md:mt-10 text-center">
              <h3 className="font-semibold text-2xl mb-2 text-[#272727]">
                Other ways to connect
              </h3>
              <p className="text-md text-[#333333] mb-6">
                Whatsapp, Email whatever works for you. We&apos;ll be here.
              </p>

              <div className="space-y-3">
                <button className="w-full flex gap-2 justify-center bg-[#25D366] text-[#FFFFFF] py-4 rounded-full">
                  <FaWhatsapp /> WHATSAPP
                </button>
                <button className="w-full flex gap-2 justify-center bg-[#1C2023] text-[#FFFFFF] py-4 rounded-full">
                  <FaEnvelope /> EMAIL
                </button>
                <button className="w-full flex gap-2 justify-center bg-gradient-to-r from-[#7B00F7] to-[#B66DFF] text-[#FFFFFF] py-4 rounded-full">
                  <FaPhoneAlt /> PHONE
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-[#272727] mb-4">
                Socialize with us.
              </p>
              <div className="flex justify-center gap-4">
                <FaFacebookF className="bg-[#006AF7] rounded-full p-3 text-5xl text-[#FFFFFF]" />
                <FaTwitter className="bg-[#000000] rounded-full p-3 text-5xl text-[#FFFFFF]" />
                <FaInstagram className="bg-gradient-to-b from-[#D50195] via-[#FF0000] to-[#FFA201] rounded-full p-3 text-5xl text-white" />
                <FaLinkedinIn className="bg-[#0065CA] rounded-full p-3 text-5xl text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advertise/>
    </div>
  );
}