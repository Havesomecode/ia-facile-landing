import { iaFacileDemoContent } from '../../content/landingPageContent';

export function ReassuringEditorialHero() {
  return (
    <header className="re-hero">
      <p className="re-eyebrow">{iaFacileDemoContent.eyebrow}</p>
      <div className="re-hero__grid">
        <div className="re-hero__copy">
          <h1>{iaFacileDemoContent.headline}</h1>
          <p className="re-lead">{iaFacileDemoContent.subheadline}</p>
          <div className="re-actions" aria-label="Primary and secondary actions">
            <a className="re-button re-button--primary" href="#cta">
              {iaFacileDemoContent.primaryCta}
            </a>
            <a className="re-button re-button--secondary" href="#trust">
              {iaFacileDemoContent.secondaryCta}
            </a>
          </div>
        </div>
        <aside className="re-editorial-note" aria-label="Editorial note">
          <p className="re-editorial-note__label">Positioning</p>
          <p>
            IA Facile is framed here as a calm, adult guide rather than a software product or a generic
            beginner lesson.
          </p>
          <div className="re-rule" />
          <p className="re-editorial-note__meta">
            The design language stays close to editorial layout, with less containerization and more room
            for type to do the work.
          </p>
        </aside>
      </div>
    </header>
  );
}
