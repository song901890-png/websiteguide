import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 사이트맵(/sitemap-index.xml, /sitemap-0.xml)과 RSS(/rss.xml)는
// src/pages의 *.xml.ts 파일이 직접 생성합니다 (외부 sitemap 패키지 사용 안 함).
// 페이지 수정일은 src/data/lastmod.ts에서 관리합니다.
export default defineConfig({
  site: 'https://www.websiteguide.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
