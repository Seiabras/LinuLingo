import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import { createInitialState, legalMoves, rowOf, sow, type OwareState, type PlayerId } from '@/services/oware-engine';

const CELL = 46;
const NOME: Record<PlayerId, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
const COR: Record<PlayerId, string> = { 0: '#1E293B', 1: '#334155' };

/**
 * Tabuleiro jogável de Oware (ver `oware-engine.ts`): fileira de baixo é o jogador 1 (casas 0-5,
 * esquerda pra direita), fileira de cima é o jogador 2 (casas 6-11, direita pra esquerda — assim a
 * semeadura sempre "circula" no mesmo sentido visual). Toque numa casa sua com sementes pra jogar.
 * 2 jogadores no mesmo aparelho.
 */
export function OwareBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<OwareState>(createInitialState);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => legalMoves(state), [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setXpGanho(false);
  };

  const aoTocarCasa = (idx: number) => {
    if (state.winner !== null || !moves.includes(idx)) return;
    const next = sow(state, idx);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:oware').then(() => refresh());
    }
  };

  const resultLabel = state.winner === null ? null : state.winner === 'empate' ? `Empate, ${state.scores[0]}×${state.scores[1]} 🤝` : `${NOME[state.winner]} venceu, ${state.scores[0]}×${state.scores[1]} 🎉`;

  const topRow = [...rowOf(1)].reverse(); // casas 11..6, pra ficar visualmente "circulando" com a de baixo

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-3">
        {([0, 1] as const).map((p) => (
          <View key={p} className="items-center rounded-xl bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
            <Text className={`text-xs font-bold ${state.turn === p && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{NOME[p]}</Text>
            <Text className="text-lg font-extrabold text-amber-700 dark:text-amber-400">{state.scores[p]}</Text>
          </View>
        ))}
      </View>

      {resultLabel && <Chip label={resultLabel} tone="green" />}

      <View className="gap-1 rounded-2xl border border-slate-300 bg-amber-50 p-2 dark:border-slate-600 dark:bg-slate-800">
        <View className="flex-row gap-1">
          {topRow.map((idx) => (
            <Casa key={idx} idx={idx} seeds={state.houses[idx]} playable={moves.includes(idx)} cor={COR[1]} onPress={aoTocarCasa} />
          ))}
        </View>
        <View className="flex-row gap-1">
          {rowOf(0).map((idx) => (
            <Casa key={idx} idx={idx} seeds={state.houses[idx]} playable={moves.includes(idx)} cor={COR[0]} onPress={aoTocarCasa} />
          ))}
        </View>
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}

function Casa({ idx, seeds, playable, cor, onPress }: { idx: number; seeds: number; playable: boolean; cor: string; onPress: (idx: number) => void }) {
  return (
    <Pressable
      onPress={() => onPress(idx)}
      style={{ width: CELL, height: CELL, borderRadius: CELL / 2, backgroundColor: playable ? '#FDE68A' : '#E7D7B1', borderWidth: 2, borderColor: cor }}
      className="items-center justify-center"
    >
      <Text className="text-base font-extrabold" style={{ color: cor }}>{seeds}</Text>
    </Pressable>
  );
}
