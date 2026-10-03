// Fotografa cada camada do Linu vetorial (página /dev-linu-pixel) em fundo preto e em fundo branco,
// para `scripts/linu-pixel.py` calcular a transparência e transformar em pixel art.
// Uso: node scripts/linu-pixel.mjs <pasta-de-saída>   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.argv[2] ?? 'capturas/linu-camadas';
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1 })).newPage();

for (const fundo of ['000000', 'ffffff']) {
  await page.goto(`${BASE}/dev-linu-pixel?fundo=${fundo}`, { waitUntil: 'load', timeout: 180000 });
  // a primeira visita abre o tutorial por cima: volta para a página das camadas
  await page.waitForTimeout(4000);
  if (!(await page.locator('[data-testid^="camada-"]').count())) {
    await page.goto(`${BASE}/dev-linu-pixel?fundo=${fundo}`, { waitUntil: 'load' });
  }
  await page.locator('[data-testid^="camada-"]').first().waitFor({ timeout: 60000 });
  const ids = await page.locator('[data-testid^="camada-"]').evaluateAll((els) => els.map((e) => e.getAttribute('data-testid')));
  for (const id of ids) {
    const el = page.locator(`[data-testid="${id}"]`);
    await el.scrollIntoViewIfNeeded();
    await el.screenshot({ path: join(OUT, `${id}__${fundo}.png`) });
  }
  console.log(fundo, ids.length, 'camadas');
}
await browser.close();
