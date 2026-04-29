import Link from "next/link";
import { projects } from "@/lib/projects";

const arrowSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <div className="sec-head reveal">
        <span className="sec-head__num">04 — Selected Work</span>
        <h2 className="sec-head__title">
          Things I&apos;ve <em>built.</em>
        </h2>
        <span className="sec-head__rule" />
      </div>

      {/* FEATURED */}
      <article className="featured featured--full reveal">
        <div className="featured__inner">
          <div className="featured__body">
            <div className="featured__pill">Featured · ISC Fault Detector · NCM811</div>
            <h3 className="featured__title">
              Battery Passport <em> · Battery Fault Detection</em>
            </h3>
            <p className="featured__desc">
              End-to-end internal short-circuit (ISC) detector for the Tsinghua NCM811
              dataset, built on one hard architectural rule:{" "}
              <strong style={{ color: "var(--text)" }}>
                voltage never enters the model&apos;s input
              </strong>
              . A physics-informed network is trained only on healthy cells, then frozen
              — on a faulty cell it keeps predicting the healthy voltage trajectory, and
              the residual carries the ISC signature into a wavelet-CNN classifier.
            </p>

            <div className="pipeline">
              <div className="pipe-stage">
                <div className="pipe-stage__num">01</div>
                <div className="pipe-stage__name">PINN</div>
                <div className="pipe-stage__desc">
                  Pure-NumPy MLP — 35 leakage-free current-only features map to 8 ECM
                  parameters. Trained on healthy cells only, then frozen.
                </div>
                <div className="pipe-stage__io">
                  <span>
                    I, dI/dt, SOC<sub>cb</sub>
                  </span>
                  <span className="arrow">→</span>
                  <span>
                    V<sub>pred</sub>(t)
                  </span>
                </div>
              </div>
              <div className="pipe-arrow">→</div>
              <div className="pipe-stage">
                <div className="pipe-stage__num">02</div>
                <div className="pipe-stage__name">CWT</div>
                <div className="pipe-stage__desc">
                  Morlet wavelet transform on three signals per 1280-sample window: V
                  <sub>meas</sub>, V<sub>pred</sub>, and the residual e(t).
                </div>
                <div className="pipe-stage__io">
                  <span>
                    V<sub>meas</sub>, V<sub>pred</sub>, e(t)
                  </span>
                  <span className="arrow">→</span>
                  <span>(224, 224, 3)</span>
                </div>
              </div>
              <div className="pipe-arrow">→</div>
              <div className="pipe-stage">
                <div className="pipe-stage__num">03</div>
                <div className="pipe-stage__name">CNN</div>
                <div className="pipe-stage__desc">
                  Binary classifier on the three-scalogram stack. Stratified 70 / 15 /
                  15 file-level split — windows from one file never straddle splits.
                </div>
                <div className="pipe-stage__io">
                  <span>3-scalogram stack</span>
                  <span className="arrow">→</span>
                  <span>BD vs CS</span>
                </div>
              </div>
            </div>

            <div className="fv2-stats">
              <div className="fv2-stat">
                <div className="num">14</div>
                <div className="lbl">BD/CS pairs</div>
              </div>
              <div className="fv2-stat">
                <div className="num">35</div>
                <div className="lbl">Leakage-free features</div>
              </div>
              <div className="fv2-stat">
                <div className="num">8</div>
                <div className="lbl">ECM parameters</div>
              </div>
              <div className="fv2-stat">
                <div className="num">96</div>
                <div className="lbl">Wavelet scales</div>
              </div>
            </div>

            <ul className="featured__highlights">
              <li>
                <strong>Leakage-free by construction.</strong> No voltage of any kind —
                V<sub>meas</sub>, OCV(SOC), dV/dt — ever enters the PINN feature vector.
                The ISC current bypasses the ammeter, so the residual is the only place
                the fault can survive.
              </li>
              <li>
                <strong>Healthy-only training, frozen at inference.</strong> The PINN is
                trained on BD files only. On a CS file it still predicts the healthy
                voltage trajectory; <code>V_meas</code> carries the ISC signature, and
                the residual concentrates the disagreement.
              </li>
              <li>
                <strong>Per-channel detrend is the diagnostic.</strong> Cubic detrend is
                right for V<sub>meas</sub> / V<sub>pred</sub> but destroys the slow ISC
                drift in the residual — collapsing classification to BCE&nbsp;0.69.
                Mean-only detrend on the residual preserves the signal.
              </li>
              <li>
                <strong>Drift-aware acceptance gate.</strong> Before the classifier ever
                runs, a verification step requires &ge;&nbsp;100&nbsp;mV&nbsp;/&nbsp;unit-SOC
                drift slope, &ge;&nbsp;10&nbsp;mV smoothed-mean gap, and
                &ge;&nbsp;30&nbsp;pp internal-drain gap on representative files. Voltage
                leak &rArr; gate fails.
              </li>
            </ul>

            <div className="fv2-footer">
              <div className="featured__stack">
                <span>Python</span>
                <span>NumPy</span>
                <span>TensorFlow</span>
                <span>SciPy</span>
                <span>Wavelet</span>
                <span>PINN</span>
                <span>NCM811</span>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/projects/battery-fault-detection"
                  className="btn btn--primary"
                >
                  Read case study <span className="arrow">→</span>
                </Link>
                <a
                  href="https://github.com/saurabhpandey2108/Battery_Fault_Detection"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  View Repository <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* PROJECT GRID */}
      <div className="proj-grid">
        {projects.map((p) => {
          const caseHref = p.staticRoute ?? `/projects/${p.slug}`;
          return (
            <article
              key={p.slug}
              className={`proj-card proj-card--has-case reveal${
                p.delay ? ` delay-${p.delay}` : ""
              }`}
            >
              <Link
                href={caseHref}
                className="proj-card__cover"
                aria-label={`Read full case study: ${p.title}`}
              />
              <header className="proj-card__head">
                <span className="proj-card__cat">{p.category}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-card__link"
                  aria-label="GitHub"
                >
                  {arrowSvg}
                </a>
              </header>
              <h3 className="proj-card__title">{p.title}</h3>
              <p className="proj-card__desc">{p.cardDesc}</p>
              <div className="proj-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="proj-card__cta">
                Read case study <span className="arrow">→</span>
              </div>
            </article>
          );
        })}

        {/* External catch-all — not a project page */}
        <article className="proj-card reveal delay-3">
          <header className="proj-card__head">
            <span className="proj-card__cat">All Repos</span>
            <a
              href="https://github.com/saurabhpandey2108"
              target="_blank"
              rel="noreferrer"
              className="proj-card__link"
              aria-label="GitHub"
            >
              {arrowSvg}
            </a>
          </header>
          <h3 className="proj-card__title">26 + Repositories on GitHub</h3>
          <p className="proj-card__desc">
            The full archive — experiments, course work, hardware notes and AI tooling.
            From time-series analysis pieces to LLM tool-builds, everything I&apos;ve
            shipped in public.
          </p>
          <div className="proj-card__tags">
            <span>Python</span>
            <span>Jupyter</span>
            <span>OSS</span>
          </div>
        </article>
      </div>
    </section>
  );
}
