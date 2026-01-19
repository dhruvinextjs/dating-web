"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
 
export default function Likespage() {
  const [showModal, setShowModal] = useState(false);
  const [matchedUser, setMatchedUser] = useState(null);
 
  const profiles = [
    { id: 1, name: "Anna", age: 24, city: "New york", img: "/images/people1.png" },
    { id: 2, name: "Maryam", age: 36, city: "New york", img: "/images/people3.png" },
    { id: 3, name: "Jenny", age: 28, city: "New york", img: "/images/people6.png" },
    { id: 4, name: "Emma", age: 24, city: "New york", img: "/images/people8.png" },
    { id: 5, name: "Emma", age: 24, city: "New york", img: "/images/people8.png" },
    { id: 6, name: "Emma", age: 24, city: "New york", img: "/images/people8.png" },
  ];
 
  const handleMatch = (profile) => {
    setMatchedUser(profile);
    setShowModal(true);
  };
 
  return (
    <div className="py-10 bg-[#FAFAFA] mt-20 relative">
      <div className="px-4 md:px-5 max-w-7xl mx-auto">
        <h2 className="text-xl text-[#000000] md:text-2xl font-semibold mb-1">Who likes me</h2>
        <p className="text-[#666] mb-6">People are interested in connecting with you</p>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-sm border border-[#FFD2DB] overflow-hidden"
            >
              <div className="relative w-full h-72">
                <Image fill src={p.img} alt={p.name} className="object-cover" />
 
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-4">
                  {/* CANCEL */}
                  <div className="w-12 h-12 bg-white border border-[#CDCDCD] rounded-full flex items-center justify-center shadow">
                    <RxCross2 className="text-red-500" size={25} />
                  </div>
 
                  {/* HEART */}
                  <button
                    onClick={() => handleMatch(p)}
                    className="w-12 h-12 bg-gradient-to-r from-[#7B00F7] to-[#B66DFF] rounded-full flex items-center justify-center shadow"
                  >
                    <GoHeartFill className="text-white" size={25} />
                  </button>
                </div>
              </div>
 
              <div className="text-center pt-8 pb-4">
                <h3 className="font-semibold text-lg text-[#000000]">{p.name}</h3>
                <p className="text-sm text-gray-600">
                  Age: {p.age} · {p.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* ================= MODAL ================= */}
      {showModal && matchedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl w-[320px] p-10 text-center relative">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3"
            >
              <RxCross2 size={22} />
            </button>
 
 
 
            {/* Images */}
            <div className="relative flex justify-center items-center mb-4">
 
              {/* Left Image */}
              <Image
                src="/images/bpeople1.png"
                width={120}
                height={60}
                className="rounded-full h-30 border-2 border-[#7B00F7] object-cover"
                alt="you"
              />
 
              {/* Center Icon/Image */}
              <div className="absolute z-10 bg-white rounded-full border-2 border-[#7B00F7] w-[48px] h-[48px] flex items-center justify-center">
                <Image
                  src="/images/icon4.png"   // 👈 image me jo center icon hai
                  width={24}
                  height={24}
                  alt="match"
                />
              </div>
 
              {/* Right Image */}
              <Image
                src={matchedUser.img}
                width={120}
                height={60}
                className="rounded-full h-30 border-2 border-[#7B00F7] object-cover -ml-5 mb-8"
                alt={matchedUser.name}
              />
 
            </div>
 
 
            <h3 className="text-[#7B00F7] font-bold tracking-wider">
              CONGRATULATIONS
            </h3>
            <p className="text-sm text-[#4D4D4D] mt-2 tracking-wider">
              You have matched with {matchedUser.name}!
            </p>
 
            <button className="mt-5 w-[80%] bg-[#7B00F7] text-white py-2 rounded-lg font-medium">
              SEND MESSAGE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}