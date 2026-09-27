// Confere o «🔊 Adivinhe o som» (em romeno): descobre pelo arquivo tocado qual bicho ou instrumento
// é, acerta tudo menos um, confere as opções no idioma estudado e o nome em português depois, e o
// 🐾 «de verdade» do «Como faz o bicho?».
// Uso: node scripts/fluxo-sons.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });

// id do som → nome em romeno (bichos: ro/bichos.ts; instrumentos: sons-nomes.ts)
const names = new Map([
  ...[...readFileSync('src/data/ro/bichos.ts', 'utf8').matchAll(/id: '(\w+)', emoji: '[^']+', animal: '([^']+)'/g)].map((m) => [m[1], m[2]]),
  ...[...readFileSync('src/data/sons-nomes.ts', 'utf8').matchAll(/id: '([\w-]+)',[^}]*?ro: '([^']+)'/g)].map((m) => [m[1], m[2]]),
]);

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
await context.addInitScript(() => {
  window.__played = [];
  const A = window.Audio;
  window.Audio = function (src) {
    window.__played.push(decodeURIComponent(String(src)));
    return new A(src);
  };
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.toLowerCase().includes(x.toLowerCase()), t, { timeout, polling: 200 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/sons-${device}-${scheme}-${++shots}-${name}.png` });
let seen = 0;
const heard = async () => {
  await page.waitForFunction((n) => window.__played.length > n, seen, { timeout: 15000 });
  const all = await page.evaluate(() => window.__played);
  seen = all.length;
  return /sons\/([\w-]+?)(?:\.[0-9a-f]+)?\.mp3/.exec(all.at(-1))?.[1];
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1000);

// 1. o 🐾 do «Como faz o bicho?» toca o som de verdade
await page.goto(BASE + '/bichos', { waitUntil: 'load' });
await waitText('Como faz o bicho?', 60000);
seen = await page.evaluate(() => window.__played.length);
await page.getByRole('button', { name: 'Ouvir o bicho de verdade: câinele' }).click();
(await heard()) === 'cao' ? ok('🐾 do cachorro toca o latido de verdade') : fail('🐾 não tocou o som do cachorro');

// 2. o jogo (a página recarrega: a lista de sons tocados recomeça)
await page.goto(BASE + '/', { waitUntil: 'load' });
seen = 0;
await page.locator('text=Adivinhe o som >> visible=true').first().click();
await waitText('Ouça e adivinhe');
await shot('inicio');
await page.getByRole('button', { name: /Jogar/ }).click();
for (let i = 0; i < 10; i++) {
  const id = await heard();
  const right = names.get(id);
  const labels = await page.getByRole('button', { name: /^Opção / }).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label').replace(/^Opção /, '')));
  if (!right || !labels.includes(right)) fail(`som ${id}: «${right}» não está em ${labels.join(' | ')}`);
  const pick = i === 3 ? labels.find((l) => l !== right) : right;
  await page.getByRole('button', { name: `Opção ${pick}`, exact: true }).click();
  await waitText(i === 3 ? `«${right}»` : 'Isso!');
  if (i === 3) await shot('errou');
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('acertos');
(await body()).includes('9/10 acertos') ? ok('rodada: 9/10, opções em romeno') : fail('placar errado');
await shot('fim');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
