// Confere a cópia do progresso no Perfil: guarda o arquivo, muda nome, tema e idioma, restaura e
// confere que tudo voltou; um arquivo que não é cópia é recusado com explicação.
// Uso: node scripts/fluxo-backup.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
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
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme, acceptDownloads: true })
).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.includes(x), t, { timeout, polling: 250 });
const nameInput = () => page.getByLabel('Seu nome');
const setName = async (v) => {
  await nameInput().fill(v);
  await nameInput().blur();
  await page.waitForTimeout(500);
};
const button = (name) => page.getByRole('button', { name }).first();
const card = () => page.getByText('💾 Cópia do progresso').first();

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 120000 });
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1000);

// 1. estado A: nome, tema escuro, romeno
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await waitText('Cópia do progresso', 60000);
await setName('Ana Backup');
await page.getByText('🌙 Escuro').first().click();
await card().scrollIntoViewIfNeeded();
const [download] = await Promise.all([page.waitForEvent('download'), button(/Guardar uma cópia/).click()]);
const file = join(OUT, download.suggestedFilename());
await download.saveAs(file);
const saved = JSON.parse(readFileSync(file, 'utf8'));
if (saved.app === 'LinuLingo' && /^linulingo-progresso-\d{4}-\d\d-\d\d\.json$/.test(download.suggestedFilename())) ok(`cópia baixada: ${download.suggestedFilename()} (${readFileSync(file).length} bytes)`);
else fail('arquivo da cópia estranho');
await waitText('Última cópia:');
await page.screenshot({ path: `${OUT}/backup-${device}-${scheme}-1-guardada.png` });

// 2. estado B: outro nome, tema claro, espanhol
await setName('Outra Pessoa');
await page.getByText('☀️ Claro').first().click();
await page.getByText(/^Espanhol · Español/).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });

// 3. arquivo errado: recusado
const bogus = join(OUT, 'nao-e-copia.json');
writeFileSync(bogus, JSON.stringify({ oi: 1 }));
await card().scrollIntoViewIfNeeded();
let [chooser] = await Promise.all([page.waitForEvent('filechooser'), button(/Restaurar de uma cópia/).click()]);
await chooser.setFiles(bogus);
await waitText('não é uma cópia do progresso').then(() => ok('arquivo errado recusado com explicação'), () => fail('arquivo errado não foi recusado'));

// 4. restaura a cópia: confere o resumo e volta ao estado A
[chooser] = await Promise.all([page.waitForEvent('filechooser'), button(/Restaurar de uma cópia/).click()]);
await chooser.setFiles(file);
await waitText('Restaurar troca o progresso');
const summary = await page.evaluate(() => /Ana Backup ·[^\n]*/.exec(document.body.innerText)?.[0]);
if (summary) ok(`resumo antes de restaurar: ${summary}`);
else fail('o resumo não mostra o nome da cópia');
await page.screenshot({ path: `${OUT}/backup-${device}-${scheme}-2-resumo.png` });
await button(/Restaurar esta cópia/).click();
await waitText('Pronto! O progresso da cópia está de volta.', 60000);
await page.waitForTimeout(800);
const name = await nameInput().inputValue();
const dark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
name === 'Ana Backup' ? ok('nome voltou') : fail(`nome não voltou: ${name}`);
dark ? ok('tema escuro voltou') : fail('tema não voltou');
await page.screenshot({ path: `${OUT}/backup-${device}-${scheme}-3-restaurada.png` });
// o que ficou no banco: outra cópia, agora do estado restaurado
await page.waitForTimeout(1200);
const [again] = await Promise.all([page.waitForEvent('download'), button(/Guardar uma cópia/).click()]);
const after = JSON.parse(readFileSync(await again.path(), 'utf8'));
const users = after.tables.Users;
const lang = users.rows[0][users.columns.indexOf('current_language')];
const theme = after.tables.Meta.rows.find((r) => r[0] === 'theme')?.[1];
lang === 'ro' ? ok('idioma voltou para o romeno') : fail(`idioma não voltou: ${lang}`);
theme === 'dark' ? ok('tema gravado: escuro') : fail(`tema gravado: ${theme}`);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
