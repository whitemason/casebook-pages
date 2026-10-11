# Casebook 사건 제작 프롬프트

Casebook 개발 블로그 "원작 소설을 플레이할 수 있는 추리 사건으로 만들기"에서 실제로 쓴 프롬프트 모음이에요.
`{중괄호}`와 `[대괄호]` 자리를 내 사건에 맞게 바꿔 쓰세요. 표는 "보헤미아의 스캔들"을 만들 때 넣은 값이에요.
이미지 프롬프트 뒤에는 "공통 스타일"을 붙여 써요. 사건 제작 기준은 https://x-0o0.github.io/casebook-legal/guide.html 에서 내려받을 수 있어요.

## 1~2단계: 사건을 만들고 AI에게 직접 풀어 보게 하기

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

## 3단계: 증거를 정보의 출처에 맞게 나누기

| 종류 | 들어가는 것 |
|---|---|
| 현장 증거 | 이미지로 직접 관찰할 수 있는 물건, 크기, 배치, 흔적 |
| 문서 증거 | 수색 보고, 관찰 기록, 혼인 · 출국 자료, 통신문, 편지 |
| 인터뷰 | 외출 · 방문 · 지휘 행위에 대한 각 인물의 설명과 주장 |

| 이전 항목 | 수정 후 위치 | 이유 |
|---|---|---|
| 이전 수색의 범위 | 왕실 수색 보고서 | 과거 행동과 미발견 · 반출 기록은 이미지로 확정할 수 없음 |
| 세 사람의 최근 동선 | 각 인물의 인터뷰 | 일상과 방문 횟수 · 진입 여부는 진술 정보 |
| 연기 소동 관찰지 | 현장 관찰 문서 | 이미지 한 장으로 시간에 따른 행동을 전달하기 어려움 |
| 사진과 휴대 용기 | 판형 비교 현장 증거 + 보관처 목록 문서 | 관찰 가능한 크기와 조사 목록 분리 |
| 판 뒤의 압흔 | 현장 증거 유지 | 직접 관찰 가능한 흔적 |

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

## 4단계: 모든 이미지에 같은 스타일 붙이기

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

```text
victorian-era photograph, london, 1890s,
black and white noir photography, dramatic single-source lamplight,
heavy film grain, high detail, no readable text,
no blood, no graphic violence.
```

## 5단계: 인물 사진의 얼굴 지키기

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

| 인물 | 설명 |
|---|---|
| 보헤미아 국왕 | Broad strong face, dark wavy hair, thick curled handlebar moustache, clean-shaven chin, imposing build, high white collar, dark cravat, formal coat and fur-trimmed cloak with a jeweled clasp. No crown. |
| 아이린 애들러 | Elegant woman in her early thirties, distinctive oval face, confident composed expression, dark voluminous upswept wavy hair, refined dark high-collared Victorian dress with a small oval brooch. |
| 고드프리 노턴 | English lawyer aged approximately 35–40, lean oval face, dark neatly side-parted hair, clean-shaven chin, modest sideburns, reserved trustworthy expression, dark coat and waistcoat with a high white collar and sober tie. |
| 왕실 회수 담당관 | Discreet civilian agent aged approximately 48–52, narrow elongated face, receding short hair, thin neat moustache, observant eyes, neutral professional expression, modest well-tailored Victorian clothing. No uniform, weapons, medals, or royal regalia. |

## 6단계: 승인한 구도를 그대로 배경으로 옮기기

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

## 7단계: 증거 이미지를 설명에 맞추기

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
