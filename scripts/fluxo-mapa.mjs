// Teste de ponta a ponta do mapa (ISO 3166-1 e 3166-3) e das variantes.
// Uso: node scripts/fluxo-mapa.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && !m.text().includes('Unknown event handler property') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/mapa-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = async (t) => {
  await page.getByText(t, { exact: true }).first().click();
  await page.waitForTimeout(600);
};
const expectText = async (t) => {
  if (!(await page.getByText(t).first().isVisible().catch(() => false))) throw new Error(`não achei: ${t}`);
};
const selected = () => page.locator('[aria-label^="País selecionado"]').first().getAttribute('aria-label');

await page.goto(BASE + '/mapa', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Onde se fala').waitFor({ timeout: 120000 });
await page.waitForTimeout(2500);
if ((await selected()) !== 'País selecionado: Romênia') throw new Error('Romênia não veio selecionada');
await shot('romeno');

// ordem dos idiomas: o estudado primeiro, depois os parentes mais próximos
const chips = await page.locator('text=/^(Romeno|Espanhol|Português|Italiano|Inglês|Russo|Japonês|Coreano|Finlandês|Estoniano)$/').allTextContents();
if (chips.slice(0, 5).join() !== 'Romeno,Espanhol,Português,Italiano,Inglês') throw new Error('ordem dos idiomas: ' + chips.join());

// toque num ponto do mapa (coordenadas do mapa → pixels, pelo viewBox atual)
const WORLD = readFileSync('src/data/mapa-mundi.ts', 'utf8');
const centroid = (iso) => {
  const m = WORLD.match(new RegExp(`"iso":"${iso}"[^}]*?"cx":([\\d.]+),"cy":([\\d.]+)`));
  return [+m[1], +m[2]];
};
const tapMap = async ([x, y]) => {
  const svg = page.locator('svg:has(rect)').first();
  const [vx, vy, vw, vh] = (await svg.getAttribute('viewBox')).split(' ').map(Number);
  const b = await svg.boundingBox();
  await page.mouse.click(b.x + ((x - vx) / vw) * b.width, b.y + ((y - vy) / vh) * b.height);
};
const pathCount = () => page.locator('svg:has(rect) path').count();
const before = await pathCount();
await tapMap(centroid('ROU'));
await page.getByLabel('Voltar ao mapa-múndi').waitFor({ timeout: 5000 });
await page.waitForFunction((n) => document.querySelectorAll('svg path').length > n + 30, before, { timeout: 15000 });
await page.waitForTimeout(800);
const vb = (await page.locator('svg:has(rect)').first().getAttribute('viewBox')).split(' ').map(Number);
if (vb[2] > 60) throw new Error('não aproximou na Romênia: ' + vb.join(' '));
await shot('zoom-romenia');
// toque em Cluj (centro vindo do arquivo de subdivisões)
const cj = JSON.parse(readFileSync('assets/geo/ROU.geo', 'utf8')).find((x) => x[0] === 'RO-CJ');
await tapMap([cj[3], cj[4]]);
await page.locator('[aria-label="Subdivisão selecionada: Cluj"]').waitFor({ timeout: 5000 });
await expectText('Dialeto daqui: Transilvano');
await shot('cluj');
// Ucrânia: só as regiões onde se fala romeno ficam em destaque
await tapMap(centroid('UKR'));
await page.waitForFunction(() => [...document.querySelectorAll('[aria-label^="País selecionado"]')].some((e) => e.getAttribute('aria-label').includes('Ucrânia')), null, { timeout: 5000 });
await page.waitForTimeout(1500);
await shot('zoom-ucrania');
await page.getByLabel('Voltar ao mapa-múndi').click();
// regiões › sub-regiões › países (como as bandeiras do NeuroSim)
await click('🌎 América do Sul');
await click('Andina');
await expectText('Brasil e Cone Sul');
await page.getByLabel('País: Peru').click();
await page.waitForTimeout(900);
if ((await selected()) !== 'País selecionado: Peru') throw new Error('lista da sub-região não selecionou o Peru');
await shot('andina');
await page.getByLabel('Voltar ao mapa-múndi').click();
await page.waitForTimeout(800);
if ((await page.locator('svg:has(rect)').first().getAttribute('viewBox')).split(' ').map(Number)[2] < 300) throw new Error('não voltou ao mundo');
// Brasil: português (oficial) antes das comunidades
await tapMap(centroid('BRA'));
await page.waitForTimeout(900);
const langs = await page.locator('text=/^(🇧🇷 Português|🇪🇸 Espanhol|🇯🇵 Japonês)$/').allTextContents();
if (!langs[0]?.includes('Português')) throw new Error('ordem no Brasil: ' + langs.join());
await shot('brasil');
// todas as línguas do país (CLDR), com a % da população; «Estudar» só nas do app
await page.getByText(/^Ver todas as \d+ línguas$/).first().click();
await expectText('Kaingang');
await expectText('% da população');
if (await page.getByText('Estudar kaingang', { exact: true }).count()) throw new Error('botão Estudar num idioma que o app não ensina');
await shot('brasil-todas');
await page.getByLabel('Voltar ao mapa-múndi').click();

// busca em todos os idiomas do mundo: o guarani colore o Paraguai
await page.getByText(/^Todos os idiomas \(\d+\)$/).first().click();
await page.getByLabel('Buscar idioma').fill('guara');
await page.getByLabel('Ver no mapa: Guarani', { exact: true }).first().click();
await expectText('Família: Tupi');
await tapMap(centroid('PRY'));
await page.waitForTimeout(1200);
await expectText('língua oficial');
if (await page.getByText('Estudar guarani', { exact: true }).count()) throw new Error('botão Estudar no guarani');
await shot('guarani');
await page.getByLabel('Voltar ao mapa-múndi').click();


// ISO 3166-3
await click('Já existiram · ISO 3166-3');
await click('União Soviética (URSS)');
await expectText('Hoje no lugar');
await expectText('Moldávia');
await shot('urss');

// variante na aba Cultura
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByText('dialetos do romeno').waitFor({ timeout: 60000 });
await page.getByLabel(/^Estudar: .*Romeno da Moldávia$/).first().click();
await expectText('barabule');
await shot('variante-moldavia');
// sotaques do romeno: o transilvano, com as regiões no minimapa
await page.getByLabel(/^Estudar: .*Transilvano$/).click();
await expectText('No, hai!');
await page.waitForTimeout(1500);
await page.getByLabel(/^Estudar: .*Transilvano$/).scrollIntoViewIfNeeded();
await shot('sotaque-transilvano');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
