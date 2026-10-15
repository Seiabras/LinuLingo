// Amarelinha e esgrima na rota temporária /dev-outros-jogos: joga alguns lances de cada um e tira
// capturas, sem erros no console.
// Uso: npx tsx scripts/fluxo-outros-jogos-brinc-esporte.mjs   (BASE_URL, padrão http://localhost:8081; DEVICE=iphone|desktop SCHEME=light|dark)
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
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const shot = async (name, full = true) => {
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/brinc-esporte-${device}-${scheme}-${name}.png`, fullPage: full });
};

// amarelinha: mira, força, e (se acertar) um pulo
await page.goto(`${BASE}/dev-outros-jogos?jogo=amarelinha`, { timeout: 600000 });
await page.getByTestId('amarelinha-mira').waitFor({ timeout: 180000 });
await shot('amarelinha-inicio');
await page.getByTestId('amarelinha-mira').click();
await page.waitForTimeout(600);
await shot('amarelinha-forca');
await page.getByTestId('amarelinha-mira').click();
await page.waitForTimeout(400);
console.log('amarelinha:', await page.getByTestId('amarelinha-msg').innerText());
await shot('amarelinha-depois');
if (await page.getByTestId('amarelinha-dois-pes').isVisible().catch(() => false)) {
  await page.getByTestId('amarelinha-dois-pes').click();
  await page.waitForTimeout(300);
  await shot('amarelinha-pulo');
}
// a vez do Linu (se a vez passou)
await page.waitForTimeout(4000);
await shot('amarelinha-linu');

// esgrima: alguns tempos
await page.goto(`${BASE}/dev-outros-jogos?jogo=esgrima`);
await page.getByTestId('esgrima-avancar').waitFor({ timeout: 120000 });
await shot('esgrima-inicio');
for (const a of ['avancar', 'ataque', 'parada', 'ataque']) {
  const b = page.getByTestId(`esgrima-${a}`);
  if (await b.isEnabled().catch(() => false)) await b.click();
  await page.waitForTimeout(400);
  console.log('esgrima:', await page.getByTestId('esgrima-msg').innerText());
}
await shot('esgrima-lances');
for (let i = 0; i < 80; i++) {
  if (await page.getByTestId('esgrima-de-novo').isVisible().catch(() => false)) break;
  const b = page.getByTestId(i % 3 === 0 ? 'esgrima-avancar' : i % 3 === 1 ? 'esgrima-ataque' : 'esgrima-parada');
  if (await b.isEnabled().catch(() => false)) await b.click();
  else await page.getByTestId('esgrima-ataque').click();
  await page.waitForTimeout(120);
}
await shot('esgrima-fim');
console.log('erros:', errors.length ? errors : 'nenhum');
await browser.close();
