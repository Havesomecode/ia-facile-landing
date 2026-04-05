import type { ReactNode } from 'react';
import './warm-modern-guidance.css';

type GuidanceSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  children?: ReactNode;
  tone?: 'warm' | 'soft' | 'contrast';
};

export function GuidanceSection({
  id,
  eyebrow,
  title,
  body,
  points,
  children,
  tone = 'warm',
}: GuidanceSectionProps) {
  return (
    <section className={`wmg-section wmg-section--${tone}`} id={id}>
      <div className="wmg-section-copy">
        <p className="wmg-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="wmg-body">{body}</p>
      </div>

      {points ? (
        <ul className="wmg-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}

      {children}
    </section>
  );
}
