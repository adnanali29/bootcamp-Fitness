import React from "react";

export default function Stats() {
  const statsList = [
    { value: "500+", label: "Members Transformed", desc: "Real body transformations achieved" },
    { value: "4.9★", label: "Google Rating", desc: "Based on verified member reviews" },
    { value: "5+", label: "Years Experience", desc: "Professional coaching & programming" },
    { value: "90%", label: "Success Rate", desc: "Members who complete the program" },
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] relative z-10 overflow-hidden border-t border-brand-cardBorder">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-brand-card/30 border border-brand-cardBorder/60 flex flex-col items-center text-center group hover:border-brand-red/30 transition-all duration-300 shadow-card"
            >
              {/* Internal glow behind numbers */}
              <div className="absolute top-8 w-20 h-20 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-300 pointer-events-none"></div>

              <div className="font-display text-5xl sm:text-6xl font-black text-brand-red tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,30,39,0.3)]">
                {stat.value}
              </div>
              <div className="text-white font-bold text-sm tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
