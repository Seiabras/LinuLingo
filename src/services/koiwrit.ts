/**
 * Koiwrit, a escrita do Tsevhu (língua artificial de Koa Vhukva, «koallary», e comunidade): cada palavra
 * é uma ondulação («ripple») de anéis concêntricos, um anel por letra; as palavras vão sobre e em volta
 * de um peixe koi, e o lugar delas no koi diz a gramática.
 *
 * Cada letra é um de 10 traços básicos desenhado em 4 tamanhos: ¼, ½, ¾ ou o círculo inteiro
 * (a tabela oficial está no wiki do Tsevhu e nos tutoriais «The Art of Koiwriting»).
 */

export interface KoiLetter {
  /** como se escreve na romanização */
  letter: string;
  ipa: string;
  /** traço básico, de 1 a 10 */
  shape: number;
  /** quantos quartos de círculo: 1 a 4 */
  size: 1 | 2 | 3 | 4;
  kind: 'vogal' | 'consoante';
}

/** A tabela: cada linha é um traço, cada coluna um tamanho (¼, ½, ¾, inteiro). */
const GRID: [string, string][][] = [
  [['i', 'i'], ['u', 'u'], ['o', 'o'], ['oi', 'ɔi']],
  [['ii', 'ɪ'], ['y', 'ə'], ['e', 'ɛ'], ['eu', 'œ']],
  [['ae', 'e'], ['ai', 'aɪ'], ['au', 'aʊ'], ['a', 'ɑ']],
  [['m', 'm'], ['n', 'n'], ['p', 'p'], ['b', 'b']],
  [['t', 't'], ['d', 'd'], ['th', 'θ'], ['ts', 'ts']],
  [['k', 'k'], ['kh', 'kʰ'], ['g', 'ɡ'], ['q', 'q']],
  [['ph', 'ɸ'], ['vh', 'β'], ['f', 'f'], ['v', 'v']],
  [['s', 's'], ['sh', 'ʃ'], ['ch', 'tʃ'], ['z', 'z']],
  [['j', 'ʒ'], ['c', 'ç'], ['x', 'x'], ['h', 'h']],
  [["'", 'ʔ'], ['w', 'w'], ['l', 'l'], ['r', 'ɾ']],
];

export const KOI_ALPHABET: KoiLetter[] = GRID.flatMap((row, r) =>
  row.map(([letter, ipa], c) => ({ letter, ipa, shape: r + 1, size: (c + 1) as 1 | 2 | 3 | 4, kind: r < 3 ? 'vogal' : 'consoante' })),
);

const BY_LETTER = new Map(KOI_ALPHABET.map((l) => [l.letter, l]));

/** Letras da romanização que não têm sinal próprio na tabela: usam o do som mais próximo. */
const ALIASES: Record<string, string> = { tz: 'ts', dj: 'ch', tj: 'ch', rh: 'r', '’': "'" };

/** Divide uma palavra em letras do Koiwrit (os dígrafos primeiro: kh, vh, ae, eu…). */
export function koiLetters(word: string): KoiLetter[] {
  const w = word.toLowerCase().normalize('NFC');
  const out: KoiLetter[] = [];
  for (let i = 0; i < w.length; ) {
    const two = w.slice(i, i + 2);
    const pick = BY_LETTER.get(two) ?? BY_LETTER.get(ALIASES[two] ?? '');
    if (two.length === 2 && pick) {
      out.push(pick);
      i += 2;
      continue;
    }
    const one = BY_LETTER.get(w[i]) ?? BY_LETTER.get(ALIASES[w[i]] ?? '');
    if (one) out.push(one);
    i += 1;
  }
  return out;
}

/** Os tempos pela direção do focinho do koi (graus a partir do norte, no sentido horário). */
export const KOI_TENSES: { id: string; label: string; hint: string; angle: number }[] = [
  { id: 'nao-finito', label: 'não finito', hint: 'sempre verdade, sempre acontecendo', angle: 0 },
  { id: 'futuro-distante', label: 'futuro distante', hint: 'depois que você se for', angle: 45 },
  { id: 'futuro-medio', label: 'futuro médio', hint: 'até o fim da sua vida', angle: 90 },
  { id: 'futuro-proximo', label: 'futuro próximo', hint: 'de amanhã até um mês, mais ou menos', angle: 135 },
  { id: 'presente', label: 'presente', hint: 'agora', angle: 180 },
  { id: 'passado-proximo', label: 'passado próximo', hint: 'de ontem até um mês atrás, mais ou menos', angle: 225 },
  { id: 'passado-medio', label: 'passado médio', hint: 'dentro da sua vida', angle: 270 },
  { id: 'passado-distante', label: 'passado distante', hint: 'antes de você existir', angle: 315 },
];

/** Os modos, pela direção das nadadeiras (o rabo) em relação ao corpo. */
export const KOI_MOODS: { id: string; label: string; hint: string }[] = [
  { id: 'declarativo', label: 'declarativo', hint: 'afirma' },
  { id: 'interrogativo', label: 'interrogativo', hint: 'pergunta' },
  { id: 'imperativo', label: 'imperativo', hint: 'manda ou pede' },
];

/** Uma rodada de treino: sinal → som e som → sinal, com 4 opções do mesmo tipo quando dá. */
export function koiRound(n = 10, rand: () => number = Math.random): { letter: KoiLetter; mode: 'som' | 'sinal'; options: KoiLetter[] }[] {
  const pool = [...KOI_ALPHABET].sort(() => rand() - 0.5).slice(0, n);
  return pool.map((letter, i) => {
    // distratores: mesmo traço (tamanhos diferentes) e mesmo tamanho (traços diferentes) — os que confundem
    const near = KOI_ALPHABET.filter((l) => l !== letter && (l.shape === letter.shape || l.size === letter.size));
    const options = [letter, ...near.sort(() => rand() - 0.5).slice(0, 3)].sort(() => rand() - 0.5);
    return { letter, mode: i % 2 === 0 ? 'som' : 'sinal', options };
  });
}
