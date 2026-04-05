import { iaFacileDemoContent } from '../../content/landingPageContent';
import { CpscHero } from './cpsc-hero';
import { CpscSection } from './cpsc-section';
import { CpscVisualAid } from './cpsc-visual-aid';
import './calm-public-service-clarity.css';

export function CalmPublicServiceClarityPage() {
  return (
    <main className="cpsc-page">
      <CpscHero />
      <CpscSection label="Reassurance" section={iaFacileDemoContent.reassurance} />
      <section className="cpsc-band" id="first-step">
        <CpscSection label="First step" section={iaFacileDemoContent.firstStep} />
        <CpscVisualAid />
      </section>
      <section className="cpsc-trust" id="trust">
        <CpscSection label="Trust" section={iaFacileDemoContent.trust} />
      </section>
      <footer className="cpsc-footer">
        <CpscSection label="CTA" section={iaFacileDemoContent.closingCta} />
      </footer>
    </main>
  );
}
