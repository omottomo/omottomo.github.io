// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ── 두 번째(리디자인) 사이트 ─────────────────────────────────────────────
// 기존 사이트(../src)는 그대로 두고, 완전히 다른 디자인을 이 폴더에서 독립 구현한다.
// 실행: 루트에서 `npm run second` (dev, 포트 4322) / `npm run second:build`.
// astro 바이너리·의존성은 상위 node_modules를 그대로 재사용한다(중복 설치 없음).
export default defineConfig({
  site: 'https://omottomo.github.io',
  vite: {
    // @ts-expect-error - cross-version Vite plugin type mismatch (루트 config와 동일)
    plugins: [tailwindcss()],
  },
});
