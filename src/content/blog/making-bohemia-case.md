---
title: "원작 소설을 플레이할 수 있는 추리 사건으로 만들기"
date: 2026-10-11
category: 작업 기록
summary: 셜록 홈즈의 첫 단편 "보헤미아의 스캔들"을 Casebook 사건으로 만든 과정을 예로, AI와 함께 사건을 구성하고 증거를 나누고 이미지를 만드는 순서와 실제로 쓴 프롬프트를 정리합니다.
author: x-0o0
cover: making-bohemia-case-cover.webp
---

## 개요

공공 사건기록보관소에 "셜록 홈즈 사건집: 보헤미아의 스캔들"을 올렸습니다. 아서 코난 도일의 단편집 *The Adventures of Sherlock Holmes*의 첫 이야기를 Casebook에서 직접 추리할 수 있는 사건으로 만든 것입니다.

이 글은 이 사건을 만든 순서를 그대로 따라가며, 각 단계에서 실제로 쓴 프롬프트를 함께 싣습니다. 프롬프트는 바꿔 쓸 부분을 `{중괄호}`로 표시했으니, 직접 사건을 만들 때 자유롭게 가져다 쓰세요. 모든 프롬프트는 [한 파일로 내려받을 수도 있습니다](../casebook-case-prompts.md).

> **중요:** 이 글에는 사건의 일부 증거와 조사 과정이 나옵니다. 사건을 먼저 플레이해 보고 싶다면 공공 사건기록보관소에서 사건을 풀고 오세요. 정답과 잠긴 증거를 여는 답은 싣지 않았습니다.

## 전체 순서

| 단계 | 한 일 | 결과 |
|---|---|---|
| 1. 사건 파일 제작 | 예시 `.casedoc` 구조를 확인하고 원작을 플레이할 수 있는 사건으로 각색 | 의뢰 · 증거 · 인터뷰 · 선택지 · 정답 구성 |
| 2. 추리 검토 | 증거만으로 정답을 도출하고, 너무 쉽게 드러나는 정보와 선택지를 확인 | 중간 난이도 조정 및 증거 잠금 |
| 3. 증거 재분류 | 이미지로 관찰할 수 있는 정보와 기록 · 진술을 분리 | 현장 증거 2개, 문서 7개, 인터뷰 4명 |
| 4. 화풍 결정 | 셜록 홈즈 삽화풍을 먼저 만든 뒤 기존 Casebook 사진풍과 비교 | 흑백 빅토리아 시대 사진풍 채택 |
| 5. 인물 제작 | 국왕 → 애들러 → 노턴 → 회수 담당관 순으로 제작 | 1:1, 저화질 인화 질감 |
| 6. 현장 배경 제작 | 승인한 삽화의 가구 배치를 사진풍으로 변환 | 3:1 거실 배경 |
| 7. 증거 이미지 제작 | 설명을 시각화하고, 크기 · 내용을 반복 수정 | 3:2, 중간 화질 증거 이미지 2개 |
| 8. 올리기 | 앱의 사건 편집기에 이미지를 넣고 공공 사건기록보관소에 올림 | 운영진 심사를 거쳐 공개 |

## 원작과 각색을 나누기

원작을 사건으로 옮길 때 가장 먼저 정한 것은 **원작에 있는 것과 플레이를 위해 더한 것을 섞지 않는 것**이었습니다.

- 인물과 큰 줄거리는 원작을 따릅니다.
- 흔적, 조사 목록, 숫자를 맞혀야 열리는 문제 같은 요소는 플레이를 위해 새로 만든 것입니다.
- 원작 인물의 성격과 행동을 게임 각색 때문에 바꾸지 않습니다.

이 기준을 AI에게도 분명히 알려야, 각색 요소가 원작의 사실처럼 굳어지는 일을 막을 수 있습니다.

## 1~2단계: 사건을 만들고 AI에게 직접 풀어 보게 하기

사건 파일을 만든 뒤 AI에게 플레이어처럼 증거만 보고 풀어 보게 했습니다. 실제로 쓴 프롬프트입니다.

```text
예시 .casedoc 파일의 구조를 확인한 뒤,
{원작 또는 사건 제목}을 Casebook에서 플레이할 수 있는 사건으로 구성해줘.

플레이어는 의뢰, 현장 증거, 문서, 인터뷰만으로
{추리할 것}을 추리해야 해.

직접 추리를 진행하면서 다음을 확인해줘.
- 초반 정보만으로 정답이 너무 쉽게 드러나는가?
- 오답 선택지도 증거를 대조하기 전까지는 타당한가?
- 잠긴 증거의 해제 질문을 현재 공개된 정보로 풀 수 있는가?
- 정답을 위해 필요한 정보가 빠져 있거나 서로 모순되지 않는가?

난이도는 {난이도}으로 조정해줘.
스토리에 맞는 조사 과정을 통해 중요한 증거가 해제되도록 하고,
잠금 조건과 정답의 증거 참조가 유효한지 확인해줘.
실제 앱 검증과 논리 검토를 구분해서 결과를 설명해줘.
```

| 자리 | 이번 사건에 넣은 값 |
|---|---|
| `{원작 또는 사건 제목}` | 《보헤미아의 스캔들》 |
| `{추리할 것}` | 사진을 관리하는 인물, 보관 방식, 보관 동기, 결정적 증거 |
| `{난이도}` | 중간 |

> **참고:** 마지막 줄이 중요합니다. AI의 논리 검토는 앱에서 실제로 열리고 채점되는지를 보장하지 않습니다. 둘을 나눠 받아야 무엇을 직접 시험해야 하는지 알 수 있습니다.

검토 결과 초반에 정보가 너무 많이 보여서, 조사 순서에 따라 중요한 증거가 하나씩 열리도록 여섯 단계의 잠금을 걸었습니다. 처음에는 첫 현장 증거, 보관처 목록, 수색 보고서, 인물 인터뷰만 보입니다. 새 답을 위해 아직 잠긴 증거를 먼저 봐야 하는 순환 구조는 만들지 않았습니다.

## 3단계: 증거를 정보의 출처에 맞게 나누기

첫 판에는 사진 한 장으로 보여 줄 수 없는 내용까지 현장 증거에 들어 있었습니다. 그래서 정보가 어디서 오는지를 기준으로 다시 나눴습니다.

| 종류 | 들어가는 것 |
|---|---|
| 현장 증거 | 이미지로 직접 관찰할 수 있는 물건, 크기, 배치, 흔적 |
| 문서 증거 | 수색 보고, 관찰 기록, 혼인 · 출국 자료, 통신문, 편지 |
| 인터뷰 | 외출 · 방문 · 지휘 행위에 대한 각 인물의 설명과 주장 |

실제로 옮긴 항목입니다.

| 이전 항목 | 수정 후 위치 | 이유 |
|---|---|---|
| 이전 수색의 범위 | 왕실 수색 보고서 | 과거 행동과 미발견 · 반출 기록은 이미지로 확정할 수 없음 |
| 세 사람의 최근 동선 | 각 인물의 인터뷰 | 일상과 방문 횟수 · 진입 여부는 진술 정보 |
| 연기 소동 관찰지 | 현장 관찰 문서 | 이미지 한 장으로 시간에 따른 행동을 전달하기 어려움 |
| 사진과 휴대 용기 | 판형 비교 현장 증거 + 보관처 목록 문서 | 관찰 가능한 크기와 조사 목록 분리 |
| 판 뒤의 압흔 | 현장 증거 유지 | 직접 관찰 가능한 흔적 |

재분류할 때 쓴 프롬프트입니다.

```text
{사건 제목}의 증거를 정보의 출처에 맞게 재분류해줘.
현장 증거에는 눈으로 확인할 수 있는 물건과 흔적만 남겨줘.
기록 정보는 문서에, 행동과 주장에 관한 정보는 각자의 인터뷰에 넣어줘.

{옮길 항목 → 옮길 위치 목록}

진술과 보고 내용을 확정 사실처럼 서술하지 마.
증거 잠금과 결정적 증거 참조도 수정해줘.
현장 증거 수를 채우기 위해 새로운 물건을 추가하지 마.
기존 .casedoc 형식을 유지해줘.
```

`{옮길 항목 → 옮길 위치 목록}`에 이번 사건에서 넣은 값입니다.

```text
- 이전 수색의 범위 → 왕실 수색 보고서
- 애들러의 외출과 거실 사용 → 애들러 인터뷰
- 노턴의 하루 두 차례 방문 → 노턴 인터뷰
- 담당관의 지휘와 직접 진입 부인 → 담당관 인터뷰
- 연기 소동 당시의 행동 → 현장 관찰 문서
- 사진 판형과 목걸이함의 크기 비교 → 현장 증거
- 네 보관처의 목록 → 조사 문서
- 판 뒤 압흔과 모서리 걸림 자국 → 현장 증거
```

현장 증거는 2개로 줄었지만, 이미지로 보여 줄 수 있는 것만 남았습니다. 진술을 확정된 사실처럼 쓰지 않게 한 것도 중요했습니다. 인터뷰는 그 인물의 주장일 뿐이어야 플레이어가 대조할 거리가 생깁니다.

## 4단계: 모든 이미지에 같은 스타일 붙이기

원작 삽화처럼 펜으로 그린 그림을 먼저 만들어 보고, 기존 Casebook 사건의 사진풍과 나란히 비교했습니다. 앱의 다른 사건과 어울리는 쪽은 사진풍이었습니다. 모든 이미지 프롬프트 뒤에 아래 공통 스타일을 붙여 썼습니다.

```text
{시대}-era photograph, {장소}, {연대}.
Strict neutral black-and-white grayscale photography.
Dramatic single-source lamplight, deep but readable shadows,
heavy film grain, realistic period materials,
slightly soft archival photographic reproduction.

No sepia or color tint.
No modern objects, readable text, captions, signatures,
logos, watermarks, or decorative borders.
No blood or graphic violence.
No illustration, engraving, pen strokes, painting, or CGI.
Return one complete image, not a collage.
```

| 자리 | 이번 사건에 넣은 값 |
|---|---|
| `{시대}` · `{장소}` · `{연대}` | Victorian · London · 1890s |

처음에는 짧은 문장으로 시작했다가, 세피아 색조 · 펜 선 · 콜라주가 섞여 나오는 문제를 하나씩 막으며 위처럼 길어졌습니다. 처음 쓴 문장은 이랬습니다.

```text
victorian-era photograph, london, 1890s,
black and white noir photography, dramatic single-source lamplight,
heavy film grain, high detail, no readable text,
no blood, no graphic violence.
```

## 5단계: 인물 사진의 얼굴 지키기

인물 사진은 1:1로, 원형으로 잘라도 머리와 어깨가 남도록 여백을 두었습니다.

```text
Create a single 1:1 Victorian photographic studio portrait of [CHARACTER].
Chest-up, natural proportions, restrained expression,
plain dark studio backdrop, eyes toward the camera.
Leave space around the head and shoulders for circular cropping.

Use a low-quality archival reproduction aesthetic:
soft focus, coarse film grain, reduced fine detail,
subtle print wear, while keeping the face recognizable.

[CHARACTER DESCRIPTION]
Apply the shared Casebook photographic style.
Use existing portraits as style references only unless instructed
to preserve a specific character's identity.
Give different characters distinctly different faces.
```

인물마다 `[CHARACTER DESCRIPTION]`에 넣은 값입니다.

| 인물 | 설명 |
|---|---|
| 보헤미아 국왕 | Broad strong face, dark wavy hair, thick curled handlebar moustache, clean-shaven chin, imposing build, high white collar, dark cravat, formal coat and fur-trimmed cloak with a jeweled clasp. No crown. |
| 아이린 애들러 | Elegant woman in her early thirties, distinctive oval face, confident composed expression, dark voluminous upswept wavy hair, refined dark high-collared Victorian dress with a small oval brooch. |
| 고드프리 노턴 | English lawyer aged approximately 35–40, lean oval face, dark neatly side-parted hair, clean-shaven chin, modest sideburns, reserved trustworthy expression, dark coat and waistcoat with a high white collar and sober tie. |
| 왕실 회수 담당관 | Discreet civilian agent aged approximately 48–52, narrow elongated face, receding short hair, thin neat moustache, observant eyes, neutral professional expression, modest well-tailored Victorian clothing. No uniform, weapons, medals, or royal regalia. |

증거 사진에 인물이 다시 나오자, 같은 사람인데 얼굴이 프로필과 달라지는 문제가 생겼습니다. 글로 된 설명만으로는 같은 얼굴이 나오지 않았습니다. 기존 프로필 사진을 **얼굴 참조로 함께 첨부**하고 나서야 일관성이 맞았습니다. 새 대화에서 이어서 작업할 때도 파일 경로만 적어서는 안 되고, 사진 파일을 다시 첨부해야 합니다.

## 6단계: 승인한 구도를 그대로 배경으로 옮기기

현장 배경은 3:1 파노라마입니다. 먼저 삽화로 가구 배치와 구도를 정해 승인한 뒤, 그 삽화를 참조로 같은 배치를 사진풍으로 바꿨습니다.

```text
Transform the reference {장소} illustration
into a photorealistic Casebook archival photograph.
Preserve its {비율} panoramic composition, {시점},
furniture arrangement, architecture, and object locations.

Include {보여야 할 가구와 물건}.

Keep containers and concealed spaces closed.
Do not reveal hidden evidence or add people.
Use {광원} as the light source.
{빛 조건}
Make the furniture readable within deep shadows.
Remove all ink outlines and hatching.
Apply the shared Casebook photographic style.
Use strictly neutral grayscale with no warm or sepia tint.
```

| 자리 | 이번 사건에 넣은 값 |
|---|---|
| `{장소}` | Victorian sitting-room |
| `{비율}` · `{시점}` | 3:1 · eye-level doorway view |
| `{보여야 할 가구와 물건}` | the curtained window, sofa, armchairs, small round table, fireplace and mantel clock, closed writing bureau, closed document box, closed travel trunk, and household bell beside the closed wall panel |
| `{광원}` | one discreet period oil lamp |
| `{빛 조건}` | Keep the fireplace unlit and avoid competing daylight. |

배경에서는 단서가 숨어 있을 수 있는 곳을 **모두 닫아 두는 것**이 중요했습니다. 배경이 답을 미리 보여 주면 안 되기 때문입니다.

## 7단계: 증거 이미지를 설명에 맞추기

증거 이미지는 3:2입니다. 두 물건의 크기를 비교하는 증거와, 흔적을 가까이 보여 주는 증거를 만들었습니다.

**두 물건 비교하기**

```text
Create one {비율} landscape {시대} evidence photograph.
On a {바탕}, place two objects side by side:
{왼쪽 물건} on the left,
and {오른쪽 물건} on the right.

Use the supplied {참조 인물} portrait as the identity reference.
Preserve {지켜야 할 특징}.
Show ONLY {참조 인물} inside the printed photograph.

Make the two objects similar in footprint.
{크기 관계}
Both objects must lie on the same plane at the same camera depth,
with full outlines visible and a small gap between them.
Keep {닫아 둘 물건} closed. Do not show hidden contents.
Use a near-overhead oblique view for an honest size comparison.

Apply the shared Casebook photographic style,
with medium-quality archival softness and visible film grain.
```

| 자리 | 이번 사건에 넣은 값 |
|---|---|
| `{비율}` · `{시대}` | 3:2 · Victorian |
| `{바탕}` | dark wooden tabletop |
| `{왼쪽 물건}` · `{오른쪽 물건}` | a mounted photographic portrait of Irene Adler · a closed dark Victorian necklace case |
| `{참조 인물}` · `{지켜야 할 특징}` | Irene · her face, dark upswept wavy hair, high-collared dress, and oval brooch |
| `{크기 관계}` | The photograph must be slightly wider and taller than the case, approximately ten percent larger in each dimension. |
| `{닫아 둘 물건}` | the case |

**흔적 가까이 보기**

```text
Create one {비율} landscape {시대} evidence photograph.
Show a close-up of {장소}.
{열린 곳}, revealing a shallow EMPTY recess.

Inside, show {흔적}.
The impression must look like natural pressure and wear,
not a drawn shape or an object left behind.
The recess must contain no {남아 있으면 안 되는 것}.

Include {함께 보일 주변 물건}.
Use offscreen side lamplight to reveal the surface texture.
Apply the shared Casebook photographic style,
with medium-quality archival softness and visible film grain.
```

| 자리 | 이번 사건에 넣은 값 |
|---|---|
| `{장소}` | the sitting-room wall beside a household bell |
| `{열린 곳}` | A modest sliding wooden panel is open |
| `{흔적}` | a subtle flat rectangular contact impression matching a large photographic card, with a small corner snag mark and scrape |
| `{남아 있으면 안 되는 것}` | photograph, paper, or other object |
| `{함께 보일 주변 물건}` | part of the opened panel and the nearby bell and pull cord |

> **참고:** 생성한 이미지는 정확한 측정 자료가 아닙니다. 크기 비율을 지시한 뒤에도 결과 이미지에서 실제로 그렇게 보이는지 눈으로 다시 확인했습니다.

## 정리

| 단계 | 사람이 판단한 것 | AI가 맡은 것 |
|---|---|---|
| 각색 | 원작과 각색의 경계 | 사건 파일 구성 |
| 검토 | 목표 난이도 | 직접 풀어 보며 빈틈 찾기 |
| 증거 | 출처 기준과 줄일 범위 | 재분류와 잠금 수정 |
| 이미지 | 화풍 선택, 얼굴 · 크기 확인 | 프롬프트별 생성과 반복 수정 |

이 글의 프롬프트는 [한 파일로 내려받을 수 있습니다](../casebook-case-prompts.md). 사건을 만들 때 지킬 기준은 [사건 제작 가이드](../guide.html)에서 스킬과 프롬프트로 내려받을 수 있습니다. 직접 사건을 만들어 공공 사건기록보관소에 올려 보세요.
