import { iaFacileDemoContent } from '../content/landingPageContent';
import { sharedContractRules, sharedReviewQuestions } from '../content/reviewChecklist';
import './overview.css';

const visualDirections = [
  {
    slug: 'reassuring-editorial',
    title: 'Reassuring Editorial',
    summary: 'Calme editorial, chaleur adulte, hierarchie portee par la typographie.',
  },
  {
    slug: 'calm-public-service-clarity',
    title: 'Calm Public-Service Clarity',
    summary: 'Lisibilite de service public, structure nette, confiance sans theatrale.',
  },
  {
    slug: 'warm-modern-guidance',
    title: 'Warm Modern Guidance',
    summary: 'Accueil chaleureux, rythme plus vivant, guidance moderne sans infantilisation.',
  },
];

const criteriaHighlights = [
  'Composition',
  'Surface language',
  'Corners and geometry',
  'Typography',
  'Color and contrast',
  'Rhythm and spacing',
  'Hierarchy and signposting',
  'Imagery and illustration',
  'CTA language and shape',
  'Motion and interaction feel',
];

export function UiCharterOverview() {
  return (
    <main className="charter-shell">
      <section className="charter-hero">
        <p className="charter-eyebrow">{iaFacileDemoContent.eyebrow}</p>
        <div className="charter-hero-grid">
          <div>
            <h1>{iaFacileDemoContent.headline}</h1>
            <p className="charter-lead">{iaFacileDemoContent.subheadline}</p>
          </div>
          <aside className="charter-note">
            <p className="charter-note-kicker">ui_charter</p>
            <p>
              Labo Storybook pour comparer des identites visuelles avec un meme contenu, des anti-patterns
              partages et des write scopes isoles.
            </p>
          </aside>
        </div>
      </section>

      <section className="charter-section charter-grid">
        <article>
          <h2>Contrat commun</h2>
          <ul>
            {sharedContractRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Questions de revue</h2>
          <ul>
            {sharedReviewQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="charter-section">
        <div className="charter-section-heading">
          <p className="charter-label">Directions initiales</p>
          <h2>Trois theses visuelles a comparer</h2>
        </div>
        <div className="charter-direction-list">
          {visualDirections.map((direction) => (
            <article key={direction.slug} className="charter-direction-item">
              <p className="charter-label">{direction.slug}</p>
              <h3>{direction.title}</h3>
              <p>{direction.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="charter-section">
        <div className="charter-section-heading">
          <p className="charter-label">Steering criteria</p>
          <h2>Dix criteres pour piloter les iterations</h2>
        </div>
        <div className="charter-direction-list">
          {criteriaHighlights.map((criterion) => (
            <article key={criterion} className="charter-direction-item">
              <p className="charter-label">criterion</p>
              <h3>{criterion}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
