"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function Locations() {
  const { showToast } = useApp();

  return (
    <section id="locations" className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            OUR LOCATION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FIND YOUR <span className="text-brand-red">NEAREST CLUB</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4">
            Train at our premier strength and transformation facility in Kataka.
          </p>
        </div>

        {/* Single Location Card */}
        <div className="bg-brand-card border border-brand-cardBorder rounded-3xl p-8 md:p-12 hover:border-brand-red/40 transition-all shadow-card flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-bold uppercase px-3 py-1.5 rounded bg-brand-red/10 text-brand-red border border-brand-red/20 inline-block">
              24/7 OPEN
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-white">BOOTCAMP FITNESS KATAKA</h3>
            
            <div className="text-sm text-gray-300 space-y-3 pt-2">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-building text-brand-red"></i>
                <span>
                  Located in:{" "}
                  <a
                    href="https://www.google.com/search?sa=X&sca_esv=52231ff833dc7835&biw=1440&bih=778&sxsrf=APpeQnsfQQdfxlAprHfzLy7TUQak8Uwl6A:1787682309082&q=Biswal+Shopping+Complex&ludocid=2846443816338830373&lsig=AB86z5Xh_SsHum605RhQX3vkrYF2&ved=2ahUKEwiz7oPIs7yWAxUmcGwGHYNrFAkQ8G0oAHoECC0QAQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline font-bold"
                  >
                    Biswal Shopping Complex
                  </a>
                </span>
              </p>
              
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-brand-red mt-1"></i>
                <span>
                  <a
                    href="https://www.google.com/search?sa=X&sca_esv=52231ff833dc7835&biw=1440&bih=778&sxsrf=APpeQnsfQQdfxlAprHfzLy7TUQak8Uwl6A:1787682309082&q=bootcamp+fitness+kataka+address&ludocid=14951250543578900661&ved=2ahUKEwiz7oPIs7yWAxUmcGwGHYNrFAkQ6BN6BAgmEAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline font-bold"
                  >
                    Address
                  </a>
                  : Plot-1080, Biswal Complex, Meria Bazar, Dargah Bazaar, Kataka, Odisha 753001
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-brand-red"></i> 3000 sq ft Floor
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-brand-red"></i> Supplements Shop
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-brand-red"></i> Separate Changing room
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-brand-red"></i> Special cardio classes
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button
              onClick={() => showToast("Location Selected: Kataka Club")}
              className="w-full md:w-auto px-8 py-4 bg-brand-red hover:bg-brand-redDark text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon cursor-pointer whitespace-nowrap"
            >
              Get Day Pass
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
