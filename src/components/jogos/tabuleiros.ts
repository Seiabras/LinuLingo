import type { ComponentType } from 'react';
import { QuoridorBoard } from '@/components/QuoridorBoard';
import { AbaloneBoard } from '@/components/AbaloneBoard';
import { OctiBoard } from '@/components/OctiBoard';
import { ChessBoard } from '@/components/ChessBoard';
import { DamasBoard } from '@/components/DamasBoard';
import { HnefataflBoard } from '@/components/HnefataflBoard';
import { MoinhoBoard } from '@/components/MoinhoBoard';
import { Conecta4Board } from '@/components/Conecta4Board';
import { OwareBoard } from '@/components/OwareBoard';
import { ReversiBoard } from '@/components/ReversiBoard';
import { GoBoard } from '@/components/GoBoard';
import { GomokuBoard } from '@/components/GomokuBoard';
import { VelhaBoard } from '@/components/VelhaBoard';
import { FanoronaBoard } from '@/components/FanoronaBoard';
import { KalahBoard } from '@/components/KalahBoard';
import { XiangqiBoard } from '@/components/XiangqiBoard';
import { DamasChinesasBoard } from '@/components/DamasChinesasBoard';
import { ShogiBoard } from '@/components/ShogiBoard';
import { GamaoBoard } from '@/components/GamaoBoard';
import { QuartoBoard } from '@/components/QuartoBoard';
import { QuantikBoard } from '@/components/QuantikBoard';
import { QuixoBoard } from '@/components/QuixoBoard';
import { PylosBoard } from '@/components/PylosBoard';
import { SquadroBoard } from '@/components/SquadroBoard';
import { QawaleBoard } from '@/components/QawaleBoard';
import { QometBoard } from '@/components/QometBoard';
import { DominoBoard } from '@/components/DominoBoard';

/** O tabuleiro jogável de cada jogo do conhecimento, pelo id do jogo. */
export const TABULEIROS: Record<string, ComponentType> = {
  quoridor: QuoridorBoard,
  abalone: AbaloneBoard,
  octi: OctiBoard,
  xadrez: ChessBoard,
  damas: DamasBoard,
  hnefatafl: HnefataflBoard,
  moinho: MoinhoBoard,
  conecta4: Conecta4Board,
  oware: OwareBoard,
  reversi: ReversiBoard,
  go: GoBoard,
  gomoku: GomokuBoard,
  velha: VelhaBoard,
  fanorona: FanoronaBoard,
  kalah: KalahBoard,
  xiangqi: XiangqiBoard,
  'damas-chinesas': DamasChinesasBoard,
  shogi: ShogiBoard,
  gamao: GamaoBoard,
  domino: DominoBoard,
  quarto: QuartoBoard,
  quantik: QuantikBoard,
  quixo: QuixoBoard,
  pylos: PylosBoard,
  squadro: SquadroBoard,
  qawale: QawaleBoard,
  qomet: QometBoard,
};
