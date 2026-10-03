// Teste de ponta a ponta da seção de Linguística (aba Gramática › Por área da língua):
// áreas da língua, quadro do IPA e aulas gerais.
// Uso: node scripts/fluxo-linguistica.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: process.env.SCHEME ?? 'light' })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/linguistica-${device}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 15000 });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).or(page.getByLabel(/^Parada A1\.1:/)).first().waitFor({ timeout: 120000 });
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).click();

await page.goto(BASE + '/gramatica', { waitUntil: 'load' });
await page.getByText('Por área da língua', { exact: true }).click();
await expectText('Quadro interativo do IPA');
await shot('areas');

// área: fonologia do romeno
await page.getByLabel('Área: Fonologia').click();
await expectText('O que é');
await expectText('Fonologia do romeno');
await shot('fonologia');

// quadro do IPA
await page.goto(BASE + '/linguistica/ipa', { waitUntil: 'load' });
await page.getByLabel(/^IPA ʃ:/).click();
await expectText('chá');
await shot('ipa');

// aula geral
await page.goto(BASE + '/linguistica/aula/l-familias', { waitUntil: 'load' });
await expectText('Famílias de línguas');
await expectText('Mini-quiz');
await shot('aula');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
