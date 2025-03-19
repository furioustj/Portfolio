import React from "react";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar"; // ✅ Add this!

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Tj's Portfolio",
  description: "The portfolio of Tj Moran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zillaSlab.variable} antialiased bg-[#0a0a0a] text-white relative overflow-x-hidden`}
      >
        {/* Particle Background */}
        <ParticlesBackground />

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-[80px]"> {/* ✅ Push content below navbar height */}
          {children}
        </main>

        {/* Scroll to Top */}
        <ScrollToTop />
      </body>
    </html>
  );
}
