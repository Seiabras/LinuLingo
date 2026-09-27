// Confere o «🗺️ Jogo do mapa» (em romeno): abre pelo cartão, joga as 8 perguntas tocando no mapa
// (um país destacado ou uma região do país) ou escolhendo a língua, e confere que cada toque dá uma
// resposta com explicação, que a rodada termina com XP e que um toque certo pinta o país de verde.
// Uso: node scripts/fluxo-mapa-jogo.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme })).newPage();
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
const shot = (name) => page.screenshot({ path: `${OUT}/mapa-jogo-${device}-${scheme}-${++shots}-${name}.png` });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1000);
await page.locator('text=Jogo do mapa >> visible=true').first().click();
await waitText('Vamos rodar o mundo');
await page.getByRole('button', { name: /Jogar/ }).click();

const kinds = { onde: 0, qual: 0, sotaque: 0 };
let greens = 0;
for (let i = 0; i < 8; i++) {
  await page.waitForFunction(() => /Onde o .* é língua oficial\?|Que língua é oficial aqui\?|Onde se fala o /i.test(document.body.innerText), null, { timeout: 15000 });
  const text = await body();
  if (/Onde se fala o /.test(text)) {
    kinds.sotaque++;
    await page.waitForSelector('path[id^="regiao-"]', { timeout: 20000 });
    // toca numa região qualquer (a do meio da lista)
    await page.evaluate(() => {
      const regs = [...document.querySelectorAll('path[id^="regiao-"]')];
      regs[Math.floor(regs.length / 2)].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    if (kinds.sotaque === 1) await page.waitForTimeout(300).then(() => shot('sotaque'));
  } else if (/Onde o .* é língua oficial\?/.test(text)) {
    kinds.onde++;
    await page.waitForSelector('path[id^="pais-"]');
    await page.evaluate(() => {
      const ps = [...document.querySelectorAll('path[id^="pais-"]')];
      ps[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  } else {
    kinds.qual++;
    await page.getByRole('button', { name: /^Opção / }).first().click();
  }
  await page.waitForFunction(() => /Isso!|Não foi dessa vez/.test(document.body.innerText), null, { timeout: 10000 });
  const fb = await body();
  if (!/oficial|é de /.test(fb)) fail(`pergunta ${i + 1} sem explicação`);
  greens += await page.evaluate(() => [...document.querySelectorAll('path')].filter((p) => p.getAttribute('fill') === '#16A34A').length > 0 ? 1 : 0);
  if (i === 0) await shot('resposta');
  await page.getByRole('button', { name: i === 7 ? 'Ver resultado' : 'Continuar' }).click();
}
ok(`tipos de pergunta: ${JSON.stringify(kinds)}`);
kinds.onde && kinds.qual && kinds.sotaque ? ok('os 3 tipos apareceram') : fail('faltou algum tipo de pergunta');
greens >= kinds.onde + kinds.sotaque ? ok('depois de responder, o mapa mostra em verde onde era') : fail(`verde em ${greens} respostas`);
await waitText('acertos');
/\+\d+ XP/.test(await body()) ? ok('rodada terminou com XP') : fail('sem XP no fim');
await shot('fim');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
