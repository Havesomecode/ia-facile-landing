type GuidancePathwayProps = {
  title: string;
  body: string;
  points?: string[];
};

export function GuidancePathway({ title, body, points }: GuidancePathwayProps) {
  return (
    <section className="wmg-pathway">
      <div className="wmg-pathway-heading">
        <p className="wmg-eyebrow">First step</p>
        <h2>{title}</h2>
      </div>

      <div className="wmg-pathway-grid">
        <div className="wmg-pathway-lead">
          <p>{body}</p>
        </div>

        <ol className="wmg-steps">
          {points?.map((point, index) => (
            <li key={point}>
              <span className="wmg-step-index">0{index + 1}</span>
              <p>{point}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
