// Teste de ponta a ponta do mapa (ISO 3166-1 e 3166-3) e das variantes.
// Uso: node scripts/fluxo-mapa.mjs   (servidor em http://localhost:8081)
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
const page = await (await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && !m.text().includes('Unknown event handler property') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/mapa-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = async (t) => {
  await page.getByText(t, { exact: true }).first().click();
  await page.waitForTimeout(600);
};
const expectText = async (t) => {
  if (!(await page.getByText(t).first().isVisible().catch(() => false))) throw new Error(`não achei: ${t}`);
};
const selected = () => page.locator('[aria-label^="País selecionado"]').first().getAttribute('aria-label');

await page.goto(BASE + '/mapa', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Onde se fala').waitFor({ timeout: 120000 });
await page.waitForTimeout(2500);
if ((await selected()) !== 'País selecionado: Romênia') throw new Error('Romênia não veio selecionada');
await shot('romeno');

// clique num país grande do mapa
const pb = await page.locator('svg:has(rect) path').nth(1).boundingBox();
await page.mouse.click(pb.x + pb.width / 2, pb.y + pb.height / 2);
await page.waitForTimeout(600);
if ((await selected()) === 'País selecionado: Romênia') throw new Error('clique no mapa não trocou o país');

// ISO 3166-3
await click('Já existiram · ISO 3166-3');
await click('União Soviética (URSS)');
await expectText('Hoje no lugar');
await expectText('Moldávia');
await shot('urss');

// variante na aba Cultura
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByText('Variantes do romeno').waitFor({ timeout: 60000 });
await click('Romeno da Moldávia');
await expectText('barabule');
await shot('variante-moldavia');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
