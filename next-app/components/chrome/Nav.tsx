"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", num: "01.", label: "About" },
  { href: "#skills", num: "02.", label: "Skills" },
  { href: "#experience", num: "03.", label: "Work" },
  { href: "#projects", num: "04.", label: "Projects" },
  { href: "#contact", num: "05.", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle the body class so the existing CSS animations for the burger
  // and the slide-in mobile menu keep working unchanged.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <a href="#top" className="nav__brand">
          <span className="dot" />
          SAURABH&nbsp;PANDEY
        </a>
        <nav>
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <span className="num">{l.num}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/Saurabh_Pandey_Resume_DataScience.pdf" download className="nav__cta">
          Resume ↓
        </a>
        <button
          className="nav__burger"
          id="burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className="mobile-menu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span className="num">{l.num}</span>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
