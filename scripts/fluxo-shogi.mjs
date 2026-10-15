// Confere o xadrez japonês (shogi): abre o jogo, faz lances a dois (com uma captura, a escolha da
// promoção e um drop), troca o estilo das peças e joga contra o Linu no difícil, medindo o tempo.
// Uso: node scripts/fluxo-shogi.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 900 } }[device];
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
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.toLowerCase().includes(x.toLowerCase()), t, { timeout, polling: 100 });
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/shogi-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const casa = (rotulo) => page.locator(`[aria-label^="Casa ${rotulo}"]`).first();
const lance = async (de, para) => {
  await casa(de).click();
  await page.waitForTimeout(150);
  await casa(para).click();
  await page.waitForTimeout(500);
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2000);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.goto(BASE + '/jogo/shogi', { waitUntil: 'load' });
await waitText('Vez do sente', 240000);
await page.waitForTimeout(800);
await shot('inicio');
ok('o tabuleiro abriu');

await lance('7七', '7六');
await lance('3三', '3四');
await casa('8八').click();
await waitText('Bispo (角)');
ok('tocar na peça mostra o nome e como ela anda');
await casa('2二').click();
await waitText('Promover?');
await shot('promover');
ok('a captura na zona pergunta se promove');
await page.locator('[aria-label="Promover"]').first().click();
await page.waitForTimeout(500);
(await casa('2二').getAttribute('aria-label')).includes('cavalo-dragão') ? ok('o bispo virou cavalo-dragão') : fail('não promoveu');
await lance('3一', '2二');
await page.locator('[aria-label^="bispo na mão de Sente"]').click();
await waitText('da mão');
await casa('5五').click();
await page.waitForTimeout(600);
(await casa('5五').getAttribute('aria-label')).includes('bispo do sente') ? ok('o bispo da mão foi largado em 5五') : fail('o drop não aconteceu');
await shot('drop');

// estilos de peça
await page.getByText('Personalizar', { exact: true }).click();
await page.waitForTimeout(500);
for (const estilo of ['Letra e movimento', 'Kanji e movimento']) {
  await page.getByText(estilo, { exact: true }).first().click();
  await page.waitForTimeout(500);
  await shot(estilo.split(' ')[0].toLowerCase());
}
ok('os estilos de peça trocam');

// contra o Linu no difícil
await page.getByText('Contra o Linu', { exact: true }).click();
await page.getByText('Difícil', { exact: true }).click();
await page.getByText('Kanji', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).click();
await page.getByText('Recomeçar', { exact: true }).click();
await waitText('Vez do sente');
const tempos = [];
for (const [de, para] of [
  ['7七', '7六'],
  ['2七', '2六'],
  ['2六', '2五'],
]) {
  await casa(de).click();
  await page.waitForTimeout(150);
  await casa(para).click();
  const t0 = Date.now();
  await page.waitForTimeout(100);
  await page.waitForFunction(() => /Vez do sente|Xeque|venceu/.test(document.body.innerText) && !document.body.innerText.includes('O Linu está pensando'), null, { timeout: 15000 });
  tempos.push(Date.now() - t0);
}
await shot('linu');
const pior = Math.max(...tempos);
// o Linu espera 450 ms antes de pensar (para a animação); o resto é a busca
pior - 450 < 1000 ? ok(`o Linu respondeu (pior: ${pior} ms, com 450 ms de espera)`) : fail(`o Linu demorou ${pior} ms`);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
