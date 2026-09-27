// Línguas próprias e indígenas (aba Cultura): em sueco, o sámi e o meänkieli saem do seletor de
// sotaques e vão para a aba «Línguas próprias» (família, reconhecimento, grau de risco, treino); uma
// língua de outro idioma do app (o feroês, do dinamarquês) também abre o treino. Na aba «Indígenas»,
// o Brasil com as contas por grau (conferidas contra os dados), o filtro por grau, a Suécia e a busca.
// Uso: npx tsx scripts/fluxo-linguas.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { GLOTTOLOG_ROWS } from '../src/data/linguas-glottolog.ts';
import { languagesOfCountry, riskCounts, RISK_LEVELS } from '../src/data/linguas-indigenas.ts';

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
const shot = (name) => page.screenshot({ path: `${OUT}/linguas-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const text = () => page.evaluate(() => document.body.innerText);
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Sueco · Svenska/).first().click({ timeout: 20000 });
await page.waitForTimeout(800);

// 1. a aba Cultura: o sámi não está mais entre os sotaques
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await waitText(/Línguas próprias de lá:/);
check((await page.getByLabel(/^Estudar: .*Meänkieli/).count()) === 0, 'o meänkieli saiu do seletor de sotaques do sueco');
check((await page.getByLabel(/^Estudar: .*Sámi/).count()) === 0, 'o sámi também');
await page.getByText('Línguas próprias de lá:', { exact: false }).first().click();
await waitText(/Onde se fala sueco \(o que você estuda\)/);
check(page.url().includes('aba=proprias'), 'o atalho abre a aba «Línguas próprias» (/cultura?aba=proprias)');
await shot('proprias');

// 2. o sámi: outra família, reconhecimento e grau de risco de cada língua sámi
await page.getByLabel('Língua própria: Sámi (samiska)').click();
await waitText(/Urálico › Sámi/);
const sami = await text();
check(/outra família que o sueco/i.test(sami), 'o sámi aparece como de outra família que o sueco');
check(sami.includes('reconhecidos como povo indígena'), 'e com o reconhecimento oficial');
await waitText(/em declínio → quase extinta/);
check(/Sami de Pite: quase extinta/.test(await text()), 'o grau de risco de cada língua sámi (Glottolog)');
await shot('sami');
await page.getByText('🎯 Treinar esta língua', { exact: true }).first().click();
await waitText(/língua própria · Sápmi/);
check(true, 'o treino do sámi abre');
await page.goBack();

// 3. uma língua de outro idioma do app: o feroês (dinamarquês), estudando sueco
await page.goto(BASE + '/cultura?aba=proprias', { waitUntil: 'load' });
await page.getByLabel('Língua própria: Feroês (føroyskt)').click();
await waitText(/parente do dinamarquês, mas outra língua/);
check(true, 'o feroês aparece como parente do dinamarquês, mas outra língua');
await page.getByText('🎯 Treinar esta língua', { exact: true }).first().click();
await waitText(/Vamos treinar esta língua: Feroês/);
check((await page.getByText('Estudar esta língua', { exact: true }).count()) === 0, 'o treino abre mesmo estudando sueco (sem o botão de trocar a voz do sueco)');

// 4. indígenas: o Brasil, com as contas por grau
const bra = languagesOfCountry(GLOTTOLOG_ROWS, 'BRA');
const c = riskCounts(bra);
await page.goto(BASE + '/cultura?aba=indigenas', { waitUntil: 'load' });
await waitText(new RegExp(`O Glottolog registra ${bra.length} línguas indígenas faladas aqui`));
const t = await text();
for (const r of RISK_LEVELS) check(t.includes(`${r.label} · ${c.byLevel[r.level]}`), `Brasil: ${r.label} · ${c.byLevel[r.level]}`);
await shot('brasil');
await page.getByLabel('Grau: quase extinta').click();
await page.waitForTimeout(400);
const shownRows = await page.getByLabel(/^[^:]+: (não ameaçada|ameaçada|em declínio|moribunda|quase extinta|extinta|sem avaliação)$/).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label')).filter((l) => !l.startsWith('Grau: ')));
check(shownRows.length === Math.min(30, c.byLevel[4]) && shownRows.every((l) => l.endsWith(': quase extinta')), `filtro «quase extinta»: ${shownRows.length} línguas, todas nesse grau`);
await shot('brasil-quase-extintas');

// 5. a Suécia (país do idioma estudado): as línguas em risco
await page.getByLabel('País: Suécia').click();
await waitText(/línguas em risco aqui/);
check((await text()).includes('Sami de Pite'), 'Suécia: as línguas em risco, com as sámi');

// 6. outro país pela busca
await page.getByLabel('Outro país').click();
await page.getByLabel('Buscar país').fill('Colômb');
await page.getByText(/Colômbia$/).first().click();
const col = languagesOfCountry(GLOTTOLOG_ROWS, 'COL');
await waitText(new RegExp(`registra ${col.length} línguas indígenas`));
check(true, `Colômbia pela busca: ${col.length} línguas indígenas`);
await shot('colombia');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
