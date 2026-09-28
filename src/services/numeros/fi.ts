/**
 * Números por extenso em finlandês, antes da voz. O finlandês não tem gênero, mas o numeral
 * declina em caso e concorda com o substantivo: kolme taloa (o número no nominativo, o substantivo
 * no partitivo), kolmessa talossa, kolmelle ihmiselle, kahden viikon päästä. O caso vem da
 * terminação da palavra seguinte, reconhecida pelo vocabulário do finlandês (a forma do dicionário,
 * o genitivo e o partitivo anotados: «talo (talon, taloa)» → talo-ssa, talo-on); sem certeza, o
 * nominativo, a forma de contar.
 *
 * O número composto é uma palavra só (kaksikymmentäviisi, tuhatyhdeksänsataaseitsemäntoista) e,
 * declinado, todas as partes vão para o caso: kahdessakymmenessäviidessä. Só o milhão fica à parte
 * (kaksi miljoonaa viisisataatuhatta). No nominativo, o que multiplica pede o partitivo:
 * kaksikymmentä, kolmesataa, neljätuhatta.
 *
 * Ordinais «6.» (antes de uma palavra minúscula): kuudes joulukuuta, helmikuun kahdentenakymmenentenä-
 * kahdeksantena päivänä (todas as partes viram ordinais e declinam). Anos como números comuns
 * (vuonna tuhatyhdeksänsataaseitsemäntoista), sempre no nominativo depois de «vuonna», «vuodesta»,
 * de um mês. «1800-luvulla» → tuhatkahdeksansataaluvulla; «3:ssa» → kolmessa; «klo 14.30» → kello
 * neljätoista kolmekymmentä; «3,5» → kolme pilkku viisi; «5 %» → viisi prosenttia; «190 000».
 */
import { ROWS } from '@/data/fi/vocabulario';

type Case = 'nom' | 'gen' | 'par' | 'ill' | 'ess' | 'ine' | 'ela' | 'ade' | 'abl' | 'all' | 'tra';
/** Os casos que se fazem com a terminação sobre o radical fraco (kolme-ssa, kahde-lle, tuhanne-ksi). */
const LOCAL: Partial<Record<Case, string>> = { ine: 'ssa', ela: 'sta', ade: 'lla', abl: 'lta', all: 'lle', tra: 'ksi' };

/** Uma palavra numeral: nominativo, genitivo, partitivo, ilativo, essivo e o radical dos outros casos. */
type Word = { nom: string; gen: string; par: string; ill: string; ess: string; weak: string };
const word = (nom: string, gen: string, par: string, ill: string, ess: string, weak: string): Word => ({ nom, gen, par, ill, ess, weak });

/** Harmonia vocálica: com a, o, u na palavra, as terminações ficam com a; sem elas, com ä. */
const harmony = (stem: string, ending: string) => (/[aou]/.test(stem) ? ending : ending.replace(/a/g, 'ä'));

function inflect(w: Word, c: Case): string {
  if (c === 'nom' || c === 'gen' || c === 'par' || c === 'ill' || c === 'ess') return w[c];
  return w.weak + harmony(w.nom, LOCAL[c] ?? '');
}

const UNITS: Word[] = [
  word('nolla', 'nollan', 'nollaa', 'nollaan', 'nollana', 'nolla'),
  word('yksi', 'yhden', 'yhtä', 'yhteen', 'yhtenä', 'yhde'),
  word('kaksi', 'kahden', 'kahta', 'kahteen', 'kahtena', 'kahde'),
  word('kolme', 'kolmen', 'kolmea', 'kolmeen', 'kolmena', 'kolme'),
  word('neljä', 'neljän', 'neljää', 'neljään', 'neljänä', 'neljä'),
  word('viisi', 'viiden', 'viittä', 'viiteen', 'viitenä', 'viide'),
  word('kuusi', 'kuuden', 'kuutta', 'kuuteen', 'kuutena', 'kuude'),
  word('seitsemän', 'seitsemän', 'seitsemää', 'seitsemään', 'seitsemänä', 'seitsemä'),
  word('kahdeksan', 'kahdeksan', 'kahdeksaa', 'kahdeksaan', 'kahdeksana', 'kahdeksa'),
  word('yhdeksän', 'yhdeksän', 'yhdeksää', 'yhdeksään', 'yhdeksänä', 'yhdeksä'),
];
const TEN = word('kymmenen', 'kymmenen', 'kymmentä', 'kymmeneen', 'kymmenenä', 'kymmene');
const HUNDRED = word('sata', 'sadan', 'sataa', 'sataan', 'satana', 'sada');
const THOUSAND = word('tuhat', 'tuhannen', 'tuhatta', 'tuhanteen', 'tuhantena', 'tuhanne');
const MILLION = word('miljoona', 'miljoonan', 'miljoonaa', 'miljoonaan', 'miljoonana', 'miljoona');

/** «kaksi» + «kymmentä»: no nominativo, o multiplicado vai para o partitivo; nos outros casos, para o mesmo caso. */
const times = (base: Word, c: Case) => inflect(base, c === 'nom' ? 'par' : c);

function below1000(n: number, c: Case): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  let out = h === 0 ? '' : h === 1 ? inflect(HUNDRED, c) : inflect(UNITS[h], c) + times(HUNDRED, c);
  if (r === 0) return out;
  if (r < 10) out += inflect(UNITS[r], c);
  else if (r === 10) out += inflect(TEN, c);
  else if (r < 20) out += `${inflect(UNITS[r - 10], c)}toista`;
  else out += inflect(UNITS[Math.floor(r / 10)], c) + times(TEN, c) + (r % 10 ? inflect(UNITS[r % 10], c) : '');
  return out;
}

/** 0 a 999 999 999 no caso pedido: finnishNumber(25, 'ine') = «kahdessakymmenessäviidessä». */
export function finnishNumber(n: number, c: Case = 'nom'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return inflect(UNITS[0], c);
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const millions = m === 0 ? '' : m === 1 ? inflect(MILLION, c) : `${below1000(m, c)} ${times(MILLION, c)}`;
  const thousands = k === 0 ? '' : k === 1 ? inflect(THOUSAND, c) : below1000(k, c) + times(THOUSAND, c);
  return [millions, thousands + (rest ? below1000(rest, c) : '')].filter(Boolean).join(' ');
}

/** O ordinal a partir do radical: kolma-s, kolma-nnen, kolma-tta, kolma-nteen, kolma-ntena, kolma-nne-ssa. */
const ordWord = (stem: string): Word =>
  word(`${stem}s`, `${stem}nnen`, stem + harmony(stem, 'tta'), `${stem}nteen`, stem + harmony(stem, 'ntena'), `${stem}nne`);
const ORD_UNITS = ['', 'yhde', 'kahde', 'kolma', 'neljä', 'viide', 'kuude', 'seitsemä', 'kahdeksa', 'yhdeksä'].map(ordWord);
const FIRST = word('ensimmäinen', 'ensimmäisen', 'ensimmäistä', 'ensimmäiseen', 'ensimmäisenä', 'ensimmäise');
const SECOND = word('toinen', 'toisen', 'toista', 'toiseen', 'toisena', 'toise');
const ORD_TEN = ordWord('kymmene');
const ORD_HUNDRED = ordWord('sada');
const ORD_THOUSAND = ordWord('tuhanne');
const ORD_MILLION = ordWord('miljoona');

/** «last»: a unidade fecha o número (21. = kahdeskymmenesensimmäinen); multiplicando, é kahdes-, yhdes-. */
function ordBelow1000(n: number, c: Case, last: boolean): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  let out = h === 0 ? '' : (h === 1 ? '' : inflect(ORD_UNITS[h], c)) + inflect(ORD_HUNDRED, c);
  const unit = (u: number) => inflect(last && u === 1 ? FIRST : last && u === 2 ? SECOND : ORD_UNITS[u], c);
  if (r === 0) return out;
  if (r < 10) out += unit(r);
  else if (r === 10) out += inflect(ORD_TEN, c);
  else if (r < 20) out += `${inflect(ORD_UNITS[r - 10], c)}toista`;
  else out += inflect(ORD_UNITS[Math.floor(r / 10)], c) + inflect(ORD_TEN, c) + (r % 10 ? unit(r % 10) : '');
  return out;
}

/** Ordinal no caso pedido: finnishOrdinal(28, 'ess') = «kahdentenakymmenentenäkahdeksantena». */
export function finnishOrdinal(n: number, c: Case = 'nom'): string {
  if (!Number.isInteger(n) || n < 1 || n >= 1e9) return String(n);
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const millions = m === 0 ? '' : (m === 1 ? '' : ordBelow1000(m, c, false)) + inflect(ORD_MILLION, c);
  const thousands = k === 0 ? '' : (k === 1 ? '' : ordBelow1000(k, c, false)) + inflect(ORD_THOUSAND, c);
  return millions + thousands + (rest ? ordBelow1000(rest, c, true) : '');
}

// ——— o caso do substantivo seguinte ———

type Lexicon = { nom: Set<string>; gen: Set<string>; par: Set<string>; stems: Set<string>; known: Set<string> };
let lexicon: Lexicon | null = null;

/** Substantivos que vêm muito depois de números e que o vocabulário não tem: [nominativo, genitivo, partitivo]. */
const EXTRA: [string, string, string][] = [
  ['metri', 'metrin', 'metriä'],
  ['senttimetri', 'senttimetrin', 'senttimetriä'],
  ['gramma', 'gramman', 'grammaa'],
  ['dollari', 'dollarin', 'dollaria'],
  ['punta', 'punnan', 'puntaa'],
  ['aste', 'asteen', 'astetta'],
];

/**
 * As formas do vocabulário (substantivos e adjetivos): «talo (talon, taloa)» dá o nominativo, o
 * genitivo, o partitivo e os radicais onde entram as terminações (talo-, kaupungi-, kaupunki-, vuote-).
 */
function lex(): Lexicon {
  if (lexicon) return lexicon;
  const l: Lexicon = { nom: new Set(), gen: new Set(), par: new Set(), stems: new Set(), known: new Set() };
  const add = (nom: string, gens: string[], pars: string[]) => {
    l.nom.add(nom);
    l.stems.add(nom);
    for (const g of gens) {
      if (!g.endsWith('n')) continue;
      l.gen.add(g);
      l.stems.add(g.slice(0, -1));
      // vuosi, vuoden → vuote-en, vuote-na; käsi → käte-en
      if (nom.endsWith('si') && g.endsWith('den')) l.stems.add(`${g.slice(0, -3)}te`);
    }
    for (const p of pars) {
      l.par.add(p);
      l.stems.add(p.replace(/(t?t[aä]|[aä])$/, ''));
    }
  };
  const forms = (s: string) => s.split(/\s+ou\s+|\//).map((f) => f.trim().toLowerCase()).filter((f) => /^[\p{L}-]{2,}$/u.test(f));
  for (const row of ROWS) {
    const w = row[0].toLowerCase();
    l.known.add(w);
    if ((row[2] !== 'substantivo' && row[2] !== 'adjetivo') || w.includes(' ')) continue;
    // «(talon, taloa)», «(lapsen, lasta; pl. lapset)», «(ruoan ou ruuan, ruokaa)»
    const m = row[1].match(/\(([^(),;]+),\s*([^(),;]+)[);]/);
    add(w, m ? forms(m[1]) : [], m ? forms(m[2]) : []);
  }
  for (const [n, g, p] of EXTRA) add(n, [g], [p]);
  lexicon = l;
  return l;
}

const SUFFIXES: [Case, string][] = [['ine', 'ssa'], ['ela', 'sta'], ['ade', 'lla'], ['abl', 'lta'], ['all', 'lle'], ['tra', 'ksi'], ['ess', 'na']];

/**
 * Terminações que não se confundem com o partitivo nem com o genitivo (-sta, de «kysymys-tä», e -een,
 * de «kappaleen», ficam de fora): valem mesmo quando o vocabulário não conhece a palavra
 * (kaupungissa, kaupungille, kaupunkiin).
 */
const PLAIN_SUFFIXES: [Case, RegExp][] = [['ine', /ss[aä]$/], ['ade', /ll[aä]$/], ['abl', /lt[aä]$/], ['all', /lle$/], ['tra', /ksi$/], ['ill', /(iin|aan|ään|oon|yyn|öön|seen)$/]];

/** O caso de uma palavra do vocabulário (em qualquer forma que ele permita reconhecer), ou null. */
function caseOf(w: string, guess = false): Case | null {
  const l = lex();
  if (l.par.has(w)) return 'par';
  if (l.nom.has(w)) return 'nom';
  if (l.gen.has(w)) return 'gen';
  for (const [c, suf] of SUFFIXES) {
    for (const s of new Set([suf, suf.replace(/a/g, 'ä')])) if (w.endsWith(s) && l.stems.has(w.slice(0, -s.length))) return c;
  }
  // ilativo: talo-on, päivä-än, maa-han, huonee-seen
  const ill = w.match(/([aeiouyäö])\1n$/) ? w.slice(0, -2) : w.match(/seen$/) ? w.slice(0, -4) : w.match(/h([aeiouyäö])n$/) ? w.slice(0, -3) : null;
  if (ill && l.stems.has(ill)) return 'ill';
  if (w.endsWith('n') && l.stems.has(w.slice(0, -1))) return 'gen';
  if (guess && w.length >= 6 && !l.known.has(w)) for (const [c, re] of PLAIN_SUFFIXES) if (re.test(w)) return c;
  return null;
}

/** Palavras que não são o substantivo do número, mesmo com cara de caso (kello 7 illalla). */
const NOT_NOUN =
  /^(aamulla|illalla|yöllä|päivällä|aamupäivällä|iltapäivällä|keväällä|kesällä|syksyllä|talvella|yhdessä|täällä|siellä|tuolla|jossa|missä|tänään|mukaan|kokonaan|ainoastaan|suoraan|lainkaan|ja|tai|sekä|on|oli|ovat|olivat|ei|kun|jos|että|mutta|kuin)$/;

/** O caso que o número toma pela palavra seguinte (ou a depois dela, pulando um adjetivo); null se não souber. */
function nounCase(after: string): Case | null {
  const m = after.match(/^\s+(\p{Ll}+)(?:\s+(\p{Ll}+))?/u);
  if (!m || NOT_NOUN.test(m[1])) return null;
  const c = caseOf(m[1], true);
  if (c) return c;
  if (!m[2] || lex().known.has(m[1])) return null;
  return caseOf(m[2]);
}

/** O número depois destas palavras é um ano, uma hora ou um rótulo: fica no nominativo (vuonna 1917, huone 214). */
const FIXED_BEFORE = /(?:^|[^\p{L}])(vuo(nna|si|den|desta|teen|delta|delle|dessa|sina|sien|sista|siin)|\p{L}*kuu(ssa|sta|hun|n|ta|lla|lta)?|kevää(llä|stä)|kesä(llä|stä)|syksy(llä|stä)|talve(lla|sta)|kello|klo|huone\p{L}*|numero\p{L}*|nro|linja\p{L}*|bussi\p{L}*|sivu\p{L}*|laituri\p{L}*|raide|raiteelta|portti|kohta|pykälä\p{L}*)\s+$/iu;
const CLOCK_BEFORE = /(?:^|[^\p{L}])(kello|klo)\s+$/iu;

/** Os símbolos depois do número: [depois de 1, depois dos outros (partitivo), radical dos outros casos]. */
const SYMBOLS: Record<string, [string, string, string]> = {
  '%': ['prosentti', 'prosenttia', 'prosenti'],
  '€': ['euro', 'euroa', 'euro'],
  $: ['dollari', 'dollaria', 'dollari'],
  '£': ['punta', 'puntaa', 'punna'],
};

/** O caso de uma terminação colada com dois-pontos (3:ssa, 5:n, 100:aan) e se é de ordinal (5:s, 5:nnessä). */
function colonCase(suffix: string): { c: Case; ord: boolean } | null {
  let s = suffix.toLowerCase();
  let ord = false;
  if (s === 's') return { c: 'nom', ord: true };
  if (/^nne./.test(s)) {
    ord = true;
    s = s.slice(3);
  } else if (/^nte(en|n[aä])$/.test(s)) return { c: s.startsWith('nteen') ? 'ill' : 'ess', ord: true };
  if (s === 'n') return { c: 'gen', ord };
  for (const [c, suf] of SUFFIXES) if (s === suf || s === suf.replace(/a/g, 'ä')) return { c, ord };
  if (!ord && /^(h?([aeiouyäö])\2?n|seen|siin)$/.test(s)) return { c: 'ill', ord };
  if (!ord && /^(t?t?[aä])$/.test(s)) return { c: 'par', ord };
  return null;
}

/** Os decimais: até dois algarismos (sem zero na frente), como número: 3,50 = kolme pilkku viisikymmentä; senão, um a um. */
function decimals(dec: string): string {
  if (dec.length <= 2 && dec[0] !== '0') return finnishNumber(Number(dec));
  return [...dec].map((d) => finnishNumber(Number(d))).join(' ');
}

/** «14.30» → neljätoista kolmekymmentä; «9.05» → yhdeksän nolla viisi; «14.00» → neljätoista. */
function clock(h: number, min: string): string {
  const m = Number(min);
  return `${finnishNumber(h)}${m === 0 ? '' : min[0] === '0' ? ` nolla ${finnishNumber(m)}` : ` ${finnishNumber(m)}`}`;
}

const MONTHS_PAR = ['', 'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'];

const NUMBER =
  /(?<![\p{L}\d])([€$£]\s?)?(\d{1,2}\.\d{1,2}\.(?:\d{4}(?!\d))?|\d{1,2}[.:]\d{2}(?![\d,]|\.\d)|\d{1,3}(?:[   ]\d{3})+(?:,\d+)?(?![\d,])|\d+(?:,\d+)?)(\s?[%€$£])?(\.(?=\s+\p{Ll})|:\p{L}+|-\p{L}+)?(?![\p{L}\d])/gu;

/**
 * Troca os números de um texto pelas palavras, no caso do substantivo que vem depois: «3 taloa» →
 * «kolme taloa», «3 talossa» → «kolmessa talossa», «2 viikon päästä» → «kahden viikon päästä»,
 * «6. joulukuuta» → «kuudes joulukuuta», «vuonna 1917» → «vuonna tuhatyhdeksänsataaseitsemäntoista».
 */
export function spellFinnishNumbers(text: string): string {
  const src = text.replace(/(?<![\p{L}])klo(?=\s*\d)/giu, 'kello');
  return src.replace(NUMBER, (all, pre: string | undefined, num: string, sym: string | undefined, tail: string | undefined, at: number) => {
    const before = src.slice(Math.max(0, at - 30), at);
    const end = at + all.length;
    const after = src.slice(end, end + 60);
    const clockBefore = CLOCK_BEFORE.test(before);
    const symbol = SYMBOLS[(pre ?? sym ?? '').trim()];

    // datas (6.12.1917, 6.12.) e horas (14.30, 9:05)
    const date = num.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})?$/);
    if (date && !symbol) {
      const [d, mo] = [Number(date[1]), Number(date[2])];
      if (!clockBefore && d >= 1 && d <= 31 && mo >= 1 && mo <= 12) {
        // «6.12.» no fim da frase: o ponto da data também fecha a frase
        const stop = !date[3] && !/^\s+\p{Ll}/u.test(after) ? '.' : '';
        return `${finnishOrdinal(d)} ${MONTHS_PAR[mo]}${date[3] ? ` ${finnishNumber(Number(date[3]))}` : ''}${tail ?? stop}`;
      }
      if (Number(date[2]) < 60 && date[2].length === 2 && !date[3]) return `${clock(d, date[2])}.${tail ?? ''}`;
      return all;
    }
    const time = num.match(/^(\d{1,2})[.:](\d{2})$/);
    if (time && !symbol) return Number(time[1]) < 24 && Number(time[2]) < 60 ? clock(Number(time[1]), time[2]) + (tail ?? '') : all;

    const [intPart, dec] = num.replace(/[   ]/g, '').split(',');
    const n = Number(intPart);
    if (n >= 1e9) return all;

    // com decimais, o número fica no nominativo e o símbolo no partitivo: kolme pilkku viisi prosenttia
    if (dec !== undefined) {
      const words = `${finnishNumber(n)} pilkku ${decimals(dec)}`;
      return symbol ? `${words} ${symbol[1]}${tail ?? ''}` : words + (tail ?? '');
    }

    // 3:ssa, 5:n, 5:s (ordinal), 100 %:lla
    if (tail?.startsWith(':')) {
      const cc = colonCase(tail.slice(1));
      if (!cc) return all;
      const words = cc.ord ? finnishOrdinal(n, cc.c) : finnishNumber(n, cc.c);
      if (!symbol) return words;
      const noun = cc.c === 'nom' ? symbol[n === 1 ? 0 : 1] : inflect(word(symbol[0], `${symbol[2]}n`, symbol[1], `${symbol[0]}in`, `${symbol[0]}na`, symbol[2]), cc.c);
      return `${words} ${noun}`;
    }
    // 1800-luvulla, 5-vuotias: o número no nominativo, grudado
    if (tail?.startsWith('-')) return (symbol ? `${finnishNumber(n)} ${symbol[n === 1 ? 0 : 1]}` : finnishNumber(n)) + tail.slice(1);
    if (symbol) return `${finnishNumber(n)} ${symbol[n === 1 ? 0 : 1]}${tail ?? ''}`;

    // o ordinal concorda sempre (helmikuun 28. päivänä); o cardinal, só se não for ano, hora ou rótulo
    const ordinal = tail === '.';
    const c = !ordinal && FIXED_BEFORE.test(before) ? null : nounCase(after);
    const numeralCase: Case = !c || c === 'par' ? 'nom' : c;
    return ordinal ? finnishOrdinal(n, numeralCase) : finnishNumber(n, numeralCase);
  });
}
