import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, G, Line, Polygon, Rect } from 'react-native-svg';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  basesOf,
  canCaptureJumped,
  captureJumped,
  COLS,
  createInitialState,
  DIRS,
  endTurn,
  freeDirections,
  jump,
  legalJumpHops,
  legalSteps,
  movePod,
  addProng,
  ROWS,
  type OctiState,
  type Pod,
  type Pos,
} from '@/services/octi-engine';

const CELL = 38;
const BOARD_W = COLS * CELL;
const BOARD_H = ROWS * CELL;

const COR = ['#EA580C', '#0891B2'] as const; // laranja (jogador 1), ciano (jogador 2)
const COR_BASE_BG = ['rgba(234,88,12,0.16)', 'rgba(8,145,178,0.16)'] as const;

/** Centro em pixels de uma casa (row,col): linha cresce pra cima na tela, igual ao diagrama da fonte. */
function cellCenter(pos: Pos) {
  return { x: pos.col * CELL + CELL / 2, y: (ROWS - 1 - pos.row) * CELL + CELL / 2 };
}

/** Pontos de um octógono regular (o "pod") centrado em (cx,cy) com raio r. */
function octagonPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let k = 0; k < 8; k++) {
    const angle = (Math.PI / 8) + (k * Math.PI) / 4;
    pts.push(`${cx + r * Math.sin(angle)},${cy - r * Math.cos(angle)}`);
  }
  return pts.join(' ');
}

/** Vetor de tela (dx,dy) de uma direção do motor: linha cresce pra cima -> dy invertido. */
function dirScreen(dir: number) {
  const d = DIRS[dir];
  return { dx: d.col, dy: -d.row };
}

type Dest = { to: Pos; kind: 'passo' | 'salto' };

/**
 * Tabuleiro jogável de Octi — "OCTI: New Edition" (6×7, 2 jogadores no mesmo aparelho). Regras oficiais
 * em `octi-engine.ts`, com as fontes citadas lá. Cada pod é um octógono (daí o nome do jogo); os
 * "espinhos" desenhados nele são os prongs instalados — cada um libera o movimento numa direção.
 * Toque numa peça sua pra selecioná-la: no modo "Mover", toque num destino iluminado pra andar ou
 * saltar (encadeando mais saltos se houver); no modo "Instalar prong", toque numa das setas livres ao
 * redor da peça pra equipá-la com mais uma direção.
 */
export function OctiBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<OctiState>(createInitialState);
  const [mode, setMode] = useState<'mover' | 'prong'>('mover');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [xpGanho, setXpGanho] = useState(false);

  const jogando = state.phase.kind === 'salto' ? state.phase.podId : selectedId;
  const selectedPod: Pod | undefined = useMemo(() => state.pods.find((p) => p.id === jogando), [state.pods, jogando]);

  const destinations: Dest[] = useMemo(() => {
    if (state.winner !== null || jogando === null) return [];
    if (state.phase.kind === 'salto') {
      return legalJumpHops(state, state.phase.podId).map((h) => ({ to: h.to, kind: 'salto' as const }));
    }
    const pod = state.pods.find((p) => p.id === jogando);
    if (!pod || pod.player !== state.turn) return [];
    const passos = legalSteps(state, jogando).map((to) => ({ to, kind: 'passo' as const }));
    const saltos = legalJumpHops(state, jogando).map((h) => ({ to: h.to, kind: 'salto' as const }));
    return [...passos, ...saltos];
  }, [state, jogando]);

  const direcoesLivres = mode === 'prong' && state.phase.kind === 'normal' && selectedPod && selectedPod.player === state.turn ? freeDirections(selectedPod) : [];

  const premiar = (next: OctiState) => {
    if (next.winner !== null && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:octi').then(() => refresh());
    }
  };

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setMode('mover');
    setSelectedId(null);
    setXpGanho(false);
  };

  const tocarPod = (pod: Pod) => {
    if (state.winner !== null || state.phase.kind === 'salto') return;
    if (pod.player !== state.turn) return;
    haptics.tapLight();
    setSelectedId(pod.id === selectedId ? null : pod.id);
  };

  const tocarDestino = (d: Dest) => {
    if (jogando === null) return;
    haptics.tapLight();
    if (d.kind === 'passo') {
      const next = movePod(state, jogando, d.to);
      setState(next);
      setSelectedId(null);
      premiar(next);
    } else {
      const next = jump(state, jogando, d.to);
      setState(next);
      premiar(next);
    }
  };

  const instalarProng = (dir: number) => {
    if (jogando === null) return;
    haptics.tapLight();
    const next = addProng(state, jogando, dir);
    setState(next);
    setSelectedId(null);
    premiar(next);
  };

  const capturar = () => {
    haptics.tapLight();
    setState(captureJumped(state));
  };

  const pararDeSaltar = () => {
    haptics.tapLight();
    const next = endTurn(state);
    setState(next);
    setSelectedId(null);
    premiar(next);
  };

  const bases0 = useMemo(() => basesOf(0), []);
  const bases1 = useMemo(() => basesOf(1), []);

  return (
    <View className="items-center gap-3">
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        {([0, 1] as const).map((p) => (
          <View key={p} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <View style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: COR[p] }} />
            <Text className={`text-xs font-bold ${state.turn === p && state.winner === null ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Jogador {p + 1} · {state.pods.filter((x) => x.player === p).length} peça{state.pods.filter((x) => x.player === p).length === 1 ? '' : 's'} · {state.reserve[p]} prong{state.reserve[p] === 1 ? '' : 's'}
            </Text>
          </View>
        ))}
      </View>

      {state.winner !== null ? (
        <Chip label={`Jogador ${state.winner + 1} venceu! 🎉`} tone="green" />
      ) : state.phase.kind === 'salto' ? (
        <View className="flex-row flex-wrap items-center justify-center gap-2">
          <Text className="text-xs text-slate-600 dark:text-slate-400">Encadeie outro salto, capture a peça pulada ou pare.</Text>
          <Pressable disabled={!canCaptureJumped(state)} onPress={capturar} className={`rounded-full px-3 py-1.5 ${canCaptureJumped(state) ? 'bg-rose-600' : 'bg-slate-200 dark:bg-slate-800 opacity-40'}`}>
            <Text className={`text-xs font-bold ${canCaptureJumped(state) ? 'text-white' : 'text-slate-500'}`}>✖ Capturar peça pulada</Text>
          </Pressable>
          <Pressable onPress={pararDeSaltar} className="rounded-full bg-slate-800 px-3 py-1.5 dark:bg-white">
            <Text className="text-xs font-bold text-white dark:text-slate-900">⏹ Parar de pular</Text>
          </Pressable>
        </View>
      ) : (
        <View className="flex-row items-center gap-2">
          <Pressable onPress={() => { haptics.tapLight(); setMode('mover'); }} className={`rounded-full px-3 py-1.5 ${mode === 'mover' ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
            <Text className={`text-xs font-bold ${mode === 'mover' ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>👟 Mover / saltar</Text>
          </Pressable>
          <Pressable
            disabled={state.reserve[state.turn] <= 0}
            onPress={() => { haptics.tapLight(); setMode('prong'); }}
            className={`rounded-full px-3 py-1.5 ${mode === 'prong' ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'} ${state.reserve[state.turn] <= 0 ? 'opacity-40' : ''}`}
          >
            <Text className={`text-xs font-bold ${mode === 'prong' ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>📌 Instalar prong</Text>
          </Pressable>
        </View>
      )}

      <View style={{ width: BOARD_W, height: BOARD_H }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        <Svg width={BOARD_W} height={BOARD_H}>
          <Rect x={0} y={0} width={BOARD_W} height={BOARD_H} fill="#F1F5F9" />
          {Array.from({ length: ROWS }).map((_, r) =>
            Array.from({ length: COLS }).map((__, c) => (
              <Rect key={`${r}-${c}`} x={c * CELL} y={r * CELL} width={CELL} height={CELL} fill={(r + c) % 2 === 0 ? '#E2E8F0' : '#F1F5F9'} stroke="#CBD5E1" strokeWidth={0.5} />
            )),
          )}
          {/* casas OCTI (as bases) — destino que vence o jogo pra quem é do outro time */}
          {bases0.map((b, i) => {
            const { x, y } = cellCenter(b);
            return <Rect key={`b0-${i}`} x={x - CELL / 2} y={y - CELL / 2} width={CELL} height={CELL} fill={COR_BASE_BG[0]} stroke={COR[0]} strokeWidth={1.5} strokeDasharray="4,3" />;
          })}
          {bases1.map((b, i) => {
            const { x, y } = cellCenter(b);
            return <Rect key={`b1-${i}`} x={x - CELL / 2} y={y - CELL / 2} width={CELL} height={CELL} fill={COR_BASE_BG[1]} stroke={COR[1]} strokeWidth={1.5} strokeDasharray="4,3" />;
          })}

          {/* destinos legais (passo ou salto) */}
          {destinations.map((d, i) => {
            const { x, y } = cellCenter(d.to);
            return <Circle key={i} cx={x} cy={y} r={d.kind === 'salto' ? 7 : 5} fill={d.kind === 'salto' ? '#16A34A' : '#22C55E'} opacity={d.kind === 'salto' ? 0.9 : 0.75} />;
          })}

          {/* peças: octógono + espinhos (prongs instalados) */}
          {state.pods.map((pod) => {
            const { x, y } = cellCenter(pod);
            const r = CELL * 0.33;
            const cor = COR[pod.player];
            const selecionada = pod.id === jogando;
            return (
              <G key={pod.id}>
                {Array.from(pod.prongs).map((dir) => {
                  const { dx, dy } = dirScreen(dir);
                  const len = Math.hypot(dx, dy) || 1;
                  const ux = dx / len;
                  const uy = dy / len;
                  return (
                    <Line
                      key={dir}
                      x1={x + ux * r}
                      y1={y + uy * r}
                      x2={x + ux * (r + 7)}
                      y2={y + uy * (r + 7)}
                      stroke={cor}
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                  );
                })}
                <Polygon points={octagonPoints(x, y, r)} fill={cor} stroke={selecionada ? '#F8FAFC' : '#0F172A33'} strokeWidth={selecionada ? 3 : 1} />
              </G>
            );
          })}

          {/* alvos pra instalar prong: uma seta curta em cada direção ainda livre da peça selecionada */}
          {direcoesLivres.map((dir) => {
            if (!selectedPod) return null;
            const { x, y } = cellCenter(selectedPod);
            const r = CELL * 0.33;
            const { dx, dy } = dirScreen(dir);
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const tx = x + ux * (r + 10);
            const ty = y + uy * (r + 10);
            return <Circle key={dir} cx={tx} cy={ty} r={6} fill="#FFFFFF" stroke={COR[state.turn]} strokeWidth={2} />;
          })}
        </Svg>

        {/* toque nas peças (selecionar) */}
        {state.pods.map((pod) => {
          const { x, y } = cellCenter(pod);
          return (
            <Pressable
              key={pod.id}
              onPress={() => tocarPod(pod)}
              style={{ position: 'absolute', left: x - CELL / 2, top: y - CELL / 2, width: CELL, height: CELL }}
            />
          );
        })}

        {/* toque nos destinos (mover/saltar) */}
        {mode === 'mover' || state.phase.kind === 'salto'
          ? destinations.map((d, i) => {
              const { x, y } = cellCenter(d.to);
              return (
                <Pressable
                  key={i}
                  onPress={() => tocarDestino(d)}
                  style={{ position: 'absolute', left: x - CELL / 2, top: y - CELL / 2, width: CELL, height: CELL }}
                />
              );
            })
          : null}

        {/* toque nas setas de instalar prong */}
        {direcoesLivres.map((dir) => {
          if (!selectedPod) return null;
          const { x, y } = cellCenter(selectedPod);
          const r = CELL * 0.33;
          const { dx, dy } = dirScreen(dir);
          const len = Math.hypot(dx, dy) || 1;
          const ux = dx / len;
          const uy = dy / len;
          const tx = x + ux * (r + 10);
          const ty = y + uy * (r + 10);
          return (
            <Pressable
              key={dir}
              onPress={() => instalarProng(dir)}
              style={{ position: 'absolute', left: tx - 12, top: ty - 12, width: 24, height: 24 }}
            />
          );
        })}
      </View>

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
