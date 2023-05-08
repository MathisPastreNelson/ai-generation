import React, { useState, useEffect } from "react";
import GlobalContent from "../components/GlobalContent";
import Loader from "../components/Loader";

export default function Global() {
  const [loading, setLoading] = useState(true);
  const [minDurationReached, setMinDurationReached] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");

    const promises = [];

    images.forEach((img) => {
      const promise = new Promise((resolve, reject) => {
        if (img.complete) {
          console.log(`Image ${img.src} already loaded`);
          resolve();
        } else {
          img.addEventListener("load", () => {
            console.log(`Image ${img.src} loaded`);
            resolve();
          });
          img.addEventListener("error", reject);
        }
      });
      promises.push(promise);
    });

    videos.forEach((video) => {
      const promise = new Promise((resolve, reject) => {
        if (video.readyState >= 2) {
          console.log(`Video ${video.src} already loaded`);
          resolve();
        } else {
          video.addEventListener("loadeddata", () => {
            console.log(`Video ${video.src} loaded`);
            resolve();
          });
          video.addEventListener("error", reject);
        }
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      setTimeout(() => {
        setMinDurationReached(true);
      }, 1500);
    });
  }, []);

  useEffect(() => {
    if (minDurationReached) {
      setLoading(false);
    }
  }, [minDurationReached]);

  return <div>{loading ? <Loader /> : <GlobalContent />}</div>;
}
