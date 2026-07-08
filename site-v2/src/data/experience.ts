/** 프로젝트/영역별 성과 — 제목 + 세부 불릿(계층 표기) */
export interface Highlight {
  /** 프로젝트/영역 제목 (굵게) */
  title: string;
  /** 제목 옆 한 줄 설명 (선택, "제목 — 설명") */
  note?: string;
  /** 세부 성과 불릿 */
  points: string[];
}

export interface Experience {
  company: string;
  role: string;
  /** 고용형태 배지 (예: 정규직) — 선택 */
  employmentType?: string;
  /** 근무지 (예: 서울) — 선택 */
  location?: string;
  period: string;
  /** 재직 중이면 활성 배지 표시 */
  active: boolean;
  /** 회사에서 전반적으로 수행한 일 한 문장 요약 (하이라이트 위에 표시) */
  // summary: string;
  /** 핵심 프로젝트별 성과 (제목 + 세부 불릿) */
  highlights: Highlight[];
  /** tech pill (공개 가능한 일반 툴명만 — 사내 고유명 금지) */
  tech: string[];
}

// ⚠️ 가드레일: 고객사/제품/칩셋/사내툴 고유명 금지. 대상은 "글로벌 대기업 카메라 SW 개발 조직"으로 일반화.
export const experiences: Experience[] = [
  {
    company: '썬더소프트코리아',
    role: 'Solution Lab/Multimedia 연구원',
    period: '2023.09 ~ 재직 중',
    active: true,
    // summary:
    //   '글로벌 대기업 카메라 SW 개발 조직에서 신규 칩셋(AP) 플랫폼의 CI 온보딩부터 빌드·테스트 무인 자동화, 정적분석 품질 게이트까지 파이프라인 전 주기를 담당해 왔습니다.',
    highlights: [
      {
        title: '테스트 베드 시료 OS 배포 자동화',
        points: [
          '순차 파이프라인을 병렬 구조로 재설계해 전체 소요 12h → 3h(약 75% 단축)',
          '배포 실패 시 이전 이미지로 자동 롤백 기능 구현',
        ],
      },
      {
        title: 'TDD 테스트 소요 시간 단축',
        points: [
          'Fail 시 이후 TC 중단 로직 도입과 중복 테스트 제거로 평균 102분 → 73분(약 28% 단축)',
        ],
      },
      {
        title: '신규 칩셋(AP) 출시 시 운영 중인 CI Pipeline Enable 진행',
        points: [
          '신규 Release 된 칩셋에 대해 Build 검증, 패닉 유발 테스트케이스 필터링·안정화까지 진행',
        ],
      },
      {
        title: '테스트 자동화 프레임워크 버전 전환',
        points: [
          '콜백 중계 릴레이 서버를 Node.js·Express·Redis로 설계·구축',
          '테스트 스크립트를 버전 업 된 API로 리팩토링 진행',
        ],
      },
      {
        title: 'Coverity 정적분석 품질 게이트',
        points: ['정적분석 및 리포트 파이프라인 도입·운영'],
      },
      {
        title: '코드 재사용률 측정 시스템',
        points: ['SourcererCC 기반 중복 코드 분석 파이프라인 설계·구축'],
      },
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
