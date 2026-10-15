// Confere os videogames de fliperama de Lazer › Videogames (Breakout, Space Invaders): abre o jogo,
// começa, mexe com o mouse/dedo e o teclado, pausa ao perder o foco, troca as cores e joga até o fim.
// Uso: JOGO=breakout node scripts/fluxo-arcade.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const JOGO = process.env.JOGO ?? 'breakout';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
page.setDefaultTimeout(120000);
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/${JOGO}-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);



await page.goto(`${BASE}/jogos/videogames/${JOGO}`, { waitUntil: 'commit', timeout: 300000 });
await page.getByTestId('arcade-comecar').waitFor({ timeout: 480000 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1200);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
await shot('inicio');
const campo = page.getByTestId(`${JOGO}-campo`);
const caixa = await campo.boundingBox();
await page.getByTestId('arcade-comecar').click();
// mexe: mouse/dedo e teclado
for (let k = 0; k < 6; k++) {
  if (device === 'desktop') await page.mouse.move(caixa.x + caixa.width * (0.2 + 0.12 * k), caixa.y + caixa.height * 0.9);
  else await campo.tap({ position: { x: caixa.width * (0.2 + 0.12 * k), y: caixa.height * 0.9 } });
  await page.keyboard.press(' ').catch(() => {});
  await page.keyboard.press(' ').catch(() => {});
  await page.waitForTimeout(500);
}
await page.keyboard.down('ArrowLeft');
await page.waitForTimeout(400);
await page.keyboard.up('ArrowLeft');
await shot('jogando');
await page.evaluate(() => window.dispatchEvent(new Event('blur')));
await page.getByText('Pausado').first().waitFor({ timeout: 5000 }).then(() => ok('pausou ao perder o foco'), () => fail('não pausou ao perder o foco'));
await page.getByText('do app', { exact: true }).click();
await page.getByTestId('arcade-comecar').click();
await page.waitForTimeout(1500);
await shot('cores-do-app');
// joga até o fim (sem mexer, perde logo)
const fim = await page
  .getByText(/Acabaram|Fim de jogo|limpou|invadiram|derrubaram/)
  .first()
  .waitFor({ timeout: 240000 })
  .then(() => true, () => false);
fim ? ok('a partida acabou') : fail('a partida não acabou');
await page.waitForTimeout(800);
await shot('fim');
console.log('   ', (await campo.getAttribute('aria-label')) ?? '');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
