import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/chrome/RevealOnScroll";
import SiteChrome from "@/components/chrome/SiteChrome";

export const metadata: Metadata = {
  title: "Network Security Classifier — Saurabh Pandey",
  description:
    "Network Security Classifier — production-grade phishing-URL detector with full MLOps pipeline. By Saurabh Pandey.",
};

export default function NetworkSecurityPage() {
  return (
    <>
      <SiteChrome
        railLeft="Saurabh.Pandey · Case Study · Network Security"
        railRight="06 — Production MLOps · Phishing Detection"
      />

      <header className="nav nav--detail" id="nav">
        <Link href="/#top" className="nav__brand">
          <span className="dot" />
          SAURABH&nbsp;PANDEY
        </Link>
        <Link href="/#projects" className="nav__cta">
          ← Back to projects
        </Link>
      </header>

      <main id="top" className="detail-main">
        <div className="detail-eyebrow">
          <Link href="/#projects" className="detail-eyebrow__back">
            ← Projects
          </Link>
          <span className="detail-eyebrow__crumb">
            Case Study · 01 / Network Security
          </span>
        </div>

        <article className="featured featured--full reveal">
          <div className="featured__inner">
            <div className="featured__body">
              <div className="featured__pill">Project · MLOps · Phishing Detection</div>
              <h3 className="featured__title">
                Network Security Classifier
                <em> · phishing detection, end&#8209;to&#8209;end MLOps</em>
              </h3>
              <p className="featured__desc">
                A production-grade phishing-URL classifier wrapped in a real MLOps
                pipeline. A modular Python package owns ingestion, schema validation,
                KNN-imputed feature transforms, and a five-model GridSearchCV bake-off;{" "}
                <strong style={{ color: "var(--text)" }}>MLflow + DagsHub</strong> logs
                every run; <strong style={{ color: "var(--text)" }}>FastAPI</strong>{" "}
                serves <code>/train</code> and <code>/predict</code>; and{" "}
                <strong style={{ color: "var(--text)" }}>
                  Docker → AWS ECR → EC2
                </strong>{" "}
                deployment fires automatically from GitHub Actions on every push to{" "}
                <code>main</code>.
              </p>

              <div className="pipeline pipeline--4">
                <div className="pipe-stage">
                  <div className="pipe-stage__num">01</div>
                  <div className="pipe-stage__name">Ingest</div>
                  <div className="pipe-stage__desc">
                    CSV is pushed into MongoDB (<code>push_data.py</code>) and pulled
                    back through a schema-aware loader. Stratified train/test split
                    written to disk for downstream stages.
                  </div>
                  <div className="pipe-stage__io">
                    <span>raw CSV</span>
                    <span className="arrow">→</span>
                    <span>train.csv, test.csv</span>
                  </div>
                </div>
                <div className="pipe-arrow">→</div>
                <div className="pipe-stage">
                  <div className="pipe-stage__num">02</div>
                  <div className="pipe-stage__name">Validate</div>
                  <div className="pipe-stage__desc">
                    Schema-driven validator confirms column count and types against{" "}
                    <code>data_schema/schema.yaml</code>, then runs a KS-style drift
                    check between train and test before training is allowed to proceed.
                  </div>
                  <div className="pipe-stage__io">
                    <span>train, test</span>
                    <span className="arrow">→</span>
                    <span>valid_data/</span>
                  </div>
                </div>
                <div className="pipe-arrow">→</div>
                <div className="pipe-stage">
                  <div className="pipe-stage__num">03</div>
                  <div className="pipe-stage__name">Transform</div>
                  <div className="pipe-stage__desc">
                    KNNImputer wrapped in a scikit-learn <code>Pipeline</code>. Target
                    labels remapped from {"{−1, 1}"} to {"{0, 1}"}. The fitted
                    preprocessor is pickled and reused unchanged at inference.
                  </div>
                  <div className="pipe-stage__io">
                    <span>features</span>
                    <span className="arrow">→</span>
                    <span>preprocessor.pkl</span>
                  </div>
                </div>
                <div className="pipe-arrow">→</div>
                <div className="pipe-stage">
                  <div className="pipe-stage__num">04</div>
                  <div className="pipe-stage__name">Train</div>
                  <div className="pipe-stage__desc">
                    Five classifiers compete under GridSearchCV — Random Forest,
                    Gradient Boosting, AdaBoost, Decision Tree, Logistic Regression.
                    The winning model on F1 is logged + registered in MLflow.
                  </div>
                  <div className="pipe-stage__io">
                    <span>X_train</span>
                    <span className="arrow">→</span>
                    <span>model.pkl</span>
                  </div>
                </div>
              </div>

              <div className="fv2-stats">
                <div className="fv2-stat">
                  <div className="num">30</div>
                  <div className="lbl">Phishing features</div>
                </div>
                <div className="fv2-stat">
                  <div className="num">5</div>
                  <div className="lbl">Candidate models</div>
                </div>
                <div className="fv2-stat">
                  <div className="num">F1</div>
                  <div className="lbl">Selection metric</div>
                </div>
                <div className="fv2-stat">
                  <div className="num">CI/CD</div>
                  <div className="lbl">GitHub Actions → ECR</div>
                </div>
              </div>

              <div className="featured__params">
                <div className="lbl">
                  30-feature phishing schema · grouped by signal class
                </div>
                <div className="params">
                  {[
                    "URL_Length",
                    "having_At_Symbol",
                    "Prefix_Suffix",
                    "having_IP_Address",
                    "Shortining_Service",
                    "double_slash_redirecting",
                    "SSLfinal_State",
                    "HTTPS_token",
                    "Domain_registeration_length",
                    "DNSRecord",
                    "age_of_domain",
                    "Favicon",
                    "port",
                    "Request_URL",
                    "URL_of_Anchor",
                    "Links_in_tags",
                    "SFH",
                    "Submitting_to_email",
                    "Iframe",
                    "on_mouseover",
                    "RightClick",
                    "popUpWidnow",
                    "Redirect",
                    "Abnormal_URL",
                    "web_traffic",
                    "Page_Rank",
                    "Google_Index",
                    "Links_pointing_to_page",
                    "Statistical_report",
                    "having_Sub_Domain",
                  ].map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>

              <ul className="featured__highlights">
                <li>
                  <strong>30-feature phishing schema as the contract.</strong> Lexical (
                  <code>URL_Length</code>, <code>Prefix_Suffix</code>,{" "}
                  <code>having_At_Symbol</code>), infrastructure (
                  <code>SSLfinal_State</code>, <code>Domain_registeration_length</code>,{" "}
                  <code>HTTPS_token</code>), and behavioural (<code>web_traffic</code>,{" "}
                  <code>Page_Rank</code>, <code>Google_Index</code>) signals. The schema
                  lives once in <code>data_schema/schema.yaml</code> and is enforced at
                  validation time so a column drift never silently reaches the model.
                </li>
                <li>
                  <strong>KNN imputation, not mean.</strong> Phishing features are
                  heavy-tailed and binary-coded. KNNImputer preserves the correlation
                  between, e.g., <code>SSLfinal_State</code> and{" "}
                  <code>HTTPS_token</code> that mean-imputation would flatten — the
                  joint structure is exactly what discriminates phishing from legitimate
                  URLs.
                </li>
                <li>
                  <strong>Model bake-off, not a hand-picked classifier.</strong> Random
                  Forest, Decision Tree, Gradient Boosting, AdaBoost, and Logistic
                  Regression each get their own GridSearchCV parameter grid. Selection
                  is on F1 (primary), with precision and recall logged for context. The
                  winner is registered as <code>Network_Model</code> in MLflow.
                </li>
                <li>
                  <strong>MLflow + DagsHub experiment tracking.</strong> Every run logs
                  F1, precision, and recall against a DagsHub-backed tracking URI — so
                  the experiment history, parameter sweeps, and registered model all
                  show up in the DagsHub UI without any extra infrastructure.
                </li>
                <li>
                  <strong>FastAPI inference service.</strong> <code>/train</code> kicks
                  off the pipeline end-to-end. <code>/predict</code> accepts a CSV
                  upload, applies the pickled preprocessor and model, writes{" "}
                  <code>prediction_output/output.csv</code>, and renders results inline
                  as an HTML table — so the same artefact is ready for an analyst and an
                  automated client.
                </li>
                <li>
                  <strong>Production deployment, automated.</strong> Dockerized, pushed
                  to AWS ECR, and pulled onto EC2 via GitHub Actions on every push to{" "}
                  <code>main</code>. AWS S3 sync mirrors the latest preprocessor and
                  model so any restarted container lands with the latest artefacts.
                </li>
              </ul>

              <div className="fv2-footer">
                <div className="featured__stack">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>scikit-learn</span>
                  <span>MongoDB</span>
                  <span>MLflow</span>
                  <span>DagsHub</span>
                  <span>Docker</span>
                  <span>AWS ECR</span>
                  <span>AWS EC2</span>
                  <span>AWS S3</span>
                  <span>GitHub Actions</span>
                </div>
                <a
                  href="https://github.com/saurabhpandey2108/Network-Security"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  View Repository <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer>
        <span>© 2026 · Saurabh Pandey</span>
        <span className="live">System online · Ranchi, IN</span>
        <Link href="/#top">↑ Back to top</Link>
      </footer>

      <RevealOnScroll />
    </>
  );
}
