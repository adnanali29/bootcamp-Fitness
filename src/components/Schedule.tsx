"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

interface ClassItem {
  time: string;
  name: string;
  coach: string;
  spots: string;
}

type ScheduleDataType = Record<string, ClassItem[]>;

export default function Schedule() {
  const { showToast } = useApp();
  const [activeDay, setActiveDay] = useState<string>("mon");

  const scheduleData: ScheduleDataType = {
    mon: [
      { time: "06:00 AM", name: "Powerlifting & Heavy Compound", coach: "Victor Vance", spots: "3 Spots Left" },
      { time: "08:30 AM", name: "High Burn Fat Loss HIIT", coach: "Elena Rostova", spots: "5 Spots Left" },
      { time: "12:00 PM", name: "Lunch Hour Express Conditioning", coach: "Marcus Sterling", spots: "Open" },
      { time: "07:00 PM", name: "Hypertrophy Upper Body Split", coach: "Sarah Jenkins", spots: "Open" },
    ],
    tue: [
      { time: "06:00 AM", name: "Conditioning & Kettlebell Flow", coach: "Elena Rostova", spots: "Open" },
      { time: "09:00 AM", name: "Leg Day Hypertrophy Focus", coach: "Victor Vance", spots: "4 Spots Left" },
    ],
    wed: [
      { time: "06:00 AM", name: "Barbell Deadlift & Pull Special", coach: "Victor Vance", spots: "Open" },
      { time: "08:30 AM", name: "Fat Loss Boot Camp", coach: "Elena Rostova", spots: "Open" },
      { time: "06:00 PM", name: "Endurance Metabolic Burn", coach: "Marcus Sterling", spots: "3 Spots Left" },
    ],
    thu: [
      { time: "06:00 AM", name: "Shoulder & Arms Hypertrophy", coach: "Sarah Jenkins", spots: "Open" },
      { time: "09:00 AM", name: "HIIT & Sprint Interval", coach: "Elena Rostova", spots: "Open" },
      { time: "06:00 PM", name: "Powerlifting Technical Lab", coach: "Victor Vance", spots: "2 Spots Left" },
    ],
    fri: [
      { time: "06:00 AM", name: "Full Body Compound Pump", coach: "Victor Vance", spots: "Open" },
      { time: "05:30 PM", name: "Friday Night Heavy Metal Lift", coach: "Sarah Jenkins", spots: "Almost Full" },
    ],
    sat: [
      { time: "08:00 AM", name: "Weekend Warrior Boot Camp", coach: "Elena Rostova", spots: "Open" },
      { time: "10:00 AM", name: "Strength & Conditioning Open Lab", coach: "Victor Vance", spots: "Open" },
    ],
    sun: [
      { time: "11:00 AM", name: "Open Gym Technical Work", coach: "Staff", spots: "Open" },
    ],
  };

  const days = [
    { key: "mon", label: "Mon" },
    { key: "tue", label: "Tue" },
    { key: "wed", label: "Wed" },
    { key: "thu", label: "Thu" },
    { key: "fri", label: "Fri" },
    { key: "sat", label: "Sat" },
    { key: "sun", label: "Sun" },
  ];

  const activeClasses = scheduleData[activeDay] || [];

  return (
    <section id="schedule" className="py-24 bg-brand-dark relative z-10 border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
              TIMETABLE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              TRAIN ON <span className="text-brand-red">YOUR TIME</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            Daily coached sessions running from 5:30 AM to 9:00 PM. Reserve your spot in advance.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider min-w-[110px] text-center transition-all cursor-pointer ${
                activeDay === day.key
                  ? "bg-brand-red text-white"
                  : "bg-brand-card text-gray-400 hover:text-white border border-brand-cardBorder"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Table / Card List */}
        <div className="bg-brand-card border border-brand-cardBorder rounded-2xl overflow-hidden shadow-card">
          <div className="divide-y divide-brand-cardBorder">
            {activeClasses.map((item, idx) => (
              <div
                key={idx}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="font-display text-xl text-brand-red w-24">{item.time}</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{item.name}</h4>
                    <p className="text-xs text-gray-400">
                      Coach: <span className="text-gray-200 font-semibold">{item.coach}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-dark border border-brand-cardBorder text-gray-300 font-medium">
                    {item.spots}
                  </span>
                  <button
                    onClick={() => showToast(`Class Reserved: ${item.name} at ${item.time}`)}
                    className="px-4 py-2 bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold uppercase rounded-lg shadow-neon transition-all cursor-pointer"
                  >
                    Book Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
