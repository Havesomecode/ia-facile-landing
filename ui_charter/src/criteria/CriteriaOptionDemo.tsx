import type { SteeringCriterion } from './criteriaData';

type CriteriaOptionDemoProps = {
  criterion: SteeringCriterion;
  fit: 'strong' | 'medium' | 'weak';
};

function DemoBar({ label, short = false }: { label?: string; short?: boolean }) {
  return (
    <div className={`demo-bar ${short ? 'demo-bar--short' : ''}`}>
      {label ? <span>{label}</span> : null}
    </div>
  );
}

function DemoCard({ rounded = false, soft = false }: { rounded?: boolean; soft?: boolean }) {
  return <div className={`demo-card ${rounded ? 'demo-card--rounded' : ''} ${soft ? 'demo-card--soft' : ''}`} />;
}

function CompositionDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  if (fit === 'strong') {
    return (
      <div className="demo-composition demo-composition--strong">
        <div className="demo-split">
          <div className="demo-block demo-block--headline" />
          <div className="demo-note-panel" />
        </div>
        <div className="demo-bands">
          <div className="demo-band">
            <div className="demo-band-label" />
            <div className="demo-band-copy" />
          </div>
          <div className="demo-band">
            <div className="demo-band-label" />
            <div className="demo-band-copy demo-band-copy--wide" />
          </div>
          <div className="demo-band">
            <div className="demo-band-label" />
            <div className="demo-band-copy" />
          </div>
        </div>
      </div>
    );
  }

  if (fit === 'medium') {
    return (
      <div className="demo-composition demo-composition--medium">
        <div className="demo-split demo-split--offset">
          <div className="demo-block demo-block--headline" />
          <div className="demo-rule-stack" />
        </div>
        <div className="demo-stagger">
          <div className="demo-stagger-row demo-stagger-row--left" />
          <div className="demo-stagger-row demo-stagger-row--right" />
          <div className="demo-stagger-row demo-stagger-row--left" />
        </div>
      </div>
    );
  }

  return (
    <div className="demo-composition demo-composition--weak">
      <div className="demo-centered-hero" />
      <div className="demo-card-stack">
        <DemoCard rounded soft />
        <DemoCard rounded soft />
        <DemoCard rounded soft />
      </div>
    </div>
  );
}

function SurfaceDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  if (fit === 'strong') {
    return (
      <div className="demo-surface demo-surface--strong">
        <DemoBar />
        <div className="demo-open-row">
          <div className="demo-open-copy" />
          <div className="demo-open-copy demo-open-copy--short" />
        </div>
        <DemoBar />
        <div className="demo-open-row">
          <div className="demo-open-copy demo-open-copy--short" />
          <div className="demo-open-copy" />
        </div>
      </div>
    );
  }

  if (fit === 'medium') {
    return (
      <div className="demo-surface demo-surface--medium">
        <DemoBar />
        <div className="demo-panel-row">
          <div className="demo-open-copy" />
          <div className="demo-summary-panel" />
        </div>
        <DemoBar />
      </div>
    );
  }

  return (
    <div className="demo-surface demo-surface--weak">
      <div className="demo-card-grid">
        <DemoCard rounded soft />
        <DemoCard rounded soft />
        <DemoCard rounded soft />
        <DemoCard rounded soft />
      </div>
    </div>
  );
}

function GeometryDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  const rounded = fit === 'weak';
  const softened = fit === 'medium';

  return (
    <div className={`demo-geometry demo-geometry--${fit}`}>
      <div className={`demo-geometry-panel ${rounded ? 'is-rounded' : softened ? 'is-soft' : 'is-square'}`} />
      <div className="demo-geometry-buttons">
        <div className={`demo-geometry-button ${rounded ? 'is-rounded' : softened ? 'is-soft' : 'is-square'}`} />
        <div className={`demo-geometry-button ${rounded ? 'is-rounded' : softened ? 'is-soft' : 'is-square'}`} />
      </div>
      <div className={`demo-geometry-input ${rounded ? 'is-rounded' : softened ? 'is-soft' : 'is-square'}`} />
    </div>
  );
}

function TypographyDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-typography demo-typography--${fit}`}>
      <div className="demo-type-label">IA FACILE</div>
      <div className="demo-type-headline">Comprendre. Commencer. Respirer.</div>
      <div className="demo-type-body">
        Un ton adulte et lisible qui guide sans infantiliser ni surjouer l&apos;expertise.
      </div>
      <div className="demo-type-lines">
        <DemoBar short />
        <DemoBar />
        <DemoBar short />
      </div>
    </div>
  );
}

function ColorDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-color demo-color--${fit}`}>
      <div className="demo-color-header">
        <div className="demo-color-chip" />
        <div className="demo-color-chip demo-color-chip--secondary" />
        <div className="demo-color-chip demo-color-chip--accent" />
      </div>
      <div className="demo-color-field" />
      <div className="demo-color-footer">
        <DemoBar />
        <DemoBar short />
      </div>
    </div>
  );
}

function RhythmDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-rhythm demo-rhythm--${fit}`}>
      <div className="demo-rhythm-row" />
      <div className="demo-rhythm-row" />
      <div className="demo-rhythm-row" />
      <div className="demo-rhythm-row" />
    </div>
  );
}

function HierarchyDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-hierarchy demo-hierarchy--${fit}`}>
      <div className="demo-hierarchy-head" />
      <div className="demo-hierarchy-main" />
      <div className="demo-hierarchy-sub" />
      <div className="demo-hierarchy-group">
        <div className="demo-hierarchy-item" />
        <div className="demo-hierarchy-item demo-hierarchy-item--short" />
      </div>
    </div>
  );
}

function ImageryDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  if (fit === 'strong') {
    return (
      <div className="demo-imagery demo-imagery--strong">
        <div className="demo-diagram">
          <div className="demo-diagram-node" />
          <div className="demo-diagram-line" />
          <div className="demo-diagram-node" />
        </div>
        <DemoBar />
      </div>
    );
  }

  if (fit === 'medium') {
    return (
      <div className="demo-imagery demo-imagery--medium">
        <div className="demo-photo-block" />
        <DemoBar />
      </div>
    );
  }

  return (
    <div className="demo-imagery demo-imagery--weak">
      <div className="demo-blob demo-blob--one" />
      <div className="demo-blob demo-blob--two" />
      <div className="demo-blob demo-blob--three" />
    </div>
  );
}

function CtaDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-cta demo-cta--${fit}`}>
      <div className="demo-cta-copy" />
      <div className="demo-cta-actions">
        <div className="demo-cta-button demo-cta-button--primary" />
        <div className="demo-cta-button demo-cta-button--secondary" />
      </div>
    </div>
  );
}

function MotionDemo({ fit }: { fit: 'strong' | 'medium' | 'weak' }) {
  return (
    <div className={`demo-motion demo-motion--${fit}`}>
      <div className="demo-motion-frame" />
      <div className="demo-motion-trace" />
      <div className="demo-motion-frame demo-motion-frame--small" />
    </div>
  );
}

export function CriteriaOptionDemo({ criterion, fit }: CriteriaOptionDemoProps) {
  switch (criterion.slug) {
    case 'composition':
      return <CompositionDemo fit={fit} />;
    case 'surface-language':
      return <SurfaceDemo fit={fit} />;
    case 'corners-and-geometry':
      return <GeometryDemo fit={fit} />;
    case 'typography':
      return <TypographyDemo fit={fit} />;
    case 'color-and-contrast':
      return <ColorDemo fit={fit} />;
    case 'rhythm-and-spacing':
      return <RhythmDemo fit={fit} />;
    case 'hierarchy-and-signposting':
      return <HierarchyDemo fit={fit} />;
    case 'imagery-and-illustration':
      return <ImageryDemo fit={fit} />;
    case 'cta-language-and-shape':
      return <CtaDemo fit={fit} />;
    case 'motion-and-interaction-feel':
      return <MotionDemo fit={fit} />;
    default:
      return <div className="demo-fallback" />;
  }
}
