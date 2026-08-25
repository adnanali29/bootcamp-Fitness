import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";
import ToastContainer from "@/components/Toast";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Boot Camp Gym | Built Different - Premier Gym & Fitness Club",
  description: "High intensity strength facilities built for modern athletes, lifters, and total transformations. Join the premier Boot Camp Gym community in 18+ locations.",
  icons: {
    icon: "/boot-camp-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased selection:bg-brand-red selection:text-white bg-brand-dark text-gray-100">
        <AppProvider>
          <div className="flex flex-col min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white">
            <Header />
            <main className="flex-grow pt-[88px]">
              {children}
            </main>
            <Footer />
            <Modals />
            <ToastContainer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
