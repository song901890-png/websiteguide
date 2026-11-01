export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  updatedDate?: string;
  category: string;
  targetCategoryId: string;
  targetCategoryName: string;
  targetCategorySlug: string;
  title: string;
  summary: string;
  content: string;
  readingTime: string;
  charCount: number;
  seoKeywords: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  internalLinkTop: {
    text: string;
    anchor: string;
    url: string;
    anchorLabel?: string;
    href?: string;
  };
  internalLinkBottom: {
    text: string;
    anchor: string;
    url: string;
    anchorLabel?: string;
    href?: string;
  };


}

export interface NormalizedInternalLink {
  text: string;
  anchor: string;
  url: string;
  anchorLabel: string;
  href: string;
}

/**
 * 초기 5편 데이터(anchor, url)와 스튜디오 발행 데이터(anchorLabel, href) 모두에서
 * 내부 링크 텍스트 및 이동 경로가 안전하게 동작하도록 정규화합니다.
 */
export function normalizeInternalLink(
  link?: {
    text?: string;
    anchor?: string;
    url?: string;
    anchorLabel?: string;
    href?: string;
  } | null,
  fallbackAnchor = '웹사이트가이드 분야별 공식 사이트 디렉터리',
  fallbackUrl = '/'
): NormalizedInternalLink {
  const resolvedAnchor = (link?.anchor || link?.anchorLabel || fallbackAnchor).trim();
  const resolvedUrl = (link?.url || link?.href || fallbackUrl).trim();
  return {
    text: (link?.text || '').trim(),
    anchor: resolvedAnchor,
    url: resolvedUrl,
    anchorLabel: resolvedAnchor,
    href: resolvedUrl,
  };
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
 {
    id: 'blog-6',
    slug: 'ai-tools-official-sites-safe-use-guide',
    date: '2026-11-01',
    updatedDate: '2026-11-01',
    category: 'AI 도구 가이드',
    targetCategoryId: 'ai',
    targetCategoryName: 'AI 도구',
    targetCategorySlug: 'ai-tools',
    title: `AI 도구 공식 사이트 구별법과 안전하게 쓰는 5가지 체크리스트`,
    summary: `ChatGPT·Claude·Gemini 같은 AI 도구의 공식 주소 확인법, 가짜 설치 파일과 확장 프로그램을 피하는 방법, 대화 내용에 넣으면 안 되는 정보와 계정 보안 설정까지 한 번에 정리했습니다.`,
    content: `AI 도구는 공식 주소(chatgpt.com, claude.ai, gemini.google.com 등)나 공식 앱 스토어로만 접속하고, "무료 설치판"이라는 PC 프로그램과 출처가 불분명한 브라우저 확장 프로그램은 설치하지 마세요. 대화창에는 주민등록번호·비밀번호·회사 기밀을 넣지 말고, 계정에는 2단계 인증을 켜 두는 것이 가장 기본적인 안전 수칙입니다.`,
    readingTime: '4분 읽기',
    charCount: 1900,
    seoKeywords: ['AI도구공식사이트', 'ChatGPT공식주소', 'AI사칭사이트', 'AI개인정보보호', 'AI도구비교'],
    internalLinkTop: {
      text: `AI 도구를 처음 쓰거나 새 서비스를 찾을 때는 검색 광고보다 공식 주소 목록에서 바로 접속하는 것이 안전합니다. 주요 AI 서비스의 공식 주소는`,
      anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',
      url: '/'
    },
    sections: [
      {
        heading: `1. AI 도구를 사칭하는 사이트와 프로그램이 늘어나는 이유`,
        paragraphs: [
          `생성형 AI 서비스 이용자가 빠르게 늘면서, 유명 AI 이름을 앞세운 사칭 사이트도 함께 늘었습니다. 검색창에 "ChatGPT 무료", "AI 설치"처럼 입력하면 공식 서비스가 아닌 광고 페이지나 이름이 비슷한 사이트가 먼저 보이는 경우가 있습니다.`,
          `대표적인 수법은 세 가지입니다. 첫째, 공식 서비스와 비슷한 화면을 만들어 로그인 정보를 입력받는 피싱 사이트입니다. 둘째, "PC용 무료 설치판"이라며 실행 파일을 내려받게 한 뒤 악성코드를 심는 방식입니다. 셋째, AI 기능을 준다는 브라우저 확장 프로그램이 방문 기록이나 입력 내용을 몰래 수집하는 경우입니다.`
        ]
      },
      {
        heading: `2. 주요 AI 도구 공식 주소와 접속 습관`,
        paragraphs: [
          `자주 쓰는 AI 서비스의 공식 주소는 다음과 같습니다. ChatGPT는 chatgpt.com, Claude는 claude.ai, Google Gemini는 gemini.google.com, Microsoft Copilot은 copilot.microsoft.com, Perplexity는 perplexity.ai, 네이버 클로바 X는 clova-x.naver.com입니다. 주소창의 도메인 철자를 한 번 확인하고, 처음 접속한 공식 주소를 즐겨찾기에 저장해 두면 이후 검색 광고를 거치지 않아도 됩니다.`,
          `모바일 앱은 반드시 구글 플레이나 애플 앱 스토어에서 개발사 이름을 확인한 뒤 설치하세요. 앱 이름이 비슷해도 개발사가 OpenAI, Anthropic, Google, Microsoft 같은 공식 운영사가 아니라면 설치하지 않는 것이 좋습니다. PC용 데스크톱 앱이 필요하다면 각 서비스 공식 홈페이지의 다운로드 메뉴에서만 받으세요.`
        ]
      },
      {
        heading: `3. 대화창에 넣으면 안 되는 정보`,
        paragraphs: [
          `AI 서비스에 입력한 대화는 서비스 개선이나 안전 점검을 위해 일정 기간 저장될 수 있고, 서비스마다 저장 기간과 활용 범위가 다릅니다. 그래서 주민등록번호, 계좌·카드 번호, 비밀번호, 인증번호 같은 정보는 어떤 AI 서비스에도 입력하지 않는 것이 원칙입니다.`,
          `회사 업무에 쓸 때는 고객 개인정보, 공개 전 실적, 계약서 원문처럼 외부로 나가면 안 되는 자료를 그대로 붙여 넣지 마세요. 이름과 숫자를 가린 뒤 질문하거나, 회사가 계약한 기업용 요금제와 사내 정책이 있는지 먼저 확인하는 것이 안전합니다. 대부분의 서비스는 설정 메뉴에서 대화 기록 보관과 학습 활용 여부를 바꿀 수 있으니 처음 가입할 때 한 번 살펴보세요.`
        ]
      },
      {
        heading: `4. 계정 보안과 결제 사기 예방 5가지 체크리스트`,
        paragraphs: [
          `첫째, 공식 주소나 공식 앱으로만 로그인합니다. 둘째, 계정에 2단계 인증을 켜 둡니다. 셋째, "계정이 정지됩니다", "결제 정보를 갱신하세요" 같은 메일 속 링크는 누르지 말고 앱이나 공식 사이트에 직접 접속해 확인합니다. 넷째, 유료 구독은 공식 사이트나 앱 스토어 결제로만 진행하고, 개인 간 "공유 계정 판매"나 "할인 결제 대행"은 이용하지 않습니다. 다섯째, 출처를 모르는 AI 확장 프로그램은 설치하지 말고, 이미 설치한 확장 프로그램은 권한 목록을 정기적으로 점검합니다.`,
          `공유 계정이나 결제 대행은 계정 정지, 결제 사기, 대화 기록 노출로 이어질 수 있습니다. 비용이 부담된다면 각 서비스의 무료 플랜 범위를 먼저 비교하고, 꼭 필요한 도구 하나만 유료로 쓰는 편이 안전하고 경제적입니다.`
        ]
      },
      {
        heading: `5. 목적별로 AI 도구를 고르는 방법`,
        paragraphs: [
          `글쓰기와 긴 문서 요약, 코드 작성처럼 대화형 작업이 중심이라면 ChatGPT, Claude, Gemini 같은 범용 AI 어시스턴트를 먼저 비교해 보세요. 최신 정보를 출처와 함께 찾고 싶다면 Perplexity처럼 검색 결과를 인용해 주는 서비스가, 한국어 문서 작업에는 클로바 X나 뤼튼 같은 국내 서비스가 편할 수 있습니다.`,
          `이미지·영상·음성 생성, 번역, 프레젠테이션 제작처럼 특정 작업이 목적이라면 해당 분야 전문 도구가 더 효율적입니다. 어떤 도구를 고르든 운영 회사, 데이터 처리 방침, 유료 전환 조건을 확인한 뒤 가입하는 것이 좋습니다. 서비스 기능과 요금은 자주 바뀌므로 결제 전에는 공식 사이트의 최신 안내를 다시 확인하세요.`
        ]
      }
    ],
    internalLinkBottom: {
      text: `ChatGPT, Claude, Gemini, Perplexity 등 AI 도구 30곳의 공식 주소와 운영사, 무료·유료 범위는`,
      anchor: 'AI 도구 공식 사이트 30곳',
      url: '/category/ai-tools/'
    }
  },

  
  {
    id: 'blog-1',
    slug: 'fake-shopping-mall-verification-5-steps',
    date: '2026-10-27',
    updatedDate: '2026-10-31',
    category: '보안·피싱 예방',
    targetCategoryId: 'shopping',
    targetCategoryName: '쇼핑·직구',
    targetCategorySlug: 'shopping',
    title: '가짜 사칭 쇼핑몰 구별법 5단계 및 공식 오픈마켓 도메인 확인 수칙',
    summary: '특가 타임딜을 미끼로 현금 입금을 유도하는 사칭 쇼핑몰이 급증하고 있습니다. 브라우저 주소창의 도메인 철자(.co.kr/.com)와 공정거래위원회 통신판매업 신고번호를 대조하는 실전 5단계 체크리스트를 안내합니다.',
    content: '사칭 쇼핑몰을 판별하려면 첫째, 브라우저 주소창의 최종 도착 도메인(.co.kr, .com)과 SSL(TLS 1.3) 인증서를 확인하고, 둘째, 하단 푸터의 사업자등록번호가 드래그 가능한 텍스트인지 공정거래위원회 통신판매업 신고 데이터와 대조해야 합니다. 신용카드 결제를 막고 무통장 현금 입금만 유도하면 100% 피싱 사이트입니다.',
    readingTime: '4분 읽기',
    charCount: 2180,
    seoKeywords: ['가짜쇼핑몰구별법', '사칭사이트확인', '공식쇼핑몰주소', '통신판매업신고조회', '피싱도메인차단'],
    internalLinkTop: {
      text: '최근 검색엔진 상단이나 SNS 타깃 광고에 유명 백화점·오픈마켓 로고를 그대로 도용한 사칭 피싱 사이트가 빈번히 노출되고 있습니다. 일상적인 온라인 장보기와 해외직구를 이용할 때는 매번 불확실한 검색 결과를 클릭하기보다 운영 주체가 확인된',
      anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      anchorLabel: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      url: '/',

      href: '/'
    },
    sections: [
      {
        heading: '1. 왜 사칭 쇼핑몰 피해가 끊이지 않는가? (타이포스쿼팅과 신규 gTLD 악용)',
        paragraphs: [
          '사이버 피싱 조직은 소비자가 유명 브랜드 로고와 깔끔한 웹 디자인만 보고 신뢰한다는 심리를 악용합니다. 특히 쿠팡(coupang.com), 11번가(11st.co.kr), 다나와(danawa.com) 등 대형 커머스 플랫폼의 철자를 미묘하게 비튼 타이포스쿼팅(Typosquatting) 도메인이나, 등록 비용이 저렴한 .shop, .top, .vip, .buzz 같은 신규 일반 최상위 도메인(gTLD)을 대량 생성해 검색 광고나 문자 스미싱으로 유포합니다.',
          '이러한 가짜 사이트는 정상적인 오픈마켓의 상품 상세페이지 이미지를 크롤링하여 시중가보다 40~70% 저렴한 "한정 수량 타임딜"로 위장합니다. 사용자가 급한 마음에 주문을 시도하면 시스템 점검을 핑계로 신용카드 결제를 차단하고, 현금 영수증이나 에스크로(구매안전서비스) 적용이 불가능한 대포통장 무통장 입금만을 유도한 뒤 연락을 두절하는 패턴을 보입니다.'
        ]
      },
      {
        heading: '2. 3초 만에 판별하는 공식 오픈마켓 도메인 & SSL 인증서 점검 5단계',
        paragraphs: [
          '첫째, 브라우저 주소창의 최종 도착 도메인(Final URL)을 반드시 확인하십시오. 국내 정식 오픈마켓과 종합몰은 .co.kr 또는 .com 도메인을 사용하며, 다단계 리다이렉트 체인(Redirect Chain)을 거쳐 생소한 하위 도메인으로 이동하지 않습니다. 주소창 좌측의 자물쇠 아이콘을 클릭해 유효한 HTTPS(TLS 1.3) 암호화 인증서가 발급되어 있는지 점검해야 합니다.',
          '둘째, 웹사이트 최하단 푸터(Footer)에 기재된 사업자등록번호와 통신판매업 신고번호를 확인하십시오. 사칭 사이트는 타 기업의 사업자번호를 무단 도용하여 이미지 형태로 박아 넣는 경우가 많습니다. 텍스트 드래그가 되지 않는 이미지형 푸터는 즉시 의심해야 하며, 공정거래위원회 공식 웹사이트에서 실제 도메인 주소와 등록 법인명이 일치하는지 대조해야 합니다.',
          '셋째, 결제 수단의 다양성과 에스크로(Escrow) 적용 여부를 체크하십시오. 전자상거래법상 정식 쇼핑몰은 신용카드, 간편결제(네이버페이·토스페이·카카오페이), 그리고 현금 결제 시 결제대금예치제(에스크로)를 의무적으로 제공해야 합니다. 가상계좌가 아닌 개인 명의 또는 낯선 법인 명의 계좌로 직접 송금을 요구한다면 100% 사칭 피싱 사이트입니다.'
        ]
      },
      {
        heading: '3. 사칭 피해를 원천 차단하는 가장 확실한 디지털 습관',
        paragraphs: [
          '피싱 범죄로부터 자산을 보호하는 가장 확실한 방법은 검증된 공식 도메인만을 모아둔 디지털 주소 안내소를 브라우저 시작페이지나 모바일 바탕화면 앱(PWA)으로 고정해 두는 것입니다. 웹사이트가이드는 운영 주체가 확인된 공식 쇼핑몰 주소만 등재하고, 오류 제보가 들어오면 공식 출처를 확인해 수정합니다.',
          '의심스러운 쇼핑몰 링크를 발견했다면 결제하기 전에 구글 세이프 브라우징 투명성 보고서나 바이러스토탈(VirusTotal)에서 URL을 먼저 검사하고, 피해가 생기면 경찰청 사이버범죄 신고시스템(ECRM)에 신고하세요.'
        ]
      }
    ],
    internalLinkBottom: {
      text: '쿠팡, 11번가, 다나와 등 대표 쇼핑 플랫폼의 공식 주소와 가입·결제 조건은',
      anchor: '쇼핑·직구 공식 사이트 30곳',

      anchorLabel: '쇼핑·직구 공식 사이트 30곳',

      url: '/category/shopping/',

      href: '/category/shopping/'
    }
  },
  {
    id: 'blog-2',
    slug: 'official-sports-streaming-schedule-safety-guide',
    date: '2026-10-25',
    updatedDate: '2026-10-31',
    category: '스포츠·미디어',
    targetCategoryId: 'sports',
    targetCategoryName: '스포츠중계',
    targetCategorySlug: 'sports',
    title: '프로스포츠(KBO·해외축구·MLB) 경기 일정 및 공식 중계 사이트 확인법',
    summary: '비공식 중계 스트리밍 접속 시 발생하는 브라우저 푸시 알림 스팸(Adware) 감염을 차단하고, 네이버 스포츠·쿠팡플레이·티빙 등 공식 중계 플랫폼을 안전하게 이용하는 가이드입니다.',
    content: '해외축구·MLB·KBO 중계권을 보유한 네이버 스포츠, 쿠팡플레이, 티빙 공식 주소를 북마크해 두면 악성 채굴 스크립트나 강제 리다이렉트 없이 1080p~4K 생중계 및 무료 하이라이트를 안전하게 시청할 수 있습니다. 브라우저 알림 허용 팝업을 유도하는 비공식 스트리밍 사이트는 즉시 차단하십시오.',
    readingTime: '4분 읽기',
    charCount: 2120,
    seoKeywords: ['스포츠중계사이트', '해외축구중계공식', 'KBO야구중계', '브라우저알림스팸차단', '안전한스트리밍'],
    internalLinkTop: {
      text: '유럽 축구 빅매치(엘클라시코, 프리미어리그)나 코리안 메이저리거 출전 경기, KBO 포스트시즌 기간마다 무료 중계 링크를 찾는 검색량이 폭발적으로 증가합니다. 악성 광고 스크립트 없는 쾌적한 시청을 원하신다면',
      anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      anchorLabel: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      url: '/',

      href: '/'
    },
    sections: [
      {
        heading: '1. 비공식 스포츠 중계 사이트의 숨겨진 보안 위협 (Push Adware & 채굴 스크립트)',
        paragraphs: [
          '검색엔진에서 자극적인 무료 스포츠중계 키워드로 노출되는 비공식 스트리밍 사이트들은 동영상 플레이어 위에 투명한 오버레이 광고 레이어를 겹쳐 놓습니다. 사용자가 전체화면 버튼을 누르는 순간 의도치 않게 외부 악성 도메인으로 강제 리다이렉트(Forced Redirect)되며, 스마트폰이나 PC의 CPU 자원을 몰래 점유하는 브라우저 기반 암호화폐 채굴 스크립트가 실행될 위험이 높습니다.',
          '특히 "고화질 영상을 재생하려면 로봇이 아님을 증명하세요(알림 허용 클릭)"라는 가짜 시스템 팝업은 대표적인 브라우저 푸시 스팸(Push Notification Malware) 감염 수법입니다. 한 번 허용을 누르면 브라우저를 닫아도 윈도우 우측 하단이나 안드로이드 알림창에 성인·도박·피싱 광고가 24시간 내내 쏟아지게 됩니다.'
        ]
      },
      {
        heading: '2. 종목별 대한민국 공식 중계권 보유 플랫폼 완벽 정리',
        paragraphs: [
          '현재 국내외 주요 프로스포츠는 합법 OTT 및 포털 플랫폼을 통해 초고화질(1080p~4K) 중계와 실시간 문자 중계, 경기 직후 무료 하이라이트 클립을 제공하고 있습니다. 첫째, 네이버 스포츠(sports.news.naver.com)는 KBO, 해외축구, MLB, e스포츠(LCK·롤드컵)의 전체 경기 일정표와 실시간 스코어보드, 공식 하이라이트 영상을 비회원에게도 100% 무료로 제공합니다.',
          '둘째, 쿠팡플레이(coupangplay.com)는 스페인 라리가, 독일 분데스리가, 국가대표 A매치 및 주요 모터스포츠 경기를 쿠팡 와우 멤버십 회원에게 추가 비용 없이 생중계합니다. 셋째, 티빙(tving.com)은 KBO 프로야구 전 경기 생중계와 멀티뷰 기능, 타임머신 돌려보기 기능을 공식 지원합니다.'
        ]
      },
      {
        heading: '3. 이미 감염된 브라우저 알림 스팸을 1분 만에 제거하는 방법',
        paragraphs: [
          '만약 비공식 사이트에 접속했다가 원치 않는 알림 팝업이 계속 뜬다면, 크롬(Chrome) 기준 우측 상단 메뉴(⋮) ➔ [설정] ➔ [개인정보 보호 및 보안] ➔ [사이트 설정] ➔ [알림] 메뉴로 이동하십시오. 이후 "알림 전송이 허용됨" 목록에서 알 수 없는 영문·숫자 조합 도메인을 찾아 모두 [차단] 또는 [삭제] 처리하면 즉시 스팸 알림이 중단됩니다.'
        ]
      }
    ],
    internalLinkBottom: {
      text: '오늘 열리는 국내외 주요 경기 일정 조회와 공식 중계 플랫폼 바로가기 링크는',
      anchor: '스포츠 공식 사이트 30곳',

      anchorLabel: '스포츠 공식 사이트 30곳',

      url: '/category/sports/',

      href: '/category/sports/'
    }
  },
  {
    id: 'blog-3',
    slug: 'ott-and-ai-subscription-comparison-checklist-2026',
    date: '2026-10-23',
    updatedDate: '2026-10-31',
    category: '구독 체크리스트',
    targetCategoryId: 'ott',
    targetCategoryName: '영상·OTT',
    targetCategorySlug: 'ott',
    title: '2026 OTT 및 생성형 AI 도구 구독 전 필수 요금·해지 조건 비교 체크리스트',
    summary: '넷플릭스, 티빙, 유튜브 프리미엄부터 ChatGPT Plus, Claude Pro까지 무료 플랜 제공 범위와 멤버십 결합 할인 혜택을 사전에 비교하여 디지털 구독료를 40% 절감하세요.',
    content: 'ChatGPT, Claude, Gemini 등 생성형 AI는 무료 플랜 일일 쿼터를 먼저 비교한 뒤 주력 도구 1종만 유료 구독하고, 넷플릭스·티빙·유튜브 등 OTT는 광고형 요금제 및 쿠팡 와우·네이버 플러스 멤버십 제휴 혜택을 결합하면 월 고정 구독료를 40% 이상 절감할 수 있습니다.',
    readingTime: '5분 읽기',
    charCount: 2240,
    seoKeywords: ['OTT요금제비교', 'AI도구비교', '챗GPT무료유료차이', '클로드프로구독', '디지털구독료절감'],
    internalLinkTop: {
      text: '영상 스트리밍(OTT)과 생성형 AI 어시스턴트가 일상과 업무의 필수 인프라로 자리 잡으면서 가계 디지털 구독료 부담도 함께 커지고 있습니다. 각 플랫폼의 공식 요금 정책과 무료 플랜 범위를 한눈에 대조하려면',
      anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      anchorLabel: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      url: '/',

      href: '/'
    },
    sections: [
      {
        heading: '1. 영상·OTT 플랫폼 4대장(넷플릭스·유튜브·티빙·쿠팡플레이) 요금 및 결합 전략',
        paragraphs: [
          'OTT 서비스를 개별 정가로 모두 구독하면 월 5만 원 이상이 소요됩니다. 비용을 아끼는 첫 번째 원칙은 "광고형 스탠다드 요금제"와 "커머스 멤버십 결합"을 활용하는 것입니다. 넷플릭스(netflix.com)와 티빙(tving.com)은 일반 요금제 대비 약 35~45% 저렴한 광고형 요금제를 운영하면서도 1080p Full HD 화질과 동시 접속 2인을 그대로 지원합니다.',
          '또한 쿠팡 와우 멤버십을 이용 중이라면 쿠팡플레이(coupangplay.com)가 무료로 포함되며, 통신사(SKT 우주패스, KT, LG U+) 요금제 부가서비스나 네이버 플러스 멤버십 제휴 옵션을 활용하면 티빙이나 유튜브 프리미엄 구독료를 크게 낮출 수 있습니다.'
        ]
      },
      {
        heading: '2. 생성형 AI 도구(ChatGPT·Claude·Gemini·Perplexity) 목적별 선택 기준',
        paragraphs: [
          'AI 도구는 모든 서비스를 유료($20/월)로 구독할 필요가 전혀 없습니다. 각 AI 모델은 무료 플랜에서도 고성능 추론 모델을 일정 횟수 제공하므로, 본인의 주력 업무에 맞는 1개 서비스만 유료로 유지하고 나머지는 무료 공식 사이트를 북마크해 교차 사용하는 것이 가장 현명합니다.',
          '구체적으로 코드 생성과 긴 한국어 보고서 작성 및 PDF 논문 분석이 주 목적이라면 Claude(claude.ai)가 높은 만족도를 제공하며, 데이터 시각화·음성 대화·이미지 생성 등 올라운드 활용에는 ChatGPT(chatgpt.com)가 유리합니다. 실시간 최신 뉴스 팩트체크와 출처 논문 링크 확인이 필요할 때는 Perplexity(perplexity.ai) 무료 검색을 병행하십시오.'
        ]
      },
      {
        heading: '3. 구독 해지 방어(다크패턴) 및 계정 공유 사칭 사이트 주의보',
        paragraphs: [
          '해외 AI 서비스나 글로벌 OTT를 구독할 때는 반드시 인앱 결제(수수료 15~30% 가산 위험) 대신 공식 웹 도메인(PC/모바일 브라우저)에 직접 접속해 결제해야 최저가가 적용되며 해지 절차도 간편합니다. 아울러 비공식 계정 공유 중개 사이트 중 일부는 먹튀나 계정 정지 위험이 있으므로 공식 가족 결합 또는 정식 요금제를 권장합니다.'
        ]
      }
    ],
    internalLinkBottom: {
      text: '넷플릭스, 티빙, ChatGPT, Claude 등 검증된 공식 스트리밍 및 AI 도구의 최신 도메인과 가입 조건 비교는',
      anchor: '영상·OTT 공식 사이트 30곳',

      anchorLabel: '영상·OTT 공식 사이트 30곳',

      url: '/category/ott/',

      href: '/category/ott/'
    }
  },
  {
    id: 'blog-4',
    slug: 'public-gov-portal-smishing-prevention-guide',
    date: '2026-10-20',
    updatedDate: '2026-10-31',
    category: '공공·금융 보안',
    targetCategoryId: 'public',
    targetCategoryName: '정부·공공',
    targetCategorySlug: 'public',
    title: '정부24·홈택스·건강보험공단 사칭 스미싱 문자 판별 및 공식 도메인(.go.kr) 확인법',
    summary: '연말정산 환급금 조회, 건강검진 결과 통보, 과태료 고지서를 사칭한 공공기관 스미싱 문자가 기승을 부리고 있습니다. 대한민국 정부 공식 도메인 체계와 비수수료 민원 발급 원칙을 설명합니다.',
    content: '대한민국 행정·공공기관은 주로 .go.kr(정부24 gov.kr, 홈택스 hometax.go.kr) 또는 .or.kr(국민건강보험공단 nhis.or.kr) 도메인을 사용합니다. 문자 내 단축 URL(bit.ly 등)이나 .com/.xyz 링크는 100% 스미싱이며, 정부24 온라인 민원서류 발급은 대행 수수료 없이 무료로 제공됩니다.',
    readingTime: '4분 읽기',
    charCount: 2050,
    seoKeywords: ['정부24공식주소', '홈택스사칭문자', '건강보험공단스미싱', '주민등록등본무료발급', '공공기관공식주소'],
    internalLinkTop: {
      text: '국세청 세금 환급, 건강검진 대상자 조회, 교통법규 과태료 납부 등 국민의 일상 행정과 직결된 키워드를 노린 스미싱(Smishing) 범죄가 갈수록 정교해지고 있습니다. 행정·세무 민원을 처리할 때는 문자 메시지 내 단축 URL을 절대 누르지 말고',
      anchor: '웹사이트가이드 정부·공공 공식 사이트',

      anchorLabel: '웹사이트가이드 정부·공공 공식 사이트',

      url: '/',

      href: '/'
    },
    sections: [
      {
        heading: '1. 대한민국 정부·공공기관 공식 최상위 도메인(.go.kr / .or.kr / .kr) 원칙',
        paragraphs: [
          '대한민국 중앙행정기관과 지방자치단체는 정부 도메인 관리 지침에 따라 오직 .go.kr 또는 정부 통합 도메인인 gov.kr만을 공식 주소로 사용합니다. 예를 들어 국세청 홈택스는 hometax.go.kr이며, 대법원 인터넷등기소는 iros.go.kr, 복지로 포털은 bokjiro.go.kr입니다. 국민건강보험공단(nhis.or.kr)과 같은 공단·공공기관은 .or.kr 체계를 따릅니다.',
          '따라서 문자나 카카오톡으로 수신된 안내 메시지에 bit.ly 같은 단축 주소나 .com, .net, .site, .xyz 확장자가 포함되어 있다면 이는 100% 개인정보 탈취 및 원격제어 앱 설치를 노린 스미싱 범죄입니다.'
        ]
      },
      {
        heading: '2. 온라인 민원서류 발급 수수료 결제 유도 대행 사이트 주의',
        paragraphs: [
          '포털 검색창에 "주민등록등본 발급"이나 "가족관계증명서 출력"을 검색했을 때 상단 스폰서 광고 영역에 노출되는 일부 민간 대행 사이트들은 정부24와 유사한 인터페이스를 갖추고 수천 원에서 수만 원의 대행 수수료 결제를 유도합니다.',
          '행정안전부가 운영하는 정부24(gov.kr)와 대법원 전자가족관계등록시스템에서는 주민등록등초본, 가족관계증명서, 건강보험 자격득실확인서 등 대다수 핵심 민원서류를 온라인에서 100% 무료로 즉시 발급(PDF 저장 및 인쇄)받을 수 있습니다.'
        ]
      },
      {
        heading: '3. 안전한 공공·금융 서비스 이용을 위한 북마크 고정 수칙',
        paragraphs: [
          '공동인증서, 금융인증서, 또는 민간 간편인증(카카오·토스·PASS)을 호출하는 공공기관 사이트는 반드시 브라우저 즐겨찾기나 웹사이트가이드의 [내 북마크]에 저장해 둔 공식 링크로 접속하세요. 접속할 때마다 주소창의 도메인(.go.kr 등)과 자물쇠 아이콘을 확인하는 습관이 파밍(Pharming) 피해를 줄이는 가장 쉬운 방법입니다.'
        ]
      }
    ],
    internalLinkBottom: {
      text: '정부24, 국세청 홈택스, 국민건강보험공단, 대법원 등기소 등 필수 행정 포털의 정확한 공식 도메인은',
      anchor: '정부·공공 공식 사이트 30곳',

      anchorLabel: '정부·공공 공식 사이트 30곳',

      url: '/category/public/',

      href: '/category/public/'
    }
  },
  {
    id: 'blog-5',
    slug: 'dns-connection-error-cloudflare-doh-setup-guide',
    date: '2026-10-18',
    updatedDate: '2026-10-31',
    category: '기술·네트워크 가이드',
    targetCategoryId: 'portal',
    targetCategoryName: '검색·포털',
    targetCategorySlug: 'search',
    title: '웹사이트 접속 불가·지연 시 클라우드플레어(1.1.1.1) DNS 및 DoH 보안 연결 설정 완벽 가이드',
    summary: '정상적인 해외 웹사이트나 AI 서비스가 갑자기 열리지 않거나 로딩이 느려질 때, 별도의 유료 VPN 없이 브라우저 DNS over HTTPS(DoH) 설정만으로 속도와 보안을 동시에 개선하는 방법입니다.',
    content: '해외 사이트나 AI 서비스 접속 지연(ERR_NAME_NOT_RESOLVED) 발생 시 크롬·엣지·사파리 설정의 [보안 DNS 사용(DoH)]에서 Cloudflare(1.1.1.1) 또는 Google Public DNS를 선택하면 별도 VPN 설치 없이도 초기 응답 속도(TTFB)와 도메인 프라이버시가 즉각 개선됩니다.',
    readingTime: '5분 읽기',
    charCount: 2190,
    seoKeywords: ['사이트접속안될때', 'DNS설정방법', '클라우드플레어1.1.1.1', '시크릿DNS활성화', '공식주소북마크'],
    internalLinkTop: {
      text: '정상적으로 운영 중인 글로벌 웹사이트나 클라우드 생산성 도구가 간혹 통신사(ISP) 기본 DNS 서버의 일시적 응답 지연이나 캐시 오염으로 인해 접속되지 않는 경우가 발생합니다. 도메인 자체의 생존 여부와 표준 301 이동 경로를 먼저 확인하려면',
      anchor: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      anchorLabel: '웹사이트가이드 분야별 공식 사이트 디렉터리',

      url: '/',

      href: '/'
    },
    sections: [
      {
        heading: '1. 사이트 접속 오류의 3대 원인: 도메인 이전(301), 서버 장애, 그리고 DNS 응답 지연',
        paragraphs: [
          '평소 즐겨 찾던 웹사이트에 접속했을 때 "사이트에 연결할 수 없음(ERR_NAME_NOT_RESOLVED)" 오류가 표시된다면 원인은 크게 세 가지입니다. 첫째는 서비스 운영사가 브랜드 개편을 통해 도메인 주소를 변경(예: chat.openai.com ➔ chatgpt.com)했음에도 사용자가 구버전 북마크로 접속한 경우이고, 둘째는 대상 웹 서버의 일시적 점검입니다.',
          '셋째로 가장 빈번한 원인은 사용자의 기기가 참조하는 통신사 기본 DNS(Domain Name System) 서버가 도메인 이름을 IP 주소로 변환하는 과정에서 지연을 일으키는 현상입니다. 이 경우 네트워크 설정을 글로벌 고속 퍼블릭 DNS로 변경하면 즉각 해결됩니다.'
        ]
      },
      {
        heading: '2. 크롬·엣지·사파리 브라우저에서 보안 DNS(DNS over HTTPS, DoH) 10초 설정법',
        paragraphs: [
          '별도의 프로그램을 설치할 필요 없이 최신 웹 브라우저에 내장된 보안 DNS(DoH) 기능을 켜기만 하면 DNS 질의 패킷이 HTTPS로 암호화되어 속도와 프라이버시가 동시에 향상됩니다. 크롬(Chrome) 브라우저 기준 우측 상단 메뉴(⋮) ➔ [설정] ➔ [개인정보 보호 및 보안] ➔ [보안] 탭으로 이동합니다.',
          '하단의 "보안 DNS 사용(Use secure DNS)" 스위치를 켜고, 서비스 공급자 드롭다운 메뉴에서 [Cloudflare (1.1.1.1)] 또는 [Google (Public DNS)]을 선택하십시오. 통신사 DNS에 일시적인 장애가 있을 때 접속 문제가 해결되는 경우가 많고, DNS 조회 내용이 암호화되어 프라이버시도 보호됩니다.'
        ]
      },
      {
        heading: '3. 서비스 주소가 바뀌었을 때 안전하게 새 주소 찾는 법',
        paragraphs: [
          '정상적인 서비스는 도메인을 바꿀 때 기존 주소에서 새 주소로 자동 이동(301 리다이렉트)시키고, 공식 앱·공지사항으로 변경 사실을 알립니다. 반대로 "새 주소"를 문자나 메신저로만 알리는 경우는 사칭일 가능성이 높으니, 공식 앱이나 웹사이트가이드 같은 공식 주소 목록에서 다시 확인한 뒤 즐겨찾기를 고쳐 두세요.'
        ]
      }
    ],
    internalLinkBottom: {
      text: '구글, 네이버 등 필수 검색·포털 서비스의 공식 주소는',
      anchor: '검색·포털 공식 사이트 30곳',

      anchorLabel: '검색·포털 공식 사이트 30곳',

      url: '/category/search/',

      href: '/category/search/'
    }
  }
];
