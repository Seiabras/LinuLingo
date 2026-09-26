// Baixa gravações de falantes nativos do Lingua Libre (Wikimedia Commons) para as
// palavras do vocabulário, converte para mp3 leve e gera o mapa + créditos.
//
// Uso: node scripts/baixar-audios.mjs ro     (precisa de ffmpeg)
//
// Licença: os arquivos do Lingua Libre são livres (em geral CC BY-SA 4.0); o autor e a
// licença de CADA arquivo ficam em src/data/<idioma>/audios.ts e aparecem na tela Créditos.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LANGS = {
  ro: { wikidata: 'Q7913', iso3: 'ron', category: 'Lingua_Libre_pronunciation-ron' },
  ru: { wikidata: 'Q7737', iso3: 'rus', category: 'Lingua_Libre_pronunciation-rus' },
};
const lang = process.argv[2] ?? 'ro';
const cfg = LANGS[lang];
if (!cfg) throw new Error(`idioma sem configuração: ${lang}`);

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'PoliglotaApp/0.1 (https://github.com/Seiabras/poliglota; app educativo)';
const OUT_DIR = `assets/audio/${lang}`;
const CACHE = `scripts/.cache-commons-${lang}.json`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`;
  for (let tentativa = 0; tentativa < 4; tentativa++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (res.ok) return res.json();
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

// palavras do vocabulário, lidas direto do arquivo de dados
const vocabSrc = readFileSync(`src/data/${lang}/vocabulario.ts`, 'utf8');
const words = [...vocabSrc.matchAll(/^\s*\['([^']+)'/gm)].map((m) => m[1]);

const titles = await allTitles();
const byWord = new Map();
for (const t of titles) {
  const p = parseTitle(t);
  if (!p) continue;
  const key = p.word.toLowerCase().replace(/ş/g, 'ș').replace(/ţ/g, 'ț');
  if (!byWord.has(key)) byWord.set(key, []);
  byWord.get(key).push({ title: t, speaker: p.speaker });
}

// quantas gravações cada falante tem: preferimos falantes mais ativos (qualidade mais constante)
const speakerCount = new Map();
for (const list of byWord.values()) for (const f of list) speakerCount.set(f.speaker, (speakerCount.get(f.speaker) ?? 0) + 1);

const wanted = [];
for (const w of words) {
  const candidates = [w, w.replace(/^a (se |-și )?/, '')].map((x) => x.toLowerCase());
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
  jobs.push({ word, title, m, id: String(jobs.length + 1).padStart(4, '0') });
}

async function download(job) {
  const file = join(OUT_DIR, `${job.id}.mp3`);
  if (existsSync(file)) return true;
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const res = await fetch(job.m.url, { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const tmp = join(OUT_DIR, `${job.id}.src`);
      writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
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
