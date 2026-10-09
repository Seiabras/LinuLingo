import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  ALL_CELLS,
  MARBLES_PER_PLAYER,
  applyMove,
  createInitialState,
  isValidLine,
  legalDirections,
  marblesOnBoard,
  owner,
  type AbaloneState,
  type Axial,
  type MoveKind,
} from '@/services/abalone-engine';

const HEX = 19; // distância entre o centro de 2 casas vizinhas
const SQRT3 = 1.7320508;
const HOLE_R = 11;
const MARBLE_R = 9.5;
const PAD = 16;

const COR = ['#DC2626', '#2563EB'] as const; // vermelho (jogador 1), azul (jogador 2) — mesma dupla do Quoridor

function rawPixel(a: Axial): { x: number; y: number } {
  return { x: HEX * SQRT3 * (a.q + a.r / 2), y: HEX * 1.5 * a.r };
}

const RAW = ALL_CELLS.map(rawPixel);
const MIN_X = Math.min(...RAW.map((p) => p.x));
const MAX_X = Math.max(...RAW.map((p) => p.x));
const MIN_Y = Math.min(...RAW.map((p) => p.y));
const MAX_Y = Math.max(...RAW.map((p) => p.y));
const BOARD_W = MAX_X - MIN_X + PAD * 2;
const BOARD_H = MAX_Y - MIN_Y + PAD * 2;

function toPixel(a: Axial): { x: number; y: number } {
  const p = rawPixel(a);
  return { x: p.x - MIN_X + PAD, y: p.y - MIN_Y + PAD };
}

function sameCell(a: Axial, b: Axial): boolean {
  return a.q === b.q && a.r === b.r;
}

const ARROW_COLOR: Record<MoveKind, string> = {
  simples: '#16A34A',
  lateral: '#2563EB',
  sumito: '#EA580C',
};

/**
 * Tabuleiro jogável de Abalone (hexágono de 61 casas, 2 jogadores no mesmo aparelho, passando a vez).
 * Regra oficial (ver `abalone-engine.ts`): toque em 1 a 3 bolinhas próprias e adjacentes em linha reta
 * pra selecioná-las, depois toque numa das setas coloridas pra mover nessa direção — verde/azul é
 * movimento livre, laranja é Sumito (empurrão: só com maioria clara, nunca empate).
 */
export function AbaloneBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<AbaloneState>(createInitialState);
  const [selection, setSelection] = useState<Axial[]>([]);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => legalDirections(state, selection), [state, selection]);
  const restante = marblesOnBoard(state);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setSelection([]);
    setXpGanho(false);
  };

  const aoTocarCasa = (cell: Axial) => {
    if (state.winner !== null) return;
    const dono = owner(state, cell);
    if (dono === state.turn) {
      if (selection.some((c) => sameCell(c, cell))) {
        setSelection([]);
        return;
      }
      const candidata = [...selection, cell];
      if (candidata.length <= 3 && isValidLine(state, state.turn, candidata)) {
        haptics.tapLight();
        setSelection(candidata);
      } else {
        haptics.tapLight();
        setSelection([cell]);
      }
    }
  };

  const aoMover = (dir: Axial) => {
    const next = applyMove(state, selection, dir);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    setSelection([]);
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:abalone').then(() => refresh());
    }
  };

  const anchor = selection[0];

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {([0, 1] as const).map((p) => (
          <View key={p} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COR[p] }} />
            <Text className={`text-xs font-bold ${state.turn === p && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Jogador {p + 1} · {restante[p]}/{MARBLES_PER_PLAYER} bolinhas
            </Text>
          </View>
        ))}
      </View>

      {state.winner !== null ? (
        <Chip label={`Jogador ${state.winner + 1} venceu! 🎉`} tone="green" />
      ) : (
        <Text className="text-xs text-slate-600 dark:text-slate-400">
          {selection.length === 0 ? 'Toque numa bolinha pra selecionar (até 3 em linha).' : 'Toque numa seta pra mover (laranja = empurrão).'}
        </Text>
      )}

      <View style={{ width: BOARD_W, height: BOARD_H }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        <Svg width={BOARD_W} height={BOARD_H}>
          <Circle cx={BOARD_W / 2} cy={BOARD_H / 2} r={Math.max(BOARD_W, BOARD_H)} fill="#CBD5E1" />
          {ALL_CELLS.map((c) => {
            const p = toPixel(c);
            return <Circle key={`${c.q},${c.r}`} cx={p.x} cy={p.y} r={HOLE_R} fill="#F1F5F9" />;
          })}
          {selection.map((c) => {
            const p = toPixel(c);
            return <Circle key={`sel-${c.q},${c.r}`} cx={p.x} cy={p.y} r={MARBLE_R + 3} fill="none" stroke="#FCD34D" strokeWidth={3} />;
          })}
          {ALL_CELLS.map((c) => {
            const dono = owner(state, c);
            if (dono === null) return null;
            const p = toPixel(c);
            return <Circle key={`m-${c.q},${c.r}`} cx={p.x} cy={p.y} r={MARBLE_R} fill={COR[dono]} stroke="#F8FAFC" strokeWidth={1.5} />;
          })}
          {anchor &&
            moves.map((m, i) => {
              const p = toPixel({ q: anchor.q + m.dir.q, r: anchor.r + m.dir.r });
              return <Circle key={i} cx={p.x} cy={p.y} r={7} fill={ARROW_COLOR[m.kind]} opacity={0.85} />;
            })}
        </Svg>

        {ALL_CELLS.map((c) => {
          const p = toPixel(c);
          const dono = owner(state, c);
          if (dono !== state.turn) return null;
          return (
            <Pressable
              key={`t-${c.q},${c.r}`}
              onPress={() => aoTocarCasa(c)}
              style={{ position: 'absolute', left: p.x - HOLE_R, top: p.y - HOLE_R, width: HOLE_R * 2, height: HOLE_R * 2, borderRadius: HOLE_R }}
            />
          );
        })}

        {anchor &&
          moves.map((m, i) => {
            const p = toPixel({ q: anchor.q + m.dir.q, r: anchor.r + m.dir.r });
            return (
              <Pressable
                key={`a-${i}`}
                onPress={() => aoMover(m.dir)}
                style={{ position: 'absolute', left: p.x - 10, top: p.y - 10, width: 20, height: 20, borderRadius: 10 }}
              />
            );
          })}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
