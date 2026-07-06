import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// public/resume.pdf 존재 여부를 빌드 시점에 감지 → 있으면 이력서 버튼 자동 활성화.
// (파일을 나중에 넣기만 하면 코드 수정 없이 버튼이 켜진다)
const resumeFsPath = fileURLToPath(
  new URL('../../public/resume.pdf', import.meta.url),
);
export const hasResume = existsSync(resumeFsPath);

export const site = {
  name: '이동욱',
  role: 'DevOps 엔지니어',
  email: 'whddlsk994@gmail.com',
  githubHandle: 'omottomo',
  githubUrl: 'https://github.com/omottomo',
  resumeUrl: '/resume.pdf',
} as const;
