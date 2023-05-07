import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import background from "../assets/videos/GirlInCity.mp4";
import Header from "./Header";
import Footer from "./Footer";

import img2 from "../assets/imagesSmall/citySky2-small.png";
import img3 from "../assets/imagesSmall/citySky3-small.png";
import img4 from "../assets/imagesLarge/orignal3.jpeg";
import img5 from "../assets/imagesLarge/orignal4.jpeg";
import img6 from "../assets/imagesLarge/street.png";
import img7 from "../assets/imagesLarge/street1.png";
import img8 from "../assets/imagesLarge/street2.png";
import img9 from "../assets/imagesLarge/street3.png";

import imgbig1 from "../assets/imagesLarge/orignal1.jpeg";
import imgbig2 from "../assets/imagesLarge/orignal2.png";

import lady1 from "../assets/imagesSmall/lady1.png";
import lady2 from "../assets/imagesSmall/lady2.png";
import lady3 from "../assets/imagesSmall/lady3.png";
import lady4 from "../assets/imagesSmall/lady4.png";

export default function GlobalContent() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div className="global">
        <h3 className="global_Container_title">Explore Future</h3>
        <div className="carouselMegaBox">
          <CarouselProvider
            naturalSlideWidth={500}
            naturalSlideHeight={500}
            interval={2000}
            totalSlides={4}
            className="imgCity_Global"
            isPlaying={!isPaused && isPlaying}>
            <Slider>
              <Slide index={0}>
                <ImageWithZoom
                  src={img2}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
              <Slide index={1}>
                <ImageWithZoom
                  src={img3}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>

              <Slide index={2}>
                <ImageWithZoom
                  src={img4}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
              <Slide index={3}>
                <ImageWithZoom
                  src={img5}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
            </Slider>
          </CarouselProvider>
          <CarouselProvider
            naturalSlideWidth={500}
            naturalSlideHeight={500}
            interval={2000}
            totalSlides={4}
            className="imgCity_Global"
            isPlaying={!isPaused && isPlaying}>
            <Slider>
              <Slide index={0}>
                <ImageWithZoom
                  src={img6}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
              <Slide index={1}>
                <ImageWithZoom
                  src={img7}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
              <Slide index={2}>
                <ImageWithZoom
                  src={img8}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
              <Slide index={3}>
                <ImageWithZoom
                  src={img9}
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <div className="imgBigGlobal_Container">
          <img className="imgBigGlobal imgBigGlobal1" src={imgbig1} alt="" />
          <img className="imgBigGlobal" src={imgbig2} alt="" />
        </div>
        <h3 className="global_Container_title">Cyberpunk Style</h3>
        <div className="imgSmallGlobal_Container">
          <img className="imgSmallGlobal imgSmallGlobal1" src={lady1} alt="" />
          <img className="imgSmallGlobal imgSmallGlobal1" src={lady2} alt="" />
          <img className="imgSmallGlobal" src={lady3} alt="" />
          <img className="imgSmallGlobal imgSmallGlobal2" src={lady4} alt="" />
        </div>
        <NavLink className="backToIndex" to="../ai-generation">
          <p>Retour</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
