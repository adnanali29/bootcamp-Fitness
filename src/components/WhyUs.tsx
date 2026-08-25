import React from "react";

export default function WhyUs() {
  const features = [
    {
      title: "Certified Expert Coaches",
      desc: "Every session is led by experienced transformation specialists.",
      icon: "fa-solid fa-user-tie",
    },
    {
      title: "Small Batch Training",
      desc: "Maximum attention with limited members per batch.",
      icon: "fa-solid fa-users-rectangle",
    },
    {
      title: "Personalized Workout Plans",
      desc: "No generic routines—plans tailored to your goal.",
      icon: "fa-solid fa-file-invoice",
    },
    {
      title: "Nutrition Guidance Included",
      desc: "Easy Indian diet plans that actually fit your lifestyle.",
      icon: "fa-solid fa-wheat-awn",
    },
    {
      title: "Weekly Progress Tracking",
      desc: "Weight, measurements & physique monitored every week.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Supportive Community",
      desc: "Train alongside motivated people who keep you accountable.",
      icon: "fa-solid fa-people-group",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            WHY US
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Why <span className="text-brand-red">500+ Members</span> Chose Us
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            More than a gym—we build sustainable transformations.
          </p>
        </div>

        {/* 2x3 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 hover:border-brand-red/40 transition-all duration-300 shadow-card flex flex-col items-start group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center text-lg mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-neon">
                <i className={feat.icon}></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-brand-red transition-colors">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
