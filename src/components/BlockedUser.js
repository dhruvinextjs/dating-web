"use client";
import Image from "next/image";
 
const blockedUsers = [
  { id: 1, name: "Jenny", img: "/images/people1.png" },
  { id: 2, name: "Emma", img: "/images/people3.png" },
  { id: 3, name: "Jenny", img: "/images/people6.png" },
];
 
export default function BlockUser() {
  return (
   <div className="bg-[#ffffff]">
     <div className="w-7xl">
        <div className="max-w-2xl ml-10 px-6 py-22">
 
      {/* Header */}
      <h1 className="text-xl font-semibold text-[#000D23] mb-1">
        Blocked users
      </h1>
      <p className="text-sm text-[#666666] mb-8">
        Open to view your new chats
      </p>
 
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blockedUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl border border-[#E6E6E6]  overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-[240px]">
              <Image
                src={user.img}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
 
            {/* Info */}
            <div className="p-4 text-center
                border-l border-r border-b
                border-[#E6E6E6]">
              <h3 className="font-semibold text-base text-[#000000] mb-3">
                {user.name}
              </h3>
 
              <button className="w-[70%] border border-[#D6ADFF] text-[#000000] py-2 rounded-lg text-sm font-medium transition">
                Unblock
              </button>
            </div>
 
          </div>
        ))}
      </div>
 
    </div>
    </div>
   </div>
  );
}
 