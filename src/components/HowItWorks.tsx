import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Body Assessment",
      desc: "We analyze your body composition, lifestyle, goals, injuries, and fitness level before you begin.",
    },
    {
      num: "02",
      title: "Custom Training Program",
      desc: "Your coach creates a structured workout plan designed specifically for fat loss, muscle gain, or endurance.",
    },
    {
      num: "03",
      title: "Nutrition & Accountability",
      desc: "Receive meal guidance, weekly check-ins, and daily motivation to stay consistent.",
    },
    {
      num: "04",
      title: "Track Your Transformation",
      desc: "Compare weekly photos, measurements, strength improvements, and celebrate real progress.",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Your <span className="text-brand-red">90-Day</span> Journey
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A structured, step-by-step approach to achieving your peak performance.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl shadow-card hover:border-brand-red/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Card Header & Step number */}
              <div>
                <div className="font-display text-5xl font-black text-brand-red mb-4 drop-shadow-[0_0_8px_rgba(255,30,39,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-brand-red transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Accent bottom bar */}
              <div className="w-8 h-1 bg-brand-red/20 rounded-full mt-6 group-hover:w-full group-hover:bg-brand-red transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
