"use client";
import React from "react";
import Image from "next/image";

export default function Advertise() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full relative overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/banner.jpg"   // ← apni image ka path
          alt="advertise background"
          fill
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(123, 0, 247, 0.66) 0%, rgba(123, 0, 247, 0.66) 100%), linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1))",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 py-16 md:py-24 px-6 text-center flex flex-col items-center">
          
          {/* Heading */}
          <h2 className="text-[#FFFFFF] text-3xl md:text-4xl font-bold max-w-2xl leading-snug">
            Ready to Find Your Perfect Match?
          </h2>

          {/* Button */}
          <button className="mt-8 px-5 font-semibold py-3 text-[#FFFFFF] border border-[#FFFFFF] rounded-lg uppercase text-base md:text-md hover:bg-white hover:text-[#7B00F7] transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
