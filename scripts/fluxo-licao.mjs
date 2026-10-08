// Teste de ponta a ponta: faz a primeira lição inteira no navegador e tira capturas de cada etapa.
// Confere também a lição adaptativa: quem acerta rápido as 4 primeiras palavras pula as últimas
// («Você está voando!»), e o primeiro erro nas lacunas mostra «Por que é assim?» e devolve a frase.
// Uso: npx tsx scripts/fluxo-licao.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ROMENO } from '../src/data/ro/index.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });

function chromiumPath() {
  const root = join(homedir(), '.cache/ms-playwright');
  const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  return process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined);
}

const browser = await chromium.launch({ executablePath: chromiumPath() });
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop' });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && errors.push(m.text()));

let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(600);
  const f = `${OUT}/fluxo-${device}-${String(++n).padStart(2, '0')}-${name}.png`;
  await page.screenshot({ path: f });
  console.log('📸', f);
};
const click = (text) => page.getByText(text, { exact: true }).first().click();
const clickLast = (text) => page.getByText(text, { exact: true }).last().click();
const body = () => page.evaluate(() => document.body.innerText);
const licao = ROMENO.units[0].lessons[0];
const vocab = licao.words.map((w) => ROMENO.vocab.find((v) => v.word_target === w));

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
// primeira visita: o tutorial abre sozinho — espera ele ou o mapa da trilha, o que vier primeiro
await page.getByText('Pular', { exact: true }).or(page.getByLabel(/^Parada A1\.1:/)).first().waitFor({ timeout: 120000 });
await page.waitForTimeout(800);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
  await click('Pular');
  await page.waitForTimeout(1500);
}
// a lição fica no painel da primeira parada do mapa
await page.getByLabel(/^Parada A1\.1:/).first().click();
await page.waitForTimeout(600);
await click('Oi, tudo bem?');
await page.waitForTimeout(1500);
await shot('etapa1-card');
await click('Entendi, vamos praticar!');
await shot('etapa2-imersao');

// Etapa 2: toca na palavra certa de cada imagem, rápido — a lição encurta depois de 4 acertos
for (let k = 0; k < 6; k++) {
  const t = await body();
  if (t.includes('Você está voando!')) break;
  const linhas = new Set(t.split('\n').map((x) => x.trim()));
  const w = vocab.find((v) => linhas.has(v.word_native) && linhas.has(v.word_target));
  if (!w) throw new Error(`imersão: não achei a palavra da tela:\n${t.slice(0, 300)}`);
  await page.getByText(w.word_target, { exact: true }).last().click();
  await click('Continuar');
  await page.waitForTimeout(150);
}
await page.getByText('Você está voando!').waitFor({ timeout: 5000 });
await shot('etapa2-voando');
await click('Continuar');
await shot('etapa3-pareie');

// Etapa "Pareie": casa cada palavra-alvo com a tradução
for (const w of vocab) {
  await click(w.word_target);
  await clickLast(w.word_native);
  await page.waitForTimeout(150);
}
await click('Continuar');
await shot('etapa4-lacunas');

// Etapa 4: erra a primeira de propósito — vem o «Por que é assim?» e a frase volta no fim
const [c1, ...resto] = licao.cloze;
await click(c1.options.find((o) => o !== c1.answer));
await click('Continuar');
await page.getByText('🤔 Por que é assim?').waitFor({ timeout: 5000 });
await shot('etapa3-por-que');
await click('Entendi, vamos de novo');
for (const c of resto) {
  await click(c.answer);
  await click('Continuar');
  await page.waitForTimeout(300);
}
await page.getByText('🔁 Mais uma vez, agora sem pressa').waitFor({ timeout: 5000 });
await shot('etapa3-de-novo');
await click(c1.answer);
await click('Continuar');
await page.waitForTimeout(400);
await shot('etapa5-ordene');

// Etapa "Ordene a frase": reconstrói, tocando palavra por palavra, cada frase derivada das lacunas
// (mesma lógica de src/services/.../SentenceOrderStep: sentence com ___ trocado pela resposta)
const sentencas = licao.cloze
  .map((c) => c.sentence.replace('___', c.answer).trim().split(/\s+/))
  .filter((tokens) => tokens.length >= 3);
for (const tokens of sentencas) {
  for (const t of tokens) await clickLast(t);
  await click('Verificar');
  await click('Continuar');
  await page.waitForTimeout(200);
}
await shot('etapa6-voz');

await page.getByPlaceholder(/digite sua resposta/i).fill('Bine, multumesc');
await click('Verificar');
await shot('etapa6-avaliacao');
await click('Continuar');

await page.getByPlaceholder('Escreva em romeno…').fill('Bună! Sunt bine, mulțumesc.');
await shot('etapa7-comunidade');
await click('Pôr nos meus envios');
await page.waitForTimeout(1500);
await shot('etapa8-recompensa');
await click('Continuar');
await page.waitForTimeout(1500);
await shot('trilha-depois');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
