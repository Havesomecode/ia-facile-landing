import type { SteeringCriterion } from './criteriaData';
import { CriteriaOptionDemo } from './CriteriaOptionDemo';
import './criteria-review.css';

type CriteriaReviewPageProps = {
  criterion: SteeringCriterion;
};

export function CriteriaReviewPage({ criterion }: CriteriaReviewPageProps) {
  return (
    <main className="criteria-shell">
      <section className="criteria-hero">
        <div className="criteria-hero-copy">
          <p className="criteria-kicker">Steering criterion</p>
          <h1>{criterion.title}</h1>
          <p className="criteria-question">{criterion.question}</p>
          <p className="criteria-why">{criterion.whyItMatters}</p>
        </div>
        <aside className="criteria-decision-panel" aria-label="Current decision">
          <p className="criteria-kicker">Current direction</p>
          <p className="criteria-decision">{criterion.currentDirection}</p>
          <div className="criteria-decision-rule" />
          <p className="criteria-kicker">Current decision</p>
          <p>{criterion.currentDecision}</p>
        </aside>
      </section>

      <section className="criteria-grid">
        <article className="criteria-column">
          <p className="criteria-kicker">Review points</p>
          <ul>
            {criterion.reviewPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <article className="criteria-column">
          <p className="criteria-kicker">Good signals</p>
          <ul>
            {criterion.goodSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>
        <article className="criteria-column">
          <p className="criteria-kicker">Avoid</p>
          <ul>
            {criterion.avoid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="criteria-options">
        <div className="criteria-options-header">
          <p className="criteria-kicker">Options to compare</p>
          <h2>Decision space for this criterion</h2>
        </div>
        <div className="criteria-option-grid">
          {criterion.options.map((option) => (
            <article
              key={option.name}
              className={`criteria-option criteria-option--${option.fit}`}
              aria-label={`${option.name} option`}
            >
              <p className="criteria-fit">{option.fit}</p>
              <CriteriaOptionDemo criterion={criterion} fit={option.fit} />
              <h3>{option.name}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
