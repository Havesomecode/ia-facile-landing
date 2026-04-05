import type { LandingStorySection } from '../../content/landingPageContent';

type CpscSectionProps = {
  label: string;
  section: LandingStorySection;
};

export function CpscSection({ label, section }: CpscSectionProps) {
  return (
    <section className="cpsc-section">
      <div className="cpsc-section-label">{label}</div>
      <div className="cpsc-section-body">
        <h2>{section.title}</h2>
        <p>{section.body}</p>
        {section.supportingPoints ? (
          <ul className="cpsc-list">
            {section.supportingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
