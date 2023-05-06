import React from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/Quartier.mp4";
import Footer from "./Footer";
import Header from "./Header";

import lady from "../assets/imagesSmall/lady.png";
import man from "../assets/imagesSmall/man.png";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="main_content">
        <p className="title_main_content">Tomorrow is Today</p>
        <div className="ImgContent">
          <NavLink className="image_container" to="./global">
            <h3 className="image_title">Global</h3>
            <img className="humanImg" src={lady} alt="" />
          </NavLink>
          <NavLink className="image_container" to="./street">
            <h3 className="image_title">Street</h3>
            <img className="humanImg" src={man} alt="" />
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}