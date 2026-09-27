// Expedição do Linu: as 3 paradas da semana em romeno, respondidas pelos dados. Na 1ª, um erro e
// depois a região certa; na 2ª, as duas dicas; na 3ª, três erros (o mapa revela onde era). No fim, a
// figurinha rara aparece na tela, no aviso e dourada no álbum; o erro vai para o caderno.
// Uso: npx tsx scripts/fluxo-expedicao.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { isoWeek, weeklyStops } from '../src/data/expedicoes.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
let n = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/expedicao-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });
const text = () => page.evaluate(() => document.body.innerText);

/** Toca uma região pelo id do contorno (regiao-CÓDIGO), como no jogo do mapa. */
async function tapRegion(code) {
  await page.waitForSelector(`path[id="regiao-${code}"]`, { timeout: 30000 });
  await page.evaluate((c) => document.getElementById(`regiao-${c}`).dispatchEvent(new MouseEvent('click', { bubbles: true })), code);
  await page.waitForTimeout(500);
}
/** Uma região errada (do mesmo mapa, que não seja nenhuma das certas nem já tocada). */
async function wrongRegion(codes, used) {
  return page.evaluate(
    ({ codes, used }) => [...document.querySelectorAll('path[id^="regiao-"]')].map((p) => p.id.slice(7)).find((c) => !codes.includes(c) && !used.includes(c)),
    { codes, used },
  );
}

const stops = weeklyStops('ro', isoWeek());
console.log(`   · paradas da semana: ${stops.map((s) => s.cityPt).join(', ')}`);

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);
await page.getByText('Expedição da semana', { exact: true }).first().click({ timeout: 30000 });
await waitText(/Pista 1 de 3/);
await shot('inicio');

// parada 1: erra uma vez e acerta
const s1 = stops[0];
const code1 = s1.codes.find((c) => readFileSync(`assets/geo/${s1.country}.geo`, 'utf8').includes(`"${c}"`));
const w1 = await wrongRegion(s1.codes, []);
await tapRegion(w1);
await waitText(/Não é aí/);
check(true, `parada 1 (${s1.cityPt}): errar mostra o aviso`);
await tapRegion(code1);
await waitText(/Chegamos!/);
check((await text()).includes(s1.fact), 'parada 1: chegou e mostra o fato');
await shot('parada-1');
await page.getByText('Próxima parada ›', { exact: true }).first().click();

// parada 2: as duas dicas
const s2 = stops[1];
await waitText(/Pista 2 de 3/);
await page.getByText('Ver a pista escrita (−1 ⭐)', { exact: true }).first().click();
await waitText(new RegExp(`«Linu călătorește la ${s2.city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.»`));
await page.getByText('Ver a tradução (−1 ⭐)', { exact: true }).first().click();
await waitText(new RegExp(`O Linu viaja para ${s2.cityPt}`));
check(true, `parada 2 (${s2.cityPt}): a pista escrita em romeno e a tradução`);
await shot('parada-2-dicas');
const code2 = s2.codes.find((c) => readFileSync(`assets/geo/${s2.country}.geo`, 'utf8').includes(`"${c}"`));
await tapRegion(code2);
await waitText(/Chegamos!/);
await page.getByText('Próxima parada ›', { exact: true }).first().click();

// parada 3: três erros, o mapa revela
const s3 = stops[2];
await waitText(/Pista 3 de 3/);
const used = [];
for (let i = 0; i < 3; i++) {
  const w = await wrongRegion(s3.codes, used);
  used.push(w);
  await tapRegion(w);
}
await waitText(/Era aqui:/);
check(true, `parada 3 (${s3.cityPt}): depois de 3 erros o mapa mostra onde era`);
await shot('parada-3-revelada');
await page.getByText('Ver a recompensa ✨', { exact: true }).first().click();
await waitText(/Expedição da semana completa/);
check(/figurinha rara/i.test(await text()), 'fim: a figurinha rara aparece');
await shot('recompensa');

// o álbum mostra a rara dourada
await page.goto(BASE + '/album', { waitUntil: 'load' });
await waitText(/✨ 1 rara/);
check((await page.getByLabel(/^Figurinha rara /).count()) === 1, 'no álbum, a rara aparece dourada');
await shot('album');

// a expedição concluída aparece assim na tela inicial
await page.goto(BASE + '/', { waitUntil: 'load' });
await waitText(/concluída · figurinha rara/);
check(true, 'na tela inicial, a expedição aparece concluída');

// os erros foram para o caderno
await page.goto(BASE + '/erros', { waitUntil: 'load' });
await waitText(/Expedição: onde fica/);
check(true, 'os erros da expedição foram para o caderno de erros');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
