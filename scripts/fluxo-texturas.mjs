// Prints de antes e depois da textura dos tabuleiros (pedido do dono, 15/10/2026: “melhora a textura
// geral”). Abre cada jogo, troca o tema pela porta de desenvolvimento (window.__jogosPrefs) e fotografa
// a tela. Com MEDIR=1, mede quanto custa redesenhar os tabuleiros grandes (CPU 4× mais lenta).
// Uso: node scripts/fluxo-texturas.mjs   (BASE_URL, DEVICE=iphone|desktop, SCHEME=light|dark,
//      OUT_DIR, FASE=antes|depois, JOGOS=quoridor,go…, TEMAS=madeira,noite…, MEDIR=1)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas/texturas';
const FASE = process.env.FASE ?? 'depois';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const TABULEIROS = 'alquerque,nim,bao,xadrez,damas,xiangqi,shogi,janggi,makruk,hnefatafl,moinho,fanorona,onca,bagh-chal,go,gomoku,reversi,abalone,pylos,qawale,konane,mu-torere,oware,kalah,quoridor,octi,quarto,quixo,quantik,squadro,qomet,hex,pontinhos,conecta4,velha,gamao,domino,damas-chinesas';
const LAZER = { hanafuda: 'cartas', encantados: 'cartas', roleta: 'azar', amarelinha: 'brincadeiras', esgrima: 'esportes', pong: 'videogames' };
const JOGOS = (process.env.JOGOS ?? TABULEIROS).split(',');
const TEMAS = (process.env.TEMAS ?? 'madeira').split(',');
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
page.setDefaultTimeout(120000);
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const visivel = (loc) => loc.first().isVisible().catch(() => false);
const prefs = (m) => page.evaluate((x) => window.__jogosPrefs?.(x), m);

let aberto = false;
async function abrir(id) {
  const url = LAZER[id] ? `/jogos/${LAZER[id]}/${id}` : `/jogo/${id}`;
  if (!aberto) {
    await page.goto(BASE + url, { waitUntil: 'commit', timeout: 300000 });
    await page.waitForFunction(() => typeof window.__jogosPrefs === 'function' && document.body.innerText.length > 200, null, { timeout: 480000, polling: 500 });
    aberto = true;
  } else {
    // sem recarregar a página (o pacote de desenvolvimento é grande e a máquina fica lenta): navega por dentro
    await page.evaluate((u) => {
      history.pushState({}, '', u);
      dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    }, url);
    await page.waitForFunction((u) => location.pathname.endsWith(u) && document.body.innerText.length > 200, url, { timeout: 60000, polling: 300 });
  }
  await page.waitForTimeout(LAZER[id] ? 2500 : 1500);
  if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
  await page.evaluate(() => window.scrollTo(0, 0));
}

for (const id of JOGOS) {
  try {
    await abrir(id);
  } catch (e) {
    console.log(`❌ ${id} não abriu: ${e.message.split('\n')[0]}`);
    continue;
  }
  if (id === 'quoridor') {
    // três paredes postas (uma em pé) e a quarta em prévia, para ver as duas no print
    for (const [n, girar] of [[10, false], [30, true], [45, false], [20, false]]) {
      await page.getByText(/^Pôr parede/).first().click();
      await page.locator('[aria-label="Pôr parede aqui"]').nth(n).click();
      if (girar) await page.getByText(/^Girar/).first().click();
      if (n !== 20) await page.getByText('Confirmar a parede', { exact: true }).first().click();
      await page.waitForTimeout(300);
    }
  }
  const variantes = id === 'quoridor' ? ['madeira', 'pedra', 'gelo', 'cerca'] : [null];
  for (const tema of LAZER[id] ? [TEMAS[0]] : TEMAS)
    for (const parede of variantes) {
      await prefs({ tema, ...(parede ? { quoridorParede: parede } : {}) });
      await page.waitForTimeout(700);
      const nome = `${OUT}/${FASE}-${id}${LAZER[id] ? '' : `-${tema}`}${parede ? `-${parede}` : ''}-${device}-${scheme}.png`;
      await page.screenshot({ path: nome, fullPage: device !== 'desktop' });
    }
  console.log(`✅ ${id}`);
}

if (process.env.MEDIR) {
  // quanto custa redesenhar: troca o tema 10 vezes e mede o tempo até o quadro seguinte
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  for (const nome of (process.env.MEDIR_JOGOS ?? 'go:19×19,gomoku:19×19,damas-chinesas,xadrez,quoridor').split(',')) {
    const [id, tamanho] = nome.split(':');
    await abrir(id);
    // o maior tamanho do tabuleiro, para medir o pior caso
    if (tamanho && (await visivel(page.getByText(tamanho, { exact: true })))) {
      await page.getByText(tamanho, { exact: true }).first().click();
      await page.waitForTimeout(1500);
    }
    const ms = await page.evaluate(async () => {
      const quadro = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const temas = ['madeira', 'noite', 'verde', 'oceano'];
      const t0 = performance.now();
      for (let i = 0; i < 12; i++) {
        window.__jogosPrefs({ tema: temas[i % 4] });
        await quadro();
      }
      return (performance.now() - t0) / 12;
    });
    const nos = await page.evaluate(() => document.querySelectorAll('svg *').length);
    console.log(`⏱️  ${FASE} ${nome}: ${ms.toFixed(1)} ms por redesenho (CPU 4×), ${nos} elementos de SVG na página`);
  }
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 });
}

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
