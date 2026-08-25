"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "I'm a complete beginner. Can I join?",
      answer: "Absolutely. Our bootcamp is designed for all fitness levels, and every workout has beginner and advanced variations.",
    },
    {
      question: "Do I need to follow a strict diet?",
      answer: "No. We provide flexible Indian meal guidance that fits your daily routine and food preferences.",
    },
    {
      question: "What are the batch timings?",
      answer: "Morning: 6:00 AM – 10:00 AM\nEvening: 5:00 PM – 9:00 PM",
    },
    {
      question: "How long before I see results?",
      answer: "Most members notice visible changes within 6–8 weeks with consistent training and nutrition.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Your first bootcamp session is completely free.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
            SUPPORT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Frequently <span className="text-brand-red">Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know before taking your first step.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-brand-card border border-brand-cardBorder rounded-2xl overflow-hidden hover:border-brand-red/35 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-brand-dark border border-brand-cardBorder/60 text-brand-red flex items-center justify-center text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 border-t border-brand-cardBorder/50" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
