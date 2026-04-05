type ReassuringEditorialBandProps = {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  points?: string[];
  align?: 'left' | 'right';
};

export function ReassuringEditorialBand({
  id,
  kicker,
  title,
  body,
  points,
  align = 'left',
}: ReassuringEditorialBandProps) {
  return (
    <section id={id} className={`re-band ${align === 'right' ? 're-band--right' : ''}`}>
      <p className="re-kicker">{kicker}</p>
      <div className="re-band__content">
        <div className="re-band__heading">
          <h2>{title}</h2>
        </div>
        <div className="re-band__body">
          <p>{body}</p>
          {points ? (
            <ul className="re-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
