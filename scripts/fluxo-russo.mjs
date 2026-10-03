// Teste de ponta a ponta do russo: troca de idioma, trilha, lição com o guia do cirílico,
// gramática (alfabeto), IPA com tônica, teclado cirílico e corretor do diário.
// Uso: npx tsx scripts/fluxo-russo.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { RUSSO } from '../src/data/ru/index.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: process.env.SCHEME ?? 'light' })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/russo-${device}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = (text) => page.getByText(text, { exact: true }).first().click();
const expectText = async (t) => {
  await page.getByText(t, { exact: false }).first().waitFor({ timeout: 15000 });
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).or(page.getByLabel(/^Parada A1\.1:/)).first().waitFor({ timeout: 120000 });
await page.waitForTimeout(800);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
  await click('Pular');
  await page.waitForTimeout(1500);
}

// troca para o russo no Perfil
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
const ruRow = page.getByText(/^Russo · Русский/).first();
await ruRow.waitFor({ timeout: 30000 });
const tTroca = Date.now();
await ruRow.click();
// o conteúdo do idioma novo é gravado no banco na hora da troca: espera o «preparando…» sumir
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
console.log(`  troca de idioma: ${((Date.now() - tTroca) / 1000).toFixed(1)} s`);
await page.goto(BASE + '/', { waitUntil: 'load' });
// o tutorial abre de novo? pula
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
  await click('Pular');
  await page.waitForTimeout(1500);
}
const u1 = RUSSO.units[0];
await expectText('Russo');
await page.getByLabel(/^Parada A1\.1:/).first().waitFor({ timeout: 15000 });
await shot('trilha');

// primeira lição (no painel da primeira parada do mapa): card com o guia do cirílico
await page.getByLabel(/^Parada A1\.1:/).first().click();
await page.getByLabel(/^Parada A1\.1:/).first().waitFor({ timeout: 15000 });
// a lição fica no painel da primeira parada do mapa
await page.getByLabel(/^Parada A1\.1:/).first().click();
await expectText(u1.lessons[0].title);
await click(u1.lessons[0].title);
await page.waitForTimeout(1500);
await expectText(u1.card.title);
await shot('licao-card');

// gramática: o alfabeto
const g1 = RUSSO.grammar[0];
await page.goto(BASE + '/gramatica/' + g1.id, { waitUntil: 'load' });
await expectText(g1.title);
await shot('alfabeto');
// a IPA russa aparece com o acento tônico
if (!(await page.locator('text=/ˈ/').count())) throw new Error('IPA russa sem marca de tônica na tela');

// diário: corretor russo e teclado cirílico
await page.goto(BASE + '/diario', { waitUntil: 'load' });
await page.waitForTimeout(2500);
const box = page.getByLabel('Seu texto do diário');
await box.fill('Я имею 20 лет. Я холодно. Мой мама дома');
await page.getByText(/Mostrar teclado/).first().click();
await page.getByLabel('Inserir ё').click();
await page.getByLabel('Apagar').click();
await page.getByLabel('Inserir .').count(); // (sem ponto no teclado: tudo bem)
await shot('diario-teclado');
await page.getByText('Corrigir', { exact: false }).first().click();
await page.waitForTimeout(1200);
await expectText('Мне 20 лет');
await shot('diario-correcao');

// sotaques: São Petersburgo × Moscou
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByLabel(/^Estudar: .*São Petersburgo$/).waitFor({ timeout: 30000 });
await page.getByLabel(/^Estudar: .*São Petersburgo$/).click();
await expectText('поре́брик');
await page.waitForTimeout(1500);
await page.getByLabel(/^Estudar: .*São Petersburgo$/).scrollIntoViewIfNeeded();
await shot('sotaque-petersburgo');

// histórias: 3 por subnível
await page.goto(BASE + '/historias', { waitUntil: 'load' });
for (const st of RUSSO.stories.filter((x) => x.level === 'A1.1')) await expectText(st.title);
await shot('historias');

// treino do alfabeto: conhecer uma falsa amiga e jogar uma rodada
await page.goto(BASE + '/alfabeto', { waitUntil: 'load' });
await page.getByText('Falsas amigas', { exact: false }).first().waitFor({ timeout: 20000 });
await page.getByLabel('Letra В в, som v').click();
await expectText('Parece B, mas é V');
await shot('alfabeto-letras');
await click('🎯 Treinar (12 perguntas)');
for (let q = 0; q < 12; q++) {
  await page.getByLabel(/^Opção /).first().click();
  await page.getByText('Continuar', { exact: true }).first().click();
  await page.waitForTimeout(250);
  if (q === 0) await shot('alfabeto-jogo');
}
await expectText('acertos');
await shot('alfabeto-fim');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
