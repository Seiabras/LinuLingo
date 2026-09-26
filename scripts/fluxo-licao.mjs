// Teste de ponta a ponta: faz a primeira lição inteira no navegador e tira capturas de cada etapa.
// Uso: node scripts/fluxo-licao.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });

function chromiumPath() {
  const root = join(homedir(), '.cache/ms-playwright');
  const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  return process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined);
}

const browser = await chromium.launch({ executablePath: chromiumPath() });
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop' });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(600);
  const f = `${OUT}/fluxo-${device}-${String(++n).padStart(2, '0')}-${name}.png`;
  await page.screenshot({ path: f });
  console.log('📸', f);
};
const click = (text) => page.getByText(text, { exact: true }).first().click();

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.waitForTimeout(5000);
await click('Oi, tudo bem?');
await page.waitForTimeout(1500);
await shot('etapa1-card');
await click('Entendi, vamos praticar!');
await shot('etapa2-imersao');

// Etapa 2: arrasta cada cartão para a direita («já sei»)
for (let i = 0; i < 6; i++) {
  const card = page.getByLabel(/^Ouvir: /).first();
  const box = await card.boundingBox();
  const cx = box.x + box.width / 2;
  const cy = box.y - 60;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  for (let s = 1; s <= 10; s++) await page.mouse.move(cx + s * 25, cy, { steps: 2 });
  await page.mouse.up();
  await page.waitForTimeout(700);
}
await shot('etapa3-lacunas');

for (const answer of ['bine', 'Mulțumesc', 'vă']) {
  await click(answer);
  if (answer === 'bine') await shot('etapa3-resposta');
  await click('Continuar');
  await page.waitForTimeout(400);
}
await shot('etapa4-voz');

await page.getByPlaceholder(/digite sua resposta/i).fill('Bine, multumesc');
await click('Verificar');
await shot('etapa4-avaliacao');
await click('Continuar');

await page.getByPlaceholder('Escreva em romeno…').fill('Bună! Sunt bine, mulțumesc.');
await shot('etapa5-comunidade');
await click('Enviar para nativos');
await page.waitForTimeout(1500);
await shot('etapa6-recompensa');
await click('Continuar');
await page.waitForTimeout(1500);
await shot('trilha-depois');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
