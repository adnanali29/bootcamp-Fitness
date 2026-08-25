"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

interface Trainer {
  id: number;
  name: string;
  role: string;
  img: string;
  specs: string;
  instagram: string;
  youtube?: string;
}

export default function Trainers() {
  const { openBookingModal } = useApp();

  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Victor Vance",
      role: "HEAD OF STRENGTH",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
      specs: "CSCS, Powerlifting Specialist (10+ Yrs Exp)",
      instagram: "#",
      youtube: "#",
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "HIIT & CONDITIONING COACH",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
      specs: "NASM CPT, Olympic Lifting Coach",
      instagram: "#",
      youtube: "#",
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "PHYSIQUE & NUTRITION",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      specs: "Pro IFBB Athlete, Macro Specialist",
      instagram: "#",
    },
    {
      id: 4,
      name: "Marcus Sterling",
      role: "ATHLETIC CONDITIONING & AGILITY",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      specs: "Certified Strength Specialist, Conditioning Coach",
      instagram: "#",
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-black relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            WORLD-CLASS COACHES
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            EXPERTS WHO <span className="text-brand-red">BUILD YOU</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Certified master trainers, former competitive athletes, and strength specialists dedicated to
            bringing out your peak physical potential.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((coach) => (
            <div
              key={coach.id}
              className="bg-brand-card rounded-2xl overflow-hidden border border-brand-cardBorder group hover:border-brand-red transition-all duration-300"
            >
              <div className="h-80 relative overflow-hidden">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                {/* Social hover badge */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={coach.instagram}
                    className="w-8 h-8 rounded-full bg-black/80 hover:bg-brand-red flex items-center justify-center text-white text-xs transition-colors"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  {coach.youtube && (
                    <a
                      href={coach.youtube}
                      className="w-8 h-8 rounded-full bg-black/80 hover:bg-brand-red flex items-center justify-center text-white text-xs transition-colors"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">{coach.role}</span>
                <h3 className="font-display text-2xl text-white mt-1 mb-1">{coach.name.toUpperCase()}</h3>
                <p className="text-xs text-gray-400 mb-4">{coach.specs}</p>
                <button
                  onClick={() => openBookingModal(coach.name)}
                  className="w-full py-2 bg-brand-dark hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-brand-cardBorder transition-colors cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
