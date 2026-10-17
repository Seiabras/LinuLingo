// Varredura dos jogos do conhecimento (N0 do PENDENTES.md, 17/10/2026): abre cada jogo com o Linu
// começando e anota, para cada um, os erros da página e quantas peças se moveram além do repouso (0 ou menos:
// o Linu não jogou ou o lance não animou; conferir com scripts/gravar-animacao.mjs). Uso:
//   node scripts/varrer-jogos.mjs jogos.json [REDUZIR=1]   → imprime uma linha por jogo
import { chromium } from 'playwright-core';
import { readFileSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const root = join(homedir(), '.cache/ms-playwright');
const dir = readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const jogos = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const browser = await chromium.launch({ executablePath: join(root, dir, 'chrome-linux64/chrome') });
const ctx = await browser.newContext({ reducedMotion: process.env.REDUZIR ? 'reduce' : 'no-preference', viewport: { width: 1280, height: 900 } });
let erros = [];
const novaPagina = async () => {
  const p = await ctx.newPage();
  p.on('pageerror', (e) => erros.push(e.message.slice(0, 120)));
  p.on('console', (m) => m.type() === 'error' && !/maskType|WebSocket|404|disk I\/O|Unknown event handler|act\(/.test(m.text()) && erros.push(m.text().slice(0, 120)));
  return p;
};
let page = await novaPagina();
// primeira carga (o bundle). Não clicar em “Pular” da apresentação: isso abre o tutorial, que navega sozinho
await page.goto('http://localhost:8081/jogo/xadrez', { waitUntil: 'commit', timeout: 600000 });
await page.waitForFunction(() => document.body.innerText.length > 200, null, { timeout: 600000 });
// observa as mudanças de estilo: quem já mexia parado (o Linu, os amigos) fica de fora; “animou” conta
// os elementos que mudaram de estilo 4 vezes ou mais depois do Recomeçar (um lance deslizando), “mudou”
// os que mudaram ao menos uma vez e “nos” os elementos que entraram ou saíram
// o observador entra em toda carga de página (o app às vezes recarrega no meio da varredura)
const observar = () => {
  const w = window;
  w.__mud = new Map();
  w.__nos = 0;
  const ligar = () =>
    new MutationObserver((ms) => {
      for (const m of ms) {
        if (m.type === 'attributes') w.__mud.set(m.target, (w.__mud.get(m.target) ?? 0) + 1);
        else w.__nos += m.addedNodes.length + m.removedNodes.length;
      }
    }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['style'], childList: true });
  if (document.body) ligar();
  else addEventListener('DOMContentLoaded', ligar);
};
await page.addInitScript(observar);
await page.evaluate(observar);
for (const { id } of jogos) {
  erros = [];
  try {
    // navega dentro do app, sem recarregar o pacote inteiro
    await page.evaluate((id) => {
      history.pushState({}, '', `/jogo/${id}`);
      dispatchEvent(new PopStateEvent('popstate'));
    }, id);
    await page.waitForFunction((id) => location.pathname.endsWith(id) && document.body.innerText.includes('Recomeçar'), id, { timeout: 60000 });
    await page.evaluate(() => window.__jogosPrefs?.({ adversario: 'linu', quemComeca: 'linu', nivel: 'facil', animacoes: true, mesa: 'nenhuma', relogio: 'desligado' }));
    await page.waitForTimeout(800);
    await page.evaluate(() => window.__mud.clear());
    await page.waitForTimeout(1500);
    const parados = await page.evaluate(() => {
      window.__parados = new Set(window.__mud.keys());
      window.__mud.clear();
      window.__nos = 0;
      return window.__parados.size;
    });
    await page.getByText('Recomeçar', { exact: true }).first().click();
    await page.waitForTimeout(6000);
    const r = await page.evaluate(() => {
      let anim = 0, mexeu = 0;
      for (const [el, n] of window.__mud) {
        if (window.__parados.has(el)) continue;
        mexeu++;
        if (n >= 4) anim++;
      }
      return { anim, mexeu, nos: window.__nos };
    });
    console.log(`${id}\tanimou=${r.anim}\tmudou=${r.mexeu}\tnos=${r.nos}\tparados=${parados}\terros=${erros.length ? erros.slice(0, 2).join(' / ') : '-'}`);
  } catch (e) {
    console.log(`${id}\tFALHOU: ${String(e.message).slice(0, 120)}\terros=${erros.slice(0, 2).join(' / ')}`);
  }
}
await browser.close();
