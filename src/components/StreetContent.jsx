import React from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/TourDeLaVille.mp4";
import Header from "./Header";
import Footer from "./Footer";

export default function StreetContent() {
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
        <p className="title_main_content">Street is Today</p>
      </div>
      <Footer />
    </div>
  );
}
