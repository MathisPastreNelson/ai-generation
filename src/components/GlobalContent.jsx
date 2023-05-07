import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import background from "../assets/videos/GirlInCity.mp4";
import Header from "./Header";
import Footer from "./Footer";

import img1 from "../assets/imagesSmall/citySky-small.png";
import img2 from "../assets/imagesSmall/citySky2-small.png";
import img3 from "../assets/imagesSmall/citySky3-small.png";
import img4 from "../assets/imagesLarge/orignal3.jpeg";
import img5 from "../assets/imagesLarge/orignal4.jpeg";
import img6 from "../assets/imagesLarge/street.png";
import img7 from "../assets/imagesLarge/street1.png";
import img8 from "../assets/imagesLarge/street2.png";
import img9 from "../assets/imagesLarge/street3.png";

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
        <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={500}
          interval={2000}
          totalSlides={9}
          className="imgCity_Global"
          isPlaying={!isPaused && isPlaying}>
          <div className="buttonBox_carousel_Global">
            <ButtonBack>Back</ButtonBack>
            <button onClick={handlePauseClick}>
              {isPaused ? "Play" : "Pause"}
            </button>
            <ButtonNext>Next</ButtonNext>
          </div>
          <Slider>
            <Slide index={0}>
              <ImageWithZoom
                src={img1}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom
                src={img2}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom
                src={img3}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>

            <Slide index={3}>
              <ImageWithZoom
                src={img4}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={4}>
              <ImageWithZoom
                src={img5}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={5}>
              <ImageWithZoom
                src={img6}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={6}>
              <ImageWithZoom
                src={img7}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={7}>
              <ImageWithZoom
                src={img8}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
            <Slide index={8}>
              <ImageWithZoom
                src={img9}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Slide>
          </Slider>
        </CarouselProvider>
        <NavLink className="backToIndex" to="../ai-generation">
          <p>Retour</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
