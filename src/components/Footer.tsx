"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { showToast } = useApp();

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    showToast("Subscribed! Check your inbox for your 10% discount pass.");
  };

  return (
    <footer className="bg-black py-16 border-t border-brand-cardBorder text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/footer-logo.png"
                alt="Bootcamp Fitness Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
              High performance gym and training facility built for serious progress. Premier weight rooms,
              world-class coaching, and 24/7 access.
            </p>
            <div className="flex space-x-4 text-gray-400 text-base">
              <a href="#" className="hover:text-brand-red transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Opportunities</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">
                  Franchise Info
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-white transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Corporate Pass
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Newsletter</h4>
            <p className="text-[11px] text-gray-400 mb-3">Get weekly fitness protocols and club updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Your email..."
                className="w-full bg-brand-card border border-brand-cardBorder rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-red"
              />
              <button
                type="submit"
                className="w-full bg-brand-red text-white font-bold py-2 rounded-lg text-xs uppercase hover:bg-brand-redDark transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cardBorder flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
          <div>&copy; {new Date().getFullYear()} FIT RED Gym. All Rights Reserved. Built Different.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Waiver
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
