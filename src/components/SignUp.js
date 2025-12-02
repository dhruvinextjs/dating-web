"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CreateAccount() {
  const router = useRouter();
const [showPassword, setShowPassword] = useState(false);
const [password, setPassword] = useState("");
  const [step, setStep] = useState(1)
  const [relationshipPreference, setRelationshipPreference] = useState('');
  const [datingIntentions, setDatingIntentions] = useState('');

  const [radius, setRadius] = useState(50);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(40);
  //---------- step-1 ----------------//
  const StepCreateAccount = () => (

    <>
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Create Account
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        Start your journey to find love
      </p>

      <label className="text-sm font-semibold text-[#000D23]">Full name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
      />

      <label className="text-sm font-semibold text-[#000D23]">Email address</label>
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
      />
{/* 
<label className="text-sm font-semibold text-[#000D23]">Password</label>
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
    className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg 
               outline-none focus:ring-2 focus:ring-pink-300 text-sm"
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-4 cursor-pointer text-gray-500"
  >
    {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
  </span>
</div> */}
<label className="text-sm font-semibold text-[#000D23]">Password</label>
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
    className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] 
               rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
  />

  <span
    onMouseDown={(e) => e.preventDefault()} // ⭐ Prevents blur → cursor stays
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
  >
    {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
  </span>
</div>





      <button
        onClick={() => setStep(2)}
        className="w-full mt-2 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        CREATE ACCOUNT
      </button>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-xs text-gray-500">OR CONTINUE WITH</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex gap-4">
        <button className="w-1/2 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5]">
          <FcGoogle />
        </button>
        <button className="w-1/2 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5] text-[#395C94]">
          <FaFacebookF className="text-lg" />
        </button>
      </div>

      <p className="text-center text-sm text-[#666666] mt-6">
        already have an account?{" "}
        <span onClick={()=> router.push("/login")} className="text-[#EF4B6C] cursor-pointer font-semibold underline">
          Log in
        </span>
      </p>
    </>
  );

  //-------------step-2 --------------//
  const StepVerifyCode = () => (
    <>
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Verify Code
      </h2>
  
      {/* SUBTEXT */}
      <p className="text-center text-[#666666] text-xs sm:text-sm mb-6">
        Enter the 6-digit verification code sent to your email
      </p>
  
      {/* OTP INPUTS */}
      <div className="flex justify-between gap-2 sm:gap-3 max-w-xs mx-auto">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            maxLength={1}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#E6E6E6] 
                       bg-[#FAFAFA] text-center text-lg outline-none 
                       focus:ring-2 focus:ring-pink-300"
          />
        ))}
      </div>
  
      {/* BUTTON */}
      <button
        onClick={() => setStep(3)}
        className="w-full mt-6 py-3 rounded-lg text-sm sm:text-base text-white font-semibold 
                   bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        VERIFY
      </button>
  
      {/* BACK */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
        back to login
      </p>
    </>
  );
  
  //------------- step-3 -----------//
  const StepChooseGeneder = () => (
    <>

      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
        <span>Step 1 of 11</span>
        <span>9% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-full w-[9%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        What's your gender?
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        This helps us find the right matches for you
      </p>

      <div className="flex flex-col gap-3">

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#EF4B6C] bg-[#FFF5F6] text-sm font-medium"
        >
          <img
            src="/images/menicon.png"
            alt="man icon"
            className="w-5 h-5"
          />
          Man
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          <img
            src="/images/womenicon.png"
            alt="woman icon"
            className="w-5 h-5"
          />
          Woman
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          <img
            src="/images/non-binaryicon.png"
            alt="non-binary icon"
            className="w-5 h-5"
          />
          Non-binary
        </button>

      </div>
      <div className='border border-[#E0E0E0] mt-12  '></div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setStep(4)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>

    </>
  );

  //---------- step-4 ----------//
  const StepYourSelf = () => (
    <>

      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
        <span>Step 2 of 11</span>
        <span>18% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-full w-[11%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Tell us about yourself
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        Basic information for your profile
      </p>

      <label className="text-sm font-semibold text-[#000D23]">Date of birth</label>
      <input
        type="text"
        placeholder="DD/MM/YYYY"
        className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
      />

      <label className="text-sm font-semibold text-[#000D23]">Height (cm)</label>
      <input
        type="text"
        placeholder="Enter your height in cm"
        className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
      />

      <label className="text-sm font-semibold text-[#000D23]">Location</label>
      <input
        type="City,country"
        placeholder="Enter your password"
        className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
      />

      <div className='border border-[#E0E0E0] mt-12'></div>
      <div className="mt-6 flex justify-between">
        {/* Back Button */}
        <button
          onClick={() => setStep(3)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>

        {/* Next Button */}
        <button
          onClick={() => setStep(5)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //-------- step-5 ----------//
  const SetpBackChooseGeneder = () => (
    <>

      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
        <span>Step 5 of 11</span>
        <span>45% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-full w-[20%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        You are looking for a...
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        Preferred Gender for Matching
      </p>

      <div className="flex flex-col gap-3">

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#EF4B6C] bg-[#FFF5F6] text-sm font-medium"
        >
          <img
            src="/images/menicon.png"
            alt="man icon"
            className="w-5 h-5"
          />
          Man
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          <img
            src="/images/womenicon.png"
            alt="woman icon"
            className="w-5 h-5"
          />
          Woman
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"        >
          <img
            src="/images/non-binaryicon.png"
            alt="non-binary icon"
            className="w-5 h-5"
          />
          Non-binary
        </button>
      </div>
      <div className='border border-[#E0E0E0] mt-12  '></div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(4)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>
        <button
          onClick={() => setStep(6)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //---------- step-6 -----------//
  const StepSexuality = () => (
    <>
      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
        <span>Step 4 of 11</span>
        <span>36% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-full w-[30%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Your Sexuality
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        Preferred Gender for Matching
      </p>

      <div className="flex flex-col gap-3">

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#EF4B6C] bg-[#FFF5F6] text-sm font-medium"
        >
          Straight
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          Gay
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          Lesbian
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          Bisexual
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          Prefer not to say
        </button>
      </div>
      <div className='border border-[#E0E0E0] mt-12  '></div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(5)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>
        <button
          onClick={() => setStep(7)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //---------- step-7 -----------//
  const StepReletionshipSelect = () => (
    <>

      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
        <span>Step 5 of 11</span>
        <span>45% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-full w-[40%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Relationship goals
      </h2>

      <p className="text-center text-[#666666] text-xs mb-6">
        What are you looking for?
      </p>

      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="relationshipPreference" className="text-sm font-semibold text-[#000D23]">
          Relationship Preference
        </label>
        <div className="relative">
          <select
            id="relationshipPreference"
            value={relationshipPreference}
            onChange={(e) => setRelationshipPreference(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EF4B6C] focus:border-transparent"
          >
            <option value="" disabled>Select</option>
            <option value="long-term">Long-term Relationship</option>
            <option value="casual-dating">Casual Dating</option>

          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="datingIntentions" className="text-sm font-semibold text-[#000D23]">
          Dating Intentions
        </label>
        <div className="relative">
          <select
            id="datingIntentions"
            value={datingIntentions}
            onChange={(e) => setDatingIntentions(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EF4B6C] focus:border-transparent"
          >
            <option value="" disabled>Select</option>
            <option value="serious">Serious Relationship</option>
            <option value="something-casual">Something Casual</option>

          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </div>
        </div>
      </div>
      <div className='border border-[#E0E0E0] mt-12  '></div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(6)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          Back
        </button>
        <button
          onClick={() => setStep(8)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //--------- step-8 ----------//
  const StepMatchPreferance = () => (
    <>
    {/* TOP STEP + PROGRESS */}
    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
      <span>Step 6 of 11</span>
      <span>54% Complete</span>
    </div>

    <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
      <div className="h-full w-[48%] bg-[#EF4B6C] rounded-full"></div>
    </div>

    {/* HEADING */}
    <h2 className="text-[22px] font-bold text-center mb-1 text-[#000D23]">
      Match preferences
    </h2>

    <p className="text-center text-[#666666] text-xs mb-8 -mt-1">
      Set your search criteria
    </p>

   {/* ⭐ SEARCH RADIUS SLIDER */}
<div className="mb-8">
  <label className="text-sm font-semibold text-[#000D23]">
    Search Radius
  </label>

  <div className="mt-4 relative w-full h-6">

    {/* Grey Track */}
    <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 rounded-full -translate-y-1/2"></div>

    {/* Black Active Track */}
    <div
      className="absolute top-1/2 h-[3px] bg-black rounded-full -translate-y-1/2"
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

    <span className="absolute right-0 top-8 text-xs text-[#666]">
      {radius} km
    </span>
  </div>
</div>


{/* ⭐ RELATIONSHIP PREFERENCE DOUBLE RANGE */}
<div className="mb-8">
  <label className="text-sm font-semibold text-[#000D23]">
    Relationship Preference
  </label>

  <div className="mt-6 relative w-full h-6">

    {/* Grey Track */}
    <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 rounded-full -translate-y-1/2"></div>

    {/* Black Active Track */}
    <div
      className="absolute top-1/2 h-[3px] bg-black rounded-full -translate-y-1/2"
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

  <div className="flex justify-between text-xs text-[#666] mt-3">
    <span>Minimum Age: {minAge}</span>
    <span>Maximum Age: {maxAge}</span>
  </div>
</div>


    {/* DIVIDER */}
    <div className="border border-[#E0E0E0] mt-10"></div>

    {/* BUTTONS */}
    <div className="mt-6 flex justify-between">
      <button
        onClick={() => setStep(7)}
        className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
      >
        <IoIosArrowBack className="text-lg" />
        Back
      </button>

      <button
        onClick={() => setStep(9)}
        className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        NEXT <IoIosArrowForward className="text-lg" />
      </button>
    </div>
  </>
  );

  //------------ step-9 -----------//

  const StepPersonalDetail = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1 sm:mb-2">
        <span>Step 7 of 11</span>
        <span>63% Complete</span>
      </div>
  
      <div className="w-full h-1 bg-gray-200 rounded-full mb-4 sm:mb-6">
        <div className="h-full w-[55%] bg-[#EF4B6C] rounded-full"></div>
      </div>
  
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-1 text-[#000D23]">
        Personal Details
      </h2>
  
      <p className="text-center text-[#666666] text-[11px] sm:text-xs mb-4 sm:mb-6">
        Share more about yourself
      </p>
  
      {/* JOB TITLE FIELD */}
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm font-semibold text-[#000D23]">Job Title</label>
        <input
          placeholder="Enter your job title"
          className="w-full px-4 py-2.5 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
        />
      </div>
  
      {/* RELIGION */}
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm font-semibold text-[#000D23]">Religion</label>
        <div className="relative">
          <select
            value={relationshipPreference}
            onChange={(e) => setRelationshipPreference(e.target.value)}
            className="w-full px-4 py-2.5 pr-10 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EF4B6C]"
          >
            <option value="" disabled>Select</option>
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
        <label className="text-sm font-semibold text-[#000D23]">Political Belief</label>
        <div className="relative">
          <select
            value={datingIntentions}
            onChange={(e) => setDatingIntentions(e.target.value)}
            className="w-full px-4 py-2.5 pr-10 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EF4B6C]"
          >
            <option value="" disabled>Select</option>
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
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm font-semibold text-[#000D23]">Hair Colour</label>
        <div className="relative">
          <select
            value={datingIntentions}
            onChange={(e) => setDatingIntentions(e.target.value)}
            className="w-full px-4 py-2.5 pr-10 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EF4B6C]"
          >
            <option value="" disabled>Select</option>
            <option value="serious">Serious Relationship</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </div>
        </div>
      </div>
  
      {/* DIVIDER */}
      <div className="border border-[#E0E0E0] mt-8"></div>
  
      {/* BUTTONS */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setStep(8)}
          className="w-[100px] sm:w-[110px] py-2.5 sm:py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" /> Back
        </button>
  
        <button
          onClick={() => setStep(10)}
          className="w-[100px] sm:w-[110px] py-2.5 sm:py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );
  
  //---------- STEP-10 ----------//

  const StepAboutYou = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-[12px] text-gray-500 mb-2">
        <span>Step 8 of 11</span>
        <span>72% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-8">
        <div className="h-full w-[72%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-center mb-1 text-[#000D23]">
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
        className="w-full h-40 mt-2 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none 
                   focus:ring-2 focus:ring-pink-300 text-sm resize-none"
      ></textarea>

      <p className="text-[11px] text-gray-500 mt-2">Word count: 0 / 50</p>

      {/* DIVIDER */}
      <div className="border border-[#E0E0E0] mt-10"></div>

      {/* BUTTONS */}
      <div className="mt-6 flex justify-between">
        {/* Back Button */}
        <button
          onClick={() => setStep(9)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] 
                     border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        {/* Next Button */}
        <button
          onClick={() => setStep(11)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold 
                     bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //---------- step-11 ------------//

  const StepHobbiesandInterests = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-[12px] text-gray-500 mb-1 sm:mb-2">
        <span>Step 9 of 11</span>
        <span>81% Complete</span>
      </div>
  
      <div className="w-full h-1 bg-gray-200 rounded-full mb-6 sm:mb-8">
        <div className="h-full w-[81%] bg-[#EF4B6C] rounded-full"></div>
      </div>
  
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-1 text-[#000D23]">
        Hobbies & Interests
      </h2>
  
      <p className="text-center text-[#666666] text-xs mb-5 sm:mb-8">
        Select what you love doing
      </p>
  
      {/* TAG BUTTONS */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[
          "Reading", "Traveling", "Cooking", "Sports",
          "Gaming", "Music", "Photography", "Art",
          "Dancing", "Hiking", "Yoga", "Movies",
          "Writing", "Gardening", "Fitness", "Wine Tasting"
        ].map((item, index) => {
  
          const activeTags = ["Reading", "Cooking", "Music", "Movies"];
          const isActive = activeTags.includes(item);
  
          return (
            <button
              key={index}
              className={`px-3 py-[6px] sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border 
                ${
                  isActive
                    ? "bg-[#EF4B6C] border-[#EF4B6C] text-white"
                    : "bg-white border-[#D9D9D9] text-[#333]"
                }`}
            >
              {item}
            </button>
          );
        })}
      </div>
  
      {/* DIVIDER */}
      <div className="border border-[#E0E0E0] mt-8 sm:mt-12"></div>
  
      {/* BUTTONS */}
      <div className="mt-4 sm:mt-6 flex justify-between">
        <button
          onClick={() => setStep(10)}
          className="w-[90px] sm:w-[110px] py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2 rounded-lg 
          text-xs sm:text-sm text-[#666666] border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-base sm:text-lg" />
          BACK
        </button>
  
        <button
          onClick={() => setStep(12)}
          className="w-[90px] sm:w-[110px] py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2 rounded-lg 
          text-xs sm:text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-base sm:text-lg" />
        </button>
      </div>
    </>
  );
  
  //--------- step-12 ---------//

  const SetpPetPreferance = () => (
    <>
      {/* STEP & PROGRESS */}
      <div className="flex items-center justify-between text-[12px] text-gray-500 mb-2">
        <span>Step 10 of 11</span>
        <span>90% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-8">
        <div className="h-full w-[88%] bg-[#EF4B6C] rounded-full"></div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-center mb-1 text-[#000D23]">
        Do you have pets?
      </h2>

      <p className="text-center text-[#666666] text-xs mb-8">
        Pet Preferences
      </p>
      <div className="flex flex-col gap-3">

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#EF4B6C] bg-[#FFF5F6] text-sm font-medium"
        >
          No
        </button>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-sm font-medium"
        >
          Yes
        </button>
      </div>

      {/* TEXTAREA BOX  */}
      <label className="text-sm font-semibold text-[#000D23]">
        Tell us about yours pets
      </label>

      <textarea
        placeholder="Type here..."
        className="w-full h-30 mt-2 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none 
                   focus:ring-2 focus:ring-pink-300 text-sm resize-none"
      ></textarea>


      <div className="border border-[#E0E0E0] mt-10"></div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(10)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] 
                     border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        <button
          onClick={() => setStep(13)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold 
                     bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //------- step-13 ---------//

  const StepAddPhotos = () => (
    <>
      {/* STEP & PROGRESS */}   
      <div className="flex items-center justify-between text-[12px] text-gray-500 mb-2">
        <span>Step 11 of 11</span>
        <span>100% Complete</span>
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full mb-8">
        <div className="h-full w-full bg-[#EF4B6C] rounded-full"></div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-1 text-[#000D23]">
        Add Your Photos
      </h2>

      <p className="text-center text-[#666666] text-xs mb-8">
        Upload 2-6 photos (minimum 2 required)
      </p>

      <div className="flex justify-start mb-6">
        <div className="w-[120px] h-[120px] flex flex-col items-center justify-center 
                    border-2 border-dashed border-[#EF4B6C] bg-[#FFF5F6] rounded-xl cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EF4B6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span className="text-sm font-medium text-[#EF4B6C] mt-1">
            Upload
          </span>
        </div>
      </div>

      <p className="text-center text-[#666666] text-sm mb-12">
        0 / 6 photos uploaded
      </p>

      <div className="border border-[#E0E0E0] mt-10"></div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(12)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-[#666666] 
                     border border-[#CCCCCC] font-semibold"
        >
          <IoIosArrowBack className="text-lg" />
          BACK
        </button>

        <button
          onClick={() => setStep(14)}
          className="w-[110px] py-3 flex items-center justify-center gap-2 rounded-lg text-sm text-white font-semibold 
                     bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
        >
          NEXT <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );

  //---------- Step-14 --------------//

  const Stepcomplete = () => (
    <>
      <div className="flex flex-col items-center justify-center h-full text-center p-6">

        <div className="w-24 h-24 mb-8 relative">
          <div className="w-full h-full  transform rotate-45">
            <Image
              src="/images/successicon.png"
              alt="check icon"
              width={100}
              height={50}
              className="transform -rotate-45"
            />
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-4 text-[#000D23]">
          You're All Set!
        </h2>
        <p className="text-center text-[#666666] text-base mb-12 max-w-sm">
          Your profile is complete. Time to start your journey to find meaningful connections!
        </p>
        <button 

onClick={() => router.push("/dashboard")}
          className="w-full sm:w-[194px] py-4 flex items-center justify-center rounded-lg text-lg text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] shadow-lg shadow-pink-300 transition duration-300">
          GET STARTED
        </button>
      </div>
    </>
  );


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF1F5] px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8 transition-all duration-300">
        {step === 1 && <StepCreateAccount />}
        {step === 2 && <StepVerifyCode />}
        {step === 3 && <StepChooseGeneder />}
        {step === 4 && <StepYourSelf />}
        {step === 5 && <SetpBackChooseGeneder />}
        {step === 6 && <StepSexuality />}
        {step === 7 && <StepReletionshipSelect />}
        {step === 8 && <StepMatchPreferance />}
        {step === 9 && <StepPersonalDetail />}
        {step === 10 && <StepAboutYou />}
        {step === 11 && <StepHobbiesandInterests />}
        {step === 12 && <SetpPetPreferance />}
        {step === 13 && <StepAddPhotos />}
        {step === 14 && <Stepcomplete />}
      </div>
    </div>
  )
}