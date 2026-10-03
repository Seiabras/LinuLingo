// Teste de ponta a ponta do mapa da aventura (as 15 paradas da trilha) e do teste para pular.
// Uso: npx tsx scripts/fluxo-trilha.mjs   (servidor em http://localhost:8081; tsx para ler o currículo; DEBUG=1 mostra cada passo)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ROMENO } from '../src/data/ro/index.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const DEBUG = !!process.env.DEBUG;
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop' })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/trilha-${device}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const body = () => page.evaluate(() => document.body.innerText);
/** Espera as animações finitas (a virada de página entre etapas) terminarem; as em loop (ondas, Linu) não contam. */
const settle = () =>
  page
    .waitForFunction(() => document.getAnimations().every((a) => a.playState !== 'running' || a.effect?.getComputedTiming().iterations === Infinity), null, { timeout: 3000 })
    .catch(() => {});
const visible = (text) => page.getByText(text, { exact: true }).filter({ visible: true }).first().isVisible().catch(() => false);
/**
 * Clique tolerante (como no fluxo-travessia): a troca de etapa vira a página com animação e o botão da
 * etapa que sai pode sumir no meio do clique. Espera assentar, só mira elementos visíveis e tenta de novo.
 */
async function click(text) {
  const alvo = page.getByText(text, { exact: true }).filter({ visible: true }).last();
  for (let k = 0; k < 4; k++) {
    await settle();
    try {
      await alvo.click({ timeout: 2500 });
      return true;
    } catch {
      await page.waitForTimeout(300);
    }
  }
  if (DEBUG) console.log(`  (não consegui clicar em ${JSON.stringify(text)})`);
  return false;
}
/** O item cujo texto está na tela; havendo mais de um (um texto dentro do outro), o mais longo. */
const naTela = (t, lista, texto) => lista.filter((x) => texto(x) && t.includes(texto(x))).sort((a, b) => texto(b).length - texto(a).length)[0];

/**
 * Espera o mapa da trilha de verdade na tela. Na primeira visita a Home abre o tutorial (/tutorial) e,
 * enquanto ele não for pulado, a Home nem carrega o progresso — o mapa fica atrás, escondido e vazio.
 */
async function esperarMapa() {
  const parada = page.getByLabel(/^Parada A1\.1:/).filter({ visible: true }).first();
  for (let i = 0; i < 240; i++) {
    if (page.url().includes('/tutorial')) {
      if (await visible('Pular')) await click('Pular');
    } else if (await parada.isVisible().catch(() => false)) {
      // a Home pode redirecionar para o tutorial logo depois de aparecer: confere que ficou
      await page.waitForTimeout(1000);
      if (!page.url().includes('/tutorial') && (await parada.isVisible().catch(() => false))) return;
    }
    await page.waitForTimeout(500);
  }
  throw new Error(`o mapa não apareceu (em ${page.url()})`);
}

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await esperarMapa();

// o mapa com todas as paradas (uma por subnível), o Linu na primeira
const levels = ROMENO.units.map((u) => u.level);
const parada = (l) => page.getByLabel(new RegExp(`^Parada ${l.replace('.', '\\.')}:`)).filter({ visible: true });
for (const l of levels) if (!(await parada(l).count())) throw new Error(`mapa sem a parada ${l}`);
if (!(await page.getByLabel(/^Parada A1\.1:.*Você está aqui/).count())) throw new Error('o Linu não está na primeira parada');
await shot('inicio');

// teste para pular até a 2ª unidade: pelo painel da parada
const target = ROMENO.units[1];
await parada(target.level).first().click();
await page.getByText('Diário de campo', { exact: true }).first().waitFor({ timeout: 10000 });
await shot('parada');
await click('⏩ Já sei isto: fazer o teste e pular para cá');
await page.getByText(`Teste para pular · ${target.level}`, { exact: false }).first().waitFor({ timeout: 60000 });

// o teste (a prova da unidade) começa direto na imersão; responde cada etapa pelo conteúdo da unidade
const outras = target.lessons.filter((l) => l.kind !== 'prova');
const prova = target.lessons.at(-1);
const vocab = outras.flatMap((l) => l.words).map((w) => ROMENO.vocab.find((v) => v.word_target === w)).filter(Boolean);
const clozes = outras.flatMap((l) => l.cloze);
const blank = (c) => c.sentence.replace('___', ' _____ ');
let fim = null;
for (let passo = 0; passo < 80 && !fim; passo++) {
  await settle();
  const t = await body();
  if (DEBUG) console.log(passo, JSON.stringify(t.slice(0, 160)));
  if (t.includes('⏩ Pronto:') || t.includes('Quase! Ainda não deu para pular')) fim = t;
  else if (await visible('Continuar')) await click('Continuar');
  else if (await visible('Entendi, vamos praticar!')) await click('Entendi, vamos praticar!');
  else if (t.includes('Ouça e escolha a palavra')) {
    // imersão: a tela mostra a palavra em português; a opção certa é a palavra romena
    const linhas = new Set(t.split('\n').map((x) => x.trim()));
    const w = vocab.find((v) => linhas.has(v.word_native) && linhas.has(v.word_target));
    if (!w) throw new Error(`imersão: não achei a palavra desta tela:\n${t.slice(0, 400)}`);
    await click(w.word_target);
  } else if (t.includes('Complete a frase')) {
    const c = naTela(t, clozes, blank);
    if (!c) throw new Error(`lacunas: não achei a frase desta tela:\n${t.slice(0, 400)}`);
    await click(c.answer);
  } else if (t.includes('Desafio de voz')) {
    await page.getByPlaceholder(/digite sua resposta/i).fill(prova.voice.expected[0]);
    await click('Verificar');
  } else if (await visible('Pular esta etapa')) {
    // comunidade: pula uma vez só e espera o resultado (gravar o teste demora; clicar de novo o refaria)
    await click('Pular esta etapa');
    const t0 = Date.now();
    await page.getByText(/⏩ Pronto:|Quase! Ainda não deu para pular/).first().waitFor({ timeout: 60000 });
    if (DEBUG) console.log(`  resultado em ${Date.now() - t0} ms`);
  }
}
if (!fim) throw new Error(`o teste para pular não terminou; última tela:\n${(await body()).slice(0, 400)}`);
if (!fim.includes(`⏩ Pronto: tudo até o ${target.level} está concluído!`)) throw new Error(`o teste para pular não passou:\n${fim.slice(0, 400)}`);
await shot('pulou');
await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await esperarMapa();
const next = ROMENO.units[2];
await page.getByLabel(new RegExp(`^Parada ${next.level.replace('.', '\\.')}:.*Você está aqui`)).filter({ visible: true }).first().waitFor({ timeout: 20000 });
if (!(await page.getByLabel(new RegExp(`^Parada ${target.level.replace('.', '\\.')}:.*Concluída`)).count())) throw new Error('a unidade pulada não ficou concluída');
await shot('depois');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
