"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ForgotPasscode() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPass, setNewPass] = useState(["", "", "", ""]);
  const [confirmPass, setConfirmPass] = useState(["", "", "", ""]);

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    let copy = [...otp];
    copy[index] = value.slice(-1);
    setOtp(copy);
  };

  // Handle passcode input
  const handlePassChange = (setter, arr, value, index) => {
    let copy = [...arr];
    copy[index] = value.slice(-1);
    setter(copy);
  };

  return (
    <section className="flex justify-center items-center w-full py-20 bg-[#F7F7F7]">
      <div className="w-full max-w-[900px] mx-auto flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* LEFT IMAGE SECTION (same as login) */}
        <div className="hidden lg:flex w-1/2 relative">
          <Image
            src="/images/login.png"
            width={800}
            height={800}
            alt="side"
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          {/* ---------------------- STEP 1 : ENTER EMAIL ---------------------- */}
          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold">Forgot Passcode?</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Enter your registered email to continue.
              </p>

              <label className="text-sm font-medium mt-6">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 mt-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                onClick={() => setStep(2)}
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg font-semibold"
              >
                SEND CODE
              </button>
            </>
          )}

          {/* ---------------------- STEP 2 : OTP VERIFY ---------------------- */}
          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold">Verify Code</h2>
              <p className="text-gray-500 mt-2 text-sm">
                We sent a 4-digit verification code to your email.
              </p>

              <div className="flex gap-3 mt-6">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-14 h-14 border rounded-xl text-center text-xl"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep(3)}
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg font-semibold"
              >
                VERIFY
              </button>
            </>
          )}

          {/* ---------------------- STEP 3 : RESET PASSCODE ---------------------- */}
          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold">Reset Passcode</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Enter new 4-digit passcode.
              </p>

              {/* NEW PASSCODE */}
              <label className="text-sm font-medium mt-6">New Passcode</label>
              <div className="flex gap-3 mt-2">
                {newPass.map((digit, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-14 h-14 border rounded-xl text-center text-xl"
                    value={digit}
                    onChange={(e) =>
                      handlePassChange(setNewPass, newPass, e.target.value, i)
                    }
                  />
                ))}
              </div>

              {/* CONFIRM PASSCODE */}
              <label className="text-sm font-medium mt-6">Confirm Passcode</label>
              <div className="flex gap-3 mt-2">
                {confirmPass.map((digit, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-14 h-14 border rounded-xl text-center text-xl"
                    value={digit}
                    onChange={(e) =>
                      handlePassChange(
                        setConfirmPass,
                        confirmPass,
                        e.target.value,
                        i
                      )
                    }
                  />
                ))}
              </div>

              <button
                onClick={() => setStep(4)}
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg font-semibold"
              >
                RESET PASSCODE
              </button>
            </>
          )}

          {/* ---------------------- STEP 4 : SUCCESS ---------------------- */}
          {step === 4 && (
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mt-6">
                <span className="text-5xl text-green-500">✔</span>
              </div>

              <h2 className="text-3xl mt-6 font-bold">Passcode Reset!</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Your passcode has been successfully updated.
              </p>

              <button
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-lg font-semibold"
                onClick={() => (window.location.href = "/login")}
              >
                GO TO LOGIN
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
