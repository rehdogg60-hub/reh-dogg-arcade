import React from "react";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Featured from "../components/site/Featured";
import GamesGrid from "../components/site/GamesGrid";
import About from "../components/site/About";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";
import FullscreenHint from "../components/site/FullscreenHint";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <GamesGrid />
      <About />
      <Contact />
      <Footer />
      <FullscreenHint />
    </div>
  );
};

export default Landing;
