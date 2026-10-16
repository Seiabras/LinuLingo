// Confere o Duelo de Bichos (Lazer › Cartas): abre o jogo, fotografa o tutorial, pula, e joga
// contra o Linu tocando nas cartas que dá para jogar e atacando a vida (ou o bicho que a Guarda
// obriga), até o fim (ou até 40 turnos). Uso: node scripts/fluxo-duelo-bichos.mjs
//   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark, OUT_DIR, NIVEL=Fácil)
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
const shot = (name) => page.screenshot({ path: `${OUT}/bichos-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);
const clica = async (texto) => {
  const l = page.getByText(texto, { exact: true });
  if (await visivel(l)) {
    await l.first().click();
    await page.waitForTimeout(250);
    return true;
  }
  return false;
};

await page.goto(BASE + '/jogos/cartas/duelo-de-bichos', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => /turno/i.test(document.body.innerText), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1200);
(await body()).includes('Tutorial · 1 de') ? ok('o tutorial abre na primeira vez') : fail('sem tutorial');
await shot('tutorial');
await clica('Pular');
if (process.env.NIVEL) await clica(process.env.NIVEL);
await shot('inicio');

let turnos = 0;
let fim = false;
let atacou = false;
for (let k = 0; k < 500 && !fim; k++) {
  await page.waitForTimeout(400);
  const t = await body();
  if (/venceu/.test(t)) {
    fim = true;
    break;
  }
  if (!(await visivel(page.getByText('Passar a vez', { exact: true })))) continue;
  const jogavel = page.locator('[aria-label$=", pode jogar"]');
  if ((await jogavel.count()) > 0) {
    await jogavel.first().click();
    await page.waitForTimeout(300);
    // carta com alvo (truque ou evolução): toca no primeiro alvo marcado, ou cancela
    if (/Toque no (alvo|filhote) marcado/.test(await body())) {
      const alvos = page.locator('[aria-label$=", alvo"]');
      if ((await alvos.count()) > 0) await alvos.first().click();
      else await clica('Cancelar');
    }
    continue;
  }
  const atacante = page.locator('[aria-label$=", pode atacar"]');
  if ((await atacante.count()) > 0) {
    await atacante.first().click();
    await page.waitForTimeout(250);
    if (!atacou) await shot('atacando');
    const alvos = page.locator('[aria-label$=", alvo"]');
    if ((await alvos.count()) > 0) {
      await alvos.last().click();
      atacou = true;
      continue;
    }
    await clica('Cancelar');
  }
  await clica('Passar a vez');
  turnos++;
  if (turnos === 4) await shot('meio');
  if (turnos >= 40) break;
}
fim ? ok(`a partida terminou (${turnos} turnos seus)`) : fail(`a partida não terminou em ${turnos} turnos`);
atacou ? ok('atacou') : fail('não chegou a atacar');
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*venceu[^\n]*/)?.[0]);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
