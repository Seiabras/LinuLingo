// Voz neural embutida: num navegador sem voz nenhuma (como o Chrome e o Firefox no Linux), o som
// sai pela voz Piper do idioma. Confere o aviso de download, a voz pronta e que o áudio tocado não é
// silêncio; depois, que a gravação de nativo continua tendo prioridade.
// Uso: node scripts/fluxo-voz-neural.mjs   (servidor em http://localhost:8081; baixa ~63 MB na 1ª vez)
//      DIST=1 node scripts/fluxo-voz-neural.mjs   (o build do GitHub Pages, com service worker e várias threads)
//      BROWSER=firefox …                          (Firefox do Playwright: npx playwright-core install firefox)
import { chromium, firefox } from 'playwright-core';
import { startDistServer } from './servidor-dist.mjs';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';

const dist = process.env.DIST ? await startDistServer(Number(process.env.PORT ?? 8091)) : null;
const BASE = dist ? dist.url.replace(/\/$/, '') : (process.env.BASE_URL ?? 'http://localhost:8081');
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'desktop';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
// perfil guardado entre execuções: o modelo da voz fica no cache e não é baixado toda vez
const profile = process.env.PROFILE_DIR ?? join(tmpdir(), 'linulingo-voz-neural');
const ff = process.env.BROWSER === 'firefox';
const ctx = await (ff ? firefox : chromium).launchPersistentContext(profile + (ff ? '-ff' : ''), {
  executablePath: ff ? undefined : (process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined)),
  viewport: VIEW,
  deviceScaleFactor: 2,
  colorScheme: scheme,
});
const page = ctx.pages()[0] ?? (await ctx.newPage());
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
// o navegador de teste não tem voz nenhuma; registra o que a voz neural toca e o que as gravações tocam
await ctx.addInitScript(() => {
  window.__tocado = [];
  const start = AudioBufferSourceNode.prototype.start;
  AudioBufferSourceNode.prototype.start = function (...a) {
    const d = this.buffer.getChannelData(0);
    let peak = 0;
    for (let i = 0; i < d.length; i += 7) peak = Math.max(peak, Math.abs(d[i]));
    window.__tocado.push({ tipo: 'neural', ms: Math.round(this.buffer.duration * 1000), pico: peak });
    return start.apply(this, a);
  };
  const play = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () {
    window.__tocado.push({ tipo: 'gravacao', src: this.src.split('/').pop() });
    return play.call(this);
  };
});
const played = () => page.evaluate(() => window.__tocado);
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const waitPlayed = async (n, timeout = 240000) => page.waitForFunction((n) => window.__tocado.length >= n, n, { timeout, polling: 250 });

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
// com o perfil reaproveitado, o tutorial já pode ter sido concluído numa execução anterior
await page
  .getByText('Pular', { exact: true })
  .first()
  .click({ timeout: 90000 })
  .catch(() => console.log('   · sem tutorial (perfil já tinha idioma escolhido)'));
await page.waitForTimeout(1500);
if (dist) console.log(`   · página isolada: ${await page.evaluate(() => crossOriginIsolated)}`);
await page.goto(BASE + '/voz', { waitUntil: 'load' });
await page.getByText('Voz neural do LinuLingo').first().waitFor({ timeout: 30000 });
// o Chromium de teste não tem voz nenhuma; o Firefox no Linux pode ter as do eSpeak (robóticas)
const sys = await page.evaluate(() => speechSynthesis.getVoices().map((v) => v.name));
console.log(`   · vozes do sistema: ${sys.length ? sys.filter((n) => /roman/i.test(n)).join(', ') || `${sys.length}, nenhuma em romeno` : 'nenhuma (como no Chrome do Linux)'}`);
await page.screenshot({ path: `${OUT}/voz-neural-${device}-${scheme}-1-tela.png` });
await page.getByText('▶ Ouvir', { exact: true }).first().click();
// na primeira vez aparece o aviso do download (se o modelo já estiver guardado, vai direto)
const toast = await page
  .waitForFunction(() => /Baixando a voz|Voz pronta/.test(document.body.innerText), null, { timeout: 20000 })
  .then(() => true)
  .catch(() => false);
if (toast) {
  await page.screenshot({ path: `${OUT}/voz-neural-${device}-${scheme}-2-baixando.png` });
  console.log('   · aviso de download apareceu');
}
await waitPlayed(1);
let p = await played();
check(p[0].tipo === 'neural' && p[0].ms > 800 && p[0].pico > 0.05, `a frase de exemplo saiu pela voz neural (${p[0].ms} ms, pico ${p[0].pico.toFixed(2)})`);
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/voz-neural-${device}-${scheme}-3-pronta.png` });
check(/guardada/.test(await page.evaluate(() => document.body.innerText)), 'a tela mostra a voz como guardada (funciona sem internet)');

// tocar de novo a mesma frase: sai da memória, na hora
const t0 = Date.now();
await page.getByText('▶ Ouvir esta voz').first().click();
await waitPlayed(2, 30000);
console.log(`   · segunda fala em ${Date.now() - t0} ms`);

// uma palavra com gravação de nativo continua tocando a gravação
await page.goto(BASE + '/vocabulario', { waitUntil: 'load' });
await page.getByLabel(/^Ouvir: /).first().waitFor({ timeout: 30000 });
await page.evaluate(() => (window.__tocado = []));
await page.getByLabel(/^Ouvir: /).first().click();
// aviso de quem gravou e de onde é
const quem = await page.getByLabel(/^Gravação de /).first().waitFor({ timeout: 3000 }).then(() => page.getByLabel(/^Gravação de /).first().getAttribute('aria-label'), () => null);
check(!!quem, `aviso de quem fala: ${quem ?? 'não apareceu'}`);
await page.screenshot({ path: `${OUT}/voz-neural-${device}-${scheme}-4-quem-fala.png` });
await page.waitForTimeout(2000);
p = await played();
check(p[0]?.tipo === 'gravacao', `palavra com gravação de nativo: tocou a gravação (${p[0]?.src ?? 'nada'})`);

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await ctx.close();
await dist?.close();
