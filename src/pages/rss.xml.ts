// /rss.xml — 블로그 글 목록에서 빌드할 때마다 자동 생성됩니다 (외부 패키지 없이 동작).
import { INITIAL_BLOG_POSTS } from '../data/blogPosts';
import { SITE_URL, SITE_NAME } from '../data/siteConfig';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(date: string): string {
  // 'YYYY-MM-DD' → 한국 시간 오전 9시 기준
  return new Date(`${date}T09:00:00+09:00`).toUTCString();
}

export function GET() {
  const posts = [...INITIAL_BLOG_POSTS].sort((a, b) =>
    String(b.updatedDate || b.date).localeCompare(String(a.updatedDate || a.date))
  );
  const lastBuild = posts.length > 0 ? toRfc822(posts[0].updatedDate || posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}/`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.summary)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} 디지털 안전 칼럼`)}</title>
    <link>${SITE_URL}/blog/</link>
    <description>${escapeXml(`${SITE_NAME}의 공식 웹사이트 이용·사칭 사이트 예방 칼럼 RSS 피드입니다.`)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
