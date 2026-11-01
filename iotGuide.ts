// /internet-of-things/ 아카이브 복원 가이드 콘텐츠 데이터
// 원본 아카이브 URL을 동일 경로로 복원: https://www.websiteguide.io/internet-of-things/

export const IOT_META = {
  slug: 'internet-of-things',
  title: '사물인터넷(IoT) 가이드: 구조·통신 프로토콜·보안 인프라 총정리 | 웹사이트가이드',
  h1: '사물인터넷(Internet of Things, IoT) 기술 개요 및 인프라 아카이브 가이드',
  description:
    '사물인터넷(IoT)의 정의와 4계층 아키텍처, Wi-Fi·BLE·Thread·LoRaWAN·NB-IoT 통신 비교, MQTT·CoAP 프로토콜, 엣지 컴퓨팅, 보안 인증 제도와 가정용 IoT 보안 체크리스트까지 한 페이지에 정리한 기술 가이드입니다.',
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  readingTime: '약 12분',
  keywords: [
    '사물인터넷', 'IoT', 'Internet of Things', 'IoT 아키텍처', 'IoT 프로토콜',
    'MQTT', 'CoAP', 'LoRaWAN', 'NB-IoT', 'Matter', '엣지 컴퓨팅', 'IoT 보안',
    'IIoT', '스마트홈',
  ],
};

export interface IotSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: { term: string; desc: string }[];
}

export const IOT_INTRO_SECTIONS: IotSection[] = [
  {
    id: 'what-is-iot',
    heading: '사물인터넷(IoT)이란 무엇인가',
    paragraphs: [
      '사물인터넷(Internet of Things, IoT)은 센서·액추에이터·통신 모듈을 갖춘 물리적 사물이 네트워크에 연결되어 데이터를 수집·교환하고, 그 데이터를 근거로 사람의 개입을 최소화한 채 동작하는 기술 체계를 말합니다. 온도계·전력량계·도어락·공장 설비·차량·농업용 토양 센서처럼 원래 “말이 없던” 사물이 상태를 보고하고 원격 명령을 받는 것이 핵심입니다.',
      '이 용어는 1999년 케빈 애시턴(Kevin Ashton)이 RFID 기반 공급망 관리를 설명하며 처음 사용한 것으로 알려져 있습니다. 이후 저전력 반도체, 저렴한 무선 통신, 클라우드 컴퓨팅이 함께 성숙하면서 IoT는 스마트홈·산업 자동화·스마트시티·헬스케어 전반의 기반 인프라로 자리 잡았습니다.',
      'IoT를 단일 제품이 아니라 “기기 – 네트워크 – 플랫폼 – 애플리케이션”이 맞물린 인프라로 이해해야 설계·운영·보안 판단을 정확히 내릴 수 있습니다. 아래에서는 이 구조를 계층별로 나누어 설명합니다.',
    ],
  },
];

export interface IotLayer {
  no: number;
  name: string;
  en: string;
  role: string;
  examples: string;
}

export const IOT_LAYERS: IotLayer[] = [
  {
    no: 1,
    name: '디바이스(인지) 계층',
    en: 'Perception / Device Layer',
    role: '센서로 온도·습도·진동·위치 등 물리량을 측정하고, 액추에이터로 모터·밸브·릴레이를 제어합니다. MCU(마이크로컨트롤러)와 펌웨어가 이 계층에서 동작합니다.',
    examples: '온습도 센서, 스마트 플러그, PLC, 웨어러블, RFID 태그',
  },
  {
    no: 2,
    name: '네트워크(연결) 계층',
    en: 'Network / Connectivity Layer',
    role: '디바이스 데이터를 게이트웨이나 인터넷으로 전달합니다. 전송 거리·전력 소모·대역폭 요구에 따라 근거리 무선, 저전력 광역망(LPWAN), 셀룰러 중 하나를 선택합니다.',
    examples: 'Wi-Fi, BLE, Zigbee, Thread, LoRaWAN, NB-IoT, LTE-M, 5G',
  },
  {
    no: 3,
    name: '엣지·플랫폼 계층',
    en: 'Edge & Platform Layer',
    role: '게이트웨이·엣지 서버에서 1차 필터링과 실시간 판단을 수행하고, 클라우드 IoT 플랫폼이 기기 등록·인증, 메시지 브로커, 데이터 저장, 원격 펌웨어 업데이트(OTA)를 관리합니다.',
    examples: 'MQTT 브로커, 디바이스 레지스트리, 시계열 DB, OTA 서버',
  },
  {
    no: 4,
    name: '애플리케이션 계층',
    en: 'Application Layer',
    role: '수집된 데이터를 대시보드·알림·자동화 규칙·AI 분석으로 가공해 사용자 가치로 전환합니다. 예지 정비, 에너지 최적화, 원격 모니터링이 대표적입니다.',
    examples: '스마트홈 앱, 설비 예지보전, 스마트 미터링, 원격 환자 모니터링',
  },
];

export interface ConnectivityRow {
  tech: string;
  range: string;
  power: string;
  bandwidth: string;
  useCase: string;
}

export const IOT_CONNECTIVITY: ConnectivityRow[] = [
  { tech: 'Wi-Fi (802.11n/ax)', range: '수십 m', power: '높음', bandwidth: '높음 (수십 Mbps 이상)', useCase: '카메라, 가전, 상시 전원 기기' },
  { tech: 'Bluetooth Low Energy', range: '~수십 m', power: '매우 낮음', bandwidth: '낮음~중간', useCase: '웨어러블, 비컨, 초기 기기 설정' },
  { tech: 'Zigbee', range: '~수십 m (메시)', power: '낮음', bandwidth: '낮음 (250 kbps)', useCase: '조명, 센서 기반 스마트홈' },
  { tech: 'Thread (+Matter)', range: '~수십 m (IPv6 메시)', power: '낮음', bandwidth: '낮음 (250 kbps)', useCase: '제조사 간 호환 스마트홈' },
  { tech: 'LoRaWAN', range: '수 km~10 km 이상', power: '매우 낮음', bandwidth: '매우 낮음 (kbps 단위)', useCase: '스마트 농업, 원격 검침, 환경 센서' },
  { tech: 'NB-IoT / LTE-M', range: '셀룰러 커버리지', power: '낮음', bandwidth: '낮음~중간', useCase: '스마트 미터, 자산 추적, 공공 인프라' },
  { tech: '5G (RedCap 포함)', range: '셀룰러 커버리지', power: '중간~높음', bandwidth: '높음', useCase: '산업용 로봇, 커넥티드카, 영상 IoT' },
];

export interface ProtocolRow {
  name: string;
  transport: string;
  model: string;
  summary: string;
}

export const IOT_PROTOCOLS: ProtocolRow[] = [
  {
    name: 'MQTT',
    transport: 'TCP (TLS)',
    model: '발행/구독 (Pub/Sub)',
    summary: 'OASIS 표준 경량 메시징 프로토콜. 브로커를 중심으로 토픽 단위로 메시지를 주고받으며, QoS 0/1/2 단계로 전달 보장 수준을 선택합니다. 불안정한 네트워크의 텔레메트리 수집에 가장 널리 쓰입니다.',
  },
  {
    name: 'CoAP',
    transport: 'UDP (DTLS)',
    model: '요청/응답 (REST)',
    summary: 'IETF RFC 7252로 정의된 제약 기기용 웹 전송 프로토콜. GET/PUT/POST/DELETE 의미 체계를 유지하면서 헤더를 최소화해 메모리와 전력이 부족한 센서 노드에 적합합니다.',
  },
  {
    name: 'HTTP/HTTPS',
    transport: 'TCP (TLS)',
    model: '요청/응답 (REST)',
    summary: '범용성과 방화벽 친화성이 장점이지만 헤더 오버헤드가 커서 배터리 기기의 상시 통신에는 비효율적입니다. 상시 전원 기기와 클라우드 API 연동에 주로 사용합니다.',
  },
  {
    name: 'AMQP',
    transport: 'TCP (TLS)',
    model: '메시지 큐',
    summary: '라우팅·트랜잭션·신뢰 전달을 지원하는 엔터프라이즈 메시징 프로토콜. 디바이스보다는 게이트웨이–백엔드 시스템 간 연동에 많이 쓰입니다.',
  },
  {
    name: 'LwM2M',
    transport: 'CoAP 기반',
    model: '디바이스 관리',
    summary: 'OMA SpecWorks가 정의한 경량 디바이스 관리 표준. 원격 설정, 펌웨어 업데이트, 상태 모니터링을 표준 객체 모델로 처리합니다.',
  },
];

export const IOT_EDGE_SECTION: IotSection = {
  id: 'edge-vs-cloud',
  heading: '엣지 컴퓨팅과 클라우드: 어디에서 처리할 것인가',
  paragraphs: [
    '모든 센서 데이터를 클라우드로 올리면 통신 비용과 지연 시간이 커지고, 네트워크가 끊기면 제어가 멈춥니다. 그래서 현대 IoT 인프라는 기기 가까운 곳(게이트웨이·엣지 서버)에서 1차 처리를 하고, 장기 저장과 대규모 분석만 클라우드에서 수행하는 하이브리드 구조를 택합니다.',
    '판단 기준은 단순합니다. 수 밀리초 안에 반응해야 하는 제어(설비 비상 정지, 로봇 충돌 회피), 개인정보가 담긴 원본 영상, 대용량 고빈도 데이터는 엣지에서 처리합니다. 여러 사이트를 가로지르는 통계, 머신러닝 모델 학습, 장기 이력 보관은 클라우드가 유리합니다.',
  ],
  bullets: [
    { term: '엣지 처리', desc: '저지연 제어, 데이터 필터링·압축, 오프라인 자율 동작, 원본 데이터 현장 보관' },
    { term: '클라우드 처리', desc: '전사 대시보드, 장기 이력 분석, AI 모델 학습·배포, 기기 플릿(fleet) 관리' },
    { term: '공통 요구', desc: '기기별 고유 인증서, 암호화 전송(TLS/DTLS), 서명된 OTA 펌웨어 배포' },
  ],
};

export const IOT_SECURITY_SECTION: IotSection = {
  id: 'iot-security',
  heading: 'IoT 보안 위협과 국제 인증·규제 동향',
  paragraphs: [
    'IoT 기기는 오랜 기간 현장에 방치되고, 연산 자원이 작으며, 사용자가 업데이트를 신경 쓰지 않는 경우가 많아 공격 표면이 넓습니다. 2016년 Mirai 봇넷은 기본 계정·비밀번호가 바뀌지 않은 카메라와 공유기를 대량 감염시켜 대규모 DDoS 공격을 일으켰고, 이 사건 이후 각국은 IoT 보안을 제도화하기 시작했습니다.',
    '대표적인 기준으로 유럽의 ETSI EN 303 645(소비자 IoT 보안 기준), 영국 PSTI 법(기본 비밀번호 금지, 취약점 신고 창구·보안 지원 기간 공개 의무), EU 사이버 회복력법(Cyber Resilience Act), 미국 FCC의 U.S. Cyber Trust Mark 라벨링 제도가 있습니다. 국내에서는 한국인터넷진흥원(KISA)이 IoT 보안인증 제도를 운영하고 있습니다. 구매·도입 시 이러한 인증 여부와 제조사의 보안 업데이트 지원 기간을 확인하는 것이 좋습니다.',
  ],
  bullets: [
    { term: '기본·취약 비밀번호', desc: '공장 출하 기본 계정이 그대로 남아 원격 탈취의 가장 흔한 원인이 됩니다.' },
    { term: '미패치 펌웨어', desc: '보안 업데이트가 중단된 기기는 알려진 취약점에 계속 노출됩니다.' },
    { term: '평문 통신', desc: '암호화되지 않은 MQTT·HTTP 트래픽은 도청·변조에 취약합니다.' },
    { term: '과도한 외부 노출', desc: 'UPnP·포트포워딩으로 관리 페이지가 인터넷에 직접 열려 있는 경우가 많습니다.' },
    { term: '공급망 위험', desc: '검증되지 않은 서드파티 SDK·클라우드 의존성이 숨은 백도어가 될 수 있습니다.' },
  ],
};

export const IOT_CHECKLIST: string[] = [
  '기기 설치 직후 기본 관리자 비밀번호를 길고 고유한 비밀번호로 변경하고, 제조사 앱 계정에 2단계 인증을 켭니다.',
  '공유기에서 IoT 기기 전용 게스트 네트워크(또는 VLAN)를 분리해 PC·스마트폰과 같은 망에 두지 않습니다.',
  '공유기의 UPnP 자동 포트 개방 기능을 끄고, 불필요한 원격 접속(포트포워딩)을 제거합니다.',
  '펌웨어 자동 업데이트를 활성화하고, 보안 지원 기간이 끝난 기기는 교체 계획을 세웁니다.',
  '제조사 앱·펌웨어는 반드시 공식 홈페이지 또는 공식 앱 마켓에서만 내려받고, 문자·메신저로 받은 링크는 열지 않습니다.',
  'KISA IoT 보안인증, Matter 인증 등 공인 인증 표시와 제조사 개인정보 처리방침을 구매 전에 확인합니다.',
  '사용하지 않는 기기는 공장 초기화 후 계정에서 연결 해제하고, 중고 판매 전에도 반드시 초기화합니다.',
];

export interface UseCase {
  icon: string;
  title: string;
  desc: string;
}

export const IOT_USE_CASES: UseCase[] = [
  { icon: '🏠', title: '스마트홈', desc: '조명·난방·도어락·가전을 앱과 음성으로 제어하고, Matter 표준으로 제조사 간 호환성이 개선되고 있습니다.' },
  { icon: '🏭', title: '산업용 IoT (IIoT)', desc: '설비 진동·온도 센서로 고장 징후를 미리 감지하는 예지보전, 디지털 트윈 기반 공정 최적화에 쓰입니다.' },
  { icon: '🏙️', title: '스마트시티', desc: '스마트 가로등, 주차 센서, 대기질 측정망, 원격 검침으로 공공 인프라 운영 효율을 높입니다.' },
  { icon: '🩺', title: '헬스케어 (IoMT)', desc: '웨어러블과 원격 모니터링 기기가 생체 신호를 수집해 만성질환 관리와 응급 대응을 돕습니다.' },
  { icon: '🌾', title: '스마트 농업', desc: '토양 수분·기상 센서와 LoRaWAN을 결합해 관수·시비를 자동화하고 물 사용량을 줄입니다.' },
  { icon: '🚚', title: '물류·자산 추적', desc: 'GPS·BLE 태그와 셀룰러 IoT로 화물 위치, 냉장 온도, 차량 상태를 실시간 추적합니다.' },
];

export interface GlossaryItem {
  term: string;
  desc: string;
}

export const IOT_GLOSSARY: GlossaryItem[] = [
  { term: '게이트웨이 (Gateway)', desc: '서로 다른 통신 방식의 기기를 인터넷·클라우드와 연결해 주는 중계 장치.' },
  { term: 'OTA (Over-the-Air)', desc: '무선으로 펌웨어·소프트웨어를 원격 업데이트하는 방식.' },
  { term: 'LPWAN', desc: 'Low-Power Wide-Area Network. 적은 전력으로 수 km 이상 통신하는 저전력 광역망.' },
  { term: '디지털 트윈 (Digital Twin)', desc: '실제 설비·공간을 실시간 데이터로 동기화한 가상 모델.' },
  { term: 'Matter', desc: 'CSA(Connectivity Standards Alliance)가 주도하는 IP 기반 스마트홈 상호운용 표준.' },
  { term: 'QoS (MQTT)', desc: '메시지 전달 보장 수준. 0=최대 1회, 1=최소 1회, 2=정확히 1회.' },
];

export interface IotFaq {
  question: string;
  answer: string;
}

export const IOT_FAQ: IotFaq[] = [
  {
    question: 'IoT와 M2M(Machine to Machine)은 어떻게 다른가요?',
    answer:
      'M2M은 기기 간 직접 통신(주로 셀룰러·유선 점대점)에 초점을 둔 개념이고, IoT는 여기에 인터넷·클라우드 플랫폼·데이터 분석·사용자 애플리케이션까지 포함한 더 넓은 생태계를 의미합니다. M2M은 IoT의 하위 구성 요소로 볼 수 있습니다.',
  },
  {
    question: 'IoT 기기에 가장 많이 쓰이는 통신 프로토콜은 무엇인가요?',
    answer:
      '애플리케이션 메시징에서는 MQTT가 가장 널리 쓰이며, 제약이 큰 센서 노드에는 CoAP, 클라우드 API 연동에는 HTTPS가 함께 사용됩니다. 무선 연결 방식은 거리·전력·대역폭 요구에 따라 Wi-Fi, BLE, Thread, LoRaWAN, NB-IoT 중에서 선택합니다.',
  },
  {
    question: '가정용 IoT 기기를 안전하게 쓰려면 무엇부터 해야 하나요?',
    answer:
      '기본 비밀번호 변경, 펌웨어 자동 업데이트 활성화, IoT 전용 게스트 네트워크 분리, 공유기 UPnP 비활성화 네 가지가 가장 효과가 큽니다. 앱과 펌웨어는 공식 홈페이지나 공식 앱 마켓에서만 내려받으세요.',
  },
  {
    question: '엣지 컴퓨팅은 IoT에 꼭 필요한가요?',
    answer:
      '모든 시스템에 필수는 아니지만, 밀리초 단위 반응이 필요한 제어, 대용량 영상·진동 데이터, 네트워크 단절 시에도 동작해야 하는 현장에는 사실상 필수입니다. 소규모 스마트홈은 클라우드 중심으로도 충분한 경우가 많습니다.',
  },
  {
    question: 'Matter 표준은 기존 Zigbee·Wi-Fi 기기와 호환되나요?',
    answer:
      'Matter는 Wi-Fi, Thread, 이더넷 위에서 동작하는 애플리케이션 계층 표준입니다. 기존 Zigbee 기기는 Matter 브리지 기능을 지원하는 허브를 통해 연동할 수 있으며, 일부 기존 Wi-Fi·Thread 기기는 펌웨어 업데이트로 Matter를 지원하기도 합니다. 구매 전 제조사의 지원 여부를 확인하세요.',
  },
];

export const IOT_REFERENCES = [
  { name: 'MQTT Version 5.0 — OASIS Standard', url: 'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html' },
  { name: 'RFC 7252 — The Constrained Application Protocol (CoAP)', url: 'https://datatracker.ietf.org/doc/html/rfc7252' },
  { name: 'ETSI EN 303 645 — Cyber Security for Consumer IoT', url: 'https://www.etsi.org/technologies/consumer-iot-security' },
  { name: 'Connectivity Standards Alliance — Matter', url: 'https://csa-iot.org/all-solutions/matter/' },
  { name: 'LoRa Alliance — LoRaWAN', url: 'https://lora-alliance.org/about-lorawan/' },
];
