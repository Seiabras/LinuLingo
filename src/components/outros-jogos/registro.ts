/**
 * O componente jogável de cada jogo das outras áreas (id do jogo → componente, sem props
 * obrigatórias). A página `/jogos/[area]/[id]` mostra o componente daqui; o teste
 * `data/outros-jogos/outros-jogos.test.ts` confere que todo jogo `playable` tem o seu.
 */
import type { ComponentType } from 'react';
import AmarelinhaJogo from './AmarelinhaJogo';
import BreakoutJogo from './BreakoutJogo';
import EncantadosJogo from './EncantadosJogo';
import EsgrimaJogo from './EsgrimaJogo';
import HanafudaJogo from './HanafudaJogo';
import PongJogo from './PongJogo';
import RoletaJogo from './RoletaJogo';
import SpaceInvadersJogo from './SpaceInvadersJogo';

export const JOGOS_JOGAVEIS: Record<string, ComponentType> = {
  hanafuda: HanafudaJogo,
  encantados: EncantadosJogo,
  roleta: RoletaJogo,
  amarelinha: AmarelinhaJogo,
  esgrima: EsgrimaJogo,
  pong: PongJogo,
  breakout: BreakoutJogo,
  'space-invaders': SpaceInvadersJogo,
};
