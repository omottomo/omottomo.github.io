// 카테고리 아이콘 — 24×24 스트로크 SVG 내부 마크업.
// Skills 카드 헤더와 Projects 기술 칩이 공유한다 (단일 진실원본).
export const icons: Record<string, string> = {
  cicd: '<path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 5.36A9 9 0 0 0 20.49 15"/>',
  terminal:
    '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  branch:
    '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
};

// 기술명 → 아이콘 키. Projects 기술 칩 앞 기호는 Skills 카테고리 분류를 따른다.
export const techIcon: Record<string, string> = {
  Quickbuild: 'cicd',
  Jenkins: 'cicd',
  'GitHub Actions': 'cicd',
  'Shell Script': 'terminal',
  Shell: 'terminal',
  ADB: 'terminal',
  'Node.js': 'terminal',
  Express: 'terminal',
  React: 'terminal',
  Java: 'terminal',
  Coverity: 'shield',
  SourcererCC: 'shield',
  Linux: 'server',
  Redis: 'server',
  MySQL: 'server',
  SQLite: 'server',
  Git: 'branch',
};
