/**
 * Pares de cores para os jogos de cores próprias, os que não usam peças brancas e pretas (pedido do
 * dono, 11/10/2026: os jogos sem personalização também ganham escolhas). Cada jogo tem o seu par de
 * sempre como padrão, e o jogador pode trocar por outro. As duas cores de cada par são bem diferentes
 * entre si (o teste `pares-cores.test.ts` confere a distância entre elas).
 */
export interface ParDeCores {
  id: string;
  nome: string;
  cores: [string, string];
}

export const PARES_DE_CORES: ParDeCores[] = [
  { id: 'vermelho-azul', nome: 'Vermelho e azul', cores: ['#E11D48', '#2563EB'] },
  { id: 'vermelho-amarelo', nome: 'Vermelho e amarelo', cores: ['#E11D48', '#FACC15'] },
  { id: 'laranja-petroleo', nome: 'Laranja e petróleo', cores: ['#EA580C', '#0E7490'] },
  { id: 'verde-roxo', nome: 'Verde e roxo', cores: ['#16A34A', '#7C3AED'] },
  { id: 'rosa-ciano', nome: 'Rosa e ciano', cores: ['#DB2777', '#06B6D4'] },
  { id: 'preto-dourado', nome: 'Preto e dourado', cores: ['#1F2937', '#EAB308'] },
];

/** O par de sempre de cada jogo. */
export const PAR_PADRAO: Record<string, string> = {
  conecta4: 'vermelho-amarelo',
  quoridor: 'vermelho-azul',
  abalone: 'vermelho-azul',
  octi: 'laranja-petroleo',
  velha: 'vermelho-azul',
};

/** Os jogos que deixam escolher o par de cores. */
export const JOGOS_COM_PAR = Object.keys(PAR_PADRAO);

export function parDoJogo(jogo: string, escolhidos: Record<string, string>): [string, string] {
  const id = escolhidos[jogo] ?? PAR_PADRAO[jogo] ?? 'vermelho-azul';
  return (PARES_DE_CORES.find((p) => p.id === id) ?? PARES_DE_CORES[0]!).cores;
}

/** A cor da grade do Ligue 4 (a estrutura de plástico em pé). */
export const GRADES_LIGUE4: { id: string; nome: string; cor: string }[] = [
  { id: 'azul', nome: 'Azul', cor: '#1D4ED8' },
  { id: 'vermelha', nome: 'Vermelha', cor: '#B91C1C' },
  { id: 'verde', nome: 'Verde', cor: '#15803D' },
  { id: 'preta', nome: 'Preta', cor: '#1F2937' },
  { id: 'madeira', nome: 'Madeira', cor: '#8B5A2B' },
];
