import React from "react";
import Image from "next/image";

export default function PeopleSection() {
  const images = [
    "/images/people1.png",
    "/images/people2.png",
    "/images/people3.png",
    "/images/people4.png",
    "/images/people5.png",
    "/images/people6.png",
    "/images/people7.png",
    "/images/people8.png",
  ];

  return (
    <section className="w-full py-24 flex flex-col items-center px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center">
        Only <span className="text-[#EF4B6C]">True People</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mt-4 leading-relaxed">
        Learn from them and try to make it to this board. This will for sure
        boost you visibility and increase your chances to find you loved one.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-40 md:h-80 rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={`person-${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-12 px-8 py-4 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg uppercase text-sm font-semibold shadow-md">
        View More Popular
      </button>
    </section>
  );
}
