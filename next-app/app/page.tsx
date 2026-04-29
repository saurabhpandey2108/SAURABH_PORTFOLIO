import Nav from "@/components/chrome/Nav";
import RevealOnScroll from "@/components/chrome/RevealOnScroll";
import SiteChrome from "@/components/chrome/SiteChrome";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <SiteChrome
        railLeft="Saurabh.Pandey · BIT Mesra · 2022 — Present"
        railRight="Engineer · Data Scientist · Builder"
      />

      <Nav />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <footer>
        <span>© 2026 · Saurabh Pandey</span>
        <span className="live">System online · Ranchi, IN</span>
        <span>Built with Three.js + a lot of caffeine</span>
      </footer>

      <RevealOnScroll />
    </>
  );
}
