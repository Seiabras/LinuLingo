// Grava em vídeo um jogo com o Linu jogando sozinho (ele começa), para conferir as animações no
// computador (pedido do dono, 17/10/2026: “no computador não tá funcionando as animações de alguns
// jogos”). Uso: JOGO=gamao SEGUNDOS=8 node scripts/gravar-animacao.mjs <pasta>
// Depois: ffmpeg -i <pasta>/*.webm -vf fps=12 quadros%03d.png
import { chromium } from 'playwright-core';
import { readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const root = join(homedir(), '.cache/ms-playwright');
const dir = readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const OUT = process.argv[2] ?? 'capturas';
const JOGO = process.env.JOGO ?? 'gamao';
const ROTA = process.env.ROTA ?? `/jogo/${JOGO}`;
const SEG = Number(process.env.SEGUNDOS ?? 8);
const browser = await chromium.launch({ executablePath: join(root, dir, 'chrome-linux64/chrome') });
const ctx = await browser.newContext({ reducedMotion: process.env.REDUZIR ? 'reduce' : 'no-preference', viewport: { width: 1280, height: 900 }, recordVideo: { dir: OUT, size: { width: 1280, height: 900 } } });
const page = await ctx.newPage();
const erros = [];
page.on('pageerror', (e) => erros.push(e.message));
await page.goto(`http://localhost:8081${ROTA}`, { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => document.body.innerText.length > 200, null, { timeout: 480000 });
await page.waitForTimeout(2000);
if (await page.getByText('Pular', { exact: true }).first().isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.evaluate(() => window.__jogosPrefs?.({ adversario: 'linu', quemComeca: 'linu', nivel: 'facil', animacoes: true, mesa: 'nenhuma' }));
await page.waitForTimeout(500);
const recomecar = page.getByText('Recomeçar', { exact: true }).first();
if (await recomecar.isVisible().catch(() => false)) await recomecar.click();
// CLICAR: rótulo de um botão para tocar sempre que aparecer (ex. “Rolar os dados” no gamão)
const CLICAR = process.env.CLICAR;
const fimEm = Date.now() + SEG * 1000;
while (Date.now() < fimEm) {
  if (CLICAR) {
    const b = page.getByLabel(CLICAR).first();
    if (await b.isVisible().catch(() => false)) await b.click().catch(() => {});
  }
  await page.waitForTimeout(700);
}
console.log('erros:', erros.slice(0, 5));
await ctx.close();
await browser.close();
