// Confere o «📒 Álbum de figurinhas»: termina uma rodada de treino, vê o aviso de figurinha nova por
// cima da tela, toca nele, e o álbum abre com 1 figurinha, a curiosidade dela e as que faltam.
// Uso: node scripts/fluxo-album.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const shot = (name) => page.screenshot({ path: `${OUT}/album-${device}-${scheme}-${++shots}-${name}.png` });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1000);
(await body()).includes('0 de ') ? ok('cartão do álbum na trilha: 0 figurinhas') : fail('cartão do álbum sem a contagem');

// 1. uma rodada qualquer (a primeira opção em tudo): no fim, figurinha
await page.goto(BASE + '/bichos', { waitUntil: 'load' });
await page.getByRole('button', { name: /Treinar/ }).click();
for (let i = 0; i < 10; i++) {
  await page.getByRole('button', { name: /^Opção / }).first().click();
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('Figurinha nova!', 15000).then(() => ok('aviso de figurinha nova apareceu'), () => fail('sem aviso de figurinha'));
await shot('aviso');
const name = await page.getByRole('button', { name: /^Figurinha nova: / }).getAttribute('aria-label');
const sticker = /^Figurinha nova: (.+)\. Abrir o álbum$/.exec(name ?? '')?.[1];

// 2. toque no aviso: o álbum abre com ela
await page.getByRole('button', { name: /^Figurinha nova: / }).click();
await waitText('Álbum de figurinhas');
(await body()).includes('1 de ') ? ok(`álbum com 1 figurinha (${sticker})`) : fail('álbum não mostra 1 figurinha');
await page.getByRole('button', { name: `Figurinha ${sticker}`, exact: true }).click();
await page.waitForTimeout(500);
const fact = await body();
/\n(bicho|instrumento)/.test(fact) ? ok('a figurinha abre com a curiosidade') : fail('a figurinha não abriu');
const missing = await page.getByRole('button', { name: /que falta$/ }).count();
missing > 50 ? ok(`${missing} figurinhas faltando, com número`) : fail(`faltando: ${missing}`);
(await body()).includes('Trocar 3 repetidas') ? fail('botão de troca sem repetidas') : ok('sem repetidas, sem botão de troca');
await shot('album');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
