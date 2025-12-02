"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFAFB] pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1️⃣ Column 1 – Logo + Contact + Social */}
        <div className="flex flex-col">
          <div className="relative w-44 h-20"> 
            <Image
              src={"/images/Logo.png"}
              alt="logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Phone */}
          <div className="flex -mt-8 items-start gap-3 mb-2">
            <FiPhone size={20} className="text-[#EF4B6C] mt-1" />
            <span className="text-[#555555] text-sm leading-relaxed">
              +1 123 4567 658
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FiMapPin size={20} className="text-[#EF4B6C] mt-1" />
            <span className="text-[#555555] text-sm leading-relaxed">
              Beverley, New York 224 USA
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFDBE1] border border-[#FAD2D8] text-[#EF4B6C] hover:bg-[#EF4B6C] hover:text-white transition">
              <FaFacebookF size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFDBE1] border border-[#FAD2D8] text-[#EF4B6C] hover:bg-[#EF4B6C] hover:text-white transition">
              <FaXTwitter size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFDBE1] border border-[#FAD2D8] text-[#EF4B6C] hover:bg-[#EF4B6C] hover:text-white transition">
              <FaInstagram size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFDBE1] border border-[#FAD2D8] text-[#EF4B6C] hover:bg-[#EF4B6C] hover:text-white transition">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* 2️⃣ Column 2 – Company */}
        <div>
          <h3 className="text-lg font-semibold text-[#EF4B6C] mb-4">Company</h3>
          <ul className="space-y-4 text-sm text-[#555555]">
            <li className="hover:text-[#EF4B6C] cursor-pointer">About Us</li>
            <li className="hover:text-[#EF4B6C] cursor-pointer">Contact</li>
            <li className="hover:text-[#EF4B6C] cursor-pointer">Safety</li>
          </ul>
        </div>

        {/* 3️⃣ Column 3 – Legal */}
        <div>
          <h3 className="text-lg font-semibold text-[#EF4B6C] mb-4">Legal</h3>
          <ul className="space-y-4 text-sm text-[#555555]">
            <li className="hover:text-[#EF4B6C] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#EF4B6C] cursor-pointer">Terms Conditions</li>
          </ul>
        </div>

        {/* 4️⃣ Column 4 – Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#EF4B6C] mb-4">Support</h3>
          <p className="text-sm text-[#555555] cursor-pointer hover:text-[#EF4B6C]">
            support@datingwebsite.com
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-[#FAD2D8] mt-10 mb-4 max-w-7xl mx-auto"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-[#777777]">
        © {new Date().getFullYear()} LoveConnect. All rights reserved.
      </p>
    </footer>
  );
}
