/**
 * Números por extenso em feroês, para a voz neural do feroês (o MMS-TTS só conhece as letras: um
 * «12» ficaria mudo). Sistema decimal (fimmti, seksti…), o mesmo que a trilha ensina; a dezena vem
 * antes da unidade: 21 = tjúgu og ein. O «og» entra uma vez, antes do último pedaço: hundrað og
 * tjúgu, hundrað tjúgu og fimm, tvey túsund og fimm hundrað.
 *
 * 1, 2 e 3 mudam com o gênero: sozinhos, contando, são ein, tveir, trý; nas horas e nas contas,
 * neutros (klokkan er tvey, tvey og tvey eru fýra); antes de «hundrað» e «túsund» (neutros), eitt,
 * tvey, trý; antes de «milliónir» (feminino), tvær, tríggjar. Antes de um substantivo, concorda com
 * o gênero dele (tveir menn, tvær bøkur, tvey børn), que vem do vocabulário do feroês — a forma do
 * dicionário, o genitivo e o plural anotados —, pulando um adjetivo no meio (tvær stórar bøkur).
 * O caso não muda: depois de preposição que pede dativo (við tveimum) o número fica no nominativo.
 */
import { ROWS } from '@/data/fo/vocabulario';

type Gender = 'm' | 'f' | 'n' | 'contar';
const SMALL: Record<Gender, string[]> = {
  m: ['', 'ein', 'tveir', 'tríggir'],
  f: ['', 'ein', 'tvær', 'tríggjar'],
  n: ['', 'eitt', 'tvey', 'trý'],
  contar: ['', 'ein', 'tveir', 'trý'],
};
const UNITS = ['null', '', '', '', 'fýra', 'fimm', 'seks', 'sjey', 'átta', 'níggju', 'tíggju', 'ellivu', 'tólv', 'trettan', 'fjúrtan', 'fimtan', 'sekstan', 'seytjan', 'átjan', 'nítjan'];
const TENS = ['', '', 'tjúgu', 'tríati', 'fýrati', 'fimmti', 'seksti', 'sjeyti', 'áttati', 'níti'];

const unit = (n: number, g: Gender) => (n >= 1 && n <= 3 ? SMALL[g][n] : UNITS[n]);

function below100(n: number, g: Gender): string {
  if (n < 20) return unit(n, g);
  const t = TENS[Math.floor(n / 10)];
  return n % 10 ? `${t} og ${unit(n % 10, g)}` : t;
}

/** Junta os pedaços com o «og» antes do último — a não ser que o último já tenha o dele. */
function join(parts: string[]): string {
  if (parts.length < 2) return parts[0] ?? '';
  const last = parts[parts.length - 1];
  return last.includes(' og ') ? parts.join(' ') : `${parts.slice(0, -1).join(' ')} og ${last}`;
}

/** Os pedaços de 1 a 999: [«tvey hundrað», «tjúgu og fimm»]. «opens»: é o começo do número (100 = «hundrað», não «eitt hundrað»). */
function parts1000(n: number, g: Gender, opens: boolean): string[] {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const out: string[] = [];
  if (h) out.push(h === 1 && opens ? 'hundrað' : `${below100(h, 'n')} hundrað`);
  if (rest) out.push(below100(rest, g));
  return out;
}

const words = (n: number, g: Gender) => join(parts1000(n, g, true));

export function faroeseNumber(n: number, g: Gender = 'contar'): string {
  if (!Number.isInteger(n) || n < 0 || n >= 1e9) return String(n);
  if (n === 0) return 'null';
  const m = Math.floor(n / 1e6);
  const k = Math.floor((n % 1e6) / 1000);
  const rest = n % 1000;
  const parts: string[] = [];
  // «tjúgu og ein millión»: depois de um «ein» final, o singular
  if (m) parts.push(m === 1 ? 'ein millión' : `${words(m, 'f')} ${m % 10 === 1 && m % 100 !== 11 ? 'millión' : 'milliónir'}`);
  if (k) parts.push(k === 1 && !m ? 'túsund' : `${words(k, 'n')} túsund`);
  parts.push(...parts1000(rest, g, !m && !k));
  return join(parts);
}

/** Formas que o vocabulário não anota, mas que vêm muito depois de um número. */
const EXTRA: Record<string, Gender> = { ára: 'n', krónur: 'f', ferðir: 'f' };

let genders: Map<string, Gender> | null = null;
/** Forma do substantivo (minúscula) → gênero; formas de dois gêneros ficam de fora. */
function genderMap(): Map<string, Gender> {
  if (genders) return genders;
  const seen = new Map<string, Gender | null>();
  const add = (form: string, g: Gender) => {
    const f = form.trim().toLowerCase();
    if (!f || f.includes(' ')) return;
    seen.set(f, seen.has(f) && seen.get(f) !== g ? null : g);
  };
  for (const row of ROWS) {
    const g = row[6];
    if (row[2] !== 'substantivo' || (g !== 'm' && g !== 'f' && g !== 'n')) continue;
    add(row[0], g);
    // «(gen. krónu, pl. krónur)», «(pl. neyt)»
    for (const m of row[1].matchAll(/\b(?:gen|pl)\. ([^,;)]+)/g)) for (const alt of m[1].split('/')) add(alt, g);
  }
  genders = new Map([...seen].filter((e): e is [string, Gender] => e[1] !== null));
  for (const [f, g] of Object.entries(EXTRA)) genders.set(f, g);
  return genders;
}

/** O gênero do substantivo logo depois do número (ou depois de um adjetivo), se o vocabulário souber. */
function nounGender(after: string): Gender | null {
  const words = after.match(/^\s+([\p{L}]+)(?:\s+([\p{L}]+))?/u);
  if (!words) return null;
  const map = genderMap();
  return map.get(words[1].toLowerCase()) ?? (words[2] ? map.get(words[2].toLowerCase()) : undefined) ?? null;
}

/**
 * O gênero do número neste ponto do texto: nas horas e nas contas, neutro («klokkan 2» = klokkan
 * tvey, «2 + 2» = tvey pluss tvey); antes de um substantivo, o dele; sozinho, o de contar.
 */
function genderAt(text: string, at: number, end: number): Gender {
  const before = text.slice(Math.max(0, at - 20), at);
  const after = text.slice(end, end + 40);
  if (/(klokkan|kl\.)(\s+(er|var|verður))?\s*$/i.test(before) || /[+\-−=×*/]\s*$/.test(before) || /^\s*[+\-−=×*/]/.test(after)) return 'n';
  return nounGender(after) ?? 'contar';
}

/** Os meses: depois de «15.» vem a data, com o ordinal. */
const MONTHS = /^\s+(januar|februar|mars|apríl|mai|juni|juli|august|september|oktober|november|desember)\b/i;

/** Ordinais fracos (depois de «tann», nas datas e nos séculos): o radical, sem a terminação. */
const ORD = ['', 'fyrst', 'annar', 'triðj', 'fjórð', 'fimt', 'sætt', 'sjeynd', 'áttand', 'níggjund', 'tíggjund', 'ellivt', 'tólvt', 'trettand', 'fjúrtand', 'fimtand', 'sekstand', 'seytjand', 'átjand', 'nítjand', 'tjúgund'];

/**
 * O ordinal fraco: masculino -i no nominativo (fyrsti), -a nos outros casos e no feminino e neutro
 * (fyrsta); feminino -u fora do nominativo (í átjandu øld). «annar» é forte e irregular: nas datas,
 * «annan». De 21 a 31 (as datas): a dezena e a unidade no ordinal, ligadas por «og».
 */
function ordinal(n: number, ending: 'i' | 'a' | 'u'): string {
  if (n === 2) return ending === 'i' ? 'annar' : ending === 'u' ? 'aðru' : 'annan';
  if (n === 3) return ending === 'i' ? 'triði' : `triðj${ending}`;
  if (n <= 20) return ORD[n] + ending;
  if (n === 30) return `tríatund${ending}`;
  const tens = n < 30 ? 'tjúgund' : 'tríatund';
  return `${tens}${ending} og ${ordinal(n % 10, ending)}`;
}

/** Os anos de 1100 a 1999 se leem em centenas: 1846 = átjan hundrað fýrati og seks. */
function year(n: number): string {
  const rest = n % 100;
  const head = `${below100(Math.floor(n / 100), 'n')} hundrað`;
  return rest ? join([head, below100(rest, 'contar')]) : head;
}

/**
 * Troca os números de um texto pelas palavras: «12 seyðir» → «tólv seyðir», «3,5» → «trý komma
 * fimm», «1.500» → «túsund og fimm hundrað», «tann 29. juli» → «tann tjúgunda og níggjunda juli»,
 * «í 16. øld» → «í sekstandu øld», «í 1846» → «í átjan hundrað fýrati og seks». Números colados a
 * letras (V2, 3ª) e grandes demais ficam como estão.
 */
export function spellFaroeseNumbers(text: string): string {
  return text.replace(/(?<![\p{L}\d.,])(?:\d{1,3}(?:\.\d{3})+(?![\d,])|\d+(?:,\d+)?)(\.(?=\s+\p{Ll}))?(?![\p{L}ªº°\d])/gu, (m, dot: string | undefined, at: number) => {
    const num = dot ? m.slice(0, -1) : m;
    const after = text.slice(at + m.length, at + m.length + 40);
    // «15. juli», «16. øld»: ordinal
    if (dot && /^\d{1,2}$/.test(num) && Number(num) >= 1 && Number(num) <= 31) {
      const n = Number(num);
      // «tann 28. og 29. juli»: o primeiro também é data
      if (MONTHS.test(after) || MONTHS.test(after.replace(/^\s+og\s+\d{1,2}\./, ''))) return ordinal(n, 'a');
      if (/^\s+øld\b/i.test(after)) return ordinal(n, 'u');
    }
    const g = genderAt(text, at, at + num.length);
    let out: string;
    if (num.includes(',')) {
      // com decimais, o número não concorda com o substantivo: trý komma fimm kilometrar
      const [int, dec] = num.split(',');
      out = `${faroeseNumber(Number(int), g === 'n' ? 'n' : 'contar')} komma ${[...dec].map((d) => faroeseNumber(Number(d))).join(' ')}`;
    } else {
      const n = Number(num.replace(/\./g, ''));
      out = /^1[1-9]\d\d$/.test(num) ? year(n) : faroeseNumber(n, g);
    }
    return dot ? `${out}.` : out;
  });
}
