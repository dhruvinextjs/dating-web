import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
 
const notifications = [
  {
    id: 1,
    name: "Riya Sharma",
    message: "liked your profile",
    time: "5 minutes ago",
    img: "/images/people1.png",
    like: true,
  },
  {
    id: 2,
    name: "New Matches",
    message: "You have 2 new matches",
    time: "1 hour ago",
  },
  {
    id: 3,
    name: "Kathryn Murphy",
    message: "liked your profile",
    time: "1 days ago",
    img: "/images/people2.png",
    like: true,
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    message: "sent you a message",
    time: "2 days ago",
    img: "/images/people3.png",
  },
  {
    id: 5,
    name: "Arlene McCoy",
    message: "liked your profile",
    time: "2 days ago",
    img: "/images/people4.png",
    like: true,
  },
  {
    id: 6,
    name: "Jane Cooper",
    message: "liked your profile",
    time: "2 days ago",
    img: "/images/people5.png",
    like: true,
  },
  {
    id: 7,
    name: "New Matches",
    message: "You have 2 new matches",
    time: "3 days ago",
  },
  {
    id: 8,
    name: "Darlene Robertson",
    message: "sent you a message",
    time: "3 days ago",
    img: "/images/people6.png",
  },
];
 
export default function Notifications() {
  return (
    <div className="bg-[#ffffff]">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-6 py-22 sm:py-22 lg:py-22">
      <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-[#000000]">Notifications</h2>
      <p className="text-sm sm:text-base text-[#666666] mb-6">
        Stay updated with your activity
      </p>
 
      <div className="space-y-3 sm:space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="
              flex items-center justify-between
              bg-white border border-[#EDEDED]
              rounded-xl
              px-3 sm:px-4 py-3 sm:py-3
              text-left
            "
          >
            {/* LEFT */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              {item.img ? (
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#E0E0E0] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/groupicon.png"
                    alt="like"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-[35px] sm:h-[35px]"
                  />
                </div>
              )}
 
              <div className="min-w-0">
                <p className="text-sm text-[#000000] sm:text-base font-medium truncate">
                  {item.name}{" "}
                  <span className="font-normal text-gray-600">
                    {item.message}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                  {item.time}
                </p>
              </div>
            </div>
 
            {/* RIGHT ICON */}
            {item.like && (
              <div className="flex-shrink-0 ml-3 sm:ml-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-[#7B00F7] to-[#B66DFF] rounded-full flex items-center justify-center shadow">
                  <FaHeart className="text-white text-lg sm:text-xl" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
 
      {/* LOAD MORE BUTTON */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#FFFFFF] bg-[#7B00F7] rounded-lg transition min-w-[140px]">
          LOAD MORE
        </button>
      </div>
    </div>
    </div>
  );
}