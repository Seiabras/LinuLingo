// Artigos graduados: a aba «📰 Artigos» nas leituras, o A1.1 aberto e os de cima trancados; no artigo
// do mărțișor (romeno), a palavra nova destacada mostra a tradução, a tradução do parágrafo abre, as
// perguntas (uma errada de propósito, que vai para o caderno) e o «✓ lido» na lista.
// Uso: npx tsx scripts/fluxo-artigos.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { articlesOf } from '../src/data/artigos.ts';

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
const shot = (name) => page.screenshot({ path: `${OUT}/artigos-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const text = () => page.evaluate(() => document.body.innerText);
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });

const a = articlesOf('ro')[0];
await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);

// a aba dos artigos
await page.goto(BASE + '/historias', { waitUntil: 'load' });
await page.getByRole('tab', { name: '📰 Artigos' }).click();
await waitText(new RegExp(a.title));
check(page.url().includes('aba=artigos'), 'a aba «📰 Artigos» abre (/historias?aba=artigos)');
const locked = await page.getByLabel(/^Artigo: .*Bloqueado/).count();
check(locked >= 3, `no começo da trilha, os artigos de cima ficam trancados (${locked})`);
await shot('lista');

// o artigo do A1.1
await page.getByLabel(new RegExp(`^Artigo: ${a.title}\\.`)).click();
await waitText(/Palavras novas/);
const [word, meaning] = a.glossary.find(([w]) => a.paragraphs[0].includes(w));
await page.getByLabel(`Palavra nova: ${word}`, { exact: true }).first().click();
await waitText(new RegExp(meaning.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
check(true, `tocar em «${word}» mostra «${meaning}»`);
await page.getByText('Ver a tradução', { exact: true }).first().click();
check((await text()).includes(a.translation[0]), 'a tradução do parágrafo abre');
await shot('artigo');

// as perguntas: a primeira errada de propósito, as outras certas
for (const [i, q] of a.questions.entries()) {
  const pick = i === 0 ? q.options.find((_, k) => k !== q.answer) : q.options[q.answer];
  await page.getByLabel(`Resposta: ${pick}`, { exact: true }).click();
}
await page.getByText('Terminar a leitura', { exact: true }).click();
await waitText(new RegExp(`${a.questions.length - 1} de ${a.questions.length} certas`));
check(true, `resultado: ${a.questions.length - 1} de ${a.questions.length} certas, com XP`);
await shot('fim');

// na lista, «✓ lido»; o erro no caderno
await page.goto(BASE + '/historias?aba=artigos', { waitUntil: 'load' });
await waitText(/✓ lido/);
check(true, 'na lista, o artigo aparece como lido');
await page.goto(BASE + '/erros', { waitUntil: 'load' });
await waitText(new RegExp(a.title));
check(true, 'a pergunta errada foi para o caderno de erros');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
