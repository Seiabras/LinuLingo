// Gera o mapa-múndi e as listas ISO do app:
//  - src/data/mapa-mundi.ts  : os 249 países e territórios da ISO 3166-1 (+ Kosovo, código provisório XK)
//                              com contornos do Natural Earth 1:50m (domínio público), projeção Natural Earth I
//  - src/data/iso-3166-2.ts  : as subdivisões ISO 3166-2 (5.046), por país
// Nomes em português do Brasil: traduções do projeto iso-codes (Debian, LGPL-2.1), via gettext.
// Requer o pacote iso-codes instalado (Arch: iso-codes; Debian/Ubuntu: iso-codes).
// Uso: node scripts/gerar-mapa.mjs
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const ISO_DIR = '/usr/share/iso-codes/json';
const NE_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson';

const iso1 = JSON.parse(readFileSync(`${ISO_DIR}/iso_3166-1.json`, 'utf8'))['3166-1'];
const iso2 = JSON.parse(readFileSync(`${ISO_DIR}/iso_3166-2.json`, 'utf8'))['3166-2'];

// Traduções pt_BR com gettext (python, que já vem com o sistema)
function translate(domain, names) {
  const py = `import gettext,json,sys
t=gettext.translation(sys.argv[1],languages=['pt_BR'],fallback=True)
print(json.dumps([t.gettext(n) for n in json.load(sys.stdin)],ensure_ascii=False))`;
  return JSON.parse(execFileSync('python3', ['-c', py, domain], { input: JSON.stringify(names), maxBuffer: 64 << 20 }).toString());
}
// nomes usuais no Brasil onde a tradução traz a forma oficial ou a de Portugal
const USUAL = {
  RUS: 'Rússia', IRN: 'Irã', CZE: 'Tchéquia', COD: 'República Democrática do Congo', PSE: 'Palestina',
  FSM: 'Micronésia', VAT: 'Vaticano', KOR: 'Coreia do Sul', PRK: 'Coreia do Norte', SYR: 'Síria', LAO: 'Laos',
  AZE: 'Azerbaijão', MDA: 'Moldávia', TZA: 'Tanzânia', BOL: 'Bolívia', VEN: 'Venezuela', TWN: 'Taiwan', VNM: 'Vietnã',
};
const namesPt = translate('iso_3166-1', iso1.map((c) => c.common_name ?? c.name)).map((n, i) => USUAL[iso1[i].alpha_3] ?? n);
const subNamesPt = translate('iso_3166-2', iso2.map((s) => s.name));

// ---------- projeção ----------
function project(lon, lat) {
  const l = (lon * Math.PI) / 180;
  const p = (lat * Math.PI) / 180;
  const p2 = p * p;
  const p4 = p2 * p2;
  return [
    l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
    p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
  ];
}
const X_MAX = project(180, 0)[0];
const Y_MAX = project(0, 84)[1];
const Y_MIN = project(0, -58)[1];
const W = 1000;
const S = W / (2 * X_MAX);
const H = Math.round((Y_MAX - Y_MIN) * S);
const toSvg = ([lon, lat]) => {
  const [x, y] = project(lon, lat);
  return [(x + X_MAX) * S, (Y_MAX - y) * S];
};

// Anel fechado (1º ponto = último): divide no ponto mais distante do início e simplifica as duas metades
function simplifyRing(pts, tol) {
  if (pts.length < 5) return pts;
  let k = 1;
  let best = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]);
    if (d > best) {
      best = d;
      k = i;
    }
  }
  return [...simplify(pts.slice(0, k + 1), tol).slice(0, -1), ...simplify(pts.slice(k), tol)];
}

// Douglas–Peucker: tira pontos que não mudam o desenho (arquivo leve)
function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a];
    const [bx, by] = pts[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    let far = -1;
    let dmax = tol;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
      if (d > dmax) {
        dmax = d;
        far = i;
      }
    }
    if (far >= 0) {
      keep[far] = 1;
      stack.push([a, far], [far, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

const r1 = (n) => Math.round(n * 10) / 10;

// ---------- contornos ----------
const geo = await (await fetch(NE_URL)).json();

// territórios que o Natural Earth desenha dentro de outro país, separados pela posição
const SPLITS = {
  FRA: [
    ['GUF', (lo, la) => lo < -50 && lo > -55 && la > 1 && la < 6.5],
    ['GLP', (lo, la) => lo > -62 && lo < -60.9 && la > 15.8 && la < 16.6],
    ['MTQ', (lo, la) => lo > -61.3 && lo < -60.7 && la > 14.3 && la < 14.95],
    ['REU', (lo, la) => lo > 55 && lo < 56 && la > -21.5 && la < -20.8],
    ['MYT', (lo, la) => lo > 44.9 && lo < 45.4 && la > -13.1 && la < -12.5],
  ],
  NOR: [['SJM', (lo, la) => la > 74 || (lo < -7 && lo > -9.5 && la > 70.6 && la < 71.3)]],
  NLD: [['BES', (lo) => lo < -60]],
  IOA: [
    ['CXR', (lo) => lo > 100],
    ['CCK', (lo) => lo < 100],
  ],
};
// unidades do Natural Earth sem código ISO próprio → juntadas ao país ISO
const MERGE = { CYN: 'CYP', SOL: 'SOM', ATC: 'AUS' };
const NEUTRAL = new Set(['KAS']); // área disputada (Siachen): fica neutra

const shapes = new Map(); // alpha3 → { d, rings:[[pts]] }
const add = (code, ring) => {
  if (!shapes.has(code)) shapes.set(code, []);
  shapes.get(code).push(ring);
};
for (const f of geo.features) {
  const p = f.properties;
  let code = p.ISO_A3 !== '-99' ? p.ISO_A3 : p.ADM0_A3;
  if (p.ADM0_A3 === 'KOS') code = 'XKX';
  if (p.ADM0_A3 === 'ATA' || NEUTRAL.has(p.ADM0_A3)) continue;
  code = MERGE[p.ADM0_A3] ?? code;
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys) {
    const [lo, la] = poly[0].reduce(([sx, sy], [x, y]) => [sx + x / poly[0].length, sy + y / poly[0].length], [0, 0]);
    const target = (SPLITS[p.ADM0_A3] ?? []).find(([, test]) => test(lo, la))?.[0] ?? code;
    for (const [ri, ring] of poly.entries()) add(target, { outer: ri === 0, pts: ring.map(toSvg) });
  }
}

// marcadores para quem não tem contorno nesta escala
const POINTS = {
  GIB: [-5.35, 36.14], BVT: [3.4, -54.43], TKL: [-171.85, -9.2], UMI: [-177.37, 28.21], MCO: [7.42, 43.74], VAT: [12.45, 41.9],
  SMR: [12.45, 43.94], AND: [1.52, 42.51], LIE: [9.55, 47.16], MLT: [14.4, 35.92], SGP: [103.82, 1.35], BHR: [50.56, 26.07],
  MDV: [73.5, 3.2], TUV: [179.2, -8.52], NRU: [166.93, -0.53], PLW: [134.58, 7.51], MHL: [171.18, 7.13], FSM: [158.21, 6.88],
  KIR: [-157.36, 1.87], WLF: [-176.2, -13.28], NIU: [-169.87, -19.05], COK: [-159.78, -21.24], PCN: [-130.1, -25.07],
  SHN: [-5.71, -15.96], IOT: [72.42, -7.32], CPV: [-23.6, 15.1], STP: [6.61, 0.33], COM: [43.33, -11.7], MUS: [57.55, -20.25],
  SYC: [55.45, -4.62], BRB: [-59.55, 13.19], LCA: [-60.98, 13.91], VCT: [-61.2, 13.25], GRD: [-61.68, 12.12], DMA: [-61.35, 15.42],
  ATG: [-61.8, 17.07], KNA: [-62.75, 17.33], AIA: [-63.06, 18.22], MSR: [-62.19, 16.74], VGB: [-64.62, 18.42], VIR: [-64.9, 18.34],
  ABW: [-69.97, 12.52], CUW: [-68.99, 12.17], SXM: [-63.07, 18.04], MAF: [-63.08, 18.07], BLM: [-62.83, 17.9], TCA: [-71.8, 21.8],
  CYM: [-81.25, 19.3], BMU: [-64.78, 32.3], SPM: [-56.3, 46.9], FRO: [-6.91, 62.0], IMN: [-4.53, 54.23], JEY: [-2.13, 49.21],
  GGY: [-2.58, 49.45], ALA: [19.93, 60.18], HKG: [114.17, 22.32], MAC: [113.55, 22.2], GUM: [144.79, 13.44], MNP: [145.75, 15.18],
  ASM: [-170.7, -14.28], WSM: [-172.1, -13.76], TON: [-175.2, -21.18], NFK: [167.95, -29.03], PYF: [-149.43, -17.68], SGS: [-36.6, -54.4],
  CCK: [96.83, -12.17], ATF: [69.35, -49.3], HMD: [73.5, -53.1], FLK: [-59.5, -51.75], ATA: [0, -80],
};

const countries = [];
for (const [i, c] of iso1.entries()) {
  const rings = shapes.get(c.alpha_3) ?? [];
  let d = '';
  let best = { a: -1, cx: 0, cy: 0 };
  let total = 0;
  for (const { outer, pts } of rings) {
    const s = simplifyRing(pts, 0.18);
    if (s.length < 4) continue;
    d += 'M' + s.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z';
    if (!outer) continue;
    let a = 0;
    let cx = 0;
    let cy = 0;
    for (let k = 0; k < s.length - 1; k++) {
      const cr = s[k][0] * s[k + 1][1] - s[k + 1][0] * s[k][1];
      a += cr;
      cx += (s[k][0] + s[k + 1][0]) * cr;
      cy += (s[k][1] + s[k + 1][1]) * cr;
    }
    a /= 2;
    total += Math.abs(a);
    if (Math.abs(a) > best.a && a !== 0) best = { a: Math.abs(a), cx: cx / (6 * a), cy: cy / (6 * a) };
  }
  if (!d) {
    const ll = POINTS[c.alpha_3];
    if (!ll) {
      console.warn('sem contorno nem coordenada:', c.alpha_3, c.name);
      continue;
    }
    const [x, y] = toSvg(ll);
    best = { cx: x, cy: y };
  }
  const NOTES = {
    SRB: 'A Sérvia não reconhece a independência declarada pelo Kosovo em 2008 e o considera sua província autônoma de Kosovo e Metohija (RS-KM na ISO 3166-2).',
  };
  countries.push({ iso: c.alpha_3, iso2: c.alpha_2, name: namesPt[i], d, cx: r1(best.cx), cy: r1(best.cy), area: Math.round(total), ...(NOTES[c.alpha_3] ? { note: NOTES[c.alpha_3] } : {}) });
}
// Kosovo: fora da ISO 3166-1, com o código provisório XK (usado pela UE e pelo próprio país)
{
  const rings = shapes.get('XKX') ?? [];
  const d = rings.map(({ pts }) => 'M' + simplifyRing(pts, 0.18).map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z').join('');
  const [x, y] = toSvg([20.9, 42.6]);
  countries.push({
    iso: 'XKX',
    iso2: 'XK',
    name: 'Kosovo',
    d,
    cx: r1(x),
    cy: r1(y),
    area: 10,
    disputed: true,
    note:
      'Declarou independência da Sérvia em 17 de fevereiro de 2008. É reconhecido como Estado por parte dos países-membros da ONU e não é reconhecido por outros, entre eles a Sérvia. Em 2010, um parecer consultivo da Corte Internacional de Justiça concluiu que a declaração de independência não violou o direito internacional. A ISO 3166-1 não atribui código ao Kosovo; «XK» é um código provisório usado por instituições como a União Europeia. Na ISO 3166-2, a região consta como a província autônoma sérvia de Kosovo-Metohija (RS-KM).',
  });
}
countries.sort((a, b) => b.area - a.area);

const mapTs = `// Gerado por scripts/gerar-mapa.mjs — não editar à mão.
// Países e territórios: ISO 3166-1 (${iso1.length}) + Kosovo (XK, provisório).
// Contornos: Natural Earth 1:50m (domínio público). Nomes pt-BR: projeto iso-codes (LGPL-2.1).
export interface MapCountry {
  /** ISO 3166-1 alfa-3 */
  iso: string;
  /** ISO 3166-1 alfa-2 (também usado para a bandeira) */
  iso2: string;
  name: string;
  /** Contorno em SVG (projeção Natural Earth I); vazio para quem só tem marcador */
  d: string;
  cx: number;
  cy: number;
  area: number;
  note?: string;
  /** Status disputado: contorno tracejado */
  disputed?: boolean;
}

export const MAP_W = ${W};
export const MAP_H = ${H};

export const WORLD: MapCountry[] = ${JSON.stringify(countries)};
`;
writeFileSync('src/data/mapa-mundi.ts', mapTs);

// ---------- ISO 3166-2 ----------
const TYPE_PT = {
  Region: 'região', Province: 'província', State: 'estado', County: 'condado', Department: 'departamento', District: 'distrito',
  Municipality: 'município', 'Autonomous province': 'província autônoma', 'Autonomous region': 'região autônoma',
  'Autonomous territorial unit': 'unidade territorial autônoma', 'Territorial unit': 'unidade territorial', Republic: 'república',
  City: 'cidade', 'Capital city': 'capital', 'Capital district': 'distrito da capital', Oblast: 'óblast', Prefecture: 'prefeitura',
  'Autonomous community': 'comunidade autônoma', 'Federal district': 'distrito federal', Territory: 'território', Canton: 'cantão',
  Governorate: 'província (governorado)', Parish: 'paróquia', Island: 'ilha', 'Metropolitan region': 'região metropolitana',
};
const byCountry = {};
for (const [i, s] of iso2.entries()) {
  const cc = s.code.split('-')[0];
  (byCountry[cc] ??= []).push([s.code, subNamesPt[i], TYPE_PT[s.type] ?? s.type.toLowerCase()]);
}
const subTs = `// Gerado por scripts/gerar-mapa.mjs — não editar à mão.
// Subdivisões ISO 3166-2 (${iso2.length}), por país (alfa-2). Fonte: projeto iso-codes (LGPL-2.1).
/** [código, nome, tipo] */
export type Subdivision = [string, string, string];

export const ISO_3166_2: Record<string, Subdivision[]> = ${JSON.stringify(byCountry)};
`;
writeFileSync('src/data/iso-3166-2.ts', subTs);

console.log(`✅ mapa: ${countries.length} (${countries.filter((c) => c.d).length} com contorno), ${(mapTs.length / 1024).toFixed(0)} KB · ISO 3166-2: ${iso2.length} subdivisões, ${(subTs.length / 1024).toFixed(0)} KB`);
