// 사이트맵에 들어갈 정적 페이지 목록과 최종 수정일.
// 새 페이지(.astro)를 추가하거나 내용을 고치면 여기 날짜도 함께 수정하세요.
// 카테고리·블로그 페이지는 데이터 파일에서 자동으로 추가됩니다.
export const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/', lastmod: '2026-11-01' },
  { path: '/internet-of-things/', lastmod: '2026-11-01' },
  { path: '/blog/', lastmod: '2026-11-01' },
  { path: '/address-verification/', lastmod: '2026-11-01' },
  { path: '/selection-criteria/', lastmod: '2026-11-01' },
  { path: '/faq/', lastmod: '2026-11-01' },
  { path: '/about/', lastmod: '2026-11-01' },
  { path: '/contact/', lastmod: '2026-11-01' },
  { path: '/privacy/', lastmod: '2026-11-01' },
];

/** 카테고리 페이지 lastmod (디렉터리 정리일) */
export const CATEGORY_LASTMOD = '2026-11-01';
