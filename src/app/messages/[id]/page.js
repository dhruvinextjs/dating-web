"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FiSend } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import HeaderAfterLogin from "@/components/HeaderAfterLogin";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const users = [
  { id: "1", name: "Anna Jade", img: "/images/people1.png" },
  { id: "2", name: "Savannah Nguyen", img: "/images/people3.png" },
  { id: "3", name: "Kristin Watson", img: "/images/people6.png" },
  { id: "4", name: "Jenny Wilson", img: "/images/people8.png" },
  { id: 5, name: "Bessie Cooper", img: "/images/people1.png" },
  { id: 6, name: "Darlene Robertson", img: "/images/people3.png" },
  { id: 7, name: "Arlene McCoy", img: "/images/people6.png" },
  { id: 8, name: "Kathryn Murphy", img: "/images/people8.png" },
  { id: 9, name: "Kathryn Murphy", img: "/images/people8.png" },
];

export default function ChatPage() {
  const params = useParams();
  const id = params.id;
  const user = users.find((u) => String(u.id) === id);

  const [showMenu, setShowMenu] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!user) return <div className="p-6 text-center">Chat not found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] py-20">
      <HeaderAfterLogin />

      {/* ===== HEADER (full bg, inner 6xl) ===== */}
      <div className="bg-white border-b border-[#E6E6E6] shadow-sm sticky top-0 z-10">
        <div className="max-w-[84rem] mx-auto flex items-center justify-between px-6 py-3 sm:px-12 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src={user.img}
              width={40}
              height={40}
              className="rounded-full w-10 h-10 sm:w-[42px] sm:h-[42px]"
              alt={user.name}
            />
            <div>
              <h4 className="font-semibold text-[#000000] text-sm sm:text-base">
                {user.name}
              </h4>
              <p className="text-xs text-[#34A853] flex items-center gap-1">
                ● <span className="text-[#4D4D4D]">Active Now</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <BsThreeDotsVertical
              onClick={() => setShowMenu(!showMenu)}
              className="text-[#999999] cursor-pointer text-lg sm:text-xl"
            />

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 sm:w-40 bg-white rounded-xl shadow-sm py-1 text-sm">
                <button className="w-full text-left text-[#000000] px-4 py-2.5">
                  Delete conversation
                </button>
                <div className="h-[1px] bg-[#E6E6E6] my-1" />
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowBlockModal(true);
                  }}
                  className="w-full text-[#000000] text-left px-4 py-2.5 font-medium"
                >
                  Block
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== CHAT BODY (full bg, inner 6xl) ===== */}
      <div className="flex-1 bg-[#FAFAFA] mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10 overflow-y-auto space-y-6">
          <div className="flex flex-col items-start">
            <div className="max-w-[76%] sm:max-w-[55%] text-[#000000] md:max-w-[45%] lg:max-w-[38%] bg-[#EBEBEB] px-4 py-2.5 rounded-2xl rounded-bl-none text-sm leading-relaxed">
              I&apos;m good! What about you?
            </div>
            <div className="text-xs text-[#808080] mt-1 pl-2">10:32 AM</div>
          </div>

          <div className="flex flex-col items-end">
            <div className="max-w-[76%] sm:max-w-[55%] md:max-w-[45%] lg:max-w-[38%] bg-[#3F0080] text-white px-4 py-2.5 rounded-2xl rounded-br-none text-sm leading-relaxed">
              Hey, how are you?
            </div>
            <div className="text-xs text-[#808080] mt-1 pr-2">10:30 AM</div>
          </div>

          <div className="flex flex-col items-end">
            <div className="max-w-[76%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] bg-[#3F0080] text-white px-4 py-2.5 rounded-2xl rounded-br-none text-sm leading-relaxed">
              Doing great! What&apos;s your weekend plan?
            </div>
            <div className="text-xs text-[#808080] mt-1 pr-2">10:35 AM</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="max-w-[82%] sm:max-w-[68%] md:max-w-[55%] text-[#000000] lg:max-w-[45%] bg-[#EBEBEB] px-4 py-2.5 rounded-2xl rounded-bl-none text-sm leading-relaxed">
              Planning to explore some new cafes in the city. Want to join?
            </div>
            <div className="text-xs text-[#808080] mt-1 pl-2">10:38 AM</div>
          </div>
        </div>
      </div>

      {/* ===== INPUT (full bg, inner 6xl) ===== */}
      <div className="sticky bottom-0 bg-white border-t border-[#E6E6E6] z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex items-center gap-3">
          <input
            placeholder="Type your message..."
            className="flex-1 border border-[#D9D9D9] rounded-lg px-4 py-2.5 text-sm outline-none"
          />
          <button className="bg-[#7B00F7] text-white px-4 py-3 rounded-lg flex items-center">
            <FiSend className="text-lg" />
          </button>
        </div>
      </div>

      {/* ===== BLOCK MODAL ===== */}
      {showBlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-[420px] rounded-2xl p-6 relative">
            <button
              onClick={() => setShowBlockModal(false)}
              className="absolute text-[#000000] top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-[#000000]">Block</h2>

            <label className="text-[#000D23] text-sm">
              Choose reason*
              <select className="w-full border border-[#E6E6E6] focus:outline-none bg-[#FAFAFA] rounded-lg px-4 py-3 mb-4">
                <option>Fake account</option>
                <option>Other</option>
              </select>
            </label>

            <label className="text-[#000D23] text-sm">
              Details (optional)
              <textarea
                placeholder="Type here..."
                className="w-full bg-[#FAFAFA] border border-[#E6E6E6] focus:outline-none rounded-lg px-4 py-3 h-28 mb-6"
              />
            </label>

            <button
              onClick={() => {
                setShowBlockModal(false);
                setShowSuccessModal(true);
              }}
              className="w-full bg-[#7B00F7] text-white py-3 rounded-lg font-semibold"
            >
              BLOCK
            </button>
          </div>
        </div>
      )}

      {/* ===== SUCCESS MODAL ===== */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowSuccessModal(false)} // 👈 anywhere click = close
        >
          <div
            className="bg-white max-w-[400px] w-full rounded-2xl p-8 text-center"
            onClick={(e) => e.stopPropagation()} // 👈 popup ke andar click safe
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-[#00B700] flex items-center justify-center">
                <FaCheck size={40} className="text-white" />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Success</h2>
            <p className="text-sm text-gray-500 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
