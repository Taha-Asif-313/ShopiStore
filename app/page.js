import React from "react";
import HeroSection from "./components/home/HeroSection";
import WelcomeSection from "./components/home/WelcomeSection";
import FAQSection from "./components/home/FAQSection";

const Home = async () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FAQSection />
    </>
  );
};

export default Home;
