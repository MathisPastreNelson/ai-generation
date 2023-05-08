import React from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/Quartier.mp4";
import Footer from "./Footer";
import Header from "./Header";

import lady from "../assets/imagesSmall/lady.png";
import man from "../assets/imagesSmall/man.png";

import { Fade, Slide } from "react-awesome-reveal";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="main_content">
        <Slide duration="500">
          <p className="title_main_content">Tomorrow is Today</p>
        </Slide>
        <div className="ImgContent">
          <Fade duration="1500" cascade>
            <NavLink className="image_container" to="./global">
              <h3 className="image_title">Global</h3>
              <img className="humanImg" src={lady} alt="" />
            </NavLink>

            <NavLink className="image_container" to="./street">
              <h3 className="image_title">Street</h3>
              <img className="humanImg" src={man} alt="" />
            </NavLink>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}
