import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  BOARD_SIZE,
  CORNERS,
  THRONE,
  createInitialState,
  legalMovesFrom,
  makeMove,
  type HnefataflState,
  type Pos,
  type Side,
} from '@/services/hnefatafl-engine';

const CELL = 27;
const BOARD_PX = CELL * BOARD_SIZE;

const SQUARE = '#F1F5F9';
const SPECIAL_SQUARE = '#FDE68A'; // trono e cantos: casa restrita (só o rei entra)
const SELECTED_BG = 'rgba(252, 211, 77, 0.65)';
const MOVE_DOT = '#16A34A';
const ATTACKER_FILL = '#1E293B';
const DEFENDER_FILL = '#F8FAFC';
const DEFENDER_RING = '#334155';

const NOME: Record<Side, string> = { a: 'Atacantes', d: 'Defensores' };

const isSpecialSquare = (pos: Pos) => (pos.row === THRONE.row && pos.col === THRONE.col) || CORNERS.some((c) => c.row === pos.row && c.col === pos.col);

/**
 * Tabuleiro jogável de Hnefatafl (regras de Copenhague — ver `hnefatafl-engine.ts`). 2 jogadores no
 * mesmo aparelho: atacantes (peças escuras) tentam cercar o rei; defensores (peças claras + o rei,
 * com coroa) tentam levar o rei a um dos 4 cantos (casas douradas, assim como o trono central —
 * só o rei entra nelas). Toque numa peça sua pra selecionar, toque numa casa marcada pra mover.
 */
export function HnefataflBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<HnefataflState>(createInitialState);
  const [selected, setSelected] = useState<Pos | null>(null);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => (selected ? legalMovesFrom(state, selected) : []), [state, selected]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setSelected(null);
    setXpGanho(false);
  };

  const aoTocarCasa = (pos: Pos) => {
    if (state.result.status !== 'playing') return;
    if (selected && moves.some((m) => m.row === pos.row && m.col === pos.col)) {
      const next = makeMove(state, selected, pos);
      if (next === state) return;
      haptics.tapLight();
      setState(next);
      setSelected(null);
      if (next.result.status === 'vitoria' && !xpGanho) {
        setXpGanho(true);
        haptics.success();
        awardXp(db, 10, 'jogo:hnefatafl').then(() => refresh());
      }
      return;
    }
    const piece = state.board[pos.row][pos.col];
    if (piece && piece.side === state.turn) {
      haptics.tapLight();
      setSelected(pos);
    } else {
      setSelected(null);
    }
  };

  const resultLabel = (() => {
    if (state.result.status !== 'vitoria') return null;
    const { lado, motivo } = state.result;
    const texto = motivo === 'rei_fugiu' ? 'o rei fugiu pro canto' : motivo === 'rei_capturado' ? 'o rei foi capturado' : 'o outro lado ficou sem lance legal';
    return `${NOME[lado]} venceram — ${texto} 🎉`;
  })();

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {(['a', 'd'] as const).map((side) => (
          <View key={side} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: side === 'a' ? ATTACKER_FILL : DEFENDER_FILL, borderWidth: 1, borderColor: side === 'a' ? '#E2E8F0' : DEFENDER_RING }} />
            <Text className={`text-xs font-bold ${state.turn === side && state.result.status === 'playing' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              {NOME[side]}
            </Text>
          </View>
        ))}
      </View>

      {resultLabel && <Chip label={resultLabel} tone="green" />}

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        {state.board.map((rowPieces, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {rowPieces.map((piece, col) => {
              const pos: Pos = { row, col };
              const special = isSpecialSquare(pos);
              const isSelected = selected?.row === row && selected?.col === col;
              const isMove = moves.some((m) => m.row === row && m.col === col);
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocarCasa(pos)}
                  style={{ width: CELL, height: CELL, backgroundColor: special ? SPECIAL_SQUARE : SQUARE, borderWidth: 0.5, borderColor: '#CBD5E1', alignItems: 'center', justifyContent: 'center' }}
                >
                  {isSelected && <View style={{ position: 'absolute', width: CELL, height: CELL, backgroundColor: SELECTED_BG }} />}
                  {piece && (
                    <View
                      style={{
                        width: CELL * 0.78,
                        height: CELL * 0.78,
                        borderRadius: CELL * 0.39,
                        backgroundColor: piece.side === 'a' ? ATTACKER_FILL : DEFENDER_FILL,
                        borderWidth: 1.5,
                        borderColor: piece.side === 'a' ? '#E2E8F0' : DEFENDER_RING,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {piece.king && <Text style={{ fontSize: CELL * 0.48, color: DEFENDER_RING, lineHeight: CELL * 0.6 }}>♚</Text>}
                    </View>
                  )}
                  {isMove && !piece && <View style={{ position: 'absolute', width: 7, height: 7, borderRadius: 3.5, backgroundColor: MOVE_DOT }} />}
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
