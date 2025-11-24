"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoHeartFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const profiles = [
    {id: 1, name: "Anna", age: 24, city: "New york", img: "/images/people1.png" },
    {id: 2, name: "Maryam", age: 36, city: "New york", img: "/images/people3.png" },
    {id: 3, name: "Jenny", age: 28, city: "New york", img: "/images/people6.png" },
    {id: 4, name: "Emma", age: 24, city: "New york", img: "/images/people8.png" },
    {id: 5, name: "Ameliya", age: 24, city: "New york", img: "/images/people8.png" },
    {id: 6, name: "Ava", age: 26, city: "New york", img: "/images/people6.png" },
    {id: 7, name: "Jemisha", age: 29, city: "New york", img: "/images/people3.png" },
    {id: 8, name: "Devil", age: 34, city: "New york", img: "/images/people1.png" },
    {id: 9, name: "Jenny", age: 28, city: "New york", img: "/images/people1.png" },
    {id: 10, name: "Emma", age: 24, city: "New york", img: "/images/people3.png" },
    {id: 11, name: "Maryam", age: 36, city: "New york", img: "/images/people8.png" },
    {id: 12, name: "Avi", age: 30, city: "New york", img: "/images/people6.png" },
  ];

  return (
    <div className="px-4 md:px-24 py-10 bg-[#FAFAFA]">
      
      <h2 className="text-xl md:text-2xl font-semibold mb-1 text-[#000D23]">Discover Matches</h2>
      <p className="text-[#666666] mb-6">Find people who share your interests and values</p>

      {/* GRID 1 → 2 → 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {profiles.map((p, i) => (
          // <Link href={`/detail/${p.id}`} key={p.id}>
          <div
            key={i}
            className="bg-[#FFFFFF] rounded-xl shadow-sm border border-[#FFD2DB] overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative w-full h-72">
              <Image fill src={p.img} alt={p.name} className="object-cover" />

              {/* ICONS — EXACT HALF OVERLAP */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-4">

                {/* CANCEL */}
                <div className="w-12 h-12 bg-[#FFFFFF] border border-[#CDCDCD] rounded-full shadow-md flex items-center justify-center">
                  <RxCross2 className="text-[#FF0000]" size={25}/>
                </div>

                {/* HEART */}
                <div className="w-12 h-12 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] rounded-full shadow-md flex items-center justify-center">
                  <GoHeartFill className="text-[#FFFFFF]" size={25}/>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center pt-8 pb-4">
              <h3 className="font-semibold text-[18px] text-[#000000]">{p.name}</h3>
              <p className="text-[#333333] text-sm">
                Age: {p.age} · {p.city}
              </p>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
