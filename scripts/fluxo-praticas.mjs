// Teste de ponta a ponta das práticas: diário (corretor), palácio da memória (jogo) e shadowing (microfone falso).
// Uso: node scripts/fluxo-praticas.mjs   (servidor em http://localhost:8081)
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

const browser = await chromium.launch({
  executablePath: chromiumPath(),
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', permissions: ['microphone'] });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && !m.text().includes('Unknown event handler property') && errors.push(m.text()));

let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  const f = `${OUT}/praticas-${device}-${String(++n).padStart(2, '0')}-${name}.png`;
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
const go = async (path) => {
  await page.goto(BASE + path, { waitUntil: 'load', timeout: 180000 });
  await page.waitForTimeout(6000);
};

// Diário
await go('/diario');
await page.getByLabel('Seu texto do diário').fill('Buna dimineata! Eu este Lucas si am foame. Locuiesc la Cluj si vreau un cafea.');
await click('Corrigir');
await expectText('Como um nativo diria');
await expectText('Bună dimineața! Eu sunt Lucas și mi-e foame. Locuiesc în Cluj și vreau o cafea.');
await shot('diario-correcao');
await click('Salvar no diário (+10 XP)');
await page.waitForTimeout(1200);
await expectText('Salvo! +10 XP');
await shot('diario-salvo');

// Palácio
await go('/palacio');
await shot('palacio');
await click('🎯 Jogar: em que sala mora?');
await click('A Forja');
await expectText('💡');
await shot('palacio-jogo');
await go('/palacio');
await click('O Jardim do Camaleão');
await shot('palacio-sala-neutro');

// Shadowing com microfone falso
await go('/shadowing');
await click('Gravar minha voz');
await page.waitForTimeout(2500);
await shot('shadowing-gravando');
await click('Parar');
await page.waitForTimeout(5000);
await shot('shadowing-resultado');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
