// Confere as fotos reais do pinguim-de-barbicha no tutorial, no Perfil e nos Créditos: as setas que
// rolam a faixa para os lados, o recorte e a foto aberta em tela cheia (setas, teclado e fechar).
// Uso: node scripts/fluxo-fotos.mjs   (servidor em http://localhost:8081)
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
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));

const photosLoaded = async () => {
  await page.getByText('Assim é um pinguim-de-barbicha de verdade').first().waitFor({ timeout: 60000 });
  await page.waitForFunction(() => {
    const imgs = [...document.querySelectorAll('img')].filter((i) => /pinguim-barbicha/.test(i.src));
    return imgs.length >= 4 && imgs.every((i) => i.complete && i.naturalWidth > 0);
  }, null, { timeout: 30000 });
};

await page.goto(BASE + '/tutorial', { waitUntil: 'load', timeout: 180000 });
// o 1º passo é a escolha do idioma; as fotos vêm no 2º
await page.getByText('Próximo', { exact: true }).first().click({ timeout: 90000 });
await photosLoaded();
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-1-tutorial.png` });
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await photosLoaded();
const strip = page.getByLabel('Abrir a foto: De perto', { exact: false }).first();
await strip.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-2-perfil.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
// a faixa é mais larga que a tela no celular: a seta da direita aparece e rola
const right = page.getByLabel('Rolar as fotos para a direita');
const left = page.getByLabel('Rolar as fotos para a esquerda');
check((await left.count()) === 0, 'no começo não há seta para a esquerda');
if (await right.count()) {
  await right.click();
  await page.waitForTimeout(700);
  check((await left.count()) === 1, 'a seta da direita rolou a faixa (apareceu a da esquerda)');
  await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-3-rolada.png` });
  await left.click();
  await page.waitForTimeout(700);
  check((await left.count()) === 0, 'a seta da esquerda voltou ao começo');
} else console.log('   · a faixa cabe inteira na tela: sem setas');
// tocar numa foto abre ela inteira
await strip.click();
const counter = async () => (await page.evaluate(() => document.body.innerText.match(/(\d) de 4/)?.[0]));
await page.waitForFunction(() => /\d de 4/.test(document.body.innerText), null, { timeout: 5000 });
check((await counter()) === '1 de 4', 'a foto 1 abriu em tela cheia');
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-4-aberta.png` });
await page.getByLabel('Próxima foto').click();
await page.waitForTimeout(300);
check((await counter()) === '2 de 4', 'a seta passou para a foto 2');
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-5-aberta-2.png` });
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(300);
check((await counter()) === '3 de 4', 'a seta do teclado passou para a foto 3');
await page.getByLabel('Foto anterior').click();
await page.getByLabel('Foto anterior').click();
await page.getByLabel('Foto anterior').click();
await page.waitForTimeout(300);
check((await counter()) === '4 de 4', 'voltando da 1ª chega na última');
await page.keyboard.press('Escape');
await page.waitForTimeout(500);
check(!(await counter()), 'o Esc fechou a foto');
await strip.click();
await page.waitForFunction(() => /\d de 4/.test(document.body.innerText), null, { timeout: 5000 });
await page.getByLabel('Fechar', { exact: true }).click();
await page.waitForTimeout(500);
check(!(await counter()), 'o botão Fechar fechou a foto');
// o início mostra o mapa da aventura
await page.goto(BASE + '/', { waitUntil: 'load' });
// numa conta nova o tutorial abre por cima do início
await page.getByText('Pular', { exact: true }).first().click({ timeout: 30000 });
await page.getByLabel(/^Parada A1\.1:/).first().waitFor({ timeout: 30000 });
await page.waitForTimeout(800);
check((await page.getByLabel(/^Parada /).count()) === 15, 'o mapa do início tem as 15 paradas');
await page.screenshot({ path: `${OUT}/fotos-${device}-${scheme}-6-inicio.png` });
await page.goto(BASE + '/creditos', { waitUntil: 'load' });
await page.getByText('Fotos do pinguim-de-barbicha', { exact: false }).first().waitFor({ timeout: 30000 });
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
