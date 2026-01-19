"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaAngleRight, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiChevronRight, FiEye, FiEyeOff } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Dating from "./Signup flow/Dating";
import Friendship from "./Signup flow/Friendship";
import Group from "./Signup flow/Group";
import Link from "next/link";

export default function CreateAccount() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState(null);

  //---------- step-1 ----------------//
  const StepCreateAccount = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // No need for ref + setTimeout anymore with this approach
    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
      <>
        <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
          Create Account
        </h2>

        <p className="text-center text-[#666666] text-xs mb-6">
          Start your journey to find love
        </p>

        <label className="text-sm font-semibold text-[#000D23]">
          Full name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full mt-1 mb-4 px-4 py-3 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none text-sm focus:border-[#7B00F7] focus:ring-1"
        />

        <label className="text-sm font-semibold text-[#000D23]">
          Email address
        </label>
        <input
          type="email" // ← better than text for email
          placeholder="Enter your email"
          className="w-full mt-1 mb-4 px-4 py-3 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none text-sm focus:border-[#7B00F7] focus:ring-1"
        />

        <label className="text-sm font-semibold text-[#000D23]">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mt-1 px-4 py-3 text-[#000000] border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none text-sm focus:border-[#7B00F7] focus:ring-1 transition-all"
          />

          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
        </div>

        <button
          onClick={() => setStep(2)}
          className="w-full mt-6 py-3 cursor-pointer rounded-lg text-sm text-white font-semibold bg-[#7B00F7] hover:bg-[#6a00d9] transition-colors"
        >
          CREATE ACCOUNT
        </button>
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#D8DFE5]"></div>
          <span className="text-xs text-[#555555]">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-[#D8DFE5]"></div>
        </div>

        <div className="flex gap-4">
          <button className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5]">
            <FcGoogle />
          </button>
          <button className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5] text-[#395C94]">
            <FaFacebookF className="text-lg" />
          </button>
        </div>

        <p className="text-center text-sm text-[#666666] mt-6">
          already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-[#EF4B6C] cursor-pointer font-semibold underline"
          >
            Log in
          </span>
        </p>
      </>
    );
  };

  //-------------step-2 --------------//
  const StepVerifyCode = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = React.useRef([]);

    // Focus first input when component mounts
    React.useEffect(() => {
      inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
      if (!/^\d*$/.test(value)) return; // only allow numbers

      const newOtp = [...otp];
      newOtp[index] = value.slice(-1); // take last character
      setOtp(newOtp);

      // Move to next input if we typed a digit
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        // Move to previous when empty + backspace
        inputRefs.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").trim();

      if (!/^\d{6}$/.test(pastedData)) return;

      const digits = pastedData.split("");
      setOtp(digits);

      // Focus last input after paste
      inputRefs.current[5]?.focus();
    };

    return (
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
        <div
          className="flex justify-center gap-2 sm:gap-3 max-w-xs mx-auto"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={(e) => e.target.select()} // select text on focus
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#E6E6E6] 
                     bg-[#FAFAFA] text-center text-lg font-medium outline-none
                     focus:border-[#7B00F7] focus:bg-white transition-colors text-[#000000]"
              autoComplete="one-time-code" // helps mobile keyboard suggest autofill
            />
          ))}
        </div>

        {/* BUTTON */}
        <button
          disabled={otp.some((v) => !v) || otp.join("").length !== 6}
          onClick={() => setStep(3)}
          className="w-full mt-6 py-3 cursor-pointer rounded-lg text-sm sm:text-base text-white font-semibold 
                 bg-[#7B00F7] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors uppercase"
        >
          Submit
        </button>

        {/* BACK */}
        <p className="text-center cursor-pointer text-xs sm:text-sm text-[#666666] mt-3">
          <Link href={"/login"}>back to login</Link>
        </p>
      </>
    );
  };

  const StepPurposeSelection = () => (
    <>
      <div className="border-b border-[#E0E0E0]">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#000D23]">
          What would you like to do?
        </h2>

        <p className="text-center text-[#666666] text-sm mb-8">
          This helps us find the right matches for you
        </p>

        <div className="space-y-2 mb-16">
          <button
            onClick={() => {
              setPurpose("dating");
              // setStep(4);
            }}
            className="w-full cursor-pointer flex items-center justify-between px-5 py-4 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] transition-all text-left group"
          >
            <div className="flex items-center gap-2">
              <Image
                src={"/images/dating.png"}
                alt="dating-icon"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-md text-md text-[#000D23]">Dating</h3>
              </div>
            </div>
            {/* <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition">→</span> */}
          </button>

          <button
            onClick={() => {
              setPurpose("friendship");
              // setStep(4);
            }}
            className="w-full cursor-pointer flex items-center justify-between px-5 py-5 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] transition-all text-left group"
          >
            <div className="flex items-center gap-2">
              <Image
                src={"/images/friendship.png"}
                alt="friendship-icon"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-md text-md text-[#000D23]">Friendship</h3>
              </div>
            </div>
            {/* <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition">→</span> */}
          </button>

          <button
            onClick={() => {
              setPurpose("group");
              // setStep(4);
            }}
            className="w-full cursor-pointer flex items-center justify-between px-5 py-5 rounded-xl border border-[#D8DAE5] bg-[#FAFAFA] transition-all text-left group"
          >
            <div className="flex items-center gap-2">
              <Image
                src={"/images/group.png"}
                alt="group-icon"
                width={20}
                height={20}
              />
              <div>
                <h3 className="font-md text-sm text-[#000D23]">
                  Join Group to Find Compatibility
                </h3>
              </div>
            </div>
          </button>
        </div>
      </div>

      <button
        disabled={!purpose}
        onClick={() => setStep(4)}
        className="w-full bg-[#7B00F7] cursor-pointer py-3 text-sm mt-4 rounded-lg uppercase
             disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <span className="flex justify-center items-center gap-1 text-white">
          Next <FiChevronRight className="text-2xl" />
        </span>
      </button>
    </>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F2FF] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 transition-all duration-300">
        {step === 1 && <StepCreateAccount />}
        {step === 2 && <StepVerifyCode />}
        {step === 3 && <StepPurposeSelection />}
        {step === 4 && purpose === "dating" && <Dating />}
        {step === 4 && purpose === "friendship" && <Friendship />}
        {/* {step === 4 && purpose === "group" && <Group />} */}
      </div>
    </div>
  );
}
