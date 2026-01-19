"use client";
import Image from "next/image";
import React from "react";
import ChooseSection from "./LandingPage/ChooseSection";
import Advertise from "./LandingPage/Advertise";

export default function AboutSection() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: "/images/person1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Co-Founder",
      image: "/images/person2.jpg",
    },
    {
      id: 3,
      name: "Alex Brown",
      role: "CTO",
      image: "/images/person1.png",
    },
    {
      id: 4,
      name: "Emily Clark",
      role: "Marketing Head",
      image: "/images/person2.jpg",
    },
    {
      id: 5,
      name: "David Lee",
      role: "Designer",
      image: "/images/person1.png",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      role: "HR Manager",
      image: "/images/person2.jpg",
    },
    {
      id: 7,
      name: "Michael Scott",
      role: "Product Manager",
      image: "/images/person1.png",
    },
    {
      id: 8,
      name: "Olivia Martin",
      role: "Developer",
      image: "/images/person2.jpg",
    },
  ];

  return (
    <section className="w-full">
      {/* ===== TOP GRADIENT BANNER ===== */}
      <div className="w-full bg-gradient-to-r from-[#7B00F7] to-[#B66DFF] py-28 mt-20 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-center text-[#FEFEFE]">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 uppercase">
            About Us
          </h1>
          <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
            Deep expertise, relentless dedication and enthusiastic curiosity is
            what makes us unique.
          </p>
        </div>
      </div>

      {/* ===== CENTER TEXT ===== */}
      <div className="bg-[#ffffff] py-10 pb-10">
        <p className="max-w-6xl mx-auto px-4 text-center text-sm text-[#666666] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proiden.
        </p>
      </div>

      {/* ===== CARDS SECTION ===== */}
      <div className="py-16 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <div className="relative bg-[#F7F7F7] rounded-4xl border border-[#E6E6E6] p-10 pt-14">
            {/* <div className="absolute -top-20 left-6 w-50 h-50 rounded-xl bg-[#EBEBEB] flex items-center justify-center"> */}
            <div className="absolute -top-14 sm:-top-20 left-4 sm:left-6 w-40 h-40 sm:w-50 sm:h-50 rounded-xl bg-[#EBEBEB] flex items-center justify-center">
              <Image
                src="/images/about1.png"
                alt="Vision"
                width={180}
                height={180}
              />
            </div>

            <div className="mt-25">
              <h3 className="text-2xl font-bold mb-2 text-[#000000]">
                Our Vision
              </h3>
              <p className="text-sm text-[#000000] leading-7">
                We aim to help businesses thrive on unique ideas turned into
                high performance digital solutions. We strive to make real-world
                impact through creative problem solving for businesses.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-[#F7F7F7] rounded-4xl border border-[#E6E6E6] p-6 pt-14">
            <div className="absolute -top-20 left-6 w-50 h-50 rounded-xl bg-[#EBEBEB] flex items-center justify-center">
              <Image
                src="/images/about2.png"
                alt="Mission"
                width={160}
                height={160}
              />
            </div>

            <div className="mt-25">
              <h3 className="text-2xl font-bold mb-2 mt-20 text-[#000000]">
                Our Mission
              </h3>
              <p className="text-sm text-[#000000] leading-7">
                Our mission is to leverage the latest technologies, time-tested
                domain expertise and knowledge of industry trends to deliver
                ahead-of-the-curve solutions that thrives and scales with the
                business growth.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* ===== BOTTOM SECTION ===== */}
      <div className="py-0">
        <div
          className="py-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-bg.png')" }}
        >
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* ===== MOBILE / IPAD : SINGLE IMAGE ===== */}
            <div className="lg:hidden flex justify-center mb-10">
              <div className="relative w-[260px] h-[260px] rounded-xl overflow-hidden">
                <Image
                  src="/images/couple1.jpg"
                  alt="Couple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ===== DESKTOP : EXACT SAME IMAGE LAYOUT ===== */}
            <div className="relative w-full hidden lg:flex justify-center lg:justify-start ">

              {/* IMAGE 1 */}
              <div className="absolute -left-2 top-30">
                <Image
                  src="/images/couple2.jpg"
                  alt="Nick and Marie"
                  width={250}
                  height={250}
                  className="rounded-xl"
                />
                <span className="absolute text-[#000000] top-16 -left-10 bg-white text-xs font-bold px-4 py-3 rounded-lg shadow">
                  Nick and Marie
                </span>
              </div>

              {/* IMAGE 2 */}
              {/* <div className="relative z-10 bottom-16 left-40"> */}
              <div className="relative z-10 bottom-12 lg:bottom-16 left-28 lg:left-40">
                <div className="relative w-[260px] h-[260px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/couple1.jpg"
                    alt="Albert and Jassie"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute text-[#000000] top-16 -right-16 bg-white text-xs font-bold px-4 py-3 rounded-lg shadow">
                  Albert and Jassie
                </span>
              </div>

              {/* IMAGE 3 */}
              {/* <div className="absolute left-70 z-20 top-26"> */}
              <div className="absolute left-48 lg:left-70 z-20 top-24 lg:top-26">
                <div className="relative w-[200px] h-[230px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/couple3.jpg"
                    alt="Amandie and Carry"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute text-[#000000] bottom-10 -left-10 bg-white text-xs font-bold px-2 py-3 rounded-lg shadow">
                  Amandie and Carry
                </span>
              </div>
            </div>
            {/* RIGHT CONTENT */}
            {/* <div className="w-full lg:w-160 px-2 sm:px-0"> */}
            <div className="w-full md:max-w-full lg:w-160 px-2 sm:px-0">

              <h2 className="text-2xl lg:text-3xl text-[#222222] font-bold mb-4">
                LOREM IPSUM TEXT
              </h2>
   
              <p className="text-md text-[#666666] leading-relaxed break-words">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="text-md text-[#666666] leading-relaxed break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TEXT LEFT - IMAGE RIGHT SECTION ===== */}
      <div className="py-6 about-split-section pb-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          {/* LEFT TEXT */}
          <div className="about-split-text">
            <h2 className="text-3xl text-[#222222] font-bold mb-4 uppercase">
              Lorem ipsum text
            </h2>

            <p className="text-sm lg:text-md text-[#666666] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-sm lg:text-md text-[#666666] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-split-image flex justify-center lg:justify-end">
            <div className="relative w-[550px] h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/about-new.jpg"
                alt="About Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MEET OUR TEAM SECTION ===== */}
      <div className="py-20 bg-[#FEF8F9]">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <h2 className="text-3xl font-bold text-center text-[#222222] mb-12">
            Meet Our Team
          </h2>

          {/* TEAM GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-full aspect-square overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#222222]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#666666]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChooseSection/>
      <Advertise/>
    </section>
  );
}
