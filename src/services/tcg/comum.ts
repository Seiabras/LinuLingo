/**
 * O que os três jogos de cartas colecionáveis do LinuLingo têm em comum (pedido do dono, 16/10/2026):
 * os bichos (o mesmo elenco nos três, cada jogo com os seus números), os biomas, a sorte injetável e
 * o baralho, a mão e o descarte. Cada jogo homenageia as regras principais de um dos grandes jogos de
 * cartas colecionáveis, sem nenhum nome, termo, texto ou desenho deles.
 */

export type Rng = () => number;
export type Bioma = 'gelo' | 'mata' | 'montanha' | 'savana';

export const BIOMAS: Record<Bioma, { nome: string; cor: string; corEscura: string }> = {
  gelo: { nome: 'Gelo', cor: '#7DD3FC', corEscura: '#0C4A6E' },
  mata: { nome: 'Mata', cor: '#4ADE80', corEscura: '#14532D' },
  montanha: { nome: 'Montanha', cor: '#C4B5FD', corEscura: '#3B0764' },
  savana: { nome: 'Savana', cor: '#FCD34D', corEscura: '#78350F' },
};

/** Os 4 temas dos baralhos prontos, iguais nos quatro jogos (cada jogo com as suas cartas do tema). */
export const TEMAS_TCG: Record<Bioma, { nome: string; sobre: string }> = {
  gelo: { nome: 'Gelo do Sul', sobre: 'Os Amigos do Linu: bichos grandes que seguram o ataque e ganham no fim.' },
  mata: { nome: 'Mata Viva', sobre: 'Bichos do Brasil: muitos, baratos e rápidos, para atacar cedo.' },
  montanha: { nome: 'Céu e Montanha', sobre: 'Andes e Himalaia: voadores e truques que mudam a partida.' },
  savana: { nome: 'Savana', sobre: 'África: a manada de bichos grandes de chão, mais forte quanto maior.' },
};

/** O jeito do desenho de um bicho que não é Amigo do Linu (ver `ArteBicho`). */
export type Forma = 'ave' | 'felino' | 'roedor' | 'inseto' | 'anfibio' | 'cobra' | 'quadrupede' | 'larva' | 'elefante' | 'girafa';

export interface BichoInfo {
  id: string;
  nome: string;
  bioma: Bioma;
  /** o Amigo do Linu desenhado em `LinuAmigo` (com o nome dele no app) */
  amigo?: string;
  forma?: Forma;
  /** cor principal e de detalhe do desenho */
  cores?: [string, string];
  /** pintas, listras ou nada */
  marca?: 'pintas' | 'listras';
}

/**
 * O elenco. Os Amigos do Linu usam o nome e o desenho que já têm no app (`data/amigos-linu.ts`); os
 * outros são bichos de verdade do Brasil, dos Andes e do Himalaia.
 */
export const BICHOS: Record<string, BichoInfo> = Object.fromEntries(
  (
    [
      // Gelo do Sul (os Amigos do Linu)
      { id: 'kiko', nome: 'Kiko, o krill', bioma: 'gelo', amigo: 'krill' },
      { id: 'dede', nome: 'Dedé, pinguim-de-adélia', bioma: 'gelo', amigo: 'adelia' },
      { id: 'pipo', nome: 'Pipo, pinguim-gentoo', bioma: 'gelo', amigo: 'gentoo' },
      { id: 'topete', nome: 'Topete, pinguim-macaroni', bioma: 'gelo', amigo: 'macaroni' },
      { id: 'floco', nome: 'Floco, petrel-das-neves', bioma: 'gelo', amigo: 'petrel' },
      { id: 'wendel', nome: 'Wendel, foca-de-weddell', bioma: 'gelo', amigo: 'weddell' },
      { id: 'duque', nome: 'Duque, pinguim-rei', bioma: 'gelo', amigo: 'rei' },
      { id: 'vento', nome: 'Vento, albatroz-errante', bioma: 'gelo', amigo: 'albatroz' },
      { id: 'malhada', nome: 'Malhada, foca-leopardo', bioma: 'gelo', amigo: 'leopardo' },
      { id: 'tobias', nome: 'Tobias, pinguim-imperador', bioma: 'gelo', amigo: 'imperador' },
      { id: 'bolota', nome: 'Bolota, elefante-marinho', bioma: 'gelo', amigo: 'elefante-marinho' },
      { id: 'jubi', nome: 'Jubi, baleia-jubarte', bioma: 'gelo', amigo: 'jubarte' },
      // Mata (Brasil)
      { id: 'formiga', nome: 'Formiga-cortadeira', bioma: 'mata', forma: 'inseto', cores: ['#9A3412', '#431407'] },
      { id: 'mico', nome: 'Mico-leão-dourado', bioma: 'mata', forma: 'roedor', cores: ['#F59E0B', '#B45309'] },
      { id: 'girino', nome: 'Girino', bioma: 'mata', forma: 'larva', cores: ['#57534E', '#292524'] },
      { id: 'sapo', nome: 'Sapo-cururu', bioma: 'mata', forma: 'anfibio', cores: ['#A16207', '#713F12'], marca: 'pintas' },
      { id: 'lagarta', nome: 'Lagarta', bioma: 'mata', forma: 'larva', cores: ['#84CC16', '#3F6212'] },
      { id: 'borboleta', nome: 'Borboleta-azul', bioma: 'mata', forma: 'inseto', cores: ['#2563EB', '#1E3A8A'] },
      { id: 'arara', nome: 'Arara-azul', bioma: 'mata', forma: 'ave', cores: ['#1D4ED8', '#FACC15'] },
      { id: 'capivara', nome: 'Capivara', bioma: 'mata', forma: 'roedor', cores: ['#92400E', '#451A03'] },
      { id: 'tamandua', nome: 'Tamanduá-bandeira', bioma: 'mata', forma: 'quadrupede', cores: ['#57534E', '#1C1917'], marca: 'listras' },
      { id: 'onca', nome: 'Onça-pintada', bioma: 'mata', forma: 'felino', cores: ['#F59E0B', '#1C1917'], marca: 'pintas' },
      { id: 'sucuri', nome: 'Sucuri', bioma: 'mata', forma: 'cobra', cores: ['#4D7C0F', '#1A2E05'], marca: 'pintas' },
      // Montanha (Andes e Himalaia)
      { id: 'colibri', nome: 'Colibri', bioma: 'montanha', forma: 'ave', cores: ['#10B981', '#BE123C'] },
      { id: 'filhote-condor', nome: 'Filhote de condor', bioma: 'montanha', forma: 'ave', cores: ['#A8A29E', '#57534E'] },
      { id: 'condor', nome: 'Condor-dos-andes', bioma: 'montanha', forma: 'ave', cores: ['#1C1917', '#F5F5F4'] },
      { id: 'lhama', nome: 'Lhama', bioma: 'montanha', forma: 'quadrupede', cores: ['#F5F5F4', '#A8A29E'] },
      { id: 'vicunha', nome: 'Vicunha', bioma: 'montanha', forma: 'quadrupede', cores: ['#D97706', '#FEF3C7'] },
      { id: 'panda', nome: 'Panda-vermelho', bioma: 'montanha', forma: 'roedor', cores: ['#C2410C', '#1C1917'], marca: 'listras' },
      { id: 'iaque', nome: 'Iaque', bioma: 'montanha', forma: 'quadrupede', cores: ['#44403C', '#E7E5E4'] },
      { id: 'leopardo-neves', nome: 'Leopardo-das-neves', bioma: 'montanha', forma: 'felino', cores: ['#E7E5E4', '#44403C'], marca: 'pintas' },
      { id: 'aguia', nome: 'Águia-real', bioma: 'montanha', forma: 'ave', cores: ['#78350F', '#FDE68A'] },
      { id: 'chinchila', nome: 'Chinchila', bioma: 'montanha', forma: 'roedor', cores: ['#D6D3D1', '#57534E'] },
      { id: 'urso-oculos', nome: 'Urso-de-óculos', bioma: 'montanha', forma: 'quadrupede', cores: ['#292524', '#FDE68A'] },
      // Savana (África)
      { id: 'suricato', nome: 'Suricato', bioma: 'savana', forma: 'roedor', cores: ['#D6B98C', '#57534E'] },
      { id: 'filhote-leao', nome: 'Filhote de leão', bioma: 'savana', forma: 'felino', cores: ['#E7B76A', '#92400E'], marca: 'pintas' },
      { id: 'leao', nome: 'Leão', bioma: 'savana', forma: 'felino', cores: ['#D97706', '#78350F'] },
      { id: 'zebra', nome: 'Zebra', bioma: 'savana', forma: 'quadrupede', cores: ['#F5F5F4', '#1C1917'], marca: 'listras' },
      { id: 'gnu', nome: 'Gnu', bioma: 'savana', forma: 'quadrupede', cores: ['#57534E', '#1C1917'] },
      { id: 'hiena', nome: 'Hiena-malhada', bioma: 'savana', forma: 'quadrupede', cores: ['#A8A29E', '#44403C'], marca: 'pintas' },
      { id: 'avestruz', nome: 'Avestruz', bioma: 'savana', forma: 'ave', cores: ['#1C1917', '#F5F5F4'] },
      { id: 'girafa', nome: 'Girafa', bioma: 'savana', forma: 'girafa', cores: ['#F59E0B', '#78350F'], marca: 'pintas' },
      { id: 'rinoceronte', nome: 'Rinoceronte-branco', bioma: 'savana', forma: 'quadrupede', cores: ['#A8A29E', '#57534E'] },
      { id: 'elefante', nome: 'Elefante-africano', bioma: 'savana', forma: 'elefante', cores: ['#9CA3AF', '#4B5563'] },
      { id: 'filhote-elefante', nome: 'Filhote de elefante', bioma: 'savana', forma: 'elefante', cores: ['#D1D5DB', '#6B7280'] },
    ] as BichoInfo[]
  ).map((b) => [b.id, b]),
);

export const bichoDe = (id: string): BichoInfo => {
  const b = BICHOS[id];
  if (!b) throw new Error(`bicho desconhecido: ${id}`);
  return b;
};

export function embaralhar<T>(xs: readonly T[], rng: Rng): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** gerador fixo (mulberry32), para os testes e para a partida do Linu ser reproduzível */
export function semente(s: number): Rng {
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** a lista de ids de um baralho pronto ({ id: cópias }) */
export const expandir = (lista: Record<string, number>): string[] => Object.entries(lista).flatMap(([id, n]) => Array.from({ length: n }, () => id));
