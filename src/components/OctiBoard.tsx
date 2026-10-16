import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon, Rect } from 'react-native-svg';
import { camadasTextura, materialDoTema } from './jogos/visual';
import * as haptics from '@/services/haptics';
import { useLadoDoLinu } from '@/services/quem-comeca';
import { lanceOcti, jogarOcti } from '@/services/octi-ia';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { Desliza, Estouro, Some, Surge } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, Escala, LinuPensando, Moldura, PlacarJogo, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
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
  type PlayerId,
  type Pod,
  type Pos,
} from '@/services/octi-engine';

const CELL = 38;
const BOARD_W = COLS * CELL;
const BOARD_H = ROWS * CELL;


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
 * Tabuleiro jogável de Octi — "OCTI: New Edition" (6×7, 2 jogadores no mesmo aparelho ou contra o
 * Linu, em `octi-ia.ts`, pedido do dono de 16/10/2026). Regras oficiais
 * em `octi-engine.ts`, com as fontes citadas lá. Cada pod é um octógono (daí o nome do jogo); os
 * "espinhos" desenhados nele são os prongs instalados — cada um libera o movimento numa direção.
 * Toque numa peça sua pra selecioná-la: no modo "Mover", toque num destino iluminado pra andar ou
 * saltar (encadeando mais saltos se houver); no modo "Instalar prong", toque numa das setas livres ao
 * redor da peça pra equipá-la com mais uma direção.
 */
export function OctiBoard() {
  // laranja (jogador 1) e petróleo (jogador 2) por padrão; o jogador pode trocar o par no Personalizar
  const COR = useParDeCores('octi');
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const h = useHistorico<OctiState>(createInitialState, 'octi');
  const state = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const [mode, setMode] = useState<'mover' | 'prong'>('mover');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const xp = useXpDeVitoria('octi');
  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu<PlayerId>(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const nome = (p: PlayerId) => (contraLinu ? (p === LINU ? 'Linu' : 'Você') : `Jogador ${p + 1}`);

  const jogando = state.phase.kind === 'salto' ? state.phase.podId : selectedId;
  const selectedPod: Pod | undefined = useMemo(() => state.pods.find((p) => p.id === jogando), [state.pods, jogando]);

  const destinations: Dest[] = useMemo(() => {
    if (state.winner !== null || jogando === null || vezDoLinu) return [];
    if (state.phase.kind === 'salto') {
      return legalJumpHops(state, state.phase.podId).map((hop) => ({ to: hop.to, kind: 'salto' as const }));
    }
    const pod = state.pods.find((p) => p.id === jogando);
    if (!pod || pod.player !== state.turn) return [];
    const passos = legalSteps(state, jogando).map((to) => ({ to, kind: 'passo' as const }));
    const saltos = legalJumpHops(state, jogando).map((hop) => ({ to: hop.to, kind: 'salto' as const }));
    return [...passos, ...saltos];
  }, [state, jogando, vezDoLinu]);

  const direcoesLivres = mode === 'prong' && !vezDoLinu && state.phase.kind === 'normal' && selectedPod && selectedPod.player === state.turn ? freeDirections(selectedPod) : [];

  const jogar = (next: OctiState) => {
    if (next === state) return;
    haptics.tapLight();
    h.jogar(next, next.pods.length < state.pods.length ? 'captura' : undefined);
    if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
  };

  // o Linu faz uma ação por vez (num turno de saltos, cada salto, a captura e o fim do turno)
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceOcti(state, prefs.nivel);
      if (l) jogar(jogarOcti(state, l));
      setSelectedId(null);
    },
    state.phase.kind === 'salto' ? 550 : 450,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setMode('mover');
    setSelectedId(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    // contra o Linu, volta até a sua vez (o turno inteiro dele sai junto)
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === LINU) k++;
    h.desfazer(k);
    setSelectedId(null);
  };

  const tocarPod = (pod: Pod) => {
    if (state.winner !== null || state.phase.kind === 'salto' || vezDoLinu) return;
    if (pod.player !== state.turn) return;
    haptics.tapLight();
    setSelectedId(pod.id === selectedId ? null : pod.id);
  };

  const tocarDestino = (d: Dest) => {
    if (jogando === null) return;
    if (d.kind === 'passo') {
      jogar(movePod(state, jogando, d.to));
      setSelectedId(null);
    } else jogar(jump(state, jogando, d.to));
  };

  const instalarProng = (dir: number) => {
    if (jogando === null) return;
    jogar(addProng(state, jogando, dir));
    setSelectedId(null);
  };

  // as peças capturadas no último lance (somem com um estouro onde estavam)
  const capturadas = anterior ? anterior.pods.filter((a) => !state.pods.some((p) => p.id === a.id)) : [];

  const bases0 = useMemo(() => basesOf(0), []);
  const bases1 = useMemo(() => basesOf(1), []);
  const pecas = (p: 0 | 1) => state.pods.filter((x) => x.player === p).length;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({
          id: p,
          nome: nome(p),
          amostra: <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: COR[p], borderWidth: 1, borderColor: '#000' }} />,
          extra: `${pecas(p)} peça${pecas(p) === 1 ? '' : 's'} · ${state.reserve[p]} prong${state.reserve[p] === 1 ? '' : 's'}`,
        }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />

      {state.winner !== null ? (
        !contraLinu ? (
          <FaixaResultado texto={`Jogador ${state.winner + 1} venceu!`} />
        ) : state.winner === LINU ? (
          <FaixaResultado texto="O Linu venceu desta vez." tom="derrota" />
        ) : (
          <FaixaResultado texto="Você venceu o Linu!" />
        )
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : state.phase.kind === 'salto' ? (
        <View className="flex-row flex-wrap items-center justify-center gap-2">
          <Instrucao>Encadeie outro salto, capture a peça pulada ou pare.</Instrucao>
          <Pressable disabled={!canCaptureJumped(state)} onPress={() => jogar(captureJumped(state))} className={`rounded-full px-3 py-1.5 ${canCaptureJumped(state) ? 'bg-rose-600' : 'bg-slate-200 opacity-40 dark:bg-slate-800'}`}>
            <Text className={`text-xs font-bold ${canCaptureJumped(state) ? 'text-white' : 'text-slate-500'}`}>Capturar a peça pulada</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              jogar(endTurn(state));
              setSelectedId(null);
            }}
            className="rounded-full bg-slate-800 px-3 py-1.5 dark:bg-white"
          >
            <Text className="text-xs font-bold text-white dark:text-slate-900">Parar de pular</Text>
          </Pressable>
        </View>
      ) : (
        <View className="flex-row items-center gap-2">
          {(['mover', 'prong'] as const).map((m) => {
            const ativo = mode === m;
            const semProng = m === 'prong' && state.reserve[state.turn] <= 0;
            return (
              <Pressable
                key={m}
                disabled={semProng}
                onPress={() => {
                  haptics.tapLight();
                  setMode(m);
                }}
                className={`rounded-full px-3 py-1.5 ${ativo ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'} ${semProng ? 'opacity-40' : ''}`}
              >
                <Text className={`text-xs font-bold ${ativo ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>{m === 'mover' ? 'Mover ou saltar' : 'Instalar prong'}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      <Escala largura={BOARD_W + 28} altura={BOARD_H + 28}>
      <Moldura largura={BOARD_W} altura={BOARD_H}>
        <Svg width={BOARD_W} height={BOARD_H}>
          {Array.from({ length: ROWS }).map((_, r) =>
            Array.from({ length: COLS }).map((__, c) => <Rect key={`${r}-${c}`} x={c * CELL} y={r * CELL} width={CELL} height={CELL} fill={(r + c) % 2 === 0 ? tema.claro : tema.escuro} />),
          )}
          {camadasTextura({ material: materialDoTema(tema) })}
          {/* casas OCTI (as bases): chegar na do outro time vence o jogo */}
          {[bases0, bases1].map((bases, k) =>
            bases.map((b, i) => {
              const { x, y } = cellCenter(b);
              return <Rect key={`b${k}-${i}`} x={x - CELL / 2 + 2} y={y - CELL / 2 + 2} width={CELL - 4} height={CELL - 4} fill={`${COR[k]}29`} stroke={COR[k]} strokeWidth={2.5} strokeDasharray="5,3" />;
            }),
          )}
          {selectedPod && (() => {
            const { x, y } = cellCenter(selectedPod);
            return <Rect x={x - CELL / 2} y={y - CELL / 2} width={CELL} height={CELL} fill={tema.selecao} />;
          })()}
          {prefs.dicas &&
            destinations.map((d, i) => {
              const { x, y } = cellCenter(d.to);
              return <Circle key={i} cx={x} cy={y} r={d.kind === 'salto' ? 8 : 6} fill={tema.dica} stroke={d.kind === 'salto' ? '#FFFFFF' : 'none'} strokeWidth={2} />;
            })}
        </Svg>

        {/* peças: cada uma no seu desenho, para poder deslizar sozinha quando anda ou salta */}
        {state.pods.map((pod) => {
          const { x, y } = cellCenter(pod);
          const antes = anterior?.pods.find((p) => p.id === pod.id);
          const andou = antes && (antes.row !== pod.row || antes.col !== pod.col);
          // a peça que ganhou um prong agora dá um pulo
          const ganhouProng = antes && !andou && pod.prongs.size > antes.prongs.size;
          const r = CELL * 0.33;
          const cor = COR[pod.player];
          const desenho = (
            <Svg width={CELL} height={CELL}>
              {Array.from(pod.prongs).map((dir) => {
                const { dx, dy } = dirScreen(dir);
                const len = Math.hypot(dx, dy) || 1;
                const c = CELL / 2;
                return <Line key={dir} x1={c + (dx / len) * r} y1={c + (dy / len) * r} x2={c + (dx / len) * (r + 7)} y2={c + (dy / len) * (r + 7)} stroke={cor} strokeWidth={4.5} strokeLinecap="round" />;
              })}
              <Polygon points={octagonPoints(CELL / 2, CELL / 2, r)} fill={cor} stroke={pod.id === jogando ? '#FFFFFF' : '#000000'} strokeWidth={pod.id === jogando ? 3 : 1.5} />
            </Svg>
          );
          const a = antes && cellCenter(antes);
          return (
            <Pressable key={pod.id} onPress={() => tocarPod(pod)} style={{ position: 'absolute', left: x - CELL / 2, top: y - CELL / 2, width: CELL, height: CELL, zIndex: andou ? 3 : 1 }}>
              {andou && a ? (
                <Desliza key={h.lances} dx={a.x - x} dy={a.y - y}>
                  {desenho}
                </Desliza>
              ) : ganhouProng ? (
                <Surge key={h.lances}>{desenho}</Surge>
              ) : (
                desenho
              )}
            </Pressable>
          );
        })}

        {/* as peças capturadas: encolhem e somem no lugar, com um estouro */}
        {capturadas.map((pod) => {
          const { x, y } = cellCenter(pod);
          const r = CELL * 0.33;
          return (
            <View key={`cap${h.lances}-${pod.id}`} style={{ position: 'absolute', left: x - CELL / 2, top: y - CELL / 2, width: CELL, height: CELL, alignItems: 'center', justifyContent: 'center', zIndex: 4, pointerEvents: 'none' }}>
              <Some atraso={150} duracao={480}>
                <Svg width={CELL} height={CELL}>
                  <Polygon points={octagonPoints(CELL / 2, CELL / 2, r)} fill={COR[pod.player]} stroke="#000000" strokeWidth={1.5} />
                </Svg>
              </Some>
              <Estouro tamanho={CELL} cor="#E11D48" />
            </View>
          );
        })}

        {/* toque nos destinos (mover ou saltar) */}
        {mode === 'mover' || state.phase.kind === 'salto'
          ? destinations.map((d, i) => {
              const { x, y } = cellCenter(d.to);
              return <Pressable key={i} onPress={() => tocarDestino(d)} style={{ position: 'absolute', left: x - CELL / 2, top: y - CELL / 2, width: CELL, height: CELL, zIndex: 4 }} />;
            })
          : null}

        {/* setas para instalar prong, em cada direção livre da peça escolhida */}
        {direcoesLivres.map((dir) => {
          if (!selectedPod) return null;
          const { x, y } = cellCenter(selectedPod);
          const r = CELL * 0.33;
          const { dx, dy } = dirScreen(dir);
          const len = Math.hypot(dx, dy) || 1;
          const tx = x + (dx / len) * (r + 10);
          const ty = y + (dy / len) * (r + 10);
          return (
            <Pressable key={dir} onPress={() => instalarProng(dir)} style={{ position: 'absolute', left: tx - 12, top: ty - 12, width: 24, height: 24, zIndex: 5, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: 13, height: 13, borderRadius: 7, backgroundColor: '#FFFFFF', borderWidth: 2.5, borderColor: COR[state.turn] }} />
            </Pressable>
          );
        })}
      </Moldura>
      </Escala>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
