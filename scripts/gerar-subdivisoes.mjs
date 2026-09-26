// Gera os contornos das subdivisões (estados, províncias, condados…) de cada país:
//  - assets/geo/<ISO3>.geo   : um arquivo por país, carregado só quando o mapa aproxima nele
//  - src/data/subdivisoes-geo.ts : índice (require de cada arquivo) para o app
// Fonte: Natural Earth 1:10m admin-1 (domínio público), na mesma projeção e unidades de mapa-mundi.ts.
// Uso: node scripts/gerar-subdivisoes.mjs [caminho do ne_10m_admin_1_states_provinces.geojson]
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { simplifyRing, toSvg } from './projecao.mjs';

const NE_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson';
const ISO_DIR = '/usr/share/iso-codes/json';

const iso1 = JSON.parse(readFileSync(`${ISO_DIR}/iso_3166-1.json`, 'utf8'))['3166-1'];
const iso2 = JSON.parse(readFileSync(`${ISO_DIR}/iso_3166-2.json`, 'utf8'))['3166-2'];
const isoSub = new Map(iso2.map((s) => [s.code, s]));
const key = (s) =>
  s
    .normalize('NFKD')
    .replace(/[^\p{L}]/gu, '')
    .toLowerCase();
const byName = {}; // alfa-2 → nome normalizado → código ISO
for (const s of iso2) (byName[s.code.split('-')[0]] ??= {})[key(s.name)] = s.code;
const a2to3 = Object.fromEntries(iso1.map((c) => [c.alpha_2, c.alpha_3]));
a2to3.XK = 'XKX';

const geo = process.argv[2] ? JSON.parse(readFileSync(process.argv[2], 'utf8')) : await (await fetch(NE_URL)).json();

// territórios ISO que o Natural Earth lista dentro de outro país
const BY_CODE = { 'FR-GF': 'GUF', 'FR-GP': 'GLP', 'FR-MQ': 'MTQ', 'FR-RE': 'REU', 'FR-YT': 'MYT', 'NO-21': 'SJM', 'NO-X01~': 'BVT' };
// unidades sem código ISO próprio: mesmas regras do mapa-múndi
const BY_UNIT = { CYN: 'CYP', SOL: 'SOM', KAB: 'KAZ' };
// áreas com nota factual (o nome do Natural Earth vem em inglês)
const NOTES = {
  CYN: ['Norte de Chipre', 'Administrado desde 1974 por uma autoridade reconhecida apenas pela Turquia; internacionalmente considerado parte de Chipre.'],
  SOL: ['Somalilândia', 'Declarou independência em 1991 e se governa de forma autônoma; não é reconhecida como Estado pela ONU.'],
  KAB: ['Baikonur', 'Área do Cazaquistão arrendada à Rússia por causa do cosmódromo.'],
};

// Kosovo: albanês e sérvio são as duas línguas oficiais dos municípios; o Natural Earth só traz a forma sérvia
const KOSOVO_SQ = {
  Dečani: 'Deçan',
  Đakovica: 'Gjakovë',
  Dragaš: 'Dragash',
  Prizren: 'Prizren',
  Gnjilane: 'Gjilan',
  Vitina: 'Viti',
  Kačanik: 'Kaçanik',
  Štrpce: 'Shtërpcë',
  Leposavić: 'Leposaviq',
  Podujevo: 'Podujevë',
  'Zubin Potok': 'Zubin Potok',
  Zvečan: 'Zveçan',
  Istok: 'Istog',
  Priština: 'Prishtinë',
  'Kosovska Kamenica': 'Kamenicë',
  Peć: 'Pejë',
  Orahovac: 'Rahovec',
  Srbica: 'Skenderaj',
  Klina: 'Klinë',
  'Kosovska Mitrovica': 'Mitrovicë',
  Glogovac: 'Drenas',
  Mališevo: 'Malishevë',
  'Suva Reka': 'Suharekë',
  Uroševac: 'Ferizaj',
  'Novo Brdo': 'Novobërdë',
  Obilić: 'Obiliq',
  'Kosovo Polje': 'Fushë Kosovë',
  Lipljan: 'Lipjan',
  Štimlje: 'Shtime',
  Vučitrn: 'Vushtrri',
};
const kosovoName = (sr) => (KOSOVO_SQ[sr] && KOSOVO_SQ[sr] !== sr ? `${KOSOVO_SQ[sr]} / ${sr}` : sr);
// fora, como no mapa-múndi: ilhas disputadas (Paracel) e a zona-tampão da ONU no Golã; a Antártida não é desenhada
const SKIP = new Set(['CN-X01~', 'SY-X01~']);

// divisões antigas que o Natural Earth ainda desenha, dentro da unidade ISO atual que as reuniu
const MERGED = {
  NO: {
    Troms: 'NO-54',
    Finnmark: 'NO-54',
    'Nord-Trøndelag': 'NO-50',
    'Sør-Trøndelag': 'NO-50',
    Hedmark: 'NO-34',
    Oppland: 'NO-34',
    Akershus: 'NO-30',
    Østfold: 'NO-30',
    Buskerud: 'NO-30',
    Vestfold: 'NO-38',
    Telemark: 'NO-38',
    'Aust-Agder': 'NO-42',
    'Vest-Agder': 'NO-42',
    Hordaland: 'NO-46',
    'Sogn og Fjordane': 'NO-46',
  },
};
/** Código ISO 3166-2 da feição: o do Natural Earth, se ainda vale; senão, pelo nome (único e sem ambiguidade). */
function isoCode(a2, code, name) {
  if (isoSub.has(code)) return code;
  const names = byName[a2] ?? {};
  const k = key(name ?? '');
  if (k.length < 4) return '';
  if (names[k]) return names[k];
  const pref = Object.entries(names).filter(([n]) => n.length >= 4 && (n.startsWith(k) || k.startsWith(n)));
  return pref.length === 1 ? pref[0][1] : '';
}

const byCountry = new Map();
let skipped = 0;
for (const f of geo.features) {
  const p = f.properties;
  const code = p.iso_3166_2;
  let iso = BY_CODE[code] ?? BY_UNIT[p.adm0_a3] ?? a2to3[p.iso_a2];
  if (p.iso_a2 === 'NL' && /^NL-BQ/.test(code)) iso = 'BES';
  if (p.adm0_a3 === 'IOA') iso = p.name.startsWith('Cocos') ? 'CCK' : 'CXR';
  // sem país ISO (Caxemira, Spratly, bases militares…) fica de fora, como no mapa-múndi
  if (!iso || SKIP.has(code) || iso === 'ATA') {
    skipped++;
    continue;
  }
  if (!byCountry.has(iso)) byCountry.set(iso, []);
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  const note = NOTES[p.adm0_a3];
  byCountry.get(iso).push({
    code: isoCode(p.iso_a2, code, p.name),
    merged: MERGED[p.iso_a2]?.[p.name],
    name: note?.[0] ?? (iso === 'XKX' ? kosovoName(p.name) : (p.name ?? p.gn_name ?? '?')),
    note: note?.[1],
    rings: polys.flatMap((poly) => poly.map((ring, ri) => ({ outer: ri === 0, pts: ring.map(toSvg) }))),
  });
}

rmSync('assets/geo', { recursive: true, force: true });
mkdirSync('assets/geo', { recursive: true });
const index = [];
let bytes = 0;
for (const [iso, subs] of [...byCountry].sort()) {
  let [x0, x1, y0, y1] = [Infinity, -Infinity, Infinity, -Infinity];
  for (const s of subs)
    for (const r of s.rings) for (const [x, y] of r.pts) [x0, x1, y0, y1] = [Math.min(x0, x), Math.max(x1, x), Math.min(y0, y), Math.max(y1, y)];
  const diag = Math.hypot(x1 - x0, y1 - y0);
  // tolerância proporcional ao país: ~1/900 do tamanho dele (fica bom de perto e leve de longe)
  const tol = Math.max(0.0015, diag / 900);
  const dec = tol < 0.01 ? 3 : tol < 0.1 ? 2 : 1;
  const rd = (n) => +n.toFixed(dec);
  const out = [];
  for (const s of subs) {
    let d = '';
    let best = { a: 0, cx: 0, cy: 0 };
    let total = 0;
    for (const { outer, pts } of s.rings) {
      const q = simplifyRing(pts, tol);
      if (q.length < 4) continue;
      // caminho relativo (m/l minúsculos): arquivo bem menor
      let px = rd(q[0][0]);
      let py = rd(q[0][1]);
      let seg = `M${px} ${py}l`;
      const parts = [];
      for (let k = 1; k < q.length - 1; k++) {
        const nx = rd(q[k][0]);
        const ny = rd(q[k][1]);
        parts.push(`${rd(nx - px)} ${rd(ny - py)}`);
        px = nx;
        py = ny;
      }
      d += seg + parts.join(' ') + 'z';
      if (!outer) continue;
      let a = 0;
      let cx = 0;
      let cy = 0;
      for (let k = 0; k < q.length - 1; k++) {
        const cr = q[k][0] * q[k + 1][1] - q[k + 1][0] * q[k][1];
        a += cr;
        cx += (q[k][0] + q[k + 1][0]) * cr;
        cy += (q[k][1] + q[k + 1][1]) * cr;
      }
      a /= 2;
      total += Math.abs(a);
      if (Math.abs(a) > best.a) best = { a: Math.abs(a), cx: cx / (6 * a), cy: cy / (6 * a) };
    }
    if (!d) continue;
    // [código ISO 3166-2 (ou ''), nome do Natural Earth, d, cx, cy, área, unidade ISO acima (ou ''), nota?]
    // unidade ISO maior que contém esta (distrito → província, condado antigo → atual)
    const parent = s.code
      ? isoSub.get(s.code).parent
        ? `${s.code.split('-')[0]}-${isoSub.get(s.code).parent.replace(/^[A-Z]{2}-/, '')}`
        : ''
      : (s.merged ?? '');
    out.push([s.code, s.name, d, rd(best.cx), rd(best.cy), +total.toPrecision(3), parent, ...(s.note ? [s.note] : [])]);
  }
  if (!out.length) continue;
  const json = JSON.stringify(out);
  bytes += json.length;
  writeFileSync(`assets/geo/${iso}.geo`, json);
  index.push(`  ${iso}: require('../../assets/geo/${iso}.geo'),`);
}

writeFileSync(
  'src/data/subdivisoes-geo.ts',
  `// Gerado por scripts/gerar-subdivisoes.mjs — não editar à mão.
// Contornos das subdivisões por país (Natural Earth 1:10m admin-1, domínio público), um arquivo por país.
// Cada require vira um asset: o conteúdo só é baixado quando o mapa aproxima no país.
/* eslint-disable @typescript-eslint/no-require-imports */
export const SUBDIV_FILES: Record<string, number> = {
${index.join('\n')}
};
`,
);
console.log(`✅ ${index.length} países, ${(bytes / 1024 / 1024).toFixed(1)} MB no total (${skipped} áreas sem país ISO de fora)`);
