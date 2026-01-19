"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FiFilter } from "react-icons/fi";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("Woman");
  const [ageFrom, setAgeFrom] = useState(18);
  const [ageTo, setAgeTo] = useState(35);
  const [heightFrom, setHeightFrom] = useState(150);
  const [heightTo, setHeightTo] = useState(180);
  const [radius, setRadius] = useState(80);

  const ages = Array.from({ length: 43 }, (_, i) => i + 18);
  const heights = Array.from({ length: 71 }, (_, i) => i + 150);

  const profiles = [
    {
      id: 1,
      name: "Anna",
      age: 24,
      city: "New york",
      img: "/images/people1.png",
    },
    {
      id: 2,
      name: "Maryam",
      age: 36,
      city: "New york",
      img: "/images/people3.png",
    },
    {
      id: 3,
      name: "Jenny",
      age: 28,
      city: "New york",
      img: "/images/people6.png",
    },
    {
      id: 4,
      name: "Emma",
      age: 24,
      city: "New york",
      img: "/images/people8.png",
    },
    {
      id: 5,
      name: "Ameliya",
      age: 24,
      city: "New york",
      img: "/images/people8.png",
    },
    {
      id: 6,
      name: "Ava",
      age: 26,
      city: "New york",
      img: "/images/people6.png",
    },
    {
      id: 7,
      name: "Jemisha",
      age: 29,
      city: "New york",
      img: "/images/people3.png",
    },
    {
      id: 8,
      name: "Devil",
      age: 34,
      city: "New york",
      img: "/images/people1.png",
    },
    {
      id: 9,
      name: "Jenny",
      age: 28,
      city: "New york",
      img: "/images/people1.png",
    },
    {
      id: 10,
      name: "Emma",
      age: 24,
      city: "New york",
      img: "/images/people3.png",
    },
    {
      id: 11,
      name: "Maryam",
      age: 36,
      city: "New york",
      img: "/images/people8.png",
    },
    {
      id: 12,
      name: "Avi",
      age: 30,
      city: "New york",
      img: "/images/people6.png",
    },
  ];

  return (
    <div className="py-10 bg-[#FAFAFA] mt-20">
      <div className="px-4 md:px-5 max-w-7xl mx-auto">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#000D23]">
              Discover Matches
            </h2>
            <p className="text-[#666666]">
              Find people who share your interests and values
            </p>
          </div>

          {/* FILTER ICON */}
          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 flex items-center justify-center"
          >
            {/* <FiFilter size={20} className="text-[#000D23]" /> */}
            <Image
              src={"/images/Layer_1.png"}
              alt="filter icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <Link href={`/detail/${p.id}`} key={p.id}>
              <div className="bg-[#FFFFFF] rounded-xl shadow-sm border border-[#FFD2DB] overflow-hidden">
                <div className="relative w-full h-72">
                  <Image
                    fill
                    src={p.img}
                    alt={p.name}
                    className="object-cover"
                  />

                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="w-12 h-12 bg-white border border-[#CDCDCD] rounded-full shadow-md flex items-center justify-center">
                      <RxCross2 className="text-[#FF0000]" size={25} />
                    </div>

                    <div className="w-12 h-12 bg-gradient-to-r from-[#7B00F7] to-[#B66DFF] rounded-full shadow-md flex items-center justify-center">
                      <GoHeartFill className="text-white" size={25} />
                    </div>
                  </div>
                </div>

                <div className="text-center pt-8 pb-4">
                  <h3 className="font-semibold text-[18px] text-black">
                    {p.name}
                  </h3>
                  <p className="text-[#333333] text-sm">
                    Age: {p.age} · {p.city}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 pt-16 sm:pt-24">
          <div className="bg-white w-[92%] max-w-md rounded-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#000000]"
            >
              <RxCross2 size={22} />
            </button>

            <h3 className="text-lg font-semibold text-[#000000] mb-6">
              Filter for Your Matches
            </h3>

            {/* GENDER */}
            <p className="font-medium mb-2 text-[#000000]">Gender</p>
            <div className="flex gap-3 mb-5">
              {["Man", "Woman", "Nobinary"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-4 py-2 rounded-lg text-[#000000] text-sm ${
                    gender === g
                      ? "bg-[#FFCED8] text-[#EF4B6C]"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* AGE */}
            <p className="font-medium mb-2 text-[#000000]">Age</p>
            <div className="flex gap-3 mb-5">
              <select
                value={ageFrom}
                onChange={(e) => setAgeFrom(Number(e.target.value))}
                className="w-1/2 border rounded-lg p-4 bg-[#FAFAFA] text-[#000000] border-[#E6E6E6] select-black-arrow"
              >
                {ages.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
              <div className="mt-3 text-[#000000]">-</div>
              <select
                value={ageTo}
                onChange={(e) => setAgeTo(Number(e.target.value))}
                className="w-1/2 border text-[#000000] rounded-lg p-4 bg-[#FAFAFA] border-[#E6E6E6]  select-black-arrow"
              >
                {ages
                  .filter((a) => a >= ageFrom)
                  .map((a) => (
                    <option key={a}>{a}</option>
                  ))}
              </select>
            </div>

            {/* HEIGHT */}
            <p className="font-medium mb-2 text-[#000000]">Height</p>
            <div className="flex gap-3 mb-5">
              <select
                value={heightFrom}
                onChange={(e) => setHeightFrom(Number(e.target.value))}
                className="w-1/2 text-[#000000] border rounded-lg p-4 bg-[#FAFAFA] border-[#E6E6E6] select-black-arrow"
              >
                {heights.map((h) => (
                  <option key={h}>{h} cm</option>
                ))}
              </select>
              <div className="mt-3 text-[#000000]">-</div>
              <select
                value={heightTo}
                onChange={(e) => setHeightTo(Number(e.target.value))}
                className="w-1/2 text-[#000000] border rounded-lg p-4 bg-[#FAFAFA] border-[#E6E6E6] select-black-arrow"
              >
                {heights
                  .filter((h) => h >= heightFrom)
                  .map((h) => (
                    <option key={h}>{h} cm</option>
                  ))}
              </select>
            </div>

            {/* RADIUS */}
            <p className="font-medium mb-2 text-[#000000]">Search Radius</p>
            <input
              type="range"
              min="0"
              max="100"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full mb-1 accent-black"
            />
            <p className="text-right text-sm text-gray-500 mb-6">{radius} km</p>

            <button className="w-full py-3 bg-[#7B00F7] text-white rounded-lg font-semibold">
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
