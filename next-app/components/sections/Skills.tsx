type Skill = {
  delay?: 1 | 2 | 3;
  title: string;
  sub: string;
  items: string[];
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    title: "Machine Learning",
    sub: "Models · Pipelines · Deployment",
    items: ["scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "Feature Eng."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66 4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66 4.24-4.24" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Deep Learning & AI",
    sub: "Neural Nets · NLP · RL",
    items: [
      "ANN / CNN / RNN",
      "Transformers",
      "Reinforcement Learning",
      "Gymnasium",
      "NLP",
      "Computer Vision",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <circle cx="12" cy="19" r="2.5" />
        <path d="M12 7.5v9M7.5 12h9M7 7l3 3M14 7l-3 3M7 17l3-3M14 17l-3-3" />
      </svg>
    ),
  },
  {
    delay: 2,
    title: "Generative AI",
    sub: "LLMs · RAG · Agents",
    items: ["OpenAI / GPT-4o", "GROQ", "LangChain", "LangGraph", "FAISS", "RAG Pipelines"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12c4-8 14-8 18 0M3 12c4 8 14 8 18 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    delay: 3,
    title: "Data & Backend",
    sub: "Storage · APIs · Pipelines",
    items: ["Python", "SQL", "MySQL", "FastAPI", "Streamlit", "Pandas / NumPy"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 10h10M7 14h7M7 18h4" />
      </svg>
    ),
  },
  {
    title: "Power & Hardware",
    sub: "EE Foundations",
    items: [
      "PCB Design",
      "Eagle",
      "MATLAB / Simulink",
      "Arduino",
      "Atmega328P",
      "Power Systems",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16M9 4v16" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Foundations",
    sub: "CS · Soft Skills",
    items: ["DBMS", "OOP", "Git / GitHub", "Leadership", "Public Speaking", "Team Mgmt."],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <div className="sec-head reveal">
        <span className="sec-head__num">02 — Stack</span>
        <h2 className="sec-head__title">
          Skills &amp; <em>tools.</em>
        </h2>
        <span className="sec-head__rule" />
      </div>

      <div className="skill-grid">
        {skills.map((s, i) => (
          <div
            key={i}
            className={`skill-card reveal${s.delay ? ` delay-${s.delay}` : ""}`}
          >
            <div className="skill-card__icon">{s.icon}</div>
            <h3 className="skill-card__title">{s.title}</h3>
            <div className="skill-card__sub">{s.sub}</div>
            <ul className="skill-card__list">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
