# casebook-pages

Casebook 앱의 문서 사이트예요. 홈, 개인정보 처리방침, 이용약관, 사건 제작 가이드, 개발 블로그가 있어요.
[Astro](https://astro.build)로 만들고, `main`에 푸시하면 GitHub Actions가 빌드해서 GitHub Pages에 배포해요.

- 사이트: https://casebook.whitemason.club/
- 옛 주소 https://x-0o0.github.io/casebook-legal/ 은 개인 사이트 저장소(x-0o0/x-0o0.github.io)의 넘겨주기 페이지가 같은 경로의 새 주소로 넘겨줘요.

## 로컬에서 실행하기

Node 22.12 이상이 필요해요.

```sh
npm install --no-package-lock
npm run dev      # 미리 보기
npm run build    # 빌드(커밋 전에 경고 없이 성공해야 해요)
```

## 규칙은 어디에 있나요

규칙의 원본은 아래 파일이에요. README는 사람을 위한 요약이라, 규칙이 바뀌면 원본을 고쳐요.

| 파일 | 내용 |
|---|---|
| `AGENTS.md` | 모든 작업에 필요한 규칙: 바꾸면 안 되는 주소 · 앵커, 결정 권한, 함께 작업할 때, 공개하면 안 되는 정보 |
| `.claude/rules/legal-docs.md` | 처리방침 · 약관 |
| `.claude/rules/blog.md` | 블로그 글 머리말 · 그림 · 톤 · 분량 · 링크 |
| `.claude/rules/guide-agent-files.md` | 사건 제작 가이드와 AI 에이전트용 내려받기 파일 |
| `.claude/rules/site-address.md` | 사이트 주소 · 빌드 · 배포 설정 |
| `.claude/skills/` | 여러 단계 작업 절차: 처리방침 · 약관 바꾸기(`legal-update`), 블로그 글 공개(`publish-post`), 개발일지 쓰기(`casebook-devlog`) |

## 꼭 알아 둘 것 (요약)

- `privacy.html` · `terms.html` · `/#support` 주소와 처리방침 `#p1`~`#p12`, 가이드 `#g1`~`#g9` 앵커는 App Store와 앱이 써요. 바꾸지 않아요.
- 처리방침 · 약관 본문은 운영자의 승인 없이 고치지 않아요.
- 블로그 글은 `src/content/blog/`에 마크다운으로 써요. 파일 이름이 주소가 돼요(`blog/<파일 이름>.html`).

  ```yaml
  ---
  title: "동사로 시작하는 작업형 제목"
  date: 2026-10-06
  category: 개발일지        # 개발일지 | 작업 기록 | 릴리스 노트
  summary: 한 줄 요약
  author: x-0o0             # 글쓴이의 GitHub 이름
  cover: some-cover.webp    # 개발일지는 비워 둬요(공통 커버가 자동으로 들어가요)
  ---
  ```

- 사건 제작 가이드(`src/pages/guide.astro`, 상단 메뉴 "사건 제작 가이드")를 고치면 `agent/case-guide-criteria.md`도 같은 뜻으로 고치고 `npm run agent-files`로 내려받기 파일을 다시 만들어요.
- App Store · TestFlight 링크는 `src/consts.ts`의 `APP_STORE_URL` · `TESTFLIGHT_URL`에서 바꿔요.
