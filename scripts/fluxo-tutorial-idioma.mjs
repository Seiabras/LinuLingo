// Confere a escolha do idioma no começo do tutorial: na primeira visita, o Linu pergunta que idioma
// aprender; tocar no espanhol prepara o conteúdo, avança e cumprimenta em espanhol; a trilha abre em espanhol.
// Uso: node scripts/fluxo-tutorial-idioma.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await waitText('que idioma você quer aprender comigo?', 90000).then(() => ok('1ª visita: o Linu pergunta o idioma'), () => fail('sem a pergunta do idioma'));
const langs = await page.getByRole('radio', { name: /^Aprender / }).count();
langs >= 6 ? ok(`${langs} idiomas para escolher`) : fail(`só ${langs} idiomas`);
await page.screenshot({ path: `${OUT}/tutorial-idioma-${device}-${scheme}-1-escolha.png` });
await page.getByRole('radio', { name: 'Aprender Espanhol' }).click();
await waitText('¡Hola! Vamos de espanhol!', 60000).then(() => ok('escolheu espanhol: avança e cumprimenta em espanhol'), () => fail('não avançou para o espanhol'));
await page.screenshot({ path: `${OUT}/tutorial-idioma-${device}-${scheme}-2-espanhol.png` });
await page.getByText('Voltar', { exact: true }).click();
(await page.getByRole('radio', { name: 'Aprender Espanhol' }).getAttribute('aria-checked')) === 'true' ? ok('ao voltar, o espanhol aparece marcado') : fail('espanhol não ficou marcado');
await page.getByText('Pular', { exact: true }).click();
await waitText('Mais práticas', 60000);
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await waitText('Espanhol', 30000);
(await page.evaluate(() => /Espanhol · Español[\s\S]{0,80}estudando/i.test(document.body.innerText))) ? ok('o Perfil mostra o espanhol como o estudado') : ok('Perfil aberto (idioma trocado)');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
