"use client";
import React from "react";
import Image from "next/image";

export default function RateSection() {
  return (
    <section className="w-full px-6 py-20 flex justify-center">
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden relative p-10 md:p-16">

        {/* Background Image */}
        <Image
          src="/images/rate-bg.png"
          alt="stats background"
          fill
          className="object-cover object-center"
        />

        {/* Figma Exact Double Gradient Overlay */}
        <div className="absolute inset-0">
          {/* BACKGROUND DARK OVERLAY */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.10)]"></div>

          {/* RIGHT → LEFT MAIN COLOR GRADIENT WITH OPACITY 0.86 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(239,75,108,0.86)] to-[rgba(253,117,79,0.86)]"></div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-[#FFFFFF] z-10">
          <div>
            <h2 className="text-4xl font-bold">12,540+</h2>
            <p className="mt-2 text-sm md:text-base opacity-90">Active Users</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">55,200+</h2>
            <p className="mt-2 text-sm md:text-base opacity-90">Successful Matches</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">98%</h2>
            <p className="mt-2 text-sm md:text-base opacity-90">Satisfaction Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}
