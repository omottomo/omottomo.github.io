export interface Skill {
  name: string;
  /** 핵심 강조 배지 (%바·별점 대신 강조 스타일로 표현) */
  highlighted?: boolean;
  /** 배지 툴팁 — "무엇을 어디까지 해봤다" */
  note?: string;
}

export interface SkillGroup {
  category: string;
  /** 카드 헤더 아이콘 키 — Skills.astro의 icons 맵과 일치 */
  icon: string;
  items: Skill[];
}

// 백엔드 이력을 인프라·DevOps 관점으로 리매핑한 6개 카테고리.
// ⚠️ 숙련도 %바·별점 금지(국내 감점). 강조는 highlighted + note(툴팁)로.
export const skillGroups: SkillGroup[] = [
  {
    category: 'CI/CD',
    icon: 'cicd',
    items: [
      { name: 'Jenkins', highlighted: true, note: '파이프라인 오케스트레이션·야간 무인 빌드' },
      { name: 'Quickbuild', highlighted: true, note: '빌드 스케줄링·분산 빌드 구성' },
    ],
  },
  {
    category: 'Automation · Scripting',
    icon: 'terminal',
    items: [
      { name: 'Shell', highlighted: true, note: '빌드·배포 자동화 스크립트' },
      { name: 'Node.js', note: '릴레이 서버(Express·Redis)·자동화 도구' },
      { name: 'Java', note: 'Spring 기반 백엔드 개발 (Java 웹 풀스택 과정 수료)' },
    ],
  },
  {
    category: 'Cloud',
    icon: 'cloud',
    items: [
      { name: 'AWS', highlighted: true, note: 'Solutions Architect Associate · 인프라 구성·운영' },
      { name: 'Naver Cloud (NCP)', highlighted: true, note: 'Professional 자격 보유' },
    ],
  },
  {
    category: 'Quality',
    icon: 'shield',
    items: [
      { name: 'Coverity', note: '정적분석 기반 품질 게이트' },
    ],
  },
  {
    category: 'OS',
    icon: 'server',
    items: [
      { name: 'Linux', highlighted: true, note: '서버 구성·운영' },
    ],
  },
  {
    category: 'SCM · Ops',
    icon: 'branch',
    items: [
      { name: 'Git', highlighted: true, note: '형상관리·협업' },
      { name: 'GitHub Actions', note: '이 사이트 CI/CD 배포에 사용' },
    ],
  },
];
