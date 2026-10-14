---
paths:
  - "src/content/blog/**"
  - "src/assets/images/**"
  - "src/layouts/PostLayout.astro"
---

# 개발 블로그 글

머리말:

```yaml
---
title: "동사로 시작하는 작업형 제목"
date: YYYY-MM-DD
category: 개발일지        # 개발일지 | 작업 기록 | 릴리스 노트
summary: 한 줄 요약
author: x-0o0             # 글쓴이의 GitHub 닉네임(필명 가능). 모든 글에 적어요
cover: some-cover.webp    # 개발일지는 비워 둬요
---
```

- 개발일지 커버는 자동으로 `devlog-cover.webp`예요. 다른 그림을 적으면 빌드가 실패해요(`src/content.config.ts`).
- 다른 카테고리는 `src/assets/images/`에 그림을 넣고 `cover`에 파일 이름만 적어요.
- 본문 그림: `![대체 텍스트](../../assets/images/파일)`. 밝은 · 어두운 버전은 이름 끝을 `-light` · `-dark`로 맞춰 두 줄 다 넣어요. 같은 내용의 그림을 다른 이름으로 두지 않아요(Astro가 합쳐서 `-light` · `-dark`가 사라져요). 큰 그림은 폭 2200px 정도로 줄여 넣어요.
- 톤: Apple Developer Article처럼. 동사형 제목, 개요, 작업형 소제목, `> **중요:**` · `> **참고:**` 상자, 합니다체.
- 분량: 개발일지는 3분 안팎, 작업 기록은 제한 없음. 읽는 시간은 1분에 500자, 코드 블록은 세지 않아요.
- 본문 링크는 지금 글의 위치를 기준으로 적어요(상대 경로). 블로그 글은 모두 `/blog/` 폴더에 있어요.

  | 링크할 곳 | 본문에 적는 법 | 열리는 주소 |
  |---|---|---|
  | 다른 블로그 글 | `how-casebook-is-built.html` | `https://casebook.whitemason.club/blog/how-casebook-is-built.html` |
  | 사이트 맨 위 파일(가이드 · 처리방침 · 내려받기 파일 등) | `../guide.html` (`../`는 한 폴더 위) | `https://casebook.whitemason.club/guide.html` |

  - 쓰지 않는 것: `/guide.html`처럼 사이트 맨 위부터 적는 링크, `https://casebook.whitemason.club/…`처럼 주소 전체를 적는 링크
  - 이 규칙은 이 사이트 안의 링크에만 해당해요. 다른 사이트 링크는 주소 전체(`https://…`)로 적어요.
  - 이유: 사이트 주소가 바뀌어도(2026-10-12 새 주소로 옮길 때처럼) 본문 링크를 고칠 필요가 없어요.
- 넘겨받은 원고는 문장 그대로 넣어요. 규칙에 걸리는 곳이 보이면 고치기 전에 알려요.
- 공개 절차는 skill `publish-post`(개발일지는 `casebook-devlog`)를 따라요.
