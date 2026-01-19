import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div
      // className="relative bg-cover bg-center bg-no-repeat  min-h-[60vh] sm:h-[70vh] md:h-[68vh] lg:h-[91vh]"
      className="relative bg-cover bg-center bg-no-repeat min-h-fit lg:min-h-screen"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Dating Logo"
            width={200}
            height={60}
            className="object-contain w-[140px] sm:w-[200px] h-auto"
            unoptimized
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-2 sm:space-x-4">
          <button className="px-3 sm:px-4 py-2 bg-white border border-[#DFDFDF] rounded-xl text-[#000000] font-semibold text-xs sm:text-sm">
            <Link href={"/login"}>LOG IN</Link>
          </button>
          <button className="px-2 py-1.5 text-[10px] bg-[#7B00F7]   text-white rounded-lg font-semibold sm:px-4 sm:py-2 sm:text-sm sm:rounded-xl">
            <Link href={"/signup"}>CREATE ACCOUNT</Link>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:-mt-29 flex flex-col md:flex-row items-center justify-between"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:-mt-24 flex flex-col md:flex-row items-center justify-between">

        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight mt-10 md:mt-0">
            <span className="text-[#213366]">
              Find Your <span className="text-[#7B00F7]">Perfect</span>
            </span>
            <br />
            <span className="text-[#7B00F7]">Match Today!</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#555555] max-w-sm mx-auto md:mx-0">
            Connect, chat, and meet genuine people looking for meaningful
            relationships
          </p>

          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[#7B00F7] text-[#FFFFFF] rounded-xl font-bold text-sm sm:text-base">
            <Link href={"/signup"}> REGISTRATION NOW</Link>
          </button>
        </div>

        {/* Right Section */}
        {/* <div className="md:w-1/2 flex justify-center md:justify-end mt-0 md:mt-48 xl:mt-30 "> */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 lg:mt-40 xl:mt-30">
          <Image
            src="/images/Frame 1.png"
            alt="Hero Image"
            width={700}
            height={600}
            className="object-contain w-[250px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[700px] z-auto "
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
