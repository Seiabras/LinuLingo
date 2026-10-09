import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  ADJACENCY,
  POINT_COORDS,
  createInitialState,
  legalMovesFrom,
  movePiece,
  placePiece,
  removablePieces,
  removeOpponentPiece,
  type MoinhoState,
  type PlayerId,
} from '@/services/moinho-engine';

const CELL = 40;
const PAD = 22;
const BOARD_PX = 6 * CELL + 2 * PAD;
const px = (row: number, col: number) => ({ x: PAD + col * CELL, y: PAD + row * CELL });

const PIECE_FILL: Record<PlayerId, string> = { 0: '#1E293B', 1: '#F8FAFC' };
const PIECE_RING: Record<PlayerId, string> = { 0: '#E2E8F0', 1: '#334155' };
const NOME: Record<PlayerId, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
const SELECTED = '#FCD34D';
const REMOVIVEL = '#DC2626';
const MOVE_DOT = '#16A34A';

const EDGES: [number, number][] = (() => {
  const seen = new Set<string>();
  const out: [number, number][] = [];
  ADJACENCY.forEach((neighbors, i) => {
    for (const j of neighbors) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) { seen.add(key); out.push(i < j ? [i, j] : [j, i]); }
    }
  });
  return out;
})();

/**
 * Tabuleiro jogável do Jogo do Moinho (Nine Men's Morris — ver `moinho-engine.ts`): 24 pontos,
 * fase de colocação (toque num ponto vazio) e depois de movimento (toque na sua peça, depois no
 * destino). Formar "moinho" (3 em linha) deixa remoção(ões) pendente(s) — toque na peça do
 * adversário destacada em vermelho pra remover. 2 jogadores no mesmo aparelho.
 */
export function MoinhoBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<MoinhoState>(createInitialState);
  const [selected, setSelected] = useState<number | null>(null);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => (selected !== null ? legalMovesFrom(state, selected) : []), [state, selected]);
  const removiveis = useMemo(() => (state.removalsPending > 0 ? removablePieces(state) : []), [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setSelected(null);
    setXpGanho(false);
  };

  const encerrarSeVenceu = (next: MoinhoState) => {
    setState(next);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:moinho').then(() => refresh());
    }
  };

  const aoTocarPonto = (idx: number) => {
    if (state.winner !== null) return;
    if (state.removalsPending > 0) {
      if (!removiveis.includes(idx)) return;
      haptics.tapLight();
      encerrarSeVenceu(removeOpponentPiece(state, idx));
      return;
    }
    if (state.phase === 'colocando') {
      if (state.points[idx] !== null) return;
      haptics.tapLight();
      encerrarSeVenceu(placePiece(state, idx));
      return;
    }
    if (selected !== null && moves.includes(idx)) {
      haptics.tapLight();
      encerrarSeVenceu(movePiece(state, selected, idx));
      setSelected(null);
      return;
    }
    if (state.points[idx] === state.turn) {
      haptics.tapLight();
      setSelected(idx);
    } else {
      setSelected(null);
    }
  };

  const statusLabel =
    state.winner !== null
      ? `${NOME[state.winner]} venceu! 🎉`
      : state.removalsPending > 0
        ? `${NOME[state.turn]}: toque numa peça vermelha do adversário pra remover`
        : state.phase === 'colocando'
          ? `${NOME[state.turn]}: colocando peças (${state.placedCount[state.turn]}/9)`
          : `${NOME[state.turn]}: sua vez de mover`;

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

      <Chip label={statusLabel} tone={state.winner !== null ? 'green' : state.removalsPending > 0 ? 'rose' : 'slate'} />

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 bg-amber-50 dark:border-slate-600 dark:bg-slate-800">
        <Svg width={BOARD_PX} height={BOARD_PX}>
          {EDGES.map(([a, b], i) => {
            const pa = px(...POINT_COORDS[a]);
            const pb = px(...POINT_COORDS[b]);
            return <Line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke="#92400E" strokeWidth={2} />;
          })}
          {POINT_COORDS.map(([row, col], i) => {
            const { x, y } = px(row, col);
            const owner = state.points[i];
            const isSelected = selected === i;
            const isMove = moves.includes(i);
            const isRemovivel = removiveis.includes(i);
            return (
              <Circle
                key={i}
                cx={x}
                cy={y}
                r={isSelected ? 13 : 9}
                fill={owner !== null ? PIECE_FILL[owner] : isMove ? MOVE_DOT : '#FEF3C7'}
                stroke={isRemovivel ? REMOVIVEL : isSelected ? SELECTED : owner !== null ? PIECE_RING[owner] : '#92400E'}
                strokeWidth={isRemovivel ? 3.5 : 2}
              />
            );
          })}
        </Svg>
        {POINT_COORDS.map(([row, col], i) => {
          const { x, y } = px(row, col);
          return (
            <Pressable
              key={i}
              onPress={() => aoTocarPonto(i)}
              style={{ position: 'absolute', left: x - 16, top: y - 16, width: 32, height: 32 }}
            />
          );
        })}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
