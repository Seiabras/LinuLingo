// Varredura de contraste (WCAG 2.x): abre cada tela da varredura visual e mede, para cada texto
// visível, o contraste entre a cor da letra e o fundo de verdade, medido nos pixels da tela com as
// letras escondidas (pega textura, imagem e camada por cima). Texto grande (≥ 24px, ou ≥ 18,7px em
// negrito) precisa de 3:1; o resto, de 4,5:1. “esmaecido” marca texto com opacidade (botão
// desativado, que a WCAG não cobra). Mede até 6000px de altura.
// Uso: npx tsx scripts/varredura-contraste.mjs [filtro]   (BASE_URL, padrão http://localhost:8081;
// DEVICE=iphone|desktop SCHEME=light|dark; salva OUT_DIR/contraste-<aparelho>-<tema>.json)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fecharTutorial } from './varredura-comum.mjs';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas/varredura';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'dark';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const filtro = process.argv[2] ?? '';
mkdirSync(OUT, { recursive: true });

// as mesmas telas da varredura visual
const fonte = readFileSync(new URL('./varredura-telas.mjs', import.meta.url), 'utf8');
const TELAS = [...fonte.matchAll(/\['([a-z-]+)', '(\/[^']*)'\]/g)].map((m) => [m[1], m[2]]);
for (const p of ['artificiais', 'formais', 'contato', 'controladas', 'modalidade', 'estado', 'secretas']) TELAS.push([`tipos-${p}`, `/cultura?aba=tipos&parte=${p}`]);
for (const l of ['es', 'ro', 'ru']) TELAS.push([`qual-sotaque-${l}`, `/qual-sotaque-idioma/${l}`]);
const telas = TELAS.filter(([n]) => n.includes(filtro));

// 1) coleta cada texto visível: retângulo, cor da letra (com a opacidade do caminho) e tamanho
const coletar = (page) =>
  page.evaluate(() => {
    const rgba = (s) => {
      const m = s.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      return [r, g, b, a];
    };
    const out = [];
    for (const el of document.querySelectorAll('[dir="auto"]')) {
      if (el.querySelector('[dir="auto"]')) continue;
      const st = getComputedStyle(el);
      const txt = el.textContent.trim().replace(/\s+/g, ' ').slice(0, 60);
      // emojis e símbolos sozinhos não são texto para ler
      if (st.visibility === 'hidden' || !/\p{L}|\p{N}/u.test(txt)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2 || r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) continue;
      let opac = 1;
      for (let p = el; p; p = p.parentElement) opac *= Number(getComputedStyle(p).opacity);
      if (opac === 0) continue;
      const c = rgba(st.color);
      if (!c) continue;
      const px = parseFloat(st.fontSize);
      out.push({
        txt,
        cor: c,
        opac,
        px,
        negrito: Number(st.fontWeight) >= 700,
        caixa: [Math.max(0, r.left), Math.max(0, r.top), Math.min(innerWidth, r.right), Math.min(innerHeight, r.bottom)],
        classe: (el.className || '').toString().replace(/\b(css|r)-[\w-]+/g, '').trim().slice(0, 140),
      });
    }
    return out;
  });

// 2) com as letras transparentes, a captura mostra só o fundo de verdade (texturas, imagens,
// camadas por cima); mede-se o fundo pixel a pixel sob cada texto, pelo pior caso (o 10% de
// pixels mais parecidos com a letra), já que fundo com textura muda de um ponto pra outro
const medirFundos = (page, textos, png) =>
  page.evaluate(
    async ({ textos, png }) => {
      const img = new Image();
      img.src = `data:image/png;base64,${png}`;
      await img.decode();
      const cv = document.createElement('canvas');
      cv.width = img.width;
      cv.height = img.height;
      const ctx = cv.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const k = img.width / innerWidth;
      const lin = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
      const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
      const razao = (x, y) => (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
      const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
      const vistos = new Set();
      const falhas = [];
      for (const t of textos) {
        const [x0, y0, x1, y1] = t.caixa.map((v) => Math.round(v * k));
        if (x1 - x0 < 1 || y1 - y0 < 1) continue;
        const d = ctx.getImageData(x0, y0, x1 - x0, y1 - y0).data;
        const px = [];
        const passo = Math.max(1, Math.floor(d.length / 4 / 4000));
        for (let i = 0; i < d.length; i += 4 * passo) px.push([d[i], d[i + 1], d[i + 2]]);
        // fundo médio para compor a letra semitransparente
        const med = [0, 1, 2].map((j) => px.reduce((s, p) => s + p[j], 0) / px.length);
        const a = t.cor[3] * t.opac;
        const letra = [0, 1, 2].map((j) => t.cor[j] * a + med[j] * (1 - a));
        const L = lum(letra);
        const ls = px.map(lum).sort((p, q) => Math.abs(p - L) - Math.abs(q - L));
        const pior = ls[Math.floor(ls.length * 0.1)];
        const r = razao(L, pior);
        const grande = t.px >= 24 || (t.negrito && t.px >= 18.66);
        const min = grande ? 3 : 4.5;
        if (r >= min) continue;
        const chave = `${hex(letra)}/${t.txt}`;
        if (vistos.has(chave)) continue;
        vistos.add(chave);
        falhas.push({ txt: t.txt, razao: Math.round(r * 100) / 100, min, letra: hex(letra), fundo: hex(med), px: t.px, esmaecido: t.opac < 1, classe: t.classe });
      }
      return falhas;
    },
    { textos, png },
  );

const medir = async (page) => {
  const textos = await coletar(page);
  const css = await page.addStyleTag({ content: '*{color:transparent!important;text-shadow:none!important;caret-color:transparent!important}' });
  await page.waitForTimeout(150);
  const png = (await page.screenshot()).toString('base64');
  await css.evaluate((n) => n.remove());
  const falhas = await medirFundos(page, textos, png);
  return { textos: textos.length, falhas };
};

const root = join(homedir(), '.cache/ms-playwright');
const dir = existsSync(root) && readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? (dir ? join(root, dir, 'chrome-linux64/chrome') : undefined) });
const page = await (
  await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1, isMobile: device !== 'desktop', hasTouch: device !== 'desktop', colorScheme: scheme, reducedMotion: 'reduce' })
).newPage();

const relatorio = {};
await page.goto(`${BASE}/`, { timeout: 600000 });
await page.waitForTimeout(6000);
await fecharTutorial(page);
for (const [nome, rota] of telas) {
  try {
    await page.goto(`${BASE}${rota}`, { timeout: 120000 });
    await page.waitForTimeout(3500);
    await fecharTutorial(page);
    // a tela rola por dentro: com a janela alta, a captura pega a tela inteira
    const alt = await page.evaluate(() => {
      const s = [...document.querySelectorAll('*')].filter((e) => {
        const o = getComputedStyle(e).overflowY;
        return (o === 'auto' || o === 'scroll') && e.scrollHeight > e.clientHeight + 10;
      });
      return Math.max(innerHeight, ...s.map((e) => e.scrollHeight + 200));
    });
    await page.setViewportSize({ width: VIEW.width, height: Math.min(alt, 6000) });
    await page.waitForTimeout(900);
    const m = await medir(page);
    await page.setViewportSize(VIEW);
    relatorio[nome] = { rota, ...m };
    console.log(`${m.falhas.length ? '⚠' : '✓'} ${nome}${m.falhas.length ? ` (${m.falhas.length})` : ''}`);
  } catch (e) {
    await page.setViewportSize(VIEW).catch(() => {});
    relatorio[nome] = { rota, falhou: String(e).slice(0, 300) };
    console.log(`✗ ${nome}: ${String(e).slice(0, 120)}`);
  }
}
writeFileSync(`${OUT}/contraste-${device}-${scheme}.json`, JSON.stringify(relatorio, null, 1));
await browser.close();
