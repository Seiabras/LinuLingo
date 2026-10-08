import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8094';
const OUT = '/tmp/claude-1000/-home-seiabras/629e0c1f-25c5-4f29-aa69-64997225527b/scratchpad';
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('404') && !m.text().includes('Unknown event handler property') && errors.push(m.text()));

await page.goto(BASE + '/mapa', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Onde se fala').waitFor({ timeout: 120000 });
await page.waitForTimeout(2500);

const heading = await page.getByText('🏛️ Patrimônios da Humanidade').first().isVisible().catch(() => false);
if (!heading) throw new Error('seção de patrimônios não apareceu pra Romênia (selecionada por padrão)');
const site = await page.getByText('Vilarejos com igrejas fortificadas da Transilvânia').first().isVisible().catch(() => false);
if (!site) throw new Error('nome do sítio não apareceu');
await page.screenshot({ path: `${OUT}/patrimonios-romenia.png` });
console.log('OK: seção de patrimônios visível para a Romênia, com sítio esperado.');
if (errors.length) console.log('ERROS DE CONSOLE:', errors);
await browser.close();
