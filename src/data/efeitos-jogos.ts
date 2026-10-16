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
