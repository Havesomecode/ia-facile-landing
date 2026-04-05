import { iaFacileDemoContent } from '../../content/landingPageContent';
import { GuidanceCTA } from './GuidanceCTA';
import { GuidanceHero } from './GuidanceHero';
import { GuidancePathway } from './GuidancePathway';
import { GuidanceSection } from './GuidanceSection';
import './warm-modern-guidance.css';

export function WarmModernGuidancePage() {
  return (
    <main className="wmg-page">
      <div className="wmg-atmosphere wmg-atmosphere--left" aria-hidden="true" />
      <div className="wmg-atmosphere wmg-atmosphere--right" aria-hidden="true" />

      <div className="wmg-frame">
        <GuidanceHero content={iaFacileDemoContent} />

        <GuidanceSection
          tone="soft"
          eyebrow="Reassurance / positioning"
          title={iaFacileDemoContent.reassurance.title}
          body={iaFacileDemoContent.reassurance.body}
          points={iaFacileDemoContent.reassurance.supportingPoints}
        />

        <GuidancePathway
          title={iaFacileDemoContent.firstStep.title}
          body={iaFacileDemoContent.firstStep.body}
          points={iaFacileDemoContent.firstStep.supportingPoints}
        />

        <GuidanceSection
          id="trust"
          tone="contrast"
          eyebrow="Trust / differentiation"
          title={iaFacileDemoContent.trust.title}
          body={iaFacileDemoContent.trust.body}
          points={iaFacileDemoContent.trust.supportingPoints}
        />

        <GuidanceCTA
          title={iaFacileDemoContent.closingCta.title}
          body={iaFacileDemoContent.closingCta.body}
          points={iaFacileDemoContent.closingCta.supportingPoints}
        />
      </div>
    </main>
  );
}
