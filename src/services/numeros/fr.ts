/**
 * Números por extenso em francês (o da França: soixante-dix, quatre-vingts, quatre-vingt-dix), antes
 * da voz: «21 filles» vira «vingt et une filles», «1 heure», «une heure».
 *
 * Só o «un» do fim do número muda com o substantivo que vem depois: une antes de feminino (une
 * maison, vingt et une pages, quatre-vingt-une, cent une); un sozinho ou com masculino. O gênero vem
 * do vocabulário do francês — o singular, os plurais pelas regras e os anotados («pl. eaux») —,
 * pulando um adjetivo no meio (deux petites filles); sem substantivo conhecido, un.
 *
 * A grafia tradicional, a que a trilha usa: hífen entre dezenas e unidades abaixo de cem (dix-sept,
 * quatre-vingt-dix-neuf), «et» no 21, 31… 71 (vingt et un, soixante et onze; mas quatre-vingt-un);
 * «vingts» e «cents» com s só no fim do número (quatre-vingts, deux cents; quatre-vingt-deux, deux
 * cent un, deux cent mille), e antes de «millions», que é substantivo (deux cents millions); «mille»
 * nunca varia. Anos com «mille» (mille neuf cent quarante-six). Também: ordinais (1er, 1re, 1ère,
 * 2e, 2ème, 2nd → premier, première, deuxième, second), o dia 1 do mês (1 mai → premier mai), horas
 * (14 h 30, 14h30, 14:30 → quatorze heures trente; 1 h → une heure), decimais com vírgula (3,5 →
 * trois virgule cinq), milhares com espaço ou ponto (1 000 000, 1.800), percentagens (pour cent) e
 * euros (2,50 € → deux euros cinquante).
 */
import { ROWS } from '@/data/fr/vocabulario';
import type { VocabRow } from '@/data/types';
import { adjectiveForms, decimalDigits, genderAfter, nounGenders, type Gender } from './romanicas';

type G = 'm' | 'f';

const UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const TENS = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

const unit = (n: number, g: G) => (n === 1 && g === 'f' ? 'une' : UNITS[n]);

/** 0 a 99. `last`: é o fim do número (quatre-vingts com s) ou vem mais (quatre-vingt mille). */
function below100(n: number, g: G, last: boolean): string {
  if (n < 20) return unit(n, g);
  if (n < 70) {
    const t = TENS[Math.floor(n / 10)];
    const u = n % 10;
    return u === 0 ? t : u === 1 ? `${t} et ${unit(1, g)}` : `${t}-${UNITS[u]}`;
  }
  if (n < 80) return n === 71 ? 'soixante et onze' : `soixante-${UNITS[n - 60]}`;
  if (n === 80) return last ? 'quatre-vingts' : 'quatre-vingt';
  return `quatre-vingt-${unit(n - 80, g)}`;
}

function below1000(n: number, g: G, last: boolean): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (!h) return below100(r, g, last);
  const cent = h === 1 ? 'cent' : `${UNITS[h]} cent${!r && last ? 's' : ''}`;
  return r ? `${cent} ${below100(r, g, last)}` : cent;
}

/** O número por extenso; `g` é o gênero do substantivo depois (só muda o «un» do fim). */
export function frenchNumber(n: number, g: G = 'm'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'zéro';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  const parts: string[] = [];
  // «millions» é substantivo: deux cents millions, quatre-vingts millions
  if (m) parts.push(m === 1 ? 'un million' : `${below1000(m, 'm', true)} millions`);
  // «mille» é numeral: deux cent mille, quatre-vingt mille, vingt et un mille
  if (k) parts.push(k === 1 ? 'mille' : `${below1000(k, 'm', false)} mille`);
  if (r) parts.push(below1000(r, g, true));
  return parts.join(' ');
}

/** 1er = premier, 1re = première, 2e = deuxième (ou second), 21e = vingt et unième, 80e = quatre-vingtième. */
export function frenchOrdinal(n: number, g: G = 'm', second = false): string | null {
  if (!Number.isInteger(n) || n < 1 || n >= 1e9) return null;
  if (n === 1) return g === 'f' ? 'première' : 'premier';
  if (n === 2 && second) return g === 'f' ? 'seconde' : 'second';
  const card = frenchNumber(n).replace(/(cent|vingt)s$/, '$1');
  if (/cinq$/.test(card)) return `${card}uième`;
  if (/neuf$/.test(card)) return `${card.slice(0, -1)}vième`;
  return `${card.replace(/e$/, '')}ième`;
}

/** Plurais possíveis: maison → maisons, journal → journaux, bateau → bateaux, prix → prix. */
function plurals(w: string): string[] {
  if (/[sxz]$/.test(w)) return [w];
  if (/(eau|au|eu)$/.test(w)) return [`${w}x`, `${w}s`];
  if (/al$/.test(w)) return [`${w.slice(0, -2)}aux`, `${w}s`];
  if (/ail$/.test(w)) return [`${w.slice(0, -3)}aux`, `${w}s`];
  return [`${w}s`];
}

/** As formas que o vocabulário anota: «(pl. eaux)», «(f. jumelle; pl. jumeaux)». */
function notes(row: VocabRow): [string, Gender][] {
  const out: [string, Gender][] = [];
  for (const m of row[1].matchAll(/\b(pl|f)\. (\p{L}[\p{L}-]*)/gu)) if (m[2] !== 'invariável') out.push([m[2], m[1] === 'f' ? 'f' : row[6]!]);
  return out;
}

/** Masculino, feminino e plurais de um adjetivo: petit, petite, petits, petites; beau, belle; heureux, heureuse. */
function adjForms(w: string): string[] {
  const fem = /e$/.test(w)
    ? w
    : /eux$/.test(w)
      ? `${w.slice(0, -1)}se`
      : /if$/.test(w)
        ? `${w.slice(0, -1)}ve`
        : /er$/.test(w)
          ? `${w.slice(0, -2)}ère`
          : /(el|en|on)$/.test(w)
            ? `${w}${w.slice(-1)}e`
            : /eau$/.test(w)
              ? `${w.slice(0, -2)}lle`
              : `${w}e`;
  return [fem, ...plurals(w), `${fem}s`, ...(w === 'vieux' ? ['vieille', 'vieilles'] : [])];
}

/** Palavras que vêm muito depois de um número e que o vocabulário pode não trazer. */
const EXTRA: Record<string, Gender> = { euro: 'm', euros: 'm', centimes: 'm', millions: 'm', million: 'm', ans: 'm', an: 'm', jours: 'm', heures: 'f', heure: 'f', fois: 'f', personnes: 'f', personne: 'f', minutes: 'f', minute: 'f', kilomètres: 'm', mètres: 'm', semaines: 'f', mois: 'm', nuits: 'f', nuit: 'f', pages: 'f' };

let nouns: Map<string, Gender> | null = null;
let adjectives: Set<string> | null = null;

function genderAt(text: string, end: number): G {
  nouns ??= nounGenders(ROWS, plurals, EXTRA, notes);
  adjectives ??= adjectiveForms(ROWS, adjForms);
  return genderAfter(text, end, nouns, adjectives) === 'f' ? 'f' : 'm';
}

const MONTHS = /^\s+(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\b/i;

/** «dix-huit heures trente», «une heure», «vingt et une heures cinq». */
function hours(h: number, min?: number): string {
  const head = `${frenchNumber(h, 'f')} ${h > 1 ? 'heures' : 'heure'}`;
  return min ? `${head} ${frenchNumber(min, 'f')}` : head;
}

/**
 * Os números do texto: (horas) 18 h 30 | 18h30 | 18 h | 14:30, (ordinais) 1er | 1re | 2e | 2ème |
 * 2nd, (número) € 1 000 000 | 1.800 | 3,5 com % ou € depois. Algarismos colados em letras (A2.1,
 * mp3, 3D), expoentes e barras (1/4) ficam como estão.
 */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|\p{L}-)(?:(\d{1,2})\s?h(?:\s?(\d{2}))?(?![\p{L}\p{N}])|(\d{1,2}):(\d{2})|(\d{1,6})(ers?|res?|ères?|nde?s?|èmes?|es?)|(€\s?)?(\d{1,3}(?:[\u00a0\u202f ]\d{3})+(?![\d,])|\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?(\s?%|\s?€)?)(?![\p{L}\p{N}/])/gu;

/**
 * Troca os números de um texto pelas palavras: «J'ai 21 ans» → «J'ai vingt et un ans», «21 pages» →
 * «vingt et une pages», «le 1er mai 1789» → «le premier mai mille sept cent quatre-vingt-neuf», «à
 * 18 h 30» → «à dix-huit heures trente».
 */
export function spellFrenchNumbers(text: string): string {
  // 1621–1695 = de mille six cent vingt et un à mille six cent quatre-vingt-quinze
  const src = text.replace(/(\d)–(\d)/g, '$1 à $2');
  return src.replace(NUMBER, (m, h: string, hm: string, ch: string, cm: string, ord: string, mark: string, euroBefore: string, int: string, dec: string, suffix: string, at: number) => {
    const end = at + m.length;
    if (h !== undefined || ch !== undefined) {
      const hour = Number(h ?? ch);
      const min = hm ?? cm;
      if (hour > 24 || (min !== undefined && Number(min) > 59)) return m;
      return hours(hour, min === undefined ? undefined : Number(min));
    }
    if (ord !== undefined) {
      const fem = /^(re|ère|nde)/.test(mark);
      // 1er, 1re: só com 1; 2nd: só com 2; e, ème: de 2 em diante
      if (/^(er|re|ère)/.test(mark) !== (ord === '1') || (/^nd/.test(mark) && ord !== '2')) return m;
      return frenchOrdinal(Number(ord), fem ? 'f' : genderAt(src, end), /^nd/.test(mark)) ?? m;
    }
    const n = Number(int.replace(/[.\s]/g, ''));
    if (euroBefore !== undefined || suffix?.trim() === '€') {
      const cents = dec === undefined ? 0 : Number(dec.padEnd(2, '0').slice(0, 2));
      if (!n) return cents ? `${frenchNumber(cents)} ${cents === 1 ? 'centime' : 'centimes'}` : 'zéro euro';
      return `${frenchNumber(n)} ${n === 1 ? 'euro' : 'euros'}${cents ? ` ${frenchNumber(cents)}` : ''}`;
    }
    const percent = suffix ? ' pour cent' : '';
    if (dec !== undefined) return `${frenchNumber(n)} virgule ${decimalDigits(dec, (d) => frenchNumber(d))}${percent}`;
    if (percent) return `${frenchNumber(n)}${percent}`;
    if (n === 1 && MONTHS.test(src.slice(end))) return 'premier';
    return frenchNumber(n, genderAt(src, end));
  });
}
