/**
 * Números por extenso em estoniano, antes da voz. Sem gênero, mas o numeral declina em caso e
 * concorda com o substantivo: kolm maja (o número no nominativo, o substantivo no partitivo),
 * kolmes majas, kolmele inimesele, kahe nädala pärast. O caso vem da terminação da palavra seguinte,
 * reconhecida pelo vocabulário do estoniano (a forma do dicionário, o genitivo e o partitivo
 * anotados: «nädal (nädala, nädalat)» → nädala-s, nädala-ks); sem certeza, o nominativo.
 *
 * O número composto vai em palavras separadas (kakskümmend viis, sada kakskümmend viis, kaks tuhat)
 * e todas as partes declinam: kahekümne viie, kahekümnes viies. No terminativo, essivo, abessivo e
 * comitativo, o atributo fica no genitivo e só o substantivo leva a terminação: kolme sõbraga,
 * kahe nädalani. Quando a forma do substantivo serve para o genitivo e o partitivo (kolm päeva /
 * kolme päeva jooksul), decide a posposição depois dele.
 *
 * Ordinais «24.» (antes de uma palavra minúscula): só a última parte vira ordinal, as outras ficam no
 * genitivo, e o ordinal toma o caso do substantivo: kahekümne neljas veebruar, kahekümne neljandal
 * veebruaril, tuhande üheksasaja kaheksateistkümnendal aastal. Anos soltos como cardinais (aastal
 * tuhat üheksasada kaheksateist), sempre no nominativo depois de «aastal», de um mês. «21-aastane» →
 * kahekümne üheaastane; «1857–1861» → … kuni …; «kell 14.30» → kell neliteist kolmkümmend; «3,50» →
 * kolm koma viiskümmend; «5%» → viis protsenti; «45 000».
 */
import { ROWS } from '@/data/et/vocabulario';
import { clockWords, decimalWords, digitByDigit, minusSign, moneyWords } from './finicas';

type Case = 'nom' | 'gen' | 'par' | 'ine' | 'ela' | 'ill' | 'ade' | 'abl' | 'all' | 'tra' | 'ter' | 'ess' | 'abe' | 'com';
/** As terminações, sempre sobre o genitivo: kolme-s, kahe-le, viie-ga. */
const ENDING: Partial<Record<Case, string>> = { ine: 's', ela: 'st', ill: 'sse', ade: 'l', abl: 'lt', all: 'le', tra: 'ks', ter: 'ni', ess: 'na', abe: 'ta', com: 'ga' };
/** Nestes casos só a última palavra leva a terminação; as de antes ficam no genitivo. */
const LAST_ONLY = new Set<Case>(['ter', 'ess', 'abe', 'com']);

/** Uma palavra do número: nominativo, genitivo e, para o ordinal, o valor da unidade (1 → esimene). */
type Part = { nom: string; gen: string; unit?: number; million?: boolean };

const UNITS: [string, string][] = [
  ['null', 'nulli'],
  ['üks', 'ühe'],
  ['kaks', 'kahe'],
  ['kolm', 'kolme'],
  ['neli', 'nelja'],
  ['viis', 'viie'],
  ['kuus', 'kuue'],
  ['seitse', 'seitsme'],
  ['kaheksa', 'kaheksa'],
  ['üheksa', 'üheksa'],
];

function below1000(n: number): Part[] {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const out: Part[] = [];
  if (h === 1) out.push({ nom: 'sada', gen: 'saja' });
  else if (h > 1) out.push({ nom: `${UNITS[h][0]}sada`, gen: `${UNITS[h][1]}saja` });
  const t = Math.floor(r / 10);
  const u = r % 10;
  if (r === 10) out.push({ nom: 'kümme', gen: 'kümne' });
  else if (r > 10 && r < 20) out.push({ nom: `${UNITS[u][0]}teist`, gen: `${UNITS[u][1]}teistkümne` });
  else {
    if (t) out.push({ nom: `${UNITS[t][0]}kümmend`, gen: `${UNITS[t][1]}kümne` });
    if (u) out.push({ nom: UNITS[u][0], gen: UNITS[u][1], unit: u });
  }
  return out;
}

/** As palavras do número: 2025 → kaks · tuhat · kakskümmend · viis. */
function parts(n: number): Part[] {
  if (n === 0) return [{ nom: 'null', gen: 'nulli' }];
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const out: Part[] = [];
  if (m === 1) out.push({ nom: 'miljon', gen: 'miljoni', million: true });
  else if (m > 1) out.push(...below1000(m), { nom: 'miljonit', gen: 'miljoni', million: true });
  if (k === 1) out.push({ nom: 'tuhat', gen: 'tuhande' });
  else if (k > 1) out.push(...below1000(k), { nom: 'tuhat', gen: 'tuhande' });
  out.push(...below1000(n % 1000));
  return out;
}

/** Declina as palavras (dadas no nominativo e no genitivo) no caso pedido, com o número como núcleo. */
function decline(ps: Part[], c: Case): string {
  if (c === 'nom' || c === 'par') return ps.map((p) => p.nom).join(' ');
  const end = ENDING[c] ?? '';
  return ps.map((p, i) => p.gen + (LAST_ONLY.has(c) && i < ps.length - 1 ? '' : end)).join(' ');
}

/** 0 a 999 999 999 no caso pedido: estonianNumber(25, 'ine') = «kahekümnes viies». */
export function estonianNumber(n: number, c: Case = 'nom'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  return decline(parts(n), c);
}

/**
 * Ordinal: só a última palavra vira ordinal (as outras no genitivo). estonianOrdinal(1918, 'ade') =
 * «tuhande üheksasaja kaheksateistkümnendal»; no plural, o radical leva «-te»: estonianOrdinal(1980,
 * 'ade', true) = «… kaheksakümnendatel» (1980. aastatel).
 */
export function estonianOrdinal(n: number, c: Case = 'nom', plural = false): string {
  if (!Number.isInteger(n) || n < 1 || n >= 1e9) return String(n);
  const ps = parts(n);
  const last = ps[ps.length - 1];
  // nominativo e radical (= genitivo) do ordinal: kolmas/kolmanda, viies/viienda, sajas/sajanda
  const [nom, stem] =
    last.unit === 1 ? ['esimene', 'esimese'] : last.unit === 2 ? ['teine', 'teise'] : last.unit === 3 ? ['kolmas', 'kolmanda'] : last.million ? ['miljones', 'miljonenda'] : [`${last.gen}s`, `${last.gen}nda`];
  const head = ps.slice(0, -1).map((p) => `${p.gen} `).join('');
  if (plural) return head + stem + (c === 'nom' ? 'd' : `te${ENDING[c] ?? ''}`);
  if (c === 'nom') return head + nom;
  // partitivo: esimest, teist, kolmandat, sajandat (3. raamatut → kolmandat raamatut)
  if (c === 'par') return head + (last.unit === 1 ? 'esimest' : last.unit === 2 ? 'teist' : `${stem}t`);
  return head + stem + (ENDING[c] ?? '');
}

// ——— o caso do substantivo seguinte ———

type Lexicon = { nom: Set<string>; gen: Set<string>; par: Set<string>; known: Set<string> };
let lexicon: Lexicon | null = null;

/** Substantivos que vêm muito depois de números e que o vocabulário não tem: [nominativo, genitivo, partitivo]. */
const EXTRA: [string, string, string][] = [
  ['meeter', 'meetri', 'meetrit'],
  ['sentimeeter', 'sentimeetri', 'sentimeetrit'],
  ['gramm', 'grammi', 'grammi'],
  ['dollar', 'dollari', 'dollarit'],
  ['kraad', 'kraadi', 'kraadi'],
  ['raamat', 'raamatu', 'raamatut'],
];

/** As formas do vocabulário (substantivos e adjetivos): «nädal (nädala, nädalat)». */
function lex(): Lexicon {
  if (lexicon) return lexicon;
  const l: Lexicon = { nom: new Set(), gen: new Set(), par: new Set(), known: new Set() };
  const forms = (s: string) => s.split(/\s+ou\s+|\//).map((f) => f.trim().toLowerCase()).filter((f) => /^[\p{L}-]{2,}$/u.test(f));
  const add = (nom: string, gens: string[], pars: string[]) => {
    l.nom.add(nom);
    // a mesma letra inicial: fora as explicações em português que também têm vírgula
    for (const g of gens) if (g[0] === nom[0]) l.gen.add(g);
    for (const p of pars) if (p[0] === nom[0]) l.par.add(p);
  };
  for (const row of ROWS) {
    const w = row[0].toLowerCase();
    l.known.add(w);
    if ((row[2] !== 'substantivo' && row[2] !== 'adjetivo') || w.includes(' ')) continue;
    const m = row[1].match(/\(([^(),;]+),\s*([^(),;]+)[);]/);
    add(w, m ? forms(m[1]) : [], m ? forms(m[2]) : []);
  }
  for (const [n, g, p] of EXTRA) add(n, [g], [p]);
  lexicon = l;
  return l;
}

/** As terminações, das mais longas para as mais curtas. */
const SUFFIXES = (Object.entries(ENDING) as [Case, string][]).sort((a, b) => b[1].length - a[1].length);
/** As que não se confundem com outra forma: valem mesmo quando o vocabulário não conhece a palavra (sõpradega). */
const PLAIN = new Set<Case>(['ill', 'all', 'abl', 'tra', 'com']);

/** O caso de uma palavra: 'amb' quando a forma serve para o genitivo e para o nominativo/partitivo (päeva, aasta). */
function caseOf(w: string, guess = false): Case | 'amb' | null {
  const l = lex();
  const nomOrPar = l.nom.has(w) || l.par.has(w);
  if (l.gen.has(w)) return nomOrPar ? 'amb' : 'gen';
  if (nomOrPar) return 'nom';
  for (const [c, end] of SUFFIXES) if (w.endsWith(end) && l.gen.has(w.slice(0, -end.length))) return c;
  if (guess && w.length >= 6 && !l.known.has(w)) for (const [c, end] of SUFFIXES) if (PLAIN.has(c) && w.endsWith(end)) return c;
  return null;
}

/** O caso de uma forma de plural (genitivo + «te»/«de», e a terminação): aastate, aastatel. */
function pluralCase(w: string): Case | null {
  const l = lex();
  const plural = (stem: string) => /(te|de)$/.test(stem) && l.gen.has(stem.slice(0, -2));
  if (plural(w)) return 'gen';
  for (const [c, end] of SUFFIXES) if (w.endsWith(end) && plural(w.slice(0, -end.length))) return c;
  return null;
}

/** Posposições que pedem o genitivo: kolme päeva pärast, kahe aasta jooksul, viie euro eest. */
const POSTPOSITION =
  /^(pärast|jooksul|järel|eest|kaupa|võrra|ees|taga|tagant|juures|juurde|juurest|kohta|vältel|kestel|ajal|kaudu|abil|asemel|eel|paiku|vanune|vanuselt|pikkune|sees|sisse|seest)$/;
/** Palavras que não são o substantivo do número (tunnis on 60 minutit; kell 7 hommikul). */
const NOT_NOUN = /^(hommikul|õhtul|päeval|öösel|suvel|talvel|kevadel|sügisel|jälle|täna|homme|ja|ning|või|on|oli|olid|ei|kui|et|aga|nagu)$/;
/** Depois de um ordinal de forma ambígua, estas palavras mostram que ele é o sujeito (2020. aasta oli…), não um genitivo. */
const VERBISH = /^(on|oli|olid|ei|algab|algas|lõpeb|lõppes|tuleb|tuli|sai|saab|jääb|jäi|ja|ning|või)$/;

/** O caso que o número toma pela palavra seguinte (ou a depois dela, pulando um adjetivo); null se não souber. */
function nounCase(after: string, ordinal: boolean, before = ''): Case | null {
  const m = after.match(/^\s+(\p{Ll}+)(?:\s+(\p{Ll}+))?/u);
  if (!m || NOT_NOUN.test(m[1])) return null;
  let c = caseOf(m[1], true);
  let next: string | undefined = m[2];
  if (!c && m[2] && !lex().known.has(m[1])) {
    // um adjetivo que o vocabulário não conhece no meio: o caso vem do substantivo
    c = caseOf(m[2]);
    next = after.slice(m[0].length).match(/^\s+(\p{Ll}+)/u)?.[1];
  }
  if (c !== 'amb') return c;
  // «üle 100 aasta», «alla 2 tunni»: preposições do genitivo
  if (next && POSTPOSITION.test(next)) return 'gen';
  if (/(?:^|[^\p{L}])(üle|alla)\s+$/iu.test(before)) return 'gen';
  return ordinal && next && !VERBISH.test(next) ? 'gen' : 'nom';
}

/** O número depois destas palavras é um ano, uma hora ou um rótulo: fica no nominativo (aastal 1918, buss 14). */
const FIXED_BEFORE =
  /(?:^|[^\p{L}])(aasta\p{L}*|jaanuar\p{L}*|veebruar\p{L}*|märts\p{L}*|aprill\p{L}*|mai[sl]?|maist|maini|juuni\p{L}*|juuli\p{L}*|august\p{L}*|septemb\p{L}*|oktoob\p{L}*|novemb\p{L}*|detsemb\p{L}*|suvel|talvel|kevadel|sügisel|kell|kella|nr|number|numbri\p{L}*|tuba|toa|toas|buss\p{L}*|liin\p{L}*|lk|lehekülg\p{L}*|perroon\p{L}*|korter\p{L}*|paragrahv\p{L}*|punkt\p{L}*|lõi(ge|ke)\p{L}*)\s+$/iu;
const CLOCK_BEFORE = /(?:^|[^\p{L}])(kell|kella)\s+$/iu;

/** Os símbolos depois do número: [depois de 1, depois dos outros (partitivo), genitivo]. */
const SYMBOLS: Record<string, [string, string, string]> = {
  '%': ['protsent', 'protsenti', 'protsendi'],
  '€': ['euro', 'eurot', 'euro'],
  $: ['dollar', 'dollarit', 'dollari'],
  '£': ['nael', 'naela', 'naela'],
};

const clock = (h: number, min: string) => clockWords(h, min, (x) => estonianNumber(x), 'null');
/** Euros e dólares com centavos se leem como dinheiro. */
const MONEY: Record<string, [string, string]> = { '€': ['euro', 'eurot'], $: ['dollar', 'dollarit'] };

const MONTHS = ['', 'jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
/** O genitivo dos meses, onde entram as terminações: juuni-ni, märtsi-st. */
const MONTHS_GEN = ['', 'jaanuari', 'veebruari', 'märtsi', 'aprilli', 'mai', 'juuni', 'juuli', 'augusti', 'septembri', 'oktoobri', 'novembri', 'detsembri'];

/** O caso de uma data pelo que está em volta: «kuni 24.06.» / «24.06.-ni» → terminativo, «alates 6.12.» → elativo. */
function dateCase(before: string, tail: string | undefined): Case {
  const t = tail?.slice(1).toLowerCase();
  const byTail = t ? SUFFIXES.find(([, e]) => e === t)?.[0] : undefined;
  if (byTail) return byTail;
  if (/(?:^|[^\p{L}])kuni\s+$/iu.test(before)) return 'ter';
  if (/(?:^|[^\p{L}])alates\s+$/iu.test(before)) return 'ela';
  return 'nom';
}

const NUMBER =
  /(?<![\p{L}\d])([€$£]\s?)?(\d{1,2}\.\d{1,2}\.(?:\d{4}(?!\d))?|\d{1,2}[.:]\d{2}(?![\d,]|\.\d)|\d{1,3}(?:[   ]\d{3})+(?:,\d+)?(?![\d,])|\d+(?:,\d+)?)(\s?[%€$£])?(\.(?=\s+\p{Ll}|–\d+\.\s+\p{Ll})|-\p{L}+)?(?![\p{L}\d])/gu;

/**
 * Troca os números de um texto pelas palavras, no caso do substantivo que vem depois: «3 maja» →
 * «kolm maja», «3 majas» → «kolmes majas», «2 nädala pärast» → «kahe nädala pärast», «24.
 * veebruaril» → «kahekümne neljandal veebruaril», «1918. aastal» → «tuhande üheksasaja
 * kaheksateistkümnendal aastal».
 */
export function spellEstonianNumbers(text: string): string {
  // intervalos: 1857–1861 → … kuni …
  const clean = digitByDigit(minusSign(text, 'miinus'), (x) => estonianNumber(x), /hädaabi\p{L}*(?:\s+on)?/u);
  const src = clean.replace(/(?<![\p{L}\d.,])(\d+)\s?[–—-]\s?(?=\d)/gu, '$1 kuni ');
  return src.replace(NUMBER, (all, pre: string | undefined, num: string, sym: string | undefined, tail: string | undefined, at: number) => {
    const before = src.slice(Math.max(0, at - 30), at);
    const end = at + all.length;
    const after = src.slice(end, end + 60);
    const clockBefore = CLOCK_BEFORE.test(before);
    const symbol = SYMBOLS[(pre ?? sym ?? '').trim()];

    // datas (24.02.1918) e horas (14.30, 9:05)
    const date = num.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})?$/);
    if (date && !symbol) {
      const [d, mo] = [Number(date[1]), Number(date[2])];
      if (!clockBefore && d >= 1 && d <= 31 && mo >= 1 && mo <= 12) {
        // «6.12.» no fim da frase: o ponto da data também fecha a frase
        const stop = !date[3] && !/^\s+\p{Ll}/u.test(after) ? '.' : '';
        const dc = date[3] ? 'nom' : dateCase(before, tail);
        if (dc !== 'nom') {
          // «kuni 24.06.» → kahekümne neljanda juunini; «alates 6.12.» → kuuendast detsembrist
          return `${estonianOrdinal(d, LAST_ONLY.has(dc) ? 'gen' : dc)} ${MONTHS_GEN[mo]}${ENDING[dc] ?? ''}${tail ? '' : stop}`;
        }
        return `${estonianOrdinal(d)} ${MONTHS[mo]}${date[3] ? ` ${estonianNumber(Number(date[3]))}` : ''}${tail ?? stop}`;
      }
      if (Number(date[2]) < 60 && date[2].length === 2 && !date[3]) return `${clock(d, date[2])}.${tail ?? ''}`;
      return all;
    }
    const time = num.match(/^(\d{1,2})[.:](\d{2})$/);
    if (time && !symbol) return Number(time[1]) < 24 && Number(time[2]) < 60 ? clock(Number(time[1]), time[2]) + (tail ?? '') : all;

    const [intPart, dec] = num.replace(/[   ]/g, '').split(',');
    const n = Number(intPart);
    if (n >= 1e9) return all;

    if (dec !== undefined) {
      // 3,50 € → kolm eurot viiskümmend senti
      const money = MONEY[(pre ?? sym ?? '').trim()];
      if (money) return moneyWords(n, dec, (x) => estonianNumber(x), money, ['sent', 'senti']) + (tail ?? '');
      // o decimal declina com o substantivo (2,5 tunniga → kahe koma viie tunniga), menos no
      // partitivo; o símbolo vai no partitivo: kolm koma viis protsenti
      const nc = symbol ? null : nounCase(after, false, before);
      const dc: Case = !nc || nc === 'par' ? 'nom' : LAST_ONLY.has(nc) ? 'gen' : nc;
      const words = `${estonianNumber(n, dc)} koma ${decimalWords(dec, (x) => estonianNumber(x, dc))}`;
      return symbol ? `${words} ${symbol[1]}${tail ?? ''}` : words + (tail ?? '');
    }

    if (tail?.startsWith('-')) {
      const suffix = tail.slice(1);
      const lower = suffix.toLowerCase();
      // 5-le, 10-st: o próprio número no caso
      const c = SUFFIXES.find(([, e]) => e === lower)?.[0];
      if (c && !symbol) return estonianNumber(n, c);
      // 1990-ndatel: o ordinal, com a terminação dele
      if (/^nda/.test(lower) && !symbol) return estonianOrdinal(n, 'gen') + suffix.slice(3);
      // 21-aastane, 5-kordne: o genitivo, grudado
      if (suffix.length >= 4 && !symbol) return estonianNumber(n, 'gen') + suffix;
      return all;
    }
    if (symbol) {
      // 5% võrra → viie protsendi võrra
      if (POSTPOSITION.test(after.match(/^\s+(\p{Ll}+)/u)?.[1] ?? '')) return `${estonianNumber(n, 'gen')} ${symbol[2]}${tail ?? ''}`;
      return `${estonianNumber(n)} ${symbol[n === 1 ? 0 : 1]}${tail ?? ''}`;
    }

    // o ordinal concorda sempre (24. veebruaril); o cardinal, só se não for ano, hora ou rótulo
    const ordinal = tail === '.';
    // «1.–3. klassis»: o caso vem do substantivo depois do intervalo
    const nounText = ordinal ? after.replace(/^–\d+\./, '') : after;
    // antes de um substantivo, o terminativo, o essivo, o abessivo e o comitativo pedem o genitivo
    const attr = (c: Case): Case => (LAST_ONLY.has(c) ? 'gen' : c);
    if (ordinal) {
      // «1980. aastatel» → kaheksakümnendatel aastatel; «3. raamatut» → kolmandat raamatut
      const first = nounText.match(/^\s+(\p{Ll}+)/u)?.[1];
      const pc = first ? pluralCase(first) : null;
      if (pc) return estonianOrdinal(n, attr(pc), true);
      // só partitivo (raamatut, korda): o ordinal também (kolmandat raamatut, sajandat korda)
      const l = lex();
      if (first && l.par.has(first) && !l.nom.has(first) && !l.gen.has(first)) return estonianOrdinal(n, 'par');
      const c = nounCase(nounText, true, before);
      return estonianOrdinal(n, c ? attr(c) : 'nom');
    }
    const c = FIXED_BEFORE.test(before) ? null : nounCase(after, false, before);
    return estonianNumber(n, !c || c === 'par' ? 'nom' : attr(c));
  });
}
