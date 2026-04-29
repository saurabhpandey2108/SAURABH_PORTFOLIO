export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__inner">
        <div className="hero__tag">
          <span className="pip" />
          Available for opportunities · 2026
        </div>

        <h1 className="hero__name">
          <span className="l1">Saurabh</span>
          <span className="l2">Pandey.</span>
        </h1>

        <div className="hero__role">
          <span>Electrical Engineer</span>
          <span className="sep">/</span>
          <span>Data Scientist</span>
          <span className="sep">/</span>
          <span>AI Builder</span>
        </div>

        <p className="hero__bio">
          I build at the intersection of <em>physics and machine learning</em> — systems
          where electrochemical models meet neural networks, where signal data becomes
          intelligence. Currently engineering a patented Battery Passport at Suavy
          Technologies and pursuing my B.Tech in EEE at BIT Mesra.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View Work <span className="arrow">→</span>
          </a>
          <a
            href="/Saurabh_Pandey_Resume_DataScience.pdf"
            download
            className="btn btn--ghost"
          >
            Download Résumé <span className="arrow">↓</span>
          </a>
        </div>
      </div>

      <div className="scroll-prompt">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
