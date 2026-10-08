// Cachecol pelas cordas da capoeira e Cofre de vocabulário: as 22 cordas no Linu vetorial e no de
// pixels (galeria de dev), a contagem real de palavras do idioma no Cofre, a lista das cordas ao tocar
// no cachecol e uma categoria aberta, sem erros no console.
// Uso: npx tsx scripts/fluxo-cachecol.mjs   (BASE_URL, padrão http://localhost:8081; DEVICE=iphone|desktop SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ROMENO } from '../src/data/ro/index.ts';

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
const shot = async (name, full = false) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/cachecol-${device}-${scheme}-${name}.png`, fullPage: full });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 60000 });

// as 22 cordas no Linu vetorial e no de pixels (a galeria rola por dentro: janela alta para caber tudo)
await page.setViewportSize({ width: VIEW.width, height: 3600 });
await page.goto(`${BASE}/dev-galeria?parte=cachecol`, { timeout: 600000 });
await page.getByTestId('cachecol-21').waitFor({ timeout: 120000 });
await shot('galeria-vetorial');
await page.goto(`${BASE}/dev-galeria?parte=pixel`);
await page.getByTestId('pixel-21').waitFor({ timeout: 60000 });
await shot('galeria-pixel');

await page.setViewportSize(VIEW);

// o Cofre: contagem real, o cachecol e a lista das cordas, uma categoria aberta
await page.goto(`${BASE}/vocabulario`);
await page.waitForTimeout(2500);
const sair = page.getByRole('button', { name: 'Sair do tutorial' });
if (await sair.isVisible().catch(() => false)) {
  await sair.click();
  await page.waitForTimeout(800);
}
const total = ROMENO.vocab.length.toLocaleString('pt-BR');
await expectText(`de ${total}`);
await expectText('Cachecol Cinza');
await shot('cofre');
await page.getByText('Cachecol Cinza', { exact: false }).first().click();
await expectText('Mestre 4º grau');
await shot('cordas', true);
await page.getByText('Cachecol Cinza', { exact: false }).first().click();
await page.getByRole('tab', { name: 'Categorias' }).click();
await page.getByRole('button', { name: /^Essenciais:/ }).click();
await page.waitForTimeout(800);
await shot('categoria-aberta');

await browser.close();
if (errors.length) {
  console.error('Erros no console:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`ok (${device}, ${scheme})`);
