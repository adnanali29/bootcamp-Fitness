"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function FinalCta() {
  const { openMembershipModal } = useApp();

  return (
    <section className="py-24 bg-[#0B0B0B] relative z-10 border-t border-brand-cardBorder overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-red via-red-600 to-[#cc0e15] rounded-3xl p-12 sm:p-16 overflow-hidden shadow-neon-lg border border-red-500/30 text-center flex flex-col items-center justify-center">
          
          {/* Faded Coach Left */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none select-none z-0">
            <img
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600"
              alt="Coach Left"
              className="w-full h-full object-cover object-center opacity-15 mix-blend-luminosity grayscale mask-fade-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#cc0e15]/0"></div>
          </div>

          {/* Faded Coach Right */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none select-none z-0">
            <img
              src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600"
              alt="Coach Right"
              className="w-full h-full object-cover object-center opacity-15 mix-blend-luminosity grayscale mask-fade-left"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-red/0"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-white font-black text-xs uppercase tracking-[0.25em] bg-black/30 px-4 py-1.5 rounded-full mb-6 border border-white/10">
              LIMITED SPOTS AVAILABLE
            </span>
            
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Start Your <br />
              <span className="text-black drop-shadow-none">Transformation</span> Today
            </h2>
            
            <p className="text-white/90 text-sm sm:text-base font-medium mb-10 max-w-lg leading-relaxed">
              Join hundreds of members who chose consistency over excuses. Claim your trial batch slot now.
            </p>

            {/* Glowing CTA Button */}
            <button
              onClick={openMembershipModal}
              className="bg-black hover:bg-black/95 text-white font-black px-10 py-5 rounded-2xl text-base uppercase tracking-wider shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border border-white/10"
            >
              <span>Book Your FREE Trial</span>
              <i className="fa-solid fa-fire text-brand-red"></i>
            </button>

            <span className="text-white/70 text-[10px] sm:text-xs font-semibold tracking-wider mt-4">
              No joining fee &bull; Limited batch slots available
            </span>

            {/* Phone & Location Details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-12 pt-10 border-t border-white/20 w-full justify-center text-xs text-white/95 font-bold uppercase tracking-wider">
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2.5 hover:text-black transition-colors">
                <i className="fa-solid fa-phone text-sm"></i>
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center justify-center gap-2.5">
                <i className="fa-solid fa-location-dot text-sm"></i>
                <span>Your Gym Location</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        .mask-fade-right {
          mask-image: linear-gradient(to right, black 60%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, black 60%, transparent 100%);
        }
        .mask-fade-left {
          mask-image: linear-gradient(to left, black 60%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 60%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
