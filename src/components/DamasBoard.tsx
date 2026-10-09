import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import { createInitialState, legalMovesFrom, makeMove, type DamasState, type PlayerId, type Pos } from '@/services/damas-engine';

const CELL = 38;
const BOARD_PX = CELL * 8;

const LIGHT = '#E2E8F0';
const DARK = '#334155';
const SELECTED_BG = 'rgba(252, 211, 77, 0.55)';
const MOVE_DOT = '#16A34A';
const CAPTURE_RING = '#DC2626';
const PIECE_FILL: Record<PlayerId, string> = { 0: '#1E293B', 1: '#F8FAFC' };
const PIECE_RING: Record<PlayerId, string> = { 0: '#E2E8F0', 1: '#334155' };
const NOME: Record<PlayerId, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };

/**
 * Tabuleiro jogável de Damas (regras brasileiras — ver `damas-engine.ts`: captura obrigatória, lei
 * da maioria, dama voa). 2 jogadores no mesmo aparelho. Toque numa peça sua pra selecionar, toque
 * numa casa marcada pra mover. Quando há captura disponível, só as casas de captura aparecem
 * marcadas — lance simples não é opção nesse caso (regra oficial).
 */
export function DamasBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<DamasState>(createInitialState);
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
    if (state.winner !== null) return;
    const destino = moves.find((m) => m.to.row === pos.row && m.to.col === pos.col);
    if (selected && destino) {
      const next = makeMove(state, selected, destino.to);
      if (next === state) return;
      haptics.tapLight();
      setState(next);
      setSelected(null);
      if (next.winner !== null && !xpGanho) {
        setXpGanho(true);
        haptics.success();
        awardXp(db, 10, 'jogo:damas').then(() => refresh());
      }
      return;
    }
    const piece = state.board[pos.row][pos.col];
    if (piece && piece.player === state.turn) {
      haptics.tapLight();
      setSelected(pos);
    } else {
      setSelected(null);
    }
  };

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {([0, 1] as const).map((p) => (
          <View key={p} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: PIECE_FILL[p], borderWidth: 1, borderColor: PIECE_RING[p] }} />
            <Text className={`text-xs font-bold ${state.turn === p && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              {NOME[p]}
            </Text>
          </View>
        ))}
      </View>

      {state.winner !== null && <Chip label={`${NOME[state.winner]} venceu! 🎉`} tone="green" />}

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        {state.board.map((rowPieces, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {rowPieces.map((piece, col) => {
              const isDark = (row + col) % 2 === 1;
              const isSelected = selected?.row === row && selected?.col === col;
              const option = moves.find((m) => m.to.row === row && m.to.col === col);
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocarCasa({ row, col })}
                  style={{ width: CELL, height: CELL, backgroundColor: isDark ? DARK : LIGHT, alignItems: 'center', justifyContent: 'center' }}
                >
                  {isSelected && <View style={{ position: 'absolute', width: CELL, height: CELL, backgroundColor: SELECTED_BG }} />}
                  {piece && (
                    <View
                      style={{
                        width: CELL * 0.74,
                        height: CELL * 0.74,
                        borderRadius: CELL * 0.37,
                        backgroundColor: PIECE_FILL[piece.player],
                        borderWidth: 2,
                        borderColor: PIECE_RING[piece.player],
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {piece.dama && (
                        <View
                          style={{
                            width: CELL * 0.3,
                            height: CELL * 0.3,
                            borderRadius: CELL * 0.15,
                            borderWidth: 1.5,
                            borderColor: PIECE_RING[piece.player],
                          }}
                        />
                      )}
                    </View>
                  )}
                  {option && !piece && <View style={{ position: 'absolute', width: 10, height: 10, borderRadius: 5, backgroundColor: option.captured.length > 0 ? CAPTURE_RING : MOVE_DOT }} />}
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
