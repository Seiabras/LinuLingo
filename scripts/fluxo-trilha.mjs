// Teste de ponta a ponta do mapa da aventura (as 15 paradas da trilha) e do teste para pular.
// Uso: npx tsx scripts/fluxo-trilha.mjs   (servidor em http://localhost:8081; tsx para ler o currículo)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ROMENO } from '../src/data/ro/index.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop' })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && errors.push(m.text()));
let n = 0;
const shot = async (name) => {
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/trilha-${device}-${String(++n).padStart(2, '0')}-${name}.png` });
};
const click = (text) => page.getByText(text, { exact: true }).first().click();

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).or(page.getByLabel(/^Parada A1\.1:/)).first().waitFor({ timeout: 120000 });
await page.waitForTimeout(800);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
  await click('Pular');
  await page.waitForTimeout(1500);
}

// o mapa com todas as paradas (uma por subnível), o Linu na primeira
const levels = ROMENO.units.map((u) => u.level);
const parada = (l) => page.getByLabel(new RegExp(`^Parada ${l.replace('.', '\\.')}:`));
for (const l of levels) if (!(await parada(l).count())) throw new Error(`mapa sem a parada ${l}`);
if (!(await page.getByLabel(/^Parada A1\.1:.*Você está aqui/).count())) throw new Error('o Linu não está na primeira parada');
await shot('inicio');

// teste para pular até a 2ª unidade: pelo painel da parada
const target = ROMENO.units[1];
await parada(target.level).first().click();
await page.getByText('Diário de campo', { exact: true }).first().waitFor({ timeout: 10000 });
await shot('parada');
await page.getByText('⏩ Já sei isto: fazer o teste e pular para cá').first().click();
await page.getByText(`Teste para pular · ${target.level}`, { exact: false }).first().waitFor({ timeout: 20000 });
// o card «Aprenda primeiro» só abre a primeira lição da unidade; o teste (a prova) começa direto na imersão
if (await page.getByText('Entendi, vamos praticar!', { exact: true }).isVisible().catch(() => false)) await click('Entendi, vamos praticar!');
await page.waitForTimeout(800);
for (let i = 0; i < 6; i++) {
  const card = page.getByLabel(/^Ouvir: /).first();
  const box = await card.boundingBox();
  const cx = box.x + box.width / 2;
  const cy = box.y - 60;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  for (let s = 1; s <= 10; s++) await page.mouse.move(cx + s * 25, cy, { steps: 2 });
  await page.mouse.up();
  await page.waitForTimeout(700);
}
// lacunas: clica na opção que é gabarito de alguma lacuna da unidade
const answers = new Set(target.lessons.flatMap((l) => l.cloze.map((c) => c.answer)));
for (let i = 0; i < 5; i++) {
  await page.getByText('Continuar', { exact: true }).or(page.getByText('Verificar', { exact: true })).first().waitFor({ state: 'attached', timeout: 1 }).catch(() => {});
  const cloze = target.lessons.flatMap((l) => l.cloze);
  let clicked = false;
  for (const c of cloze) {
    const sentence = c.sentence.split('___')[0].trim();
    if (sentence && (await page.getByText(sentence, { exact: false }).first().isVisible().catch(() => false))) {
      await click(c.answer);
      clicked = true;
      break;
    }
  }
  if (!clicked) for (const a of answers) if (await page.getByText(a, { exact: true }).first().isVisible().catch(() => false)) (await click(a), (clicked = true));
  await click('Continuar');
  await page.waitForTimeout(400);
}
const prova = target.lessons.at(-1);
await page.getByPlaceholder(/digite sua resposta/i).fill(prova.voice.expected[0]);
await click('Verificar');
await page.waitForTimeout(600);
await click('Continuar');
await click('Pular esta etapa');
await page.getByText(`⏩ Pronto: tudo até o ${target.level} está concluído!`).waitFor({ timeout: 15000 });
await shot('pulou');
await page.goto(BASE + '/', { waitUntil: 'load' });
await page.waitForTimeout(2500);
const next = ROMENO.units[2];
await page.getByLabel(new RegExp(`^Parada ${next.level.replace('.', '\\.')}:.*Você está aqui`)).first().waitFor({ timeout: 20000 });
if (!(await page.getByLabel(new RegExp(`^Parada ${target.level.replace('.', '\\.')}:.*Concluída`)).count())) throw new Error('a unidade pulada não ficou concluída');
await shot('depois');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
