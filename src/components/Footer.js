"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FCFAFF] pt-16 pb-6 px-6">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <FiPhone size={20} className="text-[#7B00F7] mt-1" />
            <span className="text-[#333333] text-sm leading-relaxed">
              +1 123 4567 658
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FiMapPin size={20} className="text-[#7B00F7] mt-1" />
            <span className="text-[#333333] text-sm leading-relaxed">
              Beverley, New York 224 USA
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F0F0] border border-none text-[#000000]">
              <FaFacebookF size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F0F0] border border-none text-[#000000]">
              <FaXTwitter size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F0F0] border border-none text-[#000000]">
              <FaInstagram size={16} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F0F0] border border-none text-[#000000]">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* 2️⃣ Column 2 – Company */}
        <div>
          <h3 className="text-lg font-semibold text-[#7B00F7] mb-4">Company</h3>
          <ul className="space-y-4 text-sm text-[#333333]">
            <li className="cursor-pointer">
              <Link href={"/aboutus"}>About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/contact-us"}>Contact</Link>
            </li>
            <li className="cursor-pointer"><Link href={"/safety"}>Safety</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Column 3 – Legal */}
        <div>
          <h3 className="text-lg font-semibold text-[#7B00F7] mb-4">Legal</h3>
          <ul className="space-y-4 text-sm text-[#333333]">
            <li className="cursor-pointer"><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
            <li className="cursor-pointer"><Link href={"/terms-conditions"}>Terms Conditions</Link></li>
          </ul>
        </div>

        {/* 4️⃣ Column 4 – Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#7B00F7] mb-4">Support</h3>

          <p className="text-sm text-[#333333] break-all leading-relaxed">
            support@datingwebsite.com
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-[#EEDEFF] mt-10 mb-4 max-w-7xl mx-auto"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-[#333333]">
        © {new Date().getFullYear()} LoveConnect. All rights reserved.
      </p>
    </footer>
  );
}
