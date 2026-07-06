export interface Project {
  title: string;
  /** 한 줄 요약 */
  tagline: string;
  /** Problem / Approach / Result 3단 구성 */
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  links?: { label: string; href: string }[];
}

// ⛔ 지금은 공란. 추후 별도 제작 중인 CI/CD 롤백 데모로 채운다(PLAN §4).
// 여기 객체만 추가하면 Projects 섹션이 자동으로 카드로 렌더링된다(컴포넌트 수정 불필요).
export const projects: Project[] = [];

// 실제 프로젝트가 없을 때 보여줄 '틀' 슬롯 개수 (스켈레톤 카드)
export const placeholderSlots = 2;
