import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import { createInitialState, legalMoves, makeMove, type Color, type ReversiState } from '@/services/reversi-engine';

const CELL = 34;
const BOARD_PX = CELL * 8;
const NOME: Record<Color, string> = { b: 'Pretas', w: 'Brancas' };

/**
 * Tabuleiro jogável de Reversi/Othello (ver `reversi-engine.ts`): toque numa casa marcada em verde
 * pra jogar — vira automaticamente as peças encurraladas na linha. Sem lance legal, a vez passa
 * sozinha pro adversário. 2 jogadores no mesmo aparelho.
 */
export function ReversiBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<ReversiState>(createInitialState);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => legalMoves(state.board, state.turn), [state]);
  const counts = useMemo(() => {
    const flat = state.board.flat();
    return { b: flat.filter((c) => c === 'b').length, w: flat.filter((c) => c === 'w').length };
  }, [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setXpGanho(false);
  };

  const aoTocarCasa = (row: number, col: number) => {
    if (state.winner !== null) return;
    const next = makeMove(state, row, col);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:reversi').then(() => refresh());
    }
  };

  const resultLabel = state.winner === null ? null : state.winner === 'empate' ? `Empate, ${counts.b}×${counts.w} 🤝` : `${NOME[state.winner]} venceram, ${counts.b}×${counts.w} 🎉`;

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {(['b', 'w'] as const).map((c) => (
          <View key={c} className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: c === 'b' ? '#0F172A' : '#F8FAFC', borderWidth: 1, borderColor: '#64748B' }} />
            <Text className={`text-xs font-bold ${state.turn === c && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              {NOME[c]} · {counts[c]}
            </Text>
          </View>
        ))}
      </View>

      {resultLabel && <Chip label={resultLabel} tone="green" />}

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 bg-green-800 dark:border-slate-600">
        {state.board.map((rowPieces, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {rowPieces.map((piece, col) => {
              const isMove = moves.some(([r, c]) => r === row && c === col);
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocarCasa(row, col)}
                  style={{ width: CELL, height: CELL, borderWidth: 0.5, borderColor: '#166534', alignItems: 'center', justifyContent: 'center' }}
                >
                  {piece && (
                    <View style={{ width: CELL * 0.8, height: CELL * 0.8, borderRadius: CELL * 0.4, backgroundColor: piece === 'b' ? '#0F172A' : '#F8FAFC' }} />
                  )}
                  {!piece && isMove && <View style={{ width: 9, height: 9, borderRadius: 4.5, backgroundColor: 'rgba(255,255,255,0.75)' }} />}
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
