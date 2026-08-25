"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

interface Program {
  id: number;
  category: "strength" | "hiit" | "hypertrophy";
  title: string;
  desc: string;
  img: string;
  tag: string;
  detail: string;
  intensity: string;
}

export default function Programs() {
  const { openProgramModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const programs: Program[] = [
    {
      id: 1,
      category: "strength",
      title: "STRENGTH",
      desc: "Progressive overload barbell work, heavy compound lifts, and periodized strength programming for raw power.",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
      tag: "STRENGTH & POWER",
      detail:
        "A focused, progressive powerlifting and bodybuilding protocol designed to maximize squat, bench, deadlift and muscular hypertrophy under expert supervision.",
      intensity: "High Intensity",
    },
    {
      id: 2,
      category: "hiit",
      title: "BOOTCAMP",
      desc: "High-intensity intervals combined with low-intensity steady state cardio using battle ropes, kettlebells, and cardiovascular machines.",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      tag: "METABOLIC CONDITIONING",
      detail:
        "Burn fat and build heart endurance by blending heart-pumping HIIT drills with steady cardio splits. Designed for all fitness levels.",
      intensity: "Max Calorie Burn",
    },
    {
      id: 3,
      category: "strength",
      title: "CROSSFIT",
      desc: "Olympic lifts, gymnastics, kettlebell circuits, and intense Workouts of the Day (WOD) to build comprehensive athletic performance.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      tag: "CROSSFIT",
      detail:
        "Master the clean & jerk, snatch, pull-ups, and box jumps. Experience the ultimate functional fitness program led by certified specialists.",
      intensity: "Extreme Intensity",
    },
    {
      id: 4,
      category: "hiit",
      title: "HIIT & LIFT",
      desc: "A metabolic conditioning blend of fast-paced cardiorespiratory training and dumbbell/barbell strength splits.",
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
      tag: "STRENGTH & HIIT",
      detail:
        "Maximize post-workout calorie burn (EPOC) with weightlifting splits executed at intervals to strip fat while retaining lean muscle tissue.",
      intensity: "High Intensity",
    },
    {
      id: 5,
      category: "hypertrophy",
      title: "MUSCLE REBUILD",
      desc: "Isolation techniques, mechanical tension focus, and precision coaching for aesthetic body composition and lean muscle gain.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
      tag: "BODYBUILDING",
      detail:
        "Build a symmetrical, lean physique with custom hypertrophy split routines and dedicated macro nutrient planning.",
      intensity: "Hypertrophy",
    },
    {
      id: 6,
      category: "strength",
      title: "1-ON-1 COACHING",
      desc: "Dedicated personal trainer customized around your schedule, body composition goals, and rehabilitation needs.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      tag: "PERSONAL COACHING",
      detail:
        "Get bespoke program design, private gym floor coaching, bi-weekly body composition scans, and 24/7 trainer access.",
      intensity: "Fully Customized",
    },
  ];

  const categories = [
    { key: "all", label: "All Programs" },
    { key: "strength", label: "Strength & Power" },
    { key: "hiit", label: "Fat Loss / Boot Camp" },
    { key: "hypertrophy", label: "Muscle Building" },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
              SPECIALTIES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              CHOOSE YOUR <span className="text-brand-red">MISSION</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            Engineered workout systems tailored to break through plateaus and deliver physique performance.
          </p>
        </div>

        {/* Program Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-brand-red text-white"
                  : "bg-brand-card text-gray-400 hover:text-white border border-brand-cardBorder"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group relative bg-brand-card rounded-2xl overflow-hidden border border-brand-cardBorder hover:border-brand-red transition-all duration-300 shadow-card"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-red border border-brand-red/30">
                  {prog.tag}
                </div>
              </div>
              <div className="p-6 relative">
                <h3 className="font-display text-2xl text-white mb-2 group-hover:text-brand-red transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{prog.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-400">
                    <i className="fa-solid fa-fire text-brand-red mr-1"></i> {prog.intensity}
                  </span>
                  <button
                    onClick={() => openProgramModal(prog.title, prog.detail)}
                    className="text-brand-red font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:underline cursor-pointer"
                  >
                    <span>Explore</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
