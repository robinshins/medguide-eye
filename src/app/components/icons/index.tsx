// Aperture icon grammar: 1.5 stroke, round caps, one filled accent dot per icon.
import type { SVGProps } from 'react';

type Icon = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const Eye: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" {...base} />
    <circle cx="12" cy="12" r="3.2" {...base} />
    <circle cx="13.2" cy="10.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Lasik: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="13" r="6.5" {...base} />
    <path d="M12 2.5v4M8.5 4l1.2 2.4M15.5 4l-1.2 2.4" {...base} />
    <circle cx="12" cy="13" r="2.4" {...base} />
    <circle cx="12" cy="13" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Lasek: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="7" {...base} />
    <path d="M5.5 9.5c1.8-1.6 4-2.5 6.5-2.5s4.7.9 6.5 2.5" {...base} />
    <circle cx="12" cy="14" r="2.2" {...base} />
    <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const Smile: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="7" {...base} />
    <path d="M8.5 12.8c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" {...base} />
    <circle cx="12" cy="9.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Icl: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <ellipse cx="12" cy="12" rx="8" ry="5" {...base} />
    <ellipse cx="12" cy="12" rx="3.4" ry="3.4" {...base} />
    <path d="M4 12h2M18 12h2" {...base} />
    <circle cx="13" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Cataract: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="6.6" {...base} />
    <path d="M12 5.4a6.6 6.6 0 0 1 0 13.2" {...base} strokeDasharray="2.4 2.4" />
    <circle cx="12" cy="12" r="2.4" {...base} />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Presbyopia: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="8.4" cy="12" r="4.4" {...base} />
    <circle cx="15.6" cy="12" r="4.4" {...base} />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Glaucoma: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="7" {...base} />
    <path d="M12 8.2v3.8l2.6 2.6" {...base} />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Retina: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="7" {...base} />
    <path d="M12 12c1.8-.4 3.4-1.6 4.4-3.2M12 12c-.5 1.8-1.7 3.3-3.3 4.2M12 12c-1.9.2-3.7-.3-5.1-1.4" {...base} />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DryEye: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M3.5 10.5S6.6 5.6 12 5.6s8.5 4.9 8.5 4.9" {...base} />
    <path d="M12 10.8c1.6 2.5 2.6 4.1 2.6 5.5a2.6 2.6 0 1 1-5.2 0c0-1.4 1-3 2.6-5.5Z" {...base} />
    <circle cx="12.9" cy="15.7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const Pediatric: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="7.2" {...base} />
    <circle cx="9.4" cy="10.6" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.6" cy="10.6" r="1" fill="currentColor" stroke="none" />
    <path d="M9.2 14.4c.8.9 1.7 1.3 2.8 1.3s2-.4 2.8-1.3" {...base} />
  </svg>
);

const OrthoK: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M5 13.5a7 7 0 0 1 14 0" {...base} />
    <path d="M7.4 13.5a4.6 4.6 0 0 1 9.2 0" {...base} />
    <path d="M4 17.5h16M9 20h6" {...base} />
    <circle cx="12" cy="12.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const REGISTRY: Record<string, Icon> = {
  general: Eye,
  lasik: Lasik,
  lasek: Lasek,
  'smile-lasik': Smile,
  icl: Icl,
  cataract: Cataract,
  presbyopia: Presbyopia,
  glaucoma: Glaucoma,
  retina: Retina,
  'dry-eye': DryEye,
  pediatric: Pediatric,
  'ortho-k': OrthoK,
};

export function SpecialtyIcon({ slug, className }: { slug: string; className?: string }) {
  const C = REGISTRY[slug] ?? Eye;
  return <C className={className} focusable="false" />;
}
