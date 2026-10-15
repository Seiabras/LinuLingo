// Teste de ponta a ponta do gamão: abre o jogo, liga “Contra o Linu”, rola os dados, joga algumas
// vezes (tocando nos pontos até achar um lance que vale) e deixa o Linu responder.
// Uso: BASE_URL=http://localhost:8101/LinuLingo DEVICE=iphone SCHEME=dark npx tsx scripts/fluxo-gamao.mjs
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VEZES = Number(process.env.VEZES ?? 3);
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
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/gamao-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const texto = () => page.evaluate(() => document.body.innerText);
const visivel = (t) => page.getByText(t, { exact: true }).first().isVisible().catch(() => false);

// (o servidor do Expo serve o app em /LinuLingo: BASE_URL=http://localhost:8101/LinuLingo)
await page.goto(BASE + '/jogo/gamao', { waitUntil: 'load', timeout: 900000 });
await page.getByText('Gamão (Backgammon)').first().waitFor({ timeout: 900000 });
await page.waitForTimeout(3000);
if (await visivel('Pular')) {
  await page.getByText('Pular', { exact: true }).first().click();
  await page.waitForTimeout(1500);
}
await shot('inicio');

// contra o Linu
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Médio', { exact: true }).first().click().catch(() => {});
await shot('personalizar');
await page.getByText('Personalizar', { exact: true }).first().click();

const pontos = Array.from({ length: 24 }, (_, i) => i + 1);
/** Joga um passo das claras tocando nos pontos até a vez mudar. */
async function umPasso() {
  const antes = await texto();
  const origens = ['Barra', ...pontos.map((p) => `Ponto ${p}`)];
  for (const o of origens) {
    const loc = o === 'Barra' ? page.getByLabel('Barra', { exact: true }) : page.getByLabel(new RegExp(`^${o}(:|$)`));
    await loc.first().click({ timeout: 2000 }).catch(() => {});
    const t = await texto();
    if (!t.includes('ponto marcado')) continue;
    for (const alvo of [...pontos.map((p) => new RegExp(`^Ponto ${p}(:|$)`)), 'Bandeja das peças tiradas']) {
      await page.getByLabel(alvo).first().click({ timeout: 2000 }).catch(() => {});
      const depois = await texto();
      if (depois !== t && !depois.includes('ponto marcado')) return true;
      if (!depois.includes('ponto marcado')) break;
    }
  }
  return antes !== (await texto());
}

for (let vez = 0; vez < VEZES; vez++) {
  // espera a vez das claras com o botão de rolar, ou já com dados (a abertura)
  await page.waitForFunction(() => /role os dados|quem começa|Rolar os dados|toque numa peça|Toque numa peça/i.test(document.body.innerText) && !document.body.innerText.includes('O Linu está pensando'), null, { timeout: 120000 });
  if (await visivel('Rolar os dados')) {
    await page.getByText('Rolar os dados', { exact: true }).first().click();
    await page.waitForTimeout(250);
    if (vez === 0) await shot('dados-rolando');
    await page.waitForTimeout(900);
  }
  // abertura empatada ou o Linu começou: volta ao laço
  if (await visivel('Rolar os dados')) {
    vez--;
    continue;
  }
  if ((await texto()).includes('O Linu está pensando')) {
    await page.waitForTimeout(4000);
    continue;
  }
  await shot(`vez${vez}-dados`);
  for (let k = 0; k < 4; k++) {
    if (await visivel('Passar a vez')) break;
    const ok = await umPasso();
    if (!ok) break;
    await page.waitForTimeout(400);
  }
  await shot(`vez${vez}-jogou`);
  if (await visivel('Passar a vez')) await page.getByText('Passar a vez', { exact: true }).first().click();
  await page.waitForTimeout(1200);
  await shot(`vez${vez}-linu`);
  await page.waitForTimeout(4500);
}
await shot('fim');
console.log('erros:', errors.length ? errors : 'nenhum');
await browser.close();
