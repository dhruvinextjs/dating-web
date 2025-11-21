    import React from 'react';
    import Image from 'next/image';
 
    function HeroSection() {
    return (
        <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/static/images/bg-image.png')" }}
        >
 
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
           
            {/* Logo */}
            <div className="flex items-center">
            <Image
                src="/static/images/Logo.png"
                alt="Dating Logo"
                width={200}
                height={60}
                className="object-contain w-[160px] sm:w-[200px] h-auto"
                unoptimized
            />
            </div>
 
            {/* Auth Buttons */}
            <div className="flex space-x-2 sm:space-x-4">
            <button className="px-3 sm:px-4 py-2 bg-white border border-[#DFDFDF] rounded-xl text-[#000000] font-semibold text-xs sm:text-sm">
                LOG IN
            </button>
            <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-xl text-xs sm:text-sm font-semibold">
                CREATE ACCOUNT
            </button>
            </div>
        </nav>
 
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-12 flex flex-col md:flex-row items-center justify-between">
 
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
           
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mt-12 md:mt-0">
                <span className="text-[#213366]">
                Find Your <span className="text-[#EF4B6C]">Perfect</span>
                </span>
                <br />
                <span className="text-[#EF4B6C]">Match Today!</span>
            </h1>
 
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-sm mx-auto md:mx-0">
                Connect, chat, and meet genuine people looking for meaningful relationships
            </p>
 
            <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#EF4B6C] to-[#FD754F] text-white rounded-xl font-bold text-sm sm:text-base">
                REGISTRATION NOW
            </button>
            </div>
 
            {/* Right Section */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
                src="/static/images/Frame 1.png"
                alt="Hero Image"
                width={700}
                height={600}
                className="object-contain w-[250px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[700px] h-auto"
                unoptimized
            />
            </div>
 
        </div>
        </div>
    );
    }
 
    export default HeroSection;