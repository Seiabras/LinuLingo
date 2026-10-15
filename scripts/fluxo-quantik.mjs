// Confere o Quantik dos Jogos do conhecimento: abre /jogo/quantik e joga contra o Linu, trocando de
// forma e tocando na primeira casa permitida, até a partida acabar.
// Uso: node scripts/fluxo-quantik.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
page.setDefaultTimeout(120000);
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/quantik-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);



await page.goto(BASE + '/jogo/quantik', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => document.body.innerText.includes('esfera ×'), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1500);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();

await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Médio', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
await shot('inicio');

let lances = 0;
let fim = false;
for (let k = 0; k < 60 && !fim; k++) {
  await page.waitForTimeout(400);
  const t = await body();
  if (/venceu|ficou sem lance|Linu completou/.test(t)) {
    fim = true;
    break;
  }
  if (t.includes('O Linu está pensando')) continue;
  if (/Sua vez/.test(t)) {
    // troca de forma de vez em quando, e joga na primeira casa permitida
    const formas = page.locator('[aria-label*=" na mão"]:not([aria-disabled="true"])');
    const n = await formas.count();
    if (n > 0) await formas.nth(lances % n).click();
    await page.waitForTimeout(150);
    const casa = page.locator('[aria-label$=", pode jogar aqui"]');
    if ((await casa.count()) > 0) {
      await casa.first().click();
      lances++;
      if (lances === 3) await shot('meio');
    }
  }
}
fim ? ok(`a partida terminou (você jogou ${lances} peças)`) : fail('a partida não terminou');
await page.waitForTimeout(900);
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*(venceu|ficou sem lance|completou)[^\n]*/)?.[0]);

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
