export type ProjectHighlight = {
  strong: string;
  body: string;
};

export type Project = {
  slug: string;
  delay?: 1 | 2 | 3;
  category: string;
  pill: string;
  title: string;
  /** Short blurb shown on the home-page card. */
  cardDesc: string;
  /** Longer body for the case-study page. Falls back to cardDesc if omitted. */
  caseDesc?: string;
  /** Bulleted highlights on the case-study page. */
  highlights?: ProjectHighlight[];
  /** Tags shown under the home-page card. */
  tags: string[];
  /** Tech stack on the case-study page. Falls back to tags. */
  stack?: string[];
  github: string;
  /**
   * Static-route override. When set, the home-page card and any other link
   * point at this URL instead of /projects/<slug>, and the dynamic [slug]
   * route will skip generating this slug (since a hand-coded page exists).
   */
  staticRoute?: string;
};

export const projects: Project[] = [
  {
    slug: "safespace",
    category: "Multimodal · LLM Agent",
    pill: "Project · Multimodal LLM Agent",
    title: "SAFESPACE — AI Health Assistant",
    cardDesc:
      "A LangGraph-driven agent powered by GPT-4o (with GROQ fallback) for multimodal therapeutic interactions — text, image and voice. Includes Whisper STT, GPT-4 Vision, ElevenLabs TTS, FAISS-RAG knowledge retrieval, and a Twilio-based emergency escalation pipeline with risk scoring.",
    highlights: [
      {
        strong: "Multimodal by design.",
        body: "Text, image, and voice all flow through the same LangGraph agent — Whisper for STT, GPT-4 Vision for image understanding, ElevenLabs for TTS, with GPT-4o orchestrating across modalities.",
      },
      {
        strong: "Provider fallback.",
        body: "GROQ acts as a fallback for GPT-4o so the agent stays responsive when the primary provider is throttled or down.",
      },
      {
        strong: "FAISS-backed retrieval.",
        body: "Therapeutic knowledge base is indexed with FAISS so the agent can ground its responses in vetted material rather than free-association.",
      },
      {
        strong: "Risk-scored emergency escalation.",
        body: "A Twilio-driven escalation path triggers when the risk score crosses a threshold, so a real human gets paged for the conversations that need one.",
      },
    ],
    tags: ["FastAPI", "LangGraph", "GPT-4o", "Whisper", "FAISS", "Twilio"],
    github: "https://github.com/saurabhpandey2108/Healthcare-Assistant",
  },
  {
    slug: "seo-content-generator",
    delay: 1,
    category: "LLM · RAG · Content",
    pill: "Project · LLM · RAG · Content",
    title: "SEO Content Generator",
    cardDesc:
      "Streamlit + FastAPI app that ingests a brand's URL, brochure or social links and produces SEO-optimized captions, posts and full content calendars for Instagram, Facebook and LinkedIn. RAG-backed via FAISS, with feedback-driven regeneration.",
    highlights: [
      {
        strong: "Brand context ingestion.",
        body: "Accepts a URL, a brochure PDF, or social links — the same RAG-backed pipeline turns each input shape into a brand-voice corpus that grounds every generation.",
      },
      {
        strong: "Cross-platform output.",
        body: "One brief produces SEO-optimized captions, posts, and full content calendars for Instagram, Facebook, and LinkedIn — each shaped to the platform's conventions.",
      },
      {
        strong: "Feedback-driven regeneration.",
        body: "User feedback on a draft loops back into the prompt context, so the next regeneration tightens against what was rejected without losing the brand voice.",
      },
    ],
    tags: ["OpenAI", "FAISS", "FastAPI", "Streamlit", "Render"],
    github: "https://github.com/saurabhpandey2108/Content-Generator",
  },
  {
    slug: "holiday-package-predictor",
    delay: 2,
    category: "Classical ML",
    pill: "Project · Classical ML",
    title: "Holiday Package Predictor",
    cardDesc:
      "End-to-end classification model for predicting holiday-package purchases, served through a Flask interface. Strong focus on EDA, feature engineering and customer-targeting logic — a data-driven alternative to scattershot marketing.",
    highlights: [
      {
        strong: "EDA-first.",
        body: "Substantial exploratory analysis precedes any modelling — the feature set is informed by the patterns that actually separate buyers from non-buyers, not a default dump of every column.",
      },
      {
        strong: "Targeting over scattershot.",
        body: "The output is a propensity score per customer, so marketing spend can be concentrated on the segment most likely to convert instead of broadcast across the whole list.",
      },
      {
        strong: "Flask-served.",
        body: "Wrapped behind a Flask interface so non-technical stakeholders can score new records without touching a notebook.",
      },
    ],
    tags: ["scikit-learn", "Flask", "EDA", "Feature Eng."],
    github: "https://github.com/saurabhpandey2108/Holiday-Package-Prediction",
  },
  {
    slug: "ann-churn-classifier",
    delay: 3,
    category: "Deep Learning · ANN",
    pill: "Project · Deep Learning · ANN",
    title: "ANN Customer-Churn Classifier",
    cardDesc:
      "A feed-forward neural network for predicting customer churn from a banking dataset. Implements the full pipeline — encoding, scaling, model design, evaluation — and surfaces the most impactful features driving attrition.",
    highlights: [
      {
        strong: "Full pipeline ownership.",
        body: "Encoding of categoricals, scaling of numerics, model architecture, training loop, and evaluation all live in one project — no hidden notebook steps.",
      },
      {
        strong: "Feature attribution.",
        body: "Beyond the headline accuracy, the project surfaces which features push the most churn signal, so the bank gets actionable levers and not just a black-box prediction.",
      },
    ],
    tags: ["TensorFlow", "Keras", "Pandas", "Jupyter"],
    github: "https://github.com/saurabhpandey2108/ANN-Classification-Churn",
  },
  {
    slug: "student-performance",
    category: "Data Analysis · Education",
    pill: "Project · Data Analysis · Education",
    title: "Student Performance Analytics",
    cardDesc:
      "Exploratory analysis and predictive modeling on student performance data, surfacing the demographic, study-habit and socio-economic features that most strongly correlate with academic outcomes.",
    highlights: [
      {
        strong: "Three lenses on outcomes.",
        body: "Demographic, study-habit, and socio-economic features are evaluated separately and jointly — so the analysis can say which signal is doing the work, not just that the combined model fits.",
      },
      {
        strong: "Analysis-led.",
        body: "Modelling is in service of explanation, not the other way around — the goal is to produce findings an educator can act on, with the model serving as evidence.",
      },
    ],
    tags: ["Pandas", "Seaborn", "scikit-learn", "EDA"],
    github: "https://github.com/saurabhpandey2108/Student-Performance",
  },
  {
    slug: "network-security",
    delay: 1,
    category: "ML · Security",
    pill: "Project · MLOps · Phishing Detection",
    title: "Network Security Classifier",
    cardDesc:
      "ML pipeline for classifying network traffic and identifying potentially malicious patterns — built as an end-to-end project with structured logging, model artifacts and modular Python packaging.",
    tags: ["Python", "scikit-learn", "MLOps"],
    github: "https://github.com/saurabhpandey2108/Network-Security",
    staticRoute: "/projects/network-security",
  },
  {
    slug: "ebaja-electric-atv",
    delay: 2,
    category: "Embedded · Hardware",
    pill: "Project · Embedded · Hardware",
    title: "EBAJA Lifesize Electric ATV",
    cardDesc:
      "Designed and fabricated the full electrical architecture for a SAEINDIA E-Baja vehicle — 48V tractive + 12V auxiliary, custom PCBs, Atmega328P-driven safety logic, kill-switch, motor-controller integration, and Wi-Fi telemetry between sender / receiver units.",
    highlights: [
      {
        strong: "Two voltage domains.",
        body: "48V tractive carries the propulsion load; a separate 12V auxiliary rail powers logic and instrumentation — isolated so a tractive fault can't cascade into the safety path.",
      },
      {
        strong: "Custom centralized PCB.",
        body: "Atmega328P-driven safety logic, motor-controller integration, and the kill-switch all sit on a single in-house board — no breadboard wiring on the vehicle.",
      },
      {
        strong: "Wi-Fi telemetry.",
        body: "Sender/receiver units exchange real-time vehicle state over Wi-Fi, so pit-side monitoring isn't dependent on running back to the car after every lap.",
      },
    ],
    tags: ["Atmega328P", "Eagle", "PCB", "BMS", "48V"],
    github: "https://github.com/saurabhpandey2108",
  },
];

export const projectSlugs = projects
  .filter((p) => !p.staticRoute)
  .map((p) => p.slug);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
