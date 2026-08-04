export interface PersonalProject {
  title: string;
  oneLine: string;
  tech: string[];
  href?: string;
}

/** 개인 프로젝트 — 채우면 자동으로 카드가 렌더되고, 비어 있으면 자리표시 슬롯이 보인다. */
export const personalProjects: PersonalProject[] = [];
