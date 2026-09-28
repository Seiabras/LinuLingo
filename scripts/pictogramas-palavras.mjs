// Pictogramas para as palavras do vocabulário que não têm foto (verbos, adjetivos, sentimentos,
// tempo, perguntas, profissões…), no lugar do emoji.
//
// Uso: npx tsx scripts/pictogramas-palavras.mjs [--relatorio] [--refazer]
//   --relatorio  só conta quantas palavras ficam com foto, pictograma ou só emoji (não gera nada)
//   --refazer    gera de novo todas as imagens (senão, só as que faltam)
//
// Os símbolos são do Mulberry Symbols (https://mulberrysymbols.org), de Steve Lee, com licença
// CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/): pode usar e adaptar, dando o crédito
// e mantendo a mesma licença nas imagens adaptadas. O repositório é clonado (ou atualizado) em
// scripts/.cache-mulberry (fora do git); MULBERRY_DIR aponta para um clone que já exista.
//
// Qual símbolo vai em qual palavra está em src/data/pictogramas-mapa.ts (feito à mão): a chave é a
// cabeça da tradução em português, a mesma em todos os idiomas. Aqui, para cada palavra de cada
// idioma que não tem foto (src/data/fotos-palavras.ts), procura-se o pictograma pela mesma regra do
// app (src/services/word-images.ts); cada símbolo usado vira uma imagem quadrada de 192 px (fundo
// branco, com margem), em WebP, desenhada pelo Chromium, em assets/pictogramas/palavras/, e a lista
// vai para src/data/pictogramas-palavras.ts. As imagens não entram no pacote offline da web (ficam
// guardadas quando aparecem pela primeira vez; ver scripts/preparar-pages.mjs).
import { Buffer } from 'node:buffer';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { PACKS } from '../src/data/idiomas.ts';
import { PICTO_EXCLUDE, PICTO_MAP } from '../src/data/pictogramas-mapa.ts';
import { makeImageLookup, normalizeTranslation, PHOTO_POS, translationHead } from '../src/services/word-images.ts';

const REPORT_ONLY = process.argv.includes('--relatorio');
const REDO = process.argv.includes('--refazer');
const REPO = 'https://github.com/mulberrysymbols/mulberry-symbols';
const DIR = process.env.MULBERRY_DIR ?? 'scripts/.cache-mulberry';
const OUT_DIR = 'assets/pictogramas/palavras';
const OUT_TS = 'src/data/pictogramas-palavras.ts';
const SIZE = 192;
const PAD = 0.06;
const QUALITY = 0.8;

// 1. o Mulberry Symbols
if (!process.env.MULBERRY_DIR) {
  if (!existsSync(join(DIR, '.git'))) execFileSync('git', ['clone', '--depth', '1', REPO, DIR], { stdio: 'inherit' });
  else if (!REPORT_ONLY) {
    try {
      execFileSync('git', ['-C', DIR, 'pull', '--ff-only', '--depth', '1'], { stdio: 'inherit' });
    } catch {
      console.warn('⚠ não deu para atualizar o Mulberry Symbols; seguindo com o clone que já existe');
    }
  }
}
const SVG_DIR = join(DIR, 'EN');
const version = (() => {
  try {
    return execFileSync('git', ['-C', DIR, 'rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
})();
for (const sym of new Set(Object.values(PICTO_MAP))) if (!existsSync(join(SVG_DIR, `${sym}.svg`))) throw new Error(`símbolo inexistente no Mulberry: ${sym}`);

// 2. as fotos que já existem (só as chaves; o arquivo tem require() de imagens)
const photoKeys = [...readFileSync('src/data/fotos-palavras.ts', 'utf8').matchAll(/^ {2}("(?:[^"\\]|\\.)*"): \{ src:/gm)].map((m) => JSON.parse(m[1]));
const photoLookup = makeImageLookup(Object.fromEntries(photoKeys.map((k) => [k, true])));
const hasPhoto = (v) => PHOTO_POS.has(v.part_of_speech) && !!photoLookup(v.word_native, { pos: v.part_of_speech, target: v.word_target });

// 3. o mapa: as chaves com «*» valem para toda tradução que começa assim
const all = [];
for (const p of Object.values(PACKS)) for (const v of p.vocab) all.push({ lang: p.code, v, n: normalizeTranslation(v.word_native) });
const translations = [...new Set(all.map((e) => e.n))];
const table = {};
for (const [k, sym] of Object.entries(PICTO_MAP)) {
  if (!k.endsWith('*')) table[k] = sym;
  else for (const t of translations) if (t.startsWith(k.slice(0, -1))) table[t] ??= sym;
}
const excluded = new Set();
for (const e of PICTO_EXCLUDE) for (const t of translations) if (t === e || t.startsWith(e)) excluded.add(t);
const keyTable = Object.fromEntries(Object.keys(table).map((k) => [k, k]));
const keyLookup = makeImageLookup(keyTable, { loose: true, exclude: excluded });
const plainLookup = makeImageLookup(keyTable, { loose: true });

// 4. cada palavra: foto, pictograma ou só o emoji
const used = new Map(); // chave → símbolo
const relevantExcluded = new Set(); // as exclusões que mudam algo: sem elas, a palavra teria o pictograma da cabeça
const count = { photo: 0, picto: 0, emoji: 0 };
const heads = { photo: new Set(), picto: new Set(), emoji: new Set() };
for (const { v } of all) {
  const head = translationHead(v.word_native);
  let kind = 'emoji';
  if (hasPhoto(v)) kind = 'photo';
  else {
    const key = keyLookup(v.word_native, { pos: v.part_of_speech, target: v.word_target });
    if (key) {
      kind = 'picto';
      used.set(key, table[key]);
    } else if (excluded.size && plainLookup(v.word_native, { pos: v.part_of_speech, target: v.word_target }))
      relevantExcluded.add(normalizeTranslation(v.word_native));
  }
  count[kind]++;
  heads[kind].add(head);
}
// uma cabeça conta uma vez só, pelo melhor que ela tem em alguma palavra
for (const h of heads.photo) {
  heads.picto.delete(h);
  heads.emoji.delete(h);
}
for (const h of heads.picto) heads.emoji.delete(h);
const total = all.length;
const pct = (n) => `${((100 * n) / total).toFixed(1)}%`;
console.log(`${total} palavras em ${Object.keys(PACKS).length} idiomas`);
console.log(`  com foto:       ${count.photo} (${pct(count.photo)}) · ${heads.photo.size} cabeças`);
console.log(`  com pictograma: ${count.picto} (${pct(count.picto)}) · ${heads.picto.size} cabeças`);
console.log(`  só emoji:       ${count.emoji} (${pct(count.emoji)}) · ${heads.emoji.size} cabeças`);
const symbols = [...new Set(used.values())].sort();
console.log(`  ${used.size} chaves do mapa usadas, ${symbols.length} símbolos`);
if (REPORT_ONLY) process.exit(0);

// 5. as imagens: um arquivo por símbolo («eat_,_to» → eat-to.webp)
const fileOf = new Map();
const taken = new Set();
for (const s of symbols) {
  let base = s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  while (taken.has(base)) base += '-2';
  taken.add(base);
  fileOf.set(s, `${base}.webp`);
}
mkdirSync(OUT_DIR, { recursive: true });
const todo = symbols.filter((s) => REDO || !existsSync(join(OUT_DIR, fileOf.get(s))));
if (todo.length) {
  const { chromium } = await import('playwright-core');
  const chromePath = () => {
    if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
    for (const root of [process.env.PLAYWRIGHT_BROWSERS_PATH, '/opt/pw-browsers', join(homedir(), '.cache/ms-playwright')].filter(Boolean)) {
      if (!existsSync(root)) continue;
      for (const d of readdirSync(root).filter((x) => /^chromium-\d+$/.test(x)))
        for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome']) if (existsSync(join(root, d, sub))) return join(root, d, sub);
    }
    return undefined;
  };
  const browser = await chromium.launch({ executablePath: chromePath() });
  const page = await browser.newPage();
  await page.setContent('<html><body></body></html>');
  let n = 0;
  for (const s of todo) {
    const svg = readFileSync(join(SVG_DIR, `${s}.svg`), 'utf8');
    const b64 = await page.evaluate(
      async ({ svg, size, pad, quality }) => {
        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        await img.decode();
        const c = document.createElement('canvas');
        c.width = c.height = size;
        const g = c.getContext('2d');
        g.fillStyle = '#fff';
        g.fillRect(0, 0, size, size);
        // os símbolos são quadrados (850 × 850); o desenho fica no meio, com margem
        const w = img.naturalWidth || 850;
        const h = img.naturalHeight || 850;
        const k = (size * (1 - 2 * pad)) / Math.max(w, h);
        g.drawImage(img, (size - w * k) / 2, (size - h * k) / 2, w * k, h * k);
        return c.toDataURL('image/webp', quality).split(',')[1];
      },
      { svg, size: SIZE, pad: PAD, quality: QUALITY },
    );
    writeFileSync(join(OUT_DIR, fileOf.get(s)), Buffer.from(b64, 'base64'));
    if (++n % 100 === 0) console.log(`   ${n}/${todo.length}`);
  }
  await browser.close();
}
// as que não servem mais saem
const keep = new Set(fileOf.values());
for (const f of readdirSync(OUT_DIR)) if (!keep.has(f)) unlinkSync(join(OUT_DIR, f));
const bytes = [...keep].reduce((s, f) => s + statSync(join(OUT_DIR, f)).size, 0);
console.log(`  ${keep.size} imagens em ${OUT_DIR}: ${(bytes / 1024).toFixed(0)} KB (média ${(bytes / keep.size / 1024).toFixed(1)} KB)`);

// 6. o arquivo para o app
const q = (s) => JSON.stringify(s);
const keys = [...used.keys()].sort((a, b) => a.localeCompare(b, 'pt'));
const out = `// Gerado por scripts/pictogramas-palavras.mjs — não editar à mão (a lista é src/data/pictogramas-mapa.ts).
// Pictogramas do Mulberry Symbols para as palavras sem foto. A chave é a cabeça da tradução em
// português (às vezes com a classe: «rosa#adjetivo»; ou a tradução inteira).
export interface WordPicto {
  src: number;
  /** o símbolo do Mulberry Symbols (nome do arquivo SVG) */
  symbol: string;
}

/** Crédito dos pictogramas (a licença pede autor, licença e link). */
export const PICTO_CREDIT = {
  author: 'Steve Lee (Mulberry Symbols)',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  page: 'https://mulberrysymbols.org',
  version: ${q(version)},
} as const;

const img: Record<string, number> = {
${symbols.map((s) => `  ${q(s)}: require('../../${OUT_DIR}/${fileOf.get(s)}'),`).join('\n')}
};
const p = (symbol: string): WordPicto => ({ src: img[symbol], symbol });

export const WORD_PICTOS: Record<string, WordPicto> = {
${keys.map((k) => `  ${q(k)}: p(${q(used.get(k))}),`).join('\n')}
};

/** Traduções que não usam o pictograma da cabeça (outro sentido da palavra). */
export const PICTO_EXCLUDED: ReadonlySet<string> = new Set([
${[...relevantExcluded]
  .sort((a, b) => a.localeCompare(b, 'pt'))
  .map((t) => `  ${q(t)},`)
  .join('\n')}
]);
`;
writeFileSync(OUT_TS, out);
console.log(`✅ ${keys.length} chaves em ${OUT_TS}`);
