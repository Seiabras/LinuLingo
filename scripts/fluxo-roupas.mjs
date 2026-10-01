// Confere a «🛍️ Loja do Linu» (com as abas «🎁 Presentes»/«🌍 Loja» e a aba «Presentes de outros
// idiomas» que abre e fecha): sem lições, tudo bloqueado; restaura uma cópia do progresso com 40
// lições de romeno, a căciulă, o clop, a ia e o nai liberam (com «nova!»); veste uma peça de cada
// lugar ao mesmo tempo (căciulă + ia + nai), compra o fez (troca só o chapéu) e a thanaka (rosto),
// tira o nai, filtra por lugar e confere que o Linu usa o visual no Perfil e na trilha.
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
// cores próprias: a ia (branco da blusa), o nai (madeira dos tubos), a thanaka (bochechas)
const hasFill = (sel, fill) => page.evaluate(([s, f]) => [...document.querySelectorAll(s)].some((e) => e.getAttribute('fill') === f), [sel, fill]);

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await waitText('Loja do Linu', 60000);
await page.getByText('🎁 Presentes de outros idiomas', { exact: true }).click();
(await page.getByRole('button', { name: /^Ver bloqueada: / }).count()) >= 30 ? ok('sem lições: todas as roupinhas bloqueadas') : fail('deveria estar tudo bloqueado');
(await page.getByLabel('Você tem 0 krill').count()) ? ok('0 krill sem XP') : fail('saldo de krill errado no começo');

// cópia do progresso com 40 lições de romeno e 1.000 XP (= 100 krill)
const now = new Date().toISOString();
const file = join(OUT, 'roupas-copia.json');
writeFileSync(
  file,
  JSON.stringify({
    app: 'LinuLingo',
    format: 1,
    exported_at: now,
    languages: ['ro'],
    tables: {
      Users: { columns: ['id', 'total_xp'], rows: [['local', 1000]] },
      Lesson_Progress: { columns: ['user_id', 'lesson_id', 'completed_at', 'best_score', 'times_completed'], rows: Array.from({ length: 40 }, (_, i) => ['local', `ro-u${Math.floor(i / 4) + 1}-l${(i % 4) + 1}`, now, 1, 1]) },
    },
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
await waitText('Loja do Linu', 60000);
await page.getByRole('button', { name: 'Ver: Căciulă' }).waitFor({ timeout: 15000 }).then(() => ok('40 lições de romeno: căciulă liberada'), () => fail('căciulă não liberou'));
(await page.getByRole('button', { name: 'Ver: Clop' }).count()) && (await page.getByRole('button', { name: 'Ver: Năframă' }).count()) ? ok('clop (5 lições) e năframă (10) liberados') : fail('clop/năframă não liberaram');
(await page.getByRole('button', { name: 'Ver: Ia' }).count()) && (await page.getByRole('button', { name: 'Ver: Nai' }).count()) ? ok('ia (20) e nai (40) liberados: roupa e objeto da mão') : fail('ia/nai não liberaram');
(await page.getByText('nova!').count()) >= 3 ? ok('«nova!» nas recém-liberadas (presentes do romeno)') : fail('sem o «nova!»');
await page.getByText('🎁 Presentes de outros idiomas', { exact: true }).click();
(await page.getByRole('button', { name: /^Ver bloqueada: Sombrero cordob/ }).count()) ? ok('as de espanhol continuam bloqueadas') : fail('espanhol liberou sem lições');
(await page.getByLabel('Você tem 100 krill').count()) ? ok('1.000 XP = 100 krill') : fail('saldo de krill errado');

// ver e vestir a căciulă: país, região e cultura aparecem
await page.getByRole('button', { name: 'Ver: Căciulă' }).click();
await waitText('Gorro alto de pele de carneiro');
await waitText('Cultura: Camponeses e pastores romenos');
(await page.getByText(/🇷🇴 Romênia/).count()) ? ok('bandeira e país da roupinha') : fail('sem bandeira/país');
await page.getByRole('button', { name: 'Vestir: Căciulă' }).click();
await waitText('✓ Usando');
// uma peça de cada lugar ao mesmo tempo
await page.getByRole('button', { name: 'Ver: Ia' }).click();
await waitText('Lugar: 👕 Corpo');
await page.getByRole('button', { name: /^Vestir: Ia/ }).click();
await page.getByRole('button', { name: 'Ver: Nai' }).click();
await waitText('Lugar: ✋ Na mão');
await page.getByRole('button', { name: 'Vestir: Nai' }).click();
await page.waitForTimeout(400);
(await page.getByRole('button', { name: /^Usando: / }).count()) === 3 ? ok('căciulă + ia + nai ao mesmo tempo') : fail(`deveria usar 3 peças (usa ${await page.getByRole('button', { name: /^Usando: / }).count()})`);
(await wearsCaciula()) && (await hasFill('path', '#FFFDF7')) && (await hasFill('rect', '#D6A15E')) ? ok('o desenho mostra o chapéu, a blusa e o nai') : fail('falta alguma peça no desenho');
await page.getByText('🛍️ Loja do Linu').first().scrollIntoViewIfNeeded();
await page.screenshot({ path: `${OUT}/roupas-${device}-${scheme}-1-perfil.png` });

// a aba «🌍 Loja» tem as roupinhas do mundo (com krill); «🎁 Presentes» tem as dos idiomas
const abaLoja = () => page.getByRole('button', { name: /🌍 Loja/ }).click();
const abaPresentes = () => page.getByRole('button', { name: /🎁 Presentes/ }).click();

// comprar o fez com krill
await abaLoja();
await page.getByRole('button', { name: 'Ver bloqueada: Fez' }).click();
await waitText('o nome vem da cidade de Fez');
await page.getByRole('button', { name: 'Comprar: Fez' }).click();
await page.getByLabel('Você tem 60 krill').waitFor({ timeout: 10000 }).then(() => ok('comprou o fez: 100 − 40 = 60 krill'), () => fail('o saldo não baixou depois da compra'));
(await page.getByRole('button', { name: 'Usando: Fez' }).count()) ? ok('o Linu veste o fez comprado') : fail('o fez comprado não foi vestido');
await abaPresentes();
(await page.getByRole('button', { name: 'Usando: Căciulă' }).count()) === 0 && (await page.getByRole('button', { name: 'Usando: Ia' }).count()) ? ok('o fez trocou só o chapéu (a ia ficou)') : fail('o fez devia trocar só a căciulă');
await abaLoja();
await page.getByRole('button', { name: 'Ver bloqueada: Thanaka' }).click();
await page.getByRole('button', { name: 'Comprar: Thanaka' }).click();
await page.getByLabel('Você tem 20 krill').waitFor({ timeout: 10000 }).then(() => ok('thanaka no rosto: 60 − 40 = 20 krill'), () => fail('a thanaka não foi comprada'));
(await hasFill('circle', '#EAD9A6')) ? ok('a thanaka aparece nas bochechas') : fail('a thanaka não aparece');
// tirar o nai (presente do idioma, na aba «Presentes»; o quadrinho dele diz «Usando»)
await abaPresentes();
await page.getByRole('button', { name: 'Usando: Nai' }).click();
await page.getByRole('button', { name: 'Tirar: Nai' }).click();
await page.waitForTimeout(300);
(await page.getByRole('button', { name: 'Usando: Nai' }).count()) === 0 ? ok('«Tirar» tira só o nai') : fail('o nai não saiu');
await abaLoja();
(await page.getByRole('button', { name: /^Comprar: Bollenhut/ }).count()) === 0 ? ok('sem krill para o Bollenhut (80)') : fail('deixou comprar sem krill');
await page.getByRole('button', { name: 'Ver bloqueada: Bollenhut' }).click();
await waitText('Faltam 🦐 60');
await page.screenshot({ path: `${OUT}/roupas-${device}-${scheme}-2-loja.png` });
// filtro por lugar (na aba «Presentes», onde está o nai)
await abaPresentes();
await page.getByRole('button', { name: '✋ Na mão' }).click();
await page.waitForTimeout(300);
(await page.getByRole('button', { name: 'Ver: Nai' }).count()) && !(await page.getByRole('button', { name: /Căciulă$/ }).count()) ? ok('filtro «Na mão» mostra só objetos') : fail('filtro por lugar não funcionou');
await page.getByRole('button', { name: '✨ Tudo' }).click();

await page.getByRole('button', { name: 'Ver: Căciulă' }).click();
await page.getByRole('button', { name: 'Vestir: Căciulă' }).click();
await page.getByRole('button', { name: 'Ver: Nai' }).click();
await page.getByRole('button', { name: 'Vestir: Nai' }).click();
await page.goto(BASE + '/', { waitUntil: 'load' });
await page.waitForTimeout(3000);
(await wearsCaciula()) && (await hasFill('path', '#FFFDF7')) && (await hasFill('rect', '#D6A15E')) ? ok('o Linu usa o visual inteiro fora do Perfil também') : fail('o visual não aparece na tela inicial');
await page.screenshot({ path: `${OUT}/roupas-${device}-${scheme}-3-inicio.png` });
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
