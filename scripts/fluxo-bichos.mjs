// Confere «🐶 Como faz o bicho?» em romeno: o cartão na trilha, a lista com a onomatopeia comparada
// com a do português e o verbo, e uma rodada respondida pelos dados (acerta tudo menos uma, e cai na
// armadilha do português quando aparece).
// Uso: node scripts/fluxo-bichos.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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

// os bichos do romeno e os nomes em português, lidos dos arquivos de dados
const ro = [...readFileSync('src/data/ro/bichos.ts', 'utf8').matchAll(/id: '(\w+)', emoji: '([^']+)', animal: '([^']+)', sound: '([^']+)', verb: '([^']+)'/g)].map((m) => ({ id: m[1], emoji: m[2], animal: m[3], sound: m[4], verb: m[5] }));
const pt = Object.fromEntries([...readFileSync('src/data/bichos-pt.ts', 'utf8').matchAll(/(\w+): \{ art: '(\w)', name: '([^']+)', sound: '([^']+)'/g)].map((m) => [m[1], { name: `${m[2]} ${m[3]}`, sound: m[4] }]));
const verbOf = (s) => /(\S+?)[.!?]*$/.exec(s)[1];

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
const shot = (name) => page.screenshot({ path: `${OUT}/bichos-${device}-${scheme}-${++shots}-${name}.png` });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1000);

// 1. cartão e lista
await page.locator('text=Como faz o bicho? >> visible=true').first().click();
await waitText('o cachorro não faz «au-au»');
const intro = await body();
intro.includes('«ham-ham»') && intro.includes('em português: au-au') && intro.includes('latră') ? ok('lista: «ham-ham» × au-au, e «Câinele latră»') : fail('lista sem a comparação ou o verbo');
await shot('lista');

// 2. rodada
await page.getByRole('button', { name: /Treinar/ }).click();
let trapped = false;
let wrong = 0;
for (let i = 0; i < 10; i++) {
  await page.getByRole('button', { name: /^Opção / }).first().waitFor();
  const text = await body();
  const labels = await page.getByRole('button', { name: /^Opção / }).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label').replace(/^Opção /, '')));
  let right;
  let m;
  if ((m = /Que bicho faz «([^»]+)»/.exec(text))) {
    const a = ro.find((x) => x.sound === m[1]);
    right = `${a.emoji} ${a.animal}`;
  } else if ((m = /Como faz (.+?) em romeno\?/.exec(text))) {
    const id = Object.keys(pt).find((k) => pt[k].name === m[1]);
    right = ro.find((x) => x.id === id).sound;
    if (!trapped && labels.includes(pt[id].sound) && pt[id].sound !== right) {
      trapped = true;
      await page.getByRole('button', { name: `Opção ${pt[id].sound}`, exact: true }).click();
      await waitText('Esse é o som em português!').then(() => ok(`armadilha: «${pt[id].sound}» é o som em português`), () => fail('a armadilha não foi explicada'));
      await shot('armadilha');
      wrong++;
      await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
      continue;
    }
  } else if ((m = /Complete: (.+___\.)/.exec(text))) {
    const a = ro.find((x) => x.verb.replace(verbOf(x.verb), '___') === m[1]);
    right = verbOf(a.verb);
  }
  if (!right || !labels.includes(right)) fail(`pergunta ${i + 1}: resposta «${right}» não está em ${labels.join(' | ')}`);
  await page.getByRole('button', { name: `Opção ${right}`, exact: true }).click();
  await waitText('Isso!');
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('acertos');
(await body()).includes(`${10 - wrong}/10 acertos`) ? ok(`rodada: ${10 - wrong}/10`) : fail('placar errado');
await shot('fim');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
