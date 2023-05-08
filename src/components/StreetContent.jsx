import React from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/TourDeLaVille.mp4";
import Header from "./Header";
import Footer from "./Footer";

import { Slide } from "react-awesome-reveal";

import video1 from "../assets/videos/AutorouteTimelapse.mp4";
import video2 from "../assets/videos/StreetTimeLapse.mp4";
import video3 from "../assets/videos/GirlInCity.mp4";
import video4 from "../assets/videos/Quartier.mp4";

import icon from "../assets/icons/MaleIcon.png";

import man1 from "../assets/imagesSmall/man1.png";
import man2 from "../assets/imagesSmall/man2.png";
import man3 from "../assets/imagesSmall/man3.png";
import man4 from "../assets/imagesSmall/man4.png";

export default function StreetContent() {
  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="street_content">
        <h3 className="global_Container_title">Timelapse Generated</h3>
        <Slide duration="1000">
          <div className="videoStreet_Box">
            <video className="videoStreet videoStreet1" autoPlay muted loop>
              <source src={video1} type="video/mp4" />
            </video>
            <video className="videoStreet videoStreet1" autoPlay muted loop>
              <source src={video2} type="video/mp4" />
            </video>
            <video className="videoStreet" autoPlay muted loop>
              <source src={video3} type="video/mp4" />
            </video>
            <video className="videoStreet videoStreet2" autoPlay muted loop>
              <source src={video4} type="video/mp4" />
            </video>
          </div>
        </Slide>
        <h3 className="global_Container_title">
          Cyberpunk Style
          <img className="iconGender" src={icon} alt="" />
        </h3>
        <Slide direction="right" duration="1000">
          <div className="imgSmallGlobal_Container">
            <img className="imgSmallGlobal imgSmallGlobal1" src={man1} alt="" />
            <img className="imgSmallGlobal imgSmallGlobal1" src={man2} alt="" />
            <img className="imgSmallGlobal" src={man3} alt="" />
            <img className="imgSmallGlobal imgSmallGlobal2" src={man4} alt="" />
          </div>
        </Slide>
        <NavLink to="../ai-generation">
          <p className="backToIndex">Retour</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
