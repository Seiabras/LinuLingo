// Confere o Pylos dos Jogos do conhecimento: abre /jogo/pylos e joga contra o Linu pondo bolas,
// subindo algumas e tirando bolas quando fecha um quadrado, até o fim; depois troca a regra.
// Uso: node scripts/fluxo-pylos.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const shot = (name) => page.screenshot({ path: `${OUT}/pylos-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);




await page.goto(BASE + '/jogo/pylos', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => document.body.innerText.includes('na reserva'), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
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

let lances = 0;
let subidas = 0;
let tiradas = 0;
let fim = false;
for (let k = 0; k < 160 && !fim; k++) {
  await page.waitForTimeout(350);
  const t = await body();
  if (/venceu o Linu|O Linu pôs|O Linu deixou/.test(t)) {
    fim = true;
    break;
  }
  if (t.includes('O Linu está pensando')) continue;
  if (t.includes('Quadrado da sua cor')) {
    const tira = page.locator('[aria-label$=", pode tirar"]');
    if ((await tira.count()) > 0) {
      await tira.last().click();
      tiradas++;
      await page.waitForTimeout(200);
      if (await visivel(page.getByText('Pronto, só essa'))) await page.getByText('Pronto, só essa').first().click();
    }
    continue;
  }
  if (t.includes('Sua vez')) {
    const sobe = page.locator('[aria-label$=", pode subir"]');
    if (lances % 3 === 2 && (await sobe.count()) > 0) {
      await sobe.first().click();
      await page.waitForTimeout(150);
      await page.locator('[aria-label$="pode pôr aqui"]').first().click();
      subidas++;
      await page.waitForTimeout(120);
      await shot('subindo');
    } else {
      // de preferência no nível mais alto (os lugares de cima vêm depois na lista)
      const poe = page.locator('[aria-label$="pode pôr aqui"]');
      if ((await poe.count()) > 0) await poe.nth(lances % 2 ? (await poe.count()) - 1 : 0).click();
    }
    lances++;
    if (lances === 10) await shot('meio');
  }
}
fim ? ok(`a partida terminou (${lances} lances, ${subidas} subidas, ${tiradas} bolas tiradas)`) : fail('a partida não terminou');
await page.waitForTimeout(900);
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*(venceu o Linu|O Linu pôs|O Linu deixou)[^\n]*/)?.[0]);
await page.getByText('Experientes (linhas)', { exact: true }).first().click();
await page.waitForTimeout(500);
(await body()).includes('15 na reserva') ? ok('trocar a regra recomeça com 15 bolas') : fail('a regra nova não recomeçou');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
