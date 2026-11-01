#!/usr/bin/env node
/**
 * 웹사이트가이드 (WebsiteGuide) SEO 칼럼 자동 발행 스크립트
 * 사용법: node scripts/publish-post.mjs --title="칼럼 제목" --slug="custom-slug" --category="보안 가이드" --target="shopping"
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const clean = arg.replace(/^--/, '');
    const eqIdx = clean.indexOf('=');
    if (eqIdx === -1) return [clean, 'true'];
    return [clean.slice(0, eqIdx), clean.slice(eqIdx + 1)];
  })
);

const CATEGORY_MAP = {
  portal: { slug: 'search', name: '검색·포털' },
  search: { slug: 'search', name: '검색·포털' },
  public: { slug: 'public', name: '정부·공공' },
  finance: { slug: 'finance', name: '금융·투자' },
  ott: { slug: 'ott', name: '영상·OTT' },
  ai: { slug: 'ai-tools', name: 'AI 도구' },
  shopping: { slug: 'shopping', name: '쇼핑·직구' },
  webtoon: { slug: 'webtoon', name: '웹툰·만화' },
  sports: { slug: 'sports', name: '스포츠중계' },
  community: { slug: 'community', name: '커뮤니티' },
  news: { slug: 'news', name: '뉴스·미디어' },
  education: { slug: 'education', name: '교육·학습' },
  crypto: { slug: 'crypto', name: '코인·가상자산' }
};

const title = args.title || '신규 공식 도메인 보안 점검 및 피싱 사칭 예방 완벽 가이드';
const slug = (args.slug || `safety-column-${Date.now()}`)
  .toLowerCase()
  .replace(/[^a-z0-9-]+/g, '-')
  .replace(/^-|-$/g, '');
const category = args.category || '보안·피싱 예방';
const targetCategoryId = args.target || 'portal';
const targetInfo = CATEGORY_MAP[targetCategoryId] || CATEGORY_MAP.portal;
const today = new Date().toISOString().slice(0, 10);
const dryRun = args['dry-run'] === 'true';

const newPost = {
  id: `blog-${Date.now()}`,
  slug,
  date: today,
  updatedDate: today,
  category,
  targetCategoryId,
  targetCategoryName: targetInfo.name,
  targetCategorySlug: targetInfo.slug,
  title,
  summary:
    args.summary ||
    `${title}에 관한 공식 도메인 확인 수칙과 HTTPS(TLS 1.3) 인증서 검증 절차를 안내하는 웹사이트가이드 디지털 안전 가이드입니다.`,
  content:
    args.content ||
    `${targetInfo.name} 이용 시 사칭 피싱 도메인을 구별하려면 브라우저 주소창의 최종 도착 URL 철자와 유효한 HTTPS 보안 인증서를 반드시 확인하고, 검증된 주소모음 허브를 북마크해 접속해야 합니다.`,
  readingTime: '4분 읽기',
  charCount: 2050,
  seoKeywords: (args.keywords || '공식주소확인,피싱사이트구별법,사칭사이트예방')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  internalLinkTop: {
    text: '검색엔진 스폰서 광고나 문자 단축 링크를 통한 사칭 피싱 피해를 예방하려면 운영 주체가 확인된',
    anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',
    url: '/'
  },
  sections: [
    {
      heading: `1. ${title} 핵심 배경 및 보안 위협 분석`,
      paragraphs: [
        '최근 유명 서비스 브랜드 로고와 인터페이스를 정교하게 복제한 타이포스쿼팅(Typosquatting) 사칭 도메인이 검색 광고와 SNS 채널을 통해 유포되고 있습니다.',
        '사용자가 비공식 경로로 접속할 경우 개인정보 탈취나 악성 스크립트 감염 위험이 있으므로 반드시 공식 최상위 도메인 철자와 SSL 인증서 유효성을 교차 점검해야 합니다.'
      ]
    },
    {
      heading: '2. 공식 도메인 철자 및 HTTPS(TLS 1.3) 인증서 3단계 판별법',
      paragraphs: [
        '첫째, 브라우저 주소창의 최종 도착 URL이 다단계 리다이렉트 없이 단일 홉(Single-Hop)으로 연결되는지 확인하십시오. 둘째, 자물쇠 아이콘을 눌러 유효한 TLS 1.3 암호화 인증서가 적용되어 있는지 점검합니다.',
        '셋째, 개인정보 입력이나 결제가 필요한 서비스는 즐겨찾기나 웹사이트가이드 [내 북마크]에 공식 도메인을 등록해 두고 안전하게 재방문하는 습관을 권장합니다.'
      ]
    }
  ],
  internalLinkBottom: {
    text: `${targetInfo.name} 분야 대표 사이트의 공식 주소와 이용 조건은`,
    anchor: `${targetInfo.name} 디렉터리 (/category/${targetInfo.slug})`,
    url: `/category/${targetInfo.slug}/`
  }
};

const blogFilePath = path.resolve(__dirname, '../src/data/blogPosts.ts');

if (!dryRun && fs.existsSync(blogFilePath)) {
  const fileContent = fs.readFileSync(blogFilePath, 'utf-8');
  if (fileContent.includes(`slug: '${slug}'`) || fileContent.includes(`"slug": "${slug}"`)) {
    console.error(`[WebsiteGuide SEO Publisher] 이미 동일한 슬러그(${slug})가 src/data/blogPosts.ts에 존재합니다.`);
    process.exit(1);
  }
  const marker = 'export const INITIAL_BLOG_POSTS: BlogPost[] = [';
  const idx = fileContent.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    const serialized = `\n  ${JSON.stringify(newPost, null, 2).replace(/\n/g, '\n  ')},`;
    const updated = fileContent.slice(0, insertPos) + serialized + fileContent.slice(insertPos);
    fs.writeFileSync(blogFilePath, updated, 'utf-8');
    console.log(`[WebsiteGuide SEO Publisher] ✅ src/data/blogPosts.ts에 신규 칼럼이 자동 등록되었습니다!`);
  }
}

console.log(`[WebsiteGuide SEO Publisher] 신규 칼럼 정보: ${title} (/blog/${slug}/)`);
console.log(`- 발행일: ${today}`);
console.log(`- 타깃 내부링크 카테고리: ${targetCategoryId} (/category/${targetInfo.slug}/)`);
console.log(`- 'npm run build'를 실행하면 정적 페이지(/blog/${slug}/index.html)와 사이트맵이 자동 생성됩니다.`);
