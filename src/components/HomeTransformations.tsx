import React from "react";
import Link from "next/link";

export default function HomeTransformations() {
  const cards = [
    {
      name: "Rahul Sharma",
      metric: "102kg → 82kg • 16 Weeks",
      tag: "Fat Loss",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Priya Patel",
      metric: "68kg → 57kg • 12 Weeks",
      tag: "Body Toning",
      img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Aman Khan",
      metric: "+8kg Lean Muscle • 20 Weeks",
      tag: "Strength",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] relative z-10 border-t border-brand-cardBorder">
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
            Every transformation started with one decision.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-cardBorder rounded-2xl overflow-hidden group hover:border-brand-red/40 transition-all duration-300 shadow-card"
            >
              {/* Image Container with tag */}
              <div className="h-80 overflow-hidden relative bg-brand-dark flex items-center justify-center">
                {/* Image Placeholder message inside in case they upload later */}
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-neon">
                  {card.tag}
                </span>
              </div>

              {/* Card Footer details */}
              <div className="p-6 text-center border-t border-brand-cardBorder/50">
                <h3 className="font-display text-2xl text-white mb-1 group-hover:text-brand-red transition-colors">
                  {card.name.toUpperCase()}
                </h3>
                <p className="text-brand-red font-bold text-sm tracking-wide">
                  {card.metric}
                </p>
              </div>
            </div>
          ))}
        </div>



        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-redDark text-white font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-neon hover:shadow-neon-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View More Transformations</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
