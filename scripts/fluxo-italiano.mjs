// Teste de ponta a ponta do italiano: troca de idioma, trilha, lição, gramática com IPA,
// falsos amigos, palácio com 2 gêneros, variante da Suíça, linguística, corretor do diário,
// histórias e o slide dos falsos amigos no tutorial.
// Uso: npx tsx scripts/fluxo-italiano.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ITALIANO } from '../src/data/it/index.ts';

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
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/italiano-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = (text) => page.getByText(text, { exact: true }).first().click();
const expectText = async (t) => {
  await page.getByText(t, { exact: false }).first().waitFor({ timeout: 15000 });
};
const skipTutorial = async () => {
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
    await click('Pular');
    await page.waitForTimeout(1500);
  }
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 120000 });
await skipTutorial();

// troca para o italiano no Perfil
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
const itRow = page.getByText(/^Italiano · Italiano/).first();
await itRow.waitFor({ timeout: 30000 });
await itRow.click();
await page.waitForTimeout(1500);
await page.goto(BASE + '/', { waitUntil: 'load' });
await skipTutorial();
const u1 = ITALIANO.units[0];
await expectText(u1.lessons[0].title);
await expectText('Falsos amigos');
await shot('trilha');

// primeira lição: card «Aprenda primeiro»
await click(u1.lessons[0].title);
await page.waitForTimeout(1500);
await expectText(u1.card.title);
await shot('licao-card');

// gramática: pronúncia, com IPA
const g1 = ITALIANO.grammar[0];
await page.goto(BASE + '/gramatica/' + g1.id, { waitUntil: 'load' });
await expectText(g1.title);
await shot('gramatica');
if (!(await page.locator('text=/\\[.*ˈ.*\\]/').count())) throw new Error('IPA do italiano não apareceu na gramática');

// falsos amigos: a lista, um card aberto e uma rodada de 10 perguntas
await page.goto(BASE + '/falsos-amigos', { waitUntil: 'load' });
const ff = ITALIANO.falseFriends[0];
await page.getByLabel(`Falso amigo ${ff.word}`).waitFor({ timeout: 20000 });
await page.getByLabel(`Falso amigo ${ff.word}`).click();
await expectText(ff.example[1]);
await shot('falsos-amigos-lista');
await click('🎯 Treinar (10 perguntas)');
for (let q = 0; q < 10; q++) {
  await page.getByLabel(/^Opção /).first().click();
  if (q === 0) await shot('falsos-amigos-jogo');
  await page.getByText('Continuar', { exact: true }).first().click();
  await page.waitForTimeout(250);
}
await expectText('acertos');
await shot('falsos-amigos-fim');

// palácio: o italiano tem só masculino e feminino
await page.goto(BASE + '/palacio', { waitUntil: 'load' });
await expectText('le uova');
if (await page.getByText('Jardim do Camaleão', { exact: false }).count()) throw new Error('o palácio do italiano mostrou a sala do neutro');
await shot('palacio');

// cultura: a variante da Suíça
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await expectText('Variantes do italiano');
await page.getByText('Italiano da Suíça', { exact: true }).first().click();
await page.waitForTimeout(800);
await expectText('Natel, azione e franchi');
await shot('variante-suica');
await page.getByText('Italiano padrão', { exact: true }).first().click();
await page.waitForTimeout(800);

// linguística: fonética do italiano
await page.goto(BASE + '/linguistica/fonetica', { waitUntil: 'load' });
await expectText('Sete vogais, nenhuma nasal');
await shot('linguistica');

// diário: gênero (la problema), idade com avere e mi piacciono
await page.goto(BASE + '/diario', { waitUntil: 'load' });
await page.waitForTimeout(2500);
await page.getByLabel('Seu texto do diário').fill('La fiore è bella. Sono 20 anni. Mi piace i gatti.');
await page.getByText('Corrigir', { exact: false }).first().click();
await page.waitForTimeout(1200);
await expectText('Il fiore');
await expectText('piacciono');
await shot('diario-correcao');

// histórias: 3 no A1.1 e uma aberta
await page.goto(BASE + '/historias', { waitUntil: 'load' });
const a11 = ITALIANO.stories.filter((x) => x.level === 'A1.1');
for (const st of a11) await expectText(st.title);
await shot('historias');
await page.goto(BASE + '/historia/' + a11[0].id, { waitUntil: 'load' });
await expectText(a11[0].nodes[a11[0].start].text.slice(0, 30));
await shot('historia');

// tutorial: o slide dos falsos amigos
await page.goto(BASE + '/tutorial', { waitUntil: 'load' });
await expectText('Ciao! Eu sou o Linu');
for (let i = 0; i < 3; i++) {
  await click('Próximo');
  await page.waitForTimeout(400);
}
await expectText('Cuidado com os falsos amigos');
await shot('tutorial-falsos-amigos');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
