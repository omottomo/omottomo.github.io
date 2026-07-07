export interface Experience {
  company: string;
  role: string;
  period: string;
  /** 재직 중이면 활성 배지 표시 */
  active: boolean;
  /** 회사에서 전반적으로 수행한 일 한 문장 요약 (하이라이트 위에 표시) */
  summary: string;
  /** 핵심 프로젝트별 한 줄 요약 — "프로젝트 — 성과" 형태 */
  highlights: string[];
  /** tech pill (공개 가능한 일반 툴명만 — 사내 고유명 금지) */
  tech: string[];
}

// ⚠️ 가드레일: 고객사/제품/칩셋/사내툴 고유명 금지. 대상은 "글로벌 대기업 카메라 SW 개발 조직"으로 일반화.
export const experiences: Experience[] = [
  {
    company: '썬더소프트코리아',
    role: '연구원',
    period: '2023.09 — 재직 중',
    active: true,
    summary:
      '글로벌 대기업 카메라 SW 개발 조직에서 신규 칩셋(AP) 플랫폼의 CI 온보딩부터 빌드·테스트 무인 자동화, 정적분석 품질 게이트까지 파이프라인 전 주기를 담당해 왔습니다.',
    highlights: [
      '야간 무인 빌드·배포 자동화 — 순차 파이프라인을 병렬 구조로 재설계해 전체 소요 12h → 3h(약 75% 단축), 검증 실패 시 이전 이미지로 자동 롤백',
      'TDD 테스트 사이클 단축 — Fail-fast 도입·중복 테스트 제거로 평균 102분 → 73분(약 28% 단축)',
      '신규 칩셋(AP) 플랫폼 CI 셋업 10여 회 — 빌드 enable부터 패닉 유발 테스트케이스 필터링·안정화까지 반복 수행',
      '테스트 자동화 프레임워크 메이저 버전 전환 — 콜백 중계 릴레이 서버를 Node.js·Express·Redis로 설계·구축, 테스트 스크립트 API 전수 리팩토링',
      'Coverity 정적분석 품질 게이트 — 주 1회 정기 빌드 → 정적분석 리포트 파이프라인 도입·운영',
      '코드 재사용률 측정 시스템 — SourcererCC 기반 중복 코드 분석 파이프라인 설계·구축',
    ],
    tech: [
      'Jenkins',
      'Quickbuild',
      'Shell',
      'Node.js',
      'Redis',
      'Coverity',
      'Linux',
    ],
  },
];
