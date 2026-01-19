"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
 
export default function Messages() {
  const router = useRouter();
 
  const messages = [
    {
      id: 1,
      name: "Anna Jade",
      msg: "Hi! How are you?",
      time: "2m ago",
      img: "/images/people1.png",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      msg: "Thanks!!",
      time: "1h ago",
      img: "/images/people3.png",
    },
    {
      id: 3,
      name: "Kristin Watson",
      msg: "Good morning",
      time: "8h ago",
      img: "/images/people6.png",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      msg: "Hi! How are you?",
      time: "16h ago",
      img: "/images/people8.png",
    },
    {
      id: 5,
      name: "Bessie Cooper",
      msg: "Hello!",
      time: "18h ago",
      img: "/images/people1.png",
    },
    {
      id: 6,
      name: "Darlene Robertson",
      msg: "Would love to meet some time",
      time: "2d ago",
      img: "/images/people3.png",
    },
    {
      id: 7,
      name: "Arlene McCoy",
      msg: "That sounds great!",
      time: "2d ago",
      img: "/images/people6.png",
    },
    {
      id: 8,
      name: "Kathryn Murphy",
      msg: "See you then.",
      time: "2d ago",
      img: "/images/people8.png",
    },
  ];
 
  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-[1270px] bg-[#ffffff] min-h-screen mx-auto px-4 sm:px-6 py-20 mt-10">
      <h2 className="text-xl font-semibold text-[#000000]">My messages</h2>
      <p className="text-sm text-gray-500 mb-6">
        Open to view your new chats
      </p>
 
      {/* GRID SAME – RESPONSIVE SAFE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messages.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/messages/${item.id}`)}
            className="cursor-pointer flex items-center justify-between bg-white rounded-xl border border-[#D6D6D6] px-4 py-3 hover:shadow-md transition"
          >
            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={item.img}
                  fill
                  className="object-cover"
                  alt={item.name}
                />
              </div>
 
              <div className="min-w-0">
                <h4 className="font-bold text-[#000000] text-sm truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 truncate max-w-[200px]">
                  {item.msg}
                </p>
              </div>
            </div>
 
            {/* RIGHT TIME */}
            <span className="text-xs text-gray-400 whitespace-nowrap ml-3">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}