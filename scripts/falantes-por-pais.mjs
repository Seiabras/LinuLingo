// Lista os falantes do Lingua Libre de um idioma que moram num país (pela residência no Wikidata).
// Serve para o baixar-audios.mjs só usar gravações da norma certa (português de Portugal × do Brasil).
//
// Uso: node scripts/falantes-por-pais.mjs pt PRT   → scripts/.falantes-pt-PRT.json
import { writeFileSync } from 'node:fs';

const WIKIDATA_LANG = { pt: 'Q5146', sv: 'Q9027', nb: 'Q25167', nn: 'Q25164', da: 'Q9035', is: 'Q294', fo: 'Q25258', fi: 'Q1412', et: 'Q9072' };
const COUNTRY = { PRT: 'Q45', BRA: 'Q155', SWE: 'Q34', FIN: 'Q33', NOR: 'Q20', DNK: 'Q35', ISL: 'Q189', FRO: 'Q4628', EST: 'Q191' };
const [lang, iso3] = process.argv.slice(2);
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';

async function getJson(url, headers = {}) {
  for (let t = 0; t < 4; t++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json', ...headers }, signal: AbortSignal.timeout(90_000) }).catch(() => null);
    if (res?.ok) return res.json();
    await new Promise((r) => setTimeout(r, 2000 * (t + 1)));
  }
  throw new Error(`falha: ${url.slice(0, 120)}`);
}

// 1. falantes do idioma no Lingua Libre, com a residência (item do Wikidata)
const q = `SELECT DISTINCT ?user ?residence WHERE {
  ?lang <https://lingualibre.org/prop/direct/P12> "${WIKIDATA_LANG[lang]}" .
  ?record <https://lingualibre.org/prop/direct/P2> <https://lingualibre.org/entity/Q2> ;
          <https://lingualibre.org/prop/direct/P4> ?lang ;
          <https://lingualibre.org/prop/direct/P5> ?speaker .
  ?speaker <https://lingualibre.org/prop/direct/P11> ?user .
  OPTIONAL { ?speaker <https://lingualibre.org/prop/direct/P14> ?residence }
}`;
const d = await getJson(`https://lingualibre.org/bigdata/namespace/wdq/sparql?${new URLSearchParams({ query: q })}`, { Accept: 'application/sparql-results+json' });
const speakers = d.results.bindings.map((b) => ({ user: b.user.value, residence: b.residence?.value?.match(/Q\d+/)?.[0] ?? null }));

// 2. país de cada residência (P17 no Wikidata; a própria residência pode ser o país)
const ids = [...new Set(speakers.map((s) => s.residence).filter(Boolean))];
const country = new Map();
for (let i = 0; i < ids.length; i += 40) {
  const batch = ids.slice(i, i + 40);
  const r = await getJson(`https://www.wikidata.org/w/api.php?${new URLSearchParams({ action: 'wbgetentities', ids: batch.join('|'), props: 'claims', format: 'json' })}`);
  for (const id of batch) country.set(id, id === COUNTRY[iso3] ? COUNTRY[iso3] : r.entities?.[id]?.claims?.P17?.[0]?.mainsnak?.datavalue?.value?.id ?? null);
}
const users = speakers.filter((s) => s.residence && country.get(s.residence) === COUNTRY[iso3]).map((s) => s.user);
writeFileSync(`scripts/.falantes-${lang}-${iso3}.json`, JSON.stringify([...new Set(users)].sort(), null, 1));
console.log(`${new Set(users).size} de ${new Set(speakers.map((s) => s.user)).size} falantes de ${lang} moram em ${iso3}`);
