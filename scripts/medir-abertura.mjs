// Mede a primeira abertura do app num navegador limpo (sem banco): do carregamento da página
// até o app aparecer (tutorial ou trilha). Uso: node scripts/medir-abertura.mjs [vezes]
import { chromium } from 'playwright-core';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const runs = Number(process.argv[2] ?? 3);
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const times = [];
for (let i = 0; i < runs; i++) {
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const t0 = Date.now();
  await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
  const tLoad = Date.now();
  await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 180000 });
  times.push({ pagina: (tLoad - t0) / 1000, app: (Date.now() - t0) / 1000 });
  await page.context().close();
}
console.log(times.map((t) => `página ${t.pagina.toFixed(1)} s · app pronto ${t.app.toFixed(1)} s`).join('\n'));
await browser.close();
