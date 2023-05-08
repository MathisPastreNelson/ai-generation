import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");

    // Créer un tableau de promesses pour le chargement des images et des vidéos
    const promises = [];

    images.forEach((img) => {
      const promise = new Promise((resolve, reject) => {
        if (img.complete) {
          resolve();
        } else {
          img.addEventListener("load", resolve);
          img.addEventListener("error", reject);
        }
      });
      promises.push(promise);
    });

    videos.forEach((video) => {
      const promise = new Promise((resolve, reject) => {
        if (video.readyState >= 2) {
          resolve();
        } else {
          video.addEventListener("loadeddata", resolve);
          video.addEventListener("error", reject);
        }
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      setLoading(false);
    });
  }, []);

  return <div>{loading ? <Loader /> : <Main />}</div>;
}
