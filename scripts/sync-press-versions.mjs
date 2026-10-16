// Casebook Press 판 기록을 Press 판 태그(press-N)에서 가져와 src/data/press-versions.json으로 둔다.
// 사용: npm run press-versions -- press-3
// 원본은 casebook-press 저장소의 release/versions.json이고, 여기서는 고치지 않는다. 흐름은 casebook-press → 이 사이트 한 방향이다.
// casebook-press는 옆 폴더(../casebook-press)가 기본이고, CASEBOOK_PRESS_DIR로 바꿀 수 있다.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PRESS_DIR = resolve(process.env.CASEBOOK_PRESS_DIR ?? join(ROOT, '../casebook-press'));
const OUT = join(ROOT, 'src/data/press-versions.json');
const STATUSES = ['준비 중', '지금 판', '이전 판', '되돌림'];

const tag = process.argv[2];
if (!/^press-\d+$/.test(tag ?? '')) {
  console.error('가져올 Press 판 태그를 적어 주세요. 예: npm run press-versions -- press-3');
  process.exit(2);
}

let raw;
try {
  raw = execFileSync('git', ['-C', PRESS_DIR, 'cat-file', 'blob', `${tag}:release/versions.json`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
} catch {
  console.error(`casebook-press에서 ${tag}의 판 기록을 찾지 못했어요 (${PRESS_DIR}). 옆 폴더에 받고 git pull로 태그를 가져오세요.`);
  process.exit(1);
}

// 모양만 확인한다. 공개해도 되는 내용인지는 casebook-press 테스트(release.test.ts)가 이미 확인했다.
const { editions } = JSON.parse(raw);
const ok = Array.isArray(editions) && editions.every((e) =>
  Number.isInteger(e.edition) && STATUSES.includes(e.status) && Number.isInteger(e.rules)
  && Array.isArray(e.formats) && e.minApp && typeof e.breaking === 'boolean' && Array.isArray(e.changes));
if (!ok) {
  console.error(`${tag}의 판 기록 모양이 이 페이지가 아는 모양과 달라요. src/pages/press/versions.astro를 함께 맞춰야 해요.`);
  process.exit(1);
}

writeFileSync(OUT, JSON.stringify({ source: tag, editions }, null, 2) + '\n');
const shown = editions.filter((e) => e.status !== '준비 중').map((e) => `${e.edition}판`);
console.log(`${tag}의 판 기록을 가져왔어요. 페이지에 보일 판: ${shown.join(', ') || '(없음)'} (준비 중인 판은 보이지 않아요)`);
