// Varredura por idioma: troca o idioma estudado (?idioma=xx, só em desenvolvimento) e passa pelas
// telas principais de cada um dos idiomas do app — trilha, primeira lição, Cofre, Gramática e o
// primeiro tópico, Cultura, a primeira história e o alfabeto (se houver) —, procurando texto cortado,
// fora da tela, sobreposto, suspeito, letras sem fonte (o “quadradinho”) e erros no console.
// Salva OUT/idiomas-<aparelho>-<tema>.json (uma entrada por idioma e tela) e captura só as telas
// com algum achado.
// Uso: npx tsx scripts/varredura-idiomas.mjs [código…]   (BASE_URL, padrão http://localhost:8081;
// DEVICE=iphone|desktop SCHEME=light|dark; sem códigos, todos os idiomas)
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { PACKS } from '../src/data/idiomas.ts';
import { fecharTutorial, medir } from './varredura-comum.mjs';

const BASE = process.env.BASE_URL ?? 'http://localhost:8081';
const OUT = process.env.OUT_DIR ?? 'capturas/varredura-idiomas';
const device = process.env.DEVICE ?? 'iphone';
const scheme = process.env.SCHEME ?? 'light';
const VIEW = { iphone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } }[device];
const codes = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(PACKS);
mkdirSync(OUT, { recursive: true });

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
  if (m.type() !== 'error' || t.includes('Unknown event handler property') || t.includes('maskType') || t.includes('404')) return;
  erros.push(t.slice(0, 300));
});

const telas = (p) =>
  [
    ['trilha', '/'],
    ['licao', p.units?.[0]?.lessons?.[0] && `/licao/${p.units[0].lessons[0].id}`],
    ['cofre', '/vocabulario'],
    ['gramatica', '/gramatica'],
    ['gramatica-topico', p.grammar?.[0] && `/gramatica/${p.grammar[0].id}`],
    ['cultura', '/cultura?aba=cultura'],
    ['historia', p.stories?.[0] && `/historia/${p.stories[0].id}`],
    ['alfabeto', '/alfabeto'],
  ].filter(([, r]) => r);

const relatorio = {};
await page.goto(`${BASE}/`, { timeout: 600000 });
await page.waitForTimeout(6000);
await fecharTutorial(page);
let i = 0;
for (const code of codes) {
  const p = PACKS[code];
  i++;
  // troca o idioma e espera o pacote ser gravado no banco (a primeira vez de cada um demora)
  await page.goto(`${BASE}/?idioma=${code}`, { timeout: 120000 });
  await page.waitForTimeout(5000);
  await fecharTutorial(page);
  let achados = 0;
  for (const [nome, rota] of telas(p)) {
    erros = [];
    const k = `${code}/${nome}`;
    try {
      await page.goto(`${BASE}${rota}${rota.includes('?') ? '&' : '?'}idioma=${code}`, { timeout: 120000 });
      await page.waitForTimeout(2500);
      await fecharTutorial(page);
      const { texto, ...m } = await medir(page);
      const n = m.cortados.length + m.fora.length + m.sobre.length + m.suspeitos.length + m.semFonte.length + erros.length + (m.larguraPagina ? 1 : 0);
      relatorio[k] = { rota, erros: [...new Set(erros)], ...m, tamanhoTexto: texto.length, amostra: texto.replace(/\s+/g, ' ').slice(0, 160) };
      if (n) {
        achados += n;
        await page.screenshot({ path: `${OUT}/${device}-${scheme}-${code}-${nome}.png` });
      }
    } catch (e) {
      relatorio[k] = { rota, falhou: String(e).slice(0, 300), erros: [...new Set(erros)] };
      achados++;
    }
  }
  console.log(`${achados ? '⚠' : '✓'} [${i}/${codes.length}] ${code} ${p.name}${achados ? ` (${achados})` : ''}`);
  // grava a cada idioma: dá para ler o relatório parcial enquanto a varredura roda
  writeFileSync(`${OUT}/idiomas-${device}-${scheme}.json`, JSON.stringify(relatorio, null, 1));
}
await browser.close();
