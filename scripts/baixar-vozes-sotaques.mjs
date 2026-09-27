// Gravações de nativos de cada região para os sotaques: cruza os falantes do Lingua Libre com as
// regiões dos sotaques (src/data/<idioma>/sotaques.ts), baixa algumas palavras de cada um e gera
// src/data/<idioma>/vozes-sotaques.ts (com autor, licença e o lugar de cada falante).
//
// Uso: node scripts/baixar-vozes-sotaques.mjs es [--listar]   (precisa de ffmpeg)
//
// De onde vem o lugar: o Lingua Libre guarda onde a pessoa mora (item do Wikidata) e, às vezes, onde
// aprendeu a língua (texto livre). O sotaque se forma onde se aprende a língua: vale o lugar de
// aprendizado quando dá para achá-lo no Wikidata; senão, a residência. A região (ISO 3166-2) sai
// subindo a cadeia «localizado em» (P131) do Wikidata.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LANGS = {
  es: { wikidata: 'Q1321', iso3: 'spa', search: 'es' },
  ru: { wikidata: 'Q7737', iso3: 'rus', search: 'ru' },
  ro: { wikidata: 'Q7913', iso3: 'ron', search: 'ro' },
  it: { wikidata: 'Q652', iso3: 'ita', search: 'it' },
};
// «sotaques» que são outras línguas (napolitano, siciliano…): gravações de italiano de lá não os representam
const SKIP = /^it-(lingua-|friulano|talian)/;
const PER_ACCENT = 8;
const lang = process.argv[2] ?? 'es';
const listOnly = process.argv.includes('--listar');
const cfg = LANGS[lang];
if (!cfg) throw new Error(`idioma sem configuração: ${lang}`);
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url, opts = {}) {
  for (let t = 0; t < 4; t++) {
    const res = await fetch(url, { ...opts, headers: { 'User-Agent': UA, Accept: 'application/json', ...(opts.headers ?? {}) }, signal: AbortSignal.timeout(90_000) }).catch(() => null);
    if (res?.ok) return res.json();
    await sleep(2000 * (t + 1));
  }
  throw new Error(`falha: ${url.slice(0, 120)}`);
}

// 1. falantes do idioma: usuário, residência, lugar de aprendizado e quantas gravações
async function speakers() {
  const q = `SELECT ?user ?residence ?learn (COUNT(?record) AS ?n) WHERE {
    ?lang <https://lingualibre.org/prop/direct/P12> "${cfg.wikidata}" .
    ?record <https://lingualibre.org/prop/direct/P2> <https://lingualibre.org/entity/Q2> ;
            <https://lingualibre.org/prop/direct/P4> ?lang ;
            <https://lingualibre.org/prop/direct/P5> ?speaker .
    ?speaker <https://lingualibre.org/prop/direct/P11> ?user .
    OPTIONAL { ?speaker <https://lingualibre.org/prop/direct/P14> ?residence }
    OPTIONAL { ?speaker <https://lingualibre.org/prop/P4> ?st . ?st <https://lingualibre.org/prop/statement/P4> ?lang .
               ?st <https://lingualibre.org/prop/qualifier/P15> ?learn }
  } GROUP BY ?user ?residence ?learn`;
  const d = await getJson(`https://lingualibre.org/bigdata/namespace/wdq/sparql?${new URLSearchParams({ query: q })}`, { headers: { Accept: 'application/sparql-results+json' } });
  return d.results.bindings.map((b) => ({ user: b.user.value, residence: b.residence?.value?.match(/Q\d+/)?.[0] ?? null, learn: b.learn?.value ?? null, n: Number(b.n.value) }));
}

// 2. lugares no Wikidata (com cache): país (ISO 3166-1 alfa-3), regiões (ISO 3166-2) e nome em português
const CACHE = 'scripts/.cache-lugares.json';
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : { items: {}, search: {} };
const saveCache = () => writeFileSync(CACHE, JSON.stringify(cache));
const WD = 'https://www.wikidata.org/w/api.php';

async function items(ids) {
  const missing = [...new Set(ids)].filter((id) => id && !cache.items[id]);
  for (let i = 0; i < missing.length; i += 50) {
    const d = await getJson(`${WD}?${new URLSearchParams({ action: 'wbgetentities', ids: missing.slice(i, i + 50).join('|'), props: 'claims|labels', languages: 'pt|en', format: 'json' })}`);
    for (const [id, e] of Object.entries(d.entities ?? {})) {
      const claim = (p) => (e.claims?.[p] ?? []).map((c) => c.mainsnak?.datavalue?.value).filter(Boolean);
      cache.items[id] = {
        label: e.labels?.pt?.value ?? e.labels?.en?.value ?? id,
        iso3: claim('P298')[0] ?? null,
        iso2: claim('P300')[0] ?? null,
        country: claim('P17').map((v) => v.id)[0] ?? null,
        parents: claim('P131').map((v) => v.id),
      };
    }
    await sleep(200);
  }
}

/** País e regiões ISO de um item, subindo P131 (até 8 níveis). */
async function resolve(id) {
  const codes = new Set();
  let iso3 = null;
  let frontier = [id];
  for (let depth = 0; depth < 8 && frontier.length; depth++) {
    await items(frontier);
    const next = [];
    for (const f of frontier) {
      const it = cache.items[f];
      if (!it) continue;
      if (it.iso2) codes.add(it.iso2);
      if (it.iso3) iso3 ??= it.iso3;
      if (it.country && !iso3) {
        await items([it.country]);
        iso3 = cache.items[it.country]?.iso3 ?? null;
      }
      next.push(...it.parents);
    }
    frontier = [...new Set(next)].slice(0, 6);
  }
  return { iso3, codes: [...codes], label: cache.items[id]?.label ?? id };
}

/** O lugar de aprendizado é texto livre: procura no Wikidata e aceita o primeiro resultado com país. */
async function searchPlace(text) {
  const key = `${cfg.search}:${text}`;
  if (!(key in cache.search)) {
    const clean = text.split(/[,(/]/)[0].trim();
    const d = await getJson(`${WD}?${new URLSearchParams({ action: 'wbsearchentities', search: clean, language: cfg.search, uselang: 'pt', type: 'item', limit: '5', format: 'json' })}`);
    const ids = (d.search ?? []).map((s) => s.id);
    await items(ids);
    cache.search[key] = ids.find((id) => cache.items[id]?.country || cache.items[id]?.iso3) ?? null;
    await sleep(200);
  }
  return cache.search[key];
}

// um falante pode vir repetido (mais de um lugar de aprendizado): fica o primeiro
const list = [...new Map((await speakers()).map((s) => [s.user, s])).values()];
const places = [];
for (const s of list) {
  // às vezes o lugar de aprendizado já é um item do Wikidata (Q8851), às vezes texto livre
  const learnQ = /^Q\d+$/.test(s.learn ?? '');
  const learnId = s.learn ? (learnQ ? s.learn : await searchPlace(s.learn)) : null;
  const learn = learnId ? await resolve(learnId) : null;
  const home = s.residence ? await resolve(s.residence) : null;
  // onde aprendeu, se achou; senão onde mora
  const where = learn?.iso3 ? learn : home;
  // o nome do lugar: como a pessoa escreveu onde aprendeu, ou o do Wikidata para onde mora
  const label = learn?.iso3 ? (learnQ ? learn.label : s.learn.trim()) : home?.label;
  places.push({ ...s, where: where && { ...where, label }, home, learnPlace: learn });
}
saveCache();

// 3. sotaques do idioma e quem é de cada região
const accSrc = readFileSync(`src/data/${lang}/sotaques.ts`, 'utf8');
const accents = [...accSrc.matchAll(/id: '([^']+)',[\s\S]*?country: '([A-Z]{3})',(?:\s*subdivisions: \[([^\]]*)\],)?/g)].map((m) => ({
  id: m[1],
  country: m[2],
  subs: (m[3] ?? '').match(/'([^']+)'/g)?.map((x) => x.slice(1, -1)) ?? [],
}));
const matchOf = (a) =>
  places
    .filter((p) => p.where?.iso3 === a.country && (!a.subs.length || p.where.codes.some((c) => a.subs.includes(c))))
    .sort((x, y) => y.n - x.n);

for (const a of accents) {
  const m = SKIP.test(a.id) ? [] : matchOf(a);
  console.log(`${a.id.padEnd(24)} ${m.length ? m.map((p) => `${p.user} (${p.n}, ${p.where.label}${p.learnPlace?.iso3 ? ' · aprendeu' : ' · mora'})`).join('; ') : '—'}`);
}
if (listOnly) process.exit(0);

// 4. palavras de cada falante (dos títulos do Commons, já em cache pelo baixar-audios.mjs)
const titles = JSON.parse(readFileSync(`scripts/.cache-commons-${lang}.json`, 'utf8'));
const bySpeaker = new Map();
for (const t of titles) {
  const m = t.match(/^File:LL-Q\d+ \([a-z]{3}\)-([^-]+)-(.+)\.(wav|ogg|flac|mp3)$/i);
  if (!m) continue;
  if (!bySpeaker.has(m[1])) bySpeaker.set(m[1], new Map());
  bySpeaker.get(m[1]).set(m[2].normalize('NFC').toLowerCase().replace(/́/g, ''), t);
}
// palavras que mostram o sotaque (as típicas e as das frases de exemplo de cada um) e as mais comuns do vocabulário
const vocab = [...readFileSync(`src/data/${lang}/vocabulario.ts`, 'utf8').matchAll(/^\s*\[\s*'([^']+)'/gm)].map((m) => m[1].toLowerCase().replace(/́/g, ''));
const showcase = (id) => {
  const block = accSrc.slice(accSrc.indexOf(`id: '${id}'`));
  const end = block.indexOf("\n  {\n    id: '", 10);
  const body = end > 0 ? block.slice(0, end) : block;
  const words = [...body.matchAll(/\['([^'\]]+)',/g)].flatMap((m) => m[1].toLowerCase().replace(/́/g, '').split(/[^\p{L}]+/u)).filter((w) => w.length > 2);
  return [...new Set(words)];
};

const picks = [];
for (const a of accents) {
  if (SKIP.test(a.id)) continue;
  const speakersHere = matchOf(a).filter((p) => bySpeaker.has(p.user)).slice(0, 3);
  if (!speakersHere.length) continue;
  const wanted = [...showcase(a.id), ...vocab];
  const chosen = [];
  // alterna os falantes, uma palavra de cada vez, sem repetir palavra
  for (let round = 0; chosen.length < PER_ACCENT && round < 400; round++) {
    const sp = speakersHere[round % speakersHere.length];
    const map = bySpeaker.get(sp.user);
    const w = wanted.find((x) => map.has(x) && !chosen.some((c) => c.word === x));
    if (w) chosen.push({ accent: a.id, word: w, title: map.get(w), speaker: sp });
    if (round > speakersHere.length * 60) break;
  }
  picks.push(...chosen);
}

// a mesma palavra em vários sotaques: as palavras comuns gravadas por gente do maior número de regiões
const firstOf = new Map(
  accents
    .filter((a) => !SKIP.test(a.id))
    .map((a) => [a.id, matchOf(a).filter((p) => bySpeaker.has(p.user))])
    .filter(([, l]) => l.length),
);
const coverage = vocab.map((w) => ({ w, accs: [...firstOf].filter(([, l]) => l.some((p) => bySpeaker.get(p.user).has(w))).map(([id]) => id) }));
const compareWords = coverage
  .filter((c) => c.accs.length >= 2 && c.w.length >= 3)
  .sort((a, b) => b.accs.length - a.accs.length)
  .slice(0, 6);
const comparePicks = compareWords.flatMap(({ w, accs }) =>
  accs.map((id) => {
    const sp = firstOf.get(id).find((p) => bySpeaker.get(p.user).has(w));
    return { accent: id, word: w, title: bySpeaker.get(sp.user).get(w), speaker: sp, compare: true };
  }),
);
for (const c of comparePicks) if (!picks.some((p) => p.accent === c.accent && p.word === c.word)) picks.push(c);
console.log(`  comparar: ${compareWords.map((c) => `${c.w} (${c.accs.length})`).join(', ')}`);

// 5. metadados e download (mp3 leve), como no baixar-audios.mjs
const meta = new Map();
for (let i = 0; i < picks.length; i += 50) {
  const batch = picks.slice(i, i + 50);
  const d = await getJson(`https://commons.wikimedia.org/w/api.php?${new URLSearchParams({ action: 'query', prop: 'imageinfo', iiprop: 'url|extmetadata', iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl', titles: batch.map((b) => b.title).join('|'), format: 'json', formatversion: '2' })}`);
  for (const p of d.query.pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const em = ii.extmetadata ?? {};
    const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').trim();
    meta.set(p.title, { url: ii.url, page: ii.descriptionurl, author: strip(em.Artist?.value), license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value) });
  }
  await sleep(300);
}
const perAccent = new Map();
for (const p of picks) perAccent.set(p.accent, (perAccent.get(p.accent) ?? 0) + 1);
console.log(`  escolhidas: ${picks.length} (${[...perAccent].map(([a, n]) => `${a} ${n}`).join(', ')}); com metadados: ${meta.size}`);
const OUT = `assets/audio/${lang}/sotaques`;
mkdirSync(OUT, { recursive: true });
const entries = [];
for (const p of picks) {
  const m = meta.get(p.title);
  if (!m || !/^CC|public domain|CC0/i.test(m.license)) continue;
  const id = `${p.accent}-${p.word}`.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}-]+/gu, '_');
  const file = join(OUT, `${id}.mp3`);
  if (!existsSync(file)) {
    let res = null;
    for (let t = 0; t < 4 && !res?.ok; t++) {
      if (t) await sleep(3000 * t);
      res = await fetch(m.url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    }
    if (!res?.ok) {
      console.log(`\n  falhou (${res?.status ?? 'rede'}): ${p.title}`);
      continue;
    }
    const tmp = `${file}.src`;
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-af', 'silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.08,areverse,silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.08,areverse', '-ac', '1', '-ar', '22050', '-b:a', '40k', file]);
    execFileSync('rm', [tmp]);
    await sleep(150);
  }
  const place = p.speaker.where.label;
  entries.push({
    accent: p.accent,
    word: p.word,
    id,
    speaker: p.speaker.user,
    place,
    how: p.speaker.learnPlace?.iso3 ? 'aprendeu' : 'mora',
    compare: compareWords.some((c) => c.w === p.word),
    title: p.title.replace(/^File:/, ''),
    ...m,
  });
  process.stdout.write(`\r  baixados: ${entries.length}/${picks.length}`);
}
console.log();

const esc = (s) => JSON.stringify(s ?? '');
const byAccent = new Map();
for (const e of entries) byAccent.set(e.accent, [...(byAccent.get(e.accent) ?? []), e]);
const ts = `// Gerado por scripts/baixar-vozes-sotaques.mjs — não editar à mão.
// Gravações de nativos de cada região (Lingua Libre, Wikimedia Commons), com autor, licença e o lugar
// do falante: onde aprendeu a língua (quando informado) ou onde mora.
import type { AccentVoice } from '../types';

export const VOZES_SOTAQUES_${lang.toUpperCase()}: Record<string, AccentVoice[]> = {
${[...byAccent]
  .map(
    ([acc, list]) =>
      `  ${esc(acc)}: [\n${list
        .map(
          (e) =>
            `    { word: ${esc(e.word)}, speaker: ${esc(e.speaker)}, place: ${esc(e.place)}, how: ${esc(e.how)}, src: require('../../../assets/audio/${lang}/sotaques/${e.id}.mp3'), file: ${esc(e.title)}, author: ${esc(e.author || e.speaker)}, license: ${esc(e.license)}, licenseUrl: ${esc(e.licenseUrl)}, page: ${esc(e.page)} },`,
        )
        .join('\n')}\n  ],`,
  )
  .join('\n')}
};

/** Palavras gravadas por gente de vários sotaques: para ouvir a mesma palavra lado a lado. */
export const COMPARAR_SOTAQUES_${lang.toUpperCase()}: string[] = ${JSON.stringify([...new Set(entries.filter((e) => e.compare).map((e) => e.word))])};
`;
writeFileSync(`src/data/${lang}/vozes-sotaques.ts`, ts);
console.log(`✅ ${entries.length} gravações de ${byAccent.size} sotaques em ${OUT} e src/data/${lang}/vozes-sotaques.ts`);
