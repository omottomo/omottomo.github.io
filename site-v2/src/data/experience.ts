export interface Experience {
  company: string;
  role: string;
  period: string;
  /** 재직 중이면 활성 배지 표시 */
  active: boolean;
  subtitle: string;
  summary: string;
  /** 정량 성과 위주 하이라이트 불릿 */
  highlights: string[];
  /** tech pill (공개 가능한 일반 툴명만 — 사내 고유명 금지) */
  tech: string[];
}

// ⚠️ 가드레일: 고객사/제품/칩셋/사내툴 고유명 금지. 대상은 "글로벌 대기업 카메라 SW 개발 조직"으로 일반화.
export const experiences: Experience[] = [
  {
    company: '썬더소프트코리아',
    role: 'DevOps 엔지니어',
    period: '2023.09 — 재직 중',
    active: true,
    subtitle: '빌드·배포를 무인화해 온 여정',
    summary:
      '글로벌 대기업 카메라 SW 개발 조직의 빌드·테스트 파이프라인을 무인 자동화하며 빌드 시간과 테스트 사이클을 크게 단축했습니다.',
    highlights: [
      '야간 무인 빌드 자동화로 전체 빌드 시간 12h → 3h, 약 75% 단축',
      'TDD 기반 테스트 사이클 102분 → 73분, 약 28% 단축',
      'Quickbuild·Jenkins로 CI/CD 파이프라인을 오케스트레이션하고 Shell·Node.js로 자동화 스크립트 작성',
      'Coverity 정적분석 기반 품질 게이트 도입·운영',
      '테스트 자동화 프레임워크의 릴레이 서버를 Node.js로 직접 설계·구축',
    ],
    tech: [
      'Jenkins',
      'Quickbuild',
      'Shell',
      'Node.js',
      'Coverity',
      'Linux',
      'AWS',
      'NCP',
    ],
  },
];
