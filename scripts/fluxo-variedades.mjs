// Confere o seletor único da aba Cultura em italiano: variantes e sotaques lado a lado; as
// línguas próprias (napolitano, sardo…) não estão entre eles, e o atalho leva à aba delas; escolher um
// sotaque passa a ser o estudado; «Voltar ao padrão» volta ao italiano padrão; a Suíça (variante)
// mostra os helvetismos.
// Uso: node scripts/fluxo-variedades.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Italiano · Italiano/).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await waitText('variantes e sotaques do italiano', 60000).then(() => ok('título: variantes e sotaques do italiano'), () => fail('título do seletor'));
const txt = (await body()).toLowerCase();
for (const t of ['Variantes', 'Sotaques']) txt.includes(t.toLowerCase()) ? ok(`linha «${t}»`) : fail(`falta a linha «${t}»`);
const chips = await page.getByRole('radio').count();
chips >= 10 ? ok(`${chips} opções lado a lado`) : fail(`poucas opções: ${chips}`);
(await page.getByLabel(/^Estudar: .*Napolitano \(língua\)$/).count()) === 0 ? ok('o napolitano (língua própria) não está entre os sotaques') : fail('o napolitano ainda está no seletor');
(await page.getByLabel(/^Estudar: .*Italiano padrão$/).getAttribute('aria-checked')) === 'true' ? ok('começa no italiano padrão') : fail('não começou no padrão');

const sotaque = page.getByLabel(/^Estudar: /).nth(2);
const nome = (await sotaque.getAttribute('aria-label')).replace(/^Estudar: \S+ /, '');
await sotaque.click();
await page.waitForTimeout(500);
(await body()).includes(`✓ estudando: ${nome}`) ? ok(`${nome} passa a ser o estudado`) : fail(`${nome} não virou o estudado`);
await page.screenshot({ path: `${OUT}/variedades-${device}-${scheme}-1-sotaque.png` });
await page.getByRole('button', { name: 'Voltar ao padrão' }).first().click();
await page.waitForTimeout(500);
(await page.getByLabel(/^Estudar: .*Italiano padrão$/).getAttribute('aria-checked')) === 'true' ? ok('«Voltar ao padrão» volta ao italiano padrão') : fail('não voltou ao padrão');
await page.getByText(/Línguas próprias de lá/).first().click();
await waitText('Onde se fala italiano (o que você estuda)').then(() => ok('o atalho leva à aba «Línguas próprias», com o napolitano'), () => fail('atalho das línguas próprias'));
(await body()).includes('Napolitano') ? ok('napolitano na aba das línguas próprias') : fail('napolitano fora da aba');
await page.getByRole('tab', { name: '🏛️ Cultura' }).click();
await waitText('variantes e sotaques do italiano');
await page.getByLabel(/^Estudar: .*Italiano da Suíça$/).click();
await waitText('natel').then(() => ok('Suíça: os helvetismos aparecem'), () => fail('Suíça sem detalhes'));
await page.getByLabel(/^Estudar: .*Italiano padrão$/).click();
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
