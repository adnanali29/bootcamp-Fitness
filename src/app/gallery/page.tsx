"use client";

import React, { useState, useRef } from "react";

interface GymImage {
  id: string;
  url: string;
  caption: string;
  isCustom?: boolean;
}

const DEFAULT_IMAGES: GymImage[] = [
  {
    id: "1",
    url: "/gallery/Afroz%20Bhai%201.webp",
    caption: "Personal Training Session - Afroz Bhai",
  },
  {
    id: "2",
    url: "/gallery/Gallery%202.webp",
    caption: "High Intensity Bootcamp Batch",
  },
  {
    id: "3",
    url: "/gallery/Gallery.webp",
    caption: "Cardio & Conditioning Zone",
  },
  {
    id: "4",
    url: "/gallery/Group%201.webp",
    caption: "Bootcamp Training Group",
  },
  {
    id: "5",
    url: "/gallery/Gym%20Inside%201.webp",
    caption: "Strength Floor Overview",
  },
  {
    id: "6",
    url: "/gallery/Gym%20inside%202.webp",
    caption: "Dumbbells & Lifting Station",
  },
  {
    id: "7",
    url: "/gallery/Karishma%201.webp",
    caption: "Agility & Core Restorations - Karishma",
  },
  {
    id: "8",
    url: "/gallery/Karishma%202.webp",
    caption: "Endurance Battle Ropes Workout",
  },
  {
    id: "9",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.40.32.webp",
    caption: "Turnkey Strength Facility",
  },
  {
    id: "10",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.36%20(1).webp",
    caption: "Heavy Compound Lifting Station",
  },
  {
    id: "11",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.36%20(2).webp",
    caption: "Agility & Mobility Floor Area",
  },
  {
    id: "12",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.36.webp",
    caption: "Hammer Strength Dumbbell Bench",
  },
  {
    id: "13",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.37.webp",
    caption: "Eleiko Olympic Squat Rack",
  },
  {
    id: "14",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.39.webp",
    caption: "Powerlifting Plate Loading Racks",
  },
  {
    id: "15",
    url: "/gallery/WhatsApp%20Image%202026-08-23%20at%2021.42.40.webp",
    caption: "Core Conditioning Area",
  },
];

export default function GalleryPage() {
  const [images, setImages] = useState<GymImage[]>(DEFAULT_IMAGES);
  const [activeLightbox, setActiveLightbox] = useState<GymImage | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newImg: GymImage = {
            id: Math.random().toString(36).substring(2, 9),
            url: event.target.result as string,
            caption: file.name.split(".")[0].replace(/[-_]/g, " ") || "Uploaded Gym Photo",
            isCustom: true,
          };
          setImages((prev) => [newImg, ...prev]);
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deleteImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const resetToDefault = () => {
    setImages(DEFAULT_IMAGES);
  };

  return (
    <section className="py-16 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] block mb-2">
              PHOTOS
            </span>
            <h1 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              GYM <span className="text-brand-red">GALLERY</span>
            </h1>
            <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
              Explore our state-of-the-art facility, elite strength zones, and active member community.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-3">
            {images.some((img) => img.isCustom) && (
              <button
                onClick={resetToDefault}
                className="px-5 py-2.5 bg-brand-card hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-brand-cardBorder cursor-pointer transition-colors"
              >
                Reset Gallery
              </button>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-redDark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-neon cursor-pointer flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <span>Upload Photos</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative bg-brand-card rounded-2xl overflow-hidden border border-brand-cardBorder hover:border-brand-red/40 transition-all duration-300 shadow-card"
            >
              {/* Photo */}
              <div
                onClick={() => setActiveLightbox(img)}
                className="h-72 overflow-hidden relative cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-neon">
                    <i className="fa-solid fa-expand text-sm"></i>
                  </div>
                </div>
                {/* Gradient bottom shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                {/* Caption */}
                <span className="absolute bottom-4 left-4 text-white text-xs font-bold tracking-wide">
                  {img.caption}
                </span>
              </div>

              {/* Delete Button for custom uploads */}
              {img.isCustom && (
                <button
                  onClick={() => deleteImage(img.id)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/80 hover:bg-brand-red text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-white/5"
                  title="Remove photo"
                >
                  <i className="fa-solid fa-trash-can text-xs"></i>
                </button>
              )}
            </div>
          ))}
          {images.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              <i className="fa-solid fa-images text-5xl mb-4 block text-brand-cardBorder"></i>
              No images in the gallery. Upload some photos above!
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl focus:outline-none p-2 cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeLightbox.url}
                alt={activeLightbox.caption}
                className="w-auto h-auto max-w-full max-h-[80vh] rounded-xl object-contain border border-white/10"
              />
              <div className="text-center text-white/90 text-sm font-bold mt-4 tracking-wide bg-black/40 px-4 py-2 rounded-full inline-block mx-auto">
                {activeLightbox.caption}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
