// De onde é cada falante das gravações de nativos: cruza os falantes do Lingua Libre com o Wikidata
// (onde aprendeu a língua, se deu para achar; senão, onde mora) e grava src/data/falantes.ts, que o
// app usa para mostrar «🎙️ quem fala · de onde» quando toca uma gravação.
//
// Uso: node scripts/lugares-falantes.mjs es [ro ru …]   (atualiza só os idiomas pedidos)
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const LANGS = {
  ro: { wikidata: 'Q7913', search: 'ro' },
  ru: { wikidata: 'Q7737', search: 'ru' },
  es: { wikidata: 'Q1321', search: 'es' },
  it: { wikidata: 'Q652', search: 'it' },
  pt: { wikidata: 'Q5146', search: 'pt' },
  sv: { wikidata: 'Q9027', search: 'sv' },
  nb: { wikidata: 'Q9043', search: 'nb' },
  da: { wikidata: 'Q9035', search: 'da' },
  is: { wikidata: 'Q294', search: 'is' },
  fo: { wikidata: 'Q25258', search: 'fo' },
  fi: { wikidata: 'Q1412', search: 'fi' },
  et: { wikidata: 'Q9072', search: 'et' },
  lt: { wikidata: 'Q9083', search: 'lt' },
  fr: { wikidata: 'Q150', search: 'fr' },
};
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const OUT = 'src/data/falantes.ts';
const all = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8').match(/= (\{[\s\S]*\});/)[1]) : {};
let cfg;

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


for (const lang of process.argv.slice(2)) {
  cfg = LANGS[lang];
  if (!cfg) throw new Error(`idioma sem configuração: ${lang}`);
  const list = [...new Map((await speakers()).map((s) => [s.user, s])).values()];
  const out = {};
  for (const s of list) {
    const learnQ = /^Q\d+$/.test(s.learn ?? '');
    const learnId = s.learn ? (learnQ ? s.learn : await searchPlace(s.learn)) : null;
    const learn = learnId ? await resolve(learnId) : null;
    const home = s.residence ? await resolve(s.residence) : null;
    const where = learn?.iso3 ? learn : home;
    if (!where?.iso3) continue;
    const place = learn?.iso3 ? (learnQ ? learn.label : s.learn.trim()) : home.label;
    out[s.user] = { place, country: where.iso3 };
  }
  saveCache();
  all[lang] = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
  console.log(`${lang}: ${Object.keys(out).length} de ${list.length} falantes com lugar`);
}
writeFileSync(
  OUT,
  `// Gerado por scripts/lugares-falantes.mjs — não editar à mão.
// De onde é cada falante do Lingua Libre (onde aprendeu a língua ou, sem isso, onde mora), por idioma.
// country: ISO 3166-1 alfa-3.
export const FALANTES: Record<string, Record<string, { place: string; country: string }>> = ${JSON.stringify(all, null, 1)};
`,
);
