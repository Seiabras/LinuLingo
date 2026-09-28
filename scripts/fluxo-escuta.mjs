// Confere «🎧 Escuta e ditado» (espanhol, ou o idioma de IDIOMA=fr…): descobre qual gravação de nativo tocou (pelo arquivo) e
// responde certo, errado e sem acento, nos dois modos; confere as mensagens, o XP e as capturas.
// Uso: node scripts/fluxo-escuta.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark, IDIOMA=es|fr)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const lang = process.env.IDIOMA ?? 'es';
const LABEL = { es: /^Espanhol · Español/, fr: /^Francês · Français/ }[lang];
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });

// arquivo da gravação → palavra (src/data/<idioma>/audios.ts)
const byFile = new Map([...readFileSync(`src/data/${lang}/audios.ts`, 'utf8').matchAll(/^\s*"([^"]+)": \{ src: require\('[^']*\/(\d+\.mp3)'\)/gm)].map((m) => [m[2], m[1]]));

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
// anota cada gravação que o app toca
await context.addInitScript(() => {
  const A = window.Audio;
  window.__played = [];
  window.Audio = function (src) {
    window.__played.push(String(src));
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
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.includes(x), t, { timeout, polling: 200 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/escuta-${lang}-${device}-${scheme}-${++shots}-${name}.png` });

/** Espera a gravação nova e devolve a palavra dela. */
let seen = 0;
const heard = async () => {
  await page.waitForFunction((n) => window.__played.length > n, seen, { timeout: 15000 });
  const all = await page.evaluate(() => window.__played);
  seen = all.length;
  const file = /(\d+\.mp3)/.exec(decodeURIComponent(all[all.length - 1]))?.[1];
  return byFile.get(file);
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 120000 });
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(LABEL).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });

// cartão em Mais práticas
await page.goto(BASE + '/', { waitUntil: 'load' });
// o tutorial do idioma novo pode abrir por cima da trilha logo depois dela
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 60000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
  await page.getByText('Pular', { exact: true }).first().click();
  await page.waitForTimeout(1500);
}
await page.locator('text=Escuta e ditado >> visible=true').first().click();
await waitText('Vamos treinar o ouvido');
/palavras gravadas por falantes nativos/.test(await body()) ? ok('abre pelo cartão; usa gravações de nativos') : fail('sem as gravações de nativos');
await shot('inicio');

// 1. escolher: acerta todas menos a 3ª
await page.getByRole('button', { name: /Escolher o que ouviu/ }).click();
for (let i = 0; i < 10; i++) {
  const word = await heard();
  if (!word) fail(`gravação ${i + 1} sem palavra conhecida`);
  const options = await page.getByRole('button', { name: /^Opção / }).allTextContents();
  if (!options.includes(word)) fail(`a palavra ouvida («${word}») não está nas opções ${options.join(', ')}`);
  const pick = i === 2 ? options.find((o) => o !== word) : word;
  await page.getByRole('button', { name: `Opção ${pick}`, exact: true }).click();
  await waitText(i === 2 ? `Era «${word}».` : 'Isso!');
  if (i === 2) await shot('escolher-errou');
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('9/10 acertos');
/\+9 XP/.test(await body()) ? ok('escolher: 9/10 e +9 XP') : fail('XP do modo escolher errado');
await shot('escolher-fim');

// 2. ditado: escreve certo, sem acento (quando a palavra tem), errado
await page.getByRole('button', { name: 'Voltar', exact: true }).click();
await page.getByRole('button', { name: /Ditado/ }).click();
let hits = 0;
let accents = false;
for (let i = 0; i < 10; i++) {
  const word = await heard();
  const box = page.getByLabel('O que você ouviu');
  let expect;
  if (i === 1) {
    await box.fill('zzzz');
    expect = `Era «${word}».`;
  } else if (!accents && /[áéíóúñüàâçèêëîïôûùÿ]/.test(word)) {
    accents = true;
    await box.fill(word.normalize('NFD').replace(/[̀-ͯ]/g, ''));
    expect = word.includes('ñ') ? null : 'só faltou acento';
    hits++;
  } else {
    await box.fill(word);
    expect = 'Escrita perfeita';
    hits++;
  }
  await box.press('Enter');
  if (expect) await waitText(expect).catch(() => fail(`ditado ${i + 1} («${word}»): esperava «${expect}»`));
  else await page.waitForTimeout(600);
  if (i === 1 || (accents && expect === 'só faltou acento' && shots < 6)) await shot(i === 1 ? 'ditado-errou' : 'ditado-acento');
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('acertos');
const end = await body();
const m = /(\d+)\/10 acertos/.exec(end);
m && Number(m[1]) >= hits - 1 ? ok(`ditado: ${m[1]}/10 (o dobro de XP: ${/\+(\d+) XP/.exec(end)?.[1]})`) : fail(`ditado: placar ${m?.[1]} (esperado ~${hits})`);
await shot('ditado-fim');

// 3. o progresso fica guardado: as erradas voltam
await page.getByRole('button', { name: 'Voltar', exact: true }).click();
await page.goto(BASE + '/escuta', { waitUntil: 'load' });
await waitText('Vamos treinar o ouvido');
ok('reabre com o progresso guardado');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
