import React, { useState, useEffect } from "react";
import StreetContent from "../components/StreetContent";
import Loader from "../components/Loader";

export default function Street() {
  const [loading, setLoading] = useState(true);
  const [minDurationReached, setMinDurationReached] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");

    // Créer un tableau de promesses pour le chargement des images et des vidéos
    const promises = [];

    images.forEach((img) => {
      const promise = new Promise((resolve, reject) => {
        if (img.complete) {
          console.log(`Image ${img.src} déjà chargée`);
          resolve();
        } else {
          img.addEventListener("load", () => {
            console.log(`Image ${img.src} chargée`);
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
          console.log(`Vidéo ${video.src} déjà chargée`);
          resolve();
        } else {
          video.addEventListener("loadeddata", () => {
            console.log(`Vidéo ${video.src} chargée`);
            resolve();
          });
          video.addEventListener("error", reject);
        }
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      // Vérifier si la durée minimale est atteinte avant de mettre à jour l'état
      setTimeout(() => {
        setMinDurationReached(true);
      }, 1200);
    });
  }, []);

  useEffect(() => {
    // Mettre à jour l'état loading si la durée minimale est atteinte
    if (minDurationReached) {
      setLoading(false);
    }
  }, [minDurationReached]);

  return <div>{loading ? <Loader /> : <StreetContent />}</div>;
}
