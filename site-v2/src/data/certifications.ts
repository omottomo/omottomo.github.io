export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** 공개 검증 가능 여부 (신뢰 신호) */
  verifiable?: boolean;
}

export interface Education {
  school: string;
  /** 전공/계열 (고등학교 등 없으면 생략) */
  major?: string;
  degree: string;
  /** 재학 기간 (예: '2016.03 – 2023.02') */
  period?: string;
}

// 오래된 순(취득일 오름차순) — 앞선 날짜가 위로.
export const certifications: Certification[] = [
  {
    name: 'Naver Cloud Platform Professional',
    issuer: 'NAVER Cloud',
    date: '2023.08',
    verifiable: true,
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2026.07',
    verifiable: true,
  },
];

// 오래된 순(재학 시작 오름차순) — 앞선 날짜가 위로.
export const education: Education[] = [
  {
    school: '명지대학교',
    major: '정보통신공학과',
    degree: '학사',
    period: '2017.03 – 2022.02',
  },
];
