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
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme })
).newPage();
let erros = [];
page.on('pageerror', (e) => erros.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  const t = m.text();
  if (m.type() !== 'error') return;
  if (t.includes('Unknown event handler property') || t.includes('maskType') || t.includes('404')) return;
  erros.push(t.slice(0, 300));
});

// tudo o que roda dentro da página: medições do que está desenhado agora
const medir = () =>
  page.evaluate(() => {
    const W = innerWidth;
    const textos = [...document.querySelectorAll('[dir="auto"]')].filter((el) => {
      const r = el.getBoundingClientRect();
      const st = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && st.visibility !== 'hidden' && st.opacity !== '0' && el.textContent.trim();
    });
    // fica dentro de algo que rola na horizontal (faixas com setas, tabelas largas): sair da tela é de propósito
    const rolaX = (el) => {
      for (let p = el.parentElement; p; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if ((o === 'auto' || o === 'scroll') && p.scrollWidth > p.clientWidth + 1) return true;
      }
      return false;
    };
    const escondido = (el) => {
      for (let p = el; p; p = p.parentElement) if (getComputedStyle(p).opacity === '0') return true;
      return false;
    };
    const folhas = textos.filter((el) => !el.querySelector('[dir="auto"]'));
    const cortados = [];
    const reticencias = [];
    const fora = [];
    for (const el of folhas) {
      const st = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const txt = el.textContent.trim().slice(0, 80);
      const clamp = st.webkitLineClamp && st.webkitLineClamp !== 'none';
      const ell = st.textOverflow === 'ellipsis' || clamp;
      const corta = el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 3;
      if (corta && ell) reticencias.push(txt);
      else if (corta && st.overflow !== 'visible') cortados.push(txt);
      if ((r.right > W + 2 || r.left < -2) && !rolaX(el) && !escondido(el)) fora.push(`${txt} [${Math.round(r.left)}–${Math.round(r.right)}]`);
    }
    // sobreposição: duas folhas de texto que se cruzam bastante (as duas visíveis, nenhuma dentro da outra)
    const sobre = [];
    const rs = folhas.filter((el) => !escondido(el) && !rolaX(el)).map((el) => [el, el.getBoundingClientRect()]);
    for (let i = 0; i < rs.length; i++)
      for (let j = i + 1; j < rs.length; j++) {
        const [a, ra] = rs[i];
        const [b, rb] = rs[j];
        if (a.contains(b) || b.contains(a)) continue;
        const x = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
        const y = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
        if (x > 4 && y > 4 && x * y > 0.3 * Math.min(ra.width * ra.height, rb.width * rb.height))
          sobre.push(`“${a.textContent.trim().slice(0, 40)}” × “${b.textContent.trim().slice(0, 40)}”`);
      }
    const tudo = folhas.map((el) => el.textContent).join('\n');
    const suspeitos = [];
    const padroes = [
      [/\bundefined\b/, 'undefined'],
      [/\bNaN\b/, 'NaN'],
      [/\[object /, '[object'],
      [/\bnull\b/, 'null'],
      [/�/, 'caractere quebrado'],
      [/[«»]/, 'aspas « » (a convenção é “ ”)'],
      [/\S {2,}\S/, 'espaço duplo'],
      [/\s[,.;:!?](\s|$)/, 'espaço antes de pontuação'],
      [/\{\{|\}\}/, 'chaves de modelo'],
    ];
    for (const linha of tudo.split('\n'))
      for (const [re, nome] of padroes) if (re.test(linha)) suspeitos.push(`${nome}: ${linha.trim().slice(0, 120)}`);
    return {
      larguraPagina: document.documentElement.scrollWidth > W + 1 ? document.documentElement.scrollWidth : null,
      cortados: [...new Set(cortados)],
      reticencias: [...new Set(reticencias)],
      fora: [...new Set(fora)],
      sobre: [...new Set(sobre)].slice(0, 15),
      suspeitos: [...new Set(suspeitos)],
      texto: tudo,
    };
  });

const fecharTutorial = async () => {
  const sair = page.getByRole('button', { name: 'Sair do tutorial' });
  if (await sair.isVisible().catch(() => false)) {
    await sair.click();
    await page.waitForTimeout(600);
  }
};

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
    const n = m.cortados.length + m.fora.length + m.sobre.length + m.suspeitos.length + erros.length + (m.larguraPagina ? 1 : 0);
    console.log(`${n ? '⚠' : '✓'} ${nome}${n ? ` (${n})` : ''}`);
  } catch (e) {
    relatorio[nome] = { rota, falhou: String(e).slice(0, 300), erros: [...new Set(erros)] };
    console.log(`✗ ${nome}: ${String(e).slice(0, 120)}`);
    await page.setViewportSize(VIEW).catch(() => {});
  }
}
writeFileSync(`${OUT}/varredura-${device}-${scheme}.json`, JSON.stringify(relatorio, null, 1));
await browser.close();
