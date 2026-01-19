// import React from "react";
// import Image from "next/image";

// export default function ChooseSection() {
//   const data = [
//     {
//       img: "/images/icon1.png",
//       title: "Verified Profiles",
//       desc: "Every profile is verified to ensure you're connecting with real, genuine people",
//     },
//     {
//       img: "/images/icon2.png",
//       title: "Smart Matching",
//       desc: "Our advanced algorithm finds compatible matches based on your preferences",
//     },
//     {
//       img: "/images/icon3.png",
//       title: "Safe & Secure",
//       desc: "Private and secure messaging to get to know your matches better",
//     },
//   ];

//   return (
//     <section className="w-full py-24 flex flex-col items-center px-6">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center">
//         Why Choose <span className="text-[#EF4B6C]">LoveConnect</span>
//       </h2>

//       {/* Two-line Paragraph */}
//       <p className="text-[#000000] text-sm md:text-sm text-center max-w-lg mt-4 leading-relaxed">
//         Our dating platform is like a breath of fresh air. Clean and trendy
//         design with ready to use features we are sure you will love.
//       </p>

//       {/* 3 Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-2xl bg-[#FFF2F4] border border-[#FAD2D8] p-14 flex flex-col items-center text-center"
//           >
//             {/* Gradient Square with Image */}
//             <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#EF4B6C] to-[#FD754F] flex items-center justify-center mb-5">
//               <div className="relative w-10 h-10">
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-[#EF4B6C]">
//               {item.title}
//             </h3>

//             {/* Description (one-line) */}
//             <p className="text-[#555555] text-sm mt-2">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import Image from "next/image";

export default function ChooseSection() {
  const data = [
    {
      img: "/images/icon1.png",
      title: "Verified Profiles",
      desc: "Every profile is verified to ensure you're connecting with real, genuine people",
    },
    {
      img: "/images/icon2.png",
      title: "Smart Matching",
      desc: "Our advanced algorithm finds compatible matches based on your preferences",
    },
    {
      img: "/images/icon3.png",
      title: "Safe & Secure",
      desc: "Private and secure messaging to get to know your matches better",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff]  py-24 flex flex-col items-center px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center">
        Why Choose <span className="text-[#7B00F7]">LoveConnect</span>
      </h2>

      {/* Two-line Paragraph */}
      <p className="text-[#000000] text-sm md:text-sm text-center max-w-lg mt-4 leading-relaxed">
        Our dating platform is like a breath of fresh air. Clean and trendy
        design with ready to use features we are sure you will love.
      </p>

      {/* Boxes → NOW: mobile 1 / iPad 2 / Desktop 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#FAF2FF] border border-[#EBD2FA] p-14 flex flex-col items-center text-center"
          >
            {/* Gradient Square with Image */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#7B00F7] to-[#9162D8] flex items-center justify-center mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#7B00F7]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#555555] text-xs mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
