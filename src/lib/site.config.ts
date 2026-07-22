import type { SiteConfig } from './site.types';

// 안과 — "Aperture". Optics and clarity: concentric rings, radial light, extreme
// weight contrast. See medguide-core/BRAND.md.
export const SITE: SiteConfig = {
  key: 'eye',

  categoryKo: '안과',
  siteName: '아이라운드',
  siteTagline: '데이터로 고른 우리 동네 안과',
  siteDescription:
    '전국 안과를 네이버·카카오·구글 리뷰와 건강보험심사평가원 전문의 정보로 교차 분석했습니다. 라식, 라섹, 스마일라식, 렌즈삽입술, 백내장까지 지역별로 정리했습니다.',
  trustBadge: '리뷰 3개 플랫폼 교차검증',
  domain: 'eyeround.co.kr',
  contactEmail: 'nosun3946@gmail.com',

  specialties: [
    { name: '', slug: '', label: '안과 전체', blurb: '지역 안과를 리뷰·전문의 기준으로 한눈에' },
    { name: '라식', slug: 'lasik', blurb: '각막을 절편으로 열어 교정하는 대표 시력교정술' },
    { name: '라섹', slug: 'lasek', blurb: '각막이 얇거나 활동량이 많을 때 고려하는 방식' },
    { name: '스마일라식', slug: 'smile-lasik', blurb: '최소 절개로 회복이 빠른 3세대 시력교정' },
    { name: '렌즈삽입술', slug: 'icl', blurb: '초고도근시·얇은 각막에서 선택하는 비절삭 교정' },
    { name: '백내장', slug: 'cataract', blurb: '혼탁해진 수정체를 인공수정체로 교체' },
    { name: '노안수술', slug: 'presbyopia', blurb: '노안과 백내장을 함께 교정하는 다초점 렌즈' },
    { name: '녹내장', slug: 'glaucoma', blurb: '시신경 손상을 늦추는 안압 관리와 수술' },
    { name: '망막', slug: 'retina', blurb: '망막박리·황반변성 등 정밀 검사가 필요한 질환' },
    { name: '안구건조증', slug: 'dry-eye', blurb: 'IPL·눈물점 플러그 등 만성 건조증 치료' },
    { name: '소아안과', slug: 'pediatric', blurb: '약시·사시·근시 진행 억제' },
    { name: '드림렌즈', slug: 'ortho-k', blurb: '자는 동안 착용해 낮 시력을 확보하는 각막교정렌즈' },
  ],

  categoryHints: ['안과'],
  clinicNameSuffixes: ['안과', '안과의원', '안과병원', '병원', '의원'],

  credentialLabel: '안과 전문의 수',

  priceContext: {
    lasik:
      '라식 시세(2026년 기준): 일반 라식 100~180만원, 웨이브프론트/맞춤형 150~250만원(양안). 검사비 별도인 곳과 포함인 곳이 갈리니 총액 기준으로 비교해야 합니다. 실손보험은 시력교정술에 적용되지 않습니다.',
    lasek:
      '라섹 시세(2026년 기준): 일반 라섹 90~160만원, 올레이저(노터치) 150~250만원(양안). 회복기간이 2~4주로 라식보다 길고 통증이 있어 휴가 일정과 함께 봐야 합니다.',
    'smile-lasik':
      '스마일라식 시세(2026년 기준): 250~400만원(양안). 장비(비쥬맥스 등)와 집도 경험에 따라 편차가 큽니다. 절편이 없어 외부 충격에 강하다는 점이 주요 선택 이유입니다.',
    icl:
      '렌즈삽입술 시세(2026년 기준): 후방 ICL 400~600만원, 난시교정 토릭 ICL 450~700만원(양안). 렌즈 원가 비중이 커 할인 폭이 작습니다. 초고도근시·얇은 각막에서 선택지가 됩니다.',
    cataract:
      '백내장 수술: 단초점 인공수정체는 건강보험 급여 대상으로 본인부담 약 20~60만원(한 눈). 다초점·난시교정 렌즈는 비급여로 150~400만원(한 눈)까지 올라갑니다. 실손보험 적용 여부가 2016년 이후 가입분에서 갈리니 약관 확인이 필요합니다.',
  },
};
