import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { Desliza, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, Disco, FaixaResultado, Instrucao, Moldura, PlacarJogo, useCasa, useHistorico, useXpDeVitoria } from './jogos/ui';
import {
  BOARD_SIZE,
  canPlaceWall,
  createInitialState,
  legalPawnMoves,
  movePawn,
  placeWall,
  type QuoridorState,
  type WallOrientation,
} from '@/services/quoridor-engine';

const COR = ['#E11D48', '#2563EB'] as const; // vermelho (jogador 1), azul (jogador 2)
const PAREDE = '#8B5A2B';
const PAREDE_BORDA = '#4A2C0F';

/**
 * Tabuleiro jogável de Quoridor (9×9, a dois no mesmo aparelho). Regra oficial (ver
 * `quoridor-engine.ts`): na vez, mover o peão uma casa ou pôr uma parede, sem nunca fechar o último
 * caminho de ninguém. Toque numa casa marcada para mover, ou escolha uma parede e toque onde ela vai.
 */
export function QuoridorBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const unidade = useCasa(BOARD_SIZE, 44);
  const CELL = Math.round(unidade * 0.74);
  const GAP = unidade - CELL;
  const UNIT = CELL + GAP;
  const BOARD_PX = BOARD_SIZE * CELL + (BOARD_SIZE - 1) * GAP;
  const h = useHistorico<QuoridorState>(createInitialState, 'quoridor');
  const state = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const [mode, setMode] = useState<'mover' | 'parede'>('mover');
  // a parede em prévia, esperando a confirmação
  const [pendente, setPendente] = useState<{ row: number; col: number; orientation: WallOrientation } | null>(null);
  const xp = useXpDeVitoria('quoridor');

  const moves = useMemo(() => legalPawnMoves(state), [state]);

  const jogar = (next: QuoridorState) => {
    if (next === state) return;
    haptics.tapLight();
    h.jogar(next);
    setMode('mover');
    setPendente(null);
    if (next.winner !== null) xp.dar();
  };
  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setMode('mover');
    setPendente(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(1);
    setMode('mover');
    setPendente(null);
  };

  const slots: { row: number; col: number }[] = [];
  for (let r = 0; r < BOARD_SIZE - 1; r++) for (let c = 0; c < BOARD_SIZE - 1; c++) slots.push({ row: r, col: c });
  // cruzamentos onde cabe parede (deitada, em pé ou as duas)
  const cruzamentos =
    mode === 'parede'
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
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: `Jogador ${p + 1}`, amostra: <Disco tamanho={16} cor={COR[p]} />, extra: `${state.wallsLeft[p]} parede${state.wallsLeft[p] === 1 ? '' : 's'}` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />

      {state.winner !== null ? (
        <FaixaResultado texto={`Jogador ${state.winner + 1} chegou do outro lado e venceu!`} />
      ) : (
        <>
          <Instrucao>
            {mode === 'mover'
              ? `Jogador ${state.turn + 1}: leve seu peão até a fileira da outra cor. Toque numa casa marcada, ou ponha uma parede.`
              : pendente
                ? 'A parede aparece na sua cor. Gire se quiser e confirme (ou toque de novo no mesmo ponto).'
                : 'Toque num dos pontos entre as casas: a parede fica centrada nele e cobre duas casas.'}
          </Instrucao>
          <View className="flex-row flex-wrap items-center justify-center gap-2">
            {botao('Mover o peão', mode === 'mover', () => (setMode('mover'), setPendente(null)))}
            {botao(`Pôr parede (${state.wallsLeft[state.turn]})`, mode === 'parede', () => setMode('parede'), semParede)}
          </View>
        </>
      )}

      <Moldura largura={BOARD_PX} altura={BOARD_PX} fundo={tema.moldura}>
        {Array.from({ length: BOARD_SIZE }).map((_, r) =>
          Array.from({ length: BOARD_SIZE }).map((__, c) => {
            // as fileiras de chegada de cada jogador ficam com um tom da cor dele
            const chegada = r === BOARD_SIZE - 1 ? COR[0] : r === 0 ? COR[1] : null;
            return (
              <View
                key={`${r}-${c}`}
                style={{ position: 'absolute', left: c * UNIT, top: r * UNIT, width: CELL, height: CELL, borderRadius: 4, backgroundColor: (r + c) % 2 === 0 ? tema.claro : tema.escuro, borderWidth: chegada ? 2 : 0, borderColor: chegada ?? undefined }}
              />
            );
          }),
        )}
        {state.walls.map((w, i) => {
          const nova = !anterior || i >= anterior.walls.length;
          const parede = <View style={{ width: '100%', height: '100%', borderRadius: 3, backgroundColor: PAREDE, borderWidth: 1, borderColor: PAREDE_BORDA }} />;
          return (
            <View key={i} style={{ position: 'absolute', ...paredeRect(w), zIndex: 2 }}>
              {nova && h.lances > 0 ? <Surge key={h.lances} style={{ width: '100%', height: '100%' }}>{parede}</Surge> : parede}
            </View>
          );
        })}
        {/* a parede em prévia, na cor de quem joga */}
        {pendente && (
          <View style={{ position: 'absolute', ...paredeRect(pendente), zIndex: 3, borderRadius: 3, backgroundColor: COR[state.turn], opacity: 0.75, borderWidth: 1.5, borderColor: '#FFFFFF', pointerEvents: 'none' }} />
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

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0} />
    </View>
  );
}
