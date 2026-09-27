// Confere «👂 Pares mínimos» em espanhol: na variante latino-americana, casa × caza fica fora (soam
// igual); descobre qual palavra tocou (gravação de nativo ou voz do aparelho, as duas interceptadas),
// responde certo e errado, e na variante da Espanha confere que s × z entra no treino com [θ].
// Uso: node scripts/fluxo-pares.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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

// arquivo da gravação → palavra (src/data/es/audios.ts)
const byFile = new Map([...readFileSync('src/data/es/audios.ts', 'utf8').matchAll(/^\s*"([^"]+)": \{ src: require\('[^']*\/(\d+\.mp3)'\)/gm)].map((m) => [m[2], m[1]]));

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
// anota o que o app toca: gravações (<audio>) e a voz do aparelho (uma voz falsa de espanhol)
await context.addInitScript(() => {
  window.__heard = [];
  const A = window.Audio;
  window.Audio = function (src) {
    window.__heard.push({ src: String(src) });
    return new A(src);
  };
  window.SpeechSynthesisUtterance = class {
    constructor(text) {
      this.text = text ?? '';
    }
  };
  const voice = { voiceURI: 'teste-es-ES', name: 'Voz de teste', lang: 'es-ES', localService: true, default: true };
  window.speechSynthesis.getVoices = () => [voice];
  window.speechSynthesis.cancel = () => {};
  window.speechSynthesis.speak = (u) => {
    window.__heard.push({ text: u.text });
    setTimeout(() => u.onend?.({}), 30);
  };
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.text().includes('Unknown event handler property') && !m.text().includes('404') && errors.push(m.text()));
const fail = (msg) => {
  console.log(`❌ ${msg}`);
  process.exitCode = 1;
};
const ok = (msg) => console.log(`✅ ${msg}`);
const waitText = (t, timeout = 30000) => page.waitForFunction((x) => document.body.innerText.includes(x), t, { timeout, polling: 200 });
const body = () => page.evaluate(() => document.body.innerText);
let shots = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/pares-${device}-${scheme}-${++shots}-${name}.png` });
const skipTutorial = async () => {
  await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
    await page.getByText('Pular', { exact: true }).first().click();
    await page.waitForTimeout(1500);
  }
};

/** A palavra que acabou de tocar, e se foi gravação ou voz do aparelho. */
let seen = 0;
const heard = async () => {
  await page.waitForFunction((n) => window.__heard.length > n, seen, { timeout: 15000 });
  const all = await page.evaluate(() => window.__heard);
  seen = all.length;
  const last = all[all.length - 1];
  if (last.text) return { word: last.text, source: 'aparelho' };
  return { word: byFile.get(/(\d+\.mp3)/.exec(decodeURIComponent(last.src))?.[1]), source: 'nativo' };
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await skipTutorial();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Espanhol · Español/).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });
await page.goto(BASE + '/', { waitUntil: 'load' });
await skipTutorial();

// 1. cartão e tela inicial na variante latino-americana
await page.locator('text=Pares mínimos >> visible=true').first().click();
await waitText('Pares mínimos são palavras');
const intro = await body();
/estes soam igual e ficam fora do treino: casa × caza/.test(intro) ? ok('América Latina: casa × caza fora do treino (seseo)') : fail('casa × caza deveria estar fora na América Latina');
/Soam igual/.test(intro) && intro.includes('tubo') ? ok('armadilha ao contrário: tubo × tuvo') : fail('sem o bloco «Soam igual»');
await shot('inicio');

// 2. rodada: acerta todas menos a 2ª
const sources = new Set();
await page.getByRole('button', { name: /Treinar/ }).click();
for (let i = 0; i < 10; i++) {
  const { word, source } = await heard();
  sources.add(source);
  const options = (await page.getByRole('button', { name: /^Opção / }).allTextContents()).map((t) => t.trim());
  const labels = await page.getByRole('button', { name: /^Opção / }).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label').replace(/^Opção /, '')));
  if (!labels.includes(word)) fail(`tocou «${word}», que não está em ${labels.join(' × ')} (${options.join(' | ')})`);
  if (/^(casa|caza|coser|cocer|masa|maza|sien|cien|siervo|ciervo|abrasar|abrazar)$/.test(word)) fail(`s × z apareceu na América Latina («${word}»)`);
  const pick = i === 1 ? labels.find((l) => l !== word) : word;
  await page.getByRole('button', { name: `Opção ${pick}`, exact: true }).click();
  await waitText(i === 1 ? `Era «${word}».` : 'Isso!');
  if (i === 1) await shot('errou');
  await page.getByRole('button', { name: i === 9 ? 'Ver resultado' : 'Continuar' }).click();
}
await waitText('acertos');
/9\/10 acertos/.test(await body()) ? ok(`rodada: 9/10 (vozes: ${[...sources].join(' e ')})`) : fail('placar da rodada errado');
/% de acerto/.test(await body()) ? ok('resultado mostra o acerto por contraste') : fail('sem o acerto por contraste');
await shot('fim');

// 3. variante da Espanha: s × z entra, com [θ]
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByText('Variantes do espanhol').first().waitFor({ timeout: 60000 });
await page.getByText('Espanhol da Espanha', { exact: true }).first().click();
await page.waitForTimeout(800);
await page.goto(BASE + '/pares', { waitUntil: 'load' });
await waitText('Pares mínimos são palavras', 60000);
// a variante é lida do banco logo depois de abrir: espera a IPA com [θ]
await waitText('ˈkaθa', 15000).catch(() => {});
const es = await body();
!es.includes('ficam fora do treino') && /ˈkaθa/.test(es) ? ok('Espanha: s × z no treino, caza com [θ]') : fail('na Espanha, s × z deveria entrar com [θ]');
await page.getByText('s × z', { exact: true }).first().scrollIntoViewIfNeeded();
await shot('espanha');
await page.goto(BASE + '/cultura', { waitUntil: 'load' });
await page.getByText('Espanhol latino-americano', { exact: true }).first().click();
await page.waitForTimeout(500);
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
