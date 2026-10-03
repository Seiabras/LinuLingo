// Teste de ponta a ponta de uma travessia (o desafio no fim da unidade): atravessa acertando tudo —
// as respostas vêm do próprio conteúdo da unidade — e confere a tela de chegada e a travessia feita
// no mapa; depois atravessa errando tudo e confere a tela do "mar bravo".
// Uso: npx tsx scripts/fluxo-travessia.mjs   (servidor em http://localhost:8081; DEBUG=1 mostra cada passo)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ROMENO } from '../src/data/ro/index.ts';
import { rotaDaAventura } from '../src/services/aventura.ts';

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
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/travessia-${device}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const body = () => page.evaluate(() => document.body.innerText);
/** Espera as animações finitas (a virada de página entre etapas) terminarem; as em loop (ondas, Linu) não contam. */
const settle = () =>
  page
    .waitForFunction(() => document.getAnimations().every((a) => a.playState !== 'running' || a.effect?.getComputedTiming().iterations === Infinity), null, { timeout: 3000 })
    .catch(() => {});
const visible = (text) => page.getByText(text, { exact: true }).filter({ visible: true }).first().isVisible().catch(() => false);
/**
 * Clique tolerante: a troca de etapa vira a página com animação e o botão da etapa que sai pode sumir no
 * meio do clique. Espera a página assentar, só mira elementos visíveis e tenta de novo se o alvo sumiu.
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

const unit = ROMENO.units[0];
const lessons = unit.lessons.filter((l) => l.kind !== 'prova');
const cloze = lessons.flatMap((l) => l.cloze);
const voices = lessons.map((l) => l.voice);
const fill = (c) => c.sentence.replace('___', c.answer);
// a lacuna sem resposta aparece como « _____ » no meio da frase
const blank = (c) => c.sentence.replace('___', ' _____ ');
/** O item cujo texto está na tela; havendo mais de um (um texto dentro do outro), o mais longo. */
const naTela = (t, lista, texto) => lista.filter((x) => texto(x) && t.includes(texto(x))).sort((a, b) => texto(b).length - texto(a).length)[0];
const rota = rotaDaAventura(ROMENO);
const [origem, destino] = [rota[0].name, rota[1].name];

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await esperarMapa();

// num perfil novo a travessia ainda está trancada, mesmo abrindo pelo endereço: o app oferece o
// teste para pular, que conclui a unidade e libera a travessia
await page.goto(`${BASE}/travessia/${unit.id}`, { waitUntil: 'load', timeout: 180000 });
await page.getByText('Esta travessia ainda está trancada', { exact: true }).waitFor({ timeout: 60000 });
await shot('trancada');
await click('⏩ Fazer o teste para pular');
await page.getByText(`Teste para pular · ${unit.level}`, { exact: false }).first().waitFor({ timeout: 60000 });
{
  const prova = unit.lessons.at(-1);
  const vocab = lessons.flatMap((l) => l.words).map((w) => ROMENO.vocab.find((v) => v.word_target === w)).filter(Boolean);
  let fim = null;
  for (let passo = 0; passo < 80 && !fim; passo++) {
    await settle();
    const t = await body();
    if (t.includes('⏩ Pronto:') || t.includes('Quase! Ainda não deu para pular')) fim = t;
    else if (await visible('Continuar')) await click('Continuar');
    else if (await visible('Entendi, vamos praticar!')) await click('Entendi, vamos praticar!');
    else if (t.includes('Ouça e escolha a palavra')) {
      const linhas = new Set(t.split('\n').map((x) => x.trim()));
      const w = vocab.find((v) => linhas.has(v.word_native) && linhas.has(v.word_target));
      if (!w) throw new Error(`imersão: não achei a palavra desta tela:\n${t.slice(0, 400)}`);
      await click(w.word_target);
    } else if (t.includes('Complete a frase')) {
      const c = naTela(t, cloze, blank);
      if (!c) throw new Error(`lacunas: não achei a frase desta tela:\n${t.slice(0, 400)}`);
      await click(c.answer);
    } else if (t.includes('Desafio de voz')) {
      await page.getByPlaceholder(/digite sua resposta/i).fill(prova.voice.expected[0]);
      await click('Verificar');
    } else if (await visible('Pular esta etapa')) {
      await click('Pular esta etapa');
      await page.getByText(/⏩ Pronto:|Quase! Ainda não deu para pular/).first().waitFor({ timeout: 60000 });
    }
  }
  if (!fim?.includes(`⏩ Pronto: tudo até o ${unit.level} está concluído!`)) throw new Error(`o teste para pular não passou:\n${(fim ?? (await body())).slice(0, 400)}`);
}

/** Faz a travessia; `acertar` decide se escolhe a resposta certa ou uma errada. */
async function atravessar(acertar) {
  // o servidor de desenvolvimento pode estar refazendo o pacote (outra edição em andamento): paciência
  await page.goto(`${BASE}/travessia/${unit.id}`, { waitUntil: 'load', timeout: 180000 });
  await page.getByText('Zarpar! ⛵', { exact: true }).waitFor({ timeout: 60000 });
  await shot(acertar ? 'inicio' : 'inicio-errando');
  await click('Zarpar! ⛵');
  for (let passo = 0; passo < 60; passo++) {
    await settle();
    const t = await body();
    if (DEBUG) console.log(passo, JSON.stringify(t.slice(0, 160)));
    if (t.includes('Chegamos') || t.includes('O mar ficou bravo')) return t;
    if (await visible('Continuar')) {
      await click('Continuar');
      continue;
    }
    let certa = null;
    let opcoes = [];
    if (t.includes('Chegou uma mensagem pelo rádio')) {
      if (await visible('👀 Não entendi: mostrar a frase')) {
        await click('👀 Não entendi: mostrar a frase');
        continue;
      }
      const c = naTela(t, cloze, fill);
      certa = c?.translation;
      opcoes = cloze.map((x) => x.translation);
    } else if (t.includes('Alguém fala com o Linu')) {
      const v = naTela(t, voices, (x) => x.bot);
      certa = v?.expected[0];
      opcoes = voices.map((x) => x.expected[0]);
    } else if (t.includes('Complete a frase')) {
      const c = naTela(t, cloze, blank);
      certa = c?.answer;
      opcoes = c?.options ?? [];
    } else if (t.includes('Desafio de voz')) {
      if (!acertar) {
        // errando: «não posso falar agora» segue sem pontuar
        await click('Não posso falar agora');
        continue;
      }
      const v = naTela(t, voices, (x) => x.bot);
      if (!v) throw new Error(`não achei a fala do desafio de voz:\n${t.slice(0, 400)}`);
      await page.getByPlaceholder(/digite sua resposta/i).fill(v.expected[0]);
      await click('Verificar');
      continue;
    } else continue; // ainda trocando de etapa
    if (!certa) throw new Error(`não achei a resposta nesta tela:\n${t.slice(0, 400)}`);
    const escolha = acertar ? certa : opcoes.find((o) => o !== certa && t.includes(o));
    if (!escolha) throw new Error(`não achei uma opção errada nesta tela:\n${t.slice(0, 400)}`);
    await click(escolha);
  }
  await shot('travou');
  throw new Error(`a travessia não terminou; última tela:\n${(await body()).slice(0, 400)}`);
}

const fim = await atravessar(true);
if (!fim.includes(`Chegamos: ${destino}!`)) throw new Error(`esperava "Chegamos: ${destino}!"`);
const placar = fim.match(/(\d+) de (\d+) certas · \+(\d+) XP/);
if (!placar || placar[1] !== placar[2]) throw new Error(`esperava acertar tudo, veio: ${placar?.[0] ?? 'sem placar'}`);
await shot('chegada');
// volta pelo próprio botão (testa a Home recarregando o progresso ao ganhar o foco)
await click('Voltar para o mapa');
await esperarMapa();
// a travessia feita aparece no mapa (a prova da unidade conta como concluída)
const feita = page.getByLabel(new RegExp(`^Travessia de ${origem} para ${destino}: feita`)).filter({ visible: true }).first();
if (!(await feita.waitFor({ timeout: 20000 }).then(() => true, () => false))) {
  const labels = await page.evaluate(() => [...document.querySelectorAll('[aria-label^="Travessia"]')].map((e) => e.getAttribute('aria-label')));
  throw new Error(`a travessia não ficou marcada como feita no mapa (em ${page.url()}): ${JSON.stringify(labels)}`);
}
await shot('mapa-depois');

const bravo = await atravessar(false);
if (!bravo.includes('O mar ficou bravo')) throw new Error('errando tudo, esperava "O mar ficou bravo"');
if (!/\b0 de \d+ certas/.test(bravo)) throw new Error(`errando tudo, esperava 0 certas: ${bravo.match(/\d+ de \d+ certas/)?.[0]}`);
await shot('mar-bravo');

console.log(`${placar[0]}`);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ travessia ok, sem erros no console');
await browser.close();
