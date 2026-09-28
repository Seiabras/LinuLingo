// Confere as gravações de gente de cada região nos sotaques: o painel «a mesma palavra, sotaques
// diferentes» (romeno e espanhol), o «🎙️ Gente de lá» no cartão e na tela de treino do sotaque, e os
// créditos com o lugar de quem gravou. Confere que o que toca é mesmo um arquivo de sotaque.
// Uso: node scripts/fluxo-vozes.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
await context.addInitScript(() => {
  window.__played = [];
  const A = window.Audio;
  window.Audio = function (src) {
    window.__played.push(decodeURIComponent(String(src)));
    return new A(src);
  };
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.toLowerCase().includes(x.toLowerCase()), t, { timeout, polling: 200 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/vozes-${device}-${scheme}-${++shots}-${name}.png` });
const lastPlayed = async (before) => {
  await page.waitForFunction((n) => window.__played.length > n, before, { timeout: 10000 }).catch(() => {});
  return page.evaluate(() => window.__played.at(-1) ?? '');
};
const played = () => page.evaluate(() => window.__played.length);
const skipTutorial = async () => {
  await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
    await page.getByText('Pular', { exact: true }).first().click();
    await page.waitForTimeout(1500);
  }
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await skipTutorial();

// 1. romeno: comparação lado a lado
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await waitText('A mesma palavra, sotaques diferentes', 60000);
const cmp = page.getByText('A mesma palavra, sotaques diferentes').first();
await cmp.scrollIntoViewIfNeeded();
let n = await played();
await page.getByRole('button', { name: /^Ouvir râu: / }).first().click();
const f1 = await lastPlayed(n);
/sotaques\/ro-[a-z]+-rau/.test(f1) ? ok(`romeno: «râu» toca a gravação do sotaque (${f1.split('/').pop().split('?')[0]})`) : fail(`romeno: tocou ${f1}`);
const chips = await page.getByRole('button', { name: /^Ouvir râu: / }).count();
chips >= 3 ? ok(`romeno: «râu» em ${chips} sotaques`) : fail(`romeno: «râu» só em ${chips}`);
await shot('romeno-comparar');

// 2. espanhol: o cartão do venezuelano com «Gente de lá»
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Espanhol · Español/).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByLabel(/^Estudar: .*Venezuelano$/).first().waitFor({ timeout: 60000 });
await page.getByLabel(/^Estudar: .*Venezuelano$/).first().click();
await waitText('Gente de lá');
(await body()).includes('Marreromarco (aprendeu a língua em Caracas)') ? ok('venezuelano: Marreromarco, que aprendeu em Caracas') : fail('venezuelano sem o falante de Caracas');
n = await played();
await page.getByRole('button', { name: /gravado por Marreromarco/ }).first().click();
const f2 = await lastPlayed(n);
/sotaques\/es-venezuelano-/.test(f2) ? ok('venezuelano: toca a gravação de Caracas') : fail(`venezuelano: tocou ${f2}`);
await page.getByText('Gente de lá').first().scrollIntoViewIfNeeded();
await shot('venezuelano');

// 3. tela de treino do sotaque e sotaque sem gravações
await page.goto(BASE + '/sotaque?id=es-porteno', { waitUntil: 'load' });
await waitText('Gente de lá', 60000);
ok('treino do portenho mostra «Gente de lá»');
await page.goto(BASE + '/sotaque?id=es-cubano', { waitUntil: 'load' });
await waitText('Ainda não há no Lingua Libre', 60000).then(() => ok('cubano: avisa que ainda não há gravações de lá'), () => fail('cubano sem o aviso'));

// 4. créditos com o lugar
await page.goto(BASE + '/creditos', { waitUntil: 'load' });
await waitText('Créditos dos áudios', 60000);
await page.getByPlaceholder(/^Buscar palavra/).fill('Caracas');
await page.waitForTimeout(800);
(await body()).includes('🗺️ Caracas') ? ok('créditos mostram o lugar de quem gravou') : fail('créditos sem o lugar');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
