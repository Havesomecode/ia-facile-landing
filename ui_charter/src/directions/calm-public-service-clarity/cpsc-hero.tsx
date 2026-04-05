import { iaFacileDemoContent } from '../../content/landingPageContent';

export function CpscHero() {
  return (
    <header className="cpsc-hero">
      <div className="cpsc-kicker">{iaFacileDemoContent.eyebrow}</div>
      <div className="cpsc-hero-grid">
        <div className="cpsc-hero-copy">
          <p className="cpsc-path">If AI feels distant, this direction makes the first step legible.</p>
          <h1>{iaFacileDemoContent.headline}</h1>
          <p className="cpsc-subheadline">{iaFacileDemoContent.subheadline}</p>
          <div className="cpsc-actions">
            <a className="cpsc-primary" href="#first-step">
              {iaFacileDemoContent.primaryCta}
            </a>
            <a className="cpsc-secondary" href="#trust">
              {iaFacileDemoContent.secondaryCta}
            </a>
          </div>
        </div>
        <aside className="cpsc-rail" aria-label="Direction summary">
          <p className="cpsc-rail-kicker">Direction</p>
          <h3>Public-service clarity</h3>
          <p>
            The page should feel like a calm, legible guide that tells the viewer exactly where they are and
            what to do next.
          </p>
          <dl className="cpsc-meta">
            <div>
              <dt>Archetype</dt>
              <dd>service-oriented information page</dd>
            </div>
            <div>
              <dt>Surface</dt>
              <dd>flat, ruled, minimal radius</dd>
            </div>
            <div>
              <dt>Tone</dt>
              <dd>sober, welcoming, practical</dd>
            </div>
          </dl>
        </aside>
      </div>
    </header>
  );
}
