import React from "react";
// Ensure you have installed react-icons/fa for these imports
import { FaPhoneAlt , FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
 
function TopHeader() {
  return (
    <div className="bg-[#FB3957] text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
 
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm font-medium">
 
          {/* Phone Number */}
          <div className="flex items-center">
            <FaPhoneAlt  className="mr-2 text-base" />
            <span>+800-123-4567-6587</span>
          </div>
 
          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-base" />
            <span>Beverley, New York 224 USA</span>
          </div>
        </div>
 
   
 
     
        <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
         
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