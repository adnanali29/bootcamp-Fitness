"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

interface Plan {
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export default function Pricing({ showFeaturedOnly = false }: { showFeaturedOnly?: boolean }) {
  const { openMembershipModal } = useApp();

  const plans: Plan[] = [
    {
      name: "Basic Gym Access",
      duration: "1 Month",
      price: "₹1,799",
      features: ["Full gym floor access", "Cardio & strength machines", "Locker room access"],
    },
    {
      name: "Basic Gym Access",
      duration: "3 Months",
      price: "₹3,999",
      features: ["Full gym floor access", "Cardio & strength machines", "Saves ₹1,400 over monthly option"],
    },
    {
      name: "Trainer Support",
      duration: "4 Months",
      price: "₹4,499",
      popular: true,
      features: ["Full gym floor access", "On-floor trainer guidance", "Form correction support", "Saves ₹2,700 over monthly option"],
    },
    {
      name: "Trainer Support + Diet Chart",
      duration: "6 Months",
      price: "₹6,499",
      features: ["Full gym floor access", "Personalized diet chart", "On-floor trainer guidance", "Indian macro guide included"],
    },
    {
      name: "All Gym Access",
      duration: "1 Year",
      price: "₹11,999",
      features: ["Full gym floor access", "Personalized diet chart", "Trainer support", "5 Personal Training (PT) classes included"],
    },
  ];

  const displayedPlans = showFeaturedOnly
    ? plans.filter((p) => ["1 Month", "3 Months", "6 Months"].includes(p.duration))
    : plans;

  return (
    <section id="pricing" className="py-24 bg-black relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            MEMBERSHIP OPTIONS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            CHOOSE YOUR <span className="text-brand-red">LEVEL</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Unlocks full access to our high-performance facility with zero hidden maintenance fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${showFeaturedOnly ? "lg:grid-cols-3 max-w-5xl mx-auto" : "lg:grid-cols-3 xl:grid-cols-5"} gap-6 items-stretch`}>
          {displayedPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-brand-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                plan.popular
                  ? "border-brand-red shadow-neon scale-105 z-10"
                  : "border-brand-cardBorder hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-red text-white text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-neon">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-white font-display text-lg uppercase tracking-wide min-h-[48px] flex items-center">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl text-white font-black">{plan.price}</span>
                    <span className="text-gray-400 text-xs">/ {plan.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-xs text-gray-300 border-t border-white/5 pt-4">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 leading-relaxed">
                      <i className="fa-solid fa-check text-brand-red mt-0.5 flex-shrink-0"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={openMembershipModal}
                className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-brand-red hover:bg-brand-redDark text-white shadow-neon"
                    : "bg-brand-dark hover:bg-white/5 text-gray-300 hover:text-white border border-white/10"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {showFeaturedOnly && (
          <div className="text-center mt-12">
            <Link
              href="/plans"
              className="inline-flex items-center gap-3 bg-brand-card hover:bg-white/10 text-white font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider border border-white/10 shadow-card transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View All Plans</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
