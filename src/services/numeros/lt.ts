/**
 * Números por extenso em lituano, antes da voz.
 *
 * 1 (vienas/viena) e 2 (du/dvi) concordam em gênero e caso com o substantivo que vem depois; de 3 a
 * 9 (trys, keturi/keturios…) concordam em caso e, menos «trys» (só distingue gênero no locativo:
 * trijuose/trijose), também em gênero. 10, os números de 11 a 19 e as dezenas exatas (20, 30…90)
 * são indeclináveis no lituano cardinal padrão contemporâneo.
 *
 * šimtas (100), tūkstantis (1000) e milijonas (1 000 000) se comportam como substantivos e mudam de
 * forma conforme o número que os antecede, pelo ÚLTIMO DÍGITO relevante: termina em 1 (exceto 11) →
 * nominativo singular (tūkstantis); termina em 2–9 (exceto 12–19) → nominativo plural (du
 * tūkstančiai); termina em 0, ou é 10–19, ou é dezena exata → genitivo plural (dešimt tūkstančių,
 * dvidešimt tūkstančių). Não há palavra de ligação («e») entre as partes: dvidešimt vienas, nunca
 * dvidešimt ir vienas.
 *
 * O caso (e, quando dá, o gênero) vem da terminação do substantivo logo depois do número — genitivo
 * plural -ų, dativo -ams/-ioms, instrumental -ais/-iais/-omis/-iomis, locativo -uose/-iuose/-ose/
 * -iose, nominativo -ai/-iai/-os/-ės — sem flexionar esse substantivo de volta. Sem pista clara, o
 * nominativo. Essa é a maior simplificação daqui, diferente do romeno e do russo (que reconhecem o
 * gênero de qualquer palavra do vocabulário): o app ainda não faz a flexão reversa do vocabulário
 * lituano, então uma palavra desconhecida ou em genitivo (onde só «vienas/viena» distingue gênero)
 * sai no masculino.
 */

type Gender = 'm' | 'f';
type Case = 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'loc';
type Forms = Record<Case, Record<Gender, string>>;

const ONE: Forms = {
  nom: { m: 'vienas', f: 'viena' },
  gen: { m: 'vieno', f: 'vienos' },
  dat: { m: 'vienam', f: 'vienai' },
  acc: { m: 'vieną', f: 'vieną' },
  ins: { m: 'vienu', f: 'viena' },
  loc: { m: 'viename', f: 'vienoje' },
};
const TWO: Forms = {
  nom: { m: 'du', f: 'dvi' },
  gen: { m: 'dviejų', f: 'dviejų' },
  dat: { m: 'dviem', f: 'dviem' },
  acc: { m: 'du', f: 'dvi' },
  ins: { m: 'dviem', f: 'dviem' },
  loc: { m: 'dviejuose', f: 'dviejose' },
};
/** 3 (trys) a 9 (devyni/devynios): «trys» só distingue gênero no locativo. */
const THREE_TO_NINE: Forms[] = [
  { nom: { m: 'trys', f: 'trys' }, gen: { m: 'trijų', f: 'trijų' }, dat: { m: 'trims', f: 'trims' }, acc: { m: 'tris', f: 'tris' }, ins: { m: 'trimis', f: 'trimis' }, loc: { m: 'trijuose', f: 'trijose' } },
  { nom: { m: 'keturi', f: 'keturios' }, gen: { m: 'keturių', f: 'keturių' }, dat: { m: 'keturiems', f: 'keturioms' }, acc: { m: 'keturis', f: 'keturias' }, ins: { m: 'keturiais', f: 'keturiomis' }, loc: { m: 'keturiuose', f: 'keturiose' } },
  { nom: { m: 'penki', f: 'penkios' }, gen: { m: 'penkių', f: 'penkių' }, dat: { m: 'penkiems', f: 'penkioms' }, acc: { m: 'penkis', f: 'penkias' }, ins: { m: 'penkiais', f: 'penkiomis' }, loc: { m: 'penkiuose', f: 'penkiose' } },
  { nom: { m: 'šeši', f: 'šešios' }, gen: { m: 'šešių', f: 'šešių' }, dat: { m: 'šešiems', f: 'šešioms' }, acc: { m: 'šešis', f: 'šešias' }, ins: { m: 'šešiais', f: 'šešiomis' }, loc: { m: 'šešiuose', f: 'šešiose' } },
  { nom: { m: 'septyni', f: 'septynios' }, gen: { m: 'septynių', f: 'septynių' }, dat: { m: 'septyniems', f: 'septynioms' }, acc: { m: 'septynis', f: 'septynias' }, ins: { m: 'septyniais', f: 'septyniomis' }, loc: { m: 'septyniuose', f: 'septyniose' } },
  { nom: { m: 'aštuoni', f: 'aštuonios' }, gen: { m: 'aštuonių', f: 'aštuonių' }, dat: { m: 'aštuoniems', f: 'aštuonioms' }, acc: { m: 'aštuonis', f: 'aštuonias' }, ins: { m: 'aštuoniais', f: 'aštuoniomis' }, loc: { m: 'aštuoniuose', f: 'aštuoniose' } },
  { nom: { m: 'devyni', f: 'devynios' }, gen: { m: 'devynių', f: 'devynių' }, dat: { m: 'devyniems', f: 'devynioms' }, acc: { m: 'devynis', f: 'devynias' }, ins: { m: 'devyniais', f: 'devyniomis' }, loc: { m: 'devyniuose', f: 'devyniose' } },
];
const TEENS = ['dešimt', 'vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika', 'šešiolika', 'septyniolika', 'aštuoniolika', 'devyniolika'];
const TENS = ['', '', 'dvidešimt', 'trisdešimt', 'keturiasdešimt', 'penkiasdešimt', 'šešiasdešimt', 'septyniasdešimt', 'aštuoniasdešimt', 'devyniasdešimt'];

function unit(n: number, c: Case, g: Gender): string {
  if (n === 1) return ONE[c][g];
  if (n === 2) return TWO[c][g];
  return THREE_TO_NINE[n - 3][c][g];
}

function below100(n: number, c: Case, g: Gender): string {
  if (n === 0) return '';
  if (n < 10) return unit(n, c, g);
  if (n < 20) return TEENS[n - 10];
  const t = TENS[Math.floor(n / 10)];
  const r = n % 10;
  return r ? `${t} ${unit(r, c, g)}` : t;
}

type Scale = 'šimtas' | 'tūkstantis' | 'milijonas';
const SCALE_WORDS: Record<Scale, { sg: string; pl: string; genPl: string }> = {
  šimtas: { sg: 'šimtas', pl: 'šimtai', genPl: 'šimtų' },
  tūkstantis: { sg: 'tūkstantis', pl: 'tūkstančiai', genPl: 'tūkstančių' },
  milijonas: { sg: 'milijonas', pl: 'milijonai', genPl: 'milijonų' },
};

/** šimtas/tūkstantis/milijonas concordam com o número (`n`) que os antecede. */
function scaleAgreement(n: number): 'sg' | 'pl' | 'genPl' {
  const last2 = n % 100;
  if (last2 >= 10 && last2 <= 19) return 'genPl';
  const last = n % 10;
  if (last === 0) return 'genPl';
  return last === 1 ? 'sg' : 'pl';
}

/** O multiplicador antes de šimtas/tūkstantis/milijonas fica sempre no nominativo masculino. */
function withScale(n: number, scale: Scale): string {
  const mult = n > 1 ? below1000(n, 'nom', 'm') : '';
  return `${mult} ${SCALE_WORDS[scale][scaleAgreement(n)]}`.trim();
}

function below1000(n: number, c: Case, g: Gender): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h) parts.push(withScale(h, 'šimtas'));
  if (r) parts.push(below100(r, c, g));
  return parts.join(' ');
}

/** O número por extenso; `c`/`g` são o caso e o gênero do substantivo que vem depois (padrão: contar). */
export function lithuanianNumber(n: number, c: Case = 'nom', g: Gender = 'm'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'nulis';
  const mi = Math.floor(n / 1e6);
  const th = Math.floor((n % 1e6) / 1000);
  const r = n % 1000;
  const parts: string[] = [];
  if (mi) parts.push(withScale(mi, 'milijonas'));
  if (th) parts.push(withScale(th, 'tūkstantis'));
  if (r || parts.length === 0) parts.push(below1000(r, c, g));
  return parts.join(' ');
}

/**
 * Pista de caso (e, quando dá, gênero) pela terminação da palavra — sem flexionar nada de volta.
 * Cobre as terminações de plural dos principais tipos de substantivo (namas/vaikas, mergaitė,
 * knyga, naktis) E as do próprio numeral/adjetivo (keturi/keturios…), já que «-uose» é sufixo de
 * «-iuose», «-ose» é sufixo de «-iose» etc. — um único `endsWith` pega as duas formas.
 */
function formFromEnding(word: string): { c: Case; g: Gender } | null {
  if (/uose$/.test(word)) return { c: 'loc', g: 'm' };
  if (/(ose|ėse|yse)$/.test(word)) return { c: 'loc', g: 'f' };
  if (/ams$/.test(word)) return { c: 'dat', g: 'm' };
  if (/(oms|ėms|ims)$/.test(word)) return { c: 'dat', g: 'f' };
  if (/ais$/.test(word)) return { c: 'ins', g: 'm' };
  if (/(omis|ėmis|imis)$/.test(word)) return { c: 'ins', g: 'f' };
  if (/ų$/.test(word)) return { c: 'gen', g: 'm' };
  // acusativo plural: -as/-es (feminino) e -us (masculino) só aparecem aqui depois de número (2+),
  // que já pede plural — não têm como ser confundidos com o nominativo singular masculino em -as.
  if (/us$/.test(word)) return { c: 'acc', g: 'm' };
  if (/(as|es)$/.test(word)) return { c: 'acc', g: 'f' };
  if (/(os|ės|ys)$/.test(word)) return { c: 'nom', g: 'f' };
  if (/ai$/.test(word)) return { c: 'nom', g: 'm' };
  return null;
}

/** As duas primeiras palavras depois do número (pula um adjetivo no meio, como «dvi mažos knygos»). */
function nextWords(after: string): string[] {
  const m = after.match(/^\s+(\p{L}+)(?:\s+(\p{L}+))?/u);
  return m ? [m[1], m[2]].filter((w): w is string => !!w).map((w) => w.toLowerCase()) : [];
}

function formAt(after: string): { c: Case; g: Gender } {
  for (const w of nextWords(after)) {
    const f = formFromEnding(w);
    if (f) return f;
  }
  return { c: 'nom', g: 'm' };
}

/** Sequências de algarismos, com espaço normal ou fino como separador de milhar; ignora as coladas em letras (mp3, V2). */
const NUMBER = /(?<![\p{L}\p{N}/]|[\p{L}\p{N}][.,]|[\p{L}\p{N}]-)(\d{1,3}(?:[   ]\d{3})+|\d+)(?![\p{L}\p{N}/]|-\p{N})/gu;

/** Troca os números de um texto pelas palavras: «2 knygos» → «dvi knygos», «10 vaikų» → «dešimt vaikų». */
export function spellLithuanianNumbers(text: string): string {
  return text.replace(NUMBER, (m, int: string, at: number) => {
    const n = Number(int.replace(/[   ]/g, ''));
    const { c, g } = formAt(text.slice(at + m.length));
    return lithuanianNumber(n, c, g);
  });
}
