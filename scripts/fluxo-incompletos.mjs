// Teste de ponta a ponta dos idiomas em construção (só o A1 por enquanto): para cada um, troca de
// idioma no Perfil (com o selo «só até…» e o aviso), trilha com o aviso «idioma em construção»,
// primeira lição, gramática, uma história e o cofre de vocabulário, sem erros no console.
// Uso: npx tsx scripts/fluxo-incompletos.mjs [código…]   (servidor em http://localhost:8081;
// sem códigos, testa todos os pacotes com `incomplete`)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { PACKS } from '../src/data/idiomas.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const codes = process.argv.slice(2).length ? process.argv.slice(2) : Object.values(PACKS).filter((p) => p.incomplete).map((p) => p.code);
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
let errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const shot = async (code, name) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/incompleto-${code}-${device}-${scheme}-${name}.png` });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 20000 });
const skipTutorial = async () => {
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
    await page.getByText('Pular', { exact: true }).first().click();
    await page.waitForTimeout(1500);
  }
};
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// a lista de idiomas do Perfil agora é um acordeão (família > ramo), fechado por padrão — mas a
// família (e o ramo) do idioma estudado no momento já vêm abertos; só clica em «Abrir …», nunca no
// que já estiver aberto (senão fecharia de novo)
const openIfClosed = async (text) => {
  const btn = page.getByRole('button', { name: new RegExp(`^Abrir ${escape(text)}`) }).first();
  if (await btn.count()) {
    await btn.scrollIntoViewIfNeeded().catch(() => {});
    await btn.click();
    await page.waitForTimeout(200);
  }
};
const openLanguageRow = async (pack) => {
  const row = page.getByText(new RegExp(`^${escape(pack.name)} · ${escape(pack.nativeName)}`)).first();
  if (await row.isVisible().catch(() => false)) return row;
  await openIfClosed(pack.lineage.family);
  if (await row.isVisible().catch(() => false)) return row;
  await openIfClosed(pack.lineage.branches[0]);
  return row;
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 120000 });
await skipTutorial();

const report = [];
for (const code of codes) {
  const pack = PACKS[code];
  errors = [];
  try {
    await page.goto(BASE + '/perfil', { waitUntil: 'load' });
    await page.waitForFunction(() => document.body.innerText.includes('Loja do Linu'), { timeout: 60000 });
    const row = await openLanguageRow(pack);
    await row.waitFor({ timeout: 30000 });
    await expectText(`só até ${pack.incomplete.until}`);
    await row.scrollIntoViewIfNeeded();
    await shot(code, '1-perfil');
    await row.click();
    await page.waitForTimeout(300);
    await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await skipTutorial();
    await expectText('idioma em construção');
    await page.getByLabel(/^Parada A1\.1:/).first().waitFor({ timeout: 15000 });
    await shot(code, '2-trilha');
    await page.getByLabel(/^Parada A1\.1:/).first().click();
    await expectText(pack.units[0].lessons[0].title);
    await page.getByText(pack.units[0].lessons[0].title, { exact: true }).first().click();
    await page.waitForTimeout(1500);
    await expectText(pack.units[0].card.title);
    await shot(code, '3-licao');
    await page.goto(BASE + '/gramatica/' + pack.grammar[0].id, { waitUntil: 'load' });
    await expectText(pack.grammar[0].title);
    await page.goto(BASE + '/historia/' + pack.stories[0].id, { waitUntil: 'load' });
    await page.waitForTimeout(1500);
    await page.goto(BASE + '/vocabulario', { waitUntil: 'load' });
    await expectText(`${pack.vocab.length} palavras`);
    report.push(`${code}: ${errors.length ? '❌ ' + errors.slice(0, 3).join(' | ') : '✅'}`);
  } catch (e) {
    report.push(`${code}: ❌ ${String(e.message).split('\n')[0]}`);
  }
  console.log(report.at(-1));
}
await browser.close();
const bad = report.filter((r) => r.includes('❌')).length;
console.log(bad ? `❌ ${bad} de ${report.length} com problema` : `✅ ${report.length} idiomas sem erros no console`);
process.exit(bad ? 1 : 0);
