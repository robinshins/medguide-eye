// 안과 "Aperture" 홈 — 중앙 정렬 어퍼처 히어로(동심원 링), 방사형 진료항목 메뉴,
// 시력교정 비교 매트릭스 테이블, 중앙선 타임라인, 대형 숫자 아티클 카드.
// 다른 사이트와 레이아웃 구조 자체가 다르다: 타일 그리드 없음, 방사형 메뉴가 내비게이션.
import Link from 'next/link';
import { SITE } from '@/lib/site.config';
import { getLatestArticles } from '@/lib/articles';
import { ApertureRings } from '@/app/components/decor/ApertureRings';
import { SpecialtyIcon } from '@/app/components/icons';

export const revalidate = 21600;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${SITE.domain}`;

// 방사형 메뉴에 올릴 8개 (나머지는 하단 리스트로)
const RADIAL = ['lasik', 'lasek', 'smile-lasik', 'icl', 'cataract', 'presbyopia', 'glaucoma', 'dry-eye'];

const COMPARISON = [
  { name: '라식', slug: 'lasik', recovery: '1~3일', pain: '거의 없음', range: '중등도 근시까지', price: '100~250만원' },
  { name: '라섹', slug: 'lasek', recovery: '2~4주', pain: '2~3일 통증', range: '각막 얇아도 가능', price: '90~250만원' },
  { name: '스마일라식', slug: 'smile-lasik', recovery: '1~2일', pain: '거의 없음', range: '중등도~고도 근시', price: '250~400만원' },
  { name: '렌즈삽입술', slug: 'icl', recovery: '2~3일', pain: '거의 없음', range: '초고도근시까지', price: '400~700만원' },
];

const PROCESS = [
  { title: '수집', body: '네이버 플레이스 방문자 리뷰, 카카오맵·구글맵 평점을 지역 단위로 수집합니다.' },
  { title: '교차 검증', body: '같은 안과를 세 플랫폼에서 찾아 평점과 리뷰 수를 나란히 비교합니다.' },
  { title: '공식 정보 확인', body: '건강보험심사평가원에 등록된 전문의 수, 진료과목, 장비를 확인합니다.' },
  { title: '정리', body: '수집한 데이터만으로 씁니다. 데이터에 없는 경력·수상은 쓰지 않습니다.' },
];

export default async function HomePage() {
  let latest: Awaited<ReturnType<typeof getLatestArticles>> = [];
  try { latest = await getLatestArticles(6); } catch { /* not seeded yet */ }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.siteName,
      url: baseUrl,
      description: SITE.siteDescription,
      inLanguage: 'ko',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.siteName,
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo-512.png` },
    },
  ];

  return (
    <div>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── 어퍼처 히어로: 중앙 정렬 + 동심원 링 + 방사형 그라디언트 ── */}
      <section className="relative overflow-hidden bg-surface-inverse text-ink-onDark">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 42%, rgba(106,85,227,0.42), rgba(21,16,48,0) 68%)' }}
        />
        <ApertureRings className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] text-brand-400 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 pt-28 pb-32 text-center">
          <p className="inline-flex items-center gap-2 rounded-full ring-1 ring-inset ring-brand-400/40 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            {SITE.trustBadge}
          </p>
          <h1 className="text-display-1 font-light">
            선명하게 보는,
            <br />
            <strong className="font-black">우리 동네 안과 데이터</strong>
          </h1>
          <p className="mt-7 text-ink-onDark/70 max-w-xl mx-auto leading-relaxed">
            {SITE.siteDescription}
          </p>
        </div>
      </section>

      {/* ── 방사형 진료항목 메뉴 (md+), 모바일은 2열 리스트 ── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-center text-display-2 font-light text-ink">
          어떤 <strong className="font-black">치료</strong>를 알아보시나요
        </h2>

        {/* desktop: circle */}
        <div className="relative hidden md:block mx-auto mt-8 w-[560px] h-[560px]">
          <div className="absolute inset-[92px] rounded-full ring-1 ring-line" />
          <div className="absolute inset-[168px] rounded-full ring-1 ring-line" />
          <Link
            href="/s/general"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-brand-600 text-white grid place-items-center text-center shadow-lift hover:bg-brand-700 transition-colors"
          >
            <span>
              <SpecialtyIcon slug="general" className="w-8 h-8 mx-auto mb-1.5" />
              <span className="block font-bold">안과 전체</span>
              <span className="block text-xs opacity-70 mt-0.5">지역별 보기</span>
            </span>
          </Link>
          {RADIAL.map((slug, i) => {
            const def = SITE.specialties.find(s => s.slug === slug);
            if (!def) return null;
            const angle = (i / RADIAL.length) * 360 - 90;
            return (
              <Link
                key={slug}
                href={`/s/${slug}`}
                className="absolute left-1/2 top-1/2 w-28 h-28 -ml-14 -mt-14 rounded-full bg-surface-card shadow-card ring-1 ring-inset ring-brand-100 grid place-items-center text-center hover:ring-brand-400 hover:shadow-lift transition-all"
                style={{ transform: `rotate(${angle}deg) translateX(230px) rotate(${-angle}deg)` }}
              >
                <span>
                  <SpecialtyIcon slug={slug} className="w-6 h-6 mx-auto mb-1 text-brand-600" />
                  <span className="block text-sm font-bold text-ink">{def.name}</span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* mobile: 2-col list */}
        <div className="md:hidden grid grid-cols-2 gap-3 mt-8">
          {SITE.specialties.map(s => (
            <Link
              key={s.slug || 'general'}
              href={`/s/${s.slug || 'general'}`}
              className="rounded-lg bg-surface-card shadow-card ring-1 ring-inset ring-brand-100 p-4 flex items-center gap-3"
            >
              <SpecialtyIcon slug={s.slug || 'general'} className="w-6 h-6 text-brand-600 flex-none" />
              <span className="text-sm font-bold text-ink">{s.label || s.name || '안과 전체'}</span>
            </Link>
          ))}
        </div>

        {/* remaining specialties under the circle (desktop) */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mt-6">
          {SITE.specialties
            .filter(s => s.slug && !RADIAL.includes(s.slug))
            .map(s => (
              <Link
                key={s.slug}
                href={`/s/${s.slug}`}
                className="rounded-full ring-1 ring-inset ring-line px-4 py-2 text-sm font-medium text-ink-muted hover:ring-brand-400 hover:text-brand-700 transition-all"
              >
                {s.name}
              </Link>
            ))}
        </div>
      </section>

      {/* ── 시력교정 비교 매트릭스 ── */}
      <section className="bg-surface-sunk py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-display-2 font-light text-ink text-center">
            시력교정, <strong className="font-black">한 표로 비교</strong>
          </h2>
          <p className="text-center text-ink-soft mt-3 mb-10">
            방식마다 회복 기간과 적응 범위가 다릅니다. 자세한 내용은 각 항목 글에서 확인하세요.
          </p>
          <div className="overflow-x-auto rounded-xl bg-surface-card shadow-card">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr>
                  {['수술 방식', '회복 기간', '통증', '적응 범위', '가격대(양안)', ''].map(h => (
                    <th key={h} className="text-left px-5 py-4 text-brand-600 text-xs font-bold uppercase tracking-wider border-b-2 border-brand-100">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.slug} className="border-b border-line last:border-0 hover:bg-brand-50/40">
                    <td className="px-5 py-4 font-bold text-ink">{row.name}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.recovery}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.pain}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.range}</td>
                    <td className="px-5 py-4 text-ink-muted whitespace-nowrap">{row.price}</td>
                    <td className="px-5 py-4">
                      <Link href={`/s/${row.slug}`} className="text-brand-600 font-semibold hover:text-brand-800 whitespace-nowrap">
                        지역별 보기 →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-soft text-center mt-4">
            가격은 2026년 시장 일반 시세의 참고치이며 검사 결과에 따라 달라집니다.
          </p>
        </div>
      </section>

      {/* ── 중앙선 타임라인 ── */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-display-2 font-light text-ink text-center mb-14">
          이렇게 <strong className="font-black">분석합니다</strong>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2 hidden sm:block" />
          <ol className="space-y-10">
            {PROCESS.map((step, i) => (
              <li key={i} className={`relative sm:w-1/2 ${i % 2 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                <span
                  className={`hidden sm:grid absolute top-0 w-9 h-9 rounded-full bg-brand-600 text-white text-sm font-black place-items-center ${
                    i % 2 ? '-left-[18px]' : '-right-[18px]'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="rounded-xl bg-surface-card shadow-card ring-1 ring-inset ring-brand-100 p-5">
                  <h3 className="font-bold text-ink flex sm:block items-center gap-2">
                    <span className="sm:hidden w-7 h-7 rounded-full bg-brand-600 text-white text-xs font-black grid place-items-center flex-none">{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted mt-2 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 대형 숫자 아티클 카드 ── */}
      {latest.length > 0 ? (
        <section className="max-w-6xl mx-auto px-4 pb-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-display-2 font-light text-ink">
              최신 <strong className="font-black">분석 글</strong>
            </h2>
            <Link href="/s/general" className="text-sm font-semibold text-brand-600 hover:text-brand-800">
              전체 보기 →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.map((a, i) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                className="group relative rounded-xl bg-surface-card shadow-card ring-1 ring-inset ring-brand-100 p-6 pt-14 overflow-hidden hover:shadow-lift hover:ring-brand-300 transition-all"
              >
                <span className="absolute -top-3 -left-1 text-[5.5rem] leading-none font-light text-brand-100 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <span className="text-xs font-semibold text-accent-600">{a.region} · {a.specialty}</span>
                  <h3 className="font-bold text-ink mt-2 leading-snug line-clamp-2 group-hover:text-brand-700 transition-colors">
                    {a.title}
                  </h3>
                  <time dateTime={a.publishedAt} className="block text-xs text-ink-soft mt-3">
                    {new Date(a.publishedAt).toLocaleDateString('ko')}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
