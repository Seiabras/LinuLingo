// Teste de ponta a ponta das outras telas: etimologia, sprint com gestos, conversa, comunidade e tema escuro.
// Uso: node scripts/fluxo-extras.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
mkdirSync(OUT, { recursive: true });

function chromiumPath() {
  const root = join(homedir(), '.cache/ms-playwright');
  const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  return process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined);
}

const browser = await chromium.launch({ executablePath: chromiumPath() });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  const f = `${OUT}/extras-${String(++n).padStart(2, '0')}-${name}.png`;
  await page.screenshot({ path: f });
  console.log('📸', f);
};
const click = (text) => page.getByText(text, { exact: true }).first().click();
const go = async (path) => {
  await page.goto(BASE + path, { waitUntil: 'load', timeout: 180000 });
  await page.waitForTimeout(6000);
};

// Etimologia
await go('/vocabulario');
await click('Etimologia');
await shot('etimologia');

// Sprint: 3 gestos + 1 botão
await go('/sprint');
const drag = async (dx, dy) => {
  const box = await page.getByLabel('Virar cartão').boundingBox();
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  for (let s = 1; s <= 10; s++) await page.mouse.move(cx + (dx * s) / 10, cy + (dy * s) / 10, { steps: 2 });
  await page.mouse.up();
  await page.waitForTimeout(600);
};
await page.getByLabel('Virar cartão').click();
await shot('sprint-virado');
await drag(250, 0);
await drag(-250, 0);
await drag(0, -250);
await click('↓ Difícil');
await page.getByLabel('Sair').click();
await page.waitForTimeout(1200);
await shot('sprint-resumo');

// Conversa com quebra de registro
await go('/cenario/ro-s-hotel');
const say = async (t) => {
  await page.getByPlaceholder(/Responda em romeno/).fill(t);
  await page.getByLabel('Enviar').click();
  await page.waitForTimeout(700);
};
await say('Tu ai o cameră?');
await say('Da, am o rezervare pe numele Silva.');
await say('Poftiți.');
await say('Care este parola de wifi?');
await shot('conversa-meio');
await say('Mulțumesc frumos!');
await shot('conversa-fim');

// Comunidade: corrigir o Lucas
await go('/comunidade');
const box = page.getByRole('textbox').first();
await box.fill('Bună! Eu sunt Lucas. Sunt din Brazilia și locuiesc în São Paulo.');
await click('Enviar correção');
await page.waitForTimeout(1200);
await shot('comunidade-corrigido');

// Tema escuro pelo perfil
await go('/perfil');
await click('🌙 Escuro');
await shot('perfil-escuro');
await go('/');
await shot('trilha-escuro');
await go('/licao/ro-u1-l1');
await shot('licao-escuro');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].map((e) => e.slice(0, 300)).join('\n   ')}` : '✅ sem erros no console');
await browser.close();
