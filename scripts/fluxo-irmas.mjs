// Palavras irmãs: a árvore da família (raiz, ramos e «outra raiz»), a entrada pela aba Etimologia e
// pela tela inicial, e o jogo «Qual é a irmã?» respondido pelos dados (acertos e um erro de propósito,
// que vai para o caderno de erros). Em romeno e em sueco.
// Uso: npx tsx scripts/fluxo-irmas.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { areSiblings, WORD_FAMILIES, wordIn } from '../src/data/palavras-irmas.ts';

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
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
let n = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/irmas-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const text = () => page.evaluate(() => document.body.innerText);
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src).test(document.body.innerText), re.source, { timeout });

/** Joga uma rodada: acerta todas menos a primeira (erra de propósito). */
async function playRound(lang) {
  await page.getByText('Jogar (5 perguntas)', { exact: true }).first().click();
  for (let q = 0; q < 5; q++) {
    await waitText(new RegExp(`${q + 1}/5`));
    // a certa é a opção cuja família tem a palavra estudada que está na tela e é irmã do português
    const body = await text();
    const labels = await page.getByLabel(/^Opção: /).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label').slice(7)));
    const right = labels.find((o) => {
      const f = WORD_FAMILIES.find((x) => wordIn(x, 'pt').word === o);
      return f && areSiblings(f, lang, 'pt') && body.includes(`${wordIn(f, lang).word}\n`);
    });
    if (!right) throw new Error(`não achei a certa entre ${labels.join(', ')}`);
    const pick = q === 0 ? labels.find((l) => l !== right) : right;
    await page.getByLabel(`Opção: ${pick}`, { exact: true }).click();
    await waitText(q === 0 ? /Era «/ : /Isso!/);
    if (q === 0) await shot(`${lang}-erro`);
    await page.getByText('Próxima', { exact: true }).first().click();
  }
  await waitText(/4\/5 irmãs encontradas/);
  console.log(`   ✓ ${lang}: jogo com 4 acertos e 1 erro de propósito`);
}

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);

// entrada pela tela inicial
await page.getByText('Palavras irmãs', { exact: true }).first().click({ timeout: 30000 });
await waitText(/Qual é a irmã\?/);
await shot('lista');

// a árvore da família «dia»: raiz, ramos e a armadilha do inglês «day»
await page.getByLabel('Família de «dia»').click();
await waitText(/Indo-europeu \*dyew-/);
const t = await text();
check(/Outra raiz \(não são irmãs destas\)/i.test(t) && t.includes('day') && t.includes('день'), '«dia»: «день» no ramo eslavo e «day» em outra raiz');
await page.getByLabel('Família de «dia»').scrollIntoViewIfNeeded();
await shot('arvore-dia');
await page.getByLabel('Família de «dia»').click();

await playRound('ro');

// o erro foi para o caderno
await page.goto(BASE + '/erros', { waitUntil: 'load' });
await waitText(/Palavras irmãs/);
check(true, 'o erro do jogo foi para o caderno de erros (Palavras irmãs)');

// entrada pela aba Etimologia, em sueco
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Sueco · Svenska/).first().click({ timeout: 20000 });
await page.waitForTimeout(1500);
await page.goto(BASE + '/vocabulario', { waitUntil: 'load' });
await page.getByText('Etimologia', { exact: true }).first().click({ timeout: 30000 });
await page.getByText('Palavras irmãs entre idiomas:', { exact: false }).first().click();
await waitText(/Qual é a irmã\?/);
await page.getByLabel('Família de «mar»').click();
await waitText(/Germânico \*hafą/);
check((await text()).includes('hav'), 'sueco: «hav» aparece na família do mar (não na da água)');
await shot('sv-mar');
await page.getByLabel('Família de «mar»').click();
await playRound('sv');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
