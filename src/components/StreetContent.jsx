import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import background from "../assets/videos/cityBackground2.mp4";
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
  const videoRefs = useRef([]);

  const handleVideoToggle = (index) => {
    const video = videoRefs.current[index];

    if (video.readyState === 4) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="street_content">
        <h3 className="global_Container_title">Videos Generated</h3>
        <Slide duration="1000">
          <div className="videoStreet_Box">
            <video
              className="videoStreet videoStreet1"
              ref={(el) => (videoRefs.current[0] = el)}
              muted
              loop
              onClick={() => handleVideoToggle(0)}
            >
              <source src={video1} type="video/mp4" />
            </video>
            <video
              className="videoStreet videoStreet1"
              ref={(el) => (videoRefs.current[1] = el)}
              muted
              loop
              onClick={() => handleVideoToggle(1)}
            >
              <source src={video2} type="video/mp4" />
            </video>
            <video
              className="videoStreet"
              ref={(el) => (videoRefs.current[2] = el)}
              muted
              loop
              onClick={() => handleVideoToggle(2)}
            >
              <source src={video3} type="video/mp4" />
            </video>
            <video
              className="videoStreet videoStreet2"
              ref={(el) => (videoRefs.current[3] = el)}
              muted
              loop
              onClick={() => handleVideoToggle(3)}
            >
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
