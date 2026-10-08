// Fotos para as palavras concretas do vocabulário (no lugar do emoji), do Wikimedia Commons.
//
// Uso: npx tsx scripts/baixar-fotos-palavras.mjs [LIMITE]     (precisa de ffmpeg)
//
// Cada conceito (a tradução em português, «maçã») é procurado no Wikidata; o item certo é o que tem,
// além do nome em português, o nome da palavra em pelo menos dois dos idiomas em que o app a ensina
// (manzana, mela, măr, яблоко, äpple…) — assim «manga» (fruta) não vira «manga» (da camisa). A foto
// é a imagem principal do item (P18), só com licença livre (CC0, CC BY, CC BY-SA ou domínio público;
// nada de NC/ND), encaixada (sem cortar nada) num quadrado de 512 px, com fundo branco nas bordas
// que sobrarem da proporção original. Os nomes são comparados COM acento, táxon
// biológico só vale em bichos, natureza e comida, e arquivo com marca ou logotipo no nome fica de
// fora. Autor e licença de cada foto ficam no arquivo gerado (src/data/fotos-palavras.ts) e
// aparecem na tela Créditos.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { PACKS } from '../src/data/idiomas.ts';

// --refazer: ignora o cache e baixa de novo (pra reprocessar com um filtro de imagem novo, por
// exemplo); combine com LIMITE pra só reprocessar os primeiros N, em vez do catálogo inteiro.
const REFAZER = process.argv.includes('--refazer');
const LIMIT = Number(process.argv.slice(2).find((a) => a !== '--refazer') ?? Infinity);
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const OUT_DIR = 'assets/fotos/palavras';
const CACHE = 'scripts/.cache-fotos-palavras.json';
const PAUSE_MS = 700;
/** As categorias de coisas que dá para fotografar. */
const CONCRETE = new Set(['Alimentação e Restaurantes', 'Casa', 'Animais', 'Viagens e Transporte', 'Natureza', 'Corpo', 'Roupas', 'Compras', 'Lazer e Esportes', 'Escola', 'Saúde', 'Tecnologia']);
/** Os idiomas do app no Wikidata (o norueguês bokmål é «nb»). */
const WD_LANG = { ro: 'ro', ru: 'ru', es: 'es', it: 'it', pt: 'pt', sv: 'sv', nb: 'nb', da: 'da' };
/** Táxon biológico (tem nome científico, P225) só nessas categorias: a doença «câncer» não vira um caranguejo. */
const TAXON_OK = new Set(['Animais', 'Natureza', 'Alimentação e Restaurantes']);
/** Marca ou logotipo no NOME DO ARQUIVO (nunca no endereço: todo endereço tem «wikimedia»). */
const BRAND = /wikipedia|wikimedia|logo|coca-?cola|ikea|mcdonald|nike|adidas|samsung|nokia|drogerie|starbucks|lego|pepsi|nestl|toyota|volkswagen/i;
/** Conferidas à mão e erradas: a foto era de outro sentido da palavra (robô → dança; etiqueta → boas maneiras). */
const EXCLUDE = new Set(['robô', 'etiqueta']);
const FREE = /^(CC0|CC BY(-SA)? ?[\d.]*|CC BY-SA|Public domain|PD\b|Attribution|No restrictions)/i;
const NOT_FREE = /\bNC\b|\bND\b|non-?commercial|no ?deriv/i;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// com acento: «câncer» não pode casar com «Cancer», o gênero dos caranguejos (só a tônica do russo sai)
const fold = (s) =>
  s
    .normalize('NFC')
    .replace(/\u0301/g, '')
    .toLowerCase()
    .replace(/[«»"“”]/g, '')
    .trim();
/** «o quarto (de dormir)» → «quarto»; «pacote, encomenda» → [pacote, encomenda] */
const variants = (s) =>
  s
    .replace(/\(.*?\)/g, '')
    .split(/[,;/]/)
    .map((x) => fold(x).replace(/^(o|a|os|as|el|la|los|las|il|lo|l'|gli|le|i|un|una|en|ett|et|ei|der|die|das)\s+/, '').replace(/^l'/, '').trim())
    .filter(Boolean);

async function get(url, { json = true, tries = 5 } = {}) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    if (res?.ok) return json ? res.json() : Buffer.from(await res.arrayBuffer());
    const wait = res?.status === 429 ? Number(res.headers.get('retry-after')) * 1000 || 15_000 * 2 ** i : 2000 * (i + 1);
    await sleep(Math.min(wait, 120_000));
  }
  return null;
}
const wd = (params) => get(`https://www.wikidata.org/w/api.php?${new URLSearchParams({ format: 'json', ...params })}`);
const commons = (params) => get(`https://commons.wikimedia.org/w/api.php?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`);

// 1. os conceitos: substantivos concretos, com as palavras de cada idioma
const concepts = new Map();
for (const p of Object.values(PACKS)) {
  for (const v of p.vocab) {
    if (v.part_of_speech !== 'substantivo' || !CONCRETE.has(v.category)) continue;
    const key = v.word_native.trim().toLowerCase();
    const c = concepts.get(key) ?? { key, pt: v.word_native, words: {}, langs: new Set(), cats: new Set() };
    c.cats.add(v.category);
    c.words[WD_LANG[p.code]] ??= new Set();
    for (const w of variants(v.word_target)) c.words[WD_LANG[p.code]].add(w);
    c.langs.add(p.code);
    concepts.set(key, c);
  }
}
// primeiro os que aparecem em mais idiomas (os mais básicos)
const todo = [...concepts.values()].filter((c) => c.langs.size >= 2 && !EXCLUDE.has(c.key)).sort((a, b) => b.langs.size - a.langs.size || a.key.localeCompare(b.key)).slice(0, LIMIT);
console.log(`${concepts.size} conceitos concretos; ${todo.length} em 2 idiomas ou mais`);

const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};
const save = () => writeFileSync(CACHE, JSON.stringify(cache, null, 1));
mkdirSync(OUT_DIR, { recursive: true });

/** O item do Wikidata do conceito, conferido pelos nomes nos outros idiomas. */
async function findItem(c) {
  const terms = variants(c.pt);
  const ids = new Set();
  for (const t of terms.slice(0, 2)) {
    const r = await wd({ action: 'wbsearchentities', search: t, language: 'pt', uselang: 'pt', type: 'item', limit: '8' });
    for (const s of r?.search ?? []) ids.add(s.id);
  }
  if (!ids.size) return null;
  const langs = ['pt', ...Object.keys(c.words)].join('|');
  // só os nomes (leve); as afirmações, só dos que batem
  const r = await wd({ action: 'wbgetentities', ids: [...ids].join('|'), props: 'labels|aliases', languages: langs });
  const candidates = [];
  for (const e of Object.values(r?.entities ?? {})) {
    const names = (l) => new Set([e.labels?.[l]?.value, ...(e.aliases?.[l] ?? []).map((a) => a.value)].filter(Boolean).map(fold));
    if (!terms.some((t) => names('pt').has(t))) continue;
    const matched = Object.entries(c.words).filter(([l, ws]) => [...ws].some((w) => names(l).has(w))).map(([l]) => l);
    // pelo menos 2 idiomas batendo: com 1 só, «agulha» (de costura) virava a agulha do trilho de trem
    if (matched.length >= 2) candidates.push({ id: e.id, matched });
  }
  // o que bate em mais idiomas (no empate, o que veio primeiro na busca) e tem imagem
  candidates.sort((a, b) => b.matched.length - a.matched.length);
  const taxonOk = [...c.cats].some((x) => TAXON_OK.has(x));
  for (const cand of candidates.slice(0, 3)) {
    const cl = await wd({ action: 'wbgetclaims', entity: cand.id, property: 'P18' });
    const image = cl?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!image || BRAND.test(image)) continue;
    if (!taxonOk) {
      const tx = await wd({ action: 'wbgetclaims', entity: cand.id, property: 'P225' });
      if (tx?.claims?.P225?.length) continue;
    }
    return { ...cand, image };
  }
  return null;
}

/** Licença e endereço da miniatura de um arquivo do Commons (só as livres). */
async function fileInfo(file) {
  const r = await commons({ action: 'query', titles: `File:${file}`, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '800' });
  const ii = r?.query?.pages?.[0]?.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata ?? {};
  const license = (m.LicenseShortName?.value ?? '').trim();
  if (!FREE.test(license) || NOT_FREE.test(license)) return { rejected: license || 'sem licença' };
  const author = (m.Artist?.value ?? 'desconhecido').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  return { thumb: ii.thumburl ?? ii.url, page: ii.descriptionurl, license, licenseUrl: m.LicenseUrl?.value ?? '', author };
}

let n = 0;
let nextId = Math.max(0, ...Object.values(cache).filter(Boolean).map((v) => Number(v.file.match(/(\d+)\.jpg$/)?.[1] ?? 0))) + 1;
/** Um conceito: o item e a licença (em paralelo com outros), depois a foto (um de cada vez). */
let downloading = Promise.resolve();
async function one(c) {
  if (!REFAZER && cache[c.key] !== undefined && (cache[c.key] === null || existsSync(cache[c.key].file))) return;
  try {
    const item = await findItem(c);
    if (!item) {
      cache[c.key] = null;
      return;
    }
    const info = await fileInfo(item.image);
    if (!info || info.rejected) {
      console.log(`   ✗ ${c.key}: ${info?.rejected ?? 'sem arquivo'}`);
      cache[c.key] = null;
      return;
    }
    // os downloads vão em fila, com pausa: o servidor de arquivos limita o ritmo
    const turn = downloading.then(async () => {
      const buf = await get(info.thumb, { json: false });
      await sleep(PAUSE_MS);
      return buf;
    });
    downloading = turn.catch(() => {});
    const buf = await turn;
    if (!buf) {
      console.log(`   ✗ ${c.key}: download falhou`);
      return;
    }
    const file = `${OUT_DIR}/${String(nextId++).padStart(4, '0')}.jpg`;
    const tmp = `/tmp/foto-palavra-${process.pid}-${nextId}`;
    writeFileSync(tmp, buf);
    // encaixa em 512 px sem cortar (fundo branco nas bordas, ver o filtro abaixo)
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error', '-i', tmp,
      // sem cortar nada (antes: recorte quadrado no centro, cortava borda/cabeça de fotos que não
      // eram quadradas): encaixa a foto inteira dentro de 512x512 preservando a proporção, com
      // fundo branco nas bordas que sobrarem (mesma técnica já usada pra imagens com transparência)
      '-filter_complex', "color=white:s=512x512[bg];[0:v]scale=512:512:force_original_aspect_ratio=decrease[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2:shortest=1,format=yuvj420p",
      '-frames:v', '1', '-q:v', '5', file,
    ]);
    cache[c.key] = { file, pt: c.pt, item: item.id, matched: item.matched, ...info };
    console.log(`   ✓ ${++n} ${c.key} → ${item.id} (${item.matched.join(', ')}) · ${info.license}`);
  } catch (e) {
    console.log(`   ✗ ${c.key}: ${e.message}`);
  }
}
const PARALLEL = 4;
for (let i = 0; i < todo.length; i += PARALLEL) {
  await Promise.all(todo.slice(i, i + PARALLEL).map(one));
  if ((i / PARALLEL) % 10 === 0) save();
}
save();

// 3. o arquivo para o app
const rows = Object.entries(cache)
  .filter(([k, v]) => v && !EXCLUDE.has(k) && existsSync(v.file))
  .sort(([a], [b]) => a.localeCompare(b, 'pt'));
const out = `// Gerado por scripts/baixar-fotos-palavras.mjs — não editar à mão.
// Fotos do Wikimedia Commons (imagem principal do item do Wikidata de cada conceito), encaixadas
// num quadrado de 512 px sem cortar nada; só licenças livres. A chave é a tradução em português,
// em minúsculas.
export interface WordPhoto {
  src: number;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  /** o item do Wikidata */
  item: string;
}

export const WORD_PHOTOS: Record<string, WordPhoto> = {
${rows.map(([k, v]) => `  ${JSON.stringify(k)}: { src: require('../../${v.file}'), author: ${JSON.stringify(v.author)}, license: ${JSON.stringify(v.license)}, licenseUrl: ${JSON.stringify(v.licenseUrl)}, page: ${JSON.stringify(v.page)}, item: ${JSON.stringify(v.item)} },`).join('\n')}
};
`;
writeFileSync('src/data/fotos-palavras.ts', out);
console.log(`✅ ${rows.length} fotos em src/data/fotos-palavras.ts`);
