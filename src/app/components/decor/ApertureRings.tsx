// Concentric aperture rings — the site's signature backdrop. Pure geometry.
import type { SVGProps } from 'react';

export function ApertureRings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" {...props}>
      {[280, 236, 192, 148, 104].map((r, i) => (
        <circle
          key={r}
          cx="300" cy="300" r={r}
          stroke="currentColor"
          strokeWidth={i === 0 ? 1 : 1.2}
          opacity={0.1 + i * 0.09}
        />
      ))}
      {/* lens blades */}
      {Array.from({ length: 6 }, (_, i) => {
        const a = (i * 60 * Math.PI) / 180;
        const x1 = 300 + Math.cos(a) * 104;
        const y1 = 300 + Math.sin(a) * 104;
        const x2 = 300 + Math.cos(a + 0.42) * 148;
        const y2 = 300 + Math.sin(a + 0.42) * 148;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
        );
      })}
      <circle cx="300" cy="300" r="58" fill="currentColor" opacity="0.14" />
      <circle cx="300" cy="300" r="26" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
