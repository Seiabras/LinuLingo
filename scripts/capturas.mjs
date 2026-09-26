// Capturas de tela do app web em vários aparelhos.
// Uso: node scripts/capturas.mjs [rota ...]   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const ONLY = process.env.DEVICES?.split(',');

const DEVICES = {
  desktop: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 },
  iphone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  android: { viewport: { width: 360, height: 780 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  ipad: { viewport: { width: 820, height: 1180 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

function chromiumPath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const root = join(homedir(), '.cache/ms-playwright');
  const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  return dir ? join(root, dir, 'chrome-linux64/chrome') : undefined;
}

const routes = process.argv.slice(2);
if (!routes.length) routes.push('/');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: chromiumPath() });
const scheme = process.env.SCHEME ?? 'light';
for (const [name, opts] of Object.entries(DEVICES)) {
  if (ONLY && !ONLY.includes(name)) continue;
  const ctx = await browser.newContext({ ...opts, colorScheme: scheme });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  for (const r of routes) {
    await page.goto(BASE + r, { waitUntil: 'load', timeout: 180000 });
    await page.waitForTimeout(Number(process.env.WAIT ?? 1500));
    // o tutorial abre sozinho na primeira visita à trilha
    if (!process.env.TUTORIAL && (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false))) {
      await page.getByText('Pular', { exact: true }).click();
      await page.waitForTimeout(1500);
    }
    const file = `${OUT}/${name}-${scheme}${r.replace(/[^a-z0-9]+/gi, '_')}.png`;
    await page.screenshot({ path: file });
    console.log('📸', file);
  }
  if (errors.length) console.log(`⚠️  ${name}:`, [...new Set(errors)].slice(0, 5).join('\n   '));
  await ctx.close();
}
await browser.close();
