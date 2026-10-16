// Confere a Trilha da Evolução e os Bichos Ocultos (Lazer › Cartas): abre o jogo, fotografa o
// tutorial, pula, e joga contra o Linu tocando nas cartas que dá para jogar e atacando quando dá, até
// o fim ou até muitas jogadas. Uso: GAME=trilha|ocultos node scripts/fluxo-tcg-2.mjs
//   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark, OUT_DIR, NIVEL=Fácil)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const GAME = process.env.GAME ?? 'trilha';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const ROTA = { trilha: '/jogos/cartas/trilha-da-evolucao', ocultos: '/jogos/cartas/bichos-ocultos' }[GAME];
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
const shot = (name) => page.screenshot({ path: `${OUT}/${GAME}-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);
const clica = async (texto) => {
  const l = page.getByText(texto, { exact: true });
  if (await visivel(l)) {
    await l.first().click();
    await page.waitForTimeout(250);
    return true;
  }
  return false;
};
const clicaLoc = async (loc) => {
  if ((await loc.count()) > 0 && (await visivel(loc))) {
    await loc.first().click();
    await page.waitForTimeout(250);
    return true;
  }
  return false;
};

await page.goto(BASE + ROTA, { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => /turno|preparo/i.test(document.body.innerText), null, { timeout: 1800000, polling: 1000 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1200);
(await body()).includes('Tutorial · 1 de') ? ok('o tutorial abre na primeira vez') : fail('sem tutorial');
await shot('tutorial');
await clica('Pular');
if (process.env.NIVEL) await clica(process.env.NIVEL);
await shot('inicio');

const jogavel = page.locator('[aria-label$=", pode jogar"]');
const alvo = page.locator('[aria-label$="toque para escolher"]');
let fim = false;
let atacou = false;
let meio = false;
let jogadasNoTurno = 0;
let turnoVisto = '';
for (let k = 0; k < 500 && !fim; k++) {
  await page.waitForTimeout(350);
  const t = await body();
  if (/venceu/.test(t)) {
    fim = true;
    break;
  }
  const turno = (t.match(/Turno \d+/) ?? [''])[0];
  if (turno !== turnoVisto) {
    turnoVisto = turno;
    jogadasNoTurno = 0;
  }
  if (!meio && /Turno [4-9]/.test(t)) {
    meio = true;
    await shot('meio');
  }
  if (GAME === 'trilha') {
    if (t.includes('Toque num bicho básico da mão')) {
      await clicaLoc(jogavel);
      continue;
    }
    if (await clica('Pronto')) continue;
    if (t.includes('Seu ativo caiu')) {
      await clicaLoc(alvo);
      continue;
    }
    if (t.includes('marcado de vermelho')) {
      if (!(await clicaLoc(alvo))) await clica('Cancelar');
      continue;
    }
    if (await visivel(page.getByText('Passar a vez', { exact: true }))) {
      if (jogadasNoTurno < 6 && (await clicaLoc(jogavel))) {
        jogadasNoTurno++;
        continue;
      }
      const ataque = page.locator('[role="button"]:not([aria-disabled="true"])').filter({ hasText: /· \d+\+?$/ });
      if (await clicaLoc(ataque)) {
        atacou = true;
        continue;
      }
      await clica('Passar a vez');
    }
  } else {
    if (await clica('Não usar')) continue;
    if (t.includes('para o sacrifício')) {
      if (!(await clicaLoc(page.locator('[aria-label$="toque para o sacrifício"]')))) await clica('Cancelar');
      continue;
    }
    if (t.includes('Escolha: de frente')) {
      await clica('De frente (ataque)');
      continue;
    }
    if (t.includes('marcado de vermelho') || t.includes('carta baixada do Linu')) {
      if (!(await clicaLoc(alvo))) await clica('Cancelar');
      continue;
    }
    if (t.includes('Toque no bicho do Linu que vai ser atacado')) {
      if (!(await clicaLoc(alvo))) await clica('Fim da batalha');
      atacou = true;
      continue;
    }
    if (await clica('Ataque direto')) {
      atacou = true;
      continue;
    }
    if (t.includes('marcado de verde para atacar')) {
      const meu = page.locator('[aria-label$=", pode atacar"]');
      if (!(await clicaLoc(meu))) await clica('Fim da batalha');
      continue;
    }
    if (await visivel(page.getByText('Fim do turno', { exact: true }))) {
      if (jogadasNoTurno < 5 && (await clicaLoc(jogavel))) {
        jogadasNoTurno++;
        continue;
      }
      if (await clica('Batalha')) continue;
      await clica('Fim do turno');
    }
  }
}
await shot('fim');
atacou ? ok('atacou o Linu pela tela') : fail('não conseguiu atacar');
fim ? ok('a partida terminou') : console.log('ℹ️ a partida não terminou no limite de jogadas (normal se for longa)');
errors.length ? fail(`erros no console: ${errors.slice(0, 3).join(' | ')}`) : ok('sem erros no console');
await browser.close();
