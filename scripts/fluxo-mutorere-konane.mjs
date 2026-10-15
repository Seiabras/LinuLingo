// Confere o mū tōrere e o kōnane dos Jogos do conhecimento: abre cada um, joga contra o Linu (no
// médio) tocando no primeiro lance permitido, até a partida acabar; no kōnane, troca para 6×6 antes.
// Uso: node scripts/fluxo-mutorere-konane.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
let jogo = '';
const shot = (name) => page.screenshot({ path: `${OUT}/${jogo}-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);
const pular = async () => {
  if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
};

async function abrir(id, marca) {
  jogo = id;
  await page.goto(`${BASE}/jogo/${id}`, { waitUntil: 'commit', timeout: 300000 });
  await page.waitForFunction((m) => document.body.innerText.includes(m), marca, { timeout: 480000, polling: 500 }).catch(async (e) => {
    await shot('nao-abriu');
    throw e;
  });
  await page.waitForTimeout(1500);
  await pular();
}

async function contraOLinu() {
  await page.getByText('Personalizar', { exact: true }).first().click();
  await page.getByText('Contra o Linu', { exact: true }).first().click();
  await page.getByText('Médio', { exact: true }).first().click();
  await page.getByText('Personalizar', { exact: true }).first().click();
}

/** Joga até acabar: a cada vez sua, toca no primeiro alvo cujo rótulo bate com `alvo`. */
async function jogarAteOFim(alvo, fimRe, max = 120) {
  let lances = 0;
  for (let k = 0; k < max; k++) {
    await page.waitForTimeout(350);
    const t = await body();
    if (fimRe.test(t)) return lances;
    if (t.includes('O Linu está pensando')) continue;
    if (/Sua vez|Toque onde a pedra vai cair/.test(t)) {
      const l = page.locator(alvo);
      if ((await l.count()) > 0) {
        await l.first().click();
        lances++;
        if (lances === 2) await shot('meio');
      }
    }
  }
  return -1;
}

// mū tōrere
await abrir('mu-torere', 'Regra do centro');
await contraOLinu();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
await shot('inicio');
let n = await jogarAteOFim('[aria-label*=", pode ir para"]', /venceu|ficou sem lance|empate/);
if (n >= 0) ok(`mū tōrere: a partida terminou (${n} lances seus)`);
else fail('mū tōrere: a partida não terminou');
await page.waitForTimeout(900);
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*(venceu|sem lance|empate)[^\n]*/)?.[0]);

// kōnane
await abrir('konane', 'Tabuleiro:');
await contraOLinu();
await page.getByRole('radio', { name: 'Tabuleiro 6 por 6' }).click();
await page.waitForTimeout(800);
await shot('inicio');
// a cada vez: tira a pedra marcada, ou escolhe a pedra que salta e depois o destino
n = await jogarAteOFim('[aria-label$=", pode tocar"]', /venceu|não tem mais salto/, 160);
if (n >= 0) ok(`kōnane: a partida terminou (${n} toques seus)`);
else fail('kōnane: a partida não terminou');
await page.waitForTimeout(900);
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*(venceu|sem mais salto|não tem mais salto)[^\n]*/)?.[0]);

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
