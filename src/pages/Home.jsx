import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import ReactLoading from "react-loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <ReactLoading
          type={"spin"} // Type d'indicateur de chargement
          color={"#fff"} // Couleur de l'indicateur de chargement
          height={100} // Hauteur de l'indicateur de chargement
          width={100} // Largeur de l'indicateur de chargement
        />
      ) : (
        <Main />
      )}
    </div>
  );
}
