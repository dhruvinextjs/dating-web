"use client";

import Image from "next/image";
import {
  FiEdit,
  FiLogOut,
  FiUser,
  FiHeart,
  FiStar,
  FiUpload,
} from "react-icons/fi";
import { MdBlockFlipped, MdKeyboardArrowRight, MdEdit } from "react-icons/md";
import { LuCamera, LuHeart, LuStar, LuUser, LuUsers } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [openBasicInfo, setOpenBasicInfo] = useState(false);
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [openLookingFor, setOpenLookingFor] = useState(false);
  const [openWorkBeliefs, setOpenWorkBeliefs] = useState(false);
  const [openHobbies, setOpenHobbies] = useState(false);

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-7xl mx-auto p-6 py-24">
        {/* TOP HEADER (My Profile + Logout) */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-[#000D23] font-bold">My Profile</h1>
          <button className="flex items-center gap-2 bg-[#FBECEC] border border-[#FFA7A7] text-[#E50013] px-8 py-2 rounded-lg text-sm font-bold">
            <FiLogOut className="text-[#E50013] font-bold" />
            Logout
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT SIDEBAR - unchanged */}
          <div className="bg-white rounded-xl">
            <div className="flex flex-col items-center text-center border border-[#EBE0E4] rounded-xl shadow-sm py-5 ">
              <Image
                src="/images/bpeople1.png"
                alt="profile"
                width={90}
                height={90}
                className="rounded-full object-cover h-[128px] w-[128px]"
              />
              <h2 className="mt-3 font-bold text-xl text-[#2A2225]">
                John Karter
              </h2>
              <p className="text-base text-[#7E7E7E]">28 years</p>
            </div>

            <div className="mt-5 text-sm border border-[#EBE0E4] rounded-xl shadow-sm">
              <div className="flex m-4">
                <span className="text-[#2A2225] font-semibold">
                  Quick Stats
                </span>
              </div>
              <div className="flex items-center gap-3 m-4">
                <Image
                  src="/images/location.png"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="text-[#000000]">London</span>
              </div>

              <div className="flex items-center gap-3 m-4">
                <Image
                  src="/images/briefcase.png"
                  alt="work"
                  width={20}
                  height={20}
                />
                <span className="text-[#000000]">
                  Interior designer at Zesk
                </span>
              </div>

              <div className="flex items-center gap-3 m-4">
                <Image
                  src="/images/school.png"
                  alt="education"
                  width={20}
                  height={20}
                />
                <span className="text-[#000000]">Master&apos;s degree</span>
              </div>

              <div className="flex items-center gap-3 m-4">
                <Image
                  src="/images/ruler.png"
                  alt="height"
                  width={20}
                  height={20}
                />
                <span className="text-[#000000]">175 cm</span>
              </div>

              <div className="flex items-center gap-3 m-4">
                <Image
                  src="/images/magnifying.png"
                  alt="intent"
                  width={20}
                  height={20}
                />
                <span className="text-[#000000]">
                  Dating Intentions :
                  <span className="font-semibold"> Life Partner</span>
                </span>
              </div>
            </div>

            <div className="mt-5 text-sm border border-[#EBE0E4] rounded-xl shadow-sm">
              <button
                onClick={() => router.push("/blocked-user")}
                className="w-full m-2 flex items-center text-sm cursor-pointer font-medium"
              >
                <MdBlockFlipped className="ml-2 text-[#EF4B6C] text-lg" />

                <span className="ml-3 text-[#000000]">Blocked users</span>

                {/* RIGHT ARROW */}
                <MdKeyboardArrowRight className="ml-auto mr-3 text-[#000000] text-2xl" />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 space-y-6">
            {/* PHOTO GALLERY */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LuCamera className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    Photo Gallery
                  </h3>
                </div>
                {/* 👇 YAHAN CLICK HANDLE */}
                <button
                  onClick={() => setOpenGalleryModal(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto">
                <Image
                  src="/images/bpeople1.png"
                  alt="gallery 1"
                  width={160}
                  height={200}
                  className="rounded-lg object-cover h-[200px] w-[194px]"
                />
                <Image
                  src="/images/bpeople2.png"
                  alt="gallery 2"
                  width={160}
                  height={200}
                  className="rounded-lg object-cover h-[200px] w-[194px]"
                />
                <Image
                  src="/images/bpeople3.png"
                  alt="gallery 3"
                  width={160}
                  height={200}
                  className="rounded-lg object-cover h-[200px] w-[194px]"
                />
              </div>
            </div>

            {/* BASIC INFORMATION */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LuUser className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    Basic Information
                  </h3>
                </div>
                <button
                  onClick={() => setOpenBasicInfo(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Full Name</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    John Karter
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Age</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    28
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Height (cm)</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    175
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Gender</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Man
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT ME */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LuHeart className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    About Me
                  </h3>
                </div>
                <button
                  onClick={() => setOpenAboutMe(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <p className="text-sm bg-[#F7F7F7] rounded-lg p-3 text-[#2A2225] leading-relaxed">
                Creative UI/UX Designer passionate about building beautiful
                apps. I love traveling, photography, and exploring new cuisines.
                Looking for someone who shares my love for adventure and
                meaningful conversations.
              </p>
            </div>

            {/* WHAT I'M LOOKING FOR */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LuUsers className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    What I&apos;m looking for
                  </h3>
                </div>
                <button
                  onClick={() => setOpenLookingFor(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Interested In</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Women
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Sexuality</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Straight
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Relationship Type</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Monogamous
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Dating Intention</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Long-term relationship
                  </div>
                </div>
              </div>
            </div>

            {/* WORK & BELIEFS */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MdWorkOutline className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    Work & Beliefs
                  </h3>
                </div>
                <button
                  onClick={() => setOpenWorkBeliefs(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Job Title</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Software Engineer
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Religion</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Hindu
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#2A2225]">Political Views</p>
                  <div className="bg-[#F7F7F7] rounded-lg p-3 text-sm font-medium text-[#000000]">
                    Moderate
                  </div>
                </div>
              </div>
            </div>

            {/* HOBBIES & INTERESTS */}
            <div className="bg-white rounded-xl shadow p-5 border border-[#EBE0E4]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LuStar className="text-[#7B00F7] text-xl" />
                  <h3 className="font-semibold text-[#000D23] text-lg">
                    Hobbies & Interests
                  </h3>
                </div>
                <button
                  onClick={() => setOpenHobbies(true)}
                  className="flex items-center gap-1 text-[#7B00F7] hover:text-[#5a00c7] cursor-pointer transition text-sm font-bold"
                >
                  <MdEdit className="text-lg" />
                  Edit
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Photography",
                  "Traveling",
                  "Cooking",
                  "Reading",
                  "Hiking",
                ].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-4 text-[#000000] py-2 text-sm bg-[#E6E6E6] rounded-full"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* popup */}
            {openGalleryModal && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                <div className="bg-white w-[420px] rounded-2xl p-6 relative">
                  {/* Close */}
                  <button
                    onClick={() => setOpenGalleryModal(false)}
                    className="absolute text-[#000000] right-4 top-4 text-xl"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold mb-1 text-[#000000]">
                    Add Your Photos
                  </h2>
                  <p className="text-sm text-[#666666] mb-4">
                    Upload 2–6 photos (minimum 2 required)
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["bpeople1", "bpeople2", "bpeople3", "bpeople4"].map(
                      (img) => (
                        <div key={img} className="relative  rounded-xl p-1">
                          <Image
                            src={`/images/${img}.png`}
                            alt=""
                            width={120}
                            height={120}
                            className="rounded-lg object-cover border-2 border border-[#7B00F7] h-[100px] w-[100px]"
                          />
                        </div>
                      )
                    )}

                    <div className="border-2 border-dashed h-[100px] w-[100px] border-[#D6AEFF] rounded-xl flex flex-col items-center justify-center gap-1 text-[#7B00F7] bg-[#F5EDFC] cursor-pointer">
                      <FiUpload className="text-2xl" />

                      <span className="text-sm font-medium">Upload</span>
                    </div>
                  </div>

                  <p className="text-center text-xs text-[#666666] mb-4">
                    6 / 6 photos uploaded
                  </p>

                  <button className="w-full bg-[#7B00F7] cursor-pointer text-white py-3 rounded-xl font-bold">
                    UPDATE
                  </button>
                </div>
              </div>
            )}

            {/* basic information popup */}

            {openBasicInfo && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
                <div className="bg-white w-[400px] max-w-md rounded-2xl p-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenBasicInfo(false)}
                    className="absolute right-4 top-4 text-xl text-[#000000]"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold text-[#000D23] mb-6">
                    Basic Info
                  </h2>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#2A2225]">
                        Full name
                      </label>
                      <input
                        defaultValue="John Karter"
                        className="w-full mt-1 bg-[#E6E6E6] text-[#000000] rounded-lg p-3 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#2A2225]">
                        Gender
                      </label>
                      <input
                        defaultValue="Man"
                        className="w-full mt-1 text-[#000000] bg-[#E6E6E6] rounded-lg p-3 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#2A2225]">
                        Date of birth
                      </label>
                      <input
                        type="text"
                        defaultValue="25 / 10 / 1997"
                        className="w-full mt-1 text-[#000000] border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg p-3 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-[#2A2225]">
                        Height (cm)
                      </label>
                      <input
                        defaultValue="175 cm"
                        className="w-full mt-1 text-[#000000] border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg p-3 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Update Button */}
                  <button
                    className="mt-6 w-full bg-[#7B00F7] cursor-pointer text-white py-3 rounded-lg font-bold"
                    onClick={() => setOpenBasicInfo(false)}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}

            {/* ABOUT ME POPUP */}
            {openAboutMe && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                <div className="bg-white w-[400px] max-w-md rounded-2xl p-6 relative">
                  {/* Close */}
                  <button
                    onClick={() => setOpenAboutMe(false)}
                    className="absolute right-4 top-4 text-xl text-[#000000]"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold text-[#000D23] mb-1">
                    About you
                  </h2>

                  <p className="text-sm text-[#000D23] mb-4">
                    Tell us about yourself (minimum 50 words)
                  </p>

                  <textarea
                    rows={6}
                    defaultValue="Creative UI/UX Designer passionate about building beautiful apps. I love traveling, photography, and exploring new cuisines. Looking for someone who shares my love for adventure and meaningful conversations."
                    className="w-full text-[#000000] border border-[#E6E6E6] rounded-lg p-3 text-sm outline-none resize-none"
                  />

                  <p className="text-xs text-[#4D4D4D] mt-2">
                    Word count: 56 / 50
                  </p>

                  <button
                    onClick={() => setOpenAboutMe(false)}
                    className="mt-5 w-full bg-[#7B00F7] cursor-pointer text-white py-3 rounded-xl font-bold"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}

            {/* WHAT I'M LOOKING FOR POPUP */}
            {openLookingFor && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                <div className="bg-white w-[400px] max-w-md rounded-2xl p-6 relative">
                  {/* Close */}
                  <button
                    onClick={() => setOpenLookingFor(false)}
                    className="absolute text-[#000000] right-4 top-4 text-xl"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold text-[#000D23] mb-5">
                    What I&apos;m looking for
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Interested In
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Women</option>
                        <option>Men</option>
                        <option>Everyone</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Sexuality
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Straight</option>
                        <option>Gay</option>
                        <option>Bisexual</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Relationship Type
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Monogamous</option>
                        <option>Open relationship</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Dating Intention
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Long-term relationship</option>
                        <option>Short-term</option>
                        <option>Marriage</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenLookingFor(false)}
                    className="mt-6 w-full bg-[#7B00F7] cursor-pointer text-white py-3 rounded-xl font-bold"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}

            {/* WORK & BELIEFS POPUP */}
            {openWorkBeliefs && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                <div className="bg-white w-[400px] max-w-md rounded-2xl p-6 relative">
                  {/* Close */}
                  <button
                    onClick={() => setOpenWorkBeliefs(false)}
                    className="absolute text-[#000000] right-4 top-4 text-xl"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold text-[#000D23] mb-5">
                    Work & Beliefs
                  </h2>

                  <div className="space-y-4">
                    {/* Job Title */}
                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Job Title
                      </label>
                      <input
                        defaultValue="Software Engineer"
                        className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none"
                      />
                    </div>

                    {/* Religion */}
                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Religion
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christian</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Political Belief */}
                    <div>
                      <label className="text-sm font-semibold text-[#000D23]">
                        Political Belief
                      </label>
                      <select className="w-full mt-1 text-[#000000] bg-[#F7F7F7] rounded-lg p-3 text-sm outline-none">
                        <option>Moderate</option>
                        <option>Liberal</option>
                        <option>Conservative</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenWorkBeliefs(false)}
                    className="mt-6 w-full bg-[#7B00F7] cursor-pointer text-white py-3 rounded-xl font-bold"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}

            {/* HOBBIES & INTERESTS POPUP */}
            {openHobbies && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                <div className="bg-white w-[430px] max-w-md rounded-2xl p-6 relative">
                  {/* Close */}
                  <button
                    onClick={() => setOpenHobbies(false)}
                    className="absolute text-[#000000] right-4 top-4 text-xl"
                  >
                    ✕
                  </button>

                  <h2 className="text-xl font-bold text-[#000D23]">
                    Hobbies & Interests
                  </h2>
                  <p className="text-sm text-[#666666] mb-4">
                    Select what you love doing
                  </p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      "Reading",
                      "Traveling",
                      "Cooking",
                      "Sports",
                      "Gaming",
                      "Music",
                      "Photography",
                      "Art",
                      "Dancing",
                      "Hiking",
                      "Yoga",
                      "Movies",
                      "Writing",
                      "Gardening",
                      "Fitness",
                      "Wine Tasting",
                    ].map((item) => (
                      <button
                        key={item}
                        className="px-4 py-2 rounded-full text-sm border border-[#D0D0D0] text-[#2A2225] transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenHobbies(false)}
                    className="w-full bg-[#7B00F7] text-white py-3 cursor-pointer rounded-xl font-bold"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
