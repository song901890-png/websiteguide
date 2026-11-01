// /sitemap-index.xml — robots.txt와 Search Console에 등록하는 사이트맵 인덱스입니다.
import { SITE_URL } from '../data/siteConfig';

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-0.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
