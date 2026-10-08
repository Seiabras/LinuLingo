// «Qual é o seu sotaque?»: responde como um carioca típico (pelos dados), o Linu adivinha «carioca» e
// a pessoa confirma; depois responde como um gaúcho, diz que errou e escolhe «manezinho». A pesquisa
// guarda os dois (1 acerto em 2), mostra para onde cada resposta aponta e o «Desafiar alguém» copia o link.
// Uso: npx tsx scripts/fluxo-qual-sotaque.mjs   (servidor em http://localhost:8081; DEVICE, SCHEME)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { GUESS_QUESTIONS, GUESS_REGIONS, guessAccent } from '../src/data/quiz-sotaque.ts';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
mkdirSync(OUT, { recursive: true });
const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const context = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 2, colorScheme: scheme });
await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: BASE });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !/Unknown event handler|404/.test(m.text()) && errors.push(m.text()));
let n = 0;
const shot = (name) => page.screenshot({ path: `${OUT}/qual-sotaque-${device}-${scheme}-${String(++n).padStart(2, '0')}-${name}.png` });
const check = (ok, msg) => {
  if (!ok) throw new Error(msg);
  console.log(`   ✓ ${msg}`);
};
const text = () => page.evaluate(() => document.body.innerText);
const waitText = (re, timeout = 30000) => page.waitForFunction((src) => new RegExp(src, 'i').test(document.body.innerText), re.source, { timeout });

/** Responde as perguntas como alguém típico da região (a opção com o maior peso para ela). */
async function answerAs(region) {
  const answers = {};
  for (const [qi, q] of GUESS_QUESTIONS.entries()) {
    await waitText(new RegExp(`${qi + 1}/${GUESS_QUESTIONS.length}`));
    let best = -1;
    q.options.forEach((o, i) => {
      if ((o.weights[region] ?? 0) > best) {
        best = o.weights[region] ?? 0;
        answers[q.id] = i;
      }
    });
    if (qi === 0) await shot(`${region}-pergunta`);
    await page.getByLabel(`Resposta: ${q.options[answers[q.id]].label}`, { exact: true }).click();
  }
  return guessAccent(answers)[0].region;
}

await page.goto(BASE + '/', { waitUntil: 'load', timeout: 180000 });
await page.getByText('Pular', { exact: true }).first().click({ timeout: 90000 });
await page.waitForTimeout(1500);
await page.getByText('Qual é o seu sotaque em português?', { exact: true }).first().click({ timeout: 30000 });
await waitText(/São 12 perguntas/);
await page.getByText('Começar', { exact: true }).first().click();

// 1. um carioca típico: o Linu acerta
const g1 = await answerAs('carioca');
check(g1.id === 'carioca', 'pelos dados, o palpite esperado é carioca');
await waitText(/Acertei\?/);
check((await text()).includes('carioca'), 'o Linu diz «carioca»');
await shot('palpite');
await page.getByText('🎯 Acertou!', { exact: true }).first().click();
await waitText(/Oba, acertei: sotaque carioca/);
await waitText(/acertei 1 de 1 palpite/);
check((await text()).includes('mais comum em: 🏖️ Rio de Janeiro'), 'as respostas mostram para onde apontam (maneiro → Rio de Janeiro)');
await shot('fim-acerto');
await page.getByText('📤 Desafiar alguém', { exact: true }).first().click();
await waitText(/Link copiado!|Compartilhado!/);
const clip = await page.evaluate(() => navigator.clipboard.readText()).catch(() => '');
check(/acertou!.*\/qual-sotaque/.test(clip), `o link do desafio: «${clip.slice(0, 70)}…»`);

// 2. um gaúcho típico que diz ser manezinho: o Linu erra e aprende
await page.getByText('↺ Responder de novo', { exact: true }).first().click();
const g2 = await answerAs('gaucho');
await waitText(/Acertei\?/);
check(g2.id === 'gaucho' && (await text()).includes('gaúcho'), 'gaúcho típico: o Linu diz «gaúcho»');
await page.getByText('❌ Errou', { exact: true }).first().click();
await waitText(/De onde é o seu sotaque/);
await page.getByLabel('Meu sotaque: manezinho').click();
await waitText(/Valeu por me corrigir: sotaque manezinho/);
await waitText(/acertei 1 de 2 palpites/);
check(true, 'a correção entra na pesquisa: 1 acerto em 2');
await shot('fim-erro');

// 3. voltando depois, a pesquisa continua lá
await page.goto(BASE + '/qual-sotaque', { waitUntil: 'load' });
await waitText(/já tentei 2 vezes e acertei 1/);
check(true, 'reabrindo, a tela lembra das 2 tentativas');
check(GUESS_REGIONS.length === 12, '12 sotaques possíveis');

console.log(errors.length ? `⚠️  erros:\n   ${[...new Set(errors)].join('\n   ')}` : '✅ sem erros no console');
await browser.close();
