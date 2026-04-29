export default function About() {
  return (
    <section id="about" className="wrap">
      <div className="sec-head reveal">
        <span className="sec-head__num">01 — Profile</span>
        <h2 className="sec-head__title">
          About <em>me.</em>
        </h2>
        <span className="sec-head__rule" />
      </div>

      <div className="about">
        <div className="about__main reveal delay-1">
          <p className="about__lede">
            An electrical engineering student whose center of gravity has shifted to{" "}
            <em>data science and AI</em> — comfortable in both circuit diagrams and
            Jupyter notebooks.
          </p>
          <div className="about__body">
            <p>
              I&apos;m a final-year B.Tech (EEE) at{" "}
              <strong style={{ color: "var(--text)" }}>
                Birla Institute of Technology, Mesra
              </strong>
              , holding a CGPA of 8.38. My core engineering training in power systems,
              EVs and PCB design now sits underneath everything I build in data — and
              that combination is where I do my most interesting work.
            </p>
            <p>
              Most recently I worked on a{" "}
              <strong style={{ color: "var(--text)" }}>patent-filed Battery Passport</strong>{" "}
              at Suavy Technologies, where neural networks, Particle Swarm Optimization
              and electrochemical modeling come together to estimate State of Charge and
              State of Health on-device, without labels. Before that I shipped a
              production RAG chatbot and a multimodal AI health assistant using FastAPI,
              LangGraph, and GPT-4o.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m leading{" "}
              <strong style={{ color: "var(--text)" }}>Team Aveon Racing</strong> as Vice
              Captain (we placed 2nd runner-up at E-Baja SAEINDIA 2025) and presiding
              over BIT Mesra&apos;s{" "}
              <strong style={{ color: "var(--text)" }}>EEE Society</strong> — running
              flagship events for 1,000+ students.
            </p>
          </div>
        </div>

        <div className="about__stats reveal delay-2">
          <div className="stat">
            <div className="stat__num">
              8.38<span className="unit">/10</span>
            </div>
            <div className="stat__lbl">
              CGPA
              <br />
              BIT Mesra · EEE
            </div>
          </div>
          <div className="stat">
            <div className="stat__num">
              02<span className="unit">×</span>
            </div>
            <div className="stat__lbl">
              AI/ML Internships
              <br />
              Industrial
            </div>
          </div>
          <div className="stat">
            <div className="stat__num">
              01<span className="unit">×</span>
            </div>
            <div className="stat__lbl">
              Patent-filed
              <br />
              Project
            </div>
          </div>
          <div className="stat">
            <div className="stat__num">
              15<span className="unit">+</span>
            </div>
            <div className="stat__lbl">
              Repositories
              <br />
              Shipped
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
