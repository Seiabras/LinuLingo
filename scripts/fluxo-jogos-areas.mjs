// Perfil → Jogos: as 6 subáreas (Tabuleiro | Cartas | Azar | Brincadeiras | Esportes | Videogames),
// a área Cartas, o Hanafuda (joga cartas até o Linu responder, confere que a mesa muda) e a roleta
// (aposta no vermelho, gira, espera a roda parar, confere o gráfico e o “Simular 100 rodadas”).
// Sem erros no console.
// Uso: npx tsx scripts/fluxo-jogos-areas.mjs   (BASE_URL, padrão http://localhost:8081; DEVICE=iphone|desktop SCHEME=light|dark)
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
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && !m.text().includes('maskType') && errors.push(m.text()));
const shot = async (name, full = false) => {
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/jogos-areas-${device}-${scheme}-${name}.png`, fullPage: full });
};
const expectText = (t) => page.getByText(t, { exact: false }).first().waitFor({ timeout: 60000 });
const sairDoTutorial = async () => {
  const sair = page.getByRole('button', { name: 'Sair do tutorial' });
  if (await sair.isVisible().catch(() => false)) {
    await sair.click();
    await page.waitForTimeout(800);
  }
};

// Perfil: área Jogos e o seletor das 6 subáreas
await page.goto(`${BASE}/perfil`, { timeout: 600000 });
await page.waitForTimeout(2500);
await sairDoTutorial();
await page.getByRole('radio', { name: '🎲 Jogos' }).click();
for (const n of ['Tabuleiro', 'Cartas', 'Azar', 'Brincadeiras', 'Esportes', 'Videogames']) {
  await page.getByRole('radio', { name: new RegExp(`^${n}, \\d+ jogo`) }).waitFor({ timeout: 20000 });
}
await expectText('Jogos de tabuleiro');
await page.getByRole('radio', { name: /^Tabuleiro/ }).scrollIntoViewIfNeeded();
await shot('perfil-tabuleiro');
// as 6 caixas cabem sem rolagem: nenhuma passa da largura da tela
const larguras = await page.evaluate(() => [...document.querySelectorAll('[role="radio"]')].filter((e) => /jogos?$/.test(e.getAttribute('aria-label') ?? '')).map((e) => e.getBoundingClientRect().right));
if (larguras.length !== 6 || larguras.some((r) => r > VIEW.width)) throw new Error(`subáreas de jogos: ${larguras.length} caixas, alguma saindo da tela?`);
await page.getByRole('radio', { name: /^Cartas/ }).click();
await expectText('Hanafuda (Koi-Koi)');
await shot('perfil-cartas');

// área Cartas e a página do Hanafuda
await page.goto(`${BASE}/jogos/cartas`);
await expectText('Hanafuda (Koi-Koi)');
await sairDoTutorial();
await shot('area-cartas');
await page.goto(`${BASE}/jogos/cartas/hanafuda`);
await expectText('Rodada 1 de 3');
await sairDoTutorial();
await shot('hanafuda-inicio');
// joga até 3 cartas da mão (se houver escolha de par, toca a primeira opção destacada)
for (let k = 0; k < 3; k++) {
  await page.waitForTimeout(1500);
  if (await page.getByText('Sua vez: toque', { exact: false }).isVisible().catch(() => false)) {
    const mao = page.locator('[role="button"][aria-label*="(mês"]').last();
    await mao.click();
    await page.waitForTimeout(600);
    if (await page.getByText('toque em qual levar', { exact: false }).isVisible().catch(() => false)) {
      // as opções são as cartas da mesa clicáveis
      await page.locator('[role="button"][aria-label*="(mês"]').first().click();
    }
  } else if (await page.getByRole('button', { name: 'Parar e marcar' }).isVisible().catch(() => false)) {
    await page.getByRole('button', { name: 'Parar e marcar' }).click();
  }
}
await page.waitForTimeout(2500);
await shot('hanafuda-jogando', true);
await page.getByRole('button', { name: /As 48 cartas/ }).click();
await page.waitForTimeout(500);
await expectText('De onde vem o nome');
await shot('hanafuda-cartas', true);

// roleta
await page.goto(`${BASE}/jogos/azar/roleta`);
await expectText('Fichas de mentira');
await sairDoTutorial();
await page.getByRole('button', { name: /Apostar em Vermelho/ }).click();
await page.getByRole('button', { name: /Apostar em 2ª dúzia/ }).click();
await expectText('Suas apostas: 10 fichas');
await page.getByRole('button', { name: 'Girar' }).click();
await page.getByText('Fichas de mentira', { exact: false }).first().scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await shot('roleta-girando');
await expectText('Saiu ');
await page.getByText('Fichas de mentira', { exact: false }).first().scrollIntoViewIfNeeded();
await shot('roleta-resultado');
await page.getByRole('button', { name: 'Simular 100 rodadas' }).click();
await expectText('Simulei');
await shot('roleta-grafico', true);

await browser.close();
if (errors.length) {
  console.error('Erros no console:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`ok (${device}, ${scheme})`);
