// Confere o Bao dos Jogos do conhecimento: abre /jogo/bao e joga contra o Linu no Bao la Kiswahili
// (escolhendo cova, sentido e o safari) e depois no Bao la kujifunza.
// Uso: node scripts/fluxo-bao.mjs   (BASE_URL=http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const shot = (name) => page.screenshot({ path: `${OUT}/bao-${device}-${scheme}-${++shots}-${name}.png`, fullPage: true });
const visivel = (loc) => loc.first().isVisible().catch(() => false);





await page.goto(BASE + '/jogo/bao', { waitUntil: 'commit', timeout: 300000 });
await page.waitForFunction(() => document.body.innerText.includes('Fase '), null, { timeout: 480000, polling: 500 }).catch(async (e) => {
  await shot('nao-abriu');
  console.log((await body()).slice(0, 600), errors);
  throw e;
});
await page.waitForTimeout(1500);
if (await visivel(page.getByText('Pular', { exact: true }))) await page.getByText('Pular', { exact: true }).first().click();

await page.getByText('Personalizar', { exact: true }).first().click();
await page.getByText('Contra o Linu', { exact: true }).first().click();
await page.getByText('Médio', { exact: true }).first().click();
await page.getByText('Personalizar', { exact: true }).first().click();

async function jogarAlguns(rotulo, quantos) {
  let feitos = 0;
  let capturas = 0;
  for (let k = 0; k < quantos * 40 && feitos < quantos; k++) {
    await page.waitForTimeout(400);
    const t = await body();
    if (/Você venceu|O Linu venceu/.test(t)) return { feitos, capturas, fim: true };
    if (t.includes('O Linu está pensando') || t.includes('Semeando') || t.includes('Captura!') || t.includes('sai da mão') || t.includes('Pegando')) continue;
    if (await visivel(page.getByText('Parar na nyumba'))) {
      await page.getByText(feitos % 2 ? 'Seguir (safari)' : 'Parar na nyumba').first().click();
      feitos++;
      continue;
    }
    const sentido = page.getByText(/^(◀ )?(kichwa da|para a) (esquerda|direita)( ▶)?$/);
    if ((await sentido.count()) > 0) {
      await sentido.nth(feitos % (await sentido.count())).click();
      feitos++;
      continue;
    }
    if (/há captura/.test(t)) capturas++;
    const covas = page.locator('[aria-label$=", pode jogar"]');
    const n = await covas.count();
    if (n === 0) continue;
    await covas.nth((feitos * 3) % n).click();
    await page.waitForTimeout(250);
    // se jogou direto (um sentido só), a semeadura começa
    if (/Semeando|Captura!|sai da mão|Pegando/.test(await body())) {
      feitos++;
      if (feitos === 2) await shot(`${rotulo}-semeando`);
    }
  }
  return { feitos, capturas, fim: false };
}

await page.getByText('Recomeçar', { exact: true }).first().click();
await page.waitForTimeout(800);
await shot('kiswahili-inicio');
const a = await jogarAlguns('kiswahili', 12);
a.feitos >= 8 ? ok(`Bao la Kiswahili: ${a.feitos} lances seus contra o Linu (${a.capturas} vezes com captura obrigatória)`) : fail(`Bao la Kiswahili: só ${a.feitos} lances`);
await page.waitForTimeout(1500);
await shot('kiswahili-meio');

await page.getByText('Bao la kujifunza (para aprender)', { exact: true }).first().click();
await page.waitForTimeout(800);
(await body()).includes('Fase mtaji') ? ok('kujifunza começa na fase mtaji') : fail('kujifunza não começou na mtaji');
const b = await jogarAlguns("kujifunza", 5);
b.feitos >= 4 || b.fim ? ok(`Bao la kujifunza: ${b.feitos} lances${b.fim ? ', e a partida terminou' : ''}`) : fail(`kujifunza: só ${b.feitos} lances`);
await page.waitForTimeout(1500);
await shot('kujifunza');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
