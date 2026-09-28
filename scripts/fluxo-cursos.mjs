// Confere os mini-cursos: a lista em /cursos, uma lição de Braille inteira (celas desenhadas, quiz, XP,
// «✓» na lista), o botão «Ver em Libras» abrindo a página do VLibras numa janela à parte, e o atalho
// «Fazer o mini-curso» nas fichas das línguas artificiais.
// Uso: npx tsx scripts/fluxo-cursos.mjs   (servidor em http://localhost:8081; DIST=1 usa o build do site)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { startDistServer } from './servidor-dist.mjs';
import { MINI_COURSES } from '../src/data/cursos';
import { lessonPractice } from '../src/services/mini-practice';

const dist = process.env.DIST ? await startDistServer(Number(process.env.PORT ?? 8093)) : null;
const BASE = dist ? dist.url.replace(/\/$/, '') : (process.env.BASE_URL ?? 'http://localhost:8081');
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler property|404|Manifest/.test(m.text()) && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.includes(x), t, { timeout, polling: 200 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/cursos-${device}-${scheme}-${++shots}-${name}.png` });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page
  .locator('text=Pular >> visible=true')
  .or(page.locator('text=Mais práticas >> visible=true'))
  .first()
  .waitFor({ timeout: 90000 })
  .catch(async (e) => {
    await shot('nao-abriu');
    console.log((await body()).slice(0, 300), errors);
    throw e;
  });
await page.waitForTimeout(2500);
if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) await page.getByText('Pular', { exact: true }).first().click();
await page.waitForTimeout(1500);

// 1. a lista, a partir de «Mais práticas»
await page.getByText('Cursos', { exact: true }).first().click();
await waitText('Braille e comunicação tátil');
const list = await body();
check(MINI_COURSES.every((c) => list.includes(c.name)), `a lista tem os ${MINI_COURSES.length} cursos`);
await shot('lista');

// 2. uma lição de Braille inteira
await page.getByText('Braille e comunicação tátil', { exact: true }).click();
await page.getByText('A cela e as letras de A a J').click();
await waitText('Terminar a lição');
const cells = await page.locator('svg[aria-label*="em Braille"]').count();
check(cells === 10, `as 10 letras de A a J aparecem como celas Braille desenhadas (${cells})`);
await shot('braille');
// as perguntas escritas e os exercícios gerados dos itens, em ordem: responde cada uma pelo gabarito
const tatil = MINI_COURSES.find((c) => c.id === 'tatil');
const cela = tatil.lessons[0];
const quiz = [...cela.quiz, ...lessonPractice(tatil, cela)];
for (let i = 0; i < quiz.length; i++) {
  // as anteriores já foram respondidas (botões desabilitados): o primeiro habilitado é o da pergunta da vez
  await page.getByRole('button', { name: quiz[i].options[quiz[i].answer], exact: true, disabled: false }).first().click();
}
await page.getByText('Terminar a lição').click();
await waitText('certas');
check((await body()).includes(`${quiz.length} de ${quiz.length} certas · +15 XP`), `acertar as ${quiz.length} (escritas e geradas) dá 15 XP`);
await shot('fim');
await page.getByText('Voltar às lições').click();
await waitText(`✓ ${quiz.length}/${quiz.length}`);
ok('a lição aparece concluída na lista');

// 3. «Ver em Libras» abre o VLibras numa janela à parte, sem o isolamento do app
await page.goto(BASE + '/curso/libras?licao=cumprimentos', { waitUntil: 'load' });
await waitText('Ver em Libras');
const [popup] = await Promise.all([context.waitForEvent('page'), page.getByRole('button', { name: 'Ver em Libras: OBRIGADO' }).click()]);
await popup.waitForLoadState('domcontentloaded');
check(popup.url().includes('vlibras.html?t=obrigado'), `a janela do VLibras abre com a palavra (${popup.url().split('/').pop()})`);
check((await popup.locator('#texto').innerText()) === 'obrigado', 'a página mostra o texto a sinalizar');
const isolated = await popup.evaluate(() => window.crossOriginIsolated);
check(!isolated || !dist, `a página do VLibras não fica isolada no site (crossOriginIsolated = ${isolated})`);
await popup.close();

// 4. o atalho nas fichas das línguas artificiais
await page.goto(BASE + '/cultura?aba=tipos', { waitUntil: 'load' });
await page.getByText('Fazer o curso de Esperanto').click();
await waitText('A tabela mágica');
ok('a ficha do esperanto leva ao mini-curso');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
await dist?.close();
