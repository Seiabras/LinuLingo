// Confere o app instalável e sem internet no build do GitHub Pages (dist/, depois de `npm run build:web`):
// o manifesto passa nos critérios de instalação, o service worker isola a página (SQLite) e guarda o app,
// o Perfil guarda as gravações do idioma, e com o servidor DESLIGADO o app abre, navega e toca áudio.
// Uso: node scripts/fluxo-offline.mjs   (sobe o próprio servidor em http://localhost:8090/LinuLingo/)
import { chromium } from 'playwright-core';
import { startDistServer } from './servidor-dist.mjs';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';

const PORT = Number(process.env.PORT ?? 8090);
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const UA = {
  iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  desktop: undefined,
}[device];
mkdirSync(OUT, { recursive: true });
const dist = await startDistServer(PORT);
const URL0 = dist.url;

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
// perfil de verdade (não anônimo): no modo anônimo o Chrome não deixa instalar apps
const profile = mkdtempSync(join(tmpdir(), 'linulingo-'));
const context = await chromium.launchPersistentContext(profile, {
  executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined),
  viewport: VIEW,
  deviceScaleFactor: 2,
  colorScheme: scheme,
  userAgent: UA,
  hasTouch: device === 'iphone',
});
const page = context.pages()[0] ?? (await context.newPage());
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 60000) => page.waitForFunction((x) => document.body.innerText.includes(x), t, { timeout, polling: 250 });

// 1. primeira visita: o service worker assume, a página recarrega uma vez e fica isolada
await page.goto(URL0, { waitUntil: 'load', timeout: 120000 });
await page.waitForFunction(() => window.crossOriginIsolated && !!navigator.serviceWorker.controller, null, { timeout: 60000 });
ok('página isolada e controlada pelo service worker');
await waitText('Eu sou o Linu', 90000);
ok('app abriu (tutorial)');

// 2. manifesto e critérios de instalação do Chrome
const cdp = await context.newCDPSession(page);
const { installabilityErrors: installErrors } = await cdp.send('Page.getInstallabilityErrors');
if (installErrors.length) fail(`não instalável: ${installErrors.map((e) => e.errorId).join(', ')}`);
else ok('o Chrome considera o app instalável');

// 3. o app todo guardado (a lista vem do próprio sw.js)
const expected = await page.evaluate(async () => {
  const src = await (await fetch(document.querySelector('script[src$="/sw.js"]').src)).text();
  return JSON.parse(/const PRECACHE = (\[.*\]);/.exec(src)[1]).length;
});
await page.waitForFunction(
  async (n) => {
    const name = (await caches.keys()).find((k) => k.startsWith('linulingo-app-'));
    return !!name && (await (await caches.open(name)).keys()).length >= n;
  },
  expected,
  { timeout: 120000, polling: 1000 },
);
ok(`${expected} arquivos do app guardados`);

// 4. Perfil: cartão «Usar como app» e guardar as gravações do idioma
await page.goto(URL0 + 'perfil', { waitUntil: 'load' });
await waitText('Usar como app');
const hint = device === 'iphone' ? 'Adicionar à Tela de Início' : 'Instalar';
if (!(await page.evaluate((x) => document.body.innerText.includes(x), hint))) fail(`sem a dica de instalação («${hint}»)`);
else ok(`dica de instalação: «${await page.evaluate(() => /Instalar o LinuLingo|Instalar app|Adicionar à Tela de Início/.exec(document.body.innerText)?.[0])}»`);
await page.getByText('Usar como app').first().scrollIntoViewIfNeeded();
await page.screenshot({ path: `${OUT}/offline-${device}-${scheme}-1-perfil.png` });
const saveBtn = page.getByRole('button', { name: /Guardar as gravações/ });
if (await saveBtn.count()) {
  await saveBtn.first().click();
  await page.waitForFunction(() => /(\d+) de \1 gravações/.test(document.body.innerText), null, { timeout: 300000, polling: 1000 });
  ok(`gravações guardadas: ${await page.evaluate(() => /\d+ de \d+ gravações[^\n]*/.exec(document.body.innerText)?.[0])}`);
  await page.screenshot({ path: `${OUT}/offline-${device}-${scheme}-2-gravacoes.png` });
} else fail('sem o botão de guardar as gravações');
const audio = await page.evaluate(async () => {
  const cache = await caches.open('linulingo-extras-v1');
  return (await cache.keys()).map((r) => r.url).find((u) => u.endsWith('.mp3'));
});

// 5. sem internet: desliga o servidor e reabre
await dist.close();
await page.goto(URL0 + 'vocabulario', { waitUntil: 'load', timeout: 60000 }).catch((e) => fail(`não abriu sem internet: ${e.message}`));
await page.waitForFunction(() => window.crossOriginIsolated, null, { timeout: 30000 }).catch(() => fail('sem internet, a página não ficou isolada'));
await waitText('Vocabulário').then(
  () => ok('sem internet: o app abriu direto no vocabulário'),
  () => fail('sem internet: o vocabulário não apareceu'),
);
await page.screenshot({ path: `${OUT}/offline-${device}-${scheme}-3-sem-internet.png` });
const played = await page.evaluate(async (u) => {
  const whole = await fetch(u);
  const part = await fetch(u, { headers: { Range: 'bytes=0-99' } });
  const a = new Audio(u);
  const canPlay = await new Promise((r) => {
    a.oncanplaythrough = () => r(true);
    a.onerror = () => r(false);
    setTimeout(() => r(false), 8000);
  });
  return { whole: whole.status, part: part.status, bytes: (await part.arrayBuffer()).byteLength, canPlay };
}, audio);
if (played.whole === 200 && played.part === 206 && played.bytes === 100 && played.canPlay) ok(`sem internet: gravação toca (${JSON.stringify(played)})`);
else fail(`sem internet: gravação não toca ${JSON.stringify(played)}`);
await page.getByText('Perfil').last().click().catch(() => {});
await page.waitForTimeout(1000);

const real = errors.filter((e) => !/Failed to load resource|ERR_CONNECTION_REFUSED|ERR_INTERNET_DISCONNECTED/.test(e));
console.log(real.length ? `⚠️  erros:\n   ${[...new Set(real)].join('\n   ')}` : '✅ sem erros no console');
await context.close();
rmSync(profile, { recursive: true, force: true });
