/**
 * Números por extenso em dinamarquês. As dezenas de 50 a 90 são vigesimais (halvtreds, tres,
 * halvfjerds, firs, halvfems) e a unidade vem antes da dezena, tudo numa palavra: 21 = enogtyve,
 * 52 = tooghalvtreds. «hundrede» e «tusind» ficam separados, e o «og» entra uma vez, antes do
 * último pedaço quando ele é menor que cem: hundrede og syvogfyrre, to tusind og otte, mas tusind
 * tre hundrede. Os anos de 1100 a 1999 se leem em centenas: 1849 = atten hundrede og niogfyrre;
 * os outros como número (2024 = to tusind og fireogtyve).
 *
 * Só o 1 muda com o gênero: «en» diante de um fælleskøn (en krone), «et» diante de um intetkøn
 * (et år) — o gênero vem do vocabulário do dinamarquês, pulando um adjetivo no meio. Sozinho e
 * contando é «en»; nas horas, «et» (klokken et). O ordinal 2. também: «den 2. juni» = den anden
 * juni, «det 2. århundrede» = det andet århundrede.
 *
 * Ordinais com ponto: «den 5. juni» = den femte juni. Horas «kl. 14.30» = fjorten tredive.
 * Decimais com «komma»; milhar com ponto (10.000 kr.).
 */
import { ROWS } from '@/data/da/vocabulario';
import { generoDepois, mapaDeAdjetivos, mapaDeGenero, proximasPalavras, spellNordic, type RegrasNordicas, type Unidade } from './nordico';

/** m = fælleskøn (en-ord), n = intetkøn (et-ord). */
type Gender = 'm' | 'n' | 'contar';

const ONES = ['nul', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'otte', 'ni', 'ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten'];
const TENS = ['', '', 'tyve', 'tredive', 'fyrre', 'halvtreds', 'tres', 'halvfjerds', 'firs', 'halvfems'];

function below100(n: number, g: Gender): string {
  if (n === 1) return g === 'n' ? 'et' : 'en';
  if (n < 20) return ONES[n];
  const t = TENS[Math.floor(n / 10)];
  return n % 10 ? `${ONES[n % 10]}og${t}` : t;
}

/** Junta os pedaços com o «og» antes do último, quando ele é menor que cem. */
function join(parts: [string, number][]): string {
  const words = parts.map((p) => p[0]);
  if (parts.length > 1 && parts[parts.length - 1][1] < 100) words.splice(-1, 0, 'og');
  return words.join(' ');
}

function parts1000(n: number, g: Gender, opens: boolean): [string, number][] {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const out: [string, number][] = [];
  if (h) out.push([h === 1 && opens ? 'hundrede' : `${below100(h, 'n')} hundrede`, h * 100]);
  if (rest) out.push([below100(rest, g), rest]);
  return out;
}

export function danishNumber(n: number, g: Gender = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'nul';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const parts: [string, number][] = [];
  if (m) parts.push([m === 1 ? 'en million' : `${join(parts1000(m, 'm', true))} millioner`, m * 1e6]);
  if (k) parts.push([k === 1 && !m ? 'tusind' : `${join(parts1000(k, 'n', !m))} tusind`, k * 1000]);
  parts.push(...parts1000(rest, g, !m && !k));
  return join(parts);
}

/** Anos de 1100 a 1999 em centenas: 1849 = atten hundrede og niogfyrre, 1900 = nitten hundrede. */
export function danishYear(n: number): string | null {
  if (n < 1100 || n > 1999) return null;
  const rest = n % 100;
  return `${below100(Math.floor(n / 100), 'contar')} hundrede${rest ? ` og ${below100(rest, 'contar')}` : ''}`;
}

const ORD = ['nulte', 'første', 'anden', 'tredje', 'fjerde', 'femte', 'sjette', 'syvende', 'ottende', 'niende', 'tiende', 'ellevte', 'tolvte', 'trettende', 'fjortende', 'femtende', 'sekstende', 'syttende', 'attende', 'nittende'];
const ORD_TENS = ['', '', 'tyvende', 'tredivte', 'fyrretyvende', 'halvtredsindstyvende', 'tresindstyvende', 'halvfjerdsindstyvende', 'firsindstyvende', 'halvfemsindstyvende'];

/** Ordinais: første, anden/andet, femte, enogtyvende, tredivte… (até 999). */
export function danishOrdinal(n: number, g: Gender = 'm'): string {
  if (n === 0) return ORD[0];
  if (n < 0 || n >= 1000) return danishNumber(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  if (!rest) return h === 1 ? 'hundrede' : `${ONES[h]} hundrede`;
  let tail: string;
  if (rest === 2) tail = g === 'n' ? 'andet' : 'anden';
  else if (rest < 20) tail = ORD[rest];
  else tail = rest % 10 ? `${ONES[rest % 10]}og${ORD_TENS[Math.floor(rest / 10)]}` : ORD_TENS[rest / 10];
  return h ? `${h === 1 ? 'hundrede' : `${ONES[h]} hundrede`} og ${tail}` : tail;
}

/** Formas que o vocabulário não anota, mas que vêm muito depois de um número. */
const EXTRA: Record<string, 'm' | 'n'> = { kilo: 'n', meter: 'm', kilometer: 'm', mil: 'm', liter: 'm', timer: 'm', minutter: 'm', dage: 'm', uger: 'm', måneder: 'm', sekunder: 'n', grader: 'm', kroner: 'm', procent: 'm' };

let genders: Map<string, 'm' | 'n'> | null = null;
const genderMap = () => (genders ??= mapaDeGenero<'m' | 'n'>(ROWS, EXTRA));
let adjectives: Set<string> | null = null;
const adjectiveSet = () => (adjectives ??= mapaDeAdjetivos(ROWS, ['t', 'e']));

const MONTHS = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];

const UNITS: Record<Unidade, [string, string, 'm' | 'n']> = {
  kr: ['krone', 'kroner', 'm'],
  '€': ['euro', 'euro', 'm'],
  $: ['dollar', 'dollars', 'm'],
  '£': ['pund', 'pund', 'n'],
  '%': ['procent', 'procent', 'm'],
};

/** «60'erne» = tresserne: as décadas no plural. */
const DECADES = ['', '', 'tyverne', 'trediverne', 'fyrrerne', 'halvtredserne', 'tresserne', 'halvfjerdserne', 'firserne', 'halvfemserne'];

const REGRAS: RegrasNordicas<Gender> = {
  milhar: '[.  ]',
  ordinalComPonto: true,
  meses: MONTHS,
  relogio: /(\bkl\.|\bklokken)(\s+(er|var|bliver))?\s*$/i,
  emergencia: /\b(ring|ringer|ringede|ringe|ringet|alarmcentral\w*|nødnummer\w*)\b/i,
  forma: (antes, depois) => {
    if (/[+\-−=×*/]\s*$/.test(antes) || /^\s*[+\-−=×*/]/.test(depois)) return 'contar';
    return generoDepois(depois, genderMap(), adjectiveSet()) ?? 'contar';
  },
  horas: 'n',
  contar: 'contar',
  cardinal: danishNumber,
  ano: danishYear,
  ordinal: (n, _antes, depois) => {
    // o gênero pula um «og 18.» no meio («det 19. og 20. århundrede»)
    const g = generoDepois(depois.replace(/^\s+(og|eller|til)\s+\d+\./, ''), genderMap(), adjectiveSet());
    return danishOrdinal(n, g === 'n' ? 'n' : 'm');
  },
  composto: (n, sufixo) => {
    // «1800-tallet» = attenhundredetallet, «22-tiden» = toogtyvetiden, «1-årig» = etårig
    const base = sufixo.startsWith('tal') && n >= 1100 && n <= 1999 && n % 100 === 0 ? `${below100(n / 100, 'contar')}hundrede` : danishNumber(n, 'n');
    return base.replace(/ /g, '') + sufixo;
  },
  apostrofo: (n, sufixo) => {
    if (sufixo !== 'erne' || n % 10) return null;
    if (n >= 20 && n < 100) return DECADES[n / 10];
    // «1960'erne» = nittentresserne
    if (n >= 1920 && n < 2000) return `nitten${DECADES[(n % 100) / 10]}`;
    return null;
  },
  hora: (h, min) => {
    const hh = danishNumber(h, 'n');
    if (!min) return hh;
    return `${hh} ${min < 10 ? `nul ${ONES[min]}` : danishNumber(min)}`;
  },
  virgula: 'komma',
  unidade: (u, n, decimal) => {
    const [sg, pl, g] = UNITS[u];
    return { palavra: n === 1 && !decimal ? sg : pl, forma: g };
  },
  temSubstantivo: (depois) => genderMap().has(proximasPalavras(depois)[0] ?? ''),
};

/**
 * Troca os números de um texto em dinamarquês pelas palavras: «Et spil kort har 52 spillekort» →
 * «tooghalvtreds spillekort», «1 år» → «et år», «den 5. juni» → «den femte juni», «i 1849» → «i
 * atten hundrede og niogfyrre», «kl. 14.30» → «kl. fjorten tredive», «10.000 kr.» → «ti tusind kroner».
 */
export function spellDanishNumbers(text: string): string {
  return spellNordic(text, REGRAS);
}
