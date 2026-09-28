// Baixa gravações de falantes nativos do Lingua Libre (Wikimedia Commons) para as
// palavras do vocabulário, converte para mp3 leve e gera o mapa + créditos.
//
// Uso: node scripts/baixar-audios.mjs ro     (precisa de ffmpeg)
//
// Licença: os arquivos do Lingua Libre são livres (em geral CC BY-SA 4.0); o autor e a
// licença de CADA arquivo ficam em src/data/<idioma>/audios.ts e aparecem na tela Créditos.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LANGS = {
  ro: { wikidata: 'Q7913', iso3: 'ron', category: 'Lingua_Libre_pronunciation-ron' },
  ru: { wikidata: 'Q7737', iso3: 'rus', category: 'Lingua_Libre_pronunciation-rus' },
  es: { wikidata: 'Q1321', iso3: 'spa', category: 'Lingua_Libre_pronunciation-spa' },
  // o curso de português ensina a norma de Portugal: só falantes que moram lá (scripts/falantes-por-pais.mjs pt PRT)
  pt: { wikidata: 'Q5146', iso3: 'por', category: 'Lingua_Libre_pronunciation-por', speakers: 'scripts/.falantes-pt-PRT.json' },
  sv: { wikidata: 'Q9027', iso3: 'swe', category: 'Lingua_Libre_pronunciation-swe' },
  nb: { wikidata: 'Q9043', iso3: 'nor', category: 'Lingua_Libre_pronunciation-nor' }, // quase tudo do norueguês está em «nor» (o «nob» tem só 16 arquivos)
  nn: { wikidata: 'Q25164', iso3: 'nno', category: 'Lingua_Libre_pronunciation-nno' },
  da: { wikidata: 'Q9035', iso3: 'dan', category: 'Lingua_Libre_pronunciation-dan' },
  is: { wikidata: 'Q294', iso3: 'isl', category: 'Lingua_Libre_pronunciation-isl' },
  fo: { wikidata: 'Q25258', iso3: 'fao', category: 'Lingua_Libre_pronunciation-fao' },
  fi: { wikidata: 'Q1412', iso3: 'fin', category: 'Lingua_Libre_pronunciation-fin' },
  et: { wikidata: 'Q9072', iso3: 'est', category: 'Lingua_Libre_pronunciation-est' },
  lt: { wikidata: 'Q9083', iso3: 'lit', category: 'Lingua_Libre_pronunciation-lit' },
  it: { wikidata: 'Q652', iso3: 'ita', category: 'Lingua_Libre_pronunciation-ita' },
  fr: { wikidata: 'Q150', iso3: 'fra', category: 'Lingua_Libre_pronunciation-fra' },
  ja: { wikidata: 'Q5287', iso3: 'jpn', category: 'Lingua_Libre_pronunciation-jpn' },
  ko: { wikidata: 'Q9176', iso3: 'kor', category: 'Lingua_Libre_pronunciation-kor' },
};
const lang = process.argv[2] ?? 'ro';
const cfg = LANGS[lang];
if (!cfg) throw new Error(`idioma sem configuração: ${lang}`);

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const OUT_DIR = `assets/audio/${lang}`;
const CACHE = `scripts/.cache-commons-${lang}.json`;
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

/** Lista todos os arquivos da categoria (com cache local). */
async function allTitles() {
  if (existsSync(CACHE)) return JSON.parse(readFileSync(CACHE, 'utf8'));
  const titles = [];
  let cont;
  do {
    const d = await api({ action: 'query', list: 'categorymembers', cmtitle: `Category:${cfg.category}`, cmtype: 'file', cmlimit: 'max', ...(cont ? { cmcontinue: cont } : {}) });
    titles.push(...d.query.categorymembers.map((m) => m.title));
    cont = d.continue?.cmcontinue;
    process.stdout.write(`\r  índice: ${titles.length} arquivos`);
    await sleep(300);
  } while (cont);
  console.log();
  writeFileSync(CACHE, JSON.stringify(titles));
  return titles;
}

/** «File:LL-Q7913 (ron)-Autor-palavra.wav» → { speaker, word } */
function parseTitle(t) {
  const m = t.match(/^File:LL-Q\d+ \([a-z]{3}\)-([^-]+)-(.+)\.(wav|ogg|flac|mp3)$/i);
  return m ? { speaker: m[1], word: m[2].normalize('NFC') } : null;
}

// palavras do vocabulário, lidas direto do(s) arquivo(s) de dados (também as linhas que o
// formatador quebrou em várias: «[\n    'autobús',»). Em ja/ko o vocabulário vem repartido em
// vocab-a/vocab-b/vocab-extras/vocab-trilha (vocabulario.ts só reexporta o merge dos quatro).
const VOCAB_FILES = ['vocab-a', 'vocab-b', 'vocab-extras', 'vocab-trilha'].map((f) => `src/data/${lang}/${f}.ts`).filter(existsSync);
const vocabSrc = (VOCAB_FILES.length ? VOCAB_FILES : [`src/data/${lang}/vocabulario.ts`]).map((f) => readFileSync(f, 'utf8')).join('\n');
// a mesma palavra pode aparecer em mais de um dos quatro arquivos (o merge() de vocabulario.ts já
// resolve isso lá, mas aqui a lista crua tem que ficar sem repetição, senão o objeto de áudio sai
// com chave duplicada)
const words = [...new Set([...vocabSrc.matchAll(/^\s*\[\s*'([^']+)'/gm)].map((m) => m[1]))];
// e as palavras dos pares mínimos (src/data/<idioma>/pares.ts), muitas fora do vocabulário (perra, уголь)
const paresTs = `src/data/${lang}/pares.ts`;
if (existsSync(paresTs)) {
  for (const m of readFileSync(paresTs, 'utf8').matchAll(/\b[ab]: \['([^']+)'/g)) if (!words.includes(m[1])) words.push(m[1]);
  for (const m of readFileSync(paresTs, 'utf8').matchAll(/\[\s*'([^']+)',\s*'[^']*'\s*\],?\s*\n?\s*\[\s*'([^']+)'/g)) for (const w of [m[1], m[2]]) if (!words.includes(w)) words.push(w);
}

// ids estáveis: quem já tem gravação mantém o seu arquivo (NNNN.mp3), e as palavras novas ganham
// ids depois do maior em uso. Antes o id era a posição na lista, e uma palavra nova no meio
// empurrava a numeração: as gravações trocariam de palavra.
const AUDIO_TS = `src/data/${lang}/audios.ts`;
const prevId = new Map(
  existsSync(AUDIO_TS)
    ? [...readFileSync(AUDIO_TS, 'utf8').matchAll(/^\s*("(?:[^"\\]|\\.)*"): \{ src: require\('[^']*\/(\d+)\.mp3'\)/gm)].map((m) => [JSON.parse(m[1]), m[2]])
    : [],
);
const onDisk = existsSync(`assets/audio/${lang}`) ? readdirSync(`assets/audio/${lang}`).map((f) => Number.parseInt(f, 10)).filter(Number.isFinite) : [];
let lastId = Math.max(0, ...onDisk, ...[...prevId.values()].map(Number));

const titles = await allTitles();
// chave de busca: minúscula, sem a marca de tônica do russo (U+0301), ё = е, cedilha = vírgula no romeno
const keyOf = (w) => w.normalize('NFC').toLowerCase().replace(/\u0301/g, '').replace(/ё/g, 'е').replace(/ş/g, 'ș').replace(/ţ/g, 'ț');
// idiomas com mais de uma norma (pt): só os falantes da norma do curso
const allowedSpeakers = cfg.speakers ? new Set(JSON.parse(readFileSync(cfg.speakers, 'utf8'))) : null;
const byWord = new Map();
for (const t of titles) {
  const p = parseTitle(t);
  if (!p) continue;
  if (allowedSpeakers && !allowedSpeakers.has(p.speaker)) continue;
  const key = keyOf(p.word);
  if (!byWord.has(key)) byWord.set(key, []);
  byWord.get(key).push({ title: t, speaker: p.speaker });
}

// quantas gravações cada falante tem: preferimos falantes mais ativos (qualidade mais constante)
const speakerCount = new Map();
for (const list of byWord.values()) for (const f of list) speakerCount.set(f.speaker, (speakerCount.get(f.speaker) ?? 0) + 1);

const wanted = [];
for (const w of words) {
  // romeno: o verbo aparece como «a vorbi» no vocabulário e «vorbi» na gravação
  const candidates = (lang === 'ro' ? [w, w.replace(/^a (se |-și )?/, '')] : [w]).map(keyOf);
  const hit = candidates.map((c) => byWord.get(c)).find(Boolean);
  if (!hit) continue;
  const best = [...hit].sort((a, b) => (speakerCount.get(b.speaker) ?? 0) - (speakerCount.get(a.speaker) ?? 0))[0];
  wanted.push({ word: w, title: best.title });
}
console.log(`  ${wanted.length} de ${words.length} palavras têm gravação nativa`);

// metadados (URL, autor, licença) em lotes de 50
const meta = new Map();
for (let i = 0; i < wanted.length; i += 50) {
  const batch = wanted.slice(i, i + 50);
  const d = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url|extmetadata', iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl', titles: batch.map((b) => b.title).join('|') });
  for (const p of d.query.pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const em = ii.extmetadata ?? {};
    const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').trim();
    meta.set(p.title, { url: ii.url, page: ii.descriptionurl, author: strip(em.Artist?.value) || parseTitle(p.title)?.speaker, license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value) });
  }
  await sleep(300);
}

mkdirSync(OUT_DIR, { recursive: true });
const skipped = { semMeta: 0, licenca: new Set(), http: [] };

// ids fixos na ordem do vocabulário (só licenças livres), antes de baixar
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
  jobs.push({ word, title, m, id: prevId.get(word) ?? String(++lastId).padStart(4, '0') });
}

async function download(job) {
  const file = join(OUT_DIR, `${job.id}.mp3`);
  if (existsSync(file)) return true;
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    // queda de rede (timeout, conexão resetada) conta como tentativa falha, sem derrubar o script
    const res = await fetch(job.m.url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => ({ ok: false, status: 'rede' }));
    if (res.ok) {
      const tmp = join(OUT_DIR, `${job.id}.src`);
      const body = await res.arrayBuffer().catch(() => null);
      if (!body) {
        skipped.http.push('rede');
        continue;
      }
      writeFileSync(tmp, Buffer.from(body));
      // mono, 22 kHz, ~40 kbps, corta o silêncio do começo e do fim
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-af', 'silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.08,areverse,silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.08,areverse', '-ac', '1', '-ar', '22050', '-b:a', '40k', file]);
      execFileSync('rm', [tmp]);
      return true;
    }
    skipped.http.push(res.status);
    await sleep(3000 * (tentativa + 1));
  }
  return false;
}

// 3 downloads em paralelo (educado com os servidores da Wikimedia)
const ok = new Set();
let next = 0;
async function worker() {
  while (next < jobs.length) {
    const job = jobs[next++];
    if (await download(job)) ok.add(job.id);
    process.stdout.write(`\r  baixados: ${ok.size}/${jobs.length}`);
    await sleep(150);
  }
}
await Promise.all(Array.from({ length: Number(process.env.WORKERS ?? 3) }, worker));
console.log();
console.log('  pulados:', { semMeta: skipped.semMeta, licencas: [...skipped.licenca], httpTotal: skipped.http.length });
const entries = jobs
  .filter((j) => ok.has(j.id))
  .map((j) => ({ word: j.word, id: j.id, title: j.title.replace(/^File:/, ''), author: j.m.author, license: j.m.license, licenseUrl: j.m.licenseUrl, page: j.m.page }));

const esc = (s) => JSON.stringify(s ?? '');
const ts = `// Gerado por scripts/baixar-audios.mjs — não editar à mão.
// Gravações de falantes nativos do Lingua Libre (Wikimedia Commons), com autor e licença por arquivo.
import type { AudioClip } from '../types';

export const AUDIO_${lang.toUpperCase()}: Record<string, AudioClip> = {
${entries
  .map((e) => `  ${esc(e.word)}: { src: require('../../../assets/audio/${lang}/${e.id}.mp3'), file: ${esc(e.title)}, author: ${esc(e.author)}, license: ${esc(e.license)}, licenseUrl: ${esc(e.licenseUrl)}, page: ${esc(e.page)} },`)
  .join('\n')}
};
`;
writeFileSync(`src/data/${lang}/audios.ts`, ts);
console.log(`✅ ${entries.length} áudios em ${OUT_DIR} e src/data/${lang}/audios.ts`);
