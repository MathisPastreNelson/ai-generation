import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayed(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loading && delayed) {
      setLoading(false);
    }
  }, [loading, delayed]);

  return <div>{loading ? <Loader /> : <Main />}</div>;
}
