/**
 * Números por extenso em espanhol, antes da voz: «21 años» vira «veintiún años», e não «veintiuno
 * años»; «200 personas», «doscientas personas».
 *
 * O que concorda com o substantivo que vem depois: o 1 no fim do número (uno sozinho, contando; un
 * antes de masculino; una antes de feminino: veintiún años, veintiuna personas, treinta y un días) e
 * as centenas de 200 a 900 (doscientos libros, doscientas casas), também antes de «mil» (doscientas
 * mil personas, veintiún mil euros). «Millón» é masculino (veintiún millones). O gênero vem do
 * vocabulário do espanhol — o singular e os plurais pelas regras —, pulando um adjetivo no meio
 * (dos grandes casas); palavra fora do vocabulário vai pela terminação (-o(s) masculino, -a(s)
 * feminino); sem substantivo, o artigo feminino de antes (las 21 → las veintiuna; a la 1 → a la
 * una, as horas) e, sem nada, a forma de contar (uno, veintiuno).
 *
 * De 16 a 29 numa palavra só (dieciséis, veintidós, veintitrés); cien sozinho e ciento com mais
 * (ciento uno); «y» só entre dezena e unidade (treinta y cinco, mil novecientos cuarenta y seis).
 * Também: ordinais (1.º, 1º, 1.ª, 1.er, 3er → primero, primera, primer, tercer; 13.º =
 * decimotercero), o dia 1 do mês (1 de mayo → primero de mayo, como no México), horas (14:30 →
 * catorce y treinta; 9 h → nueve horas), decimais com vírgula ou ponto (3,5 → tres coma cinco;
 * 3.5 → tres punto cinco), milhares com ponto, espaço ou vírgula (2.850, 2 850, 2,850), percentagens
 * (por ciento) e euros.
 */
import { ROWS } from '@/data/es/vocabulario';
import { adjectiveForms, decimalDigits, genderAfter, guessByEnding, nounGenders, otherWords, type Gender } from './romanicas';

/** «contar»: uno, veintiuno (sozinho); m: un, veintiún (antes de masculino); f: una, veintiuna. */
type G = 'contar' | 'm' | 'f';

const UNITS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const TENS = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const HUNDREDS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

/** 1 a 29, com o «uno» no gênero pedido: uno/un/una, veintiuno/veintiún/veintiuna. */
function small(n: number, g: G): string {
  const w = UNITS[n];
  if (n % 10 !== 1 || n === 11) return w;
  return g === 'm' ? w.replace(/iuno$/, 'iún').replace(/^uno$/, 'un') : g === 'f' ? `${w.slice(0, -1)}a` : w;
}

function below1000(n: number, g: G): string {
  if (n === 100) return 'cien';
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h) parts.push(g === 'f' && h > 1 ? HUNDREDS[h].replace(/os$/, 'as') : HUNDREDS[h]);
  if (r >= 30) parts.push(r % 10 ? `${TENS[Math.floor(r / 10)]} y ${small(r % 10, g)}` : TENS[r / 10]);
  else if (r) parts.push(small(r, g));
  return parts.join(' ');
}

/** O número por extenso: «contar» é a forma de ler o número sozinho (veintiuno, mil novecientos). */
export function spanishNumber(n: number, g: G = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'cero';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  const parts: string[] = [];
  if (m) parts.push(m === 1 ? 'un millón' : `${below1000(m, 'm')} millones`);
  // antes de «mil» o uno encurta (veintiún mil) e, com substantivo feminino, concorda (veintiuna mil personas)
  if (k) parts.push(k === 1 ? 'mil' : `${below1000(k, g === 'f' ? 'f' : 'm')} mil`);
  if (r) parts.push(below1000(r, g));
  return parts.join(' ');
}

const ORD_UNITS = ['', 'primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno'];
const ORD_TEENS = ['décimo', 'undécimo', 'duodécimo', 'decimotercero', 'decimocuarto', 'decimoquinto', 'decimosexto', 'decimoséptimo', 'decimoctavo', 'decimonoveno'];
const ORD_TENS = ['', 'décimo', 'vigésimo', 'trigésimo', 'cuadragésimo', 'quincuagésimo', 'sexagésimo', 'septuagésimo', 'octogésimo', 'nonagésimo'];
const ORD_HUNDREDS = ['', 'centésimo', 'ducentésimo', 'tricentésimo', 'cuadringentésimo', 'quingentésimo', 'sexcentésimo', 'septingentésimo', 'octingentésimo', 'noningentésimo'];

/**
 * 1.º = primero, 1.ª = primera, 13.º = decimotercero, 21.º = vigésimo primero (até 999). `apocope`:
 * antes de substantivo masculino, primer e tercer (el primer piso, el vigésimo tercer aniversario).
 */
export function spanishOrdinal(n: number, g: 'm' | 'f' = 'm', apocope = false): string | null {
  if (!Number.isInteger(n) || n < 1 || n > 999) return null;
  const r = n % 100;
  const low = r >= 10 && r < 20 ? [ORD_TEENS[r - 10]] : [ORD_TENS[Math.floor(r / 10)], ORD_UNITS[r % 10]];
  const words = [ORD_HUNDREDS[Math.floor(n / 100)], ...low].filter(Boolean);
  const text = words.map((w) => (g === 'f' ? w.replace(/o$/, 'a') : w)).join(' ');
  return g === 'm' && apocope ? text.replace(/(primer|tercer)o$/, '$1') : text;
}

const unaccent = (w: string) => w.normalize('NFD').replace(/́/g, '').normalize('NFC');

/** Plurais possíveis: casa → casas, papel → papeles, luz → luces, canción → canciones, país → países, lunes → lunes. */
function plurals(w: string): string[] {
  if (/[aeiouáéó]$/.test(w)) return [`${w}s`];
  if (/[íú]$/.test(w)) return [`${w}s`, `${w}es`];
  if (/z$/.test(w)) return [`${w.slice(0, -1)}ces`];
  if (/[sx]$/.test(w)) return [w, `${w}es`, `${unaccent(w)}es`];
  return [`${w}es`, `${unaccent(w)}es`];
}

/** Masculino, feminino e plurais de um adjetivo: bueno, buena, buenos, buenas; grande, grandes. */
function adjForms(w: string): string[] {
  const fem = /o$/.test(w) ? `${w.slice(0, -1)}a` : /(or|[óé]n|és)$/.test(w) ? `${unaccent(w)}a` : w;
  return [w, fem, ...plurals(w), ...plurals(fem)];
}

/** Palavras que vêm muito depois de um número e que o vocabulário pode não trazer. */
const EXTRA: Record<string, Gender> = { euros: 'm', euro: 'm', pesos: 'm', peso: 'm', dólares: 'm', dólar: 'm', centavos: 'm', céntimos: 'm', millones: 'm', millón: 'm', años: 'm', año: 'm', días: 'm', horas: 'f', hora: 'f', veces: 'f', vez: 'f', personas: 'f', persona: 'f', minutos: 'm', kilómetros: 'm', metros: 'm', kilos: 'm', semanas: 'f', meses: 'm' };

/** Palavras gramaticais que terminam em -o/-a mas não são substantivos (o palpite pela terminação as ignora). */
const STOP = new Set('la las lo los una uno unos unas del al para contra cada como sobre hasta hacia ahora fuera otro otra otros otras todo toda todos todas mismo misma menos nada algo poco poca mucho mucha tanto tanta cuanto cuanta esta esa eso esto este aquella aquello ninguna alguna casi pronto cierto cierta'.split(' '));

let nouns: Map<string, Gender> | null = null;
let adjectives: Set<string> | null = null;
let guess: ((w: string) => Gender | null) | null = null;
/** «200 mil personas»: o número concorda com personas, por cima do «mil». */
const SKIP = new Set(['mil']);

function nounGenderAt(text: string, end: number): 'm' | 'f' | null {
  nouns ??= nounGenders(ROWS, plurals, EXTRA);
  adjectives ??= adjectiveForms(ROWS, adjForms);
  guess ??= guessByEnding(otherWords(ROWS), STOP, true);
  const g = genderAfter(text, end, nouns, adjectives, SKIP, guess);
  return g === 'm' || g === 'f' ? g : null;
}

function genderAt(text: string, at: number, end: number): G {
  const g = nounGenderAt(text, end);
  if (g) return g;
  // sem substantivo, o artigo feminino de antes: las 21 → las veintiuna; a la 1 → a la una (as horas)
  if (/(^|[^\p{L}])(la|las|unas|estas|esas)\s+$/iu.test(text.slice(Math.max(0, at - 8), at))) return 'f';
  return 'contar';
}

const MONTHS = /^\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)\b/i;

/**
 * Os números do texto: (horas) 14:30 | 9 h, (ordinais) 1.º | 1ª | 1.er | 3er, (número) € 2.850 |
 * 2,850 | 2 850 | 3,5 | 3.5 com % ou € depois. Algarismos colados em letras (H2O, 3D, mp3),
 * expoentes, hífens (art. 75-1) e barras (1/4, 15/03) ficam como estão.
 */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|[\p{L}\p{N}]-)(?:(\d{1,2}):(\d{2})|(\d{1,2})\s?h(?![\p{L}\p{N}])|(\d{1,3})\.?(º|ª|er|ra)|(€\s?)?(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d{1,3}(?:[\u00a0\u202f ]\d{3})+(?:,\d+)?(?![\d,])|\d+(?:[.,]\d+)?)(\s?%|\s?€)?)(?![\p{L}\p{N}/]|-\p{N})/gu;

/** Separa inteiro e decimais, conforme o separador de milhares que o número usa (2.850,5 | 2,850.5 | 2 850,5 | 3,5 | 3.5). */
function parse(num: string): { int: number; dec?: string; sep?: string } {
  const clean = num.replace(/[\s\u00a0\u202f]/g, '');
  const m =
    clean.match(/^(\d{1,3}(?:\.\d{3})+)(?:(,)(\d+))?$/) ??
    clean.match(/^(\d{1,3}(?:,\d{3})+)(?:(\.)(\d+))?$/) ??
    clean.match(/^(\d+)(?:([.,])(\d+))?$/)!;
  return { int: Number(m[1].replace(/[.,]/g, '')), dec: m[3], sep: m[2] };
}

/**
 * Troca os números de um texto pelas palavras: «Tengo 21 años» → «Tengo veintiún años», «a la 1» →
 * «a la una», «el 1.º de mayo» → «el primero de mayo», «a 2.850 metros» → «a dos mil ochocientos
 * cincuenta metros».
 */
export function spellSpanishNumbers(text: string): string {
  // 1927–2014 = de mil novecientos veintisiete a dos mil catorce
  const src = text.replace(/(\d)–(\d)/g, '$1 a $2');
  return src.replace(NUMBER, (m, h: string, min: string, hOnly: string, ord: string, mark: string, euroBefore: string, num: string, suffix: string, at: number) => {
    const end = at + m.length;
    if (h !== undefined || hOnly !== undefined) {
      const hour = Number(h ?? hOnly);
      if (hour > 24 || (min !== undefined && Number(min) > 59)) return m;
      // as horas são femininas: la una, las veintiuna
      if (hOnly !== undefined) return `${spanishNumber(hour, 'f')} ${hour === 1 ? 'hora' : 'horas'}`;
      return Number(min) ? `${spanishNumber(hour, 'f')} y ${spanishNumber(Number(min))}` : spanishNumber(hour, 'f');
    }
    if (ord !== undefined) {
      const fem = mark === 'ª' || mark === 'ra';
      const apocope = mark === 'er' || (!fem && nounGenderAt(src, end) === 'm');
      return spanishOrdinal(Number(ord), fem ? 'f' : 'm', apocope) ?? m;
    }
    const { int, dec, sep } = parse(num);
    if (euroBefore !== undefined || suffix?.trim() === '€') {
      const cents = dec === undefined ? 0 : Number(dec.padEnd(2, '0').slice(0, 2));
      const e = int ? `${spanishNumber(int, 'm')} ${int === 1 ? 'euro' : 'euros'}` : '';
      const c = cents ? `${spanishNumber(cents, 'm')} ${cents === 1 ? 'céntimo' : 'céntimos'}` : '';
      return [e, c].filter(Boolean).join(' con ') || 'cero euros';
    }
    const percent = suffix ? ' por ciento' : '';
    if (dec !== undefined) return `${spanishNumber(int)} ${sep === ',' ? 'coma' : 'punto'} ${decimalDigits(dec, (d) => spanishNumber(d))}${percent}`;
    if (percent) return `${spanishNumber(int)}${percent}`;
    if (int === 1 && MONTHS.test(src.slice(end))) return 'primero';
    return spanishNumber(int, genderAt(src, at, end));
  });
}
