"use client";
import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";

export default function LoginSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF1F5] px-4">
      <div className="w-full max-w-sm bg-[#FFFFFF] rounded-2xl shadow-md p-8">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2 text-[#000D23]">Welcome Back!</h2>
        <p className="text-center text-[#666666] text-xs mb-6">
          Login to continue your journey
        </p>

        {/* Email */}
        <label className="text-sm font-semibold text-[#000D23]">Email Address</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full mt-1 mb-4 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
        />

        {/* Password */}
        <label className="text-sm font-semibold text-[#000D23]">Password</label>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-4 py-3 border bg-[#FAFAFA] border-[#E6E6E6] rounded-lg outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
          <FiEyeOff className="absolute right-4 top-4 text-gray-400" size={18} />
        </div>

        {/* Forgot Password */}
        <p className="text-center text-sm text-[#EF4B6C] mt-2 cursor-pointer">
          Forgot your password?
        </p>

        {/* Create Account Button */}
        <button className="w-full mt-5 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-[#EF4B6C] to-[#FD754F]">
          CREATE ACCOUNT
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="w-1/2 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5]">
            <FcGoogle />
          </button>
          <button className="w-1/2 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F5F5F5]">
            <FaFacebookF className="text-lg" />
          </button>
        </div>

        {/* Create Account Link */}
        <p className="text-center text-sm text-[#666666] mt-6">
          Don&apos;t have an account?{" "}
          <span className="text-[#EF4B6C] cursor-pointer font-semibold underline">Create Account</span>
        </p>
      </div>
    </div>
  );
}
