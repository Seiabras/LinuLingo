// Confere os jogos de caçador e presas (jogo da onça e bagh-chal): abre /jogo/<id> e joga contra o
// Linu dos dois lados, capturando quando dá, até o fim de cada partida.
// Uso: JOGO=onca|bagh-chal node scripts/fluxo-caca.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const JOGO = process.env.JOGO ?? 'onca';
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





const LADO = JOGO === 'onca' ? { cacador: 'a onça', presa: 'os cachorros' } : { cacador: 'os tigres', presa: 'as cabras' };
await page.goto(BASE + '/jogo/' + JOGO, { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => /capturas/.test(document.body.innerText), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
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

async function partida(lado) {
  await page.getByText(lado, { exact: true }).first().click();
  await page.waitForTimeout(800);
  let lances = 0;
  let capturas = 0;
  for (let k = 0; k < 260; k++) {
    await page.waitForTimeout(300);
    const t = await body();
    if (/Você venceu|O Linu venceu|empate\./.test(t)) return { fim: true, lances, capturas };
    if (t.includes('O Linu está pensando')) continue;
    if (await visivel(page.getByText('Parar aqui', { exact: true }))) {
      await page.getByText('Parar aqui', { exact: true }).first().click();
      continue;
    }
    // pôr uma presa (bagh-chal) ou escolher a peça e o destino, preferindo capturar
    const poe = page.locator('[aria-label$=", pôr aqui"]');
    if ((await poe.count()) > 0) {
      await poe.nth(lances % (await poe.count())).click();
      lances++;
      continue;
    }
    const pecas = page.locator('[aria-label$=", pode mover"]');
    const n = await pecas.count();
    if (n === 0) continue;
    let feito = false;
    for (let j = 0; j < n && !feito; j++) {
      await pecas.nth((j + lances) % n).click();
      await page.waitForTimeout(120);
      const cap = page.locator('[aria-label$=", capturar"]');
      const vai = page.locator('[aria-label$=", ir para cá"]');
      if ((await cap.count()) > 0) {
        await cap.first().click();
        capturas++;
        feito = true;
        if (capturas === 1) {
          await page.waitForTimeout(150);
          await shot(`${lado.replace(/\s/g, '-')}-salto`);
        }
      } else if ((await vai.count()) > 0) {
        await vai.nth(lances % (await vai.count())).click();
        feito = true;
      }
    }
    lances++;
    if (lances === 8) await shot(`${lado.replace(/\s/g, '-')}-meio`);
  }
  return { fim: false, lances, capturas };
}

for (const lado of [LADO.cacador, LADO.presa]) {
  const r = await partida(lado);
  r.fim ? ok(`jogando com ${lado}: a partida terminou (${r.lances} lances, ${r.capturas} capturas suas)`) : fail(`jogando com ${lado}: a partida não terminou em ${r.lances} lances`);
  await page.waitForTimeout(900);
  await shot(`${lado.replace(/\s/g, '-')}-fim`);
  console.log('   ', (await body()).match(/[^\n]*(Você venceu|O Linu venceu|empate\.)[^\n]*/)?.[0]);
}

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
