// Confere os jogos de corrida (Ur, senet, pachisi, yut nori): abre /jogo/<id>, joga contra o Linu
// lançando e movendo a primeira peça que pode andar, até o fim (ou até LANCES passos).
// Uso: JOGO=ur|senet|pachisi|yut-nori node scripts/fluxo-corrida.mjs   (BASE_URL, DEVICE=iphone|desktop, SCHEME=light|dark, NIVEL, OPCAO)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const JOGO = process.env.JOGO ?? 'ur';
const LANCES = Number(process.env.LANCES ?? 400);
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
const shot = (name) => page.screenshot({ path: `${OUT}/${JOGO}-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);





await page.goto(BASE + '/jogo/' + JOGO, { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => /Lançar|Recomeçar/.test(document.body.innerText), null, { timeout: 900000, polling: 1000 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1500);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText(process.env.NIVEL ?? 'Médio', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();
if (process.env.OPCAO) await page.getByText(process.env.OPCAO, { exact: true }).first().click();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
await shot('inicio');

let lancamentos = 0;
let movidas = 0;
let fim = false;
for (let k = 0; k < LANCES && !fim; k++) {
  await page.waitForTimeout(250);
  const t = await body();
  if (/venceu|venceram|Você tirou|O Linu tirou|O Linu levou|Você levou/.test(t) && !/Lançar/.test(t.split('\n').find((l) => /Lançar/.test(l)) ?? '')) {
    fim = /venceu|venceram|tirou as|levou/.test(t);
    if (fim) break;
  }
  if (t.includes('O Linu está pensando')) continue;
  const lancar = page.getByText(/^Lançar (os dados|as varetas|os búzios)$/);
  if (await visivel(lancar)) {
    await lancar.first().click();
    lancamentos++;
    if (lancamentos === 3) {
      await page.waitForTimeout(250);
      await shot('lancando');
    }
    continue;
  }
  const alvo = page.locator('[aria-label$=", ir para cá"]');
  if ((await alvo.count()) > 0) {
    await alvo.first().click();
    movidas++;
    continue;
  }
  const peca = page.locator('[aria-label$=", pode andar"], [aria-label^="Pôr uma peça"], [aria-label^="Entrar com"]');
  if ((await peca.count()) > 0) {
    await peca.nth(movidas % (await peca.count())).click();
    movidas++;
    if (movidas === 12) await shot('meio');
    continue;
  }
  const passar = page.getByText(/^(Passar a vez|Não mover)$/);
  if (await visivel(passar)) await passar.first().click();
}
await page.waitForTimeout(1000);
await shot('fim');
const t = await body();
console.log('   ', t.split('\n').find((l) => /venceu|venceram|tirou as|levou/.test(l)));
fim ? ok(`${JOGO}: a partida terminou (${lancamentos} lançamentos, ${movidas} peças movidas)`) : (movidas > 10 ? ok(`${JOGO}: ${lancamentos} lançamentos e ${movidas} movidas sem erro (a partida segue)`) : fail(`${JOGO}: só ${movidas} movidas`));
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
