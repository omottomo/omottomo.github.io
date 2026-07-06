# site-v2 — 리디자인 사이트 (LEDGER//GRID)

기존 사이트(`../src`)는 그대로 두고, **완전히 다른 디자인**을 이 폴더에서 독립 구현한 두 번째 버전이다.
콘텐츠(정량 수치·NCP·순화된 경력·가드레일)는 100% 재사용하고, **시각언어만 새로** 만들었다.

## 실행 (로컬)

루트(`portfolio-site/`)에서:

```bash
npm run second          # dev 서버 → http://localhost:4322  (기존 사이트는 npm run dev, 4321)
npm run second:build    # 정적 빌드 → site-v2/dist
npm run second:preview  # 빌드 결과 미리보기 (4322)
```

- `astro` 바이너리·의존성은 **상위 `../node_modules`를 재사용**한다(중복 설치 없음). Node가 모듈을 상위로 올라가며 해석하므로, `site-v2`에 별도 `npm install`이 필요 없다.
- 두 사이트는 포트가 달라(4321 / 4322) 동시에 띄울 수 있다.

## 왜 새로 디자인했나 (배경)

기존 사이트는 벤치마크 `shiniseong.github.io`의 **구조·톤을 의도적으로 차용**(`../docs/design-reference.md`)한 결과, 시각 DNA를 거의 통째로 공유해 "클론"처럼 보였다:
다크 near-black + 인디고/바이올렛 + 글래스모피즘 + 블롭 + Sora/Fira Code + 중앙 단일컬럼 + 스크롤 리빌/타이핑 커서.

## 확정 방향 — **LEDGER//GRID (잉크 온 페이퍼 에디토리얼 원장)**

다중 에이전트로 5개 방향(에디토리얼/터미널/라이트페이퍼/대시보드/브루탈리즘)을 리서치·3축 심사한 결과 채택.
Ledger(잉크 온 페이퍼 + 괘선 그리드)를 뼈대로, 각인 훅(단일 시그널 악센트·초대형 tabular 숫자·모노 섹션 인덱스)만 이식.
**채용임팩트·구현현실성 심사 1위** — 국내 대기업 인프라/DevOps HR에 안전하면서 레퍼런스에서 확실히 벗어남.

### 레퍼런스 DNA를 항목별로 반전

| 요소 | 기존(클론) | site-v2 (LEDGER//GRID) |
|---|---|---|
| 배경 | near-black `#0a0b12` | 따뜻한 페이퍼 `#f4f2ea` |
| 컬러 | 인디고+바이올렛 듀오톤 | 웜 잉크 모노크롬 + **단일 버밀리언** `#d8341c`(아주 드물게) + build-green `#1e7d45`(성과 델타·CI 성공 의미색) |
| 표면 | 글래스모피즘 blur 카드 + 블롭 | 플랫 지면 + **헤어라인 괘선**(blur 0·radius 0) |
| 제목 | 인디고→바이올렛 그라디언트 텍스트 | 솔리드 잉크 오버사이즈 타이포 |
| 폰트 | Sora + Fira Code + Pretendard | **Bricolage Grotesque**(디스플레이) + **JetBrains Mono**(라벨·숫자) + Pretendard(한글 본문) |
| 레이아웃 | 중앙 단일컬럼 `max-w-5xl` | 비대칭 스위스 그리드 + **여백의 거대 인덱스 번호(00–06)** |
| 네비 | sticky 중앙 pill 바 | 번호 인덱스(01–06) + 헤어라인, blur 없음 |
| 컴포넌트 | stat 글래스 카드·6 배지 클러스터·타임라인·P/A/R 카드 | **괘선 원장**(tabular stat 열·카테고리 테이블·번호 하이라이트 행·P/A/R 스켈레톤) |
| 모션 | 타이핑 커서 + fade-up | 괘선 draw-in + 절제된 rise (커서 제거) |

### 유지한 것(리디자인해도 불변)
정량 성과 수치(75%↓·28%↓), NCP Professional(검증 배지), 순화된 경력 표기, **영업비밀 가드레일**,
정적/제로-JS·Lighthouse 지향, 접근성(prefers-reduced-motion·focus-visible·색대비 AA), 한/영 혼용 톤.

## 다크 모드

- **기본 = 시스템 선호**(`prefers-color-scheme`). OS가 다크면 자동 다크, 라이트면 자동 라이트 — JS 없이도 동작.
- **수동 토글**: 마스트헤드 우측 해/달 버튼으로 오버라이드. 선택은 `localStorage('theme')`에 저장되어 새로고침·재방문에도 유지.
- **FOUC 방지**: `<head>`의 인라인 스크립트가 첫 페인트 전에 저장된 선호를 `html[data-theme]`로 반영.
- **구현 = 토큰 스왑만**: `global.css`의 `--color-*`를 다크 값(중성 웜-카본, 블루끼 0)으로 재정의. 모든 컴포넌트가 시맨틱 토큰만 쓰므로 컴포넌트 수정 0.
  - 우선순위: `html[data-theme="dark"|"light"]`(수동) > `@media (prefers-color-scheme)`(시스템) > 라이트 기본.
  - 악센트·build-green은 다크 배경 위 AA 대비를 위해 밝은 값으로 조정(`#f0492f` / `#35c27a`).

## OG 이미지 (소셜 미리보기)

- `public/og-image.png` (1200×630) — Ledger 라이트 톤으로 새로 제작. 카톡·트위터·슬랙 링크 공유 시 표시.
- **생성 방식**: `src/pages/og.astro`(1200×630 OG 카드, `data-theme="light"` 고정)를 **헤드리스 Chrome으로 렌더 → PNG 캡처 → 1200×630 다운샘플**.
  같은 웹폰트(Bricolage·JetBrains Mono·Pretendard)·디자인 토큰을 그대로 써서 사이트와 100% 일관.
  ```bash
  npm run second                     # dev 서버 (4322)
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  "$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=1200,630 --virtual-time-budget=5000 \
    --screenshot=/tmp/og_2x.png "http://localhost:4322/og"   # 캡처 후 프로세스는 kill
  sips -z 630 1200 /tmp/og_2x.png --out public/og-image.png  # 1200×630 다운샘플
  ```
- `/og`는 캡처 전용 유틸 라우트(사이트에서 링크되지 않음). 콘텐츠 수치가 바뀌면 재캡처.

## 상태
- 로컬 실행·정적 빌드 검증 완료. **배포는 아직 안 함**(기존 사이트만 배포 대상). 필요 시 별도 결정.
- 데이터는 `../src/data`에서 복사한 자기완결 사본(`src/data`). 원본 수정 시 동기화 필요.
