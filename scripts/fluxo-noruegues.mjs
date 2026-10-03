// Teste de ponta a ponta do norueguês: troca de idioma, trilha, lição, gramática com IPA (tons),
// falsos amigos, palácio com os três gêneros, variante nynorsk, linguística,
// corretor do diário (en/ei/et), histórias e o slide dos falsos amigos no tutorial.
// Uso: npx tsx scripts/fluxo-noruegues.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { NORUEGUES } from '../src/data/nb/index.ts';

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
  await page.screenshot({ path: `${OUT}/noruegues-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
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

// troca para o norueguês no Perfil
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
const itRow = page.getByText(/^Norueguês · Norsk/).first();
await itRow.waitFor({ timeout: 30000 });
const tTroca = Date.now();
await itRow.click();
// o conteúdo do idioma novo é gravado no banco na hora da troca: espera o «preparando…» sumir
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
console.log(`  troca de idioma: ${((Date.now() - tTroca) / 1000).toFixed(1)} s`);
await page.goto(BASE + '/', { waitUntil: 'load' });
await skipTutorial();
const u1 = NORUEGUES.units[0];
await page.getByLabel(/^Parada A1\.1:/).first().waitFor({ timeout: 15000 });
await expectText('Falsos amigos');
await shot('trilha');

// primeira lição: card «Aprenda primeiro»
// a lição fica no painel da primeira parada do mapa
await page.getByLabel(/^Parada A1\.1:/).first().click();
await expectText(u1.lessons[0].title);
await click(u1.lessons[0].title);
await page.waitForTimeout(1500);
await expectText(u1.card.title);
await shot('licao-card');

// gramática: pronúncia, com IPA
const g1 = NORUEGUES.grammar[0];
await page.goto(BASE + '/gramatica/' + g1.id, { waitUntil: 'load' });
await expectText(g1.title);
await shot('gramatica');
if (!(await page.locator('text=/\\[.*ˈ.*\\]/').count())) throw new Error('IPA do norueguês não apareceu na gramática');

// falsos amigos: a lista, um card aberto e uma rodada de 10 perguntas
await page.goto(BASE + '/falsos-amigos', { waitUntil: 'load' });
const ff = NORUEGUES.falseFriends[0];
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

// palácio: os três gêneros (en, ei, et), sem o camaleão do romeno
await page.goto(BASE + '/palacio', { waitUntil: 'load' });
await expectText('masculino (en)');
await expectText('feminino (ei)');
await expectText('neutro (et)');
if (await page.getByText('Jardim do Camaleão', { exact: false }).count()) throw new Error('o palácio do norueguês mostrou a sala do romeno');
await shot('palacio');

// cultura: a variante nynorsk
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByText(/Variantes.* do norueguês/i).first().waitFor({ timeout: 30000 });
await page.getByLabel(new RegExp(`^Estudar: .*${NORUEGUES.variants[1].name}`)).first().click();
await page.waitForTimeout(800);
await expectText(NORUEGUES.variants[1].card.title);
await shot('variante');
await page.getByLabel(new RegExp(`^Estudar: .*${NORUEGUES.variants[0].name}`)).first().click();
await page.waitForTimeout(800);

// linguística: fonética do norueguês
await page.goto(BASE + '/linguistica/fonetica', { waitUntil: 'load' });
await expectText(NORUEGUES.linguistics[0].sections[0].heading);
await shot('linguistica');

// diário: en/ei/et pelo gênero do vocabulário
await page.goto(BASE + '/diario', { waitUntil: 'load' });
await page.waitForTimeout(2500);
await page.getByLabel('Seu texto do diário').fill('Jeg har et bil og en hus.');
await page.getByText('Corrigir', { exact: false }).first().click();
await page.waitForTimeout(1200);
await expectText('et hus');
await expectText('en bil');
await shot('diario-correcao');

// histórias: 3 no A1.1 e uma aberta
await page.goto(BASE + '/historias', { waitUntil: 'load' });
const a11 = NORUEGUES.stories.filter((x) => x.level === 'A1.1');
for (const st of a11) await expectText(st.title);
await shot('historias');
await page.goto(BASE + '/historia/' + a11[0].id, { waitUntil: 'load' });
await expectText(a11[0].nodes[a11[0].start].text.slice(0, 30));
await shot('historia');

// tutorial: o slide dos falsos amigos
await page.goto(BASE + '/tutorial', { waitUntil: 'load' });
// 1º passo: a escolha do idioma (o estudado já vem marcado); o cumprimento no idioma vem no 2º
await expectText('que idioma você quer aprender comigo?');
await click('Próximo');
await expectText('Hei! Vamos de');
// o passeio guiado: avança os balões até o dos falsos amigos (na trilha, apontando o cartão do treino)
await click('Me mostra o app!');
for (let i = 0; i < 20 && !(await page.getByText('Cuidado com os falsos amigos').first().isVisible().catch(() => false)); i++) {
  await click('Próximo');
  await page.waitForTimeout(600);
}
await expectText('Cuidado com os falsos amigos');
await shot('tutorial-falsos-amigos');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
