import React from "react";
import LandingNavbar from "../components/landing-navbar";
import LandingHero from "../components/landing-hero";
import LandingContent from "../components/landing-content";
import LandingFooter from "../components/landing-footer";

const page = () => {
  return (
    <main className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </main>
  );
};

export default page;
