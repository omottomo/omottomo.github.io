# portfolio-site

이동욱 — CI/CD · 인프라 엔지니어 개인 포트폴리오.
사이트 배포 자체를 DevOps 실력의 공개 증거로 삼는 것을 목표로 한다: 소스는 GitHub Actions로 빌드·배포되며, 워크플로의 초록 체크와 실행 로그가 남는다.

- 배포 주소(예정): https://omottomo.github.io
- 원페이지 구성: Hero · About · Experience · Skills · Certifications · Projects(준비 중) · Contact

## 스택 & 선택 이유

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | **Astro 5** | 기본 정적 HTML(제로 JS) → 안정적 결과 + Lighthouse 유리 + SEO. 콘텐츠를 `src/data/`로 분리해 나중에 Projects만 추가하기 쉬움. (최신 Astro 6는 Node ≥22.12 요구 → 로컬/CI 베이스라인 Node 20에 맞춰 5로 고정) |
| 스타일 | **Tailwind CSS v4** (`@tailwindcss/vite`) | 다크/인디고/글래스 톤을 유틸리티로 빠르게. Astro 6에서 deprecated된 `@astrojs/tailwind` 대신 first-party Vite 플러그인 채택 |
| 배포 | **GitHub Actions → GitHub Pages** | 소스 이력 보존 + 커밋마다 자동 갱신 + 초록 체크 = DevOps 신호 |
| 폰트 | Pretendard · Sora · Fira Code | 본문 · 제목 · 코드/태그 (CDN) |

## 구조

```
src/
├── layouts/Layout.astro   # 공통 <head>/메타·OG · sticky 네비 · 푸터 · 스크롤 리빌
├── pages/index.astro      # 섹션 조립
├── components/            # Hero/About/Experience/Skills/Certifications/Projects/Contact
├── data/                  # 콘텐츠 데이터(experience/skills/certifications/projects/site)
└── styles/global.css      # Tailwind v4 @theme 토큰(다크·인디고·글래스) + 모션
public/                    # .nojekyll · favicon.svg · og-image.png (+ resume.pdf는 준비 중)
.github/workflows/deploy.yml
```

콘텐츠를 `src/data/`로 분리한 이유: Projects를 채울 때 **컴포넌트 수정 없이 데이터만 추가**하면 되도록. `projects.ts`가 비어 있으면 섹션은 "준비 중" 스켈레톤을 보여준다.

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # 정적 산출물 → dist/
npm run preview  # 빌드 결과 미리보기
npm run check    # astro check (타입 검사)
```

Node 20 LTS 기준.

## 배포

1. 로컬 `npm run build` 초록 확인
2. GitHub에 **`omottomo.github.io`** public 저장소 생성
3. `main`에 push → `.github/workflows/deploy.yml` 자동 실행
4. 저장소 **Settings → Pages → Source = "GitHub Actions"** 지정
5. Actions 초록 확인 후 https://omottomo.github.io 접속

유저 사이트라 루트(`/`) 서빙 → Astro `base`는 지정하지 않는다.

## 접근성 · 품질

- 시맨틱 태그 + 스킵 링크 + 장식 SVG `aria-hidden` + `prefers-reduced-motion` 대응
- 텍스트 명암비 WCAG AA 이상 · 래스터 이미지 없이 SVG+CSS로 구성
- OG/Twitter 카드 메타 + 1200×630 OG 이미지

## 콘텐츠 원칙

경력 서술은 회사·고객사·제품·칩셋·사내 툴 고유명을 배제하고 정량 성과(비율)와 일반화된 표현만 사용한다. 재직사(썬더소프트코리아)만 표기한다.

---

Built with Astro · Deployed on GitHub Pages.
