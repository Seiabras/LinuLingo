// Teste de ponta a ponta do módulo Tsevhu (a língua do koi): card em Mais práticas, créditos,
// alfabeto Koiwrit e treino, escrita no koi com tempo e modo, dicionário, gramática e frases.
// Uso: npx tsx scripts/fluxo-tsevhu.mjs   (servidor em http://localhost:8081)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { TOPICS } from '../src/data/tsevhu/gramatica.ts';
import { FRASES } from '../src/data/tsevhu/frases.ts';

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
  await page.screenshot({ path: `${OUT}/tsevhu-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = (text) => page.getByText(text, { exact: true }).first().click();
const expectText = async (t) => {
  await page.getByText(t, { exact: false }).first().waitFor({ timeout: 15000 });
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 120000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await click('Pular');

// card em Mais práticas
await page.getByText('Tsevhu', { exact: true }).first().scrollIntoViewIfNeeded();
await click('Tsevhu');
await expectText('Tsevhu é uma língua inventada');
await expectText('Koa Vhukva');
await shot('inicio');

// alfabeto e treino
await click('🌀 Koiwrit');
await page.getByLabel('Sinal vh').click();
await expectText('traço 7');
await shot('alfabeto');
await click('🎯 Treinar (10 sinais)');
for (let i = 0; i < 10; i++) {
  await expectText(`Pergunta ${i + 1} de 10`);
  await page.getByLabel(/^Opção /).first().click();
  await click(i === 9 ? 'Ver o resultado' : 'Continuar');
}
await expectText('de 10 acertos');
await shot('treino');

// escrever no koi
await click('Ver a tabela');
await click('✍️ Escrever no koi');
await expectText('siketso');
await page.getByLabel('Texto em Tsevhu').fill('liis ruj');
await click('futuro médio');
await click('interrogativo (pergunta)');
await expectText('futuro médio (até o fim da sua vida) · interrogativo');
await page.getByLabel(/koi com o focinho a 90 graus e o modo interrogativo/).first().waitFor();
await shot('escrever');

// dicionário
await click('📖 Dicionário');
await page.getByLabel('Buscar no dicionário do Tsevhu').fill('beber');
await expectText('aenam');
await shot('dicionario');

// gramática e frases
await click('🧩 Gramática');
await expectText(TOPICS[0].title);
await click(`${TOPICS[1].emoji} ${TOPICS[1].title}`);
await shot('gramatica');
await click('💬 Frases');
await expectText(FRASES[0].tsevhu);
await expectText('Expressões');
await shot('frases');

if (errors.length) {
  console.error('erros no console:\n' + errors.join('\n'));
  process.exitCode = 1;
} else console.log(`ok (${device}, ${scheme}): ${n} capturas`);
await browser.close();
