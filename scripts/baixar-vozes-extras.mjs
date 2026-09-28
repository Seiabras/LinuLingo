// Preenche as palavras do vocabulário que ainda NÃO têm gravação do Lingua Libre (scripts/baixar-audios.mjs),
// buscando em outras coleções livres do Wikimedia Commons: o projeto Shtooka e os arquivos de
// pronúncia com o prefixo do idioma («Sv-palavra.ogg», «It-palavra.ogg»…), usados no Wikcionário.
//
// Uso: node scripts/baixar-vozes-extras.mjs ro     (precisa de ffmpeg)
//
// Fica num arquivo à parte (src/data/<idioma>/audios-extra.ts, assets/audio/<idioma>/extra/) para
// nunca colidir com o que scripts/baixar-audios.mjs gera: cada um pode rodar de novo sem apagar o
// que o outro achou. Licença: só CC0/CC BY/CC BY-SA (as mesmas regras do outro script); autor e
// licença de CADA arquivo ficam no arquivo gerado e aparecem na tela Créditos.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Categorias do Commons por idioma (fora do Lingua Libre) e como tirar a palavra do nome do
 * arquivo: cada arquivo se chama «Prefixo-palavra.ogg» (às vezes «.oga», «.wav» ou «.mp3»).
 */
const LANGS = {
  ro: { categories: ['Romanian_pronunciation', 'Romanian_pronunciation_of_verbs'], prefix: /^Ro-/i },
  ru: { categories: ['Russian_pronunciation'], prefix: /^Ru-/i },
  es: { categories: ['European_Spanish_pronunciation', 'Latin_American_Spanish_pronunciation', 'Spanish_pronunciation_of_phrases', 'Spanish_pronunciation_of_verbs', 'Audio_files_from_Shtooka_Project_(Spanish)'], prefix: /^Es-/i },
  it: { categories: ['Italian_pronunciation', 'Audio_files_from_Shtooka_Project_(Italian)'], prefix: /^It-/i },
  // o curso ensina a norma de Portugal: só a categoria europeia (a brasileira fica para um sotaque)
  pt: { categories: ['Audio_files_of_European_Portuguese_pronunciation'], prefix: /^Pt-pt-/i },
  sv: { categories: ['Swedish_pronunciation'], prefix: /^Sv-/i },
  da: { categories: ['Danish_pronunciation'], prefix: /^Da-/i },
  is: { categories: ['Icelandic_pronunciation'], prefix: /^Is-/i },
  fo: { categories: ['Faroese_pronunciation'], prefix: /^Fo-/i },
  fi: { categories: ['Finnish_pronunciation'], prefix: /^Fi-/i },
  et: { categories: ['Estonian_pronunciation'], prefix: /^Et-/i },
  // a maior parte dos arquivos lituanos não tem prefixo («Alytus.ogg»): o prefixo é opcional
  lt: { categories: ['Lithuanian_pronunciation'], prefix: /^(Lt-)?/i },
};
const lang = process.argv[2] ?? 'ro';
const cfg = LANGS[lang];
if (!cfg) throw new Error(`idioma sem configuração: ${lang}`);

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const OUT_DIR = `assets/audio/${lang}/extra`;
const CACHE = `scripts/.cache-commons-extra-${lang}.json`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`;
  for (let tentativa = 0; tentativa < 4; tentativa++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    if (res?.ok) return res.json();
    await sleep(2000 * (tentativa + 1));
  }
  throw new Error(`falha na API: ${url}`);
}

/** Todos os arquivos das categorias configuradas (com cache local). */
async function allTitles() {
  if (existsSync(CACHE)) return JSON.parse(readFileSync(CACHE, 'utf8'));
  const titles = [];
  for (const category of cfg.categories) {
    let cont;
    do {
      const d = await api({ action: 'query', list: 'categorymembers', cmtitle: `Category:${category}`, cmtype: 'file', cmlimit: 'max', ...(cont ? { cmcontinue: cont } : {}) });
      titles.push(...d.query.categorymembers.map((m) => m.title));
      cont = d.continue?.cmcontinue;
      process.stdout.write(`\r  índice (${category}): ${titles.length} arquivos`);
      await sleep(300);
    } while (cont);
  }
  console.log();
  writeFileSync(CACHE, JSON.stringify(titles));
  return titles;
}

/** «File:Sv-ett abonnemang.ogg» → «abonnemang» (tira o prefixo, a extensão e o artigo sueco). */
function wordOf(title) {
  const name = title.replace(/^File:/, '');
  if (!cfg.prefix.test(name)) return null;
  const noExt = name.replace(cfg.prefix, '').replace(/\.(ogg|oga|wav|mp3)$/i, '');
  const noArticle = lang === 'sv' ? noExt.replace(/^(en|ett)\s+/i, '') : noExt;
  return noArticle.trim() || null;
}

// palavras do vocabulário (mesma leitura de scripts/baixar-audios.mjs)
const vocabSrc = readFileSync(`src/data/${lang}/vocabulario.ts`, 'utf8');
const words = [...vocabSrc.matchAll(/^\s*\[\s*'([^']+)'/gm)].map((m) => m[1]);
const paresTs = `src/data/${lang}/pares.ts`;
if (existsSync(paresTs)) {
  for (const m of readFileSync(paresTs, 'utf8').matchAll(/\b[ab]: \['([^']+)'/g)) if (!words.includes(m[1])) words.push(m[1]);
}

// quem já tem gravação (do Lingua Libre ou desta coleção): não busca essas de novo
const AUDIO_TS = `src/data/${lang}/audios.ts`;
const EXTRA_TS = `src/data/${lang}/audios-extra.ts`;
const keyOf = (w) => w.normalize('NFC').toLowerCase().replace(/́/g, '').replace(/ё/g, 'е').replace(/ş/g, 'ș').replace(/ţ/g, 'ț');
// as chaves dos arquivos têm a tônica do russo (челове́к): comparar sempre pela forma sem ela
const already = new Set(
  [
    ...(existsSync(AUDIO_TS) ? [...readFileSync(AUDIO_TS, 'utf8').matchAll(/^\s*"((?:[^"\\]|\\.)*)": \{/gm)].map((m) => JSON.parse(`"${m[1]}"`)) : []),
    ...(existsSync(EXTRA_TS) ? [...readFileSync(EXTRA_TS, 'utf8').matchAll(/^\s*"((?:[^"\\]|\\.)*)": \{/gm)].map((m) => JSON.parse(`"${m[1]}"`)) : []),
  ].map(keyOf),
);
const missing = words.filter((w) => !already.has(keyOf(w)));
console.log(`  ${missing.length} de ${words.length} palavras ainda sem gravação nenhuma`);
if (!missing.length) process.exit(0);

const titles = await allTitles();
const byWord = new Map();
for (const t of titles) {
  const w = wordOf(t);
  if (!w) continue;
  const key = keyOf(w);
  if (!byWord.has(key)) byWord.set(key, t); // a 1ª encontrada (a ordem da categoria já tende a repetir menos)
}

const wanted = [];
for (const w of missing) {
  const candidates = (lang === 'ro' ? [w, w.replace(/^a (se |-și )?/, '')] : [w]).map(keyOf);
  const title = candidates.map((c) => byWord.get(c)).find(Boolean);
  if (title) wanted.push({ word: w, title });
}
console.log(`  ${wanted.length} achadas nas coleções extras`);
if (!wanted.length) process.exit(0);

// metadados (URL, autor, licença) em lotes de 50
const meta = new Map();
for (let i = 0; i < wanted.length; i += 50) {
  const batch = wanted.slice(i, i + 50);
  const d = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url|extmetadata|user', iiextmetadatafilter: 'Artist|Credit|LicenseShortName|LicenseUrl', titles: batch.map((b) => b.title).join('|') });
  for (const p of d.query.pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const em = ii.extmetadata ?? {};
    const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').trim();
    // o autor: o campo Artist; nas gravações do projeto Shtooka ele vem vazio e o crédito fica em Credit;
    // sem ficha nenhuma, quem gravou é quem enviou («Uploaded and recorded by…»)
    const authorOf = (em, title) => strip(em.Artist?.value) || (/shtooka/i.test(em.Credit?.value ?? '') ? 'The Shtooka Project' : strip(em.Credit?.value)) || ii.user || title;
    meta.set(p.title, { url: ii.url, page: ii.descriptionurl, author: authorOf(em, p.title), license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value) });
  }
  await sleep(300);
}

mkdirSync(OUT_DIR, { recursive: true });
const skipped = { semMeta: 0, licenca: new Set() };
const onDisk = existsSync(OUT_DIR) ? readdirSync(OUT_DIR).map((f) => Number.parseInt(f, 10)).filter(Number.isFinite) : [];
let lastId = Math.max(0, ...onDisk);

const jobs = [];
for (const { word, title } of wanted) {
  const m = meta.get(title);
  if (!m) {
    skipped.semMeta++;
    continue;
  }
  if (!/^CC|public domain|CC0/i.test(m.license)) {
    skipped.licenca.add(m.license);
    continue;
  }
  jobs.push({ word, title, m, id: String(++lastId).padStart(4, '0') });
}

// o servidor de arquivos do Wikimedia limita a vazão (responde 429): um arquivo por vez, com pausa,
// e, se vier 429, espera o que ele pedir (Retry-After) ou cada vez mais
const PAUSE_MS = 700;
async function download(job) {
  const file = join(OUT_DIR, `${job.id}.mp3`);
  if (existsSync(file)) return true;
  await sleep(PAUSE_MS);
  for (let tentativa = 0; tentativa < 5; tentativa++) {
    const res = await fetch(job.m.url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    if (res?.status === 429) {
      const wait = Number(res.headers.get('retry-after')) * 1000 || 15_000 * 2 ** tentativa;
      process.stdout.write(`\n  (limite do servidor: esperando ${Math.round(wait / 1000)} s)\n`);
      await sleep(Math.min(wait, 120_000));
      continue;
    }
    if (res?.ok) {
      const raw = `${file}.raw`;
      writeFileSync(raw, Buffer.from(await res.arrayBuffer()));
      try {
        execFileSync('ffmpeg', ['-y', '-i', raw, '-codec:a', 'libmp3lame', '-qscale:a', '4', file], { stdio: 'ignore' });
      } finally {
        try {
          execFileSync('rm', [raw]);
        } catch {}
      }
      return existsSync(file);
    }
    await sleep(1500 * (tentativa + 1));
  }
  return false;
}

let done = 0;
for (const job of jobs) {
  const ok = await download(job);
  if (ok) done++;
  process.stdout.write(`\r  baixando: ${done}/${jobs.length}`);
}
console.log();

const existingExtra = existsSync(EXTRA_TS) ? readFileSync(EXTRA_TS, 'utf8') : null;
const prevEntries = existingExtra ? [...existingExtra.matchAll(/^\s*"((?:[^"\\]|\\.)*)": (\{.*\}),?$/gm)] : [];
const entries = new Map(prevEntries.map((m) => [JSON.parse(`"${m[1]}"`), m[2]]));
for (const job of jobs) {
  const file = join(OUT_DIR, `${job.id}.mp3`);
  if (!existsSync(file)) continue;
  const line = `{ src: require('../../../assets/audio/${lang}/extra/${job.id}.mp3'), file: ${JSON.stringify(job.title.replace(/^File:/, ''))}, author: ${JSON.stringify(job.m.author)}, license: ${JSON.stringify(job.m.license)}, licenseUrl: ${JSON.stringify(job.m.licenseUrl)}, page: ${JSON.stringify(job.m.page)} }`;
  entries.set(job.word, line);
}

const AUDIO_CONST = `AUDIO_${lang.toUpperCase()}_EXTRA`;
writeFileSync(
  EXTRA_TS,
  `// Gerado por scripts/baixar-vozes-extras.mjs — não editar à mão.
// Gravações de pronúncia do Wikimedia Commons fora do Lingua Libre (projeto Shtooka e arquivos do
// Wikcionário), para as palavras que o Lingua Libre ainda não tinha. Autor e licença por arquivo.
import type { AudioClip } from '../types';

export const ${AUDIO_CONST}: Record<string, AudioClip> = {
${[...entries.entries()].map(([w, line]) => `  ${JSON.stringify(w)}: ${line},`).join('\n')}
};
`,
);
console.log(`✅ ${entries.size} palavras em ${EXTRA_TS} (${jobs.length - (jobs.length - done)} baixadas agora)`);
if (skipped.semMeta || skipped.licenca.size) console.log(`   (puladas: ${skipped.semMeta} sem metadado, licenças não livres: ${[...skipped.licenca].join(', ') || 'nenhuma'})`);
