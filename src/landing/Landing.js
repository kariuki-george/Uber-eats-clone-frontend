import React from "react";

import Navbar from "./Navbar";
import Search from "./Search";
import ThereIsMore from "./ThereIsMore";
import Map from "./Map";
import Countries from "./Countries";
import Footer from "../components/Footer";
import "./Landing.scss";
import Business from "./Business";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <Search />
      <ThereIsMore />
      <Business />
      <Map />
      <Countries />
      <Footer />
    </div>
  );
}

export default Landing;
