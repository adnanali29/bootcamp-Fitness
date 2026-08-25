"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-brand-card border border-brand-red text-white text-xs font-bold px-5 py-3.5 rounded-xl shadow-neon flex items-center gap-3 transition-all transform animate-fade-in"
        >
          <i className="fa-solid fa-circle-check text-brand-red text-base"></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
