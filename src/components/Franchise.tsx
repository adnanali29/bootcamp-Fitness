"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function Franchise() {
  const { openFranchiseModal } = useApp();

  return (
    <section id="franchise" className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-cardBorder rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                BUSINESS OPPORTUNITY
              </span>
              <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
                FRANCHISE WITH <span className="text-brand-red">FIT RED</span>
              </h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Own a high-margin, high-retention fitness business in the fastest growing strength segment. We
                provide turnkey facility engineering, equipment sourcing, operational playbook, and marketing
                support.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-center">
                  <div className="font-display text-2xl text-brand-red">38%</div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Avg EBITDA Margin</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-center">
                  <div className="font-display text-2xl text-white">12 MOS</div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Avg ROI Timeline</div>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-center">
                  <div className="font-display text-2xl text-brand-red">100%</div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Turnkey Support</div>
                </div>
              </div>

              <button
                onClick={openFranchiseModal}
                className="bg-brand-red hover:bg-brand-redDark text-white font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-neon transition-all cursor-pointer"
              >
                Request Franchise Info Kit
              </button>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm glass-panel p-6 rounded-2xl border border-brand-red/30 text-center">
                <i className="fa-solid fa-chart-line text-4xl text-brand-red mb-3"></i>
                <h3 className="font-display text-2xl text-white mb-1">BECOME A CLUB OWNER</h3>
                <p className="text-xs text-gray-400 mb-4">
                  Available territories in US, UK, Australia, and Singapore.
                </p>
                <div className="text-xs font-semibold text-gray-300 bg-brand-dark p-3 rounded-xl border border-white/5">
                  Minimum Capital Req: $150,000 Liquid
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
