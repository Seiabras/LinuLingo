// Confere o Duelo dos Biomas (Lazer › Cartas): abre o jogo, fotografa o tutorial, pula, e joga
// contra o Linu tocando nas cartas que dá para jogar, atacando com tudo e sem bloquear, até o fim
// (ou até 40 turnos). Uso: node scripts/fluxo-duelo-biomas.mjs
//   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark, OUT_DIR, NIVEL=Fácil)
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
const shot = (name) => page.screenshot({ path: `${OUT}/biomas-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
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

await page.goto(BASE + '/jogos/cartas/duelo-dos-biomas', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => /turno/i.test(document.body.innerText), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
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

let turnos = 0;
let fim = false;
let atacou = false;
for (let k = 0; k < 400 && !fim; k++) {
  await page.waitForTimeout(400);
  const t = await body();
  if (/venceu/.test(t)) {
    fim = true;
    break;
  }
  if (await clica('Não bloquear')) continue;
  if (/magias rápidas/i.test(t) && (await clica('Passar'))) continue;
  if (await visivel(page.getByText('Fim do turno', { exact: true }))) {
    // joga o que der (bioma primeiro), ataca com todos os que podem e termina o turno
    const jogavel = page.locator('[aria-label$=", pode jogar"]');
    if ((await jogavel.count()) > 0) {
      await jogavel.first().click();
      await page.waitForTimeout(300);
      // magia com alvo: toca no primeiro alvo marcado (ou cancela)
      if ((await body()).includes('Escolha o alvo')) {
        const bichos = page.locator('[aria-label*="de força"]');
        if ((await bichos.count()) > 0) await bichos.first().click();
        await clica('Cancelar');
      }
      continue;
    }
    if (/fase principal/i.test(t) && !/segunda fase/i.test(t)) {
      const meus = page.locator('[aria-label*="de força"]');
      const n = await meus.count();
      for (let i = 0; i < n; i++) await meus.nth(i).click({ timeout: 2000 }).catch(() => {});
      const botao = page.getByText(/^Atacar com/);
      if (await visivel(botao)) {
        if (!atacou) await shot('atacantes');
        await botao.first().click();
        atacou = true;
        continue;
      }
    }
    await clica('Fim do turno');
    turnos++;
    if (turnos === 3) await shot('meio');
    if (turnos >= 40) break;
  }
}
fim ? ok(`a partida terminou (${turnos} turnos seus)`) : fail(`a partida não terminou em ${turnos} turnos`);
atacou ? ok('atacou') : fail('não chegou a atacar');
await shot('fim');
console.log('   ', (await body()).match(/[^\n]*venceu[^\n]*/)?.[0]);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
