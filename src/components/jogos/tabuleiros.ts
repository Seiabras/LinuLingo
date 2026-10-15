import type { ComponentType } from 'react';
import { ChaturangaBoard } from '@/components/ChaturangaBoard';
import { AmazonasBoard } from '@/components/AmazonasBoard';
import { DaraBoard } from '@/components/DaraBoard';
import { LascaBoard } from '@/components/LascaBoard';
import { JanggiBoard } from '@/components/JanggiBoard';
import { MakrukBoard } from '@/components/MakrukBoard';
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
import { AlquerqueBoard } from '@/components/AlquerqueBoard';
import { NimBoard } from '@/components/NimBoard';
import { QuixoBoard } from '@/components/QuixoBoard';
import { PylosBoard } from '@/components/PylosBoard';
import { SquadroBoard } from '@/components/SquadroBoard';
import { QawaleBoard } from '@/components/QawaleBoard';
import { QometBoard } from '@/components/QometBoard';
import { HexBoard } from '@/components/HexBoard';
import { PontinhosBoard } from '@/components/PontinhosBoard';
import { OncaBoard } from '@/components/OncaBoard';
import { BaghChalBoard } from '@/components/BaghChalBoard';
import { DominoBoard } from '@/components/DominoBoard';
import { MuTorereBoard } from '@/components/MuTorereBoard';
import { KonaneBoard } from '@/components/KonaneBoard';
import { PallanguzhiBoard } from '@/components/PallanguzhiBoard';
import { ToguzKorgoolBoard } from '@/components/ToguzKorgoolBoard';
import { SungkaBoard } from '@/components/SungkaBoard';
import { BaoBoard } from '@/components/BaoBoard';
import { UrBoard } from '@/components/UrBoard';
import { SenetBoard } from '@/components/SenetBoard';
import { PachisiBoard } from '@/components/PachisiBoard';
import { YutBoard } from '@/components/YutBoard';

import { HalmaBoard } from '@/components/HalmaBoard';
import { RaposaGansosBoard } from '@/components/RaposaGansosBoard';
import { SurakartaBoard } from '@/components/SurakartaBoard';
import { LinhasDeAcaoBoard } from '@/components/LinhasDeAcaoBoard';
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
  janggi: JanggiBoard,
  makruk: MakrukBoard,
  gamao: GamaoBoard,
  domino: DominoBoard,
  quarto: QuartoBoard,
  quantik: QuantikBoard,
  alquerque: AlquerqueBoard,
  nim: NimBoard,
  quixo: QuixoBoard,
  pylos: PylosBoard,
  squadro: SquadroBoard,
  qawale: QawaleBoard,
  qomet: QometBoard,
  hex: HexBoard,
  pontinhos: PontinhosBoard,
  onca: OncaBoard,
  'bagh-chal': BaghChalBoard,
  'mu-torere': MuTorereBoard,
  konane: KonaneBoard,
  pallanguzhi: PallanguzhiBoard,
  'toguz-korgool': ToguzKorgoolBoard,
  sungka: SungkaBoard,
  bao: BaoBoard,
  chaturanga: ChaturangaBoard,
  amazonas: AmazonasBoard,
  dara: DaraBoard,
  lasca: LascaBoard,
  ur: UrBoard,
  senet: SenetBoard,
  pachisi: PachisiBoard,
  'yut-nori': YutBoard,
  halma: HalmaBoard,
  'raposa-gansos': RaposaGansosBoard,
  surakarta: SurakartaBoard,
  'linhas-de-acao': LinhasDeAcaoBoard,
};
