// Confere as animações do Linu no tutorial: tira quadros seguidos de cada humor e mede se a
// figura muda entre eles (aceno, bico falando, cabeça pensando, pulo com confete), e mostra a logo.
// Uso: npx tsx scripts/fluxo-linu.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: 'no-preference' })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));

await page.goto(BASE + '/tutorial', { waitUntil: 'load', timeout: 180000 });
const linu = page.locator('[aria-label^="Linu, o pinguim-de-barbicha"]').first();
await linu.waitFor({ timeout: 120000 });
if (!(await page.getByLabel('LinuLingo').count())) throw new Error('a logo não aparece no primeiro slide');

/** Tira `n` quadros do Linu, com `gap` ms entre eles; devolve quantos pares de quadros diferem. */
async function frames(name, n = 6, gap = 140) {
  const shots = [];
  for (let k = 0; k < n; k++) {
    const buf = await linu.screenshot();
    shots.push(buf);
    await page.screenshot({ path: `${OUT}/linu-${name}-${k}.png`, clip: await linu.boundingBox().then((b) => ({ x: b.x - 60, y: b.y - 60, width: b.width + 120, height: b.height + 90 })) });
    await page.waitForTimeout(gap);
  }
  let diffs = 0;
  for (let k = 1; k < shots.length; k++) if (!shots[k].equals(shots[k - 1])) diffs++;
  console.log(`  ${name}: ${diffs}/${n - 1} quadros diferentes`);
  if (diffs === 0) throw new Error(`o Linu não se mexe no humor «${name}»`);
}

await page.waitForTimeout(900);
await frames('feliz');
const next = () => page.getByText('Próximo', { exact: true }).first().click();
await next();
await page.waitForTimeout(900);
await frames('falando');
await next();
await page.waitForTimeout(900);
await frames('pensando', 6, 250);
// avança até o slide da ofensiva, onde o Linu comemora
for (let k = 0; k < 6 && !(await page.getByText('Ofensiva e meta do dia').count()); k++) {
  await next();
  await page.waitForTimeout(500);
}
await page.waitForTimeout(700);
await frames('comemorando', 6, 120);

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
