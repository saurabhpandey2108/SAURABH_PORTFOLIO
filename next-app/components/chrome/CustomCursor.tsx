"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    loop();

    // Hover targets — bind once on mount and re-scan on a small delay so any
    // late-mounting elements (Suspense, transitions) get bound.
    const bindHovers = () => {
      const nodes = document.querySelectorAll<HTMLElement>(
        "a, button, .skill-card, .proj-card, .ach-card, .stat, .featured"
      );
      nodes.forEach((el) => {
        if ((el as HTMLElement & { _curBound?: boolean })._curBound) return;
        (el as HTMLElement & { _curBound?: boolean })._curBound = true;
        el.addEventListener("mouseenter", () => ring.classList.add("hover"));
        el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
      });
    };
    bindHovers();
    const t = setTimeout(bindHovers, 100);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" id="cursorDot" ref={dotRef} />
      <div className="cursor-ring" id="cursorRing" ref={ringRef} />
    </>
  );
}
