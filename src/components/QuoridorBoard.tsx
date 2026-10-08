import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  BOARD_SIZE,
  canPlaceWall,
  createInitialState,
  legalPawnMoves,
  movePawn,
  placeWall,
  type Pos,
  type QuoridorState,
  type Wall,
  type WallOrientation,
} from '@/services/quoridor-engine';

const CELL = 28;
const GAP = 12;
const UNIT = CELL + GAP;
const BOARD_PX = BOARD_SIZE * CELL + (BOARD_SIZE - 1) * GAP;

const COR = ['#DC2626', '#2563EB'] as const; // vermelho (jogador 1), azul (jogador 2)

/**
 * Tabuleiro jogável de Quoridor (9×9, 2 jogadores no mesmo aparelho, passando a vez). Regra oficial
 * (ver `quoridor-engine.ts`): mover a peça uma casa ou colocar parede, sem nunca fechar o último
 * caminho de ninguém. Toque numa casa clara pra mover, ou mude pro modo "parede" pra bloquear.
 */
export function QuoridorBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<QuoridorState>(createInitialState);
  const [mode, setMode] = useState<'mover' | 'parede'>('mover');
  const [orientation, setOrientation] = useState<WallOrientation>('h');
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => legalPawnMoves(state), [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setMode('mover');
    setXpGanho(false);
  };

  const aoMover = (to: Pos) => {
    const next = movePawn(state, to);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:quoridor').then(() => refresh());
    }
  };

  const aoColocarParede = (w: Wall) => {
    const next = placeWall(state, w);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    setMode('mover');
  };

  const slots: { row: number; col: number }[] = [];
  for (let r = 0; r < BOARD_SIZE - 1; r++) for (let c = 0; c < BOARD_SIZE - 1; c++) slots.push({ row: r, col: c });
  const legalSlots = mode === 'parede' ? slots.filter((s) => canPlaceWall(state, { ...s, orientation })) : [];

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {([0, 1] as const).map((p) => (
          <View key={p} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COR[p] }} />
            <Text className={`text-xs font-bold ${state.turn === p && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Jogador {p + 1} · {state.wallsLeft[p]} parede{state.wallsLeft[p] === 1 ? '' : 's'}
            </Text>
          </View>
        ))}
      </View>

      {state.winner !== null ? (
        <Chip label={`Jogador ${state.winner + 1} venceu! 🎉`} tone="green" />
      ) : (
        <View className="flex-row items-center gap-2">
          <Pressable onPress={() => { haptics.tapLight(); setMode('mover'); }} className={`rounded-full px-3 py-1.5 ${mode === 'mover' ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
            <Text className={`text-xs font-bold ${mode === 'mover' ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>👟 Mover</Text>
          </Pressable>
          <Pressable
            disabled={state.wallsLeft[state.turn] <= 0}
            onPress={() => { haptics.tapLight(); setMode('parede'); setOrientation('h'); }}
            className={`rounded-full px-3 py-1.5 ${mode === 'parede' && orientation === 'h' ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'} ${state.wallsLeft[state.turn] <= 0 ? 'opacity-40' : ''}`}
          >
            <Text className={`text-xs font-bold ${mode === 'parede' && orientation === 'h' ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>▬ Parede horiz.</Text>
          </Pressable>
          <Pressable
            disabled={state.wallsLeft[state.turn] <= 0}
            onPress={() => { haptics.tapLight(); setMode('parede'); setOrientation('v'); }}
            className={`rounded-full px-3 py-1.5 ${mode === 'parede' && orientation === 'v' ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'} ${state.wallsLeft[state.turn] <= 0 ? 'opacity-40' : ''}`}
          >
            <Text className={`text-xs font-bold ${mode === 'parede' && orientation === 'v' ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>▮ Parede vert.</Text>
          </Pressable>
        </View>
      )}

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        <Svg width={BOARD_PX} height={BOARD_PX}>
          <Rect x={0} y={0} width={BOARD_PX} height={BOARD_PX} fill="#F1F5F9" />
          {Array.from({ length: BOARD_SIZE }).map((_, r) =>
            Array.from({ length: BOARD_SIZE }).map((__, c) => <Rect key={`${r}-${c}`} x={c * UNIT} y={r * UNIT} width={CELL} height={CELL} rx={4} fill="#E2E8F0" />),
          )}
          {state.walls.map((w, i) =>
            w.orientation === 'h' ? (
              <Rect key={i} x={w.col * UNIT} y={w.row * UNIT + CELL} width={2 * CELL + GAP} height={GAP} rx={3} fill="#92400E" />
            ) : (
              <Rect key={i} x={w.col * UNIT + CELL} y={w.row * UNIT} width={GAP} height={2 * CELL + GAP} rx={3} fill="#92400E" />
            ),
          )}
          {mode === 'parede' &&
            legalSlots.map((s, i) =>
              orientation === 'h' ? (
                <Rect key={i} x={s.col * UNIT} y={s.row * UNIT + CELL} width={2 * CELL + GAP} height={GAP} rx={3} fill="#FCD34D" opacity={0.7} />
              ) : (
                <Rect key={i} x={s.col * UNIT + CELL} y={s.row * UNIT} width={GAP} height={2 * CELL + GAP} rx={3} fill="#FCD34D" opacity={0.7} />
              ),
            )}
          {mode === 'mover' &&
            moves.map((m, i) => <Circle key={i} cx={m.col * UNIT + CELL / 2} cy={m.row * UNIT + CELL / 2} r={5} fill="#16A34A" />)}
          {([0, 1] as const).map((p) => (
            <Circle key={p} cx={state.pawns[p].col * UNIT + CELL / 2} cy={state.pawns[p].row * UNIT + CELL / 2} r={CELL * 0.36} fill={COR[p]} stroke="#F8FAFC" strokeWidth={2} />
          ))}
        </Svg>

        {mode === 'mover' &&
          moves.map((m, i) => (
            <Pressable
              key={i}
              onPress={() => aoMover(m)}
              style={{ position: 'absolute', left: m.col * UNIT - GAP / 2, top: m.row * UNIT - GAP / 2, width: CELL + GAP, height: CELL + GAP }}
            />
          ))}

        {mode === 'parede' &&
          legalSlots.map((s, i) => (
            <Pressable
              key={i}
              onPress={() => aoColocarParede({ ...s, orientation })}
              style={
                orientation === 'h'
                  ? { position: 'absolute', left: s.col * UNIT, top: s.row * UNIT + CELL - 6, width: 2 * CELL + GAP, height: GAP + 12 }
                  : { position: 'absolute', left: s.col * UNIT + CELL - 6, top: s.row * UNIT, width: GAP + 12, height: 2 * CELL + GAP }
              }
            />
          ))}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
