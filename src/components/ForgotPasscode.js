"use client";
import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function ForgotPasscode() {
  const [step, setStep] = useState(1);

  // ------------------ STEP 1 (EMAIL) ------------------ //
  const StepEmail = () => (
    <>
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Forgot Passcode?
      </h2>
      <p className="text-center text-[#666666] text-xs mb-6">
        Enter your email to receive a verification code
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
        className="w-full mt-2 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        SEND CODE
      </button>
    </>
  );

  // ------------------ STEP 2 (VERIFY CODE) ------------------ //
  const StepVerify = () => (
    <>
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Verify Code
      </h2>
      <p className="text-center text-[#666666] text-xs mb-6">
        Enter the 6-digit verification code sent to your email
      </p>

      <div className="flex justify-between gap-2">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            maxLength={1}
            className="w-12 h-12 rounded-lg border border-[#E6E6E6] bg-[#FAFAFA] text-center
            text-lg outline-none focus:ring-2 focus:ring-pink-300"
          />
        ))}
      </div>

      <button
        onClick={() => setStep(3)}
        className="w-full mt-6 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        VERIFY
      </button>

      <p className="text-center text-xs text-gray-500 mt-3">
        Didn&apos;t receive the code?{" "}
        <span className="text-[#EF4B6C] font-semibold cursor-pointer">Resend</span>
      </p>
    </>
  );

  // ------------------ STEP 3 (RESET PASSCODE) ------------------ //
  const StepReset = () => (
    <>
      <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">
        Reset Passcode
      </h2>
      <p className="text-center text-[#666666] text-xs mb-6">
        Create your new passcode
      </p>

      {/* New Password */}
      <label className="text-sm font-semibold text-[#000D23]">New Passcode</label>
      <div className="relative mb-4">
        <input
          type="password"
          placeholder="Enter new passcode"
          className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
          focus:ring-2 focus:ring-pink-300 text-sm"
        />
        <FiEyeOff className="absolute right-4 top-4 text-gray-400" size={18} />
      </div>

      {/* Confirm Password */}
      <label className="text-sm font-semibold text-[#000D23]">Confirm Passcode</label>
      <div className="relative">
        <input
          type="password"
          placeholder="Confirm passcode"
          className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none
          focus:ring-2 focus:ring-pink-300 text-sm"
        />
        <FiEyeOff className="absolute right-4 top-4 text-gray-400" size={18} />
      </div>

      <button
        onClick={() => setStep(4)}
        className="w-full mt-6 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        RESET PASSCODE
      </button>
    </>
  );

  // ------------------ STEP 4 (SUCCESS) ------------------ //
  const StepSuccess = () => (
    <div className="flex flex-col items-center text-center py-6">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />

      <h2 className="text-2xl font-semibold text-[#000D23] mb-2">
        Passcode Reset!
      </h2>
      <p className="text-[#666666] text-xs mb-6">
        Your passcode has been successfully updated.
      </p>

      <button
        onClick={() => (window.location.href = "/login")}
        className="w-full py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]"
      >
        BACK TO LOGIN
      </button>
    </div>
  );

  // ------------------ MAIN RETURN ------------------ //
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF1F5] px-4">
      <div className="w-full max-w-sm bg-[#FFFFFF] rounded-2xl shadow-md p-8 transition-all duration-300">

        {step === 1 && <StepEmail />}
        {step === 2 && <StepVerify />}
        {step === 3 && <StepReset />}
        {step === 4 && <StepSuccess />}

      </div>
    </div>
  );
}
