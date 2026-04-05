import type { LandingStoryContent } from '../../content/landingPageContent';

type GuidanceHeroProps = {
  content: LandingStoryContent;
};

export function GuidanceHero({ content }: GuidanceHeroProps) {
  return (
    <section className="wmg-hero">
      <div className="wmg-hero-main">
        <p className="wmg-eyebrow">{content.eyebrow}</p>
        <h1>{content.headline}</h1>
        <p className="wmg-lead">{content.subheadline}</p>
        <div className="wmg-hero-actions">
          <a className="wmg-button wmg-button--primary" href="#cta">
            {content.primaryCta}
          </a>
          <a className="wmg-button wmg-button--secondary" href="#trust">
            {content.secondaryCta}
          </a>
        </div>
      </div>

      <aside className="wmg-hero-aside" aria-label="direction summary">
        <p className="wmg-aside-kicker">Warm modern guidance</p>
        <p className="wmg-aside-title">A calm first step into AI, built for hesitant adults.</p>
        <p className="wmg-aside-copy">
          The layout uses gentle asymmetry, selective rounding, and warm contrast so the page feels
          encouraging without becoming cute or over-designed.
        </p>
        <div className="wmg-aside-strip">
          <span>clear</span>
          <span>warm</span>
          <span>adult</span>
          <span>guided</span>
        </div>
      </aside>
    </section>
  );
}
