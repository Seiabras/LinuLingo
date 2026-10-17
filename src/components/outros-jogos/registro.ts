/**
 * O componente jogável de cada jogo das outras áreas (id do jogo → componente, sem props
 * obrigatórias). A página `/jogos/[area]/[id]` mostra o componente daqui; o teste
 * `data/outros-jogos/outros-jogos.test.ts` confere que todo jogo `playable` tem o seu.
 */
import type { ComponentType } from 'react';
import AmarelinhaJogo from './AmarelinhaJogo';
import BichosOcultosJogo from './BichosOcultosJogo';
import BreakoutJogo from './BreakoutJogo';
import DueloBichosJogo from './DueloBichosJogo';
import DueloBiomasJogo from './DueloBiomasJogo';
import EncantadosJogo from './EncantadosJogo';
import EsgrimaJogo from './EsgrimaJogo';
import HanafudaJogo from './HanafudaJogo';
import PacienciaJogo from './PacienciaJogo';
import PongJogo from './PongJogo';
import RoletaJogo from './RoletaJogo';
import SpaceInvadersJogo from './SpaceInvadersJogo';
import TrilhaEvolucaoJogo from './TrilhaEvolucaoJogo';

export const JOGOS_JOGAVEIS: Record<string, ComponentType> = {
  hanafuda: HanafudaJogo,
  paciencia: PacienciaJogo,
  encantados: EncantadosJogo,
  'duelo-dos-biomas': DueloBiomasJogo,
  'duelo-de-bichos': DueloBichosJogo,
  roleta: RoletaJogo,
  amarelinha: AmarelinhaJogo,
  esgrima: EsgrimaJogo,
  pong: PongJogo,
  breakout: BreakoutJogo,
  'space-invaders': SpaceInvadersJogo,
  'trilha-da-evolucao': TrilhaEvolucaoJogo,
  'bichos-ocultos': BichosOcultosJogo,
};
