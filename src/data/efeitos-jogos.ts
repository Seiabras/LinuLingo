/**
 * Os efeitos dos jogos que dá para escolher à parte do tema do tabuleiro (itens 13, 14 e 15 do
 * PENDENTES.md, pedido do dono: “independente do tema escolhido”). “Do tema” é sempre o padrão: o
 * efeito que o tema já trazia. Os desenhos são os mesmos de `components/jogos/efeitos.tsx`.
 */
export type Celebracao = 'confete' | 'petalas' | 'moedas' | 'fogos' | 'papel' | 'folhas' | 'neve' | 'areia' | 'bolhas' | 'brasas' | 'estrelas';

/** A comemoração de vitória: a do tema ou uma escolhida. */
export type ComemoracaoEscolha = 'tema' | Celebracao;

export const COMEMORACOES: { id: ComemoracaoEscolha; nome: string }[] = [
  { id: 'tema', nome: 'Do tema' },
  { id: 'confete', nome: 'Confete' },
  { id: 'fogos', nome: 'Fogos' },
  { id: 'estrelas', nome: 'Estrelas' },
  { id: 'moedas', nome: 'Moedas' },
  { id: 'petalas', nome: 'Pétalas' },
  { id: 'folhas', nome: 'Folhas' },
  { id: 'papel', nome: 'Papel picado' },
  { id: 'neve', nome: 'Neve' },
  { id: 'bolhas', nome: 'Bolhas' },
  { id: 'brasas', nome: 'Brasas' },
  { id: 'areia', nome: 'Areia' },
];

/** O clima em volta do tabuleiro (item 14): o do tema ou um escolhido (mesmos tipos de `ClimaTema`). */
export type ClimaEscolha = 'tema' | 'petalas' | 'chuva' | 'neve' | 'areia' | 'vagalumes' | 'aurora' | 'papel';

export const CLIMAS: { id: ClimaEscolha; nome: string }[] = [
  { id: 'tema', nome: 'Do tema' },
  { id: 'neve', nome: 'Neve' },
  { id: 'chuva', nome: 'Chuva e névoa' },
  { id: 'petalas', nome: 'Pétalas' },
  { id: 'vagalumes', nome: 'Vaga-lumes' },
  { id: 'aurora', nome: 'Aurora' },
  { id: 'areia', nome: 'Areia' },
  { id: 'papel', nome: 'Papel picado' },
];

/** O som de mover as peças (item 15): o do tema ou um escolhido (os mesmos arquivos de `sons-jogos.ts`). */
export type SomEscolha = 'tema' | 'madeira' | 'madeira-grave' | 'pedra' | 'areia' | 'onda' | 'mata' | 'moeda' | 'sino' | 'gelo' | 'ceramica' | 'tecido' | 'papel' | 'chuva';

export const SONS_PECAS: { id: SomEscolha; nome: string }[] = [
  { id: 'tema', nome: 'Do tema' },
  { id: 'madeira', nome: 'Madeira' },
  { id: 'madeira-grave', nome: 'Madeira grave' },
  { id: 'pedra', nome: 'Pedra' },
  { id: 'ceramica', nome: 'Cerâmica' },
  { id: 'gelo', nome: 'Gelo' },
  { id: 'moeda', nome: 'Moeda' },
  { id: 'sino', nome: 'Sino' },
  { id: 'papel', nome: 'Papel' },
  { id: 'tecido', nome: 'Tecido' },
  { id: 'areia', nome: 'Areia' },
  { id: 'onda', nome: 'Onda do mar' },
  { id: 'chuva', nome: 'Chuva' },
  { id: 'mata', nome: 'Mata' },
];

/** Os níveis de volume dos sons dos jogos, em %. */
export const VOLUMES = [20, 40, 60, 80, 100] as const;

/** A mesa em volta do tabuleiro (item 16): a cor da superfície e a textura (as de `components/jogos/visual.tsx`). */
export type MesaEscolha = 'nenhuma' | 'madeira' | 'feltro' | 'marmore' | 'areia' | 'gelo';

export const MESAS: { id: MesaEscolha; nome: string; cor: string; material: 'madeira' | 'pedra' | 'tecido' | null }[] = [
  { id: 'nenhuma', nome: 'Sem mesa', cor: 'transparent', material: null },
  { id: 'madeira', nome: 'Madeira', cor: '#7A4E2D', material: 'madeira' },
  { id: 'feltro', nome: 'Feltro verde', cor: '#1F6B3A', material: 'tecido' },
  { id: 'marmore', nome: 'Mármore', cor: '#E4E1DC', material: 'pedra' },
  { id: 'areia', nome: 'Areia de praia', cor: '#E3C891', material: 'pedra' },
  { id: 'gelo', nome: 'Gelo antártico', cor: '#CDE6F2', material: 'pedra' },
];
