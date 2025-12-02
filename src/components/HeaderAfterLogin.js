// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import { CgBell } from "react-icons/cg";
// import { FiUser } from "react-icons/fi";
// import { HiMenu, HiX } from "react-icons/hi";

// export default function HeaderAfterLogin() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const linkClass = (path) =>
//     pathname === path
//       ? "text-[#EF4B6C]" // ACTIVE COLOR = HOVER COLOR
//       : "text-[#333] hover:text-[#EF4B6C] transition";

//   return (
//     <header className="w-full shadow-sm bg-white">
//       <div className="p-5 max-w-7xl mx-auto flex items-center justify-between">
        
//         <Image
//           src={"/images/Logo.png"}
//           alt="logo"
//           width={160}
//           height={160}
//           className="cursor-pointer"
//         />

//         {/* DESKTOP NAV */}
//         <nav className="hidden lg:flex items-center gap-6 text-[#000D23]">

//           <Link href={"/home"} className={linkClass("/home")}>
//             Discover
//           </Link>

//           <Link href={"/matches"} className={linkClass("/matches")}>
//             Matches
//           </Link>

//           <Link href={"/messages"} className={linkClass("/messages")}>
//             Messages
//           </Link>

//           <div className="text-[#333]">|</div>

//           <Link href={"/notifications"} className={linkClass("/notifications")}>
//             <CgBell className="text-2xl" />
//           </Link>

//           <Link href={"/profile"} className={linkClass("/profile")}>
//             <FiUser className="text-2xl" />
//           </Link>

//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="lg:hidden text-3xl text-[#333]"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="lg:hidden bg-white text-center px-5 pb-5 shadow-md">
//           <div className="flex flex-col gap-4 text-[#333]">

//             <Link href="/home" className={linkClass("/home")} onClick={() => setOpen(false)}>Discover</Link>
//             <Link href="/matches" className={linkClass("/matches")} onClick={() => setOpen(false)}>Matches</Link>
//             <Link href="/messages" className={linkClass("/messages")} onClick={() => setOpen(false)}>Messages</Link>

//             <div className="w-full h-px bg-gray-300" />

//             <div className="flex items-center justify-center gap-4 text-lg">
//               <CgBell className="text-2xl" />
//               <FiUser className="text-2xl" />
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { CgBell } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

export default function HeaderAfterLogin() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-[#EF4B6C]"
      : "text-[#333] hover:text-[#EF4B6C] transition";

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="p-5 max-w-7xl mx-auto flex items-center justify-between relative">
        
        <Image
          src="/images/Logo.png"
          alt="logo"
          width={160}
          height={160}
          className="cursor-pointer"
        />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-[#000D23]">
          <Link href={"/home"} className={linkClass("/home")}>
            Discover
          </Link>
          <Link href={"/matches"} className={linkClass("/matches")}>
            Matches
          </Link>
          <Link href={"/messages"} className={linkClass("/messages")}>
            Messages
          </Link>
          <div className="text-[#333]">|</div>
          <Link href={"/notifications"} className={linkClass("/notifications")}>
            <CgBell className="text-2xl" />
          </Link>
          <Link href={"/profile"} className={linkClass("/profile")}>
            <FiUser className="text-2xl" />
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-3xl text-[#333]"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-center px-5 py-5 text-[#333]">
          <Link href="/home" className={linkClass("/home")} onClick={() => setOpen(false)}>Discover</Link>
          <Link href="/matches" className={linkClass("/matches")} onClick={() => setOpen(false)}>Matches</Link>
          <Link href="/messages" className={linkClass("/messages")} onClick={() => setOpen(false)}>Messages</Link>

          <div className="w-full h-px bg-gray-300" />

          <div className="flex items-center justify-center gap-4 text-lg">
            <CgBell className="text-2xl" />
            <FiUser className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
