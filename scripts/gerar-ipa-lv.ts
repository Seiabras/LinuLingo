// Gera src/data/lv/pronuncia.ts: a IPA de cada forma letã que aparece no app (vocabulário, trilha,
// histórias, gramática, conversas…), por regras do letão padrão, com uma lista de exceções.
// Uso: npx tsx scripts/gerar-ipa-lv.ts
//
// Regras (transcrição larga):
// - tônica na 1ª sílaba (ˈ) nas palavras de 2+ sílabas;
// - ā ē ī ū longas (ː); ie [iɛ], ai, ei, au, ui; o = [uɔ] nas palavras letãs e [ɔ] nas estrangeiras;
// - e/ē da 1ª sílaba: fechado [e] se a sílaba seguinte tem i, ī, ie, e fechado ou consoante palatal no meio
//   (j ģ ķ ļ ņ); senão aberto [æ]; nas outras sílabas, [e];
// - c [ts], č [tʃ], dz [dz], dž [dʒ], ģ [ɟ], ķ [c], ļ [ʎ], ņ [ɲ], š [ʃ], ž [ʒ], h/ch [x];
// - assimilação de sonoridade entre consoantes vizinhas e n → ŋ antes de k/g.
import { writeFileSync } from 'node:fs';
import { LETAO } from '../src/data/lv';
import { targetTexts } from '../src/data/textos-alvo';
import { lexiconWords } from '../src/services/ipa-lexicon';

const V2: Record<string, string> = { ie: 'iɛ', ai: 'ai', ei: 'ei', au: 'au', ui: 'ui', oi: 'ɔi', eu: 'eu' };
const V1: Record<string, string> = { a: 'a', ā: 'aː', e: 'E', ē: 'Eː', i: 'i', ī: 'iː', o: 'uɔ', u: 'u', ū: 'uː', y: 'ɨ', ō: 'uɔ' };
const C2: Record<string, string> = { dž: 'dʒ', dz: 'dz', ch: 'x' };
const C1: Record<string, string> = {
  b: 'b', c: 'ts', č: 'tʃ', d: 'd', f: 'f', g: 'ɡ', ģ: 'ɟ', h: 'x', j: 'j', k: 'k', ķ: 'c', l: 'l', ļ: 'ʎ', m: 'm', n: 'n', ņ: 'ɲ',
  p: 'p', r: 'r', s: 's', š: 'ʃ', t: 't', v: 'v', z: 'z', ž: 'ʒ', x: 'ks', w: 'v', q: 'k',
};
const TO_VOICELESS: Record<string, string> = { b: 'p', d: 't', ɡ: 'k', z: 's', ʒ: 'ʃ', dz: 'ts', dʒ: 'tʃ', ɟ: 'c' };
const TO_VOICED = Object.fromEntries(Object.entries(TO_VOICELESS).map(([a, b]) => [b, a]));
const PALATAL = new Set(['j', 'ɟ', 'c', 'ʎ', 'ɲ']);

// raízes de palavras estrangeiras: o «o» delas é [ɔ], não [uɔ]
const LOAN_STEMS = [
  'auto', 'foto', 'telefon', 'sport', 'koncert', 'problēm', 'program', 'projekt', 'dokument', 'doktor', 'direktor', 'profes', 'profesor',
  'polit', 'polic', 'ekonom', 'teorij', 'tehnolo', 'biolo', 'astronom', 'kosmos', 'robot', 'video', 'radio', 'metro', 'kino', 'opera',
  'komand', 'kolēģ', 'konts', 'kont', 'kontrol', 'procent', 'oranž', 'rozā', 'okei', 'hokej', 'futbol', 'volejbol', 'basketbol',
  'tomāt', 'šokolād', 'konfekt', 'karbonād', 'jogurt', 'kofer', 'kolekc', 'kompan', 'kompjūter', 'komentār', 'koncentr', 'konference',
  'kontakt', 'kontinent', 'konkurs', 'kostīm', 'modern', 'mod', 'model', 'moment', 'motor', 'motiv', 'monument', 'novel', 'nobel',
  'organiz', 'orķestr', 'ofic', 'ofis', 'opcij', 'optimist', 'pesimist', 'port', 'portugāl', 'post', 'produkt', 'produc', 'prognoz',
  'progres', 'proces', 'provinc', 'psiholog', 'reģion', 'restorān', 'romān', 'romantisk', 'sezon', 'simbol', 'sociāl', 'solo', 'tolerant',
  'tonn', 'tost', 'traktor', 'trolejbus', 'universitāt', 'vodk', 'zoo', 'ekolog', 'epizod', 'filozof', 'fotogrāf', 'galerij', 'geolog',
  'ģeogrāf', 'histor', 'humor', 'idiom', 'interesant', 'kaloriju', 'katolic', 'klostera', 'kokteil', 'kolonij', 'komēdij', 'komponist',
  'kongres', 'konserv', 'konsol', 'kontrakt', 'kor', 'logik', 'loģik', 'loteri', 'mikroskop', 'teleskop', 'radioteleskop', 'operācij',
  'ozon', 'pilot', 'poēm', 'poēt', 'poli', 'pop', 'porcij', 'pozitīv', 'prioritāt', 'protest', 'prezidento', 'parol', 'akumulator',
  'moderator', 'datorpel', 'elektron', 'ekonomik', 'demokrāt', 'atom', 'metod', 'formul', 'laborator', 'kolēģe', 'hobij', 'hokejs',
  'zoodārz', 'eiro', 'orģināl', 'oriģināl', 'kolēģ', 'robots', 'soc', 'tomāts', 'logo', 'solidar', 'kokle',
].filter((s) => s !== 'kokle' && s !== 'kor');
const isLoan = (w: string) => /[fh]|ch/.test(w) || LOAN_STEMS.some((s) => w.startsWith(s) || (s.length >= 5 && w.includes(s)));

// exceções conferidas à mão (forma → IPA sem colchetes)
const MANUAL: Record<string, string> = {
  četri: 'ˈtʃetri',
  sešdesmit: 'ˈseʒdesmit',
  vecs: 'væts',
  bērns: 'bæːrns',
  bērni: 'ˈbeːrni',
  't-krekls': 'ˈteːkrekls',
  't-kreklu': 'ˈteːkreklu',
  't-krekla': 'ˈteːkrekla',
  'e-pasts': 'ˈeːpasts',
  'e-pastu': 'ˈeːpastu',
  'e-pastā': 'ˈeːpastaː',
  'e-pasta': 'ˈeːpasta',
  'e-mails': 'ˈiːmeils',
  unesco: 'juˈnesko',
  ok: 'ɔˈkei',
};

type Seg = { v: boolean; s: string };

// monossílabos com «e» fechado (a regra da sílaba seguinte não se aplica)
const CLOSED_MONO = new Set(['mežs', 'mežā', 'mežu', 'meža', 'ceļš', 'ceļā', 'ceļu', 'sešs', 'seši', 'tev', 'sev', 'tevi', 'sevi', 'ne', 'nē', 'lec', 'ej']);

function segments(w: string, loan: boolean): Seg[] {
  const segs: Seg[] = [];
  for (let i = 0; i < w.length; ) {
    const two = w.slice(i, i + 2);
    if (V2[two] && !(two === 'eu' && !loan)) {
      segs.push({ v: true, s: V2[two] });
      i += 2;
      continue;
    }
    if (C2[two]) {
      segs.push({ v: false, s: C2[two] });
      i += 2;
      continue;
    }
    const ch = w[i];
    if (V1[ch]) segs.push({ v: true, s: ch === 'o' && loan ? 'ɔ' : V1[ch] });
    else if (C1[ch]) segs.push({ v: false, s: C1[ch] });
    i++;
  }
  return segs;
}

export function g2p(word: string): string {
  const w = word.toLowerCase().normalize('NFC').replace(/[’'-]/g, '');
  if (MANUAL[word]) return MANUAL[word];
  const loan = isLoan(w);
  const segs = segments(w, loan);
  // n → ŋ antes de k/g
  for (let k = 0; k < segs.length - 1; k++) if (segs[k].s === 'n' && (segs[k + 1].s === 'k' || segs[k + 1].s === 'ɡ')) segs[k].s = 'ŋ';
  // assimilação de sonoridade (regressiva)
  for (let k = segs.length - 2; k >= 0; k--) {
    const a = segs[k];
    const b = segs[k + 1];
    if (a.v || b.v) continue;
    if (TO_VOICELESS[a.s] && TO_VOICED[b.s]) a.s = TO_VOICELESS[a.s];
    else if (TO_VOICED[a.s] && TO_VOICELESS[b.s] && b.s !== 'v') a.s = TO_VOICED[a.s];
  }
  // e aberto / fechado: a vogal seguinte decide; um «e» seguinte conta como fechado só se ele mesmo
  // for fechado (i, ī, ie ou palatal depois dele)
  const closedAt = (k: number): boolean => {
    for (const y of segs.slice(k + 1)) {
      if (y.v) return /^[iɨ]/.test(y.s) || (y.s.startsWith('E') && closedAt(segs.indexOf(y)));
      if (PALATAL.has(y.s)) return true;
    }
    return false;
  };
  const firstV = segs.findIndex((x) => x.v);
  const out = segs.map((x, k) => {
    if (!x.v || !x.s.startsWith('E')) return x.s;
    const long = x.s.slice(1);
    if (k !== firstV || loan || w.startsWith('ne') || CLOSED_MONO.has(w)) return 'e' + long;
    return (closedAt(k) ? 'e' : 'æ') + long;
  });
  const nv = segs.filter((x) => x.v).length;
  const r = out.join('');
  return nv > 1 ? 'ˈ' + r : r;
}

const words = new Set<string>();
for (const t of targetTexts(LETAO)) for (const w of lexiconWords(t)) words.add(w);
const lex: Record<string, string> = {};
for (const w of [...words].sort((a, b) => a.localeCompare(b, 'lv'))) lex[w] = g2p(w);

const q = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const body = Object.entries(lex)
  .map(([k, v]) => `  ${/^[a-z]+$/.test(k) ? k : q(k)}: ${q(v)},`)
  .join('\n');
writeFileSync(
  'src/data/lv/pronuncia.ts',
  `/**\n * IPA do letão padrão, forma por forma, gerada por scripts/gerar-ipa-lv.ts (regras + exceções).\n * Tônica na 1ª sílaba; o «e» aberto [æ] só é marcado na 1ª sílaba; o «o» é [uɔ] nas palavras letãs\n * e [ɔ] nas estrangeiras. Não edite à mão: acrescente a exceção no script e rode de novo.\n */\nexport const IPA_LV: Record<string, string> = {\n${body}\n};\n`,
);
console.log(`${Object.keys(lex).length} formas`);
