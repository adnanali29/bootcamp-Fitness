"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { openMembershipModal } = useApp();

  return (
    <section id="hero" className="relative min-h-[calc(100vh-88px)] flex items-start md:items-center pt-6 md:pt-8 pb-16 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Mobile Background */}
        <img
          src="/mobile-hero.png"
          alt="Hero Background Mobile"
          className="block md:hidden w-full h-full object-cover object-top"
        />
        {/* Desktop Background */}
        <img
          src="/hero-bg-1.png"
          alt="Hero Background Desktop"
          className="hidden md:block w-full h-full object-cover object-top"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay z-10"></div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-red/15 rounded-full blur-[120px] pointer-events-none z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Heading matching image standard */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4 text-center">
            BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-white glow-text">
              DIFFERENT.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-bold md:font-normal leading-relaxed mb-8 max-w-xl mx-auto text-center">
            High intensity strength facilities built for modern athletes, lifters, and total transformations. Join
            the premier fitness community in 18+ locations.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
            <button
              onClick={openMembershipModal}
              className="bg-brand-red hover:bg-brand-redDark text-white font-black px-8 py-4 rounded-xl text-base uppercase tracking-wider shadow-neon hover:shadow-neon-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
            >
              <span>JOIN THE CLUB</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a
              href="#programs"
              className="glass-panel hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider transition-all flex items-center justify-center gap-3 border border-white/20 w-full sm:w-auto"
            >
              <span>EXPLORE PROGRAMS</span>
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
