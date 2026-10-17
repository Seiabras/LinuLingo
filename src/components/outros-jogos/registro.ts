/**
 * O componente jogável de cada jogo das outras áreas (id do jogo → componente, sem props
 * obrigatórias). A página `/jogos/[area]/[id]` mostra o componente daqui; o teste
 * `data/outros-jogos/outros-jogos.test.ts` confere que todo jogo `playable` tem o seu.
 */
import type { ComponentType } from 'react';
import AmarelinhaJogo from './AmarelinhaJogo';
import BichosOcultosJogo from './BichosOcultosJogo';
import BreakoutJogo from './BreakoutJogo';
import BuracoJogo from './BuracoJogo';
import CopasJogo from './CopasJogo';
import DueloBichosJogo from './DueloBichosJogo';
import DueloBiomasJogo from './DueloBiomasJogo';
import EncantadosJogo from './EncantadosJogo';
import EscopaJogo from './EscopaJogo';
import EsgrimaJogo from './EsgrimaJogo';
import HanafudaJogo from './HanafudaJogo';
import KarutaJogo from './KarutaJogo';
import PacienciaJogo from './PacienciaJogo';
import PongJogo from './PongJogo';
import RoletaJogo from './RoletaJogo';
import SpaceInvadersJogo from './SpaceInvadersJogo';
import SuecaJogo from './SuecaJogo';
import TrilhaEvolucaoJogo from './TrilhaEvolucaoJogo';
import TrucoJogo from './TrucoJogo';

export const JOGOS_JOGAVEIS: Record<string, ComponentType> = {
  hanafuda: HanafudaJogo,
  paciencia: PacienciaJogo,
  truco: TrucoJogo,
  buraco: BuracoJogo,
  copas: CopasJogo,
  sueca: SuecaJogo,
  escopa: EscopaJogo,
  karuta: KarutaJogo,
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
