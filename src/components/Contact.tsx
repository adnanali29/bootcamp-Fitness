"use client";

import React, { FormEvent } from "react";
import { useApp } from "@/context/AppContext";

export default function Contact() {
  const { showToast } = useApp();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    showToast("Thank you! Our fitness team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-black relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5">
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight mb-6">
              CONNECT WITH <span className="text-brand-red">OUR TEAM</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Have questions regarding memberships, corporate packages, or personal training? Drop us a
              message or visit any of our clubs.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-cardBorder flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-semibold">Call Us Direct</div>
                  <div className="text-sm font-bold text-white">+1 (800) 555-FITRED</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-cardBorder flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-semibold">Email Support</div>
                  <div className="text-sm font-bold text-white">support@fitredgym.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-cardBorder flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-semibold">Front Desk Hours</div>
                  <div className="text-sm font-bold text-white">
                    Mon - Sun: 6:00 AM - 10:00 PM (Keycard 24/7)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-card border border-brand-cardBorder p-8 rounded-3xl space-y-4 shadow-card"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                    Preferred Location
                  </label>
                  <select className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
                    <option>Metro Flagship HQ</option>
                    <option>Westside Power Lab</option>
                    <option>Northside Athletic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
