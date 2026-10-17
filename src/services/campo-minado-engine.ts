/**
 * O Campo Minado (ver a história e as fontes em `data/outros-jogos/videogames.ts`). Só as contas, sem
 * React: cada ação devolve um estado novo (ou o mesmo objeto, quando não muda nada).
 *
 * As minas só são sorteadas no primeiro toque, longe dele: a primeira casa aberta (e as vizinhas)
 * nunca tem mina, e o jogo sempre começa abrindo um pedaço do campo.
 */

export type NivelCampo = 'iniciante' | 'intermediario' | 'especialista';
export const NIVEIS_CAMPO: Record<NivelCampo, { linhas: number; colunas: number; minas: number; nome: string }> = {
  iniciante: { linhas: 9, colunas: 9, minas: 10, nome: 'Iniciante' },
  intermediario: { linhas: 16, colunas: 16, minas: 40, nome: 'Intermediário' },
  especialista: { linhas: 16, colunas: 30, minas: 99, nome: 'Especialista' },
};

export type Fase = 'novo' | 'jogando' | 'ganhou' | 'perdeu';

export interface EstadoCampo {
  linhas: number;
  colunas: number;
  minas: number;
  /** onde há mina (vazio até o primeiro toque) */
  mina: boolean[];
  /** quantas minas há em volta de cada casa */
  vizinhas: number[];
  aberta: boolean[];
  bandeira: boolean[];
  fase: Fase;
  /** a casa da mina que explodiu */
  explodiu: number | null;
}

export function novoCampo(nivel: NivelCampo): EstadoCampo {
  const { linhas, colunas, minas } = NIVEIS_CAMPO[nivel];
  const n = linhas * colunas;
  return { linhas, colunas, minas, mina: Array(n).fill(false), vizinhas: Array(n).fill(0), aberta: Array(n).fill(false), bandeira: Array(n).fill(false), fase: 'novo', explodiu: null };
}

/** As casas em volta de `i` (até 8). */
export function vizinhosDe(s: Pick<EstadoCampo, 'linhas' | 'colunas'>, i: number): number[] {
  const r = Math.floor(i / s.colunas);
  const c = i % s.colunas;
  const out: number[] = [];
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue;
      const rr = r + dr;
      const cc = c + dc;
      if (rr >= 0 && rr < s.linhas && cc >= 0 && cc < s.colunas) out.push(rr * s.colunas + cc);
    }
  return out;
}

/** Sorteia as minas fora da casa `seguro` e das vizinhas dela (ou só fora dela, se não couber). */
function plantar(s: EstadoCampo, seguro: number, rng: () => number): EstadoCampo {
  const n = s.linhas * s.colunas;
  const longe = new Set([seguro, ...vizinhosDe(s, seguro)]);
  let livres = [...Array(n).keys()].filter((i) => !longe.has(i));
  if (livres.length < s.minas) livres = [...Array(n).keys()].filter((i) => i !== seguro);
  for (let i = livres.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [livres[i], livres[j]] = [livres[j]!, livres[i]!];
  }
  const mina = Array(n).fill(false);
  for (const i of livres.slice(0, s.minas)) mina[i] = true;
  const vizinhas = mina.map((_, i) => vizinhosDe(s, i).filter((v) => mina[v]).length);
  return { ...s, mina, vizinhas, fase: 'jogando' };
}

/** Abre as casas a partir de `inicio`; casas sem minas em volta abrem as vizinhas em cadeia. */
function abrirDesde(s: EstadoCampo, inicio: number[]): boolean[] {
  const aberta = [...s.aberta];
  const pilha = [...inicio];
  while (pilha.length) {
    const i = pilha.pop()!;
    if (aberta[i] || s.bandeira[i]) continue;
    aberta[i] = true;
    if (!s.mina[i] && s.vizinhas[i] === 0) for (const v of vizinhosDe(s, i)) if (!aberta[v]) pilha.push(v);
  }
  return aberta;
}

function conferir(s: EstadoCampo, aberta: boolean[], tocadas: number[]): EstadoCampo {
  const bomba = tocadas.find((i) => aberta[i] && s.mina[i] && !s.aberta[i]);
  if (bomba !== undefined) return { ...s, aberta: s.mina.map((m, i) => aberta[i] || (m && !s.bandeira[i])), fase: 'perdeu', explodiu: bomba };
  const ganhou = aberta.every((a, i) => a || s.mina[i]);
  // ao ganhar, as minas que faltavam ganham bandeira
  return ganhou ? { ...s, aberta, bandeira: s.mina.map((m, i) => m || s.bandeira[i]), fase: 'ganhou' } : { ...s, aberta };
}

/** Abre a casa `i`. No primeiro toque, sorteia as minas primeiro. */
export function abrir(s: EstadoCampo, i: number, rng: () => number): EstadoCampo {
  if (s.fase === 'ganhou' || s.fase === 'perdeu' || s.aberta[i] || s.bandeira[i]) return s;
  const base = s.fase === 'novo' ? plantar(s, i, rng) : s;
  return conferir(base, abrirDesde(base, [i]), [i]);
}

/** Põe ou tira a bandeira de uma casa fechada. */
export function marcar(s: EstadoCampo, i: number): EstadoCampo {
  if (s.fase !== 'jogando' || s.aberta[i]) return s;
  return { ...s, bandeira: s.bandeira.map((b, k) => (k === i ? !b : b)) };
}

/**
 * Num número já aberto, com tantas bandeiras em volta quanto o número, abre de uma vez as outras
 * vizinhas (se uma bandeira estiver errada, explode).
 */
export function abrirVolta(s: EstadoCampo, i: number): EstadoCampo {
  if (s.fase !== 'jogando' || !s.aberta[i] || s.vizinhas[i] === 0) return s;
  const viz = vizinhosDe(s, i);
  if (viz.filter((v) => s.bandeira[v]).length !== s.vizinhas[i]) return s;
  const fechadas = viz.filter((v) => !s.aberta[v] && !s.bandeira[v]);
  if (!fechadas.length) return s;
  return conferir(s, abrirDesde(s, fechadas), fechadas);
}

export const minasRestantes = (s: EstadoCampo) => s.minas - s.bandeira.filter(Boolean).length;
