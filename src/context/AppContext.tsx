"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Toast {
  id: string;
  message: string;
}

interface AppContextProps {
  isMembershipOpen: boolean;
  isBookingOpen: boolean;
  isFranchiseOpen: boolean;
  isProgramOpen: boolean;
  
  bookingTrainerName: string;
  programModalTitle: string;
  programModalDesc: string;

  openMembershipModal: () => void;
  closeMembershipModal: () => void;
  
  openBookingModal: (trainerName: string) => void;
  closeBookingModal: () => void;
  
  openFranchiseModal: () => void;
  closeFranchiseOpen: () => void;
  
  openProgramModal: (title: string, desc: string) => void;
  closeProgramModal: () => void;

  toasts: Toast[];
  showToast: (message: string) => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  const [bookingTrainerName, setBookingTrainerName] = useState("");
  const [programModalTitle, setProgramModalTitle] = useState("");
  const [programModalDesc, setProgramModalDesc] = useState("");

  const [toasts, setToasts] = useState<Toast[]>([]);

  const openMembershipModal = () => setIsMembershipOpen(true);
  const closeMembershipModal = () => setIsMembershipOpen(false);

  const openBookingModal = (trainerName: string) => {
    setBookingTrainerName(trainerName);
    setIsBookingOpen(true);
  };
  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingTrainerName("");
  };

  const openFranchiseModal = () => setIsFranchiseOpen(true);
  const closeFranchiseOpen = () => setIsFranchiseOpen(false);

  const openProgramModal = (title: string, desc: string) => {
    setProgramModalTitle(title);
    setProgramModalDesc(desc);
    setIsProgramOpen(true);
  };
  const closeProgramModal = () => {
    setIsProgramOpen(false);
    setProgramModalTitle("");
    setProgramModalDesc("");
  };

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message }]);
    
    // Auto remove after 3.5s
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        isMembershipOpen,
        isBookingOpen,
        isFranchiseOpen,
        isProgramOpen,
        bookingTrainerName,
        programModalTitle,
        programModalDesc,
        openMembershipModal,
        closeMembershipModal,
        openBookingModal,
        closeBookingModal,
        openFranchiseModal,
        closeFranchiseOpen,
        openProgramModal,
        closeProgramModal,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
