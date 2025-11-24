import Image from "next/image";
import { GoHeartFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

export default function DetailPage({ params }) {
  const { id } = params;

  // Dummy data — later API se laa sakte ho
  const profile = {
    name: "Anna",
    age: 24,
    city: "London",
    job: "Interior designer at Zesk",
    degree: "Master's degree",
    height: "5'7 (174 cm)",
    intention: "Life Partner",
    about:
      "Foodie, traveller and dog lover. I enjoy exploring new places, trying different cuisines, and meeting interesting people...",
    interests: ["Reading", "Cooking", "Movies", "Music", "Traveling", "Sports", "Gaming"],
    gallery: ["/images/people1.png", "/images/people3.png", "/images/people6.png"],
  };

  return (
    <div className="max-w-6xl mx-auto p-5 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT BIG IMAGE */}
        <div>
          <Image
            src={"/images/people1.png"}
            width={1000}
            height={1000}
            className="rounded-xl w-full"
            alt="profile"
          />
        </div>

        {/* RIGHT DETAILS CARD */}
        <div className="border rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {profile.name}, {profile.age}
          </h2>

          <div className="mt-2 space-y-2 text-[14px] text-gray-700">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-red-500" /> {profile.city}
            </div>

            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-red-500" /> {profile.job}
            </div>

            <div className="flex items-center gap-2">
              🎓 {profile.degree}
            </div>

            <div className="flex items-center gap-2">
              <IoStatsChart className="text-red-500" /> {profile.height}
            </div>

            <div className="flex items-center gap-2">
              ❤️ Dating Intentions: {profile.intention}
            </div>
          </div>

          {/* LIKE - DISLIKE BUTTONS */}
          <div className="flex gap-3 mt-5">
            <button className="px-6 py-2 border rounded-full flex items-center gap-2 bg-[#FFE9ED] border-[#FFB4C0] text-[#EF4B6C]">
              <GoHeartFill /> Like
            </button>

            <button className="px-6 py-2 border rounded-full flex items-center gap-2 border-[#DDDDDD]">
              <RxCross2 /> Dislike
            </button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-10 p-5 rounded-xl bg-white shadow-sm border">
        <h3 className="font-semibold text-lg mb-2">About</h3>
        <p className="text-gray-600">{profile.about}</p>
      </div>

      {/* INTEREST */}
      <div className="mt-5 p-5 rounded-xl bg-white shadow-sm border">
        <h3 className="font-semibold text-lg mb-3">Interest</h3>

        <div className="flex gap-3 flex-wrap">
          {profile.interests.map((i, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {profile.gallery.map((g, index) => (
          <Image
            key={index}
            src={g}
            width={600}
            height={600}
            alt="gallery"
            className="rounded-xl object-cover w-full"
          />
        ))}
      </div>
    </div>
  );
}
