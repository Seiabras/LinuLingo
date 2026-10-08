// Perfil → Acessibilidade: liga o alto contraste e o texto espaçado (confere a classe na raiz e a
// cor calculada de um texto cinza), escolhe a voz devagar e o Sprint sem limite (confere o título do
// Sprint), e a escolha continua depois de recarregar. Sem erros no console.
// Uso: npx tsx scripts/fluxo-acessibilidade.mjs   (BASE_URL, padrão http://localhost:8081; DEVICE=iphone|desktop SCHEME=light|dark)
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
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
// o aviso de «maskType» vem do volume das roupas no Linu.tsx (react-native-svg na web não repassa
// maskType ao <mask>); é de outra área e não muda o que este roteiro confere
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && !m.text().includes('maskType') && errors.push(m.text()));
const shot = async (name, full = false) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/acessibilidade-${device}-${scheme}-${name}.png`, fullPage: full });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 60000 });

await page.goto(`${BASE}/perfil`, { timeout: 600000 });
await page.waitForTimeout(2500);
const sair = page.getByRole('button', { name: 'Sair do tutorial' });
if (await sair.isVisible().catch(() => false)) {
  await sair.click();
  await page.waitForTimeout(800);
}
// a cor de um texto cinza qualquer (as explicações da Acessibilidade usam text-slate-500)
const corCinza = () =>
  page.evaluate(() => {
    const el = document.querySelector('.text-slate-500');
    return el ? getComputedStyle(el).color : null;
  });
await expectText('Alto contraste');
const antes = await corCinza();
const contraste = page.getByRole('switch', { name: 'Alto contraste' });
await contraste.scrollIntoViewIfNeeded();
await contraste.click();
await page.waitForTimeout(400);
if (!(await page.evaluate(() => document.documentElement.classList.contains('alto-contraste')))) throw new Error('alto contraste não ligou a classe');
const depois = await corCinza();
if (!antes || antes === depois) throw new Error(`a cor do texto cinza não mudou (${antes} → ${depois})`);
await page.getByRole('switch', { name: 'Texto mais espaçado' }).click();
await page.waitForTimeout(400);
if (!(await page.evaluate(() => document.documentElement.classList.contains('texto-espacado')))) throw new Error('texto espaçado não ligou a classe');
await page.getByRole('radio', { name: 'Velocidade da voz: Devagar' }).click();
await page.getByRole('radio', { name: 'Tempo do Sprint: Sem limite' }).click();
await page.waitForTimeout(600);
await page.getByRole('switch', { name: 'Alto contraste' }).scrollIntoViewIfNeeded();
await shot('perfil');

// a escolha fica salva: depois de recarregar, a classe volta e o Sprint vem sem cronômetro
await page.goto(`${BASE}/sprint`);
await expectText('Sprint sem cronômetro');
if (!(await page.evaluate(() => document.documentElement.classList.contains('alto-contraste')))) throw new Error('alto contraste não ficou salvo');
await shot('sprint');

// desliga tudo de novo, para não deixar o perfil de teste diferente
await page.goto(`${BASE}/perfil`);
await page.getByRole('switch', { name: 'Alto contraste' }).click();
await page.getByRole('switch', { name: 'Texto mais espaçado' }).click();
await page.getByRole('radio', { name: 'Velocidade da voz: Normal' }).click();
await page.getByRole('radio', { name: 'Tempo do Sprint: 5 min' }).click();
await page.waitForTimeout(400);
if (await page.evaluate(() => document.documentElement.classList.contains('alto-contraste'))) throw new Error('alto contraste não desligou');

await browser.close();
if (errors.length) {
  console.error('Erros no console:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`ok (${device}, ${scheme})`);
