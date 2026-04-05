import { iaFacileDemoContent } from '../../content/landingPageContent';
import './reassuring-editorial.css';
import { ReassuringEditorialBand } from './ReassuringEditorialBand';
import { ReassuringEditorialHero } from './ReassuringEditorialHero';
import { ReassuringEditorialSignatureStrip } from './ReassuringEditorialSignatureStrip';

export function ReassuringEditorialPage() {
  return (
    <main className="re-page">
      <ReassuringEditorialHero />
      <ReassuringEditorialSignatureStrip />
      <ReassuringEditorialBand
        kicker="Reassurance / positioning"
        title={iaFacileDemoContent.reassurance.title}
        body={iaFacileDemoContent.reassurance.body}
        points={iaFacileDemoContent.reassurance.supportingPoints}
      />
      <ReassuringEditorialBand
        kicker="First step / everyday use"
        title={iaFacileDemoContent.firstStep.title}
        body={iaFacileDemoContent.firstStep.body}
        points={iaFacileDemoContent.firstStep.supportingPoints}
        align="right"
      />
      <ReassuringEditorialBand
        kicker="Trust / differentiation"
        id="trust"
        title={iaFacileDemoContent.trust.title}
        body={iaFacileDemoContent.trust.body}
        points={iaFacileDemoContent.trust.supportingPoints}
      />
      <section id="cta" className="re-cta">
        <p className="re-kicker">CTA</p>
        <div className="re-cta__grid">
          <div>
            <h2>{iaFacileDemoContent.closingCta.title}</h2>
            <p>{iaFacileDemoContent.closingCta.body}</p>
          </div>
          <div className="re-cta__actions">
            <a className="re-button re-button--primary" href="/">
              {iaFacileDemoContent.primaryCta}
            </a>
            <a className="re-button re-button--secondary" href="/">
              Explore another direction
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
