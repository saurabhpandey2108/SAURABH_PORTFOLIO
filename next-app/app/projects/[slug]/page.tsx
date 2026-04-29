import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/chrome/RevealOnScroll";
import SiteChrome from "@/components/chrome/SiteChrome";
import { getProjectBySlug, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects
    .filter((p) => !p.staticRoute)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project — Saurabh Pandey" };
  return {
    title: `${project.title} — Saurabh Pandey`,
    description: project.cardDesc,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.staticRoute) notFound();

  const stack = project.stack ?? project.tags;
  const body = project.caseDesc ?? project.cardDesc;

  return (
    <>
      <SiteChrome
        railLeft={`Saurabh.Pandey · Case Study · ${project.title}`}
        railRight={project.category}
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
            Case Study · {project.category}
          </span>
        </div>

        <article className="featured featured--full reveal">
          <div className="featured__inner">
            <div className="featured__body">
              <div className="featured__pill">{project.pill}</div>
              <h3 className="featured__title">{project.title}</h3>
              <p className="featured__desc">{body}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="featured__highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <strong>{h.strong}</strong> {h.body}
                    </li>
                  ))}
                </ul>
              )}

              <div className="fv2-footer">
                <div className="featured__stack">
                  {stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a
                  href={project.github}
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
