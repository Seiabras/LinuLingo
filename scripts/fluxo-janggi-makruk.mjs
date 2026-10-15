// Teste de ponta a ponta do xadrez coreano (janggi) e do tailandês (makruk): abre cada jogo, liga
// “Contra o Linu”, faz dois lances tocando nas peças e deixa o Linu responder.
// Uso: BASE_URL=http://localhost:8101 DEVICE=iphone SCHEME=dark npx tsx scripts/fluxo-janggi-makruk.mjs
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
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
let n = 0;
const shot = async (jogo, nome) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/${jogo}-${device}-${scheme}-${String(++n).padStart(2, '0')}-${nome}.png` });
};
const toque = (rotulo) => page.getByLabel(rotulo).first().click({ timeout: 10000 });
const semLinu = () => page.waitForFunction(() => !document.body.innerText.includes('O Linu está pensando'), null, { timeout: 60000 });

async function abrir(id, titulo) {
  await page.goto(BASE + '/jogo/' + id, { waitUntil: 'commit', timeout: 900000 });
  await page.getByText(titulo).first().waitFor({ timeout: 900000 });
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).first().isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
  if (!(await page.evaluate(() => document.body.innerText.includes('Você ·')))) {
    await page.getByText('Personalizar', { exact: true }).first().click();
    await page.getByText('Contra o Linu', { exact: true }).first().click();
    await page.getByText('Personalizar', { exact: true }).first().click();
  }
}

// janggi: o soldado azul da coluna 1 avança; depois o da coluna 3
await abrir('janggi', 'Xadrez coreano (Janggi)');
await page.getByText('Recomeçar', { exact: true }).first().click();
await shot('janggi', 'inicio');
await toque('Ponto 7, 1: soldado azul');
await shot('janggi', 'soldado-escolhido');
await toque(/^Ponto 6, 1$/);
await page.waitForTimeout(600);
await semLinu();
await shot('janggi', 'linu-respondeu');
await toque('Ponto 7, 3: soldado azul');
await toque(/^Ponto 6, 3$/);
await page.waitForTimeout(600);
await semLinu();
await shot('janggi', 'dois-lances');

// makruk: o bia de e3 e o de d3 avançam
await abrir('makruk', 'Xadrez tailandês (Makruk)');
await page.getByText('Recomeçar', { exact: true }).first().click();
await shot('makruk', 'inicio');
await toque('Casa e3: bia branco');
await shot('makruk', 'bia-escolhido');
await toque(/^Casa e4$/);
await page.waitForTimeout(600);
await semLinu();
await shot('makruk', 'linu-respondeu');
await toque('Casa d3: bia branco');
await toque(/^Casa d4$/);
await page.waitForTimeout(600);
await semLinu();
await shot('makruk', 'dois-lances');

console.log('erros:', errors.length ? errors : 'nenhum');
await browser.close();
