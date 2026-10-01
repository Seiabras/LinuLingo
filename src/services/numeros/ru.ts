/**
 * Números por extenso em russo, para a voz (a do aparelho lê «2 книги» sem saber o gênero, e a
 * neural nem sempre acerta o caso). O numeral russo concorda com o substantivo em gênero (1 e 2:
 * оди́н/одна́/одно́/одни́, два/две) e em CASO: todos os pedaços do número se declinam (о́коло двадцати́
 * пяти́ рубле́й, с двумя́ детьми́). O caso vem de duas pistas, nesta ordem:
 *
 * 1. a preposição logo antes (без/до/из/от/у/о́коло + genitivo, к + dativo, о/при + preposicional,
 *    в/на + acusativo ou preposicional, с + genitivo ou instrumental, ме́жду/над/пе́ред + instrumental);
 * 2. a terminação do substantivo logo depois (pulando um adjetivo), reconhecida a partir das palavras
 *    do vocabulário do russo: depois de 2–4, «ме́тров» (genitivo plural) só cabe se o número estiver
 *    no genitivo (достига́ет ты́сячи шестисо́т сорока́ двух ме́тров); «-ам», «-ами», «-ах» dão o dativo,
 *    o instrumental e o preposicional; depois de 1, a forma do singular diz o caso (одну́ кни́гу).
 *
 * Sem pista, o nominativo; sem substantivo conhecido, a forma de contar (оди́н, два). Substantivos
 * só de plural pedem os coletivos: дво́е часо́в, тро́е дете́й. Os ordinais só declinam a última
 * palavra: в ты́сяча восемьсо́т двена́дцатом году́; as datas são ordinais neutros no genitivo
 * (пятна́дцатого ма́рта), no nominativo depois de «сего́дня» (Сего́дня пя́тое ма́я) e no acusativo
 * depois de «по» (с пе́рвого по деся́тое ма́я). A voz não precisa do acento: sai sem ele.
 */
import { VOCAB_RU } from '@/data/ru/vocabulario';

type Case = 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'pre';
type Gender = 'm' | 'f' | 'n' | 'pl';
type Forms = Record<Case, string>;

/** «nom gen dat acc ins pre» → Forms */
const f6 = (s: string): Forms => {
  const [nom, gen, dat, acc, ins, pre] = s.split(' ');
  return { nom, gen, dat, acc, ins, pre };
};

const ONE: Record<Gender, Forms> = {
  m: f6('один одного одному один одним одном'),
  f: f6('одна одной одной одну одной одной'),
  n: f6('одно одного одному одно одним одном'),
  pl: f6('одни одних одним одни одними одних'),
};
const TWO_TO_FOUR: Forms[] = [f6('два двух двум два двумя двух'), f6('три трёх трём три тремя трёх'), f6('четыре четырёх четырём четыре четырьмя четырёх')];
/** Os coletivos, para substantivos só de plural: дво́е су́ток, тро́е дете́й. */
const COLLECTIVE: Forms[] = [f6('двое - - двое - -'), f6('трое - - трое - -'), f6('четверо - - четверо - -')];

/** 5–20 e 30 declinam como «дверь»: пять, пяти́, пятью́. */
function softNumeral(nom: string): Forms {
  const stem = nom === 'восемь' ? 'восьм' : nom.slice(0, -1);
  return { nom, gen: `${stem}и`, dat: `${stem}и`, acc: nom, ins: `${nom}ю`, pre: `${stem}и` };
}
const TEENS = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const UNITS: Forms[] = ['пять', 'шесть', 'семь', 'восемь', 'девять'].map(softNumeral);
const TENS: Record<number, Forms> = {
  2: softNumeral('двадцать'),
  3: softNumeral('тридцать'),
  4: f6('сорок сорока сорока сорок сорока сорока'),
  5: f6('пятьдесят пятидесяти пятидесяти пятьдесят пятьюдесятью пятидесяти'),
  6: f6('шестьдесят шестидесяти шестидесяти шестьдесят шестьюдесятью шестидесяти'),
  7: f6('семьдесят семидесяти семидесяти семьдесят семьюдесятью семидесяти'),
  8: f6('восемьдесят восьмидесяти восьмидесяти восемьдесят восемьюдесятью восьмидесяти'),
  9: f6('девяносто девяноста девяноста девяносто девяноста девяноста'),
};
const HUNDREDS: Record<number, Forms> = {
  1: f6('сто ста ста сто ста ста'),
  2: f6('двести двухсот двумстам двести двумястами двухстах'),
  3: f6('триста трёхсот трёмстам триста тремястами трёхстах'),
  4: f6('четыреста четырёхсот четырёмстам четыреста четырьмястами четырёхстах'),
  5: f6('пятьсот пятисот пятистам пятьсот пятьюстами пятистах'),
  6: f6('шестьсот шестисот шестистам шестьсот шестьюстами шестистах'),
  7: f6('семьсот семисот семистам семьсот семьюстами семистах'),
  8: f6('восемьсот восьмисот восьмистам восемьсот восемьюстами восьмистах'),
  9: f6('девятьсот девятисот девятистам девятьсот девятьюстами девятистах'),
};

/** Um substantivo que o próprio número traz (ты́сяча, миллио́н, проце́нт…): singular e plural. */
interface Noun {
  g: Gender;
  sg: Forms;
  pl: Forms;
}
const noun = (g: Gender, sg: string, pl: string): Noun => ({ g, sg: f6(sg), pl: f6(pl) });
const THOUSAND = noun('f', 'тысяча тысячи тысяче тысячу тысячей тысяче', 'тысячи тысяч тысячам тысячи тысячами тысячах');
const MILLION = noun('m', 'миллион миллиона миллиону миллион миллионом миллионе', 'миллионы миллионов миллионам миллионы миллионами миллионах');
const BILLION = noun('m', 'миллиард миллиарда миллиарду миллиард миллиардом миллиарде', 'миллиарды миллиардов миллиардам миллиарды миллиардами миллиардах');
const HOUR = noun('m', 'час часа часу час часом часе', 'часы часов часам часы часами часах');
const UNIT_NOUNS: Record<string, Noun> = {
  '%': noun('m', 'процент процента проценту процент процентом проценте', 'проценты процентов процентам проценты процентами процентах'),
  '₽': noun('m', 'рубль рубля рублю рубль рублём рубле', 'рубли рублей рублям рубли рублями рублях'),
  $: noun('m', 'доллар доллара доллару доллар долларом долларе', 'доллары долларов долларам доллары долларами долларах'),
  '€': noun('m', 'евро евро евро евро евро евро', 'евро евро евро евро евро евро'),
  '°': noun('m', 'градус градуса градусу градус градусом градусе', 'градусы градусов градусам градусы градусами градусах'),
  км: noun('m', 'километр километра километру километр километром километре', 'километры километров километрам километры километрами километрах'),
  кг: noun('m', 'килограмм килограмма килограмму килограмм килограммом килограмме', 'килограммы килограммов килограммам килограммы килограммами килограммах'),
  см: noun('m', 'сантиметр сантиметра сантиметру сантиметр сантиметром сантиметре', 'сантиметры сантиметров сантиметрам сантиметры сантиметрами сантиметрах'),
  м: noun('m', 'метр метра метру метр метром метре', 'метры метров метрам метры метрами метрах'),
  л: noun('m', 'литр литра литру литр литром литре', 'литры литров литрам литры литрами литрах'),
  'мин.': noun('f', 'минута минуты минуте минуту минутой минуте', 'минуты минут минутам минуты минутами минутах'),
  'ч.': HOUR,
  'коп.': noun('f', 'копейка копейки копейке копейку копейкой копейке', 'копейки копеек копейкам копейки копейками копейках'),
  'тыс.': THOUSAND,
  млн: MILLION,
  млрд: BILLION,
};
UNIT_NOUNS['руб.'] = UNIT_NOUNS['₽'];
/** Os centavos de cada moeda: 99,99 ₽ = девяносто девять рублей девяносто девять копеек. */
const MINOR: Record<string, Noun> = { '₽': UNIT_NOUNS['коп.'], 'руб.': UNIT_NOUNS['коп.'], $: noun('m', 'цент цента центу цент центом центе', 'центы центов центам центы центами центах') };
MINOR['€'] = MINOR.$;

/** Uma quantia, com ou sem centavos: «500 ₽», «99,99 ₽», «€2,50». */
function money(int: number, dec: string | undefined, unit: string, c: Case): string {
  const nn = UNIT_NOUNS[unit];
  const major = `${russianNumber(int, nn.g, c)} ${nounAfter(nn, int, c)}`;
  const cents = dec ? Number(dec.padEnd(2, '0').slice(0, 2)) : 0;
  if (!cents) return major;
  const mn = MINOR[unit];
  return `${major} ${russianNumber(cents, mn.g, c)} ${nounAfter(mn, cents, c)}`;
}

const ends1 = (n: number) => n % 10 === 1 && n % 100 !== 11;
const ends234 = (n: number) => n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14);

/** A forma do substantivo depois de «n» no caso «c»: 1 → singular; 2–4 → genitivo singular; 5+ → genitivo plural. */
function nounAfter(nn: Noun, n: number, c: Case): string {
  if (ends1(n)) return nn.sg[c];
  if (c === 'nom' || c === 'acc') return ends234(n) ? nn.sg.gen : nn.pl.gen;
  return nn.pl[c];
}

/** 1 a 999 no caso e gênero pedidos (gênero só importa para 1 e 2). */
function below1000(n: number, g: Gender, c: Case): string {
  const out: string[] = [];
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (h) out.push(HUNDREDS[h][c]);
  const unit = (u: number) => {
    if (u === 1) out.push(ONE[g][c]);
    else if (u >= 2 && u <= 4) out.push(u === 2 && g === 'f' && (c === 'nom' || c === 'acc') ? 'две' : TWO_TO_FOUR[u - 2][c]);
    else if (u >= 5) out.push(UNITS[u - 5][c]);
  };
  if (r >= 10 && r < 20) out.push(softNumeral(TEENS[r - 10])[c]);
  else {
    if (r >= 20) out.push(TENS[Math.floor(r / 10)][c]);
    // «одни́» com substantivo só de plural, também nos compostos: два́дцать одни́ су́тки
    unit(r % 10);
  }
  return out.join(' ');
}

/** O número cardinal por extenso, declinado: russianNumber(25, 'f', 'gen') = «двадцати пяти». */
export function russianNumber(n: number, g: Gender = 'm', c: Case = 'nom'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'ноль';
  // дво́е, тро́е, че́тверо só sozinhos («два́дцать два» não tem coletivo) e só no nominativo e no
  // acusativo: nos outros casos, o cardinal (о́коло двух су́ток)
  if (g === 'pl' && n >= 2 && n <= 4 && (c === 'nom' || c === 'acc')) return COLLECTIVE[n - 2][c];
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const parts: string[] = [];
  if (m) parts.push(m === 1 && (c === 'nom' || c === 'acc') ? 'миллион' : `${below1000(m, 'm', c)} ${nounAfter(MILLION, m, c)}`);
  // 1000 é só «ты́сяча» (acusativo «ты́сячу»); com milhões na frente, «одна́ ты́сяча»
  if (k) parts.push(k === 1 && !m ? THOUSAND.sg[c] : `${below1000(k, 'f', c)} ${nounAfter(THOUSAND, k, c)}`);
  if (rest) parts.push(below1000(rest, g, c));
  return parts.join(' ');
}

/* ------------------------------------------------------------------ ordinais */

type OrdType = 'h' | 's' | '3';
const ORD_END: Record<'h' | '3', Record<Gender, Forms>> = {
  h: {
    m: f6('ый ого ому ый ым ом'),
    f: f6('ая ой ой ую ой ой'),
    n: f6('ое ого ому ое ым ом'),
    pl: f6('ые ых ым ые ыми ых'),
  },
  '3': {
    m: f6('ий ьего ьему ий ьим ьем'),
    f: f6('ья ьей ьей ью ьей ьей'),
    n: f6('ье ьего ьему ье ьим ьем'),
    pl: f6('ьи ьих ьим ьи ьими ьих'),
  },
};
/** Radical e tipo: «s» = acento na terminação (второ́й, шесто́й). */
const ORD_UNITS: [string, OrdType][] = [
  ['', 'h'],
  ['перв', 'h'],
  ['втор', 's'],
  ['трет', '3'],
  ['четвёрт', 'h'],
  ['пят', 'h'],
  ['шест', 's'],
  ['седьм', 's'],
  ['восьм', 's'],
  ['девят', 'h'],
  ['десят', 'h'],
  ['одиннадцат', 'h'],
  ['двенадцат', 'h'],
  ['тринадцат', 'h'],
  ['четырнадцат', 'h'],
  ['пятнадцат', 'h'],
  ['шестнадцат', 'h'],
  ['семнадцат', 'h'],
  ['восемнадцат', 'h'],
  ['девятнадцат', 'h'],
];
const ORD_TENS: [string, OrdType][] = [
  ['', 'h'],
  ['', 'h'],
  ['двадцат', 'h'],
  ['тридцат', 'h'],
  ['сороков', 's'],
  ['пятидесят', 'h'],
  ['шестидесят', 'h'],
  ['семидесят', 'h'],
  ['восьмидесят', 'h'],
  ['девяност', 'h'],
];
const ORD_HUNDREDS = ['', 'сот', 'двухсот', 'трёхсот', 'четырёхсот', 'пятисот', 'шестисот', 'семисот', 'восьмисот', 'девятисот'];

function ordEnding(stem: string, t: OrdType, g: Gender, c: Case): string {
  const e = ORD_END[t === '3' ? '3' : 'h'][g][c];
  return stem + (t === 's' && e === 'ый' ? 'ой' : e);
}

/** O começo de um composto em «-ты́сячный»: 2 → двух, 21 → двадцатиодно, 100 → сто. */
function compoundPrefix(n: number): string {
  if (n === 1) return '';
  if (n === 100) return 'сто';
  return below1000(n, 'm', 'gen')
    .replace(/^одного$/, 'одно')
    .replace(/ одного$/, ' одно')
    .replace(/\s+/g, '');
}

/** O ordinal: só a última palavra vira ordinal (ты́сяча восемьсо́т двена́дцатый). */
export function russianOrdinal(n: number, g: Gender = 'm', c: Case = 'nom'): string {
  if (!Number.isInteger(n) || n <= 0 || n >= 1e9) return String(n);
  const r = n % 100;
  const h = n % 1000;
  let head = 0;
  let last: string;
  if (r) {
    head = n - r;
    if (r < 20) last = ordEnding(...ORD_UNITS[r], g, c);
    else if (r % 10 === 0) last = ordEnding(...ORD_TENS[r / 10], g, c);
    else last = `${TENS[Math.floor(r / 10)].nom} ${ordEnding(...ORD_UNITS[r % 10], g, c)}`;
  } else if (h) {
    head = n - h;
    last = ordEnding(ORD_HUNDREDS[h / 100], 'h', g, c);
  } else if (n % 1e6) {
    head = n - (n % 1e6);
    last = ordEnding(`${compoundPrefix((n % 1e6) / 1000)}тысячн`, 'h', g, c);
  } else {
    last = ordEnding(`${compoundPrefix(n / 1e6)}миллионн`, 'h', g, c);
  }
  return head ? `${russianNumber(head)} ${last}` : last;
}

/* ------------------------------------------------------------------ decimais */

const DENOM = ['', 'десят', 'сот', 'тысячн'];
/** «2,5» → «две це́лых пять деся́тых» (o substantivo depois, no genitivo singular, é com o texto). */
function decimal(int: number, dec: string, c: Case): string {
  const frac = (k: number, stem: string) => {
    const g: Gender = ends1(k) ? 'f' : 'pl';
    // depois de 2+ (no nominativo) o adjetivo vai para o genitivo plural: две це́лых
    const cc: Case = g === 'pl' && (c === 'nom' || c === 'acc') ? 'gen' : c;
    return `${russianNumber(k, 'f', c)} ${ordEnding(stem, 'h', g, cc)}`;
  };
  const d = dec.length <= 3 ? `${frac(Number(dec), DENOM[dec.length])}` : [...dec].map((x) => russianNumber(Number(x))).join(' ');
  return `${frac(int, 'цел')} ${d}`;
}

/* ------------------------------------------------------------------ o substantivo depois */

/** Uma leitura possível de uma forma: gênero do substantivo, caso, e se está no plural. */
interface Reading {
  g: Gender;
  c: Case;
  pl: boolean;
  /** substantivo adjetivo (учёный, столо́вая): depois de 2–4 vai para o genitivo plural (два учёных) */
  adj?: boolean;
}

const norm = (w: string) =>
  w
    .normalize('NFD')
    .replace(/\u0301/g, '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/ё/g, 'е');
const VOWEL = /[аеёиоуыэюя]$/;
const SIBILANT = /[жшщч]$/;
const SPIKY = /[кгхжшщч]$/; // pedem “и” em vez de “ы”

/** As formas de um substantivo do vocabulário, pelas declinações regulares. */
function declineLemma(lemma: string, g: Gender): [string, Case, boolean, boolean][] {
  const out: [string, Case, boolean, boolean][] = [];
  let asAdj = false;
  const sg = (c: Case, ...ws: string[]) => ws.forEach((w) => out.push([w, c, false, asAdj]));
  const pl = (c: Case, ...ws: string[]) => ws.forEach((w) => out.push([w, c, true, asAdj]));
  const i = (s: string) => (SPIKY.test(s) ? 'и' : 'ы');
  // substantivo adjetivo (учёный, живо́тное, да́нные, столо́вая): declina como adjetivo; em -ой/-ий/-ая
  // pode ser substantivo comum (геро́й, ге́ний, кни́га não), então fica também a declinação comum
  const adj = /^(.+?)(ый|ий|ой|ая|яя|ое|ее|ые|ие)$/.exec(lemma);
  const onlyAdj = adj && ((g === 'm' && adj[2] === 'ый') || (g === 'n' && /^(ое|ее)$/.test(adj[2])) || (g === 'pl' && /^(ые|ие)$/.test(adj[2])));
  const maybeAdj = adj && ((g === 'm' && /^(ой|ий)$/.test(adj[2])) || (g === 'f' && /^(ая|яя)$/.test(adj[2])));
  if (adj && (onlyAdj || maybeAdj) && !VOWEL.test(adj[1])) {
    asAdj = true;
    const s = adj[1];
    const y = SPIKY.test(s) || /^[ияе]/.test(adj[2]) ? 'и' : 'ы';
    if (g === 'pl') pl('nom', lemma);
    else if (g === 'f') {
      sg('nom', lemma);
      sg('gen', `${s}ой`, `${s}ей`);
      sg('dat', `${s}ой`, `${s}ей`);
      sg('acc', `${s}ую`, `${s}юю`);
      sg('ins', `${s}ой`, `${s}ей`);
      sg('pre', `${s}ой`, `${s}ей`);
    } else {
      sg('nom', lemma);
      sg('acc', lemma);
      sg('gen', `${s}ого`, `${s}его`);
      sg('dat', `${s}ому`, `${s}ему`);
      sg('ins', `${s}${y}м`);
      sg('pre', `${s}ом`, `${s}ем`);
    }
    if (g !== 'pl') pl('nom', `${s}${y}е`);
    pl('gen', `${s}${y}х`);
    pl('dat', `${s}${y}м`);
    pl('ins', `${s}${y}ми`);
    pl('pre', `${s}${y}х`);
    if (onlyAdj) return out;
    asAdj = false;
  }
  if (g === 'pl') {
    const s = lemma.slice(0, -1);
    const soft = /и$/.test(lemma) && !SPIKY.test(s);
    pl('nom', lemma);
    pl('acc', lemma);
    pl('dat', `${s}${soft ? 'ям' : 'ам'}`);
    pl('ins', `${s}${soft ? 'ями' : 'ами'}`);
    pl('pre', `${s}${soft ? 'ях' : 'ах'}`);
    return out;
  }
  const last = lemma.slice(-1);
  if (last === 'а' || last === 'я') {
    // кни́га, неде́ля, фами́лия (e os masculinos em -а: па́па, мужчи́на)
    const s = lemma.slice(0, -1);
    const ia = /ия$/.test(lemma);
    sg('nom', lemma);
    if (last === 'а') {
      sg('gen', `${s}${i(s)}`);
      sg('dat', `${s}е`);
      sg('acc', `${s}у`);
      sg('ins', `${s}ой`, `${s}ей`);
      sg('pre', `${s}е`);
      pl('nom', `${s}${i(s)}`);
      pl('gen', s);
      pl('dat', `${s}ам`);
      pl('ins', `${s}ами`);
      pl('pre', `${s}ах`);
      // вилка → ви́лок, ло́жка → ло́жек: a vogal que entra no genitivo plural
      const fl = /^(.*[^аеёиоуыэюя])([^аеёиоуыэюяьй])$/.exec(s);
      if (fl && /[кн]$/.test(s)) pl('gen', `${fl[1]}${SIBILANT.test(fl[1]) || /[йь]$/.test(fl[1]) ? 'е' : 'о'}${fl[2]}`, `${fl[1]}е${fl[2]}`);
    } else {
      sg('gen', `${s}и`);
      sg('dat', ia ? `${s}и` : `${s}е`);
      sg('acc', `${s}ю`);
      sg('ins', `${s}ей`);
      sg('pre', ia ? `${s}и` : `${s}е`);
      pl('nom', `${s}и`);
      pl('gen', ia ? `${s.slice(0, -1)}ий` : `${s}ь`, `${s}ей`);
      pl('dat', `${s}ям`);
      pl('ins', `${s}ями`);
      pl('pre', `${s}ях`);
    }
    return out;
  }
  if (g === 'n' && /мя$/.test(lemma)) {
    const s = lemma.slice(0, -1);
    sg('nom', lemma);
    sg('acc', lemma);
    sg('gen', `${s}ени`);
    sg('dat', `${s}ени`);
    sg('ins', `${s}енем`);
    sg('pre', `${s}ени`);
    pl('nom', `${s}ена`);
    pl('gen', `${s}ен`);
    pl('dat', `${s}енам`);
    pl('ins', `${s}енами`);
    pl('pre', `${s}енах`);
    return out;
  }
  if (g === 'n' && (last === 'о' || last === 'е')) {
    const s = lemma.slice(0, -1);
    const soft = last === 'е' && !SIBILANT.test(s) && s.slice(-1) !== 'ц';
    const ie = /ие$/.test(lemma);
    sg('nom', lemma);
    sg('acc', lemma);
    sg('gen', `${s}${soft ? 'я' : 'а'}`);
    sg('dat', `${s}${soft ? 'ю' : 'у'}`);
    sg('ins', `${s}${last === 'е' ? 'ем' : 'ом'}`);
    sg('pre', ie ? `${s}и` : `${s}е`);
    pl('nom', `${s}${soft ? 'я' : 'а'}`);
    pl('gen', ie ? `${s.slice(0, -1)}ий` : soft ? `${s}ей` : s);
    pl('dat', `${s}${soft ? 'ям' : 'ам'}`);
    pl('ins', `${s}${soft ? 'ями' : 'ами'}`);
    pl('pre', `${s}${soft ? 'ях' : 'ах'}`);
    return out;
  }
  if (last === 'ь' && g === 'f') {
    const s = lemma.slice(0, -1);
    const a = SIBILANT.test(s) ? 'а' : 'я';
    sg('nom', lemma);
    sg('acc', lemma);
    sg('gen', `${s}и`);
    sg('dat', `${s}и`);
    sg('ins', `${lemma}ю`);
    sg('pre', `${s}и`);
    pl('nom', `${s}и`);
    pl('gen', `${s}ей`);
    pl('dat', `${s}${a}м`);
    pl('ins', `${s}${a}ми`);
    pl('pre', `${s}${a}х`);
    return out;
  }
  if (g !== 'm') return out;
  // masculinos: стол, рубль, музе́й; com a vogal que cai: день → дня, оте́ц → отца́, ры́нок → ры́нка
  const stems: [string, boolean][] = [];
  const soft = last === 'ь' || last === 'й';
  const base = soft ? lemma.slice(0, -1) : lemma;
  stems.push([base, soft]);
  const fleeting = /^(.*[^аеёиоуыэюя])[оеё]([кцн])(ь?)$/.exec(lemma);
  if (fleeting) stems.push([fleeting[1] + fleeting[2], soft]);
  sg('nom', lemma);
  sg('acc', lemma);
  for (const [s, sf] of stems) {
    const ii = /ий$/.test(lemma);
    if (sf) {
      sg('gen', `${s}я`);
      sg('dat', `${s}ю`);
      sg('ins', `${s}ем`, `${s}ём`);
      sg('pre', ii ? `${s}и` : `${s}е`);
      pl('nom', `${s}и`);
      pl('gen', last === 'й' ? `${s}ев` : `${s}ей`);
      pl('dat', `${s}ям`);
      pl('ins', `${s}ями`);
      pl('pre', `${s}ях`);
    } else {
      sg('gen', `${s}а`);
      sg('dat', `${s}у`);
      sg('ins', `${s}ом`, `${s}ем`);
      sg('pre', `${s}е`);
      pl('nom', `${s}${i(s)}`);
      pl('gen', SIBILANT.test(s) ? `${s}ей` : s.endsWith('ц') ? `${s}ев` : `${s}ов`);
      pl('dat', `${s}ам`);
      pl('ins', `${s}ами`);
      pl('pre', `${s}ах`);
    }
  }
  return out;
}

/** Formas irregulares que vêm muito depois de um número. [forma, gênero, caso, plural] */
const IRREGULAR: [string, Gender, Case, boolean][] = [
  ['лет', 'm', 'gen', true],
  ['годы', 'm', 'nom', true],
  ['году', 'm', 'pre', false],
  ['человек', 'm', 'gen', true],
  ['раз', 'm', 'gen', true],
  ['детей', 'pl', 'gen', true],
  ['детям', 'pl', 'dat', true],
  ['детьми', 'pl', 'ins', true],
  ['детях', 'pl', 'pre', true],
  ['людей', 'pl', 'gen', true],
  ['людьми', 'pl', 'ins', true],
  ['денег', 'pl', 'gen', true],
  ['суток', 'pl', 'gen', true],
  ['сутки', 'pl', 'nom', true],
  ['брюк', 'pl', 'gen', true],
  ['очков', 'pl', 'gen', true],
  ['ножниц', 'pl', 'gen', true],
  ['друзья', 'm', 'nom', true],
  ['друзей', 'm', 'gen', true],
  ['друзьям', 'm', 'dat', true],
  ['друзьями', 'm', 'ins', true],
  ['друзьях', 'm', 'pre', true],
  ['братья', 'm', 'nom', true],
  ['братьев', 'm', 'gen', true],
  ['братьям', 'm', 'dat', true],
  ['братьями', 'm', 'ins', true],
  ['сыновья', 'm', 'nom', true],
  ['сыновей', 'm', 'gen', true],
  ['сыновьями', 'm', 'ins', true],
  ['стулья', 'm', 'nom', true],
  ['стульев', 'm', 'gen', true],
  ['дочери', 'f', 'gen', false],
  ['дочерей', 'f', 'gen', true],
  ['дочерьми', 'f', 'ins', true],
  ['дочерям', 'f', 'dat', true],
  ['матери', 'f', 'gen', false],
  ['матерей', 'f', 'gen', true],
  ['копеек', 'f', 'gen', true],
  ['сестер', 'f', 'gen', true],
  ['девушек', 'f', 'gen', true],
  ['бабушек', 'f', 'gen', true],
  ['пути', 'm', 'gen', false],
  ['путей', 'm', 'gen', true],
  ['рублей', 'm', 'gen', true],
  ['рублям', 'm', 'dat', true],
  ['рублями', 'm', 'ins', true],
  ['рублях', 'm', 'pre', true],
];

/** Os meses no genitivo, que marcam uma data: 15 ма́рта. */
const MONTHS = new Set(['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']);
const YEAR_FORMS: Record<string, [Case, boolean]> = {
  год: ['nom', false],
  года: ['gen', false],
  году: ['pre', false],
  годом: ['ins', false],
  годы: ['nom', true],
  годов: ['gen', true],
  годам: ['dat', true],
  годами: ['ins', true],
  годах: ['pre', true],
};

let forms: Map<string, Reading[]> | null = null;
/** Forma (sem acento, ё → е) → as leituras possíveis. As formas do dicionário vêm primeiro. */
function formMap(): Map<string, Reading[]> {
  if (forms) return forms;
  const map = new Map<string, Reading[]>();
  const add = (w: string, r: Reading) => {
    const k = norm(w);
    const list = map.get(k) ?? [];
    if (!list.some((x) => x.g === r.g && x.c === r.c && x.pl === r.pl && x.adj === r.adj)) list.push(r);
    map.set(k, list);
  };
  for (const [w, g, c, pl] of IRREGULAR) add(w, { g, c, pl });
  // «2 ты́сячи рубле́й», «3 миллио́на»: as palavras-número que o texto escreve por extenso
  for (const nn of [THOUSAND, MILLION, BILLION]) {
    for (const c of Object.keys(nn.sg) as Case[]) {
      add(nn.sg[c], { g: nn.g, c, pl: false });
      add(nn.pl[c], { g: nn.g, c, pl: true });
    }
  }
  for (const v of VOCAB_RU) {
    if (v.part_of_speech !== 'substantivo') continue;
    const lemma = norm(v.word_target);
    if (!/^[а-я-]+$/.test(lemma)) continue;
    const g: Gender | null = v.gender ?? (/\(pl\.\)/.test(v.word_native) ? 'pl' : null);
    if (!g) continue;
    for (const [w, c, pl, adj] of declineLemma(lemma, g)) add(w, { g, c, pl: pl || g === 'pl', adj });
  }
  forms = map;
  return map;
}

const ADJ_END = /(ый|ий|ой|ая|яя|ое|ее|ые|ие|ых|их|ым|им|ыми|ими|ого|его|ому|ему|ую|юю)$/;

/** O substantivo logo depois do número (ou depois de um adjetivo, ou de «–7»): palavra e leituras. */
function nextNoun(after: string): { word: string; readings: Reading[]; n2?: number } | null {
  // «5–7 дней», «2 и́ли 3 часа́»: o substantivo vem depois do segundo número (que manda no caso)
  const skip = /^(?:\s*[–—-]\s*|\s+(?:или|и)\s+)(\d+)/.exec(after);
  const rest = skip ? after.slice(skip[0].length) : after;
  const n2 = skip ? Number(skip[1]) : undefined;
  const m = /^[\s\u00A0]+([а-яё\u0301]+)(?:[\s\u00A0]+([а-яё\u0301]+))?/iu.exec(rest);
  if (!m) return null;
  const map = formMap();
  const w1 = norm(m[1]);
  if (map.has(w1)) return { word: w1, readings: map.get(w1)!, n2 };
  if (m[2] && ADJ_END.test(w1)) {
    const w2 = norm(m[2]);
    if (map.has(w2)) return { word: w2, readings: map.get(w2)!, n2 };
  }
  return null;
}

/** Em que casos o número pode estar, dado o substantivo nesta forma. */
function casesFor(n: number, r: Reading): Case[] {
  if (ends1(n)) {
    if (r.pl !== (r.g === 'pl')) return [];
    if (r.c === 'nom') return r.g === 'f' ? ['nom'] : ['nom', 'acc'];
    return [r.c];
  }
  if (!r.pl) return ends234(n) && r.c === 'gen' && !r.adj ? ['nom', 'acc'] : [];
  // два учёных (substantivo adjetivo) e дво́е дете́й (só de plural) são nominativos
  if (r.c === 'gen') return ends234(n) && r.g !== 'pl' && !r.adj ? ['gen'] : ['nom', 'acc', 'gen'];
  if (r.c === 'nom' || r.c === 'acc') return ends234(n) ? ['nom', 'acc'] : [];
  return [r.c];
}

const PREP: Record<string, Case[]> = {};
const prep = (cs: Case[], ...ws: string[]) => ws.forEach((w) => (PREP[w] = cs));
prep(
  ['gen'],
  'без',
  'безо',
  'до',
  'из',
  'изо',
  'от',
  'ото',
  'у',
  'около',
  'после',
  'для',
  'кроме',
  'вокруг',
  'против',
  'среди',
  'возле',
  'мимо',
  'более',
  'менее',
  'свыше',
  'больше',
  'меньше',
  'ради',
  'вместо',
  'из-за',
  'из-под',
  'вдоль',
  'внутри',
  'вне',
  'напротив',
  'посреди',
  'насчет',
  'порядка',
);
prep(['dat'], 'к', 'ко', 'благодаря', 'согласно', 'навстречу');
prep(['pre'], 'о', 'об', 'обо', 'при');
prep(['acc', 'pre'], 'в', 'во', 'на');
prep(['acc', 'ins'], 'за', 'под', 'подо');
prep(['acc'], 'через', 'про', 'сквозь', 'спустя');
prep(['ins'], 'над', 'надо', 'перед', 'передо', 'между');
prep(['gen', 'ins'], 'с', 'со');
prep(['dat', 'acc'], 'по');

/** O caso que a preposição pede quando o substantivo não diz nada (по: по одному́, mas по пять). */
function prepCase(p: string | null, n: number): Case {
  if (!p) return 'nom';
  if (p === 'по') return ends1(n) ? 'dat' : 'acc';
  return PREP[p][0];
}

/** A preposição logo antes do número, se houver (sem acento, minúscula). */
function prepBefore(before: string): string | null {
  const m = /([а-яё\u0301-]+)[\s\u00A0]+(?:[“("]\s*)?$/iu.exec(before);
  if (!m) return null;
  const w = norm(m[1]);
  return w in PREP ? w : null;
}

/** O caso do número: a preposição manda, se o substantivo couber; senão o substantivo; senão o nominativo. */
function chooseCase(n: number, p: string | null, readings: Reading[] | null): Case {
  let cands: Set<Case> | null = null;
  if (readings) {
    cands = new Set(readings.flatMap((r) => casesFor(n, r)));
    if (!cands.size) cands = null;
  }
  if (p) {
    // «по» distributivo: по одному́, mas по два, по пять
    const list = p === 'по' && !ends1(n) ? (['acc'] as Case[]) : PREP[p];
    if (cands) {
      for (const c of list) if (cands.has(c)) return c;
      // «с двумя́ детьми́» tem prioridade sobre o genitivo, «в трёх ко́мнатах» sobre o acusativo
      for (const c of ['ins', 'pre', 'dat', 'gen'] as Case[]) if (cands.has(c) && !cands.has('nom')) return c;
    }
    return list[0];
  }
  if (cands && !cands.has('nom')) return (['acc', 'gen', 'dat', 'ins', 'pre'] as Case[]).find((c) => cands!.has(c)) ?? 'nom';
  return 'nom';
}

/** O gênero que o número usa: o do substantivo compatível; sem ele, o masculino (a forma de contar). */
function genderFor(n: number, readings: Reading[] | null, c: Case): Gender {
  if (!readings) return 'm';
  const fit = readings.filter((r) => casesFor(n, r).includes(c));
  const pick = (fit.length ? fit : readings).find((r) => r.g !== 'pl') ?? (fit.length ? fit : readings)[0];
  return pick.g;
}

/* ------------------------------------------------------------------ o texto */

const SPACE = '[ \\u00A0\\u2009\\u202F]';
const ORD_SUFFIX =
  'ти|ух|ёх|мя|ьего|ьему|ьими|ьим|ьих|ьем|ьей|ого|его|ому|ему|ыми|ими|ый|ий|ой|ая|яя|ое|ее|ые|ие|ых|их|ым|им|ом|ем|ую|юю|ья|ье|ьи|ью|го|му|ми|и|й|я|е|ю|м|х';
const NUMBER = new RegExp(
  [
    // 15.03.2020
    `(?<date>(?<dd>\\d{1,2})\\.(?<mm>\\d{1,2})\\.(?<yy>\\d{4}))`,
    // 14:30 (e 14.30 depois de preposição de tempo)
    `(?<time>(?<hh>\\d{1,2})(?::|(?<=(?:^|[\\s(“])(?:[вВсС]|до|к|после|около|от|по)${SPACE}\\d{1,2})\\.)(?<mi>\\d{2}))`,
    // $10, €5
    `(?<pre>[$€])${SPACE}?(?<pnum>\\d{1,3}(?:${SPACE}\\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)`,
    // 1 500 000; 2,5; 5-й; 10%, 500 ₽, 5 млн (o símbolo é o substantivo)
    // (−5 °C, № 5, 1957 г.)
    `(?<no>№${SPACE}?)?(?<sign>(?<=^|[\\s(])[−+-](?=\\d))?(?<num>\\d{1,3}(?:${SPACE}\\d{3})+|\\d+)(?:,(?<dec>\\d+))?(?:[-‑](?<suf>${ORD_SUFFIX})|${SPACE}?(?<unit>%|₽|\\$|€|°[CС]?|руб\\.|тыс\\.|млн|млрд|км|кг|см|мин\\.|ч\\.|коп\\.|гг?\\.|м|л)(?![\\p{L}]))?`,
  ].join('|'),
  'gu',
);

/** Terminações de ordinal/cardinal escritas depois do hífen (5-й, 2-го, 5-ти): não são palavras compostas. */
const FULL_SUFFIX = new RegExp(`^(?:${ORD_SUFFIX})$`, 'i');

function isYear(n: number, raw: string) {
  return /^\d{4}$/.test(raw) && n >= 1000 && n <= 2100;
}

/** Palavra seguinte (normalizada), ou null. */
function nextWord(after: string): string | null {
  const m = /^[\s\u00A0]+([а-яё\u0301]+)/iu.exec(after);
  return m ? norm(m[1]) : null;
}

/** O número vem logo depois de um mês (4 октября́ 1957): o ano vai no genitivo. */
function afterMonth(before: string): boolean {
  const prev = /([а-яё\u0301]+)[\s\u00A0]+$/iu.exec(before);
  return !!prev && MONTHS.has(norm(prev[1]));
}

/** O caso de um ano, pela forma de «год» depois dele (ou de «г.»), ou pela preposição. */
function yearCase(p: string | null, yearWord: string | null): Case | null {
  const w = yearWord;
  if (w && w in YEAR_FORMS) {
    const [c] = YEAR_FORMS[w];
    if (c === 'pre') return p && PREP[p]?.includes('dat') && !PREP[p]?.includes('pre') ? 'dat' : 'pre';
    if (c === 'nom') return 'nom';
    return c;
  }
  if (w === 'г' || w === 'гг') {
    if (!p) return 'nom';
    const list = PREP[p];
    return p === 'в' || p === 'во' ? 'pre' : list[0] === 'acc' ? 'nom' : list[0];
  }
  return null;
}

/** «в 1941–1945 года́х», «ме́жду 2 и 3»: o segundo número usa a preposição do primeiro. */
function rangePrep(before: string): string | null {
  const m = /\d[\s\u00A0]*(?:[–—-]|[\s\u00A0]и|[\s\u00A0]или)[\s\u00A0]*$/u.exec(before);
  if (!m) return null;
  const head = before.slice(0, m.index + 1).replace(/[\d\s\u00A0]+$/, '');
  return prepBefore(`${head} `);
}

/** Sufixos que abreviam o cardinal declinado: 2-х (двух), 5-ти (пяти́), 3-мя (тремя́), 7-ми (семи́), к 3-м (трём). */
function cardinalSuffix(suf: string, n: number, p: string | null, noun: { readings: Reading[] } | null): Case | null {
  const loc = p !== null && PREP[p]?.includes('pre') && !PREP[p]?.includes('gen');
  const u = n % 10;
  if (suf === 'ти' || suf === 'ух' || suf === 'ёх' || (suf === 'х' && n >= 2 && n <= 4) || ((suf === 'и' || suf === 'ми') && (u === 0 || u >= 5))) return loc ? 'pre' : 'gen';
  if (suf === 'мя') return 'ins';
  if (suf === 'м' && n >= 2 && n <= 4 && noun?.readings.some((r) => r.pl && r.c === 'dat')) return 'dat';
  return null;
}

/** O ordinal de um sufixo («-й», «-го», «-м»…): gênero/número e caso. */
function suffixForm(suf: string, n: number, p: string | null, noun: { readings: Reading[] } | null): [Gender, Case] {
  const s = suf.replace(/^ь/, '');
  const nounPl = noun?.readings.find((r) => r.pl);
  const nounFem = noun?.readings.some((r) => r.g === 'f' && !r.pl);
  const locative = p !== null && ['в', 'во', 'на', 'о', 'об', 'обо', 'при'].includes(p);
  switch (s) {
    case 'й':
      return nounFem ? ['f', p ? (PREP[p].find((c) => c !== 'acc') ?? 'gen') : 'gen'] : ['m', 'nom'];
    case 'ый':
    case 'ий':
    case 'ой':
      return ['m', 'nom'];
    case 'ей':
      return ['f', 'gen'];
    case 'я':
    case 'ая':
    case 'яя':
      return ['f', 'nom'];
    case 'ю':
    case 'ую':
    case 'юю':
      return ['f', 'acc'];
    case 'е':
    case 'ое':
    case 'ее':
      // «1990-е» (os anos 90) e «5-е кла́ссы» são plurais
      return (n >= 1000 && n % 10 === 0) || (nounPl && nounPl.c === 'nom') ? ['pl', 'nom'] : ['n', p === 'по' || p === 'на' || p === 'в' ? 'acc' : 'nom'];
    case 'и':
    case 'ые':
    case 'ие':
      return ['pl', 'nom'];
    case 'го':
    case 'ого':
    case 'его':
      return ['m', 'gen'];
    case 'му':
    case 'ому':
    case 'ему':
      return ['m', 'dat'];
    case 'м':
      if (nounPl && (nounPl.c === 'dat' || nounPl.c === 'ins')) return ['pl', nounPl.c];
      return ['m', locative ? 'pre' : 'ins'];
    case 'ом':
    case 'ем':
      return ['m', 'pre'];
    case 'ым':
    case 'им':
      return nounPl?.c === 'dat' ? ['pl', 'dat'] : ['m', 'ins'];
    case 'х':
    case 'ых':
    case 'их':
      return ['pl', locative ? 'pre' : 'gen'];
    case 'ми':
    case 'ыми':
    case 'ими':
      return ['pl', 'ins'];
    default:
      return ['m', 'nom'];
  }
}

/** Antes da data, «сего́дня» / «за́втра» pedem o nominativo: Сего́дня пя́тое ма́я. */
const DATE_NOM = /(?:^|[\s“(])(сегодня|завтра|вчера|сейчас)(?:[\s\u00A0]+(был|было|будет))?[\s\u00A0,—–-]*$/iu;

function dateCase(before: string, p: string | null): Case {
  if (p) {
    if (p === 'по' || p === 'на' || p === 'в' || p === 'во' || p === 'за' || p === 'через' || p === 'про') return 'acc';
    return PREP[p][0];
  }
  return DATE_NOM.test(norm(before)) ? 'nom' : 'gen';
}

/**
 * Troca os números de um texto em russo pelas palavras, concordando com o substantivo e com a
 * preposição: «2 кни́ги» → «две кни́ги», «о́коло 5 мину́т» → «о́коло пяти́ мину́т», «в 1812 году́» →
 * «в ты́сяча восемьсо́т двена́дцатом году́», «15 ма́рта» → «пятна́дцатого ма́рта», «2,5» → «две
 * це́лых пять деся́тых», «в 9:00» → «в де́вять часо́в», «10%» → «де́сять проце́нтов».
 */
export function spellRussianNumbers(text: string): string {
  if (!/\d/.test(text)) return text;
  // «5-ле́тний» → пятиле́тний, «2-ко́мнатная» → двухко́мнатная, «100-ле́тие» → столе́тие
  text = text.replace(/(?<![\p{L}\d])(\d{1,3})[-‑]([а-яё\u0301]{3,})/giu, (m, d: string, w: string) => {
    if (FULL_SUFFIX.test(w)) return m;
    const n = Number(d);
    const head = n === 1 ? 'одно' : n === 90 ? 'девяносто' : n === 100 ? 'сто' : compoundPrefix(n);
    return head ? head + w : m;
  });
  return text.replace(NUMBER, (m, ...args) => {
    const at = args[args.length - 3] as number;
    const g = args[args.length - 1] as Record<string, string | undefined>;
    const end = at + m.length;
    // colado em letras (V2, mp3, 3D) ou em outro número: fica como está
    if (/[\p{L}\d]$/u.test(text.slice(0, at)) || /^[\p{L}]/u.test(text.slice(end))) return m;
    const before = text.slice(0, at);
    const after = text.slice(end);
    const p = prepBefore(before) ?? rangePrep(before);

    if (g.date) {
      const d = Number(g.dd);
      const mo = Number(g.mm);
      if (d < 1 || d > 31 || mo < 1 || mo > 12) return m;
      const c = dateCase(before, p);
      return `${russianOrdinal(d, 'n', c)} ${[...MONTHS][mo - 1]} ${russianOrdinal(Number(g.yy), 'm', 'gen')} года`;
    }

    if (g.time) {
      const h = Number(g.hh);
      const mi = Number(g.mi);
      if (h > 24 || mi > 59) return m;
      // «в 9:00» é acusativo (в де́вять часо́в); «с 9:00 до 18:00», genitivo
      const c: Case = p ? (PREP[p].includes('acc') ? 'acc' : PREP[p][0]) : 'nom';
      // «в 1:00» → в час, «в 1:30» → в час тридцать
      const oneOclock = h === 1 && (c === 'nom' || c === 'acc');
      if (mi === 0) return oneOclock ? 'час' : `${russianNumber(h, 'm', c)} ${nounAfter(HOUR, h, c)}`;
      return `${oneOclock ? 'час' : russianNumber(h, 'm', c)} ${mi < 10 ? 'ноль ' : ''}${russianNumber(mi, 'f', c)}`;
    }

    if (g.pre) {
      const [intRaw, dec] = g.pnum!.split(',');
      const int = Number(intRaw.replace(/[^\d]/g, ''));
      return money(int, dec, g.pre, prepCase(p, int));
    }

    const raw = g.num!.replace(/[^\d]/g, '');
    const n = Number(raw);
    if (!Number.isSafeInteger(n) || n >= 1e9) return m;

    const lead = `${g.no ? 'номер ' : ''}${g.sign ? (g.sign === '+' ? 'плюс ' : 'минус ') : ''}`;
    return lead + spellNumber(n, raw, g, p, before, after);
  });
}

const YEAR_NOUN = noun('m', 'год года году год годом году', 'годы годов годам годы годами годах');

/** Um número inteiro (com decimais, sufixo ou símbolo) no seu contexto. */
function spellNumber(n: number, raw: string, g: Record<string, string | undefined>, p: string | null, before: string, after: string): string {
  if (g.unit && /^г/.test(g.unit)) {
    // «в 1957 г.» → «в ты́сяча девятьсо́т пятьдеся́т седьмо́м году́»
    if (!isYear(n, raw) || g.dec) return `${russianNumber(n)} ${g.unit}`;
    // «4 октября́ 1957 г.»: depois do mês, o genitivo (пятьдеся́т седьмо́го го́да)
    const c: Case = afterMonth(before) ? 'gen' : yearCase(p, 'г')!;
    return `${russianOrdinal(n, 'm', c)} ${(g.unit === 'гг.' ? YEAR_NOUN.pl : YEAR_NOUN.sg)[c]}`;
  }
  if (g.unit) {
    // «10%» → «де́сять проце́нтов»; depois de uma fração, o genitivo singular: две це́лых пять деся́тых проце́нта
    const nn = UNIT_NOUNS[g.unit.replace(/^°.*/, '°')];
    const c = prepCase(p, n);
    if (MINOR[g.unit]) return money(n, g.dec, g.unit, c);
    return g.dec ? `${decimal(n, g.dec, c)} ${nn.sg.gen}` : `${russianNumber(n, nn.g, c)} ${nounAfter(nn, n, c)}`;
  }

  const noun = nextNoun(after);
  if (g.suf) {
    // «2-х», «5-ти», «3-мя»: a terminação do cardinal (двух, пяти́, тремя́), não um ordinal
    const cc = cardinalSuffix(g.suf, n, p, noun);
    if (cc) return russianNumber(n, genderFor(n, noun?.readings ?? null, cc), cc);
    const [gg, c] = suffixForm(g.suf, n, p, noun);
    return russianOrdinal(n, gg, c);
  }

  if (g.dec) {
    const c = p ? (PREP[p].includes('acc') ? 'nom' : PREP[p][0]) : 'nom';
    // «1,5 часа́» → полтора́ часа́, «1,5 неде́ли» → полторы́ неде́ли
    const half = noun?.readings.find((r) => !r.pl && r.c === 'gen');
    if (n === 1 && g.dec === '5' && half && c === 'nom') return half.g === 'f' ? 'полторы' : 'полтора';
    return decimal(n, g.dec, c);
  }

  // datas: 15 ма́рта, «с 1 по 10 ма́я»
  const w = nextWord(after);
  const rangeDate = /^\s*(?:[–—-]|по|до|и)\s*\d{1,2}[\s\u00A0]+([а-яё\u0301]+)/iu.exec(after);
  if (n >= 1 && n <= 31 && /^\d{1,2}$/.test(raw) && ((w && MONTHS.has(w)) || (rangeDate && MONTHS.has(norm(rangeDate[1]))))) {
    return russianOrdinal(n, 'n', dateCase(before, p));
  }

  // anos: в 1957 году́, 1957 го́да, с 1891 по 1916 год, (1799–1837), 4 октября́ 1957
  if (isYear(n, raw)) {
    let c = yearCase(p, w);
    if (!c) {
      const range = /^\s*(?:[–—-]|по|до|и|или)\s*(\d{4})([\s\u00A0]+[а-яё\u0301]+)?/iu.exec(after);
      if (range && range[2]) {
        const w2 = norm(range[2].trim());
        const c2 = yearCase(w2 === 'г' || w2 === 'гг' ? p : null, w2);
        // «в 1941–1945 года́х»: o caso do «года́х»; «с 1891 по 1916 год»: o do «с»
        if (c2) c = p && !['в', 'во', 'на'].includes(p) ? prepCase(p, n) : c2;
      }
      if (!c && range && /\(\s*$/.test(before) && /^\s*\)/.test(after.slice(range[0].length))) c = 'nom';
      if (!c && /[–—-]\s*$/.test(before) && /\(\s*\d{4}\s*[–—-]\s*$/.test(before)) c = 'nom';
      if (!c && afterMonth(before)) c = 'gen';
      // «в 2014,»: sem «году́», mas é ano
      if (!c && p && /^\s*([.,;:!?)”—–]|$)/.test(after)) c = p === 'в' || p === 'во' ? 'pre' : prepCase(p, n);
    }
    if (c) return russianOrdinal(n, 'm', c);
  }

  // «в 7 кла́ссе», «в 19 ве́ке», «на 5 страни́це»: o substantivo no singular, num caso que nenhum
  // cardinal pede, é o ordinal (седьмо́м, девятна́дцатом, пя́той)
  if (noun && !noun.n2 && noun.readings.every((r) => !r.pl)) {
    const fits = noun.readings.some((r) => casesFor(n, r).length);
    const ordNoun = ORD_NOUN.test(noun.word) && noun.readings.every((r) => r.c !== 'nom');
    if (!fits || (ends1(n) && ordNoun)) {
      const list = p ? PREP[p] : [];
      const r = noun.readings.find((x) => list.includes(x.c)) ?? noun.readings[0];
      if (r.c !== 'nom' || !fits) return russianOrdinal(n, r.g, r.c);
    }
  }
  // «1–2 дня», «1 и́ли 2 кни́ги»: o caso e o gênero vêm do número que está colado no substantivo
  const target = noun?.n2 ?? n;
  let c = chooseCase(target, p, noun?.readings ?? null);
  // «сто́ит 1000 рубле́й» → ты́сячу; «по 1000 рубле́й» → по ты́сяче
  if (!p && c === 'nom' && PRICE_VERB.test(norm(before.slice(-30)))) c = 'acc';
  if (p === 'по' && (n === 1000 || n === 1e6)) c = 'dat';
  return russianNumber(n, genderFor(target, noun?.readings ?? null, c), c);
}

/** Substantivos que, no singular depois de um número, pedem o ordinal (em 1, 21, 31…: в 21 ве́ке). */
const ORD_NOUN = /^(век|класс|этаж|глав|страниц|ряд|курс|урок|раздел|том|пункт|параграф|съезд)/;
/** Verbos de preço e compra: o número vai no acusativo (сто́ит ты́сячу рубле́й). */
const PRICE_VERB = /(?:^|\s)(?:сто(?:и|я)т|стоил[аио]?|заплатил\S*|купил\S*|потратил\S*|получил\S*|продал\S*)\s*$/;
