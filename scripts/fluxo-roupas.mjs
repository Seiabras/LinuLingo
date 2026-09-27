// Confere as «👒 Roupinhas do Linu»: sem lições, todas bloqueadas; restaura uma cópia do progresso com
// 10 lições de romeno concluídas, a căciulă e o clop liberam (com «nova!»), veste a căciulă e confere
// que o Linu a usa no Perfil e na trilha.
// Uso: node scripts/fluxo-roupas.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
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
// a căciulă tem uma cor só dela no desenho
const wearsCaciula = () => page.evaluate(() => [...document.querySelectorAll('path')].some((p) => p.getAttribute('fill') === '#3F3F46' && /Q60 0 34 7/.test(p.getAttribute('d') ?? '')));

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await waitText('Roupinhas do Linu', 60000);
(await page.getByRole('button', { name: /^Bloqueada: / }).count()) >= 11 ? ok('sem lições: todas as roupinhas bloqueadas') : fail('deveria estar tudo bloqueado');

// cópia do progresso com 10 lições de romeno
const now = new Date().toISOString();
const file = join(OUT, 'roupas-copia.json');
writeFileSync(
  file,
  JSON.stringify({
    app: 'LinuLingo',
    format: 1,
    exported_at: now,
    languages: ['ro'],
    tables: { Lesson_Progress: { columns: ['user_id', 'lesson_id', 'completed_at', 'best_score', 'times_completed'], rows: Array.from({ length: 10 }, (_, i) => ['local', `ro-u${Math.floor(i / 4) + 1}-l${(i % 4) + 1}`, now, 1, 1]) } },
  }),
);
const [chooser] = await Promise.all([page.waitForEvent('filechooser'), page.getByRole('button', { name: /Restaurar de uma cópia/ }).click()]);
await chooser.setFiles(file);
await waitText('Restaurar troca o progresso');
await page.getByRole('button', { name: /Restaurar esta cópia/ }).click();
await waitText('Pronto! O progresso da cópia está de volta.', 60000);
// sai e volta ao Perfil para recontar
await page.goto(BASE + '/', { waitUntil: 'load' });
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await waitText('Roupinhas do Linu', 60000);
await page.getByRole('button', { name: 'Vestir: Căciulă' }).waitFor({ timeout: 15000 }).then(() => ok('10 lições de romeno: căciulă liberada'), () => fail('căciulă não liberou'));
(await page.getByRole('button', { name: 'Vestir: Clop' }).count()) ? ok('clop liberado (10 lições)') : fail('clop não liberou');
(await page.getByRole('button', { name: /^Bloqueada: Sombrero cordob/ }).count()) ? ok('as de espanhol continuam bloqueadas') : fail('espanhol liberou sem lições');
(await page.getByText('nova!').count()) >= 2 ? ok('«nova!» nas recém-liberadas') : fail('sem o «nova!»');

await page.getByRole('button', { name: 'Vestir: Căciulă' }).click();
await waitText('Gorro alto de pele de carneiro');
await page.getByText('👒 Roupinhas do Linu').first().scrollIntoViewIfNeeded();
await page.screenshot({ path: `${OUT}/roupas-${device}-${scheme}-1-perfil.png` });
await page.goto(BASE + '/', { waitUntil: 'load' });
await page.waitForTimeout(3000);
(await wearsCaciula()) ? ok('o Linu usa a căciulă fora do Perfil também') : fail('a roupinha não aparece na trilha');
await page.screenshot({ path: `${OUT}/roupas-${device}-${scheme}-2-trilha.png` });
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
