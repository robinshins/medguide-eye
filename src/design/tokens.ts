// 안과 — "Aperture". Optics and clarity: concentric rings, radial light, extreme
// weight contrast (300 vs 900). The most spacious of the five sites.
//
// Literal hexes, NOT `rgb(var(--x) / <alpha-value>)`. Each site has exactly one fixed
// theme, so runtime indirection buys nothing — and sharp/satori cannot resolve CSS
// variables, which would break SVG and OG generation.

export const brand = {
  50: '#F1F0FE', 100: '#E4E2FD', 200: '#CBC7FB', 300: '#A9A2F6', 400: '#8577EE',
  500: '#6A55E3', 600: '#573FCB', 700: '#4732A3', 800: '#3A2B80', 900: '#2E2363', 950: '#1A1240',
} as const;

export const accent = {
  50: '#ECFDFF', 100: '#D3F8FD', 200: '#A8EFF8', 300: '#7BE8F2', 400: '#3DD9E8',
  500: '#16BDD0', 600: '#0E96A8', 700: '#0E7787', 800: '#125F6D', 900: '#134E5A',
} as const;

export const surface = {
  page: '#FAFAFF', card: '#FFFFFF', sunk: '#F2F1FC', inverse: '#151030',
} as const;

export const line = {
  DEFAULT: '#E6E4F5', strong: '#D2CEEC', inverse: 'rgba(255,255,255,0.12)',
} as const;

export const ink = {
  DEFAULT: '#171233', muted: '#4A4470', soft: '#7E78A3', onDark: '#E8E5FA',
} as const;

// Platform chips are semantic, never re-themed per site.
export const platform = {
  naverBg: '#E9F7EE', naverFg: '#127A3C',
  kakaoBg: '#FEF6DC', kakaoFg: '#8A6A00',
  googleBg: '#EAF1FE', googleFg: '#1A56C4',
} as const;

export const radius = { sm: '12px', md: '20px', lg: '28px', xl: '36px' } as const;

export const shadow = {
  card: '0 1px 2px rgba(58,43,128,.05), 0 20px 44px -24px rgba(58,43,128,.30)',
  lift: '0 2px 8px rgba(58,43,128,.08), 0 32px 60px -28px rgba(58,43,128,.40)',
} as const;

export const typeTokens = {
  sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo',
         'Pretendard', 'Malgun Gothic', 'sans-serif'],
  display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
  mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  articleMeasure: '68ch',
  articleLeading: '1.9',
  articleSize: '1.0625rem',
} as const;

export function toCssVars(): Record<string, string> {
  const out: Record<string, string> = {};
  const put = (prefix: string, obj: Record<string, string>) => {
    for (const [k, v] of Object.entries(obj)) {
      out[`--${prefix}-${k === 'DEFAULT' ? 'base' : k}`] = v;
    }
  };
  put('brand', brand as unknown as Record<string, string>);
  put('accent', accent as unknown as Record<string, string>);
  put('surface', surface as unknown as Record<string, string>);
  put('line', line as unknown as Record<string, string>);
  put('ink', ink as unknown as Record<string, string>);
  put('platform', platform as unknown as Record<string, string>);
  put('radius', radius as unknown as Record<string, string>);
  out['--article-measure'] = typeTokens.articleMeasure;
  out['--article-leading'] = typeTokens.articleLeading;
  out['--article-size'] = typeTokens.articleSize;
  return out;
}
