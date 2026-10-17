// Varredura dos jogos do conhecimento (N0 do PENDENTES.md, 17/10/2026): abre cada jogo com o Linu
// começando e anota, para cada um, os erros da página, se o Linu jogou (o tabuleiro mudou) e se alguma
// peça animou (algum elemento com translate/scale fora do repouso). Uso:
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
const page = await ctx.newPage();
let erros = [];
page.on('pageerror', (e) => erros.push(e.message.slice(0, 120)));
page.on('console', (m) => m.type() === 'error' && !/maskType|WebSocket|404|disk I\/O|Unknown event handler|act\(/.test(m.text()) && erros.push(m.text().slice(0, 120)));
// primeira carga (o bundle) e o “Pular” da apresentação
await page.goto('http://localhost:8081/jogo/xadrez', { waitUntil: 'commit', timeout: 600000 });
await page.waitForFunction(() => document.body.innerText.length > 200, null, { timeout: 600000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).first().isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
for (const { id } of jogos) {
  erros = [];
  try {
    await page.goto(`http://localhost:8081/jogo/${id}`, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await page.waitForFunction(() => document.body.innerText.includes('Recomeçar'), null, { timeout: 120000 });
    await page.evaluate(() => window.__jogosPrefs?.({ adversario: 'linu', quemComeca: 'linu', nivel: 'facil', animacoes: true, mesa: 'nenhuma', relogio: 'desligado' }));
    await page.waitForTimeout(300);
    const antes = await page.screenshot();
    await page.getByText('Recomeçar', { exact: true }).first().click();
    // amostra os transforms por ~6 s, procurando peça em movimento
    const anim = await page.evaluate(async () => {
      let max = 0;
      const t0 = performance.now();
      while (performance.now() - t0 < 6000) {
        let n = 0;
        for (const d of document.querySelectorAll('div')) {
          const tf = d.style.transform;
          if (!tf) continue;
          const m = tf.match(/translate[XY]?\((-?[\d.]+)px/g);
          if (m && m.some((x) => Math.abs(parseFloat(x.split('(')[1])) > 2)) n++;
        }
        max = Math.max(max, n);
        await new Promise((r) => requestAnimationFrame(r));
      }
      return max;
    });
    const depois = await page.screenshot();
    const mudou = !antes.equals(depois);
    console.log(`${id}\tjogou=${mudou ? 'sim' : 'NÃO'}\tanimou=${anim}\terros=${erros.length ? erros.slice(0, 2).join(' / ') : '-'}`);
  } catch (e) {
    console.log(`${id}\tFALHOU: ${String(e.message).slice(0, 120)}\terros=${erros.slice(0, 2).join(' / ')}`);
  }
}
await browser.close();
