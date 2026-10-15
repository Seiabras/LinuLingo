// Confere as animações dos tabuleiros que estavam parados (14/10/2026): a semeadura semente a semente
// do oware e do Kalah (com a captura voando para o depósito e o Linu esperando a animação acabar), a
// linha vencedora que acende no jogo da velha, no Ligue 4 e no gomoku, a peça capturada do octi e a
// bolinha do abalone que cai do tabuleiro. Tira várias capturas em sequência de cada animação.
// Uso: node scripts/fluxo-jogos-animacoes.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.toLowerCase().includes(x.toLowerCase()), t, { timeout, polling: 100 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/animacoes-${device}-${scheme}-${String(++shots).padStart(2, '0')}-${name}.png` });
/** várias capturas seguidas (a animação em quadros); devolve os textos vistos em cada uma */
async function rajada(name, n = 6, intervalo = 120) {
  const textos = [];
  for (let k = 0; k < n; k++) {
    await shot(`${name}-${k + 1}`);
    textos.push(await body());
    await page.waitForTimeout(intervalo);
  }
  return textos;
}

async function abrir(id, espera) {
  await page.goto(`${BASE}/jogo/${id}`, { waitUntil: 'load', timeout: 300000 });
  await waitText(espera, 240000);
  await page.waitForTimeout(800);
}
async function adversario(rotulo) {
  await page.getByText('Personalizar', { exact: true }).first().click();
  await page.getByText(rotulo, { exact: true }).first().click();
  await page.getByText('Personalizar', { exact: true }).first().click();
  await page.waitForTimeout(300);
}
/** o retângulo do desenho do tabuleiro (o <svg> com mais elementos `tag`) */
const caixa = (tag) =>
  page.evaluate((t) => {
    const svgs = [...document.querySelectorAll('svg')].sort((a, b) => b.querySelectorAll(t).length - a.querySelectorAll(t).length);
    svgs[0].scrollIntoView({ block: 'center' });
    const r = svgs[0].getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  }, tag);

// ── abre o app (o primeiro carregamento compila tudo) ────────────────────────────────────────────
await page.goto(BASE + '/', { waitUntil: 'load', timeout: 300000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 300000 });
await page.waitForTimeout(1500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();

// ── jogo da velha: X em 1, 2, 3 ─────────────────────────────────────────────────────────────────
await abrir('velha', 'toque numa casa vazia');
await adversario('2 jogadores no aparelho');
for (const c of [1, 4, 2, 5, 3]) {
  await page.getByLabel(`Casa ${c}`, { exact: true }).click();
  await page.waitForTimeout(150);
}
await rajada('velha-linha', 5, 150);
(await body()).includes('Três em linha') ? ok('velha: três em linha, linha riscada') : fail('velha: sem vitória');

// ── Ligue 4: vermelho empilha 4 na coluna 1 ─────────────────────────────────────────────────────
await abrir('conecta4', 'soltar a peça');
for (const c of [1, 2, 1, 2, 1, 2, 1]) {
  await page.getByLabel(`Coluna ${c}`, { exact: true }).click();
  await page.waitForTimeout(250);
}
await rajada('ligue4-linha', 6, 150);
(await body()).includes('Quatro em linha') ? ok('ligue 4: quatro em linha acendendo') : fail('ligue 4: sem vitória');

// ── gomoku: pretas fazem 5 na linha 7 ───────────────────────────────────────────────────────────
await abrir('gomoku', 'Cinco em linha vence');
{
  const b = await caixa('line');
  const passo = b.w / 15;
  const ponto = (r, c) => page.mouse.click(b.x + (c + 0.5) * passo, b.y + (r + 0.5) * passo);
  for (let k = 0; k < 5; k++) {
    await ponto(7, 3 + k);
    await page.waitForTimeout(450);
    if (k < 4) {
      await ponto(8, 3 + k);
      await page.waitForTimeout(450);
    }
  }
}
await rajada('gomoku-linha', 6, 150);
(await body()).includes('Cinco em linha!') ? ok('gomoku: cinco em linha acendendo') : fail('gomoku: sem vitória');

// ── octi: o jogador 2 salta a peça do jogador 1 e captura ───────────────────────────────────────
await abrir('octi', 'Instalar prong');
{
  const b = await caixa('rect');
  const k = b.w / (6 * 38);
  const centro = (row, col) => ({ x: b.x + (col * 38 + 19) * k, y: b.y + ((7 - 1 - row) * 38 + 19) * k });
  const toque = async (row, col, dy = 0) => {
    const p = centro(row, col);
    await page.mouse.click(p.x, p.y + dy * k);
    await page.waitForTimeout(250);
  };
  await page.getByText('Instalar prong', { exact: true }).click();
  await toque(1, 1);
  await toque(1, 1, -22.5); // prong para o norte
  await toque(5, 1);
  await toque(5, 1, 22.5); // prong para o sul
  await page.getByText('Mover ou saltar', { exact: true }).click();
  await toque(1, 1);
  await toque(2, 1);
  await toque(5, 1);
  await toque(4, 1);
  await toque(2, 1);
  await toque(3, 1);
  await toque(4, 1);
  await toque(2, 1); // salto sobre a peça em (3,1)
  await page.getByText('Capturar a peça pulada', { exact: true }).click();
  await rajada('octi-captura', 5, 100);
  const pecas = await body();
  /1 peça|3 peças/.test(pecas) ? ok('octi: captura com estouro') : fail('octi: a captura não aconteceu');
  await page.getByText('Parar de pular', { exact: true }).click();
}

// ── abalone: a coluna de 3 desce e empurra uma bolinha para fora ────────────────────────────────
await abrir('abalone', 'Toque nas suas bolinhas');
{
  const b = await caixa('circle');
  const HEX = 22;
  const S3 = 1.7320508;
  const raw = (q, r) => ({ x: HEX * S3 * (q + r / 2), y: HEX * 1.5 * r });
  const cel = [];
  for (let q = -4; q <= 4; q++) for (let r = -4; r <= 4; r++) if (Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r)) <= 4) cel.push(raw(q, r));
  const minX = Math.min(...cel.map((p) => p.x));
  const minY = Math.min(...cel.map((p) => p.y));
  const W = Math.max(...cel.map((p) => p.x)) - minX + 32;
  const k = b.w / W;
  const px = (q, r) => ({ x: b.x + (raw(q, r).x - minX + 16) * k, y: b.y + (raw(q, r).y - minY + 16) * k });
  const toque = async (p) => {
    await page.mouse.click(p.x, p.y);
    await page.waitForTimeout(200);
  };
  const d = raw(0, 1);
  // move as bolinhas `sel` uma casa para baixo (direção q 0, r +1), tocando duas vezes na seta
  const desce = async (sel) => {
    for (const [q, r] of sel) await toque(px(q, r));
    const f = sel[sel.length - 1];
    const p = px(f[0], f[1]);
    const seta = { x: p.x + d.x * 0.62 * k, y: p.y + d.y * 0.62 * k };
    await toque(seta);
    await toque(seta);
  };
  // o jogador 2 só vai e volta com uma bolinha longe dali
  const espera = async (i) => {
    await toque(px(-2, i % 2 ? 1 : 2));
    const p = px(-2, i % 2 ? 1 : 2);
    const dd = i % 2 ? d : raw(0, -1);
    const seta = { x: p.x + dd.x * 0.62 * k, y: p.y + dd.y * 0.62 * k };
    await toque(seta);
    await toque(seta);
  };
  for (let i = 0; i < 4; i++) {
    const r0 = -4 + i;
    await desce([
      [1, r0],
      [1, r0 + 1],
      [1, r0 + 2],
    ]);
    await espera(i);
  }
  await desce([
    [1, 0],
    [1, 1],
    [1, 2],
  ]);
  await rajada('abalone-cai', 5, 100);
  /13\/14/.test(await body()) ? ok('abalone: a bolinha empurrada caiu do tabuleiro') : fail('abalone: nenhuma bolinha caiu');
}

// ── mancalas contra o Linu: semeadura animada, captura e o Linu sem travar ───────────────────────
for (const [id, nome] of [
  ['oware', 'oware'],
  ['kalah', 'kalah'],
]) {
  await abrir(id, 'para semear');
  await adversario('Contra o Linu');
  // um lance de 4 sementes, em quadros
  const covas = page.locator('[aria-label^="Casa com"]');
  await covas.nth(8).click();
  const textos = await rajada(`${nome}-semeadura`, 6, 110);
  textos.some((t) => t.includes('Semeando')) ? ok(`${nome}: a semeadura anda semente a semente`) : fail(`${nome}: não vi a semeadura animada`);
  // o Linu joga depois que a animação acaba (e não fica travado)
  const minhaVez = () => page.waitForFunction(() => [...document.querySelectorAll('[aria-label^="Casa com"]')].some((e) => e.getAttribute('aria-disabled') !== 'true') || /venceu|Empate/.test(document.body.innerText), null, { timeout: 45000, polling: 150 });
  await minhaVez().then(
    () => ok(`${nome}: o Linu jogou e devolveu a vez`),
    () => fail(`${nome}: o Linu travou`),
  );
  // joga até ver uma captura (as covas da esquerda primeiro, para variar)
  let viuCaptura = false;
  for (let lance = 0; lance < 60 && !viuCaptura; lance++) {
    if (/venceu|Empate/.test(await body())) break;
    const livres = await page.evaluate(() => [...document.querySelectorAll('[aria-label^="Casa com"]')].map((e, i) => (e.getAttribute('aria-disabled') !== 'true' ? i : -1)).filter((i) => i >= 0));
    if (livres.length === 0) {
      await page.waitForTimeout(300);
      continue;
    }
    await covas.nth(livres[(lance * 7) % livres.length]).click();
    for (let t = 0; t < 120; t++) {
      const txt = await body();
      if (txt.includes('Captura!')) {
        viuCaptura = true;
        await rajada(`${nome}-captura`, 4, 90);
        break;
      }
      if (/Linu está pensando/.test(txt)) break;
      await page.waitForTimeout(60);
    }
    await minhaVez().catch(async () => fail(`${nome}: o Linu travou no lance ${lance}: ${(await body()).slice(0, 300)}`));
  }
  viuCaptura ? ok(`${nome}: a captura voou para o ${nome === 'kalah' ? 'depósito' : 'placar'}`) : console.log(`ℹ️  ${nome}: nenhuma captura nesta partida`);
  await shot(`${nome}-fim`);
}
await adversario('2 jogadores no aparelho');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
