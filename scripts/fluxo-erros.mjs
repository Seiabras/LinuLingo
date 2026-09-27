// Confere o «📕 Caderno de erros» em espanhol: erra de propósito nos falsos amigos e nos pares mínimos,
// vê os erros no caderno (com a resposta dada e a certa) e o número no cartão da trilha, revisa duas
// vezes acertando tudo e confere que os itens saem do caderno.
// Uso: node scripts/fluxo-erros.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const byFile = new Map([...readFileSync('src/data/es/audios.ts', 'utf8').matchAll(/^\s*"([^"]+)": \{ src: require\('[^']*\/(\d+\.mp3)'\)/gm)].map((m) => [m[2], m[1]]));

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, hasTouch: device !== 'desktop', colorScheme: scheme });
// anota o que o app toca (gravações e voz do aparelho), como nos outros fluxos de ouvido
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
const shot = (name) => page.screenshot({ path: `${OUT}/erros-${device}-${scheme}-${++shots}-${name}.png` });
const skipTutorial = async () => {
  await page.locator('text=Pular >> visible=true').or(page.locator('text=Mais práticas >> visible=true')).first().waitFor({ timeout: 90000 });
  await page.waitForTimeout(2500);
  if (await page.getByText('Pular', { exact: true }).isVisible().catch(() => false)) {
    await page.getByText('Pular', { exact: true }).first().click();
    await page.waitForTimeout(1500);
  }
};
const labels = () => page.getByRole('button', { name: /^Opção / }).evaluateAll((els) => els.map((e) => e.getAttribute('aria-label').replace(/^Opção /, '')));
let seen = 0;
const heard = async () => {
  await page.waitForFunction((n) => window.__heard.length > n, seen, { timeout: 15000 });
  const all = await page.evaluate(() => window.__heard);
  seen = all.length;
  const last = all[all.length - 1];
  return last.text ?? byFile.get(/(\d+\.mp3)/.exec(decodeURIComponent(last.src))?.[1]);
};

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await skipTutorial();
await page.goto(BASE + '/perfil', { waitUntil: 'load' });
await page.getByText(/^Espanhol · Español/).first().click();
await page.waitForTimeout(300);
await page.waitForFunction(() => !document.body.innerText.includes('preparando…'), null, { timeout: 60000 });

// 1. falsos amigos: a primeira opção até errar 3 vezes (as certas por acaso não contam)
await page.goto(BASE + '/falsos-amigos', { waitUntil: 'load' });
await page.getByRole('button', { name: /Treinar/ }).first().click();
let wrong = 0;
for (let i = 0; i < 10 && wrong < 3; i++) {
  const opts = await labels();
  await page.getByRole('button', { name: `Opção ${opts[0]}`, exact: true }).click();
  await page.waitForFunction(() => /Isso!|Era «|Caiu na armadilha/.test(document.body.innerText), null, { timeout: 10000 });
  if (!(await body()).includes('Isso!')) wrong++;
  await page.getByRole('button', { name: 'Continuar' }).click();
}
ok(`falsos amigos: ${wrong} erros de propósito`);

// 2. pares mínimos: erra 1
await page.goto(BASE + '/pares', { waitUntil: 'load' });
await waitText('Pares mínimos são palavras', 60000);
await page.getByRole('button', { name: /Treinar/ }).click();
const word = await heard();
const other = (await labels()).find((l) => l !== word);
await page.getByRole('button', { name: `Opção ${other}`, exact: true }).click();
await waitText(`Era «${word}».`);
ok(`pares: errou «${other}» no lugar de «${word}»`);
// o registro no caderno é gravado em segundo plano: dá um instante antes de recarregar a página
await page.waitForTimeout(1000);

// 3. o número no cartão e o caderno
await page.goto(BASE + '/', { waitUntil: 'load' });
await skipTutorial();
const card = page.locator('text=Caderno de erros >> visible=true').first();
await card.waitFor({ timeout: 30000 });
const badge = await page.evaluate(() => /Caderno de erros[\s\S]{0,5}/.exec(document.body.innerText)?.[0]);
await card.click();
await waitText('Errar faz parte!');
const total = wrong + 1;
(await body()).includes(`Tem ${total} itens`) ? ok(`caderno com ${total} itens`) : fail(`caderno deveria ter ${total} itens: ${(await body()).slice(0, 300)}`);
const listed = await page.evaluate(() => [...document.querySelectorAll('[aria-label^="Você respondeu"]')].length);
listed === total ? ok('cada item mostra a resposta dada (riscada) e a certa') : fail(`respostas dadas na lista: ${listed}`);
await shot('caderno');
void badge;

// 4. duas revisões acertando tudo: os itens saem
const expectedOf = async () => {
  // a certa de cada pergunta, lida da lista antes de começar
  return page.evaluate(() => {
    const out = {};
    for (const el of document.querySelectorAll('[aria-label^="Certo: "]')) {
      const cardEl = el.parentElement;
      const prompt = cardEl?.children[1]?.textContent ?? '';
      out[prompt.replace(/^🔊 /, '')] = el.getAttribute('aria-label').replace(/^Certo: /, '');
    }
    return out;
  });
};
for (let round = 1; round <= 2; round++) {
  const expected = await expectedOf();
  seen = (await page.evaluate(() => window.__heard.length));
  await page.getByRole('button', { name: /Revisar os erros/ }).click();
  for (let i = 0; i < total; i++) {
    await page.getByRole('button', { name: /^Opção / }).first().waitFor({ timeout: 15000 });
    const text = await body();
    let answer = Object.entries(expected).find(([p]) => p && text.includes(p) && !p.startsWith('Qual você ouviu'))?.[1];
    if (!answer) answer = await heard();
    await page.getByRole('button', { name: `Opção ${answer}`, exact: true }).click();
    await page.waitForTimeout(400);
    const t = await body();
    if (!/Isso!|Aprendido!/.test(t)) fail(`revisão ${round}, pergunta ${i + 1}: resposta «${answer}» não foi aceita`);
    if (round === 2 && i === 0) await shot('aprendido');
    await page.getByRole('button', { name: i === total - 1 ? 'Ver resultado' : 'Continuar' }).click();
  }
  await waitText('acertos');
  if (round === 2) (await body()).includes(`${total} itens saíram do caderno`) ? ok(`2ª revisão: ${total} itens saíram do caderno`) : fail('os itens deveriam sair do caderno');
  await page.getByRole('button', { name: 'Voltar ao caderno' }).click();
  await page.waitForTimeout(600);
}
(await body()).includes('Seu caderno está vazio') && (await body()).includes(`Aprendidos (${total})`) ? ok('caderno vazio e itens em «Aprendidos»') : fail('o caderno deveria estar vazio');
await shot('vazio');
console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
