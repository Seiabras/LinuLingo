// Patrimônios da Humanidade no mapa: os 87 marcadores roxos aparecem, tocar num abre o cartão
// (nome, país, texto, botões), «Ver o país» abre o país, e o botão 🏛️ esconde e mostra os marcadores.
// Uso: npx tsx scripts/fluxo-patrimonios.mjs   (BASE_URL, padrão http://localhost:8081; DEVICE=iphone|desktop SCHEME=light|dark)
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
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const shot = async (name, full = false) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/patrimonios-${device}-${scheme}-${name}.png`, fullPage: full });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 60000 });

await page.goto(`${BASE}/mapa`, { timeout: 600000 });
await page.waitForTimeout(3000);
const sair = page.getByRole('button', { name: 'Sair do tutorial' });
if (await sair.isVisible().catch(() => false)) {
  await sair.click();
  await page.waitForTimeout(800);
}
await expectText('Os pontos roxos são Patrimônios da Humanidade');
const marcadores = () => page.locator('circle[fill="#7C3AED"], circle[fill="#7c3aed"]').count();
const n = await marcadores();
if (n !== 87) throw new Error(`esperava 87 marcadores, vieram ${n}`);
await shot('mapa');
// toca no marcador do Machu Picchu: a área de toque é o círculo transparente na mesma posição
const alvo = page.locator('circle[fill-opacity="0.001"]').nth(79);
await alvo.dispatchEvent('click');
await expectText('Patrimônio da Humanidade (UNESCO)');
const titulo = await page.getByText('Patrimônio da Humanidade (UNESCO)').first().evaluate((el) => el.parentElement?.textContent ?? '');
console.log('cartão:', titulo.slice(0, 80));
await shot('cartao');
await page.getByRole('button', { name: /^Ver / }).first().click();
await page.waitForTimeout(1500);
await shot('pais');
await page.getByRole('switch', { name: 'Mostrar os patrimônios da humanidade' }).click();
await page.waitForTimeout(500);
if ((await marcadores()) !== 0) throw new Error('os marcadores não sumiram');
await page.getByRole('switch', { name: 'Mostrar os patrimônios da humanidade' }).click();
await page.waitForTimeout(500);
if ((await marcadores()) !== 87) throw new Error('os marcadores não voltaram');

await browser.close();
if (errors.length) {
  console.error('Erros no console:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`ok (${device}, ${scheme})`);
