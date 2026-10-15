// Teste de ponta a ponta do chaturanga, do Jogo das Amazonas, do dara e do Lasca: abre cada jogo,
// liga “Contra o Linu”, faz um lance tocando nas casas e deixa o Linu responder.
// Uso: BASE_URL=http://localhost:8101 DEVICE=iphone SCHEME=dark OUT_DIR=capturas npx tsx scripts/fluxo-chaturanga-etc.mjs
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
const shot = async (jogo, nome) => {
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/${jogo}-${device}-${scheme}-${nome}.png` });
};
const toque = (rotulo) => page.getByLabel(rotulo).first().click({ timeout: 15000 });
const semLinu = async () => {
  await page.waitForTimeout(700);
  await page.waitForFunction(() => !document.body.innerText.includes('O Linu está pensando'), null, { timeout: 60000 });
  await page.waitForTimeout(1500);
};

let primeiro = true;
async function abrir(id, titulo) {
  await page.goto(BASE + '/jogo/' + id, { waitUntil: 'commit', timeout: 900000 });
  await page.getByText(titulo).first().waitFor({ timeout: primeiro ? 900000 : 120000 });
  primeiro = false;
  await page.waitForTimeout(2000);
  if (await page.getByText('Pular', { exact: true }).first().isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
  if (!(await page.evaluate(() => document.body.innerText.includes('Você ·')))) {
    await page.getByText('Personalizar', { exact: true }).first().click();
    await page.getByText('Contra o Linu', { exact: true }).first().click();
    await page.getByText('Personalizar', { exact: true }).first().click();
  }
  await page.getByText('Recomeçar', { exact: true }).first().click();
  await shot(id, '1-inicio');
}

// chaturanga: o padati de e2 anda para e3
await abrir('chaturanga', 'Chaturanga');
await toque('Casa e2: padati (soldado) branco');
await shot('chaturanga', '2-escolhido');
await toque(/^Casa e3$/);
await semLinu();
await shot('chaturanga', '3-linu');

// Amazonas: a amazona de d1 sobe para d5 e atira em d1
await abrir('amazonas', 'Jogo das Amazonas');
await toque('Casa d1: amazona branca');
await toque(/^Casa d5$/);
await shot('amazonas', '2-andou');
await toque(/^Casa d1$/);
await semLinu();
await shot('amazonas', '3-linu');

// dara: põe duas peças
await abrir('dara', 'Dara');
await toque(/^Buraco 3, 3$/);
await semLinu();
await toque(/^Buraco 5, 1$/);
await semLinu();
await shot('dara', '2-colocando');

// Lasca: o soldado de c3 anda para d4
await abrir('lasca', 'Lasca');
await toque(/^Casa c3: coluna/);
await shot('lasca', '2-escolhido');
await toque(/^Casa d4$/);
await semLinu();
await shot('lasca', '3-linu');

console.log('erros:', errors.length ? errors : 'nenhum');
await browser.close();
