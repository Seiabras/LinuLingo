// Comunidade leve e caderno de erros ligado ao SRS:
//  1. o diário corrigido manda os ajustes para o caderno de erros (fonte «Diário»);
//  2. avaliar um colega com emoji + sugestão;
//  3. pôr as 3 frases do diário e 10 s de áudio (microfone falso do Chromium) nos seus envios;
//  4. mandar o link a um colega (outro navegador, sem nada instalado), ele avalia e devolve outro
//     link; abrindo a resposta, a avaliação aparece no envio.
// Uso: node scripts/fluxo-comunidade.mjs   (servidor em http://localhost:8081; DEVICE=iphone|desktop, SCHEME=light|dark)
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
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined),
  // microfone falso (um tom) e sem pedir permissão
  args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
});
const newCtx = async () => {
  const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme, permissions: ['microphone', 'clipboard-read', 'clipboard-write'] });
  // sem o compartilhar do sistema: o app copia o link (é o que dá para ler no teste)
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
  });
  return ctx;
};
const errors = [];
const watch = (page) => {
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
};
let n = 0;
const shot = async (page, name) => page.screenshot({ path: `${OUT}/comunidade-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const hasText = (page, re) => page.evaluate((src) => new RegExp(src, 'i').test(document.body.innerText), re.source);
const waitText = (page, re, timeout = 20000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });

const ctx = await newCtx();
const page = await ctx.newPage();
watch(page);
await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);

// 1. diário: os ajustes vão para o caderno de erros
await page.goto(BASE + '/diario', { waitUntil: 'load' });
await page.getByLabel('Seu texto do diário').fill('Buna dimineata! Eu este Lucas si am foame. Locuiesc la Cluj si vreau un cafea.');
await page.getByText('Corrigir', { exact: true }).first().click();
await waitText(page, /Como um nativo diria/);
await page.getByText('Salvar no diário (+10 XP)', { exact: true }).first().click();
await waitText(page, /Salvo! \+10 XP/);
await page.goto(BASE + '/erros', { waitUntil: 'load' });
await waitText(page, /Como se escreve certo\? «Buna»/);
check(await hasText(page, /✓ Bună\n/), 'o diário mandou «Buna» → «Bună» para o caderno de erros');
check(await hasText(page, /volta(m)? no sprint de amanhã/), 'o caderno explica que a palavra volta no sprint de amanhã');
await shot(page, 'caderno-diario');

// 2. avaliar um colega
await page.goto(BASE + '/comunidade', { waitUntil: 'load' });
await waitText(page, /Avalie colegas/);
await shot(page, 'tela');
const send = page.getByText('Enviar avaliação', { exact: true }).first();
check((await send.getAttribute('aria-disabled')) === 'true' || (await send.evaluate((el) => el.closest('[aria-disabled]')?.getAttribute('aria-disabled'))) === 'true', 'sem emoji, não dá para enviar a avaliação');
await page.getByLabel('Entendi quase tudo', { exact: true }).first().click();
await send.click();
await waitText(page, /🤔 avaliado/);
check(true, 'avaliação com 🤔 guardada no texto do colega');

// 3. as 3 frases do diário e 10 s de áudio nos seus envios
await page.getByText('Pôr nos meus envios', { exact: true }).first().click();
await waitText(page, /Já está nos seus envios/);
await page.getByText('⏺ Gravar (até 10 s)', { exact: true }).first().click();
await waitText(page, /⏹ Parar/);
await page.waitForTimeout(2500);
await shot(page, 'gravando');
await page.getByText(/^⏹ Parar/).first().click();
await waitText(page, /▶ Ouvir/);
await page.getByText('Pôr nos meus envios', { exact: true }).last().click();
await waitText(page, /▶ Ouvir meu áudio/);
check(true, 'áudio gravado e guardado nos envios');
await shot(page, 'envios');

// 4. o link vai para um colega (outro navegador) e a resposta volta
await page.getByText('📤 Mandar para um colega avaliar', { exact: true }).first().click();
await waitText(page, /Link copiado/);
const pedido = (await page.evaluate(() => navigator.clipboard.readText())).match(/https?:\/\/\S+/)?.[0];
check(!!pedido && pedido.includes('/troca#'), 'o link do pedido foi copiado');
console.log(`   · link do pedido: ${pedido.length} caracteres`);

const friendCtx = await newCtx();
const friend = await friendCtx.newPage();
watch(friend);
await friend.goto(pedido, { waitUntil: 'load', timeout: 120000 });
await waitText(friend, /pediu a sua avaliação/, 60000);
check(await hasText(friend, /▶ Ouvir o áudio/), 'o colega recebe o áudio dentro do link');
await shot(friend, 'colega-pedido');
await friend.getByLabel('Entendi tudo', { exact: true }).first().click();
await friend.getByLabel('Sugestão gentil').fill('Perfeito! Só capriche no «ă».');
await friend.getByLabel('Seu nome').fill('Bia');
await friend.getByText('Mandar a avaliação', { exact: true }).first().click();
await waitText(friend, /Avaliação pronta/);
const resposta = (await friend.evaluate(() => navigator.clipboard.readText())).match(/https?:\/\/\S+/)?.[0];
check(!!resposta && resposta.includes('/troca#'), 'o link da resposta foi copiado');
await shot(friend, 'colega-resposta');

await page.goto(resposta, { waitUntil: 'load' });
await waitText(page, /Bia avaliou o seu envio/, 60000);
await shot(page, 'resposta-chegou');
await page.getByText('Ver meus envios', { exact: true }).first().click();
await waitText(page, /Bia: entendi tudo/);
check(await hasText(page, /Sugestão: Perfeito! Só capriche no «ă»\./), 'a avaliação da Bia aparece no envio, com a sugestão');
await shot(page, 'envio-avaliado');

// um link cortado não quebra nada
await friend.goto(pedido.slice(0, pedido.indexOf('#') + 30), { waitUntil: 'load' });
await waitText(friend, /Este link não abriu/, 60000);
check(true, 'link cortado mostra o aviso');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
