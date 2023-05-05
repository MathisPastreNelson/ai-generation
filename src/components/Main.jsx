import React from "react";
import background from "../assets/videos/Quartier.mp4";

export default function Main() {
  return (
    <div className="main">
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="main_content">Test</div>
    </div>
  );
}
