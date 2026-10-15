// Confere o Quarto dos Jogos do conhecimento: abre /jogo/quarto, joga contra o Linu dando peças
// sem “!” e colocando na primeira casa vazia, depois liga a variante dos quadrados e o anúncio.
// Uso: node scripts/fluxo-quarto.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const shot = (name) => page.screenshot({ path: `${OUT}/quarto-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);


await page.goto(BASE + '/jogo/quarto', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => document.body.innerText.includes('alta ou baixa'), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1500);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();

await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Médio', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
await shot('inicio');

async function partida(rotulo) {
  let lances = 0;
  for (let k = 0; k < 80; k++) {
    await page.waitForTimeout(400);
    const t = await body();
    if (/venceu|empate|Linu completou|Linu viu/.test(t)) return true;
    if (t.includes('O Linu está pensando')) continue;
    if (/escolha a peça/.test(t)) {
      const seguras = page.locator('[aria-label^="Dar a peça"]:not([aria-label*="cuidado"])');
      const todas = page.locator('[aria-label^="Dar a peça"]');
      await ((await seguras.count()) > 0 ? seguras : todas).first().click();
      lances++;
    } else if (/coloque a peça/.test(t)) {
      await page.locator('[aria-label$=", vazia"]').first().click();
      lances++;
      if (lances === 4) await shot(`${rotulo}-meio`);
    } else if (/Terminar \(empate\)/.test(t)) {
      await page.getByText('Terminar (empate)').first().click();
    }
  }
  return false;
}

(await partida('linhas')) ? ok('a partida contra o Linu terminou') : fail('a partida não terminou');
await page.waitForTimeout(900);
await shot('fim');
console.log('   ', (await body()).match(/Quarto![^\n]*|[^\n]*empate[^\n]*/)?.[0]);

// variante dos quadrados e regra do anúncio
await page.getByText('Linhas e quadrados 2×2', { exact: true }).first().click();
await page.getByText('Anunciar “Quarto!”: não', { exact: true }).first().click();
await page.waitForTimeout(600);
(await visivel(page.getByText('Quarto!', { exact: true }))) ? ok('botão Quarto! aparece com o anúncio') : fail('sem botão Quarto!');
await shot('anuncio');
(await partida('quadrados')) ? ok('partida com quadrados e anúncio terminou') : fail('a partida com a variante não terminou');
await page.waitForTimeout(900);
await shot('fim-variante');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
