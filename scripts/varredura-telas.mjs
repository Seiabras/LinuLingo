// Varredura visual: abre cada tela do app, tira uma captura e procura problemas sozinha —
// erros no console, texto cortado (sem reticências), texto saindo da tela, textos sobrepostos e
// texto suspeito (“undefined”, “NaN”, “[object”, “�”, aspas « », espaço duplo, espaço antes de
// pontuação). Salva tudo em OUT/varredura-<aparelho>-<tema>.json e as capturas ao lado.
// Uso: npx tsx scripts/varredura-telas.mjs [filtro]   (BASE_URL, padrão http://localhost:8081;
// DEVICE=iphone|desktop SCHEME=light|dark; o filtro escolhe só as telas cujo nome contém o texto)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fecharTutorial as fechar, medir as medirPagina } from './varredura-comum.mjs';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas/varredura';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const filtro = process.argv[2] ?? '';
mkdirSync(OUT, { recursive: true });

const TELAS = [
  ['home', '/'],
  ['trilha-travessia', '/travessia/ro-u1'],
  ['cofre', '/vocabulario'],
  ['cofre-categorias', '/vocabulario?aba=categorias'],
  ['gramatica', '/gramatica'],
  ['gramatica-topico', '/gramatica/ro-g-pronuncia'],
  ['conversa', '/conversa'],
  ['comunidade', '/comunidade'],
  ['perfil', '/perfil'],
  ['cultura', '/cultura?aba=cultura'],
  ['cultura-proprias', '/cultura?aba=proprias'],
  ['cultura-indigenas', '/cultura?aba=indigenas'],
  ['cultura-sinais', '/cultura?aba=sinais'],
  ['cultura-dialetos', '/cultura?aba=dialetos'],
  ...['artificiais', 'formais', 'contato', 'controladas', 'modalidade', 'estado', 'secretas'].map((p) => [`tipos-${p}`, `/cultura?aba=tipos&parte=${p}`]),
  ['tipos-codigos', '/cultura?aba=tipos&parte=secretas&grupo=codigos'],
  ['mapa', '/mapa'],
  ['mapa-jogo', '/mapa-jogo'],
  ['linha-do-tempo', '/linha-do-tempo'],
  ['licao', '/licao/ro-u1-l1'],
  ['sprint', '/sprint'],
  ['revisao', '/revisao'],
  ['pares', '/pares'],
  ['sons', '/sons'],
  ['qual-sotaque', '/qual-sotaque'],
  ...['es', 'ro', 'ru'].map((l) => [`qual-sotaque-${l}`, `/qual-sotaque-idioma/${l}`]),
  ['sotaque', '/sotaque'],
  ['escuta', '/escuta'],
  ['shadowing', '/shadowing'],
  ['diario', '/diario'],
  ['palacio', '/palacio'],
  ['erros', '/erros'],
  ['confunda', '/confunda'],
  ['falsos-amigos', '/falsos-amigos'],
  ['palavras-irmas', '/palavras-irmas'],
  ['alfabeto', '/alfabeto'],
  ['historias', '/historias'],
  ['historia', '/historia/ro-h1'],
  ['cenario', '/cenario/ro-s-cafe'],
  ['artigo', '/artigo/ro-a-martisor'],
  ['expedicao', '/expedicao'],
  ['ponte', '/ponte/viagens'],
  ['provas', '/provas'],
  ['album', '/album'],
  ['bichos', '/bichos'],
  ['amigos', '/amigos'],
  ['cursos', '/cursos'],
  ['curso-basic-english', '/curso/basic-english'],
  ['curso-lojban', '/curso/lojban'],
  ['tsevhu', '/tsevhu'],
  ['linguistica', '/linguistica/fonetica'],
  ['linguistica-aula', '/linguistica/aula/l-ipa'],
  ['linguistica-ipa', '/linguistica/ipa'],
  ['troca', '/troca'],
  ['voz', '/voz'],
  ['creditos', '/creditos'],
  ['atualizacoes', '/atualizacoes'],
  ['reportar-erro', '/reportar-erro'],
  ['desenvolvedor', '/desenvolvedor'],
].filter(([n]) => n.includes(filtro));

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  // sem animações: a medição não pega cartões no meio da entrada
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme, reducedMotion: 'reduce' })
).newPage();
let erros = [];
page.on('pageerror', (e) => erros.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  const t = m.text();
  if (m.type() !== 'error') return;
  if (t.includes('Unknown event handler property') || t.includes('maskType') || t.includes('404')) return;
  erros.push(t.slice(0, 300));
});

const medir = () => medirPagina(page);
const fecharTutorial = () => fechar(page);

const relatorio = {};
await page.goto(`${BASE}/`, { timeout: 600000 });
await page.waitForTimeout(6000);
await fecharTutorial();
for (const [nome, rota] of TELAS) {
  erros = [];
  try {
    await page.goto(`${BASE}${rota}`, { timeout: 120000 });
    await page.waitForTimeout(3500);
    await fecharTutorial();
    const m = await medir();
    const alt = await page.evaluate(() => {
      // a tela rola por dentro: a captura alta mostra a tela inteira
      const s = [...document.querySelectorAll('*')].filter((e) => {
        const o = getComputedStyle(e).overflowY;
        return (o === 'auto' || o === 'scroll') && e.scrollHeight > e.clientHeight + 10;
      });
      return Math.max(innerHeight, ...s.map((e) => e.scrollHeight + 200));
    });
    await page.setViewportSize({ width: VIEW.width, height: Math.min(alt, 12000) });
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/${device}-${scheme}-${nome}.png` });
    await page.setViewportSize(VIEW);
    relatorio[nome] = { rota, erros: [...new Set(erros)], ...m };
    const n = m.cortados.length + m.fora.length + m.sobre.length + m.suspeitos.length + m.semFonte.length + erros.length + (m.larguraPagina ? 1 : 0);
    console.log(`${n ? '⚠' : '✓'} ${nome}${n ? ` (${n})` : ''}`);
  } catch (e) {
    relatorio[nome] = { rota, falhou: String(e).slice(0, 300), erros: [...new Set(erros)] };
    console.log(`✗ ${nome}: ${String(e).slice(0, 120)}`);
    await page.setViewportSize(VIEW).catch(() => {});
  }
}
writeFileSync(`${OUT}/varredura-${device}-${scheme}.json`, JSON.stringify(relatorio, null, 1));
await browser.close();
