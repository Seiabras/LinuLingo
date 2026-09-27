// Linha do tempo das línguas: abre pelo mapa, passa pelas etapas das românicas (os países acesos
// crescem até «hoje», que sai dos dados do mapa), troca para as urálicas e usa o «▶ Ver a expansão».
// O link dos países extintos abre o mapa na aba ISO 3166-3.
// Uso: npx tsx scripts/fluxo-linha-do-tempo.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { erasOf, TIMELINES } from '../src/data/linha-do-tempo.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
let n = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/linha-do-tempo-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });
const lit = () => page.evaluate(() => [...document.querySelectorAll('[id^="aceso-"]')].map((p) => p.id.slice(6)).sort());

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);
await page.goto(BASE + '/mapa', { waitUntil: 'load' });
await page.getByText('⏳ Linha do tempo das línguas ›', { exact: true }).first().click({ timeout: 60000 });
await waitText(/Românicas · c\. 100 d\.C\./);

const rom = erasOf(TIMELINES.find((f) => f.id === 'romanicas'));
{ const got = await lit(); const want = [...rom[0].countries].sort(); if (JSON.stringify(got) !== JSON.stringify(want)) console.log("aceso:", got.join(" "), "\nesperado:", want.join(" ")); check(JSON.stringify(got) === JSON.stringify(want), `românicas c. 100: ${want.length} países acesos`); }
await shot('romanicas-100');
for (let i = 1; i < rom.length; i++) {
  await page.getByLabel(`Etapa ${rom[i].label}`).click();
  await waitText(new RegExp(`Românicas · ${rom[i].label.replace(/\./g, '\\.')}`));
  const now = await lit();
  check(now.length === new Set(rom[i].countries).size, `românicas ${rom[i].label}: ${now.length} países acesos`);
}
check((await lit()).includes('BRA'), '«hoje» inclui o Brasil (dos dados do mapa)');
await shot('romanicas-hoje');

// urálicas, com o «▶ Ver a expansão»
await page.getByLabel('Família Urálicas').click();
await waitText(/Urálicas · c\. 500/);
await page.getByText('▶ Ver a expansão', { exact: true }).first().click();
await waitText(/Urálicas · Hoje/, 15000);
check((await lit()).join(',') === 'EST,FIN,HUN', 'urálicas: a expansão passa sozinha até hoje (Estônia, Finlândia, Hungria)');
await waitText(/↺ Ver de novo/);
await shot('uralicas-hoje');

// os países que deixaram de existir
await page.getByText('Países que deixaram de existir', { exact: false }).first().click();
await waitText(/deixaram de existir, mudaram de nome/);
check(true, 'o link abre o mapa na aba dos países que já existiram (ISO 3166-3)');
await shot('mapa-antigos');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
