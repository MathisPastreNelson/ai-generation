import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Loader from "../components/Loader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div>{loaded ? <Main /> : <Loader />}</div>;
}
