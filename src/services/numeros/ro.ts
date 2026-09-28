/**
 * Números por extenso em romeno, antes da voz: «2 fete» vira «două fete», e não «doi fete»; «1
 * carte», «o carte»; «22 de trenuri», «douăzeci și două de trenuri».
 *
 * Um e dois concordam com o substantivo que vem depois, também no fim dos compostos (12, 21, 22,
 * 102…): masculino un, doi (un băiat, doi băieți, doisprezece băieți, douăzeci și unu de ani);
 * feminino o, două (o fată, două fete, douăzeci și una de fete); o neutro é masculino no singular e
 * feminino no plural (un tren, două trenuri, douăzeci și două de trenuri). Sozinhos, contando: unu,
 * doi. O gênero vem do vocabulário do romeno — o singular e os plurais pelas regras (com as trocas
 * de vogal e de consoante: fată → fete, carte → cărți, băiat → băieți) —, pulando o «de» que vem
 * depois de 20 (22 de fete: concorda com fete); sem substantivo conhecido, a forma de contar.
 *
 * O «de» entre o número e o substantivo (20 de lei, mas 15 lei e 101 lei) é da frase: o texto já o
 * traz. Dentro do número, é daqui: douăzeci de mii, o sută de milioane (mie é feminino: o mie, două
 * mii, douăzeci și una de mii; milion é neutro: un milion, două milioane). Também: ordinais (al
 * 2-lea → al doilea, a 2-a → a doua), o dia 1 do mês (1 martie, 1 Decembrie → întâi martie,
 * întâi decembrie; os outros dias com a forma de contar: 22 decembrie = douăzeci și doi decembrie),
 * horas, que são femininas mas com «unu» (ora 1 = ora unu, ora 2 = ora două, 14:30 = paisprezece
 * și treizeci), decimais com vírgula (38,5 → treizeci și opt virgulă cinci), milhares com ponto
 * (2.042), percentagens (7% → șapte la sută) e euros (20 € → douăzeci de euro).
 */
import { VOCAB_RO } from '@/data/ro/vocabulario';
import type { VocabRow } from '@/data/types';
import { adjectiveForms, decimalDigits, genderAfter, nounGenders, type Gender } from './romanicas';

/** contar: unu, doi (sozinho); m, n, f: o gênero do substantivo; ora: as horas (ora unu, ora două). */
type G = 'contar' | Gender | 'ora';

const UNITS = ['zero', 'unu', 'doi', 'trei', 'patru', 'cinci', 'șase', 'șapte', 'opt', 'nouă', 'zece', 'unsprezece', 'doisprezece', 'treisprezece', 'paisprezece', 'cincisprezece', 'șaisprezece', 'șaptesprezece', 'optsprezece', 'nouăsprezece'];
const TENS = ['', '', 'douăzeci', 'treizeci', 'patruzeci', 'cincizeci', 'șaizeci', 'șaptezeci', 'optzeci', 'nouăzeci'];

/** 1 a 19 no fim de um número: unu/una, doi/două, doisprezece/douăsprezece. */
function unit(n: number, g: G): string {
  const plural = g === 'f' || g === 'n' || g === 'ora';
  if (n === 1) return g === 'f' ? 'una' : 'unu';
  if (n === 2) return plural ? 'două' : 'doi';
  if (n === 12) return plural ? 'douăsprezece' : 'doisprezece';
  return UNITS[n];
}

function below1000(n: number, g: G): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h) parts.push(h === 1 ? 'o sută' : `${h === 2 ? 'două' : UNITS[h]} sute`);
  if (r >= 20) parts.push(r % 10 ? `${TENS[Math.floor(r / 10)]} și ${unit(r % 10, g)}` : TENS[r / 10]);
  else if (r) parts.push(unit(r, g));
  return parts.join(' ');
}

/** O «de» antes do substantivo: números terminados em 20–99 ou em 00 (20 de lei, 100 de lei; 15 lei, 101 lei). */
export const needsDe = (n: number) => (n % 100 === 0 ? n >= 100 : n % 100 >= 20);

/** O número por extenso; `g` é o gênero do substantivo depois (contar = sozinho). */
export function romanianNumber(n: number, g: G = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'zero';
  if (n === 1) return g === 'f' ? 'o' : g === 'm' || g === 'n' ? 'un' : 'unu';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  const parts: string[] = [];
  if (m) parts.push(m === 1 ? 'un milion' : `${below1000(m, 'n')}${needsDe(m) ? ' de' : ''} milioane`);
  if (k) parts.push(k === 1 ? 'o mie' : `${below1000(k, 'f')}${needsDe(k) ? ' de' : ''} mii`);
  if (r) parts.push(below1000(r, g));
  return parts.join(' ');
}

const ORD_F: Record<string, string> = { una: 'una', două: 'doua', trei: 'treia', patru: 'patra', cinci: 'cincea', șase: 'șasea', șapte: 'șaptea', opt: 'opta', nouă: 'noua', sută: 'suta', sute: 'suta', mie: 'mia', mii: 'mia' };

/**
 * Al 2-lea = al doilea, a 2-a = a doua (sem o «al»/«a», que fica na frase); 1 = întâi (al întâilea,
 * a întâia); al 8-lea = al optulea; a 12-a = a douăsprezecea; al 100-lea = al o sutălea; a 100-a = a suta.
 */
export function romanianOrdinal(n: number, g: 'm' | 'f' = 'm'): string | null {
  if (!Number.isInteger(n) || n < 1 || n >= 1e6) return null;
  if (n === 1) return g === 'f' ? 'întâia' : 'întâilea';
  if (g === 'm') {
    const card = romanianNumber(n);
    return /mie$/.test(card) ? `${card.slice(0, -1)}ilea` : /[^aeiouăâî]$/.test(card) ? `${card}ulea` : `${card}lea`;
  }
  const words = romanianNumber(n, 'f').replace(/^o (sută|mie)$/, '$1').split(' ');
  const last = words.pop()!;
  const fem = ORD_F[last] ?? (/(zece|zeci)$/.test(last) ? last.replace(/(zece|zeci)$/, 'zecea') : last);
  return [...words, fem].join(' ');
}

// ——— o gênero do substantivo ———

/** Trocas de vogal da última sílaba entre singular e plural: fată → fete, carte → cărți, școală → școli, seară → seri, popor → popoare. */
function vowelVariants(stem: string): string[] {
  const out = new Set([stem]);
  const swap = (from: string, to: string) => {
    const i = stem.lastIndexOf(from);
    if (i >= 0 && !/[aeiouăâî]/.test(stem.slice(i + from.length))) out.add(stem.slice(0, i) + to + stem.slice(i + from.length));
  };
  for (const [from, to] of [['oa', 'o'], ['ea', 'e'], ['ia', 'ie'], ['a', 'ă'], ['a', 'e'], ['ă', 'e'], ['o', 'oa']]) swap(from, to);
  return [...out];
}

/** Consoante final amolecida antes do -i do plural: t → ț, d → z, s → ș, st/sc → șt, l cai (copil → copii). */
function palatal(stem: string): string[] {
  if (/(st|sc)$/.test(stem)) return [`${stem.slice(0, -2)}șt`];
  if (/t$/.test(stem)) return [`${stem.slice(0, -1)}ț`];
  if (/d$/.test(stem)) return [`${stem.slice(0, -1)}z`];
  if (/s$/.test(stem)) return [`${stem.slice(0, -1)}ș`];
  if (/l$/.test(stem)) return [stem.slice(0, -1), stem];
  return [stem];
}

/** Plurais possíveis de um substantivo do vocabulário, pelas regras de cada gênero (o que não existir ninguém escreve). */
function plurals(w: string, g: Gender): string[] {
  const out: string[] = [];
  const iPlural = (stem: string) => {
    for (const v of vowelVariants(stem)) for (const p of palatal(v)) out.push(`${p}i`);
  };
  if (g === 'm') {
    const stem = /[eău]$/.test(w) ? w.slice(0, -1) : w;
    iPlural(stem.replace(/ean$/, 'en'));
    return out;
  }
  if (/(ea|a|i)$/.test(w) && g === 'f') return [/ea$/.test(w) ? `${w.slice(0, -1)}le` : `${w}le`];
  if (/ie$/.test(w)) return [`${w.slice(0, -1)}i`];
  if (/iu$/.test(w)) return [`${w.slice(0, -1)}i`, `${w}ri`];
  if (/[ăe]$/.test(w) || (g === 'n' && /u$/.test(w))) {
    const stem = w.slice(0, -1);
    iPlural(stem);
    for (const v of vowelVariants(stem)) out.push(`${v}e`, `${v}uri`);
    if (/u$/.test(w)) out.push(`${w}ri`);
    return out;
  }
  // neutro terminado em consoante ou vogal tônica: tren → trenuri, scaun → scaune, popor → popoare, taxi → taxiuri
  out.push(`${w}uri`);
  for (const v of vowelVariants(w)) out.push(`${v}e`);
  return out;
}

/** Masculino, feminino e plurais de um adjetivo: bun, bună, buni, bune; mare, mari. */
function adjForms(w: string): string[] {
  if (/e$/.test(w)) return [`${w.slice(0, -1)}i`];
  const fem = `${w.replace(/u$/, '')}ă`;
  return [fem, ...palatal(w.replace(/u$/, '')).map((p) => `${p}i`), `${w.replace(/u$/, '')}e`];
}

/** Palavras que vêm muito depois de um número e que o vocabulário pode não trazer (ou traz com um plural irregular). */
const EXTRA: Record<string, Gender> = { lei: 'm', leu: 'm', bani: 'm', ban: 'm', euro: 'm', dolari: 'm', cenți: 'm', ani: 'm', an: 'm', oameni: 'm', copii: 'm', kilometri: 'm', metri: 'm', zile: 'f', zi: 'f', ore: 'f', oră: 'f', surori: 'f', mii: 'f', mie: 'f', milioane: 'n', milion: 'n', miliarde: 'n', grade: 'n', minute: 'n', secole: 'n', kilograme: 'n', ouă: 'n', persoane: 'f', săptămâni: 'f', luni: 'f' };

/** O vocabulário do romeno não exporta as linhas; refaz a partir das entradas. */
const rows = (): VocabRow[] => VOCAB_RO.map((v) => [v.word_target, v.word_native, v.part_of_speech, v.category, v.emoji, v.example_sentence, v.gender ?? undefined]);

let nouns: Map<string, Gender> | null = null;
let adjectives: Set<string> | null = null;
/** «22 de fete»: o número concorda com fete, por cima do «de». */
const SKIP = new Set(['de']);

function genderAt(text: string, end: number): Gender | null {
  nouns ??= nounGenders(rows(), plurals, EXTRA);
  adjectives ??= adjectiveForms(rows(), adjForms);
  return genderAfter(text, end, nouns, adjectives, SKIP);
}

const MONTHS = /^\s+(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)\b/i;
const HOUR_BEFORE = /(?:^|[^\p{L}])(?:ora|orele)\s+$/iu;

/**
 * Os números do texto: (horas) 14:30, (ordinais) 2-lea | 2-a, (número) € 2.042 | 1 000 | 38,5 com %
 * ou € depois. Algarismos colados em letras (mp3, 3D), expoentes e barras ficam como estão.
 */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|[\p{L}\p{N}]-)(?:(\d{1,2}):(\d{2})|(\d{1,6})-(lea|a)|(€\s?)?(\d{1,3}(?:\.\d{3})+|\d{1,3}(?:[\u00a0\u202f ]\d{3})+(?![\d,])|\d+)(?:,(\d+))?(\s?%|\s?€)?)(?![\p{L}\p{N}/]|-\p{N})/gu;

/**
 * Troca os números de um texto pelas palavras: «2 fete» → «două fete», «Am 22 de ani» → «Am douăzeci
 * și doi de ani», «Pe 1 martie» → «Pe întâi martie», «la ora 2» → «la ora două».
 */
export function spellRomanianNumbers(text: string): string {
  // 1850–1889: o traço vira pausa entre os dois números
  const src = text.replace(/(\d)–(\d)/g, '$1 – $2');
  return src.replace(NUMBER, (m, h: string, min: string, ord: string, mark: string, euroBefore: string, int: string, dec: string, suffix: string, at: number) => {
    const end = at + m.length;
    if (h !== undefined) {
      if (Number(h) > 24 || Number(min) > 59) return m;
      const hour = romanianNumber(Number(h), 'ora');
      // os minutos (neutro) têm as mesmas formas das horas: și unu, și două, și douăzeci și două
      return Number(min) ? `${hour} și ${romanianNumber(Number(min), 'ora')}` : hour;
    }
    if (ord !== undefined) return romanianOrdinal(Number(ord), mark === 'a' ? 'f' : 'm') ?? m;
    const n = Number(int.replace(/[.\s]/g, ''));
    if (euroBefore !== undefined || suffix?.trim() === '€') {
      const cents = dec === undefined ? 0 : Number(dec.padEnd(2, '0').slice(0, 2));
      const e = n ? `${romanianNumber(n, 'm')}${needsDe(n) ? ' de' : ''} euro` : '';
      const c = cents ? `${romanianNumber(cents, 'm')}${needsDe(cents) ? ' de' : ''} ${cents === 1 ? 'cent' : 'cenți'}` : '';
      return [e, c].filter(Boolean).join(' și ') || 'zero euro';
    }
    const percent = suffix ? ' la sută' : '';
    if (dec !== undefined) return `${romanianNumber(n)} virgulă ${decimalDigits(dec, (d) => romanianNumber(d))}${percent}`;
    if (percent) return `${romanianNumber(n)}${percent}`;
    if (n === 1 && MONTHS.test(src.slice(end))) return 'întâi';
    if (HOUR_BEFORE.test(src.slice(Math.max(0, at - 8), at))) return romanianNumber(n, 'ora');
    return romanianNumber(n, genderAt(src, end) ?? 'contar');
  });
}
