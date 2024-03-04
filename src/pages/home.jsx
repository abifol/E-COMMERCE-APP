import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Gallery from "../components/gallery";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default home;
