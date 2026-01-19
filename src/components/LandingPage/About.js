"use client";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white flex justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-6 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* ⭐ LEFT IMAGE AREA */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Top decorative circle (Auto Resize) */}
          <img
            src="/images/bgimage.png"
            className="absolute -top-10 sm:-top-16 md:-top-20 -left-6 md:-left-20 sm:-left-13 w-40 sm:w-56 md:w-72 "
            alt="shape"
          />

          {/* Main Image */}
          <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/about.png"
              alt="couple"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* ⭐ RIGHT CONTENT BLOCK */}
        <img
          src="/images/bgimage.png"
          className="
    hidden sm:block absolute
    bottom-0 sm:-bottom-8 md:-bottom-7
    right-0 sm:-right-6 md:right-14
    w-32 sm:w-40 md:w-52 lg:w-56
    opacity-80 pointer-events-none z-0
  rotate-[-180deg]
  "
          alt="shape"
        />

        <div
          className="
    relative bg-white rounded-3xl
    p-6 sm:p-8 md:p-10
    shadow-[0px_20px_60px_rgba(0,0,0,0.12)]
    w-full lg:w-[700px] xl:w-[750px] z-20
    lg:-ml-30 xl:-ml-28
  "
        >
          <p className="text-[#7B00F7] text-sm sm:text-base font-semibold mb-2">
            About Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] leading-snug">
            Dating Better{" "}
            <span className="text-[#7B00F7]">Than Ever Before</span>
          </h2>

          <p className="text-[#000000] mt-4 text-sm sm:text-[15px] leading-relaxed">
            HeartConnect was founded in 2024 with a simple mission: to help
            people find genuine connections in an increasingly digital world. We
            believe that everyone deserves to find their perfect match, and
            we&apos;re committed to making that happen.
          </p>

          <p className="text-[#000000] mt-3 text-sm sm:text-[15px] leading-relaxed">
            Our platform combines advanced matching algorithms with a human
            touch, ensuring that every connection you make has the potential to
            be meaningful.
          </p>

          <button className="mt-6 px-6 sm:px-8 py-3 cursor-pointer bg-[#7B00F7] text-[#FFFFFF] rounded-lg font-semibold text-sm shadow-md">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
