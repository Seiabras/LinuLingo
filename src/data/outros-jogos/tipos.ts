/**
 * As outras áreas de jogos, ao lado dos Jogos do conhecimento (pedido do dono, 14/10/2026: “são
 * abas separadas no perfil, dentro de jogos, mas ao lado de jogos do conhecimento”): cartas, azar,
 * brincadeiras, esportes, videogames e RPG (pedidos do dono de 14 e 15/10/2026), todas dentro de
 * “Lazer”. Cada área estreia com um exemplo jogável: Hanafuda (Koi-Koi), roleta,
 * amarelinha e esgrima. Mesma régua dos jogos do conhecimento: história e regras reais e citáveis,
 * com as fontes num comentário acima de cada jogo — nunca inventadas.
 */
import type { GameRule, GameVariant, GameStatus, RegiaoJogo, EpocaJogo } from '@/data/jogos-conhecimento';

export type AreaJogo = 'cartas' | 'azar' | 'brincadeiras' | 'esportes' | 'videogames' | 'rpg';

export const AREAS_JOGO: { id: AreaJogo; nome: string; emoji: string; descricao: string }[] = [
  { id: 'cartas', nome: 'Cartas', emoji: '🎴', descricao: 'Baralhos do mundo todo e os jogos feitos com eles.' },
  { id: 'azar', nome: 'Azar', emoji: '🎡', descricao: 'Jogos de sorte, para entender as chances. Só com fichas de mentira.' },
  { id: 'brincadeiras', nome: 'Brincadeiras', emoji: '🪀', descricao: 'Brincadeiras de rua e de infância de cada país.' },
  { id: 'esportes', nome: 'Esportes', emoji: '🤺', descricao: 'Esportes, sua história e suas regras, para jogar de um jeito simples.' },
  { id: 'videogames', nome: 'Videogames', emoji: '🕹️', descricao: 'Os videogames que fizeram história, para jogar de um jeito simples.' },
  { id: 'rpg', nome: 'RPG', emoji: '🐉', descricao: 'Jogos de interpretar personagens, de mesa e de livro: em breve.' },
];

/**
 * Os subgrupos da área Cartas (pedido do dono, 15/10/2026). Em 16/10/2026 o dono separou os jogos em
 * três: os de baralho (baralhos próprios, como o hanafuda), os do baralho francês (52 cartas) e os
 * TCG (trading card games, jogos de cartas colecionáveis).
 */
export type GrupoCartas = 'baralho' | 'frances' | 'tcg' | 'cartomagia' | 'cardistry' | 'colecionismo' | 'cartomancia';

export const GRUPOS_CARTAS: { id: GrupoCartas; nome: string; emBreve?: string }[] = [
  { id: 'baralho', nome: 'Jogos de baralho' },
  { id: 'frances', nome: 'Baralho francês', emBreve: 'Os jogos do baralho de 52 cartas, de copas, ouros, espadas e paus.' },
  { id: 'tcg', nome: 'TCG' },
  { id: 'cartomagia', nome: 'Cartomagia', emBreve: 'Mágica com cartas: os truques clássicos, como funcionam e quem os inventou.' },
  { id: 'cardistry', nome: 'Cardistry', emBreve: 'A arte de manipular as cartas pelo visual: cortes, leques e giros, sem truque nenhum.' },
  { id: 'colecionismo', nome: 'Colecionismo', emBreve: 'O design dos baralhos e a coleção deles: naipes, figuras e baralhos de cada país.' },
  { id: 'cartomancia', nome: 'Cartomancia', emBreve: 'O tarô: a história das cartas e o que querem dizer os seus símbolos.' },
];

export interface OutroJogo {
  id: string;
  area: AreaJogo;
  name: string;
  emoji: string;
  status: GameStatus;
  year?: string;
  where?: string;
  /** de onde vem o nome (mesmo campo dos jogos de tabuleiro, ver `KnowledgeGame.etimologia`) */
  etimologia?: string;
  povo?: string;
  regiao?: RegiaoJogo;
  epoca?: EpocaJogo;
  about?: string;
  rules?: GameRule[];
  variants?: GameVariant[];
  /** tem versão jogável no app (componente registrado em `components/outros-jogos/registro.ts`) */
  playable?: boolean;
  /** dá para jogar contra o Linu */
  linu?: boolean;
  /** só na área 'cartas': em qual subgrupo o jogo aparece */
  grupo?: GrupoCartas;
  /** de onde vêm a história e as regras (aparecem na página do jogo, com link) */
  fontes?: { titulo: string; url: string }[];
}
