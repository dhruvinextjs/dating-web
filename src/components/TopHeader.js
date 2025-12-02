import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopHeader() {
  return (
    <div className="bg-[#FB3957] text-white py-3">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                      flex flex-col md:flex-row md:justify-between md:items-center 
                      gap-3 md:gap-0"
      >
        {/* LEFT — Phone + Location */}
        <div
          className="flex flex-col sm:flex-row sm:items-center 
                        gap-2 sm:gap-8 text-sm font-medium text-center sm:text-left"
        >
          {/* Phone */}
          <div className="flex items-center justify-center sm:justify-start">
            <FaPhoneAlt className="mr-2 text-base" />
            <span>+800-123-4567-6587</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center sm:justify-start">
            <FaMapMarkerAlt className="mr-2 text-base" />
            <span>Beverley, New York 224 USA</span>
          </div>
        </div>

        {/* RIGHT — Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4 text-lg">
          <a href="#" className="hover:opacity-70 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:opacity-70 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:opacity-70 transition duration-300">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:opacity-70 transition duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
