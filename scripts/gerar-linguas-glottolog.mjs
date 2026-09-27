// Todas as línguas de cada país e de cada região: Glottolog (Hammarström, Forkel, Haspelmath & Bank,
// Max Planck — CC BY 4.0), com os nomes em português do Wikidata (CC0) quando existem.
// - países: a coluna Countries do Glottolog (ISO 3166-1 alfa-2 → alfa-3 do mapa);
// - região: o ponto (latitude/longitude) da língua cai numa subdivisão ISO 3166-2 do país
//   (os mesmos contornos de assets/geo/<ISO3>.geo);
// - grau de risco (AES do Glottolog): de «não ameaçada» a «extinta».
// Gera src/data/linguas-glottolog.ts, que o mapa carrega sob demanda.
//
// Uso: node scripts/gerar-linguas-glottolog.mjs   (baixa os dados na 1ª vez; cache em scripts/.cache-glottolog/)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { toSvg } from './projecao.mjs';

const CACHE = 'scripts/.cache-glottolog';
mkdirSync(CACHE, { recursive: true });
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';

async function cached(name, url, opts = {}) {
  const f = `${CACHE}/${name}`;
  if (!existsSync(f)) {
    const res = await fetch(url, { ...opts, headers: { 'User-Agent': UA, ...(opts.headers ?? {}) } });
    if (!res.ok) throw new Error(`falha ${res.status}: ${url}`);
    writeFileSync(f, await res.text());
  }
  return readFileSync(f, 'utf8');
}

/** CSV simples com aspas. */
function csv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') (cell += '"'), i++;
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') row.push(cell), (cell = '');
    else if (c === '\n') row.push(cell), rows.push(row), (row = []), (cell = '');
    else if (c !== '\r') cell += c;
  }
  if (cell || row.length) row.push(cell), rows.push(row);
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

const BASE = 'https://raw.githubusercontent.com/glottolog/glottolog-cldf/master/cldf';
const languoids = csv(await cached('languages.csv', `${BASE}/languages.csv`));
const values = csv(await cached('values.csv', `${BASE}/values.csv`));
const ptNames = csv(
  await cached(
    'nomes-pt.csv',
    `https://query.wikidata.org/sparql?${new URLSearchParams({ query: 'SELECT ?g ?pt WHERE { ?l wdt:P1394 ?g . ?l rdfs:label ?pt FILTER(lang(?pt)="pt") }' })}`,
    { headers: { Accept: 'text/csv' } },
  ),
);

const PT = new Map();
for (const { g, pt } of ptNames) {
  if (PT.has(g)) continue;
  // «Língua luvita» → «Luvita»; minúscula inicial do Wikidata → maiúscula
  const n = pt.replace(/^[Ll]íngua (?=[a-zà-ü])/, '').replace(/ \(língua\)$/, '');
  PT.set(g, n.charAt(0).toUpperCase() + n.slice(1));
}
const V = new Map();
for (const v of values) {
  if (v.Parameter_ID !== 'category' && v.Parameter_ID !== 'aes') continue;
  if (!V.has(v.Language_ID)) V.set(v.Language_ID, {});
  V.get(v.Language_ID)[v.Parameter_ID] = v.Value;
}
const byId = new Map(languoids.map((l) => [l.ID, l]));

// famílias em português (as maiores; as outras ficam com o nome do Glottolog)
const FAMILY_PT = {
  'Indo-European': 'Indo-europeu', 'Sino-Tibetan': 'Sino-tibetano', 'Afro-Asiatic': 'Afro-asiático', 'Atlantic-Congo': 'Níger-Congo',
  Austronesian: 'Austronésio', Turkic: 'Túrquico', Dravidian: 'Dravídico', Austroasiatic: 'Austro-asiático', 'Tai-Kadai': 'Tai', Uralic: 'Urálico',
  'Nuclear Trans New Guinea': 'Trans-Nova Guiné', 'Pama-Nyungan': 'Pama-nyungan', Otomanguean: 'Oto-mangue', 'Uto-Aztecan': 'Uto-asteca', Mayan: 'Maia',
  Arawakan: 'Aruaque', Tupian: 'Tupi', Quechuan: 'Quíchua', Aymaran: 'Aimará', Cariban: 'Caribe', Nilotic: 'Nilótico', 'Central Sudanic': 'Sudânico central',
  Mande: 'Mandê', Algic: 'Álgico', 'Eskimo-Aleut': 'Esquimó-aleúte', 'Athabaskan-Eyak-Tlingit': 'Na-dené', Salishan: 'Salish', Siouan: 'Siú', Japonic: 'Japônico',
  Koreanic: 'Coreânico', 'Mongolic-Khitan': 'Mongólico', Tungusic: 'Tungúsico', Kartvelian: 'Cartveliano', 'Nakh-Daghestanian': 'Nakh-daguestaniano',
  'Abkhaz-Adyge': 'Abcásio-adigue', 'Hmong-Mien': 'Hmong-mien', 'Khoe-Kwadi': 'Khoe-kwadi', Chibchan: 'Chibcha', Tucanoan: 'Tucano', 'Pano-Tacanan': 'Pano-tacana',
  'Nuclear-Macro-Je': 'Macro-jê', Tacanan: 'Tacana', Chocoan: 'Chocó', 'Mixe-Zoque': 'Mixe-zoque', Totonacan: 'Totonaca', Iroquoian: 'Iroquês', Muskogean: 'Muskogi',
  Yeniseian: 'Ienisseiano', 'Chukotko-Kamchatkan': 'Chukotko-kamchatkano', 'Dogon': 'Dogon', Songhay: 'Songai', 'Saharan': 'Saariano', Tuu: 'Tuu', 'Kxa': 'Kxa',
  'Sign Language': 'Língua de sinais', 'Mixed Language': 'Língua mista', Pidgin: 'Pidgin', 'Afroasiatic': 'Afro-asiático', 'Surmic': 'Surmico',
  'Ta-Ne-Omotic': 'Omótico', 'Eastern Jebel': 'Jebel oriental', 'Kadugli-Krongo': 'Kadugli-krongo', Heiltsuk: 'Heiltsuk', Nadahup: 'Nadahup', Yanomamic: 'Ianomâmi',
  Jivaroan: 'Jivaro', 'Harakmbut': 'Harakmbut', Guaicuruan: 'Guaicuru', Matacoan: 'Mataco', Zamucoan: 'Zamuco', Mascoian: 'Mascoi', Bororoan: 'Bororo',
  Nambiquaran: 'Nambiquara', Katukinan: 'Catuquina', Arawan: 'Arauá', Boran: 'Bora', Witotoan: 'Uitoto', 'Peba-Yagua': 'Peba-yagua', Barbacoan: 'Barbacoa',
};
const CATEGORY_FAMILY = { Sign_Language: 'Língua de sinais', Pidgin: 'Pidgin', Mixed_Language: 'Língua mista' };
const KEEP = new Set(['Spoken_L1_Language', 'Sign_Language', 'Pidgin', 'Mixed_Language', 'Unclassifiable']);

// ISO 639-3 → código do CLDR (639-1 quando existe), para casar com as línguas que o mapa já tem
const isoFile = ['/usr/share/iso-codes/json/iso_639-3.json', 'node_modules/iso-codes/data/iso_639-3.json'].find(existsSync);
const TO_CLDR = new Map(JSON.parse(readFileSync(isoFile, 'utf8'))['639-3'].map((l) => [l.alpha_3, l.alpha_2 ?? l.alpha_3]));

// países: alfa-2 → alfa-3 (o mapa usa alfa-3)
const world = readFileSync('src/data/mapa-mundi.ts', 'utf8');
const A2 = new Map([...world.matchAll(/"iso":"([A-Z]{3})","iso2":"([A-Z]{2})"/g)].map((m) => [m[2], m[1]]));
const NAME3 = new Map([...world.matchAll(/"iso":"([A-Z]{3})","iso2":"[A-Z]{2}","name":"([^"]+)"/g)].map((m) => [m[1], m[2]]));

// contornos das subdivisões (coordenadas do mapa) para saber em que região cai cada língua
const subs = new Map();
function subdivisions(iso3) {
  if (subs.has(iso3)) return subs.get(iso3);
  const f = `assets/geo/${iso3}.geo`;
  const list = existsSync(f)
    ? JSON.parse(readFileSync(f, 'utf8'))
        .filter((s) => s[0])
        .map(([code, , d]) => ({ code, rings: parseRings(d) }))
    : [];
  subs.set(iso3, list);
  return list;
}
function parseRings(d) {
  const rings = [];
  for (const part of d.split('z').filter(Boolean)) {
    const m = part.match(/M([-\d.]+) ([-\d.]+)l?(.*)/);
    if (!m) continue;
    let x = +m[1];
    let y = +m[2];
    const pts = [[x, y]];
    const nums = m[3].trim().split(/[\s,]+/).filter(Boolean).map(Number);
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([(x += nums[i]), (y += nums[i + 1])]);
    rings.push(pts);
  }
  return rings;
}
function inside([x, y], pts) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i];
    const [xj, yj] = pts[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function regionOf(iso3, lat, lon) {
  if (!lat || !lon) return '';
  const p = toSvg([+lon, +lat]);
  for (const s of subdivisions(iso3)) {
    let n = 0;
    for (const r of s.rings) if (inside(p, r)) n++;
    if (n % 2 === 1) return s.code;
  }
  return '';
}

const STATUS = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
const rows = [];
let withRegion = 0;
for (const l of languoids) {
  if (l.Level !== 'language' || !l.Countries) continue;
  const v = V.get(l.ID) ?? {};
  if (!KEEP.has(v.category)) continue;
  const fam = l.Family_ID ? byId.get(l.Family_ID)?.Name : null;
  const family = CATEGORY_FAMILY[v.category] ?? (fam ? (FAMILY_PT[fam] ?? fam) : l.Is_Isolate === 'True' ? 'Língua isolada' : 'Não classificada');
  const countries = l.Countries.split(';')
    .map((c) => A2.get(c.trim()))
    .filter(Boolean);
  if (!countries.length) continue;
  // a região vale só no país onde fica o ponto da língua
  const spec = countries
    .map((c) => {
      // língua de sinais é do país inteiro: o ponto do Glottolog não diz a região
      const reg = v.category === 'Sign_Language' ? '' : regionOf(c, l.Latitude, l.Longitude);
      if (reg) withRegion++;
      return reg ? `${c}>${reg}` : c;
    })
    .join(' ');
  const code = l.ISO639P3code ? TO_CLDR.get(l.ISO639P3code) ?? l.ISO639P3code : l.Glottocode;
  const status = v.aes ? STATUS[v.aes] : -1;
  // sem nome em português: «Dominican Sign Language» → «Língua de sinais (República Dominicana)»
  let name = PT.get(l.Glottocode) ?? l.Name;
  if (!PT.has(l.Glottocode) && / Sign Language$/.test(l.Name))
    name = `Língua de sinais (${countries.length === 1 ? NAME3.get(countries[0]) ?? l.Name.replace(/ Sign Language$/, '') : l.Name.replace(/ Sign Language$/, '')})`;
  rows.push([code, name, family, status, spec, l.Glottocode]);
}
rows.sort((a, b) => a[1].localeCompare(b[1], 'pt'));

writeFileSync(
  'src/data/linguas-glottolog.ts',
  `// Gerado por scripts/gerar-linguas-glottolog.mjs — não editar à mão.
// Línguas do mundo por país e região: Glottolog 5 (Hammarström, Forkel, Haspelmath & Bank; Max Planck
// Institute for Evolutionary Anthropology; CC BY 4.0), nomes em português do Wikidata (CC0).

/** [código (ISO 639-1/639-3 ou glottocode), nome, família, risco (0 = não ameaçada … 5 = extinta; -1 = sem dado),
 *  "ISO3 ISO3>ISO 3166-2…" (a região é onde o Glottolog põe a língua), glottocode] */
export type GlottologRow = [string, string, string, number, string, string];

export const GLOTTOLOG_ROWS: GlottologRow[] = [
${rows.map((r) => `  ${JSON.stringify(r)},`).join('\n')}
];
`,
);
console.log(`${rows.length} línguas; ${withRegion} com região; ${PT.size} nomes em português`);
