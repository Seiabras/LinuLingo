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
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && errors.push(m.text()));

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

// Tutorial do Linu (abre sozinho na primeira visita)
await go('/');
await shot('tutorial-1');
// avança até o slide que tem o elemento (o tutorial ganha slides com o tempo; contar «Próximo» quebra)
const nextUntil = async (locator, max = 20) => {
  for (let k = 0; k < max && !(await locator.isVisible().catch(() => false)); k++) {
    await page.getByText('Próximo', { exact: true }).first().click();
    await page.waitForTimeout(350);
  }
};
await click('Próximo');
await shot('tutorial-trilha');
await nextUntil(page.getByText('pinguin', { exact: true }));
{
  const card = page.getByText('pinguin', { exact: true });
  const b = await card.boundingBox();
  await page.mouse.move(b.x + b.width / 2, b.y);
  await page.mouse.down();
  for (let s = 1; s <= 10; s++) await page.mouse.move(b.x + b.width / 2 + s * 25, b.y, { steps: 2 });
  await page.mouse.up();
  await page.waitForTimeout(700);
}
await shot('tutorial-gesto');
await nextUntil(page.getByText('🔊 Configurar a voz', { exact: true }));
await shot('tutorial-voz');
await click('🔊 Configurar a voz');
await page.waitForTimeout(3500);
await shot('voz');
await page.getByLabel('Voltar').click();
await page.waitForTimeout(800);
await nextUntil(page.getByText('Começar!', { exact: true }));
await click('Começar!');
await page.waitForTimeout(2000);
await shot('trilha-apos-tutorial');

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

// Comunidade: avaliar o Lucas com emoji e uma sugestão
await go('/comunidade');
await page.getByLabel('Entendi quase tudo', { exact: true }).first().click();
const box = page.getByRole('textbox').first();
await box.fill('Bună! Eu sunt Lucas. Sunt din Brazilia și locuiesc în São Paulo.');
await click('Enviar avaliação');
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
