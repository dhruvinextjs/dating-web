"use client";
import React from "react";
import Image from "next/image";

export default function Safety() {
  return (
    <section className="w-full">
      {/* ===== TOP BANNER ===== */}
      <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px] mt-20 flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/bgimage.jpg"
          alt="Safety Banner"
          fill
          priority
          className="object-top"
        />

        {/* Gradient Overlay (lighter so image is visible) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(123, 0, 247, 0.9) 0%, rgba(182, 109, 255, 0.9) 100%)",
          }}
        />

        {/* Title */}
        <h1 className="relative z-10 text-[#FEFEFE] text-2xl sm:text-3xl md:text-5xl font-semibold uppercase">
          SAFETY
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 text-[#333333]">
          <p className="text-sm sm:text-base leading-relaxed mb-5">
            Lorem Ipsum Is Simply Dummy Text Printing.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-5">
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text
            Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-5">
            Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since
            The 1500s, When An Unknown Printer Took A Galley Of Type And
            Scrambled It To Make A Type Specimen Book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
    </section>
  );
}
