/**
 * Números por extenso em italiano, antes da voz: «1 ora» vira «un'ora», «21 anni», «ventun anni».
 *
 * Só o 1 no fim do número muda com o substantivo que vem depois: sozinho, contando, uno; antes de
 * masculino, un (un libro) ou uno (uno studente, uno zaino: antes de s + consoante, z, gn, ps, x);
 * antes de feminino, una (una casa) ou un' (un'ora). Nos compostos o «uno» perde o o antes de
 * masculino (ventun anni, trentun giorni; mas ventuno studenti) e fica ventuno com feminino. O gênero
 * vem do vocabulário do italiano — o singular, os plurais pelas regras e os anotados («pl. le
 * leggi») —, pulando um adjetivo no meio; sem substantivo conhecido, a forma de contar.
 *
 * Escreve-se numa palavra só até os milhares (duemilaventisei, millenovecentoquarantasei); a dezena
 * perde a vogal antes de uno e otto (ventuno, trentotto), e o tre final leva acento (ventitré,
 * centotré). Milhões à parte: due milioni trecentomila. Também: ordinais (1º, 1°, 1ª → primo,
 * prima; 11º = undicesimo), o dia 1 do mês (1 maggio, 1° maggio → primo maggio), horas (alle
 * 14:30, alle 14.30 → alle quattordici e trenta; all'1 → all'una), decimais com vírgula (3,5 → tre
 * virgola cinque), milhares com ponto ou espaço, percentagens (per cento), graus (30° → trenta
 * gradi) e euros (2,50 € → due euro e cinquanta centesimi).
 */
import { ROWS } from '@/data/it/vocabulario';
import type { VocabRow } from '@/data/types';
import { adjectiveForms, decimalDigits, genderAfter, guessByEnding, nounGenders, otherWords, wordsAfter, type Gender } from './romanicas';

type G = 'contar' | 'm' | 'f';

const UNITS = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
const TENS = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];

/** 0 a 99: ventuno, ventotto (a dezena perde a vogal antes de uno e otto), ventitre (o acento vem no fim). */
function below100(n: number): string {
  if (n < 20) return UNITS[n];
  const t = TENS[Math.floor(n / 10)];
  const u = n % 10;
  if (!u) return t;
  return u === 1 || u === 8 ? t.slice(0, -1) + UNITS[u] : t + UNITS[u];
}

/** 1 a 999 numa palavra: centoventi, duecentottanta (cento perde o o antes de ottanta). */
function below1000(n: number): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const cento = h === 0 ? '' : h === 1 ? 'cento' : `${UNITS[h]}cento`;
  if (!r) return cento;
  const rest = below100(r);
  return cento && rest.startsWith('ott') && r >= 80 ? cento.slice(0, -1) + rest : cento + rest;
}

/** O «uno» das dezenas (21, 31… 91) antes de masculino: ventun anni, ventuno studenti; centouno e milleuno não mudam. */
function withUno(words: string, n: number, g: G, next = ''): string {
  if (n % 100 < 21 || n % 10 !== 1 || g !== 'm' || /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/.test(next)) return words;
  return words.replace(/uno$/, 'un');
}

/**
 * O número por extenso. `g`: o gênero do substantivo depois (contar = sozinho); `next`: a palavra
 * seguinte, para uno (uno studente) × un (un libro). O 1 sozinho diante de substantivo é a spellItalianNumbers que decide.
 */
export function italianNumber(n: number, g: G = 'contar', next = ''): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'zero';
  if (n === 1) return g === 'f' ? 'una' : g === 'm' && !/^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/.test(next) ? 'un' : 'uno';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  let rest = (k === 0 ? '' : k === 1 ? 'mille' : `${below1000(k)}mila`) + (r ? below1000(r) : '');
  // o tre final leva acento: ventitré, centotré, duemilatré
  if (n > 3) rest = rest.replace(/tre$/, 'tré');
  rest = withUno(rest, n, g, next);
  const millions = m === 0 ? '' : m === 1 ? 'un milione' : `${withUno(below1000(m).replace(/tre$/, 'tré'), m, 'm')} milioni`;
  return [millions, rest].filter(Boolean).join(' ');
}

const ORD = ['', 'primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];

/** 1º = primo, 1ª = prima, 11º = undicesimo, 23º = ventitreesimo, 26º = ventiseiesimo, 100º = centesimo. */
export function italianOrdinal(n: number, g: 'm' | 'f' = 'm'): string | null {
  if (!Number.isInteger(n) || n < 1 || n >= 1e6) return null;
  let w: string;
  if (n <= 10) w = ORD[n];
  else {
    const card = italianNumber(n).replace(/tré$/, 'tre').replace(/ /g, '');
    // tre e sei guardam a vogal (ventitreesimo, ventiseiesimo); mille → millesimo; o resto perde a última vogal
    w = /(tre|sei)$/.test(card) ? `${card}esimo` : /mila$/.test(card) ? `${card.slice(0, -4)}millesimo` : `${card.slice(0, -1)}esimo`;
  }
  return g === 'f' ? w.replace(/o$/, 'a') : w;
}

/** Plurais possíveis: libro → libri, casa → case, problema → problemi, amica → amiche, bacio → baci, città → città. */
function plurals(w: string, g: Gender): string[] {
  if (/[àèéìòùi]$|[^aeiou]$|ie$/.test(w)) return [w];
  if (/co$/.test(w)) return [`${w.slice(0, -1)}hi`, `${w.slice(0, -1)}i`];
  if (/go$/.test(w)) return [`${w.slice(0, -1)}hi`, `${w.slice(0, -1)}i`];
  if (/io$/.test(w)) return [`${w.slice(0, -1)}`, `${w.slice(0, -1)}i`];
  if (/[cg]a$/.test(w)) return g === 'f' ? [`${w.slice(0, -1)}he`] : [`${w.slice(0, -1)}hi`];
  if (/[cg]ia$/.test(w)) return g === 'f' ? [`${w.slice(0, -2)}e`, `${w.slice(0, -1)}e`] : [`${w.slice(0, -1)}i`];
  if (/a$/.test(w)) return g === 'f' ? [`${w.slice(0, -1)}e`] : [`${w.slice(0, -1)}i`];
  return [`${w.slice(0, -1)}i`];
}

/** Os plurais que o vocabulário anota: «(pl. le leggi)», «(pl. irregular: l’uomo → gli uomini)», «(pl. le carceri, feminino)». */
function notes(row: VocabRow): [string, Gender][] {
  const out: [string, Gender][] = [];
  for (const m of row[1].matchAll(/\bpl\. ([^);]+)/g)) {
    for (const chunk of m[1].replace(/^(irregular|invariável):?\s*/, '').split(/[/,]/)) {
      const last = chunk.split('→').pop()!.trim();
      const a = last.match(/^(?:(il|lo|la|i|gli|le|l’|l')\s*)?(\p{L}+)$/u);
      if (!a) continue;
      const article = a[1];
      out.push([a[2], article === 'le' || article === 'la' ? 'f' : article === 'i' || article === 'gli' || article === 'il' || article === 'lo' ? 'm' : row[6]!]);
    }
  }
  return out;
}

/** Masculino, feminino e plurais de um adjetivo: bello, bella, belli, belle; grande, grandi. */
function adjForms(w: string): string[] {
  if (/o$/.test(w)) return [`${w.slice(0, -1)}a`, ...plurals(w, 'm'), ...plurals(`${w.slice(0, -1)}a`, 'f'), ...(w === 'bello' ? ['bei', 'begli'] : [])];
  return plurals(w, 'm');
}

/** Palavras que vêm muito depois de um número e que o vocabulário pode não trazer. */
const EXTRA: Record<string, Gender> = { piano: 'm', euro: 'm', centesimi: 'm', centesimo: 'm', milioni: 'm', milione: 'm', anni: 'm', anno: 'm', giorni: 'm', giorno: 'm', ore: 'f', ora: 'f', volte: 'f', volta: 'f', persone: 'f', persona: 'f', minuti: 'm', chilometri: 'm', metri: 'm', chili: 'm', settimane: 'f', mesi: 'm' };

/** Palavras gramaticais que terminam em -o/-a mas não são substantivos (o palpite pela terminação as ignora). */
const STOP = new Set('la lo una uno della dello alla allo dalla dallo nella nello sulla sullo per contro ogni come sopra sotto ancora fuori altro altra tutto tutta stesso stessa meno poco poca molto molta tanto tanta quanto quanta questa questo quella quello nessuna alcuna cosa qualcosa niente nulla verso dopo prima senza circa fino mezzo mezza'.split(' '));

let nouns: Map<string, Gender> | null = null;
let adjectives: Set<string> | null = null;
let guess: ((w: string) => Gender | null) | null = null;

function nounGenderAt(text: string, end: number): 'm' | 'f' | null {
  nouns ??= nounGenders(ROWS, plurals, EXTRA, notes);
  adjectives ??= adjectiveForms(ROWS, adjForms);
  guess ??= guessByEnding(otherWords(ROWS), STOP, false);
  const g = genderAfter(text, end, nouns, adjectives, undefined, guess);
  return g === 'm' || g === 'f' ? g : null;
}

const MONTHS = /^\s+(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)\b/i;
/** Antes de uma hora com ponto (alle 7.02, delle 14.30): o ponto é da hora, não dos milhares. */
const HOUR_BEFORE = /(?:^|[^\p{L}])(?:alle|delle|dalle|sulle|verso le|entro le|le|ore)\s+$/iu;
/** Marca do «un'» colado no substantivo (un'ora), tirada no fim. */
const GLUE = '';

/**
 * Os números do texto: (horas) 14:30 | 14.30, (graus) 36,6 °C, (ordinais) 1º | 1ª | 1°, (número) € 1.400 |
 * 1 400 | 3,5 com % ou € depois. Algarismos colados em letras (A2.1, mp3, 3D), expoentes e barras
 * (482/1999) ficam como estão.
 */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|\p{L}-)(?:(\d{1,2})[:.](\d{2})(?![.,]?\d)|(\d{1,3})(?:,(\d+))?\s?°\s?C\b|(\d{1,3})(º|ª|°)|(€\s?)?(\d{1,3}(?:\.\d{3})+|\d{1,3}(?:[\u00a0\u202f ]\d{3})+(?![\d,])|\d+)(?:,(\d+))?(\s?%|\s?€)?)(?![\p{L}\p{N}/])/gu;

/**
 * Troca os números de um texto pelas palavras: «Ho 21 anni» → «Ho ventun anni», «1 ora» → «un'ora»,
 * «il 1° maggio 1946» → «il primo maggio millenovecentoquarantasei», «alle 7.02» → «alle sette e due».
 */
export function spellItalianNumbers(text: string): string {
  // 1265–1321: o traço vira pausa entre os dois números
  const src = text.replace(/(\d)–(\d)/g, '$1 – $2');
  return src
    .replace(NUMBER, (m, h: string, min: string, deg: string, degDec: string, ord: string, mark: string, euroBefore: string, int: string, dec: string, suffix: string, at: number) => {
      const end = at + m.length;
      const before = src.slice(Math.max(0, at - 12), at);
      if (h !== undefined) {
        // 14.30 só é hora depois de «alle», «delle», «ore»…; 14:30, sempre
        if (m[h.length] === '.' && !HOUR_BEFORE.test(before)) return m;
        if (Number(h) > 24 || Number(min) > 59) return m;
        const hour = Number(h) === 1 ? 'una' : italianNumber(Number(h));
        return Number(min) ? `${hour} e ${italianNumber(Number(min))}` : hour;
      }
      if (deg !== undefined) {
        const n = Number(deg);
        const degrees = degDec === undefined ? italianNumber(n) : `${italianNumber(n)} virgola ${decimalDigits(degDec, (d) => italianNumber(d))}`;
        return `${degrees} ${n === 1 && degDec === undefined ? 'grado' : 'gradi'}`;
      }
      if (ord !== undefined) {
        const n = Number(ord);
        // 1° maggio, 3° piano: ordinal; 30° all'ombra: graus
        if (mark === '°' && !MONTHS.test(src.slice(end)) && nounGenderAt(src, end) === null) return `${italianNumber(n)} ${n === 1 ? 'grado' : 'gradi'}`;
        return italianOrdinal(n, mark === 'ª' || (mark === '°' && nounGenderAt(src, end) === 'f') ? 'f' : 'm') ?? m;
      }
      const n = Number(int.replace(/[.\s]/g, ''));
      if (euroBefore !== undefined || suffix?.trim() === '€') {
        const cents = dec === undefined ? 0 : Number(dec.padEnd(2, '0').slice(0, 2));
        const e = n ? `${italianNumber(n, 'm')} euro` : '';
        const c = cents ? `${italianNumber(cents, 'm')} ${cents === 1 ? 'centesimo' : 'centesimi'}` : '';
        return [e, c].filter(Boolean).join(' e ') || 'zero euro';
      }
      const percent = suffix ? ' per cento' : '';
      if (dec !== undefined) return `${italianNumber(n)} virgola ${decimalDigits(dec, (d) => italianNumber(d))}${percent}`;
      if (percent) return `${italianNumber(n)}${percent}`;
      if (n === 1 && MONTHS.test(src.slice(end))) return 'primo';
      // all'1, l'1: l'una (a hora)
      if (n === 1 && /(?:^|[^\p{L}])(?:l|all|dall|sull|verso l)['’]$/iu.test(before)) return 'una';
      const g = nounGenderAt(src, end) ?? 'contar';
      const next = wordsAfter(src, end)[0] ?? '';
      // un'ora, un'amica: o apóstrofo cola no substantivo
      if (n === 1 && g === 'f' && /^[aeiouàèéìòù]/.test(next)) return `un'${GLUE}`;
      return italianNumber(n, g, next);
    })
    .replace(new RegExp(`${GLUE}\\s*`, 'g'), '');
}
