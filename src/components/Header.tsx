"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const { openMembershipModal } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/programs", label: "Program" },
    { href: "/results", label: "Results" },
    { href: "/locations", label: "Location" },
    { href: "/plans", label: "Plan" },
    { href: "/gallery", label: "Gallery" },
    { href: "/franchise", label: "Franchise" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-brand-cardBorder py-1"
          : "bg-brand-dark/40 backdrop-blur-sm border-white/5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/boot-camp-logo.png"
            alt="Bootcamp Fitness Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive
                    ? "text-brand-red font-black"
                    : "text-gray-300 hover:text-brand-red"
                } transition-colors py-2`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={openMembershipModal}
            className="hidden lg:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-bold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 shadow-neon hover:shadow-neon-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Join Club</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-white focus:outline-none p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden bg-brand-dark/95 border-b border-brand-cardBorder px-6 py-6 transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 ${
                  isActive ? "text-brand-red font-black" : "text-gray-300 hover:text-brand-red"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openMembershipModal();
            }}
            className="w-full bg-brand-red hover:bg-brand-redDark text-white font-bold py-3 rounded-lg text-center uppercase tracking-wider shadow-neon mt-2 cursor-pointer"
          >
            Join The Club
          </button>
        </div>
      </div>
    </header>
  );
}
