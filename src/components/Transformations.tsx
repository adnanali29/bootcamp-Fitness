"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

interface TransformationCard {
  name: string;
  beforeWeight?: string;
  afterWeight?: string;
  timeline: string;
  category: string;
  quote: string;
  beforeImg?: string;
  afterImg?: string;
  videoUrl?: string;
}

export default function Transformations() {
  const { openMembershipModal } = useApp();

  const cards: TransformationCard[] = [
    {
      name: "Marcus Vance",
      beforeWeight: "215 lbs",
      afterWeight: "184 lbs",
      timeline: "12 Weeks",
      category: "Fat Loss & Conditioning",
      quote: "Dropped 31lbs and built more strength than in 5 years of solo training.",
      beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600",
      afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Member Spotlight Video",
      timeline: "12 Weeks",
      category: "Athletic Conditioning",
      quote: "Crushing our 90-day metabolic conditioning program and building sustainable strength.",
      videoUrl: "/results/WhatsApp%20Video%202026-08-26%20at%2000.32.28.mp4",
    },
    {
      name: "Rahul Sharma",
      beforeWeight: "102 kg",
      afterWeight: "82 kg",
      timeline: "16 Weeks",
      category: "Fat Loss & Metabolic",
      quote: "The personalized coaching kept me consistent when nothing else did.",
      beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Priya Patel",
      beforeWeight: "68 kg",
      afterWeight: "57 kg",
      timeline: "12 Weeks",
      category: "Body Toning & Strength",
      quote: "Toned my physique and gained immense confidence in lifting heavy.",
      beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600",
      afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Aman Khan",
      beforeWeight: "68 kg",
      afterWeight: "76 kg",
      timeline: "20 Weeks",
      category: "Lean Muscle Hypertrophy",
      quote: "Added 8kg of solid muscle using standard progressive overload routines.",
      beforeImg: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600",
      afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="transformations" className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            TRANSFORMATIONS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Real People. <span className="text-brand-red">Real Results.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Explore the progress photos and details of members who chose consistency and hard work.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-cardBorder rounded-2xl p-4 hover:border-brand-red/35 transition-all duration-300 shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="font-display text-xl text-white uppercase tracking-wide">
                      {card.name}
                    </h3>
                    <span className="text-brand-red text-[10px] font-bold uppercase tracking-wider">
                      {card.category}
                    </span>
                  </div>
                  <span className="bg-brand-red text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-neon tracking-wider">
                    {card.timeline}
                  </span>
                </div>

                {/* Content Area: Video or Double Image */}
                {card.videoUrl ? (
                  <div className="relative rounded-xl overflow-hidden border border-brand-red/30 shadow-neon mb-4 aspect-[9/16] max-h-[280px] mx-auto bg-black flex items-center justify-center">
                    <video
                      src={card.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Before */}
                    <div className="relative rounded-xl overflow-hidden border border-white/10 group">
                      <img
                        src={card.beforeImg}
                        alt={`${card.name} Before`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/80 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">
                        BEFORE ({card.beforeWeight})
                      </div>
                    </div>
                    {/* After */}
                    <div className="relative rounded-xl overflow-hidden border border-brand-red/40 group shadow-neon">
                      <img
                        src={card.afterImg}
                        alt={`${card.name} After`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-brand-red px-1.5 py-0.5 rounded text-[8px] font-black text-white uppercase tracking-widest shadow-neon">
                        AFTER ({card.afterWeight})
                      </div>
                    </div>
                  </div>
                )}

                {/* Testimonial Quote */}
                <p className="text-gray-300 text-[11px] italic leading-relaxed bg-brand-dark/50 p-3 rounded-xl border border-white/5 mb-2">
                  “{card.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={openMembershipModal}
            className="bg-brand-red hover:bg-brand-redDark text-white font-black px-10 py-4.5 rounded-xl text-sm uppercase tracking-wider shadow-neon hover:shadow-neon-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Start Your Own Transformation
          </button>
        </div>

      </div>
    </section>
  );
}
