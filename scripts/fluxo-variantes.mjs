// Confere o seletor “Variante”: escolhe uma variante em cada jogo (damas internacionais, xadrez960,
// Ligue 4 Pop Out, trilha de 12, abalone só em linha, roleta americana, Kalah com 6 sementes), tira
// uma foto e confere um sinal na tela; no fim, volta todos para a regra clássica.
// Uso: node scripts/fluxo-variantes.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
let jogo = "";
const shot = (name) => page.screenshot({ path: `${OUT}/${jogo}-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);

const CASOS = [
  { rota: '/jogo/damas', jogo: 'damas', variante: 'Damas internacionais', sinal: async () => (await page.locator('text=10').count()) > 0 },
  { rota: '/jogo/xadrez', jogo: 'xadrez', variante: 'Xadrez960 / Fischer Random', sinal: async () => (await body()).includes('Roque: toque no rei') },
  { rota: '/jogo/conecta4', jogo: 'conecta4', variante: 'Pop Out', sinal: async () => (await body()).includes('tirar') },
  { rota: '/jogo/moinho', jogo: 'moinho', variante: 'Doze Homens Moinho', sinal: async () => (await body()).includes('/12') },
  { rota: '/jogo/abalone', jogo: 'abalone', variante: 'Só em linha', sinal: async () => !(await body()).includes('andar de lado (não empurra)') },
  { rota: '/jogo/kalah', jogo: 'kalah', variante: 'Mais sementes por casa', sinal: async () => (await body()).includes('6') },
  { rota: '/jogos/azar/roleta', jogo: 'roleta', variante: 'Roleta americana', sinal: async () => (await body()).includes('5,26%') },
];

for (const c of CASOS) {
  jogo = c.jogo;
  await page.goto(BASE + c.rota, { waitUntil: 'commit', timeout: 300000 });
  const radio = page.getByRole('radio', { name: `Variante: ${c.variante}` });
  await radio.waitFor({ timeout: 480000 }).catch(async (e) => {
    await shot('nao-abriu');
    throw e;
  });
  await page.waitForTimeout(800);
  if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();
  await radio.click();
  await page.waitForTimeout(1200);
  await shot('variante');
  if (await c.sinal()) ok(`${c.jogo}: ${c.variante}`);
  else fail(`${c.jogo}: a variante ${c.variante} não apareceu`);
  // volta para a clássica, para não deixar a escolha salva no perfil de teste
  await page.getByRole('radio', { name: /^Variante: / }).first().click();
  await page.waitForTimeout(400);
}

// a regra oficial do abalone mostra o lance de lado
jogo = 'abalone';
await page.goto(BASE + '/jogo/abalone', { waitUntil: 'commit', timeout: 300000 });
await page.getByText('andar de lado (não empurra)').first().waitFor({ timeout: 120000 }).then(
  () => ok('abalone oficial: legenda “andar de lado (não empurra)”'),
  () => fail('abalone oficial: sem a legenda do lance de lado'),
);
await shot('oficial');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
