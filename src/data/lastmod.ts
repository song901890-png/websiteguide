// 사이트맵에 들어갈 정적 페이지 목록과 최종 수정일.
// 새 페이지(.astro)를 추가하거나 내용을 고치면 여기 날짜도 함께 수정하세요.
// 카테고리·블로그 페이지는 데이터 파일에서 자동으로 추가됩니다.
import { DIRECTORY_UPDATED } from './siteConfig';

export const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/', lastmod: DIRECTORY_UPDATED },
  { path: '/internet-of-things/', lastmod: '2026-11-01' },
  { path: '/blog/', lastmod: '2026-11-01' },
  { path: '/address-verification/', lastmod: '2026-11-01' },
  { path: '/selection-criteria/', lastmod: '2026-11-01' },
  { path: '/faq/', lastmod: '2026-11-01' },
  { path: '/about/', lastmod: '2026-11-01' },
  { path: '/contact/', lastmod: '2026-11-01' },
  { path: '/privacy/', lastmod: '2026-11-01' },
];

/** 카테고리 페이지 lastmod (디렉터리 업데이트일과 같음) */
export const CATEGORY_LASTMOD = DIRECTORY_UPDATED;

/** 페이지 경로로 최종 수정일을 찾습니다 (페이지 화면 표기·스키마 dateModified용) */
export function lastmodOf(path: string): string {
  return STATIC_PAGES.find((p) => p.path === path)?.lastmod ?? DIRECTORY_UPDATED;
}
