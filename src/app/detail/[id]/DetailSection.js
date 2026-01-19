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
   <div className="bg-[#ffffff]"> 
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
            <h2 className="text-2xl font-semibold text-[#000000]">
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
              <button className="px-6 py-2 w-full sm:w-80 border rounded-md flex items-center justify-center gap-2 bg-[#7B00F7] border-none cursor-pointer">
                <Image
                  src={"/images/whiteheart.png"}
                  alt="heart"
                  width={20}
                  height={20}
                />
                <span className="text-[#ffffff]">Like</span>
              </button>

              <button className="px-6 py-2 w-full sm:w-80 border text-[#4D4D4D] rounded-md flex items-center justify-center gap-2 border-[#DDDDDD] cursor-pointer">
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

            <hr className="text-[#E0E0E0] mt-4 mb-4" />

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-40">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[#000000]">Looking for</p>
                  <p className="text-[#7B00F7] font-semibold">Man</p>
                </div>

                <div>
                  <p className="text-[#000000]">Relationship</p>
                  <p className="text-[#7B00F7] font-semibold">Monogamous</p>
                </div>

                <div>
                  <p className="text-[#000000]">Religion</p>
                  <p className="text-[#7B00F7] font-semibold">Hindu</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[#000000]">Intentions</p>
                  <p className="text-[#7B00F7] font-semibold">
                    Long-term relationship
                  </p>
                </div>

                <div>
                  <p className="text-[#000000]">Hair Color</p>
                  <p className="text-[#7B00F7] font-semibold">Black</p>
                </div>

                <div>
                  <p className="text-[#000000]">Politics</p>
                  <p className="text-[#7B00F7] font-semibold">Liberal</p>
                </div>
              </div>
            </div>
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
                  className="px-4 py-1 bg-[#E6E6E6] text-[#000000] rounded-full text-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
