/**
 * Números por extenso em português, antes da voz: «2 casas» vira «duas casas», e não «dois casas».
 * A norma é a de Portugal (dezasseis, dezassete, dezanove); com `brasil`, a do Brasil (dezesseis,
 * dezessete, dezenove). O resto é igual nos dois países.
 *
 * Um, dois e as centenas (duzentos… novecentos) concordam com o substantivo que vem depois: uma casa,
 * duas casas, duzentas pessoas, e também antes de «mil» (duas mil pessoas, trezentas mil libras);
 * «milhão» é masculino (dois milhões de pessoas). O gênero vem do vocabulário do português — o
 * singular e os plurais pelas regras —, pulando um adjetivo no meio (duas grandes casas). Palavra
 * fora do vocabulário vai pela terminação (-o(s) masculino, -a(s) feminino); sem substantivo, vale o
 * artigo de antes (as 2 → as duas; às 3 → às três, as horas) e, sem nada, a forma de contar: um, dois.
 *
 * O «e» liga centenas, dezenas e unidades (cento e vinte e três) e entra antes do último grupo quando
 * ele é redondo (mil e cem, dois mil e vinte e seis, um milhão e quinhentos mil), mas não no resto
 * (mil novecentos e setenta e quatro). Também: ordinais (1.º, 1º, 1ª → primeiro, primeira), o dia
 * 1 do mês (1 de maio → primeiro de maio), horas (14h30, 14:30 → catorze e trinta; 9h → nove
 * horas), decimais com vírgula (2,5 → dois vírgula cinco), milhares com ponto ou espaço (1.000,
 * 1 000), percentagens (30% → trinta por cento) e euros (2,50 € → dois euros e cinquenta cêntimos).
 */
import { ROWS } from '@/data/pt/vocabulario';
import { adjectiveForms, decimalDigits, genderAfter, guessByEnding, nounGenders, otherWords, type Gender } from './romanicas';

type G = 'm' | 'f';

const UNITS = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezasseis', 'dezassete', 'dezoito', 'dezanove'];
const BRASIL: Record<number, string> = { 16: 'dezesseis', 17: 'dezessete', 19: 'dezenove' };
const TENS = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const HUNDREDS = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

function unit(n: number, g: G, br: boolean): string {
  if (g === 'f' && n === 1) return 'uma';
  if (g === 'f' && n === 2) return 'duas';
  return (br && BRASIL[n]) || UNITS[n];
}

/** 1 a 999: cento e vinte e três, duzentas e uma. */
function below1000(n: number, g: G, br: boolean): string {
  if (n === 100) return 'cem';
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h) parts.push(g === 'f' && h > 1 ? HUNDREDS[h].replace(/os$/, 'as') : HUNDREDS[h]);
  if (r >= 20) {
    parts.push(TENS[Math.floor(r / 10)]);
    if (r % 10) parts.push(unit(r % 10, g, br));
  } else if (r) parts.push(unit(r, g, br));
  return parts.join(' e ');
}

/** O número por extenso, no gênero do substantivo que vem depois (masculino = o de contar). */
export function portugueseNumber(n: number, g: G = 'm', brasil = false): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'zero';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  const groups: [string, number][] = [];
  if (m) groups.push([m === 1 ? 'um milhão' : `${below1000(m, 'm', brasil)} milhões`, m]);
  if (k) groups.push([k === 1 ? 'mil' : `${below1000(k, g, brasil)} mil`, k]);
  if (r) groups.push([below1000(r, g, brasil), r]);
  const words = groups.map((x) => x[0]);
  const last = groups[groups.length - 1][1];
  // «e» antes do último grupo se ele for redondo: mil e cem, mil e vinte; mas mil duzentos e trinta
  if (words.length > 1 && (last < 100 || last % 100 === 0)) return `${words.slice(0, -1).join(' ')} e ${words[words.length - 1]}`;
  return words.join(' ');
}

const ORD_UNITS = ['', 'primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo', 'oitavo', 'nono'];
const ORD_TENS = ['', 'décimo', 'vigésimo', 'trigésimo', 'quadragésimo', 'quinquagésimo', 'sexagésimo', 'septuagésimo', 'octogésimo', 'nonagésimo'];
const ORD_HUNDREDS = ['', 'centésimo', 'ducentésimo', 'tricentésimo', 'quadringentésimo', 'quingentésimo', 'sexcentésimo', 'septingentésimo', 'octingentésimo', 'noningentésimo'];

/** 1.º = primeiro, 21.ª = vigésima primeira, 100.º = centésimo (até 999; além disso, null). */
export function portugueseOrdinal(n: number, g: G = 'm'): string | null {
  if (!Number.isInteger(n) || n < 1 || n > 999) return null;
  const words = [ORD_HUNDREDS[Math.floor(n / 100)], ORD_TENS[Math.floor((n % 100) / 10)], ORD_UNITS[n % 10]].filter(Boolean);
  return words.map((w) => (g === 'f' ? w.replace(/o$/, 'a') : w)).join(' ');
}

/** Plurais possíveis de um substantivo: casa → casas, pão → pães/pões/pãos, papel → papéis, país → países. */
function plurals(w: string): string[] {
  if (/ão$/.test(w)) return ['ões', 'ães', 'ãos'].map((e) => w.slice(0, -2) + e);
  if (/[aeiouáéíóúâêôã]$/.test(w)) return [`${w}s`];
  if (/m$/.test(w)) return [`${w.slice(0, -1)}ns`];
  if (/[rz]$/.test(w)) return [`${w}es`];
  if (/al$/.test(w)) return [`${w.slice(0, -1)}is`];
  if (/el$/.test(w)) return [`${w.slice(0, -2)}eis`, `${w.slice(0, -2)}éis`];
  if (/ol$/.test(w)) return [`${w.slice(0, -2)}óis`];
  if (/ul$/.test(w)) return [`${w.slice(0, -1)}is`];
  if (/il$/.test(w)) return [`${w.slice(0, -1)}s`, `${w.slice(0, -2)}eis`];
  // oxítonas em -s: país → países, mês → meses, inglês → ingleses (as paroxítonas não mudam: o lápis, os lápis)
  if (/s$/.test(w)) return [`${w}es`, `${w.normalize('NFD').replace(/́|̂/g, '').normalize('NFC')}es`];
  return [];
}

/** Masculino, feminino e plurais de um adjetivo: grande, grandes; novo, nova, novos, novas. */
function adjForms(w: string): string[] {
  const fem = /o$/.test(w) ? `${w.slice(0, -1)}a` : /ão$/.test(w) ? `${w.slice(0, -2)}ã` : /(or|ês)$/.test(w) ? `${w.replace(/ês$/, 'es')}a` : /eu$/.test(w) ? `${w}ia` : w;
  return [w, fem, ...plurals(w), ...plurals(fem)];
}

/** Palavras que vêm muito depois de um número e que o vocabulário pode não trazer. */
const EXTRA: Record<string, Gender> = { euros: 'm', euro: 'm', cêntimos: 'm', cêntimo: 'm', reais: 'm', centavos: 'm', milhões: 'm', milhão: 'm', anos: 'm', horas: 'f', hora: 'f', vezes: 'f', pessoas: 'f', minutos: 'm', quilómetros: 'm', quilômetros: 'm', metros: 'm', quilos: 'm', dias: 'm', semanas: 'f', meses: 'm' };

/** Palavras gramaticais que terminam em -o/-a mas não são substantivos (o palpite pela terminação as ignora). */
const STOP = new Set('a o as os um uma do da dos das no na nos nas ao aos pelo pela pelos pelas para contra cada como sobre ainda agora fora outro outra outros outras todo toda todos todas mesmo mesma menos isso isto esta essa esse este aquela aquele aquilo pouco pouca muito muita tanto tanta quanto quanta nenhuma alguma algo quase'.split(' '));

let nouns: Map<string, Gender> | null = null;
let adjectives: Set<string> | null = null;
let guess: ((w: string) => Gender | null) | null = null;

function genderAt(text: string, at: number, end: number): G | null {
  nouns ??= nounGenders(ROWS, plurals, EXTRA);
  adjectives ??= adjectiveForms(ROWS, adjForms);
  guess ??= guessByEnding(otherWords(ROWS), STOP, true);
  const g = genderAfter(text, end, nouns, adjectives, SKIP, guess);
  if (g === 'm' || g === 'f') return g;
  // sem substantivo conhecido, o artigo de antes: as 2 → as duas; às 3 (horas), à 1 → à uma
  const before = text.slice(Math.max(0, at - 12), at);
  if (/(^|[^\p{L}])(à|às|as|das|nas|pelas|estas|essas|aquelas)\s+$/iu.test(before)) return 'f';
  if (/(^|[^\p{L}])(os|dos|nos|pelos|estes|esses|aqueles)\s+$/iu.test(before)) return 'm';
  return null;
}

/** «2 mil pessoas»: o número concorda com pessoas, por cima do «mil». */
const SKIP = new Set(['mil']);

const MONTHS = /^\s+de\s+(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/i;

/**
 * Os números do texto: (horas) 14h30 | 14:30, (ordinais) 1.º | 1ª, (número) € 1.000 | 1 000 |
 * 2,50 com % ou € depois. Algarismos colados em letras (T2, 3D, mp3), expoentes (10⁹), hífens (75-1) e barras
 * (7/99, 1/4, 15/03) ficam como estão.
 */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|[\p{L}\p{N}]-)(?:(\d{1,2})(?:h(\d{2})?|:(\d{2}))|(\d{1,3})\.?([ºª])|(€\s?)?(\d{1,3}(?:\.\d{3})+|\d{1,3}(?:[\u00a0\u202f ]\d{3})+(?![\d,])|\d+)(?:,(\d+))?(\s?%|\s?€)?)(?![\p{L}\p{N}/]|-\p{N})/gu;

/**
 * Troca os números de um texto pelas palavras: «Tenho 2 irmãs» → «Tenho duas irmãs», «às 14h30» →
 * «às catorze e trinta», «1.º andar» → «primeiro andar». Com `brasil`, dezesseis, dezessete, dezenove.
 */
export function spellPortugueseNumbers(text: string, brasil = false): string {
  const say = (n: number, g: G = 'm') => portugueseNumber(n, g, brasil);
  // 1920–1999 = de mil novecentos e vinte a mil novecentos e noventa e nove
  const src = text.replace(/(\d)–(\d)/g, '$1 a $2');
  return src.replace(NUMBER, (m, h: string, hm: string, cm: string, ord: string, mark: string, euroBefore: string, int: string, dec: string, suffix: string, at: number) => {
    if (h !== undefined) {
      const min = hm ?? cm;
      if (Number(h) > 24 || (min !== undefined && Number(min) > 59)) return m;
      // as horas são femininas (uma, duas); os minutos, masculinos
      if (min === undefined || Number(min) === 0) return `${say(Number(h), 'f')} ${Number(h) === 1 ? 'hora' : 'horas'}`;
      return `${say(Number(h), 'f')}${Number(h) === 0 ? ' horas' : ''} e ${say(Number(min))}`;
    }
    if (ord !== undefined) return portugueseOrdinal(Number(ord), mark === 'ª' ? 'f' : 'm') ?? m;
    const n = Number(int.replace(/[.\s\u00a0\u202f]/g, ''));
    const euro = euroBefore !== undefined || suffix?.trim() === '€';
    if (euro) {
      const cents = dec === undefined ? 0 : Number(dec.padEnd(2, '0').slice(0, 2));
      const e = n ? `${say(n)} ${n === 1 ? 'euro' : 'euros'}` : '';
      const c = cents ? `${say(cents)} ${cents === 1 ? 'cêntimo' : 'cêntimos'}` : '';
      return [e, c].filter(Boolean).join(' e ') || 'zero euros';
    }
    const percent = suffix ? ' por cento' : '';
    if (dec !== undefined) return `${say(n)} vírgula ${decimalDigits(dec, (d) => say(d))}${percent}`;
    if (percent) return `${say(n)}${percent}`;
    const end = at + m.length;
    if (n === 1 && MONTHS.test(src.slice(end))) return 'primeiro';
    return say(n, genderAt(src, at, end) ?? 'm');
  });
}
