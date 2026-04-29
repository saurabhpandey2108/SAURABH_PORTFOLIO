"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader${gone ? " gone" : ""}`} id="loader">
      <div className="loader__inner">
        <div className="loader__brand">Initializing system</div>
        <div className="loader__bar" />
      </div>
    </div>
  );
}
