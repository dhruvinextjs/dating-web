"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // messages/[id] page detect
  const hideFooter = pathname.startsWith("/messages/");

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
