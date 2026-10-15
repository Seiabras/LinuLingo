// Confere o Dominó dos Jogos do conhecimento: abre /jogo/domino, joga contra o Linu tocando nas
// pedras que servem (comprando e passando quando precisa) até a rodada acabar, e depois confere o
// modo a dois, em que a mão de quem tem a vez fica escondida até um toque.
// Uso: node scripts/fluxo-domino.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
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
const shot = (name) => page.screenshot({ path: `${OUT}/domino-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);

await page.goto(BASE + '/jogo/domino', { waitUntil: 'load', timeout: 180000 });
await page.waitForFunction(() => document.body.innerText.includes('Monte:'), null, { timeout: 120000, polling: 300 });
await page.waitForTimeout(1500);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();

// contra o Linu
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Difícil', { exact: true }).first().click();
await shot('personalizar');
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
(await body()).includes('Linu') ? ok('jogando contra o Linu') : fail('não achou o Linu no placar');
await shot('inicio');

let jogadas = 0;
let compras = 0;
let fimDeRodada = false;
for (let k = 0; k < 120 && !fimDeRodada; k++) {
  await page.waitForTimeout(350);
  const t = await body();
  if (t.includes('Próxima rodada') || t.includes('Nova partida')) {
    fimDeRodada = true;
    break;
  }
  if (t.includes('O Linu está pensando')) continue;
  const comprar = page.getByText('Comprar uma pedra', { exact: true });
  const passar = page.getByText('Passar a vez', { exact: true });
  if (await visivel(comprar)) {
    await comprar.first().click();
    compras++;
    continue;
  }
  if (await visivel(passar)) {
    await passar.first().click();
    continue;
  }
  const serve = page.locator('[aria-label*=", serve"]');
  if ((await serve.count()) > 0) {
    await serve.first().click();
    await page.waitForTimeout(200);
    const ponta = page.locator('[aria-label*="encostar a pedra escolhida"]');
    if ((await ponta.count()) > 0) await ponta.last().click();
    jogadas++;
    if (jogadas === 3) {
      await page.waitForTimeout(120);
      await shot('deslizando');
      await page.waitForTimeout(600);
      await shot('meio');
    }
  }
}
ok(`você jogou ${jogadas} pedras e comprou ${compras}`);
fimDeRodada ? ok('a rodada terminou') : fail('a rodada não terminou');
await page.waitForTimeout(800);
await shot('fim-rodada');
const t = await body();
/bateu|trancado/.test(t) ? ok('o fim da rodada explica a batida ou o trancamento') : fail('sem explicação no fim da rodada');
/Placar: Você \d+ × \d+ Linu/.test(t) ? ok('placar da partida aparece') : fail('sem placar');
await page.getByText(/^(Próxima rodada|Nova partida)$/).first().click();
await page.waitForTimeout(800);
/Rodada 2|Rodada 1/.test(await body()) ? ok('nova rodada começou') : fail('não começou nova rodada');

// a dois no mesmo aparelho: a mão fica escondida
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('2 jogadores no aparelho', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
(await body()).includes('Toque para ver suas pedras') ? ok('a dois, a mão começa escondida') : fail('a mão não ficou escondida');
await shot('dois-escondida');
await page.getByText(/Toque para ver suas pedras/).first().click();
await page.waitForTimeout(300);
const serve = page.locator('[aria-label*=", serve"]');
(await serve.count()) > 0 ? ok('depois do toque, a mão aparece') : fail('a mão não apareceu');
await serve.first().click();
await page.waitForTimeout(600);
(await body()).includes('Toque para ver suas pedras') ? ok('a vez passou e a mão do outro está escondida') : fail('a mão do outro ficou à mostra');
await shot('dois-vez-do-outro');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
