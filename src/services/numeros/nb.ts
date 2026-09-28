/**
 * Números por extenso em norueguês (bokmål), na contagem nova, a oficial, que a trilha ensina:
 * a dezena antes da unidade, numa palavra só (tjueen, førtito), e «sju», «tjue», «tretti». O «og»
 * entra uma vez, antes do último pedaço quando ele é menor que cem: hundre og tjue, to tusen og
 * fem, mas tusen to hundre. Os anos de 1100 a 1999 se leem em centenas: 1814 = atten hundre og
 * fjorten; os outros como número (2024 = to tusen og tjuefire).
 *
 * Só o 1 muda com o gênero: «en» (en krone), «ei» (ei bok, a forma que a trilha usa para o
 * feminino) e «ett» (ett år) — o gênero vem do vocabulário do norueguês, pulando um adjetivo no
 * meio. Sozinho e contando é «en»; nas horas, «ett» (klokka ett).
 *
 * Ordinais com ponto: «17. mai» = syttende mai, «5. klasse» = femte klasse. Horas «kl. 14.30» =
 * fjorten tretti. Decimais com «komma»; milhar com espaço (ou ponto).
 */
import { ROWS } from '@/data/nb/vocabulario';
import { generoDepois, mapaDeAdjetivos, mapaDeGenero, proximasPalavras, spellNordic, type RegrasNordicas, type Unidade } from './nordico';

type Gender = 'm' | 'f' | 'n' | 'contar';

const ONES = ['null', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten'];
const TENS = ['', '', 'tjue', 'tretti', 'førti', 'femti', 'seksti', 'sytti', 'åtti', 'nitti'];
const ONE: Record<Gender, string> = { m: 'en', f: 'ei', n: 'ett', contar: 'en' };

function below100(n: number, g: Gender): string {
  if (n === 1) return ONE[g];
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? ONES[n % 10] : '');
}

/** Junta os pedaços com o «og» antes do último, quando ele é menor que cem. */
function join(parts: [string, number][]): string {
  const words = parts.map((p) => p[0]);
  if (parts.length > 1 && parts[parts.length - 1][1] < 100) words.splice(-1, 0, 'og');
  return words.join(' ');
}

/** Os pedaços de 1 a 999, com o valor de cada um: [[«to hundre», 200], [«femti», 50]]. */
function parts1000(n: number, g: Gender, opens: boolean): [string, number][] {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const out: [string, number][] = [];
  if (h) out.push([h === 1 && opens ? 'hundre' : `${below100(h, 'n')} hundre`, h * 100]);
  if (rest) out.push([below100(rest, g), rest]);
  return out;
}

export function norwegianNumber(n: number, g: Gender = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'null';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const parts: [string, number][] = [];
  if (m) parts.push([m === 1 ? 'en million' : `${join(parts1000(m, 'm', true))} millioner`, m * 1e6]);
  if (k) parts.push([k === 1 && !m ? 'tusen' : `${join(parts1000(k, 'n', !m))} tusen`, k * 1000]);
  parts.push(...parts1000(rest, g, !m && !k));
  return join(parts);
}

/** Anos de 1100 a 1999 em centenas: 1814 = atten hundre og fjorten, 1900 = nitten hundre. */
export function norwegianYear(n: number): string | null {
  if (n < 1100 || n > 1999) return null;
  const rest = n % 100;
  return `${below100(Math.floor(n / 100), 'contar')} hundre${rest ? ` og ${below100(rest, 'contar')}` : ''}`;
}

const ORD = ['nullte', 'første', 'andre', 'tredje', 'fjerde', 'femte', 'sjette', 'sjuende', 'åttende', 'niende', 'tiende', 'ellevte', 'tolvte', 'trettende', 'fjortende', 'femtende', 'sekstende', 'syttende', 'attende', 'nittende'];
const ORD_TENS = ['', '', 'tjuende', 'trettiende', 'førtiende', 'femtiende', 'sekstiende', 'syttiende', 'åttiende', 'nittiende'];

/** Ordinais: første, andre, syttende, tjueførste, hundrede, to hundre og femte… (até 999). */
export function norwegianOrdinal(n: number): string {
  if (n === 0) return ORD[0];
  if (n < 0 || n >= 1000) return norwegianNumber(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  if (!rest) return h === 1 ? 'hundrede' : `${ONES[h]} hundrede`;
  const tail = rest < 20 ? ORD[rest] : rest % 10 ? TENS[Math.floor(rest / 10)] + ORD[rest % 10] : ORD_TENS[rest / 10];
  return h ? `${h === 1 ? 'hundre' : `${ONES[h]} hundre`} og ${tail}` : tail;
}

/** Formas que o vocabulário não anota, mas que vêm muito depois de um número. */
const EXTRA: Record<string, 'm' | 'f' | 'n'> = { kilo: 'n', meter: 'm', kilometer: 'm', mil: 'f', liter: 'm', timer: 'm', minutter: 'm', dager: 'm', uker: 'f', måneder: 'm', sekunder: 'n', grader: 'm', kroner: 'm', prosent: 'm' };

let genders: Map<string, 'm' | 'f' | 'n'> | null = null;
const genderMap = () => (genders ??= mapaDeGenero<'m' | 'f' | 'n'>(ROWS, EXTRA));
let adjectives: Set<string> | null = null;
const adjectiveSet = () => (adjectives ??= mapaDeAdjetivos(ROWS, ['t', 'e']));

const MONTHS = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];

const UNITS: Record<Unidade, [string, string, 'm' | 'n']> = {
  kr: ['krone', 'kroner', 'm'],
  '€': ['euro', 'euro', 'm'],
  $: ['dollar', 'dollar', 'm'],
  '£': ['pund', 'pund', 'n'],
  '%': ['prosent', 'prosent', 'm'],
};

const REGRAS: RegrasNordicas<Gender> = {
  milhar: '[   .]',
  ordinalComPonto: true,
  meses: MONTHS,
  relogio: /(\bkl\.|\bklokka|\bklokken)(\s+(er|var|blir))?\s*$/i,
  emergencia: /\b(ring|ringer|ringte|ringe|ringt|nødnummer\w*)\b/i,
  forma: (antes, depois) => {
    if (/[+\-−=×*/]\s*$/.test(antes) || /^\s*[+\-−=×*/]/.test(depois)) return 'contar';
    return generoDepois(depois, genderMap(), adjectiveSet()) ?? 'contar';
  },
  horas: 'n',
  contar: 'contar',
  cardinal: norwegianNumber,
  ano: norwegianYear,
  ordinal: (n) => norwegianOrdinal(n),
  composto: (n, sufixo) => {
    let base: string;
    if (sufixo.startsWith('tal') && n >= 1100 && n <= 1999 && n % 10 === 0) {
      // «1800-tallet» = attenhundretallet; «1970-tallet» = nittensyttitallet
      base = n % 100 ? below100(Math.floor(n / 100), 'contar') + below100(n % 100, 'contar') : `${below100(Math.floor(n / 100), 'contar')}hundre`;
    } else {
      // «30-årene» = trettiårene, «1-åring» = ettåring
      base = norwegianNumber(n, 'n');
    }
    return base.replace(/ /g, '') + sufixo;
  },
  hora: (h, min) => {
    const hh = norwegianNumber(h, 'n');
    if (!min) return hh;
    return `${hh} ${min < 10 ? `null ${ONES[min]}` : norwegianNumber(min)}`;
  },
  virgula: 'komma',
  unidade: (u, n, decimal) => {
    const [sg, pl, g] = UNITS[u];
    return { palavra: n === 1 && !decimal ? sg : pl, forma: g };
  },
  temSubstantivo: (depois) => genderMap().has(proximasPalavras(depois)[0] ?? ''),
};

/**
 * Troca os números de um texto em norueguês pelas palavras: «Stortinget har 169 representanter» →
 * «hundre og sekstini representanter», «1 bok» → «ei bok», «17. mai» → «syttende mai», «i 1814» →
 * «i atten hundre og fjorten», «kl. 14.30» → «kl. fjorten tretti», «1200-tallet» → «tolvhundretallet».
 */
export function spellNorwegianNumbers(text: string): string {
  return spellNordic(text, REGRAS);
}
