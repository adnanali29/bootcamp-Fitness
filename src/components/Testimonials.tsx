"use client";

import React, { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      text: "The coaches genuinely care. I lost 14 kg without starving myself.",
      name: "Afroz Bhai",
      role: "Member • 8 Months",
      img: "/testimony/Transform%201.webp",
    },
    {
      text: "Small batches made a huge difference. I never felt ignored.",
      name: "Karishma Sen",
      role: "Member • 5 Months",
      img: "/testimony/Transform%202.webp",
    },
    {
      text: "Crushing our personal transformation milestones with custom nutrition plans.",
      name: "Arjun Patel",
      role: "Member • 1 Year",
      videoUrl: "/testimony/WhatsApp%20Video%202026-08-26%20at%2000.32.28%20(1).mp4",
    },
  ];

  const gymVideos = [
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.31.52%20(1).mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.31.52.mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.25%20(1).mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.25.mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.26%20(1).mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.26%20(2).mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.26.mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.27%20(1).mp4",
    "/gym-videos/WhatsApp%20Video%202026-08-26%20at%2000.32.27.mp4",
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of view width
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0B] relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            REVIEWS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            What Our <span className="text-brand-red">Members Say</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Hear directly from the people who transformed their lives at Bootcamp.
          </p>
        </div>

        {/* Small/Compact Vertical Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-cardBorder rounded-2xl p-4 flex flex-col justify-between hover:border-brand-red/30 transition-all duration-300 shadow-card"
            >
              {/* Media Section: Large Vertical Image or Video (9:16 Layout) */}
              <div className="mb-4">
                {rev.videoUrl ? (
                  <div className="w-full aspect-[9/16] max-h-[300px] rounded-xl overflow-hidden border border-brand-red/20 shadow-neon bg-black flex items-center justify-center">
                    <video
                      src={rev.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[9/16] max-h-[300px] rounded-xl overflow-hidden border border-white/10 bg-brand-dark">
                    <img
                      src={rev.img}
                      alt={rev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Quote details */}
              <div className="flex-grow flex flex-col justify-between">
                <p className="text-gray-300 text-xs italic leading-relaxed mb-4 min-h-[48px]">
                  “{rev.text}”
                </p>

                {/* User Details */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-3 mt-2">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red text-xs font-black">
                    {rev.videoUrl ? (
                      <i className="fa-solid fa-play text-[10px]"></i>
                    ) : (
                      <i className="fa-solid fa-user text-[10px]"></i>
                    )}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-[9px] text-gray-500">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Carousel Area */}
        <div className="border-t border-brand-cardBorder/50 pt-16 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h3 className="font-display text-2xl text-white uppercase tracking-wider">
              GYM VIDEOS
            </h3>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-10 h-10 rounded-full border border-brand-cardBorder hover:border-brand-red bg-brand-card text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-card"
                title="Scroll Left"
              >
                <i className="fa-solid fa-chevron-left text-sm"></i>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-10 h-10 rounded-full border border-brand-cardBorder hover:border-brand-red bg-brand-card text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-card"
                title="Scroll Right"
              >
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>

          {/* Carousel Viewport (Displays exactly 5 items side-by-side on lg: viewports) */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
          >
            {gymVideos.map((url, idx) => (
              <div
                key={idx}
                className="w-[calc(50%-12px)] sm:w-[calc(33.33%-12px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-12px)] flex-shrink-0 snap-start relative aspect-[9/16] rounded-2xl overflow-hidden border border-brand-cardBorder hover:border-brand-red/40 transition-all duration-300 shadow-card bg-black"
              >
                <video
                  src={url}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
