// Confere as fotos reais do pinguim-de-barbicha no tutorial, no Perfil e nos Créditos.
// Uso: node scripts/fluxo-fotos.mjs   (servidor em http://localhost:8081)
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
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));

const photosLoaded = async () => {
  await page.getByText('Assim é um pinguim-de-barbicha de verdade').first().waitFor({ timeout: 60000 });
  await page.waitForFunction(() => {
    const imgs = [...document.querySelectorAll('img')].filter((i) => /pinguim-barbicha/.test(i.src));
    return imgs.length >= 4 && imgs.every((i) => i.complete && i.naturalWidth > 0);
  }, null, { timeout: 30000 });
};

await page.goto(BASE + '/tutorial', { waitUntil: 'load', timeout: 180000 });
// o 1º passo é a escolha do idioma; as fotos vêm no 2º
await page.getByText('Próximo', { exact: true }).first().click({ timeout: 90000 });
await photosLoaded();
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-1-tutorial.png` });
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await photosLoaded();
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-2-perfil.png` });
await page.goto(BASE + '/creditos', { waitUntil: 'load' });
await page.getByText('Fotos do pinguim-de-barbicha', { exact: false }).first().waitFor({ timeout: 30000 });
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
