/**
 * Números por extenso em feroês, para a voz neural do feroês (o MMS-TTS só conhece as letras: um
 * «12» ficaria mudo). Sistema decimal (fimmti, seksti…), o mesmo que a trilha ensina; a dezena vem
 * antes da unidade: 21 = tjúgu og ein. O «og» entra uma vez, antes do último pedaço: hundrað og
 * tjúgu, hundrað tjúgu og fimm, tvey túsund og fimm hundrað.
 *
 * 1, 2 e 3 mudam com o gênero: sozinhos, contando, são ein, tveir, trý; nas horas e nas contas,
 * neutros (klokkan er tvey, tvey og tvey eru fýra); antes de «hundrað» e «túsund» (neutros), eitt,
 * tvey, trý; antes de «milliónir» (feminino), tvær, tríggjar. Não concorda com o substantivo que
 * vem depois no texto (para isso seria preciso saber o gênero de cada palavra).
 */
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

/** Nas horas e nas contas o número vai no neutro: «klokkan 2» = klokkan tvey, «2 + 2» = tvey pluss tvey. */
function genderAt(text: string, at: number, end: number): Gender {
  const before = text.slice(Math.max(0, at - 20), at);
  const after = text.slice(end, end + 3);
  return /(klokkan|kl\.)(\s+(er|var|verður))?\s*$/i.test(before) || /[+\-−=×*/]\s*$/.test(before) || /^\s*[+\-−=×*/]/.test(after) ? 'n' : 'contar';
}

/**
 * Troca os números de um texto pelas palavras: «12 seyðir» → «tólv seyðir», «3,5» → «trý komma
 * fimm», «1.500» → «túsund og fimm hundrað». Números grandes demais ficam como estão.
 */
export function spellFaroeseNumbers(text: string): string {
  return text.replace(/\d{1,3}(?:\.\d{3})+(?!\d)|\d+(?:,\d+)?/g, (m, at: number) => {
    const g = genderAt(text, at, at + m.length);
    if (m.includes(',')) {
      const [int, dec] = m.split(',');
      return `${faroeseNumber(Number(int), g)} komma ${[...dec].map((d) => faroeseNumber(Number(d))).join(' ')}`;
    }
    return faroeseNumber(Number(m.replace(/\./g, '')), g);
  });
}
