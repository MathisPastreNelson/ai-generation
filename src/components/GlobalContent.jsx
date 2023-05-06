import React from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/GirlInCity.mp4";
import Header from "./Header";
import Footer from "./Footer";

export default function GlobalContent() {
  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="main_content">
        <NavLink to="../ai-generation">
          <p>Retour</p>
        </NavLink>
        <p className="title_main_content">Global is Today</p>
      </div>
      <Footer />
    </div>
  );
}
