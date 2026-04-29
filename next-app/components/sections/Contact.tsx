export default function Contact() {
  return (
    <section id="contact" className="wrap contact">
      <div className="reveal">
        <div className="contact__lbl">07 — Get in touch</div>
        <h2 className="contact__head">
          Let&apos;s <em>build something.</em>
        </h2>
        <p className="contact__sub">
          I&apos;m actively looking for full-time roles and meaningful internships in{" "}
          <strong style={{ color: "var(--text)" }}>
            data science, ML engineering and applied AI
          </strong>
          . Open to a coffee chat — or a coding sprint.
        </p>
        <a href="mailto:saurabhpandey59254@gmail.com" className="contact__email">
          saurabhpandey59254@gmail.com
          <span className="arrow">→</span>
        </a>

        <div className="contact__channels">
          <a href="https://github.com/saurabhpandey2108" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-pandey-552712256"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="tel:+919234825220">+91 92348 25220</a>
          <a href="/Saurabh_Pandey_Resume_DataScience.pdf" download>
            DS Resume ↓
          </a>
          <a href="/Saurabh_Pandey_Resume_Core_EEE.pdf" download>
            EEE Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}
