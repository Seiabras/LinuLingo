import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useLadoDoLinu } from '@/services/quem-comeca';
import { lanceQuoridor } from '@/services/quoridor-ia';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { Desliza, Surge } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ParedeQuoridor } from './jogos/ParedeQuoridor';
import { DefsTextura, idTextura, materialDoTema } from './jogos/visual';
import { ControlesJogo, Disco, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import {
  canPlaceWall,
  createInitialState,
  legalPawnMoves,
  movePawn,
  placeWall,
  type PlayerId,
  type QuoridorState,
  type WallOrientation,
} from '@/services/quoridor-engine';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';

/**
 * Os tamanhos: o 9×9 clássico (10 paredes cada) e o 7×7 do Quoridor Kid, da Gigamic (8 paredes cada;
 * Wikipédia em inglês, “Quoridor”, consultada em 15/10/2026).
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '9', rotulo: '9×9' },
  { id: '7', rotulo: '7×7 (Kid)' },
];

/**
 * Tabuleiro jogável de Quoridor (9×9 ou 7×7, a dois no mesmo aparelho ou contra o Linu, em
 * `quoridor-ia.ts`, pedido do dono de 16/10/2026). Regra oficial (ver
 * `quoridor-engine.ts`): na vez, mover o peão uma casa ou pôr uma parede, sem nunca fechar o último
 * caminho de ninguém. Toque numa casa marcada para mover, ou escolha uma parede e toque onde ela vai.
 */
export function QuoridorBoard() {
  // vermelho (jogador 1) e azul (jogador 2) por padrão; o jogador pode trocar o par no Personalizar
  const COR = useParDeCores('quoridor');
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [tam, escolherTamanho] = useTamanho('quoridor', TAMANHOS, '9');
  const inicio = useCallback(() => createInitialState(Number(tam)), [tam]);
  const h = useHistorico<QuoridorState>(inicio, 'quoridor');
  const state = h.state;
  const BOARD_SIZE = state.n ?? 9;
  useRecomecaNoTamanho(tam, String(BOARD_SIZE), h.reiniciar);
  const unidade = useCasa(BOARD_SIZE, BOARD_SIZE === 7 ? 54 : 44);
  const CELL = Math.round(unidade * 0.74);
  const GAP = unidade - CELL;
  const UNIT = CELL + GAP;
  const BOARD_PX = BOARD_SIZE * CELL + (BOARD_SIZE - 1) * GAP;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const [mode, setMode] = useState<'mover' | 'parede'>('mover');
  // a parede em prévia, esperando a confirmação
  const [pendente, setPendente] = useState<{ row: number; col: number; orientation: WallOrientation } | null>(null);
  const xp = useXpDeVitoria('quoridor');
  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu<PlayerId>(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  // contra o Linu, o jogador fica sempre embaixo: o tabuleiro gira quando o lado dele é o de cima
  const virado = contraLinu && LINU === 1;
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const nome = (p: PlayerId) => (contraLinu ? (p === LINU ? 'Linu' : 'Você') : `Jogador ${p + 1}`);

  const moves = useMemo(() => legalPawnMoves(state), [state]);

  const jogar = (next: QuoridorState) => {
    if (next === state) return;
    haptics.tapLight();
    h.jogar(next);
    setMode('mover');
    setPendente(null);
    if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
  };
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceQuoridor(state, prefs.nivel);
      if (l) jogar(l.tipo === 'andar' ? movePawn(state, l.para) : placeWall(state, l.parede));
    },
    500,
    h.lances,
  );
  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setMode('mover');
    setPendente(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    // contra o Linu, volta até a sua vez
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === LINU) k++;
    h.desfazer(k);
    setMode('mover');
    setPendente(null);
  };

  const slots: { row: number; col: number }[] = [];
  for (let r = 0; r < BOARD_SIZE - 1; r++) for (let c = 0; c < BOARD_SIZE - 1; c++) slots.push({ row: r, col: c });
  // cruzamentos onde cabe parede (deitada, em pé ou as duas)
  const cruzamentos =
    mode === 'parede' && !vezDoLinu
      ? slots
          .map((sl) => ({ ...sl, h: canPlaceWall(state, { ...sl, orientation: 'h' }), v: canPlaceWall(state, { ...sl, orientation: 'v' }) }))
          .filter((sl) => sl.h || sl.v)
      : [];
  const escolher = (sl: { row: number; col: number; h: boolean; v: boolean }) => {
    haptics.tapLight();
    if (pendente && pendente.row === sl.row && pendente.col === sl.col) return jogar(placeWall(state, pendente));
    setPendente({ row: sl.row, col: sl.col, orientation: sl.h ? 'h' : 'v' });
  };
  const podeGirar = pendente && canPlaceWall(state, { ...pendente, orientation: pendente.orientation === 'h' ? 'v' : 'h' });
  const paredeRect = (w: { row: number; col: number; orientation: WallOrientation }) =>
    w.orientation === 'h'
      ? { left: w.col * UNIT, top: w.row * UNIT + CELL, width: 2 * CELL + GAP, height: GAP }
      : { left: w.col * UNIT + CELL, top: w.row * UNIT, width: GAP, height: 2 * CELL + GAP };
  const semParede = state.wallsLeft[state.turn] <= 0;
  const material = prefs.quoridorParede ?? 'madeira';
  const matCasa = materialDoTema(tema);

  const botao = (rotulo: string, ativo: boolean, onPress: () => void, desligado = false) => (
    <Pressable
      disabled={desligado}
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      className={`rounded-full px-3 py-1.5 ${ativo ? 'bg-slate-800 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'} ${desligado ? 'opacity-40' : ''}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'}`}>{rotulo}</Text>
    </Pressable>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nome(p), amostra: (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Disco tamanho={16} cor={COR[p]} />
              {/* a parede da reserva, no material escolhido */}
              <ParedeQuoridor largura={5} altura={16} material={material} sombra={false} />
            </View>
          ),
          extra: `${state.wallsLeft[p]} parede${state.wallsLeft[p] === 1 ? '' : 's'}` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />

      {state.winner !== null ? (
        !contraLinu ? (
          <FaixaResultado texto={`Jogador ${state.winner + 1} chegou do outro lado e venceu!`} />
        ) : state.winner === LINU ? (
          <FaixaResultado texto="O Linu chegou do outro lado primeiro." tom="derrota" />
        ) : (
          <FaixaResultado texto="Você chegou do outro lado e venceu o Linu!" />
        )
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <>
          <Instrucao>
            {mode === 'mover'
              ? `${contraLinu ? 'Sua vez' : `Jogador ${state.turn + 1}`}: leve seu peão até a fileira da outra cor. Toque numa casa marcada, ou ponha uma parede.`
              : pendente
                ? 'A parede aparece em prévia, com o contorno na sua cor. Gire se quiser e confirme (ou toque de novo no mesmo ponto).'
                : 'Toque num dos pontos entre as casas: a parede fica centrada nele e cobre duas casas.'}
          </Instrucao>
          <View className="flex-row flex-wrap items-center justify-center gap-2">
            {botao('Mover o peão', mode === 'mover', () => (setMode('mover'), setPendente(null)))}
            {botao(`Pôr parede (${state.wallsLeft[state.turn]})`, mode === 'parede', () => setMode('parede'), semParede)}
          </View>
        </>
      )}

      <Moldura virado={virado} largura={BOARD_PX} altura={BOARD_PX} fundo={tema.moldura}>
        {/* as casas num desenho só: a cor do tema, a textura do material e uma sombrinha embaixo, que
            deixa as canaletas parecendo fundas (por onde a parede desliza) */}
        <Svg width={BOARD_PX} height={BOARD_PX} style={{ position: 'absolute', left: 0, top: 0 }}>
          <DefsTextura material={matCasa} />
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, k) => {
            const r = Math.floor(k / BOARD_SIZE);
            const c = k % BOARD_SIZE;
            // as fileiras de chegada de cada jogador ficam com um tom da cor dele
            const chegada = r === BOARD_SIZE - 1 ? COR[0] : r === 0 ? COR[1] : null;
            const x = c * UNIT;
            const y = r * UNIT;
            return [
              <Rect key={`s${k}`} x={x} y={y + 1.2} width={CELL} height={CELL} rx={4} fill="rgba(0,0,0,0.35)" />,
              <Rect key={`c${k}`} x={x} y={y} width={CELL} height={CELL} rx={4} fill={(r + c) % 2 === 0 ? tema.claro : tema.escuro} />,
              matCasa ? <Rect key={`t${k}`} x={x} y={y} width={CELL} height={CELL} rx={4} fill={`url(#${idTextura(matCasa)})`} /> : null,
              <Rect key={`l${k}`} x={x + 0.5} y={y + 0.5} width={CELL - 1} height={CELL - 1} rx={3.5} fill="none" stroke={chegada ?? 'rgba(255,255,255,0.22)'} strokeWidth={chegada ? 2 : 1} />,
            ];
          })}
        </Svg>
        {state.walls.map((w, i) => {
          const nova = !anterior || i >= anterior.walls.length;
          const ret = paredeRect(w);
          const parede = <ParedeQuoridor largura={ret.width} altura={ret.height} material={material} />;
          return (
            <View key={i} style={{ position: 'absolute', ...ret, zIndex: 2 }}>
              {nova && h.lances > 0 ? <Surge key={h.lances} style={{ width: '100%', height: '100%' }}>{parede}</Surge> : parede}
            </View>
          );
        })}
        {/* a parede em prévia: o mesmo desenho, meio transparente, com o contorno na cor de quem joga */}
        {pendente && (
          <View style={{ position: 'absolute', ...paredeRect(pendente), zIndex: 3, pointerEvents: 'none' }}>
            <ParedeQuoridor largura={paredeRect(pendente).width} altura={paredeRect(pendente).height} material={material} contorno={COR[state.turn]} fantasma />
          </View>
        )}
        {/* os pontos onde dá para pôr parede */}
        {cruzamentos.map((sl) => {
          const cx = sl.col * UNIT + CELL + GAP / 2;
          const cy = sl.row * UNIT + CELL + GAP / 2;
          const alvo = Math.max(22, GAP * 2.2);
          const marcado = pendente?.row === sl.row && pendente?.col === sl.col;
          return (
            <Pressable key={`${sl.row}-${sl.col}`} accessibilityLabel="Pôr parede aqui" onPress={() => escolher(sl)} style={{ position: 'absolute', left: cx - alvo / 2, top: cy - alvo / 2, width: alvo, height: alvo, zIndex: 6, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: marcado ? 12 : 8, height: marcado ? 12 : 8, borderRadius: 6, backgroundColor: marcado ? '#FFFFFF' : tema.especial, borderWidth: 1.5, borderColor: '#000' }} />
            </Pressable>
          );
        })}
        {mode === 'mover' &&
          !vezDoLinu &&
          moves.map((m, i) => (
            <Pressable key={i} onPress={() => jogar(movePawn(state, m))} style={{ position: 'absolute', left: m.col * UNIT, top: m.row * UNIT, width: CELL, height: CELL, zIndex: 3, alignItems: 'center', justifyContent: 'center' }}>
              {prefs.dicas && <View style={{ width: CELL * 0.34, height: CELL * 0.34, borderRadius: CELL, backgroundColor: tema.dica }} />}
            </Pressable>
          ))}
        {([0, 1] as const).map((p) => {
          const pos = state.pawns[p];
          const antes = anterior?.pawns[p];
          const andou = antes && (antes.row !== pos.row || antes.col !== pos.col);
          const peao = <Disco tamanho={CELL * 0.8} cor={COR[p]} />;
          return (
            <View key={p} style={{ position: 'absolute', left: pos.col * UNIT, top: pos.row * UNIT, width: CELL, height: CELL, alignItems: 'center', justifyContent: 'center', zIndex: 4, pointerEvents: 'none' }}>
              {andou && antes ? (
                <Desliza key={h.lances} dx={(antes.col - pos.col) * UNIT} dy={(antes.row - pos.row) * UNIT}>
                  {peao}
                </Desliza>
              ) : (
                peao
              )}
            </View>
          );
        })}
      </Moldura>

      {pendente && (
        <View className="flex-row flex-wrap justify-center gap-2">
          <Pressable accessibilityRole="button" onPress={() => jogar(placeWall(state, pendente))} className="rounded-full bg-emerald-600 px-4 py-2">
            <Text className="text-sm font-extrabold text-white">Confirmar a parede</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            disabled={!podeGirar}
            onPress={() => setPendente({ ...pendente, orientation: pendente.orientation === 'h' ? 'v' : 'h' })}
            className={`rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800 ${podeGirar ? '' : 'opacity-40'}`}
          >
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Girar ({pendente.orientation === 'h' ? 'fica em pé' : 'fica deitada'})</Text>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => setPendente(null)} className="rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Cancelar</Text>
          </Pressable>
        </View>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
