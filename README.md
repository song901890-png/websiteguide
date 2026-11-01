# 웹사이트가이드 (WebsiteGuide) — Astro + Tailwind 정적 사이트

메인 도메인: **https://www.websiteguide.io**
도메인·브랜드·연락처는 `src/data/siteConfig.ts` 한 곳에서 관리합니다. (`astro.config.mjs`의 `SITE`도 함께 수정)

## v11 변경 사항

### 콘텐츠
- 디렉터리를 **12개 분야 × 30곳 = 360곳**으로 채움 (`src/data/sitesData.ts`). 화면 숫자와 스키마 `numberOfItems`가 실제 데이터와 일치합니다.
- 설립 연도를 확인하지 못한 항목은 `foundedYear: ''`로 두었고, 화면에서는 자동으로 숨겨집니다.
- 브랜드를 "웹사이트가이드 (WebsiteGuide)"로 변경. 작성자 표기는 "웹사이트가이드 편집팀"입니다.

### 신뢰 신호 정리
- 측정 근거가 없는 "LIVE 점검 / 표본 검증 94개 / 피싱 차단 3건 / 실시간 인기 검색어(검색량)" 표기와 `Dataset` 스키마를 제거했습니다.
- "실시간 트렌드" 섹션은 **주제별 안전 접속 가이드**와 **대표 사이트 공식 주소 확인표**로 바꿨습니다.
- `/go/` 게이트웨이(예비 도메인 안내 모달, `/go/direct/` 페이지, 관련 헤더·robots 규칙)를 삭제했습니다.
- 카드의 "🔒 HTTPS 보안 확인 완료 · 날짜" 배지를 삭제했습니다.
- `meta keywords` 태그를 삭제하고 "주소모음·링크모음·평생주소" 반복을 정리했습니다.

### 운영자 도구 제거
- 홈페이지의 관리자 칼럼 스튜디오, 관리자 암호, localStorage 칼럼 발행 기능을 삭제했습니다.
- 홈의 최신 칼럼 카드는 이제 정적 HTML 링크로 출력되어 검색엔진이 그대로 읽습니다.
- 새 칼럼은 `npm run publish:post`로 `blogPosts.ts`에 추가한 뒤 빌드합니다. 스크립트가 만드는 본문은 틀일 뿐이므로, 직접 쓴 글로 바꾼 뒤 발행하세요.

### 신규 페이지 (E-E-A-T)
- `/about/` 소개 · `/contact/` 문의·정정 요청 · `/privacy/` 개인정보처리방침
- `/selection-criteria/` 독립 페이지로 재작성 (선정 기준, 제외 대상, 정정 절차, 광고 정책)

### 기술
- `/rss.xml`을 `src/pages/rss.xml.ts`가 빌드할 때마다 자동 생성합니다 (추가 패키지 없음).
- 사이트맵 `lastmod`를 페이지별 날짜로 출력합니다. 블로그는 `updatedDate`를 자동으로 읽고, 나머지는 `astro.config.mjs`의 `PAGE_LASTMOD`를 수정하면 됩니다.
- Pretendard 폰트를 렌더링을 막지 않는 방식으로 불러옵니다.
- `SearchAction`(구글 사이트링크 검색창, 2024년 종료) 스키마를 삭제했습니다.
- OG 이미지 교체(`og-image.png`), IoT 전용 OG 이미지(`og-iot.png`), IoT 구조도(`/images/iot-architecture.svg`)를 추가했습니다.

## Cloudflare Pages 배포

### 권장: GitHub 연동 빌드
1. GitHub 저장소에 이 폴더의 **내용물**을 업로드합니다.
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**
3. 빌드 설정
   - Build command: `npm run build`
   - Build output directory: `dist`
   - 환경 변수: `NODE_VERSION = 20`
4. **Custom domains**에 `www.websiteguide.io`와 `websiteguide.io`를 모두 추가합니다.

### 대안: 로컬 빌드 후 Direct Upload
```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=websiteguide
```

### websiteguide.io → www 정규화 (필수)
websiteguide.io 존 → **Rules → Redirect Rules** → 조건 `Hostname equals websiteguide.io`
→ Dynamic redirect `concat("https://www.websiteguide.io", http.request.uri.path)` / 301 / Preserve query string

### 배포 후 확인
- `https://www.websiteguide.io/internet-of-things/` 200 응답
- `/sitemap-index.xml`, `/rss.xml` 정상 출력
- Google Search Console에 사이트맵 제출 → 리치 결과 테스트로 TechArticle·FAQ 확인
