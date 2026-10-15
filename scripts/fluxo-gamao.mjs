// Teste de ponta a ponta do gamão: abre o jogo, liga “Contra o Linu”, rola os dados, joga algumas
// vezes (tocando nos pontos até achar um lance que vale) e deixa o Linu responder.
// Uso: BASE_URL=http://localhost:8101 DEVICE=iphone SCHEME=dark npx tsx scripts/fluxo-gamao.mjs
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? process.env.OUT ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VEZES = Number(process.env.VEZES ?? 3);
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
const errors = [];
// qualquer falha tira uma foto da tela antes de sair, para ver onde parou
const falhou = async (e) => {
  console.log('FALHOU:', String(e).split('\n')[0]);
  await page.screenshot({ path: `${OUT}/gamao-${device}-${scheme}-falha.png` }).catch(() => {});
  console.log((await page.evaluate(() => document.body.innerText).catch(() => '')).slice(0, 600));
  process.exit(1);
};
process.on('unhandledRejection', falhou);
process.on('uncaughtException', falhou);
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/gamao-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const texto = () => page.evaluate(() => document.body.innerText);
const visivel = (t) => page.getByText(t, { exact: true }).first().isVisible().catch(() => false);

await page.goto(BASE + '/jogo/gamao', { waitUntil: 'commit', timeout: 900000 });
await page.getByText('Gamão (Backgammon)').first().waitFor({ timeout: 900000 });
await page.waitForTimeout(3000);
if (await visivel('Pular')) {
  await page.getByText('Pular', { exact: true }).first().click();
  await page.waitForTimeout(1500);
}
await shot('inicio');

// contra o Linu
await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Médio', { exact: true }).first().click().catch(() => {});
await shot('personalizar');
await page.getByText('Personalizar', { exact: true }).first().click();

let viuMarcas = false;
let viuSoma = false;
let viuAndando = false;
const pontos = Array.from({ length: 24 }, (_, i) => i + 1);
/** Os pips das claras (você), lidos do placar: mudam quando uma peça anda. */
const meusPips = async () => Number((await texto()).match(/Você · (\d+) pips/)?.[1] ?? 0);
const tocar = (rotulo) =>
  (rotulo === 'Barra' ? page.getByLabel('Barra', { exact: true }) : rotulo === 'Bandeja' ? page.getByLabel('Bandeja das peças tiradas') : page.getByLabel(new RegExp(`^Ponto ${rotulo}(:|$)`)))
    .first()
    .click({ timeout: 2000 })
    .catch(() => {});

/** Joga uma peça das claras: escolhe uma origem que acende marcas e toca nos destinos possíveis (as claras descem do 24 para o 1). */
async function umPasso() {
  const antes = await meusPips();
  for (const o of ['Barra', ...[...pontos].reverse()]) {
    await tocar(o);
    if (!(await texto()).includes('ponto marcado')) continue;
    // as marcas da peça escolhida, com os dados e as somas (a marca da soma diz “3+5 = 8”)
    const somas = await page.getByLabel(/^\d(\+\d)+ = \d+$/).count();
    if (!viuMarcas || (somas > 0 && !viuSoma)) {
      viuMarcas = true;
      if (somas > 0) viuSoma = true;
      await shot(somas > 0 ? 'marcas-com-somas' : 'marcas');
    }
    // os destinos mais longe primeiro: assim a soma é jogada quando existe
    const alvos = ['Bandeja', ...pontos.filter((p) => o === 'Barra' || p < o)];
    for (const alvo of alvos) {
      await tocar(alvo);
      if ((await meusPips()) !== antes) {
        if (antes - (await meusPips()) > 6 && !viuAndando) {
          // a peça passando pela parada do meio
          viuAndando = true;
          await page.waitForTimeout(120);
          await page.screenshot({ path: `${OUT}/gamao-${device}-${scheme}-${String(++n).padStart(2, '0')}-soma-andando.png` });
        }
        return true;
      }
      // tocar fora das marcas tira a escolha: escolhe a peça de novo
      if (!(await texto()).includes('ponto marcado')) await tocar(o);
    }
  }
  return false;
}

for (let vez = 0; vez < VEZES; vez++) {
  // espera a vez das claras com o botão de rolar, ou já com dados (a abertura)
  await page.waitForFunction(() => /role os dados|quem começa|Rolar os dados|toque numa peça|Toque numa peça/i.test(document.body.innerText) && !document.body.innerText.includes('O Linu está pensando'), null, { timeout: 120000 });
  if (await visivel('Rolar os dados')) {
    await page.getByText('Rolar os dados', { exact: true }).first().click();
    await page.waitForTimeout(250);
    if (vez === 0) await shot('dados-rolando');
    await page.waitForTimeout(900);
  }
  // abertura empatada ou o Linu começou: volta ao laço
  if (await visivel('Rolar os dados')) {
    vez--;
    continue;
  }
  if ((await texto()).includes('O Linu está pensando')) {
    await page.waitForTimeout(4000);
    continue;
  }
  await shot(`vez${vez}-dados`);
  for (let k = 0; k < 4; k++) {
    if (await visivel('Passar a vez')) break;
    const ok = await umPasso();
    if (!ok) break;
    await page.waitForTimeout(400);
  }
  await shot(`vez${vez}-jogou`);
  if (await visivel('Passar a vez')) await page.getByText('Passar a vez', { exact: true }).first().click();
  await page.waitForTimeout(1200);
  await shot(`vez${vez}-linu`);
  await page.waitForTimeout(4500);
}
await shot('fim');
console.log('erros:', errors.length ? errors : 'nenhum');
await browser.close();
