type Item = {
  delay?: 1 | 2 | 3;
  title: string;
  sub: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Patent-filed · Battery Passport",
    sub: "Inventor on a patented EV battery intelligence system, Suavy Technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Rank 1 · Summer Mentorship",
    sub: "Top performer in the EEESoc BIT Mesra summer mentorship program.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="9" r="6" />
        <path d="M8 14l-2 8 6-3 6 3-2-8" />
      </svg>
    ),
  },
  {
    delay: 2,
    title: "1st · E-Baja SAEINDIA Innovation",
    sub: "First place in the innovation event at E-Baja SAEINDIA 2025.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h18M12 3v18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    delay: 3,
    title: "2nd Runner-up · E-Baja Final",
    sub: "Team Aveon Racing — overall finals, SAEINDIA E-Baja 2025.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 21V11l5-3 5 3v10M3 21h18" />
      </svg>
    ),
  },
  {
    title: "GP Birla Scholarship",
    sub: "Awarded for academic excellence in MO-23 semester.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 14h4" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Excellence · IIT Guwahati",
    sub: "Certificate of Excellence in Summer Analytics + Time-Series Analysis, CAC IIT Guwahati.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

export default function Achievements() {
  return (
    <section className="wrap">
      <div className="sec-head reveal">
        <span className="sec-head__num">05 — Recognition</span>
        <h2 className="sec-head__title">
          Awards &amp; <em>milestones.</em>
        </h2>
        <span className="sec-head__rule" />
      </div>

      <div className="ach-grid">
        {items.map((it, i) => (
          <div
            key={i}
            className={`ach-card reveal${it.delay ? ` delay-${it.delay}` : ""}`}
          >
            <div className="ach-card__icon">{it.icon}</div>
            <div>
              <h4 className="ach-card__title">{it.title}</h4>
              <p className="ach-card__sub">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
