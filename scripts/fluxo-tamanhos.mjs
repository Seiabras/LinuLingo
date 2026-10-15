// Teste de ponta a ponta da escolha de tamanho dos tabuleiros: abre cada jogo, escolhe cada tamanho,
// confere que o tabuleiro mudou (conta as casas pelos rótulos) e tira uma foto.
// Uso: BASE_URL=http://localhost:8101 DEVICE=iphone SCHEME=dark npx tsx scripts/fluxo-tamanhos.mjs
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const shot = async (nome) => {
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/tamanhos-${device}-${scheme}-${nome}.png` });
};

/** jogo → [título, tamanhos, como contar as casas (rótulo de acessibilidade), casas esperadas por tamanho] */
const JOGOS = [
  ['go', 'Go', ['9×9', '13×13', '19×19'], /^[A-T]\d+/, [81, 169, 361]],
  ['gomoku', 'Gomoku', ['15×15', '19×19'], null, null],
  ['velha', 'Jogo da velha', ['3×3', '4×4'], /^Casa \d+/, [9, 16]],
  ['reversi', 'Reversi', ['8×8', '6×6'], null, null],
  ['conecta4', 'Ligue 4', ['6×5', '7×6', '8×7', '9×7'], null, null],
  ['quoridor', 'Quoridor', ['9×9', '7×7 (Kid)'], null, null],
];

let primeiro = true;
let falhas = 0;
for (const [id, titulo, tamanhos, rotulo, casas] of JOGOS) {
  await page.goto(BASE + '/jogo/' + id, { waitUntil: 'commit', timeout: 900000 });
  await page.getByText(titulo).first().waitFor({ timeout: primeiro ? 900000 : 120000 });
  primeiro = false;
  await page.waitForTimeout(2000);
  if (await page.getByText('Pular', { exact: true }).first().isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
  for (let k = 0; k < tamanhos.length; k++) {
    await page.getByLabel(`Tabuleiro ${tamanhos[k]}`, { exact: true }).first().click();
    await page.waitForTimeout(800);
    if (rotulo) {
      const n = await page.getByLabel(rotulo).count();
      const ok = n === casas[k];
      if (!ok) falhas++;
      console.log(`${id} ${tamanhos[k]}: ${n} casas ${ok ? 'ok' : `(esperava ${casas[k]})`}`);
    }
    await shot(`${id}-${tamanhos[k].replace(/[^0-9×]/g, '')}`);
  }
}
console.log('falhas:', falhas, 'erros:', errors.length ? errors : 'nenhum');
await browser.close();
