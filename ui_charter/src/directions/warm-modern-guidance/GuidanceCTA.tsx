type GuidanceCTAProps = {
  title: string;
  body: string;
  points?: string[];
};

export function GuidanceCTA({ title, body, points }: GuidanceCTAProps) {
  return (
    <section className="wmg-cta" id="cta">
      <div>
        <p className="wmg-eyebrow">CTA</p>
        <h2>{title}</h2>
        <p className="wmg-body">{body}</p>
      </div>

      <div className="wmg-cta-panel">
        <p className="wmg-cta-panel-title">What this lab is testing</p>
        <ul className="wmg-points">
          {points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
