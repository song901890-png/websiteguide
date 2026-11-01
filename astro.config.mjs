import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const SITE = 'https://www.websiteguide.io';

// 사이트맵 lastmod: 페이지마다 실제 수정일을 넣습니다.
// - 블로그 글: blogPosts.ts의 updatedDate(없으면 date)를 자동으로 읽음
// - 그 외 페이지: 아래 PAGE_LASTMOD에 적힌 날짜 (콘텐츠를 고치면 날짜도 함께 수정)
const PAGE_LASTMOD = {
  '/': '2026-11-01',
  '/internet-of-things/': '2026-11-01',
  '/about/': '2026-11-01',
  '/contact/': '2026-11-01',
  '/privacy/': '2026-11-01',
  '/selection-criteria/': '2026-11-01',
  '/address-verification/': '2026-11-01',
  '/faq/': '2026-11-01',
  '/blog/': '2026-11-01',
};
const DEFAULT_LASTMOD = '2026-11-01'; // 카테고리 페이지 등 (디렉터리 정리일)

function readBlogDates() {
  const map = {};
  try {
    const src = readFileSync(new URL('./src/data/blogPosts.ts', import.meta.url), 'utf-8');
    const re = /slug:\s*'([^']+)',\s*date:\s*'([^']+)',(?:\s*updatedDate:\s*'([^']+)',)?/g;
    let m;
    while ((m = re.exec(src)) !== null) {
      map[`/blog/${m[1]}/`] = m[3] || m[2];
    }
  } catch (err) {
    console.warn('[sitemap] blogPosts.ts 날짜를 읽지 못했습니다:', err);
  }
  return map;
}
const BLOG_LASTMOD = readBlogDates();

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const date = BLOG_LASTMOD[path] || PAGE_LASTMOD[path] || DEFAULT_LASTMOD;
        item.lastmod = new Date(`${date}T00:00:00+09:00`).toISOString();
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
