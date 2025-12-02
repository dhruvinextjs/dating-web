"use client";
import React from "react";
import Image from "next/image";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      text: "The cybersecurity solutions provided by Nexus gave us peace of mind. We now feel confident knowing our data and systems are fully protected The cybersecurity solutions provided.",
      img: "/images/testimonial1.jpg",
      name: "Priya Sharma",
      date: "12 March 2024",
    },
    {
      text: "The cybersecurity solutions provided by Nexus gave us peace of mind. We now feel confident knowing our data and systems are fully protected The cybersecurity solutions provided.",
      img: "/images/testimonial2.jpg",
      name: "Rionna kens",
      date: "25 Feb 2024",
    },
    {
      text: "The cybersecurity solutions provided by Nexus gave us peace of mind. We now feel confident knowing our data and systems are fully protected The cybersecurity solutions provided.",
      img: "/images/testimonial1.jpg",
      name: "Simran Kaur",
      date: "05 Jan 2024",
    },
  ];

  return (
    <section className="w-full py-24 flex flex-col items-center relative px-6">
      {/* Background Image */}
      {/* Dark Background - Bottom Layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/dark-bg.png"
          alt="dark background"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Light Background - Top Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/step-bg.jpg"
          alt="light overlay"
          fill
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/images/step-bg.jpg"
          alt="testimonial background"
          fill
          className="object-cover w-full h-full"
        />
      </div> */}

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center">
        What Our <span className="text-[#EF4B6C]">Clients Say</span>
      </h2>

      {/* Paragraph */}
      <p className="text-[#000000] text-sm text-center max-w-xl mt-3">
        Here&apos;s what our clients think about us.
      </p>

      {/* Slider */}
      <div className="w-full max-w-6xl mt-12">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination", // ★ custom pagination target
          }}
          spaceBetween={30}
          className="pb-16" // ★ extra bottom space for dots
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 h-full flex flex-col justify-between">
                <p className="text-[#555555] text-sm leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-[#000000] text-sm">
                      {item.name}
                    </h4>
                    <p className="text-[#777777] text-xs">{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ★ Dots Perfectly Below Slider */}
        <div className="custom-swiper-pagination flex justify-center mt-8 !relative"></div>
      </div>
    </section>
  );
}
