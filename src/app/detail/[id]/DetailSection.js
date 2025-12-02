// "use client";
// import Image from "next/image";
// import { GoHeartFill } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaGraduationCap } from "react-icons/fa";
// import { IoStatsChart } from "react-icons/io5";

// export default function DetailSection({ id }) {
//   // Dummy data — later API se laa sakte ho
//   const profile = {
//     name: "Anna",
//     age: 24,
//     city: "London",
//     job: "Interior designer at Zesk",
//     degree: "Master's degree",
//     height: "5'7 (174 cm)",
//     intention: "Life Partner",
//     about:
//       "Foodie, traveller and dog-lover. I enjoy exploring new places, trying different cuisines, and meeting interesting people. Looking for genuine connections and meaningful conversations. I believe in building deep, meaningful relationships and value honesty and communication above all else.",
//     interests: [
//       "Reading",
//       "Cooking",
//       "Movies",
//       "Music",
//       "Traveling",
//       "Sports",
//       "Gaming",
//     ],
//     gallery: [
//       "/images/detail2.jpg",
//       "/images/detail3.jpg",
//     ],
//   };

//   return (
//     // <div className="max-w-6xl mx-auto p-5 md:p-10">
//     <div className="px-4 md:px-5 max-w-7xl mx-auto py-10">
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* LEFT BIG IMAGE + 2 SMALL IMAGES */}
//         <div>
//           {/* MAIN BIG IMAGE */}
//           <Image
//             src={"/images/detail.jpg"}
//             width={500}
//             height={500}
//             className="rounded-xl object-cover w-full h-80 md:h-[700px]"
//             alt="profile"
//           />

//           {/* TWO SMALL IMAGES BELOW BIG */}
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {profile.gallery.slice(0, 2).map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 width={500}
//                 height={500}
//                 className="rounded-xl w-full h-80 object-cover"
//                 alt={`small-${index}`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           {/* RIGHT DETAILS CARD */}
//           <div className="border border-[#D9D9D9] rounded-xl bg-white p-6 ">
//             <h2 className="text-2xl font-semibold">
//               {profile.name}, {profile.age}
//             </h2>

//             <div className="mt-2 space-y-2 text-[14px] text-gray-700">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={"/images/location.png"}
//                   alt="location"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 {profile.city}
//               </div>

//               <div className="flex items-center gap-2">
//                 <Image
//                   src={"/images/briefcase.png"}
//                   alt="briefcase"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 {profile.job}
//               </div>

//               <div className="flex items-center gap-2">
//                 <Image
//                   src={"/images/school.png"}
//                   alt="cap"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 {profile.degree}
//               </div>

//               <div className="flex items-center gap-2">
//                 <Image
//                   src={"/images/ruler.png"}
//                   alt="ruler"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 {profile.height}
//               </div>

//               <div className="flex items-center gap-2">
//                 <Image
//                   src={"/images/magnifying.png"}
//                   alt="magnifying glass"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 Dating Intentions: {profile.intention}
//               </div>
//             </div>

//             {/* LIKE - DISLIKE BUTTONS */}
//             <div className="flex gap-3 mt-5 text-center">
//               <button className="px-6 py-2 w-80 border rounded-md flex text-center items-center justify-center gap-2 bg-[#FFFFFF] border-[#D7D7D7]">
//                 <Image
//                   src={"/images/pinkheart.png"}
//                   alt="heart"
//                   width={20}
//                   height={20}
//                 />{" "}
//                 <span className="text-[#EF4B6C]">Like</span>
//               </button>

//               <button className="px-6 py-2 border text-[#4D4D4D] w-80 rounded-md justify-center flex text-center items-center gap-2 border-[#DDDDDD]">
//                 <Image
//                   src={"/images/cross.png"}
//                   alt="cross"
//                   width={15}
//                   height={15}
//                 />{" "}
//                 Dislike
//               </button>
//             </div>
//           </div>

//           {/* ABOUT */}
//           <div className="mt-5 p-5 rounded-xl bg-white border-[#D9D9D9] border">
//             <h3 className="font-semibold text-lg mb-2 text-[#000000]">About</h3>
//             <p className="text-[#000000] text-sm leading-relaxed">
//               {profile.about}
//             </p>
//           </div>

//           {/* INTEREST */}
//           <div className="mt-5 p-5 rounded-xl bg-white border-[#D9D9D9] border">
//             <h3 className="font-semibold text-lg mb-3 text-[#000000]">
//               Interest
//             </h3>

//             <div className="flex gap-3 flex-wrap">
//               {profile.interests.map((i, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1 bg-[#EF4B6C] text-[#FFFFFF] rounded-full text-sm"
//                 >
//                   {i}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";

export default function DetailSection({ id }) {
  const profile = {
    name: "Anna",
    age: 24,
    city: "London",
    job: "Interior designer at Zesk",
    degree: "Master's degree",
    height: "5'7 (174 cm)",
    intention: "Life Partner",
    about:
      "Foodie, traveller and dog-lover. I enjoy exploring new places, trying different cuisines, and meeting interesting people. Looking for genuine connections and meaningful conversations. I believe in building deep, meaningful relationships and value honesty and communication above all else.",
    interests: [
      "Reading",
      "Cooking",
      "Movies",
      "Music",
      "Traveling",
      "Sports",
      "Gaming",
    ],
    gallery: ["/images/detail2.jpg", "/images/detail3.jpg"],
  };

  return (
    <div className="px-4 md:px-5 max-w-7xl mx-auto py-10 mt-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT IMAGES */}
        <div>
          {/* MAIN IMAGE */}
          <Image
            src={"/images/detail.jpg"}
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-80 md:h-[700px]"
            alt="profile"
          />

          {/* SMALL IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {profile.gallery.slice(0, 2).map((img, index) => (
              <Image
                key={index}
                src={img}
                width={500}
                height={500}
                className="rounded-xl w-full h-64 md:h-80 object-cover"
                alt={`small-${index}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* DETAILS CARD */}
          <div className="border border-[#D9D9D9] rounded-xl bg-white p-6">
            <h2 className="text-2xl font-semibold">
              {profile.name}, {profile.age}
            </h2>

            <div className="mt-2 space-y-2 text-[14px] text-gray-700">
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/location.png"}
                  alt="location"
                  width={20}
                  height={20}
                />
                {profile.city}
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={"/images/briefcase.png"}
                  alt="briefcase"
                  width={20}
                  height={20}
                />
                {profile.job}
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={"/images/school.png"}
                  alt="cap"
                  width={20}
                  height={20}
                />
                {profile.degree}
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={"/images/ruler.png"}
                  alt="ruler"
                  width={20}
                  height={20}
                />
                {profile.height}
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={"/images/magnifying.png"}
                  alt="magnifying glass"
                  width={20}
                  height={20}
                />
                Dating Intentions: {profile.intention}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5 text-center">
              <button className="px-6 py-2 w-full sm:w-80 border rounded-md flex items-center justify-center gap-2 bg-[#FFFFFF] border-[#D7D7D7]">
                <Image
                  src={"/images/pinkheart.png"}
                  alt="heart"
                  width={20}
                  height={20}
                />
                <span className="text-[#EF4B6C]">Like</span>
              </button>

              <button className="px-6 py-2 w-full sm:w-80 border text-[#4D4D4D] rounded-md flex items-center justify-center gap-2 border-[#DDDDDD]">
                <Image
                  src={"/images/cross.png"}
                  alt="cross"
                  width={15}
                  height={15}
                />
                Dislike
              </button>
            </div>
          </div>

          {/* ABOUT */}
          <div className="mt-5 p-5 rounded-xl bg-white border-[#D9D9D9] border">
            <h3 className="font-semibold text-lg mb-2 text-[#000000]">About</h3>
            <p className="text-[#000000] text-sm leading-relaxed">
              {profile.about}
            </p>
          </div>

          {/* INTEREST */}
          <div className="mt-5 p-5 rounded-xl bg-white border-[#D9D9D9] border">
            <h3 className="font-semibold text-lg mb-3 text-[#000000]">
              Interest
            </h3>

            <div className="flex gap-3 flex-wrap">
              {profile.interests.map((i, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-[#EF4B6C] text-[#FFFFFF] rounded-full text-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
