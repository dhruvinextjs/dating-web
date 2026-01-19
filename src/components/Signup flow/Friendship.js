"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Friendship() {
  const router = useRouter();
  const [localStep, setLocalStep] = useState(1);
  const [radius, setRadius] = useState(50);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(40);
  const [relationshipPreference, setRelationshipPreference] = useState("");
  const [datingIntentions, setDatingIntentions] = useState("");

  // Step 1: Gender
  const GenderStep = () => (
    <>
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 1 of 9</span>
        <span>11% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-6">
        <div className="h-full w-[9%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0] pb-8">
        <h2 className="text-xl font-bold text-center mb-1 text-[#000D23]">
          What&apos;s your gender?
        </h2>

        <p className="text-center text-[#666666] text-xs mb-8">
          This helps us find the right matches for you
        </p>

        <div className="flex flex-col gap-2">
          <button className="w-full cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition">
            <Image src="/images/men.png" alt="man" width={24} height={24} />
            <span className="font-medium text-[#000000]">Man</span>
          </button>

          <button className="w-full cursor-pointer flex items-center gap-4 p-4 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition">
            <Image src="/images/women.png" alt="woman" width={24} height={24} />
            <span className="font-medium text-[#000000]">Woman</span>
          </button>

          <button className="w-full cursor-pointer flex items-center gap-4 p-4 mb-10 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition">
            <Image
              src="/images/binery.png"
              alt="non-binary"
              width={24}
              height={24}
            />
            <span className="font-medium text-[#000000]">Non-binary</span>
          </button>
        </div>
      </div>

      <div className="mt-2 flex justify-end">
        <button
          onClick={() => setLocalStep(2)}
          className="px-5 py-3 cursor-pointer bg-[#7B00F7] text-white rounded-lg flex items-center gap-2 font-medium"
        >
          NEXT <IoIosArrowForward />
        </button>
      </div>
    </>
  );

  // Step 2: Tell us about yourself
  const AboutYourselfStep = () => (
    <>
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 2 of 9</span>
        <span>22% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-6">
        <div className="h-full w-[18%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0] pb-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          Tell us about yourself
        </h2>

        <p className="text-center text-[#666666] text-sm mb-8">
          Basic information for your profile
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#000D23] mb-2">
              Date of birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 text-[#000000] border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg focus:border-[#7B00F7] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#000D23] mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              placeholder="Enter your height in cm"
              className="w-full px-4 py-3 text-[#000000] border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg focus:border-[#7B00F7] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#000D23] mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full px-4 py-3 mb-10 text-[#000000] border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg focus:border-[#7B00F7] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-1 flex justify-between">
        <button
          onClick={() => setLocalStep(1)}
          className="px-5 py-3 cursor-pointer border border-gray-300 rounded-lg flex items-center gap-2 text-gray-700"
        >
          <IoIosArrowBack /> BACK
        </button>

        <button
          onClick={() => setLocalStep(3)} // Next dating step jaayega
          className="px-5 py-3 cursor-pointer bg-[#7B00F7] text-white rounded-lg flex items-center gap-2"
        >
          NEXT <IoIosArrowForward />
        </button>
      </div>
    </>
  );

  // Step 3: Preferred Gender
  const PreferredGenderStep = () => (
    <>
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 3 of 9</span>
        <span>33% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-6">
        <div className="h-full w-[27%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          You are looking for a...
        </h2>

        <p className="text-center text-[#666666] text-sm mb-6">
          Preferred Gender for Matching
        </p>

        <div className="flex flex-col gap-2">
          <button className="w-full cursor-pointer flex items-center gap-3 px-4 py-4 text-[#000D23] rounded-lg border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition text-sm font-medium">
            <Image src="/images/men.png" alt="man" width={20} height={20} />
            Man
          </button>

          <button className="w-full cursor-pointer flex items-center gap-3 px-4 py-4 text-[#000D23] rounded-lg border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition text-sm font-medium">
            <Image src="/images/women.png" alt="woman" width={20} height={20} />
            Woman
          </button>

          <button className="w-full cursor-pointer mb-16 flex items-center gap-3 px-4 py-4 text-[#000D23] rounded-lg border border-[#D8DAE5] bg-[#FAFAFA] hover:bg-[#F5EDFC] hover:border-[#D6AEFF] transition text-sm font-medium">
            <Image
              src="/images/binery.png"
              alt="non-binary"
              width={20}
              height={20}
            />
            Non-binary
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setLocalStep(2)}
          className="px-5 py-3 cursor-pointer border border-[#CCCCCC] rounded-lg flex items-center gap-2 text-[#666666]"
        >
          <IoIosArrowBack className="text-[#666666]" /> BACK
        </button>

        <button
          onClick={() => setLocalStep(4)}
          className="px-5 py-3 cursor-pointer bg-[#7B00F7] text-white rounded-lg flex items-center gap-2"
        >
          NEXT <IoIosArrowForward />
        </button>
      </div>
    </>
  );

  const StepMatchPreferance = () => (
    <>
      {/* TOP STEP + PROGRESS */}
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 4 of 9</span>
        <span>44% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-6">
        <div className="h-full w-[48%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        {/* HEADING */}
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          Match preferences
        </h2>

        <p className="text-center text-[#666666] text-xs mb-8 -mt-1">
          Set your search criteria
        </p>

        {/* ⭐ SEARCH RADIUS SLIDER */}
        <div className="mb-8">
          <label className="text-sm font-bold text-[#000D23]">
            Search Radius
          </label>

          <div className="mt-2 relative w-full h-6">
            {/* Grey Track */}
            <div className="absolute top-1/2 left-0 w-full h-1.5 bg-[#D6D6D6] rounded-full -translate-y-1/2"></div>

            {/* Black Active Track */}
            <div
              className="absolute top-1/2 h-1.5 bg-[#000000] rounded-full -translate-y-1/2"
              style={{
                width: `${radius}%`,
              }}
            ></div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="absolute w-full h-6 appearance-none bg-transparent cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:border
              [&::-webkit-slider-thumb]:border-black
              [&::-webkit-slider-thumb]:shadow
              "
            />

            <span className="absolute right-0 top-8 text-xs text-[#666666]">
              {radius} km
            </span>
          </div>
        </div>

        {/* ⭐ RELATIONSHIP PREFERENCE DOUBLE RANGE */}
        <div className="mb-8 mb-16">
          <label className="text-sm font-semibold text-[#000D23]">
            Relationship Preference
          </label>

          <div className="mt-2 relative w-full h-6">
            {/* Grey Track */}
            <div className="absolute top-1/2 left-0 w-full h-1.5 bg-[#D6D6D6] rounded-full -translate-y-1/2"></div>

            {/* Black Active Track */}
            <div
              className="absolute top-1/2 h-1.5 bg-[#000000] rounded-full -translate-y-1/2"
              style={{
                left: `${((minAge - 18) / (60 - 18)) * 100}%`,
                width: `${((maxAge - minAge) / (60 - 18)) * 100}%`,
              }}
            ></div>

            {/* Min Slider */}
            <input
              type="range"
              min="18"
              max="60"
              value={minAge}
              onChange={(e) =>
                setMinAge(Math.min(Number(e.target.value), maxAge - 1))
              }
              className="absolute w-full h-6 appearance-none bg-transparent cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:border
              [&::-webkit-slider-thumb]:border-black
              [&::-webkit-slider-thumb]:shadow
              "
            />

            {/* Max Slider */}
            <input
              type="range"
              min="18"
              max="60"
              value={maxAge}
              onChange={(e) =>
                setMaxAge(Math.max(Number(e.target.value), minAge + 1))
              }
              className="absolute w-full h-6 appearance-none bg-transparent cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:border
              [&::-webkit-slider-thumb]:border-black
              [&::-webkit-slider-thumb]:shadow
              "
            />
          </div>

          <div className="flex justify-between text-xs text-[#666666] mt-3">
            <span>Minimum Age: {minAge}</span>
            <span>Maximum Age: {maxAge}</span>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between">
        <button
          onClick={() => setLocalStep(3)}
          className="w-[110px] py-3 cursor-pointer flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>

        <button
          onClick={() => setLocalStep(5)}
          className="w-[110px] py-3 cursor-pointer flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-[#7B00F7]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  const StepPersonalDetail = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-1 sm:mb-2">
        <span>Step 5 of 9</span>
        <span>55% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-4 sm:mb-6">
        <div className="h-full w-[55%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#000D23]">
          Personal details
        </h2>

        <p className="text-center text-[#666666] text-[11px] sm:text-xs mb-4 sm:mb-6">
          Share more about yourself
        </p>

        {/* JOB TITLE FIELD */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-semibold text-[#000D23]">
            Job Title
          </label>
          <input
            placeholder="Type here..."
            className="w-full px-4 py-2.5 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none  text-sm"
          />
        </div>

        {/* RELIGION */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-semibold text-[#000D23]">
            Religion
          </label>
          <div className="relative">
            <select
              value={relationshipPreference}
              onChange={(e) => setRelationshipPreference(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 text-[#000000] rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="long-term">Long-term Relationship</option>
            </select>

            {/* Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* POLITICAL BELIEF */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-semibold text-[#000D23]">
            Political Belief
          </label>
          <div className="relative">
            <select
              value={datingIntentions}
              onChange={(e) => setDatingIntentions(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 text-[#000000] rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="serious">Serious Relationship</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* HAIR COLOUR */}
        <div className="flex flex-col gap-2 mb-16">
          <label className="text-sm font-semibold text-[#000D23]">
            Hair Colour
          </label>
          <div className="relative">
            <select
              value={datingIntentions}
              onChange={(e) => setDatingIntentions(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 text-[#000000] rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="serious">Serious Relationship</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setLocalStep(4)}
          className="w-[100px] sm:w-[110px] cursor-pointer py-2.5 sm:py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" /> Back
        </button>

        <button
          onClick={() => setLocalStep(6)}
          className="w-[100px] sm:w-[110px] cursor-pointer py-2.5 sm:py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-[#7B00F7]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  const StepAboutYou = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 6 of 9</span>
        <span>66% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-8">
        <div className="h-full w-[72%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          About you
        </h2>

        <p className="text-center text-[#666666] text-xs mb-8">
          Tell us your story (minimum 50 words)
        </p>

        {/* TEXTAREA BOX  */}
        <label className="text-sm font-semibold text-[#000D23]">
          Tell us about yourself (minimum 50 words)
        </label>

        <textarea
          placeholder="Type here..."
          className="w-full h-40 mt-2 px-4 py-3 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
                                text-sm resize-none"
        ></textarea>

        <p className="text-xs text-[#4D4D4D] mb-16">Word count: 0 / 50</p>
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex justify-between">
        {/* Back Button */}
        <button
          onClick={() => setLocalStep(5)}
          className="w-[110px] py-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm text-[#666666]
                                 border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        {/* Next Button */}
        <button
          onClick={() => setLocalStep(7)}
          className="w-[110px] py-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold
                                 bg-[#7B00F7]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  const StepHobbiesandInterests = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-1 sm:mb-2">
        <span>Step 7 of 9</span>
        <span>77% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-6 sm:mb-8">
        <div className="h-full w-[81%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#000D23]">
          Hobbies & Interests
        </h2>

        <p className="text-center text-[#666666] text-xs mb-5 sm:mb-8">
          Select what you love doing
        </p>

        {/* TAG BUTTONS */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-14">
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
          ].map((item, index) => {
            const activeTags = ["Reading", "Cooking", "Music", "Movies"];
            const isActive = activeTags.includes(item);

            return (
              <button
                key={index}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm border
                              ${
                                isActive
                                  ? "bg-[#361D50] text-[#FFFFFF]"
                                  : "bg-[#FFFFFF] border-[#CCCCCC] text-[#333333]"
                              }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-4 sm:mt-6 flex justify-between">
        <button
          onClick={() => setLocalStep(6)}
          className="w-[90px] sm:w-[110px] cursor-pointer py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2 rounded-lg
                        text-xs sm:text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-base sm:text-lg" />
          BACK
        </button>

        <button
          onClick={() => setLocalStep(8)}
          className="w-[90px] sm:w-[110px] cursor-pointer py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2 rounded-lg
                        text-xs sm:text-sm text-white font-semibold bg-[#7B00F7]"
        >
          NEXT <IoIosArrowForward className="text-base sm:text-lg" />
        </button>
      </div>
    </>
  );

  const SetpPetPreferance = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-[12px] text-[#4D4D4D] mb-2">
        <span>Step 8 of 9</span>
        <span>88% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-8">
        <div className="h-full w-[88%] bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          Do you have pets?
        </h2>

        <p className="text-center text-[#666666] text-xs mb-8">
          Pet Preferences
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full text-[#000000] flex items-center gap-3 px-4 py-4 rounded-lg border border-[#D8DAE5] bg-[#FAFAFA] text-sm font-medium hover:bg-[#F5EDFC] hover:border-[#D6AEFF]">
            No
          </button>

          <button className="w-full text-[#000000] flex items-center gap-3 px-4 py-4 rounded-lg border border-[#D8DAE5] bg-[#FAFAFA] text-sm font-medium hover:bg-[#F5EDFC] hover:border-[#D6AEFF]">
            Yes
          </button>
        </div>

        {/* TEXTAREA BOX  */}
        <label className="text-sm font-semibold text-[#000D23]">
          Tell us about yours pets
        </label>

        <textarea
          placeholder="Type here..."
          className="w-full h-30 mt-2 px-4 py-3 mb-14 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
                                   focus:ring-2 focus:ring-pink-300 text-sm resize-none"
        ></textarea>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setLocalStep(7)}
          className="w-[110px] py-3 flex items-center cursor-pointer justify-center gap-2 rounded-lg text-sm text-[#666666]
                                     border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        <button
          onClick={() => setLocalStep(9)}
          className="w-[110px] py-3 flex items-center cursor-pointer justify-center gap-2 rounded-lg text-sm text-white font-semibold
                                     bg-[#7B00F7]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  const StepAddPhotos = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-sm text-[#4D4D4D] mb-2">
        <span>Step 9 of 9</span>
        <span>100% Complete</span>
      </div>

      <div className="w-full h-1.5 bg-[#D6D6D6] rounded-full mb-8">
        <div className="h-full w-full bg-[#7B00F7] rounded-full"></div>
      </div>

      <div className="border-b border-[#E0E0E0]">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          Add Your Photos
        </h2>

        <p className="text-center text-[#666666] text-xs mb-8">
          Upload 2-6 photos (minimum 2 required)
        </p>

        <div className="flex justify-start mb-6">
          <div
            className="w-[120px] h-[120px] flex flex-col items-center justify-center
                                      border-2 border-dashed border-[#D6AEFF] bg-[#F5EDFC] rounded-xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#7B00F7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span className="text-sm font-medium text-[#7B00F7] mt-1">
              Upload
            </span>
          </div>
        </div>

        <p className="text-center text-[#666666] text-sm mb-4">
          0 / 6 photos uploaded
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setLocalStep(8)}
          className="w-[110px] py-3 cursor-pointer flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666]
                                       border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        <button
          onClick={() => setLocalStep(10)}
          className="w-[110px] py-3 cursor-pointer flex items-center uppercase justify-center gap-2 rounded-lg text-sm text-white font-semibold
                                       bg-[#7B00F7]"
        >
          Complete
        </button>
      </div>
    </>
  );

  const Stepcomplete = () => (
    <>
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <div className="w-24 h-24 mb-4 relative">
          <div className="w-full h-full  transform rotate-45">
            <Image
              src="/images/success.png"
              alt="check icon"
              width={100}
              height={50}
              className="transform -rotate-45"
            />
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-4 text-[#000D23]">
          You&apos;re All Set!
        </h2>
        <p className="text-center text-[#1C1C1C] text-sm mb-4 max-w-sm">
          Your profile is complete. Time to start your journey to find
          meaningful connections!
        </p>
        <button
          onClick={() => router.push("/home")}
          className="w-full sm:w-[194px] py-3 flex items-center justify-center cursor-pointer rounded-lg text-sm text-[#ffffff] font-semibold bg-[#7B00F7] transition duration-300"
        >
          GET STARTED
        </button>
      </div>
    </>
  );

  return (
    <div>
      <div className="space-y-6">
        {localStep === 1 && <GenderStep />}
        {localStep === 2 && <AboutYourselfStep />}
        {localStep === 3 && <PreferredGenderStep />}
        {localStep === 4 && <StepMatchPreferance />}
        {localStep === 5 && <StepPersonalDetail />}
        {localStep === 6 && <StepAboutYou />}
        {localStep === 7 && <StepHobbiesandInterests />}
        {localStep === 8 && <SetpPetPreferance />}
        {localStep === 9 && <StepAddPhotos />}
        {localStep === 10 && <Stepcomplete />}
      </div>
    </div>
  );
}
