// import React from "react";
// import Image from "next/image";

// export default function StepSection() {
//   const steps = [
//     {
//       number: 1,
//       title: "Create Profile",
//       description: "Sign up and tell us about yourself, your interests, and what you're looking for",
//     },
//     {
//       number: 2,
//       title: "Smart Matching",
//       description: "Discover people who match your preferences and connect with them",
//     },
//     {
//       number: 3,
//       title: "Start Dating",
//       description: "Chat with your matches and plan your first date together",
//     },
//   ];

//   return (
//     <section className="w-full py-24 flex flex-col items-center relative">
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/images/step-bg.jpg"
//           alt="background"
//           fill
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Section Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2 text-center">
//         How <span className="text-[#EF4B6C]">It Works</span>
//       </h2>
//       <p className="text-gray-600 text-sm md:text-base mb-12 text-center">
//         Start your journey in three simple steps
//       </p>

//       {/* Steps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
//         {steps.map((step) => (
//           <div
//             key={step.number}
//             className="flex-1 bg-[#FFFFFF] rounded-2xl p-14 flex flex-col items-center shadow-lg"
//           >
//             {/* Number Circle */}
//             <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white flex items-center justify-center text-3xl font-bold mb-4">
//               {step.number}
//             </div>

//             {/* Step Title */}
//             <h3 className="text-lg font-semibold text-[#EF4B6C] mb-2 text-center">
//               {step.title}
//             </h3>

//             {/* Step Description */}
//             <p className="text-[#555555] text-center text-xs leading-4">
//               {step.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";

export default function StepSection() {
  const steps = [
    {
      number: 1,
      title: "Create Profile",
      description:
        "Sign up and tell us about yourself, your interests, and what you're looking for",
    },
    {
      number: 2,
      title: "Smart Matching",
      description:
        "Discover people who match your preferences and connect with them",
    },
    {
      number: 3,
      title: "Start Dating",
      description:
        "Chat with your matches and plan your first date together",
    },
  ];

  return (
    <section className="w-full py-24 flex flex-col items-center relative overflow-hidden">

      {/* Dark Background - Bottom Layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/dark-bg.png"
          alt="dark background"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Light Background - Top Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/step-bg.jpg"
          alt="light overlay"
          fill
          className="object-cover w-full h-full opacity-75"
        />
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2 text-center">
        How <span className="text-[#7B00F7]">It Works</span>
      </h2>
      <p className="text-[#000000] text-sm md:text-base mb-12 text-center">
        Start your journey in three simple steps
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex-1 bg-[#FFFFFF] rounded-2xl p-14 flex flex-col items-center shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7B00F7] to-[#9162D8] text-[#FFFFFF] flex items-center justify-center text-3xl font-bold mb-4">
              {step.number}
            </div>

            <h3 className="text-lg font-semibold text-[#7B00F7] mb-2 text-center">
              {step.title}
            </h3>

            <p className="text-[#555555] text-center text-xs leading-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
