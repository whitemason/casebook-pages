---
paths:
  - "astro.config.mjs"
  - "src/consts.ts"
  - ".github/workflows/**"
---

# 주소 · 빌드 · 배포 설정

- `site`는 `https://casebook.whitemason.club`, `base`는 `/`예요. 바꾸면 모든 주소가 바뀌어요. 바꿔야 하면 운영자에게 먼저 물어요.
- `build.format: 'preserve'`는 `privacy.html` · `terms.html` 같은 파일 이름 주소를 지켜요. 바꾸지 않아요.
- 사이트 안 링크는 `src/consts.ts`의 `url()` · `postUrl()`로 만들어요. 주소를 직접 적지 않아요.
- App Store · TestFlight 링크는 `APP_STORE_URL` · `TESTFLIGHT_URL`에서 바꿔요.
- 배포 workflow는 GitHub Actions(`withastro/action`, 패키지 관리자 npm)예요. 빌드 결과에 `index.html` · `privacy.html` · `terms.html`이 있는지 검사하는 단계를 지우지 않아요.
- 사용자 도메인(`casebook.whitemason.club`)은 저장소 Settings › Pages에서 정해요. Actions 배포라서 `public/CNAME`은 쓰지 않아요.
- DNS(GoDaddy)를 고친 뒤에는 권한 서버(`dig @ns67.domaincontrol.com`)에서 `casebook` CNAME이 `whitemason.github.io`인지 확인해요. 다른 레코드를 고치다가 이 레코드가 지워진 적이 있어요.
