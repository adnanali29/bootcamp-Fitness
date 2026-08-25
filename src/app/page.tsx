import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import HomeTransformations from "@/components/HomeTransformations";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <HomeTransformations />
      <HowItWorks />
      <Testimonials />
      <Pricing showFeaturedOnly={true} />
      <Faq />
      <FinalCta />
    </>
  );
}
