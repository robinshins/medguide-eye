// Aperture — iris mark with a lens blade and catchlight. All geometry, no fonts.
import type { SVGProps } from 'react';

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="16" fill="#573FCB" />
      <circle cx="16" cy="16" r="10.5" stroke="#A9A2F6" strokeWidth="1.2" opacity="0.65" />
      <circle cx="16" cy="16" r="6.6" fill="#1A1240" />
      <path d="M16 9.4a6.6 6.6 0 0 1 5.72 3.3L16 16Z" fill="#3DD9E8" />
      <circle cx="18.5" cy="12.5" r="1.5" fill="#fff" fillOpacity="0.9" />
    </svg>
  );
}

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  // "아이라운드" outlined as geometry-free text is heavy; use styled text with the
  // document font — this renders in the browser (not rasterized), so <text> is safe.
  return (
    <svg viewBox="0 0 132 20" aria-hidden="true" {...props}>
      <text x="0" y="15" fontFamily="inherit" fontSize="15.5" fontWeight="800"
            letterSpacing="-0.02em" fill="currentColor">아이라운드</text>
    </svg>
  );
}
