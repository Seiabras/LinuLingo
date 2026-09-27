// Sombra sonora: a curva do modelo (voz embutida ou gravação de nativo) aparece antes de gravar e a
// sua se sobrepõe depois, com a nota «Melodia: X% parecida». Microfone falso do Chromium (um tom).
// Confere também a dica do acento tonal no sueco.
// Uso: node scripts/fluxo-sombra.mjs   (servidor em http://localhost:8081; baixa a voz na 1ª vez)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
// perfil guardado: a voz embutida fica no cache entre execuções
const ctx = await chromium.launchPersistentContext(process.env.PROFILE_DIR ?? join(tmpdir(), 'linulingo-sombra'), {
  executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined),
  viewport: VIEW,
  deviceScaleFactor: 2,
  colorScheme: scheme,
  permissions: ['microphone'],
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
const page = ctx.pages()[0] ?? (await ctx.newPage());
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
let n = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/sombra-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png`, fullPage: false });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src).test(document.body.innerText), re.source, { timeout });
/** As curvas desenhadas: a azul tracejada (modelo) e a amarela (você). */
const curves = () =>
  page.evaluate(() => ({
    modelo: [...document.querySelectorAll('path')].filter((p) => p.getAttribute('stroke') === '#3B82F6' && p.getAttribute('stroke-dasharray')).length,
    voce: [...document.querySelectorAll('path')].filter((p) => p.getAttribute('stroke') === '#F59E0B').length,
  }));

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page
  .getByText('Pular', { exact: true })
  .first()
  .click({ timeout: 60000 })
  .catch(() => {});
await page.waitForTimeout(1500);
await page.goto(BASE + '/shadowing', { waitUntil: 'load' });
// na 1ª vez a voz embutida baixa (~63 MB) antes de a curva aparecer
await waitText(/Sombra sonora: a melodia/, 240000);
check((await curves()).modelo === 1, 'a curva do modelo aparece antes de gravar');
check(/voz embutida|gravação de nativo/.test(await page.evaluate(() => document.body.innerText)), 'a legenda diz de onde vem a curva do modelo');
await page.getByText('Sombra sonora: a melodia').first().scrollIntoViewIfNeeded();
await shot('modelo');

await page.getByText('Gravar minha voz', { exact: true }).first().click();
await page.waitForTimeout(3000);
await page.getByText('Parar', { exact: true }).first().click();
await waitText(/Ritmo: \d+%/, 60000);
const txt = await page.evaluate(() => document.body.innerText);
const c = await curves();
if (/Melodia: \d+% parecida/.test(txt)) {
  check(c.voce === 1, `a sua curva aparece por cima da do modelo (${txt.match(/Melodia: \d+% parecida/)[0]})`);
} else console.log('   · o tom do microfone falso não deu voz suficiente para a nota da melodia (ritmo conferido)');
await page.getByText('Sombra sonora: a melodia').first().scrollIntoViewIfNeeded();
await shot('comparacao');

// sueco: a dica fala do acento tonal
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Sueco · Svenska/).first().click({ timeout: 20000 });
await page.waitForTimeout(1500);
await page.goto(BASE + '/shadowing', { waitUntil: 'load' });
await waitText(/acento tonal 1 × 2/, 240000);
check(true, 'no sueco, a dica explica o acento tonal («anden», o pato × «anden», o espírito)');
await page.getByText('Sombra sonora: a melodia').first().scrollIntoViewIfNeeded();
await shot('sueco');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await ctx.close();
