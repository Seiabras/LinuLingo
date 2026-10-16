import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useLadoDoLinu } from '@/services/quem-comeca';
import { lanceMoinho } from '@/services/moinho-ia';
import { useJogosPrefs, useVariante, useNomesJogadores } from '@/services/jogos-prefs';
import {
  POINT_COORDS,
  createInitialState,
  ligacoesDe,
  moinhosDe,
  pecasPorJogador,
  legalMovesFrom,
  movePiece,
  placePiece,
  removablePieces,
  removeOpponentPiece,
  type MoinhoState,
  type PlayerId,
  type RegraMoinho,
} from '@/services/moinho-engine';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: MoinhoState;
  /** último lance: de onde (null = peça colocada) para onde */
  ultimo?: { de: number | null; para: number; tirou?: number };
}

const COR: Record<PlayerId, 'escura' | 'clara'> = { 0: 'escura', 1: 'clara' };
/** As linhas desenhadas do tabuleiro (cada ligação uma vez). */
const arestas = (adj: number[][]): [number, number][] => {
  const out: [number, number][] = [];
  adj.forEach((viz, i) => viz.forEach((j) => i < j && out.push([i, j])));
  return out;
};

/**
 * Tabuleiro jogável do Jogo do Moinho / Trilha (Nine Men's Morris, ver `moinho-engine.ts`): 24
 * pontos; primeiro cada um coloca as 9 peças, depois move. Três em linha (“moinho”) deixam tirar uma
 * peça do outro, marcada em vermelho. A dois no mesmo aparelho ou contra o Linu (`moinho-ia.ts`,
 * pedido do dono de 16/10/2026: o Linu em todos os jogos). Variantes no seletor: a trilha de 12
 * peças, com as diagonais, e a Lasker, de 10 peças, em que dá para colocar ou mover desde o começo.
 */
export function MoinhoBoard() {
  const [prefs] = useJogosPrefs();
  // “Jogador 1”/“Jogador 2”, ou os nomes digitados no Personalizar (item 11)
  const nomeJ = useNomesJogadores();
  const NOME: Record<PlayerId, string> = { 0: nomeJ(0), 1: nomeJ(1) };
  const tema = useTemaJogo();
  const passo = useCasa(7, 52);
  const pad = passo * 0.6;
  const lado = passo * 6 + pad * 2;
  const xy = (i: number) => ({ x: pad + POINT_COORDS[i]![1] * passo, y: pad + POINT_COORDS[i]![0] * passo });
  const [variante] = useVariante('moinho');
  const regra: RegraMoinho = variante === 'doze' || variante === 'lasker' ? variante : 'nove';
  const inicio = useCallback((): Passo => ({ s: createInitialState(regra) }), [regra]);
  const h = useHistorico<Passo>(inicio, regra === 'nove' ? 'moinho' : `moinho:${regra}`);
  const { s: state, ultimo } = h.state;
  const total = pecasPorJogador(state);
  const ARESTAS = useMemo(() => arestas(ligacoesDe(state)), [state]);
  const [selected, setSelected] = useState<number | null>(null);
  const xp = useXpDeVitoria('moinho');
  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu<PlayerId>(h.pilha[0]!.s.turn, h.pilha[0]!.s.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const fim = state.winner !== null || !!state.empate;
  const vezDoLinu = contraLinu && state.turn === LINU && !fim;
  const nome = (p: PlayerId) => (contraLinu ? (p === LINU ? 'Linu' : 'Você') : NOME[p]);

  const moves = useMemo(() => (selected !== null ? legalMovesFrom(state, selected) : []), [state, selected]);
  const removiveis = useMemo(() => (state.removalsPending > 0 ? removablePieces(state) : []), [state]);
  // moinhos formados agora (as três peças da mesma cor), para brilhar
  const moinhos = useMemo(() => moinhosDe(state).filter((m) => m.every((i) => state.points[i] !== null && state.points[i] === state.points[m[0]!])).flat(), [state]);

  const jogar = (next: MoinhoState, ultimoLance?: Passo['ultimo'], tirou?: number) => {
    if (next === state) return;
    haptics.tapLight();
    h.jogar({ s: next, ultimo: ultimoLance ?? (tirou !== undefined ? { de: null, para: -1, tirou } : undefined) }, tirou !== undefined ? 'captura' : undefined);
    setSelected(null);
    if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
  };

  const aoTocar = (idx: number) => {
    if (fim || vezDoLinu) return;
    if (state.removalsPending > 0) {
      if (removiveis.includes(idx)) jogar(removeOpponentPiece(state, idx), undefined, idx);
      return;
    }
    // na Lasker, durante a colocação: ponto vazio sem peça escolhida = colocar; peça sua = escolher para mover
    const colocando = state.phase === 'colocando' && !(regra === 'lasker' && (selected !== null || state.points[idx] === state.turn));
    if (colocando) {
      if (state.points[idx] === null) jogar(placePiece(state, idx), { de: null, para: idx });
      return;
    }
    if (selected !== null && moves.includes(idx)) return jogar(movePiece(state, selected, idx), { de: selected, para: idx });
    if (state.points[idx] === state.turn) {
      haptics.tapLight();
      setSelected(selected === idx ? null : idx);
    } else setSelected(null);
  };

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceMoinho(state, prefs.nivel);
      if (!l) return;
      if (l.tipo === 'colocar') jogar(placePiece(state, l.para), { de: null, para: l.para });
      else if (l.tipo === 'mover') jogar(movePiece(state, l.de, l.para), { de: l.de, para: l.para });
      else jogar(removeOpponentPiece(state, l.alvo), undefined, l.alvo);
    },
    state.removalsPending > 0 ? 600 : 450,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setSelected(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    // contra o Linu, volta até a sua vez (os lances dele, inclusive a peça que ele tirou, saem juntos)
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.s.turn === LINU) k++;
    h.desfazer(k);
    setSelected(null);
  };

  const instrucao =
    state.removalsPending > 0
      ? `Moinho! ${nome(state.turn)}: toque numa peça do outro marcada em vermelho para tirar.`
      : state.phase === 'colocando' && regra === 'lasker'
        ? `${nome(state.turn)}: ponha uma peça num ponto vazio (${state.placedCount[state.turn]}/${total}) ou toque numa peça sua para movê-la.`
        : state.phase === 'colocando'
        ? `${nome(state.turn)}: toque num ponto vazio para colocar (${state.placedCount[state.turn]}/${total}).`
        : `${nome(state.turn)}: toque numa peça sua e depois num ponto marcado.`;

  const tamPeca = passo * 0.62;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nome(p), amostra: <PecaRedonda jogo="moinho" lado={COR[p]} tamanho={18} />, extra: `${total - state.placedCount[p]} na mão` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {state.empate ? (
        <FaixaResultado texto="O tabuleiro encheu e ninguém pode andar: empate." tom="empate" />
      ) : state.winner !== null ? (
        !contraLinu ? (
          <FaixaResultado texto={`${NOME[state.winner]} venceu!`} />
        ) : state.winner === LINU ? (
          <FaixaResultado texto="O Linu venceu desta vez." tom="derrota" />
        ) : (
          <FaixaResultado texto="Você venceu o Linu!" />
        )
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        {/* as linhas numa camada por cima do fundo (no web, o fundo, que é absoluto, cobria as linhas) */}
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {ARESTAS.map(([a, b], i) => {
            const pa = xy(a);
            const pb = xy(b);
            return <Line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.linha} strokeWidth={3} strokeLinecap="round" />;
          })}
          {POINT_COORDS.map((_, i) => {
            const { x, y } = xy(i);
            return <Circle key={i} cx={x} cy={y} r={passo * 0.11} fill={tema.linha} />;
          })}
        </Svg>
        {POINT_COORDS.map((_, i) => {
          const { x, y } = xy(i);
          const dono = state.points[i];
          const novo = ultimo?.para === i;
          const sel = selected === i;
          const doUltimo = prefs.ultimoLance && (ultimo?.para === i || ultimo?.de === i);
          const disco = dono !== null && <PecaRedonda jogo="moinho" lado={COR[dono]} tamanho={tamPeca} />;
          return (
            <Pressable
              key={i}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: x - passo / 2, top: y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center', zIndex: novo ? 3 : 1 }}
            >
              {doUltimo && <View style={{ position: 'absolute', width: tamPeca * 1.25, height: tamPeca * 1.25, borderRadius: passo, backgroundColor: tema.ultimo }} />}
              {sel && <View style={{ position: 'absolute', width: tamPeca * 1.3, height: tamPeca * 1.3, borderRadius: passo, backgroundColor: tema.selecao }} />}
              {moinhos.includes(i) && dono !== null && <View style={{ position: 'absolute', width: tamPeca * 1.2, height: tamPeca * 1.2, borderRadius: passo, borderWidth: 3, borderColor: tema.especial }} />}
              {disco && novo && ultimo?.de !== null && ultimo?.de !== undefined ? (
                <Desliza key={h.lances} dx={xy(ultimo.de).x - x} dy={xy(ultimo.de).y - y}>
                  {disco}
                </Desliza>
              ) : disco && novo ? (
                <Surge key={h.lances}>{disco}</Surge>
              ) : (
                disco
              )}
              {ultimo?.tirou === i && <Estouro key={`e${h.lances}`} tamanho={passo} />}
              {removiveis.includes(i) && !vezDoLinu && <View style={{ position: 'absolute', width: tamPeca * 1.15, height: tamPeca * 1.15, borderRadius: passo, borderWidth: 3.5, borderColor: '#E00000' }} />}
              {prefs.dicas && moves.includes(i) && <View style={{ position: 'absolute', width: passo * 0.3, height: passo * 0.3, borderRadius: passo, backgroundColor: tema.dica }} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
