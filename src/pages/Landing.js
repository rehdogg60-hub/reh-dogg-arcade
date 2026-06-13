import React from "react";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import GamesGrid from "../components/site/GamesGrid";
import About from "../components/site/About";
import Footer from "../components/site/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GamesGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
