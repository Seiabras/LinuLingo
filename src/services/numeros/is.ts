/**
 * Números por extenso em islandês. 1 a 4 se declinam em gênero e caso, como adjetivos:
 *   einn/ein/eitt, tveir/tvær/tvö, þrír/þrjár/þrjú, fjórir/fjórar/fjögur (nominativo);
 *   acusativo einn/eina/eitt, tvo/tvær/tvö, þrjá/þrjár/þrjú, fjóra/fjórar/fjögur;
 *   dativo einum/einni/einu, tveimur, þremur, fjórum; genitivo eins/einnar/eins, tveggja, þriggja, fjögurra.
 * O gênero vem do substantivo que vem depois (o vocabulário do islandês dá o nominativo e, entre
 * parênteses, o genitivo e o plural: «(krónu, krónur)»), pulando um adjetivo no meio. O caso vem
 * da preposição antes do número (til/án/milli… + genitivo; frá/af/úr/að/hjá… + dativo; um + acusativo;
 * í/á/með/eftir/fyrir… + acusativo ou dativo) e da terminação do substantivo (-um é dativo plural).
 * Sozinho, contando, é o masculino nominativo (einn, tveir, þrír, fjórir); nas horas e nos anos, o
 * neutro (klukkan tvö, árið tvö þúsund og tvö).
 *
 * «hundrað» e «þúsund» são substantivos neutros: tvö hundruð, þrjú þúsund, tuttugu og eitt þúsund;
 * «milljón» é feminino: ein milljón, tvær milljónir. O «og» entra uma vez, antes da última palavra:
 * tuttugu og einn, hundrað og tuttugu, hundrað tuttugu og fimm, þúsund og fimm hundruð. Os anos de
 * 1100 a 1999 se leem em centenas: 1944 = nítján hundruð fjörutíu og fjögur.
 *
 * Ordinais com ponto, declinados como adjetivo fraco (annar como forte): «17. júní» = sautjándi júní
 * (nominativo) ou sautjánda júní (data como adjunto: «stofnað 17. júní»), «á 9. öld» = á níundu öld.
 */
import { ROWS } from '@/data/is/vocabulario';
import { mapaDeAdjetivos, proximasPalavras, spellNordic, type RegrasNordicas, type Unidade } from './nordico';

type Gender = 'm' | 'f' | 'n';
type Case = 'nom' | 'acc' | 'dat' | 'gen';
export interface Forma {
  g: Gender;
  c: Case;
}

const SMALL: Record<Case, Record<Gender, string>>[] = [
  // 1
  { nom: { m: 'einn', f: 'ein', n: 'eitt' }, acc: { m: 'einn', f: 'eina', n: 'eitt' }, dat: { m: 'einum', f: 'einni', n: 'einu' }, gen: { m: 'eins', f: 'einnar', n: 'eins' } },
  // 2
  { nom: { m: 'tveir', f: 'tvær', n: 'tvö' }, acc: { m: 'tvo', f: 'tvær', n: 'tvö' }, dat: { m: 'tveimur', f: 'tveimur', n: 'tveimur' }, gen: { m: 'tveggja', f: 'tveggja', n: 'tveggja' } },
  // 3
  { nom: { m: 'þrír', f: 'þrjár', n: 'þrjú' }, acc: { m: 'þrjá', f: 'þrjár', n: 'þrjú' }, dat: { m: 'þremur', f: 'þremur', n: 'þremur' }, gen: { m: 'þriggja', f: 'þriggja', n: 'þriggja' } },
  // 4
  { nom: { m: 'fjórir', f: 'fjórar', n: 'fjögur' }, acc: { m: 'fjóra', f: 'fjórar', n: 'fjögur' }, dat: { m: 'fjórum', f: 'fjórum', n: 'fjórum' }, gen: { m: 'fjögurra', f: 'fjögurra', n: 'fjögurra' } },
];
const UNITS = ['núll', '', '', '', '', 'fimm', 'sex', 'sjö', 'átta', 'níu', 'tíu', 'ellefu', 'tólf', 'þrettán', 'fjórtán', 'fimmtán', 'sextán', 'sautján', 'átján', 'nítján'];
const TENS = ['', '', 'tuttugu', 'þrjátíu', 'fjörutíu', 'fimmtíu', 'sextíu', 'sjötíu', 'áttatíu', 'níutíu'];

const CONTAR: Forma = { g: 'm', c: 'nom' };
const NEUTRO: Forma = { g: 'n', c: 'nom' };

const unit = (n: number, f: Forma) => (n >= 1 && n <= 4 ? SMALL[n - 1][f.c][f.g] : UNITS[n]);

function below100(n: number, f: Forma): string {
  if (n < 20) return unit(n, f);
  const t = TENS[Math.floor(n / 10)];
  return n % 10 ? `${t} og ${unit(n % 10, f)}` : t;
}

/** Junta os pedaços com o «og» antes do último — a não ser que o último já tenha o dele. */
function join(parts: string[]): string {
  if (parts.length < 2) return parts[0] ?? '';
  const last = parts[parts.length - 1];
  return last.includes(' og ') ? parts.join(' ') : `${parts.slice(0, -1).join(' ')} og ${last}`;
}

function parts1000(n: number, f: Forma, opens: boolean): string[] {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const out: string[] = [];
  if (h) out.push(h === 1 ? (opens ? 'hundrað' : 'eitt hundrað') : `${unit(h, NEUTRO)} hundruð`);
  if (rest) out.push(below100(rest, f));
  return out;
}

export function icelandicNumber(n: number, f: Forma = CONTAR): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'núll';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const parts: string[] = [];
  // «tuttugu og ein milljón»: depois de um «ein» final, o singular
  if (m) parts.push(m === 1 ? 'ein milljón' : `${join(parts1000(m, { g: 'f', c: 'nom' }, true))} ${m % 10 === 1 && m % 100 !== 11 ? 'milljón' : 'milljónir'}`);
  if (k) parts.push(k === 1 && !m ? 'þúsund' : `${join(parts1000(k, NEUTRO, !m))} þúsund`);
  parts.push(...parts1000(rest, f, !m && !k));
  return join(parts);
}

/** Anos de 1100 a 1999 em centenas, no neutro: 1944 = nítján hundruð fjörutíu og fjögur. */
export function icelandicYear(n: number): string | null {
  if (n < 1100 || n > 1999) return null;
  const parts = [`${below100(Math.floor(n / 100), NEUTRO)} hundruð`];
  if (n % 100) parts.push(below100(n % 100, NEUTRO));
  return join(parts);
}

const ORD_STEM = ['', 'fyrst', '', 'þriðj', 'fjórð', 'fimmt', 'sjött', 'sjöund', 'áttund', 'níund', 'tíund', 'elleft', 'tólft', 'þrettánd', 'fjórtánd', 'fimmtánd', 'sextánd', 'sautjánd', 'átjánd', 'nítjánd'];
const ORD_TENS = ['', '', 'tuttugast', 'þrítugast', 'fertugast', 'fimmtugast', 'sextugast', 'sjötugast', 'áttugast', 'nítugast'];
/** «annar» se declina como adjetivo forte. */
const ANNAR: Record<Case, Record<Gender, string>> = {
  nom: { m: 'annar', f: 'önnur', n: 'annað' },
  acc: { m: 'annan', f: 'aðra', n: 'annað' },
  dat: { m: 'öðrum', f: 'annarri', n: 'öðru' },
  gen: { m: 'annars', f: 'annarrar', n: 'annars' },
};
const ANNAR_PL: Record<Case, Record<Gender, string>> = {
  nom: { m: 'aðrir', f: 'aðrar', n: 'önnur' },
  acc: { m: 'aðra', f: 'aðrar', n: 'önnur' },
  dat: { m: 'öðrum', f: 'öðrum', n: 'öðrum' },
  gen: { m: 'annarra', f: 'annarra', n: 'annarra' },
};

/** Terminação fraca: sautjándi (m. nom.), sautjánda (m. obl., f. nom., n.), sautjándu (f. obl., pl.). */
function weak(stem: string, f: Forma, pl: boolean): string {
  if (pl) return `${stem}u`;
  if (f.g === 'm') return stem + (f.c === 'nom' ? 'i' : 'a');
  if (f.g === 'f') return stem + (f.c === 'nom' ? 'a' : 'u');
  return `${stem}a`;
}

function ordBelow100(n: number, f: Forma, pl: boolean): string {
  if (n === 2) return (pl ? ANNAR_PL : ANNAR)[f.c][f.g];
  if (n < 20) return weak(ORD_STEM[n], f, pl);
  const t = weak(ORD_TENS[Math.floor(n / 10)], f, pl);
  return n % 10 ? `${t} og ${ordBelow100(n % 10, f, pl)}` : t;
}

/** Ordinais declinados (até 999): fyrsti, annar, sautjándi, tuttugasti og fyrsti, hundraðasti… */
export function icelandicOrdinal(n: number, f: Forma = CONTAR, pl = false): string {
  if (n <= 0 || n >= 1000) return icelandicNumber(n, f);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = h ? (h === 1 ? '' : `${unit(h, NEUTRO)} `) + weak('hundraðast', f, pl) : '';
  if (!rest) return head;
  return head ? `${head} ${ordBelow100(rest, f, pl)}` : ordBelow100(rest, f, pl);
}

// ---------------------------------------------------------------- o substantivo depois do número

interface Entrada {
  g: Gender | null;
  pl: boolean;
  cases: Set<Case>;
}

let forms: Map<string, Entrada> | null = null;

/**
 * Forma do substantivo → gênero, número e casos possíveis: o nominativo do dicionário, o genitivo
 * e o plural anotados «(krónu, krónur)», e as formas regulares que saem deles (acusativo e dativo
 * do singular, acusativo do plural masculino).
 */
function formMap(): Map<string, Entrada> {
  if (forms) return forms;
  const map = new Map<string, Entrada>();
  const add = (form: string, g: Gender, pl: boolean, cases: Case[]) => {
    const f = form.toLowerCase();
    if (!f || /[^\p{L}]/u.test(f)) return;
    const e = map.get(f);
    if (!e) map.set(f, { g, pl, cases: new Set(cases) });
    else {
      if (e.g !== g) e.g = null;
      e.pl = e.pl && pl;
      for (const c of cases) e.cases.add(c);
    }
  };
  for (const row of ROWS) {
    const g = row[6];
    if (row[2] !== 'substantivo' || !g) continue;
    const nom = row[0].toLowerCase();
    if (/\s/.test(nom)) continue;
    const note = [...row[1].matchAll(/\(([\p{L}]+)(?:, ([\p{L}]+))?[,;)]/gu)].pop();
    const soPlural = /só no plural/.test(row[1]);
    // o feminino forte é igual no nominativo, no acusativo e (quase sempre) no dativo: bók, ferð, öld
    add(nom, g, soPlural, g === 'n' || soPlural ? ['nom', 'acc'] : g === 'f' && !nom.endsWith('a') ? ['nom', 'acc', 'dat'] : ['nom']);
    if (soPlural) continue;
    if (g === 'm') {
      if (nom.endsWith('ur')) {
        add(nom.slice(0, -2), g, false, ['acc', 'dat']);
        add(`${nom.slice(0, -2)}i`, g, false, ['dat']);
      } else if (/(ll|nn)$/.test(nom)) {
        add(nom.slice(0, -1), g, false, ['acc', 'dat']);
        add(`${nom.slice(0, -1)}i`, g, false, ['dat']);
      } else if (nom.endsWith('i')) add(`${nom.slice(0, -1)}a`, g, false, ['acc', 'dat', 'gen']);
    } else if (g === 'f' && nom.endsWith('a')) {
      add(`${nom.slice(0, -1)}u`, g, false, ['acc', 'dat', 'gen']);
    } else if (g === 'n' && !/[aeiouyáéíóúýæö]$/.test(nom)) {
      add(`${nom}i`, g, false, ['dat']);
    }
    if (!note) continue;
    add(note[1], g, false, ['gen']);
    const pl = note[2];
    if (!pl || pl === 'sem') continue;
    add(pl, g, true, g === 'm' ? ['nom'] : ['nom', 'acc']);
    if (g === 'm' && /(ar|ir)$/.test(pl)) add(pl.slice(0, -1), g, true, ['acc']);
  }
  for (const [form, g, cases] of IRREGULARES) map.set(form, { g, pl: true, cases: new Set(cases) });
  forms = map;
  return map;
}

/** Plurais irregulares que vêm muito depois de um número e que o vocabulário não anota. */
const IRREGULARES: [string, Gender, Case[]][] = [
  // «200 manns»: o genitivo de «maður» virou um substantivo de contar gente
  ['manns', 'm', ['nom', 'acc']],
  ['menn', 'm', ['nom', 'acc']],
  ['synir', 'm', ['nom']],
  ['syni', 'm', ['acc']],
  ['bræður', 'm', ['nom', 'acc']],
  ['feður', 'm', ['nom', 'acc']],
  ['fætur', 'm', ['nom', 'acc']],
  ['dætur', 'f', ['nom', 'acc']],
  ['systur', 'f', ['nom', 'acc']],
  ['mæður', 'f', ['nom', 'acc']],
  ['nætur', 'f', ['nom', 'acc']],
  ['vikur', 'f', ['nom', 'acc']],
];

const GEN_PREP = new Set(['til', 'án', 'milli', 'meðal', 'vegna', 'auk', 'innan', 'utan', 'sakir', 'sökum']);
const DAT_PREP = new Set(['frá', 'af', 'úr', 'að', 'hjá', 'gegn', 'gegnt', 'móti', 'ásamt', 'handa', 'nálægt', 'samkvæmt', 'meðfram']);
const ACC_PREP = new Set(['um', 'gegnum', 'kringum', 'umhverfis', 'umfram']);
/**
 * Pedem acusativo ou dativo, conforme o sentido: decide a terminação do substantivo. Quando ela não
 * decide, «í», «á», «með», «undir» e «yfir» ficam no dativo (lugar: á annarri hæð), as outras no acusativo.
 */
const AMBI_PREP = new Set(['í', 'á', 'með', 'eftir', 'fyrir', 'undir', 'yfir', 'við']);
const AMBI_DAT = new Set(['í', 'á', 'með', 'undir', 'yfir']);

const lastWord = (antes: string) => antes.match(/([\p{L}]+)\s*$/u)?.[1].toLowerCase() ?? '';

/**
 * O caso pedido pela preposição antes do número, se houver uma; «cases»: os que a forma do
 * substantivo admite. Um plural que não termina em -um não é dativo (í þrjá daga, í tvær vikur).
 */
function caseFromPrep(prep: string, cases: Set<Case> | null, plural = false): Case | null {
  if (GEN_PREP.has(prep)) return 'gen';
  if (DAT_PREP.has(prep)) return 'dat';
  if (ACC_PREP.has(prep)) return 'acc';
  if (!AMBI_PREP.has(prep)) return null;
  if (cases?.has('dat') && !cases.has('acc')) return 'dat';
  if (cases?.has('acc') && !cases.has('dat')) return 'acc';
  if (!cases && plural) return 'acc';
  return AMBI_DAT.has(prep) ? 'dat' : 'acc';
}

let adjectives: Set<string> | null = null;
const adjectiveSet = () =>
  (adjectives ??= mapaDeAdjetivos(ROWS, ['', 'ur', 'ir', 'ar', 'a', 'um', 'ra', 'an', 'i', 'u', 't', 's', 'rar', 'ri', 'rri'], (b) => (b.endsWith('ur') ? b.slice(0, -2) : /(ll|nn)$/.test(b) ? b.slice(0, -1) : b)));

/** O substantivo depois do número (ou depois de um adjetivo conhecido), se o vocabulário souber. */
function nounAfter(depois: string): Entrada | null {
  const [a, b] = proximasPalavras(depois.replace(/^\s+(og|eða|til|–|-)\s+\d+\.?/, ''));
  const map = formMap();
  // dativo plural, de qualquer gênero: «tveimur dögum», «þremur stórum húsum»
  const dat = (w: string) => (w.length > 3 && w.endsWith('um') ? { g: null, pl: true, cases: new Set<Case>(['dat']) } : null);
  if (!a) return null;
  const e = map.get(a) ?? dat(a);
  if (e) return e;
  return b && adjectiveSet().has(a) ? (map.get(b) ?? null) : null;
}

/** A palavra logo depois é um substantivo do vocabulário? */
const temSubstantivo = (depois: string) => formMap().has(proximasPalavras(depois)[0] ?? '');

const PRONOMES = new Set(['ég', 'þú', 'hann', 'hún', 'það', 'hver', 'sem', 'maður', 'enginn', 'hvor']);

/**
 * A preposição antes do número, passando por cima de um «17. og» («á 17. og 18. öld»). Depois de
 * pronome ou de nome, «á» é o verbo «eiga» (Hún á 2 börn), não a preposição.
 */
function prepBefore(antes: string): string {
  const t = antes.replace(/\s*\d+\.?\s+(og|eða)\s*$/, '');
  const m = t.match(/([\p{L}]+)\s+([\p{L}]+)\s*$/u);
  if (m && m[2] === 'á' && (PRONOMES.has(m[1].toLowerCase()) || /^\p{Lu}/u.test(m[1]))) return '';
  return lastWord(t);
}

function formaIs(antes: string, depois: string, n: number): Forma {
  if (/[+\-−=×*/]\s*$/.test(antes) || /^\s*[+\-−=×*/]/.test(depois)) return CONTAR;
  const e = nounAfter(depois);
  // um ano sozinho é neutro: árið tvö þúsund og tvö, árið átta hundruð sjötíu og fjögur
  if (!temSubstantivo(depois) && ((n >= 1000 && n <= 2099) || /^(árið|ári|ársins)$/.test(lastWord(antes)))) return NEUTRO;
  const cases = e?.cases ?? null;
  const plural = n % 10 !== 1 || n % 100 === 11;
  const c = caseFromPrep(prepBefore(antes), cases, plural) ?? (cases ? (['nom', 'acc', 'dat', 'gen'] as Case[]).find((x) => cases.has(x)) : null) ?? 'nom';
  return { g: e?.g ?? 'm', c };
}

const MONTHS = ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember'];

function ordinalIs(n: number, antes: string, depois: string): string {
  const [w] = proximasPalavras(depois);
  const prep = prepBefore(antes);
  if (w && MONTHS.includes(w)) {
    // a data é nominativa no começo e depois de «er», «var»…; como adjunto, acusativo (stofnað 17. júní)
    const nominativa = /^[\s“"(]*$|[.!?:]\s*$/.test(antes) || /^(er|var|eru|voru|verður|verða|væri|sé)$/.test(prep);
    const c: Case = nominativa ? 'nom' : GEN_PREP.has(prep) ? 'gen' : DAT_PREP.has(prep) ? 'dat' : 'acc';
    return icelandicOrdinal(n, { g: 'm', c });
  }
  const e = nounAfter(depois);
  if (!e) return icelandicOrdinal(n, { g: 'm', c: caseFromPrep(prep, null) ?? 'nom' });
  const cases = e.cases;
  const c = caseFromPrep(prep, cases, e.pl) ?? (['nom', 'acc', 'dat', 'gen'] as Case[]).find((x) => cases.has(x)) ?? 'nom';
  return icelandicOrdinal(n, { g: e.g ?? 'm', c }, e.pl);
}

/** [nom, acc, dat, gen] do singular e do plural, e o gênero. */
const UNIT_FORMS: Record<Unidade, [string[], string[], Gender]> = {
  kr: [['króna', 'krónu', 'krónu', 'krónu'], ['krónur', 'krónur', 'krónum', 'króna'], 'f'],
  '€': [['evra', 'evru', 'evru', 'evru'], ['evrur', 'evrur', 'evrum', 'evra'], 'f'],
  $: [['dollari', 'dollara', 'dollara', 'dollara'], ['dollarar', 'dollara', 'dollurum', 'dollara'], 'm'],
  '£': [['pund', 'pund', 'pundi', 'punds'], ['pund', 'pund', 'pundum', 'punda'], 'n'],
  '%': [['prósent', 'prósent', 'prósenti', 'prósents'], ['prósent', 'prósent', 'prósentum', 'prósenta'], 'n'],
};
const CASE_INDEX: Record<Case, number> = { nom: 0, acc: 1, dat: 2, gen: 3 };

const REGRAS: RegrasNordicas<Forma> = {
  milhar: '[.  ]',
  ordinalComPonto: true,
  meses: MONTHS,
  relogio: /(\bkl\.|\bklukkan)(\s+(er|var|verður))?\s*$/i,
  emergencia: /(hringdu|hringið|hringja|hringir|hringdi|hringt|neyðarnúmer\p{L}*|neyðarlín\p{L}*)\s+(\p{L}+\s+)?$/iu,
  forma: formaIs,
  horas: NEUTRO,
  contar: CONTAR,
  cardinal: icelandicNumber,
  ano: icelandicYear,
  ordinal: ordinalIs,
  composto: (n, sufixo) => icelandicNumber(n, NEUTRO).replace(/ /g, '') + sufixo,
  hora: (h, min) => {
    const hh = icelandicNumber(h, NEUTRO);
    if (!min) return hh;
    return `${hh} ${min < 10 ? `núll ${icelandicNumber(min, NEUTRO)}` : icelandicNumber(min, NEUTRO)}`;
  },
  virgula: 'komma',
  unidade: (u, n, decimal, antes) => {
    const [sg, pl, g] = UNIT_FORMS[u];
    const singular = !decimal && n % 10 === 1 && n % 100 !== 11;
    const c = caseFromPrep(lastWord(antes), null) ?? 'nom';
    return { palavra: (singular ? sg : pl)[CASE_INDEX[c]], forma: { g, c } };
  },
  temSubstantivo,
};

/**
 * Troca os números de um texto em islandês pelas palavras, concordando em gênero e caso: «Ég á 2
 * bíla» → «Ég á tvo bíla», «í 3 daga» → «í þrjá daga», «á 2 árum» → «á tveimur árum», «til 4
 * ára» → «til fjögurra ára», «17. júní 1944» → «sautjándi júní nítján hundruð fjörutíu og fjögur»,
 * «1.500 kr.» → «þúsund og fimm hundruð krónur», «kl. 14.30» → «kl. fjórtán þrjátíu».
 */
export function spellIcelandicNumbers(text: string): string {
  return spellNordic(text, REGRAS);
}
