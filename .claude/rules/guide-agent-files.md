---
paths:
  - "src/pages/guide.astro"
  - "agent/**"
  - "public/casebook-press-*"
  - "public/casebook-press-skill/**"
  - "public/casebook-case-prompts.md"
  - "scripts/agent-files.mjs"
---

# 사건 제작 가이드와 AI 에이전트용 파일

- 가이드 본문(`src/pages/guide.astro`)을 고치면 기준 원본 `agent/case-guide-criteria.md`도 같은 뜻으로 고치고 `npm run agent-files`로 세 파일을 다시 만들어요.
  - `public/casebook-press-prompt.md`(프롬프트)
  - `public/casebook-press-skill/SKILL.md`(Claude Code 스킬)
  - `public/casebook-press-skill.zip`(Claude 앱 스킬, 안에 `casebook-press-skill/SKILL.md`가 폴더째)
- 만들어진 세 파일은 직접 고치지 않아요.
- 스킬 `name`은 폴더 이름과 같아요(영문 소문자 · 하이픈, 64자 이하). `description`은 1,024자 이하로 언제 쓰는지 적어요.
- 이름에는 항상 `-skill` · `-prompt`를 붙여요. `casebook-press`만 단독으로 쓰지 않아요.
- 가이드 숫자(채점 · 힌트, 난이도표, 의뢰 길이)는 앱 규칙과 맞춰요. 아직 앱에 없는 기능은 쓰지 않아요. 예시는 지어낸 사건으로만 들어요.
- 장 앵커 `#g1`~`#g9`는 바꾸지 않아요. 앱과 서버의 심사 항목이 이 앵커로 링크해요.
- `public/casebook-case-prompts.md`는 손으로 관리하는 파일이에요(블로그 글 "원작 소설을 플레이할 수 있는 추리 사건으로 만들기"의 프롬프트 모음). 그 글의 프롬프트를 고치면 같이 고쳐요.
