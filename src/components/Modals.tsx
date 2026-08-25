"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";

export default function Modals() {
  const {
    isMembershipOpen,
    closeMembershipModal,
    isBookingOpen,
    closeBookingModal,
    bookingTrainerName,
    isFranchiseOpen,
    closeFranchiseOpen,
    isProgramOpen,
    closeProgramModal,
    programModalTitle,
    programModalDesc,
    openMembershipModal,
    showToast,
  } = useApp();

  const [isBookingStep, setIsBookingStep] = useState(false);

  useEffect(() => {
    if (!isProgramOpen) {
      setIsBookingStep(false);
    }
  }, [isProgramOpen]);

  const handleModalSubmit = (e: FormEvent, successMessage: string, closeFn: () => void) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    closeFn();
    showToast(successMessage);
  };

  return (
    <>
      {/* Modal 1: Membership Signup Modal */}
      {isMembershipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-cardBorder w-full max-w-lg rounded-3xl p-8 relative shadow-neon">
            <button
              onClick={closeMembershipModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="font-display text-3xl text-white mb-2">
              JOIN THE <span className="text-brand-red">FIT RED</span> CLUB
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Complete your registration to unlock 24/7 access to all facilities.
            </p>

            <form
              onSubmit={(e) =>
                handleModalSubmit(
                  e,
                  "Welcome to FIT RED! Check your email for membership confirmation.",
                  closeMembershipModal
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Select Membership Plan
                </label>
                <select className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red">
                  <option>Pro Access Pass ($69/mo)</option>
                  <option>VIP Elite ($129/mo)</option>
                  <option>Day Pass ($25/day)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon mt-2 cursor-pointer"
              >
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Session / Trainer Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-cardBorder w-full max-w-lg rounded-3xl p-8 relative shadow-neon">
            <button
              onClick={closeBookingModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="font-display text-3xl text-white mb-1">
              BOOK SESSION WITH <span className="text-brand-red">{bookingTrainerName.toUpperCase()}</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Select your preferred date and time slot for 1-on-1 assessment.
            </p>

            <form
              onSubmit={(e) =>
                handleModalSubmit(
                  e,
                  "Session Booked Successfully! Coach will reach out within 2 hours.",
                  closeBookingModal
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon mt-2 cursor-pointer"
              >
                Confirm Session Slot
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal 3: Franchise Inquiry Modal */}
      {isFranchiseOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-cardBorder w-full max-w-lg rounded-3xl p-8 relative shadow-neon">
            <button
              onClick={closeFranchiseOpen}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="font-display text-3xl text-white mb-1">
              FRANCHISE <span className="text-brand-red">INQUIRY</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Receive our complete 2026 Franchise Information Kit & Financial Blueprint.
            </p>

            <form
              onSubmit={(e) =>
                handleModalSubmit(
                  e,
                  "Franchise kit requested! Our development manager will contact you.",
                  closeFranchiseOpen
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                  Target Location/City
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon mt-2 cursor-pointer"
              >
                Request Info Package
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal 4: Program Details Modal */}
      {isProgramOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-cardBorder w-full max-w-lg rounded-3xl p-8 relative shadow-neon">
            <button
              onClick={closeProgramModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {!isBookingStep ? (
              <>
                <h3 className="font-display text-3xl text-white mb-3">
                  {programModalTitle.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {programModalDesc}
                </p>
                <button
                  onClick={() => setIsBookingStep(true)}
                  className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon cursor-pointer"
                >
                  Book a Free Session Now
                </button>
              </>
            ) : (
              <>
                <h3 className="font-display text-3xl text-white mb-2">
                  BOOK FREE SESSION
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Schedule your free trial slot for <span className="text-brand-red font-bold">{programModalTitle}</span>.
                </p>

                <form
                  onSubmit={(e) =>
                    handleModalSubmit(
                      e,
                      `Free session booked for ${programModalTitle}! We will contact you shortly.`,
                      () => {
                        closeProgramModal();
                        setIsBookingStep(false);
                      }
                    )
                  }
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                      Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-brand-dark border border-brand-cardBorder rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-neon mt-2 cursor-pointer"
                  >
                    Confirm Session Booking
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
