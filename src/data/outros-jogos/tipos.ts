/**
 * As outras áreas de jogos, ao lado dos Jogos do conhecimento (pedido do dono, 14/10/2026: “são
 * abas separadas no perfil, dentro de jogos, mas ao lado de jogos do conhecimento”): cartas, azar,
 * brincadeiras e esportes. Cada área estreia com um exemplo jogável: Hanafuda (Koi-Koi), roleta,
 * amarelinha e esgrima. Mesma régua dos jogos do conhecimento: história e regras reais e citáveis,
 * com as fontes num comentário acima de cada jogo — nunca inventadas.
 */
import type { GameRule, GameVariant, GameStatus, RegiaoJogo, EpocaJogo } from '@/data/jogos-conhecimento';

export type AreaJogo = 'cartas' | 'azar' | 'brincadeiras' | 'esportes';

export const AREAS_JOGO: { id: AreaJogo; nome: string; emoji: string; descricao: string }[] = [
  { id: 'cartas', nome: 'Cartas', emoji: '🎴', descricao: 'Baralhos do mundo todo e os jogos feitos com eles.' },
  { id: 'azar', nome: 'Azar', emoji: '🎡', descricao: 'Jogos de sorte, para entender as chances. Só com fichas de mentira.' },
  { id: 'brincadeiras', nome: 'Brincadeiras', emoji: '🪀', descricao: 'Brincadeiras de rua e de infância de cada país.' },
  { id: 'esportes', nome: 'Esportes', emoji: '🤺', descricao: 'Esportes, sua história e suas regras, para jogar de um jeito simples.' },
];

export interface OutroJogo {
  id: string;
  area: AreaJogo;
  name: string;
  emoji: string;
  status: GameStatus;
  year?: string;
  where?: string;
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
}
