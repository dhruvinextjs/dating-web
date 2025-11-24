"use client";
import React, { useState } from "react";
// import { FiEyeOff } from "react-icons/fi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasscode() {
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
const [showConfirmPass, setShowConfirmPass] = useState(false);


  // ------------------ STEP 1 (EMAIL) ------------------ //
  const StepEmail = () => (
    <>
      <h2 className="text-3xl font-semibold text-center mb-2 text-[#000D23]">
        Forgot Password?
      </h2>
      <p className="text-center text-[#666666] text-xs mb-6">
       Enter your email to reset your password
      </p>

      <label className="text-sm font-semibold text-[#000D23]">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
        focus:ring-2 focus:ring-pink-300 text-sm"
      />

      <button
        onClick={() => setStep(2)}
        className="w-full mt-2 py-4 rounded-lg uppercase text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        Send Reset Link
      </button>

      <p className="text-center mt-6 text-md text-[#666666]"><Link href={"/login"}>Back to Login</Link></p>
    </>
  );


  // ------------------ STEP 2 (VERIFY CODE) ------------------ //
const StepVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [];

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input automatically
    if (value && index < 3) {
      inputRefs[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-2 text-[#000D23]">
        Verification Code
      </h2>
      <p className="text-center text-[#666666] text-xs mb-6">
        We have sent the verification code to your email <br/> <span className="text-[#EF4B6C]">john@example.com</span>
      </p>

      <div className="w-fit mx-auto flex gap-2">
        {otp.map((val, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs[i] = el)}
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-13 h-13 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA]
            text-center text-lg outline-none focus:ring-2 focus:ring-pink-300"
          />
        ))}
      </div>
      
      <p className="text-center mt-6">00:57</p>

      <button
        onClick={() => setStep(3)}
        className="w-full mt-4 py-4 uppercase rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        Submit
      </button>

      <p className="text-center text-md text-[#666666] mt-4">
        Back to Login
      </p>
    </>
  );
};

  // ------------------ STEP 3 (RESET PASSCODE) ------------------ //
const StepReset = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Reset your password
      </h2>
      <p className="text-center text-[#666666] text-sm mb-6">
        Set your new password
      </p>

      {/* New Password */}
      <label className="text-sm font-semibold text-[#000D23]">
        Password
      </label>
      <div className="relative mb-4">
        <input
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
          focus:ring-2 focus:ring-pink-300 text-sm"
        />

        <span
          onClick={() => setShowPass(!showPass)}
          className="absolute right-4 top-4 cursor-pointer text-gray-400"
        >
          {showPass ? <FiEye size={18} /> : <FiEyeOff size={18} />}
        </span>
      </div>

      {/* Confirm Password */}
      <label className="text-sm font-semibold text-[#000D23]">
        Confirm Password
      </label>
      <div className="relative">
        <input
          type={showConfirmPass ? "text" : "password"}
          placeholder="Confirm your password"
          className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
          focus:ring-2 focus:ring-pink-300 text-sm"
        />

        <span
          onClick={() => setShowConfirmPass(!showConfirmPass)}
          className="absolute right-4 top-4 cursor-pointer text-gray-400"
        >
          {showConfirmPass ? <FiEye size={18} /> : <FiEyeOff size={18} />}
        </span>
      </div>

      <button
        onClick={() => setStep(4)}
        className="w-full mt-6 py-4 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        RESET
      </button>
    </>
  );
};


  // ------------------ STEP 4 (SUCCESS) ------------------ //
  const StepSuccess = () => (
    <div className="flex flex-col items-center text-center py-6">
      <Image src={"/images/success.png"} width={100} height={100} alt="success"/>

      <h2 className="text-2xl font-semibold text-[#000D23] mb-2">
        Success
      </h2>
      <p className="text-[#1C1C1C] text-md mb-6">
        Your password has been changed.
      </p>

      <button
        onClick={() => (window.location.href = "/login")}
        className="w-50 uppercase py-4 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        Back to Sign In
      </button>
    </div>
  );

  // ------------------ MAIN RETURN ------------------ //
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF1F5] px-4">
      <div className="w-full max-w-md bg-[#FFFFFF] rounded-2xl shadow-md p-8 transition-all duration-300">

        {step === 1 && <StepEmail />}
        {step === 2 && <StepVerify />}
        {step === 3 && <StepReset />}
        {step === 4 && <StepSuccess />}

      </div>
    </div>
  );
}
