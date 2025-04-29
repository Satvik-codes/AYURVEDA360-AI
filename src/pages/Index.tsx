
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoshaIntro from "@/components/DoshaIntro";
import Features from "@/components/Features";
import CommunityPreview from "@/components/CommunityPreview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DoshaIntro />
        <Features />
        <CommunityPreview />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
