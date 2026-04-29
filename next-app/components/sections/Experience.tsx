export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <div className="sec-head reveal">
        <span className="sec-head__num">03 — Career</span>
        <h2 className="sec-head__title">
          Where I&apos;ve <em>worked.</em>
        </h2>
        <span className="sec-head__rule" />
      </div>

      <div className="timeline">
        <article className="tl-item reveal">
          <div className="tl-item__date">May 2025 — July 2025</div>
          <h3 className="tl-item__role">Project Intern</h3>
          <div className="tl-item__company">
            Suavy Technologies <span className="arrow">→</span> Battery Intelligence R&amp;D
          </div>
          <ul className="tl-item__list">
            <li>
              Engineered a <strong>patented Battery Passport</strong> system integrating
              neural networks, Particle Swarm Optimization (PSO) and electrochemical
              modeling for accurate, on-device <strong>SoC / SoH estimation</strong>.
            </li>
            <li>
              Built a hybrid AI + optimization pipeline that estimates{" "}
              <strong>8 critical ECM parameters</strong> (C1, C2, R0, R1, R2, η, M0, M)
              from raw sensor data, fusing ANN prediction with PSO refinement.
            </li>
            <li>
              Designed a{" "}
              <strong>physics-informed equivalent circuit model</strong> (ECM) whose
              outputs are sealed inside a Battery Passport for lifecycle tracking,
              safety enforcement and warranty.
            </li>
          </ul>
          <div className="tl-item__chips">
            <span>PyTorch</span>
            <span>PSO</span>
            <span>Electrochemistry</span>
            <span>Patent-Filed</span>
          </div>
        </article>

        <article className="tl-item reveal delay-1">
          <div className="tl-item__date">May 2025 — July 2025</div>
          <h3 className="tl-item__role">Generative-AI Intern</h3>
          <div className="tl-item__company">
            Productimate AI Solutions <span className="arrow">→</span> LLM Product
          </div>
          <ul className="tl-item__list">
            <li>
              Built an AI-powered <strong>RAG Chatbot</strong> on{" "}
              <strong>FastAPI + Streamlit</strong> for document QA across PDFs, HTML and
              live URLs.
            </li>
            <li>
              Engineered a Streamlit web app (FastAPI backend on Render) with OpenAI
              APIs and a <strong>FAISS-powered RAG pipeline</strong> that auto-generates
              SEO-optimized social posts, captions and content calendars for Instagram /
              Facebook / LinkedIn from a brand&apos;s URL or brochure.
            </li>
            <li>
              Designed a dynamic feedback loop for real-time content regeneration,
              strategy planning and performance tracking — closing the loop on iterative
              AI content quality.
            </li>
          </ul>
          <div className="tl-item__chips">
            <span>FastAPI</span>
            <span>OpenAI</span>
            <span>FAISS</span>
            <span>Streamlit</span>
            <span>Render</span>
          </div>
        </article>
      </div>
    </section>
  );
}
