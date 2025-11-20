"use client";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="w-full py-24 relative flex justify-center items-center bg-[#FFFFFF]">
      {/* --- SECTION WRAPPER --- */}
      <div className="max-w-[1400px] w-full mx-auto px-6 relative flex flex-col lg:flex-row items-center justify-center ">
        {/* ---------------- LEFT IMAGE BOX ---------------- */}
        <div className="relative flex justify-center w-full lg:w-1/2">
          {/* Top-left Decorative Shape */}
          <img
            src="/images/bgimage.png"
            className="absolute -top-24 left-3 w-80 h-80 pointer-events-none"
            alt="shape"
          />

          {/* Main Image Frame */}
          <div className="relative z-10 w-[95%] lg:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/about.png"
              alt="couple"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* ---------------- RIGHT CARD BOX ---------------- */}
        <div
          className="
            bg-white p-10 lg:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            w-full lg:w-[48%]
            lg:w-1/2 flex flex-col justify-center
          "
        >
          {/* Top-right Decorative Shape */}
          <img
            src="/images/bgimage2.png"
            className="absolute top-1 right-20 w-50 h-50 pointer-events-none"
            alt="shape"
          />

          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-[#EF4B6C] mb-2">
              About Us
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] leading-snug">
              Dating Better{" "}
              <span className="text-[#EF4B6C]">Than Ever Before</span>
            </h2>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              HeartConnect was founded in 2024 with a simple mission: to help
              people find genuine connections in an increasingly digital world.
              We believe that everyone deserves to find their perfect match.
            </p>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Our platform combines advanced matching algorithms with a human
              touch, ensuring that every connection you make has the potential
              to be meaningful.
            </p>

            <button className="mt-6 px-7 py-3 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg text-sm font-semibold shadow-md">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
