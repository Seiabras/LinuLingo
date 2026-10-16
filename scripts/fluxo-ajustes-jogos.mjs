// Confere os ajustes de 16/10/2026: pachisi com casas tocáveis no celular, as variantes novas da
// raposa e gansos e do pallanguzhi, e a variante do gaja do chaturanga guardada depois de recarregar.
// Uso: node scripts/fluxo-ajustes-jogos.mjs   (BASE_URL, DEVICE=iphone|desktop, SCHEME=light|dark)
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
const shot = (name) => page.screenshot({ path: `${OUT}/ajustes-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);





async function abrir(id, texto) {
  await page.goto(BASE + '/jogo/' + id, { waitUntil: 'commit', timeout: 300000 });
  await page.waitForFunction((t) => document.body.innerText.includes(t), texto, { timeout: 1500000, polling: 1000 });
  await page.waitForTimeout(1200);
  if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
}

// 1. pachisi no celular: casas de 28 px numa faixa que rola
await abrir('pachisi', 'Lançar os búzios');
await page.getByText('Lançar os búzios', { exact: true }).first().click();
await page.waitForTimeout(900);
const caixa = await page.locator('[aria-label*="Charkoni"], [aria-label^="Pôr uma peça"]').first().boundingBox();
caixa && caixa.width >= 28 ? ok(`pachisi: a casa tem ${Math.round(caixa.width)} px`) : fail(`pachisi: casa pequena (${caixa && Math.round(caixa.width)} px)`);
await shot('pachisi');

// 2. raposa e gansos: a variante “Gansos podem voltar”
await abrir('raposa-gansos', 'Variante');
await page.getByLabel('Variante: Gansos podem voltar').first().click();
await page.waitForTimeout(600);
(await body()).includes('também para trás') ? ok('raposa: variante dos gansos que voltam') : fail('raposa: variante não aplicada');
await shot('raposa');

// 3. chaturanga: a variante do gaja fica guardada depois de recarregar
await abrir('chaturanga', 'Variante');
await page.getByLabel('Variante: Gaja de al-Adli').first().click();
await page.waitForTimeout(800);
await page.reload({ waitUntil: 'commit' });
await page.waitForFunction(() => document.body.innerText.includes('Variante'), null, { timeout: 600000, polling: 1000 });
await page.waitForTimeout(1500);
(await body()).includes('duas casas reto, pulando (al-Adli)') ? ok('chaturanga: o gaja de al-Adli continuou escolhido depois de recarregar') : fail('chaturanga: a escolha voltou ao padrão');
await shot('chaturanga');

// 4. pallanguzhi: a variante de 12 sementes
await abrir('pallanguzhi', 'Variante');
await page.getByLabel('Variante: 12 sementes').first().click();
await page.waitForTimeout(800);
(await body()).includes('chega a 6') ? ok('pallanguzhi: variante de 12 sementes, pasu de 6') : fail('pallanguzhi: variante não aplicada');
await shot('pallanguzhi');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
