import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return <div>{loading ? <Loader /> : <Main />}</div>;
}
