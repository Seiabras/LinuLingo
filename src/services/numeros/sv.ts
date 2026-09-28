/**
 * Números por extenso em sueco. Até o milhão, o número é uma palavra só, como a norma escreve:
 * tjugoett, tvåhundrafemtio, tvåtusenfemhundra (ett + tusen = ettusen). Os anos de 1100 a 1999 se
 * leem em centenas: 1946 = nittonhundrafyrtiosex; os outros como número (2003 = tvåtusentre).
 *
 * Só o 1 muda com o gênero: «en» diante de um en-ord (en krona, en dag), «ett» diante de um
 * ett-ord (ett år, ett hus) — o gênero vem do vocabulário do sueco, pulando um adjetivo no meio.
 * Sozinho, contando, nas horas e nas contas, é «ett» (klockan ett, ett plus ett). Nos números
 * compostos fica «ett» (tjugoett, hundraett).
 *
 * Datas: «den 6 juni» se escreve com o cardinal, mas se lê o ordinal (den sjätte juni); «1:a», «3:e»
 * também são ordinais. Horas «kl. 14.30» = fjorton trettio. Decimais com «komma»; milhar com espaço.
 */
import { ROWS } from '@/data/sv/vocabulario';
import { generoDepois, mapaDeAdjetivos, mapaDeGenero, proximasPalavras, spellNordic, type RegrasNordicas, type Unidade } from './nordico';

/** m = utrum (en-ord), n = neutrum (ett-ord). */
type Gender = 'm' | 'n' | 'contar';

const ONES = ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton'];
const TENS = ['', '', 'tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio', 'sjuttio', 'åttio', 'nittio'];

function below100(n: number): string {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? ONES[n % 10] : '');
}

/** 1–999 numa palavra; «opens»: é o começo do número (100 = «hundra», dentro = «etthundra»). */
function below1000(n: number, opens: boolean): string {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = h ? (h === 1 && opens ? 'hundra' : `${ONES[h]}hundra`) : '';
  return head + (rest ? below100(rest) : '');
}

/** «ett» + «tusen» = «ettusen» (não se escrevem três t seguidos). */
const glue = (a: string, b: string) => (a.endsWith('tt') && b.startsWith('t') ? a.slice(0, -1) + b : a + b);

export function swedishNumber(n: number, g: Gender = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'noll';
  if (n === 1) return g === 'm' ? 'en' : 'ett';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  let small = '';
  if (k) small = glue(k === 1 && !m ? '' : below1000(k, !m), 'tusen');
  if (rest) small = glue(small, below1000(rest, !m && !k));
  const big = m ? (m === 1 ? 'en miljon' : `${below1000(m, true)} miljoner`) : '';
  return [big, small].filter(Boolean).join(' ');
}

/** Anos de 1100 a 1999 em centenas: 1809 = artonhundranio, 1946 = nittonhundrafyrtiosex. */
export function swedishYear(n: number): string | null {
  if (n < 1100 || n > 1999) return null;
  return `${below100(Math.floor(n / 100))}hundra${n % 100 ? below100(n % 100) : ''}`;
}

const ORD = ['nollte', 'första', 'andra', 'tredje', 'fjärde', 'femte', 'sjätte', 'sjunde', 'åttonde', 'nionde', 'tionde', 'elfte', 'tolfte', 'trettonde', 'fjortonde', 'femtonde', 'sextonde', 'sjuttonde', 'artonde', 'nittonde'];
const ORD_TENS = ['', '', 'tjugonde', 'trettionde', 'fyrtionde', 'femtionde', 'sextionde', 'sjuttionde', 'åttionde', 'nittionde'];

/** Ordinais: första, andra, tjugoförsta, trettionde, hundrade… (até 999; acima, o cardinal). */
export function swedishOrdinal(n: number): string {
  if (n === 0) return ORD[0];
  if (n < 0 || n >= 1000) return swedishNumber(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = h ? (h === 1 ? 'hundra' : `${ONES[h]}hundra`) : '';
  if (!rest) return `${head}de`;
  const tail = rest < 20 ? ORD[rest] : rest % 10 ? TENS[Math.floor(rest / 10)] + ORD[rest % 10] : ORD_TENS[rest / 10];
  return head + tail;
}

/** Formas que o vocabulário não anota, mas que vêm muito depois de um número. */
const EXTRA: Record<string, 'm' | 'n'> = { kilo: 'n', meter: 'm', kilometer: 'm', mil: 'm', liter: 'm', timmar: 'm', minuter: 'm', veckor: 'm', dagar: 'm', månader: 'm', sekunder: 'm', grader: 'm', kapitel: 'n', procent: 'm' };

let genders: Map<string, 'm' | 'n'> | null = null;
const genderMap = () => (genders ??= mapaDeGenero<'m' | 'n'>(ROWS, EXTRA));
let adjectives: Set<string> | null = null;
const adjectiveSet = () => (adjectives ??= mapaDeAdjetivos(ROWS, ['t', 'a', 'e']));

const MONTHS = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

const UNITS: Record<Unidade, [string, string, 'm' | 'n']> = {
  kr: ['krona', 'kronor', 'm'],
  '€': ['euro', 'euro', 'm'],
  $: ['dollar', 'dollar', 'm'],
  '£': ['pund', 'pund', 'n'],
  '%': ['procent', 'procent', 'm'],
};

const REGRAS: RegrasNordicas<Gender> = {
  milhar: '[   .]',
  ordinalComPonto: false,
  meses: MONTHS,
  relogio: /(\bkl\.|\bklockan)(\s+(är|var|blir))?\s*$/i,
  emergencia: /\b(ring|ringer|ringde|ringa|ringt|nödnum\w*|larmnum\w*)\b/i,
  forma: (antes, depois) => {
    // nas contas, o 1 é «ett» (ett plus ett är två)
    if (/[+\-−=×*/]\s*$/.test(antes) || /^\s*[+\-−=×*/]/.test(depois)) return 'contar';
    return generoDepois(depois, genderMap(), adjectiveSet()) ?? 'contar';
  },
  horas: 'n',
  contar: 'contar',
  cardinal: swedishNumber,
  ano: swedishYear,
  ordinal: (n) => swedishOrdinal(n),
  composto: (n, sufixo) => {
    // «1800-talet» = artonhundratalet, «1880-talet» = artonhundraåttiotalet, «30-talet» = trettiotalet
    const ano = sufixo.startsWith('tal') ? swedishYear(n) : null;
    return (ano ?? swedishNumber(n, 'n')).replace(/ /g, '') + sufixo;
  },
  hora: (h, min) => {
    const hh = swedishNumber(h, 'n');
    if (!min) return hh;
    return `${hh} ${min < 10 ? `noll ${ONES[min]}` : swedishNumber(min)}`;
  },
  virgula: 'komma',
  unidade: (u, n, decimal) => {
    const [sg, pl, g] = UNITS[u];
    return { palavra: n === 1 && !decimal ? sg : pl, forma: g };
  },
  temSubstantivo: (depois) => genderMap().has(proximasPalavras(depois)[0] ?? ''),
};

/**
 * Troca os números de um texto em sueco pelas palavras: «Det kostar 120 kronor» → «Det kostar
 * hundratjugo kronor», «1 hus» → «ett hus», «den 6 juni» → «den sjätte juni», «1809» →
 * «artonhundranio», «kl. 14.30» → «kl. fjorton trettio», «3,5 procent» → «tre komma fem procent».
 */
export function spellSwedishNumbers(text: string): string {
  return spellNordic(text, REGRAS);
}
