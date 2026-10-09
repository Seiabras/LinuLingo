import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import { COLS, ROWS, createInitialState, dropPiece, legalCols, type Color, type Conecta4State } from '@/services/conecta4-engine';

const CELL = 38;
const BOARD_PX_W = CELL * COLS;
const BOARD_PX_H = CELL * ROWS;
const NOME: Record<Color, string> = { r: 'Vermelho', y: 'Amarelo' };
const COR: Record<Color, string> = { r: '#DC2626', y: '#FACC15' };

/**
 * Tabuleiro jogável de Conecta 4 (ver `conecta4-engine.ts`): toque em qualquer casa da coluna pra
 * deixar a peça cair até o fundo livre. 2 jogadores no mesmo aparelho.
 */
export function Conecta4Board() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<Conecta4State>(createInitialState);
  const [xpGanho, setXpGanho] = useState(false);

  const cols = useMemo(() => legalCols(state), [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setXpGanho(false);
  };

  const aoTocarColuna = (col: number) => {
    if (!cols.includes(col)) return;
    const next = dropPiece(state, col);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:conecta4').then(() => refresh());
    }
  };

  const resultLabel = state.winner === null ? null : state.winner === 'empate' ? 'Empate — tabuleiro cheio 🤝' : `${NOME[state.winner]} venceu! 🎉`;

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {(['r', 'y'] as const).map((c) => (
          <View key={c} className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COR[c] }} />
            <Text className={`text-xs font-bold ${state.turn === c && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{NOME[c]}</Text>
          </View>
        ))}
      </View>

      {resultLabel && <Chip label={resultLabel} tone="green" />}

      <View style={{ width: BOARD_PX_W, height: BOARD_PX_H }} className="overflow-hidden rounded-xl border border-slate-300 bg-blue-800 dark:border-slate-600">
        {state.board.map((rowPieces, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {rowPieces.map((piece, col) => (
              <Pressable key={col} onPress={() => aoTocarColuna(col)} style={{ width: CELL, height: CELL, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: CELL * 0.82, height: CELL * 0.82, borderRadius: CELL * 0.41, backgroundColor: piece ? COR[piece] : '#1E3A8A' }} />
              </Pressable>
            ))}
          </View>
        ))}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
