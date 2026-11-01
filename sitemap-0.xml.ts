// /sitemap-0.xml — 빌드할 때 페이지 목록과 수정일로 자동 생성됩니다 (외부 패키지 없음).
import { CATEGORIES } from '../data/sitesData';
import { INITIAL_BLOG_POSTS } from '../data/blogPosts';
import { SITE_URL } from '../data/siteConfig';
import { STATIC_PAGES, CATEGORY_LASTMOD } from '../data/lastmod';

function toIso(date: string): string {
  return new Date(`${date}T00:00:00+09:00`).toISOString();
}

export function GET() {
  const entries: { loc: string; lastmod: string }[] = [
    ...STATIC_PAGES.map((p) => ({ loc: `${SITE_URL}${p.path}`, lastmod: p.lastmod })),
    ...CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({
      loc: `${SITE_URL}/category/${c.slug}/`,
      lastmod: CATEGORY_LASTMOD,
    })),
    ...INITIAL_BLOG_POSTS.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}/`,
      lastmod: post.updatedDate || post.date,
    })),
  ];

  const body = entries
    .map((e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${toIso(e.lastmod)}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
