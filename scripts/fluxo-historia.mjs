// Teste de ponta a ponta das histórias interativas: desvio, escolha errada (dica), final e contador de finais.
// Uso: node scripts/fluxo-historia.mjs   (servidor em http://localhost:8081)
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
page.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && errors.push(m.text()));

let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  const f = `${OUT}/historia-${device}-${String(++n).padStart(2, '0')}-${name}.png`;
  await page.screenshot({ path: f });
  console.log('📸', f);
};
const click = async (text) => {
  await page.getByText(text, { exact: true }).first().click();
  await page.waitForTimeout(500);
};
const expectText = async (text) => {
  if (!(await page.getByText(text).first().isVisible().catch(() => false))) throw new Error(`não achei: ${text}`);
};

await page.goto(BASE + '/historias', { waitUntil: 'load', timeout: 180000 });
await page.waitForTimeout(6000);
await shot('lista');
await click('Linu în București');
await shot('inicio');
await click('Merge la plajă.');
await expectText('Bucureștiul nu este la mare');
await click('Încearcă din nou.');
await click('Intră în brutărie.');
await click('O pizza, vă rog.');
await expectText('Nu avem pizza');
await shot('dica');
await click('Un covrig, vă rog.');
await click('Ver tradução');
await shot('traducao');
await click('Doi lei.');
await page.waitForTimeout(1200);
await expectText('Café da manhã romeno!');
await expectText('final descoberto');
await shot('final');
await click('Voltar às histórias');
await page.waitForTimeout(1200);
await expectText('1/3 finais');
await shot('lista-depois');

// B1: escolha errada sobre o vampiro
await click('O noapte la Castelul Bran');
await click('Ce s-a întâmplat de fapt?');
await click('Deci Vlad Țepeș era un vampir?');
await expectText('governante real');
await shot('b1-dica');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
