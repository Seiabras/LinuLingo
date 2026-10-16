import { useCallback, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { BUSCA_REVERSI, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { createInitialState, legalMoves, makeMove, type Color, type ReversiState } from '@/services/reversi-engine';
import { Surge, Vira } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: ReversiState;
  ultimo?: [number, number];
}

const NOME: Record<Color, string> = { b: 'Pretas', w: 'Brancas' };
const COR: Record<Color, 'escura' | 'clara'> = { b: 'escura', w: 'clara' };
/** o feltro verde do Othello, mais escuro no tema noite e branco no alto contraste */
const FELTRO = { normal: '#1F7A3D', linha: '#0E4D24' };
/**
 * Os tamanhos: o 8×8 de sempre e o 6×6, em que, com jogo perfeito, o segundo jogador vence
 * (Wikipédia em inglês, “Reversi”, consultada em 15/10/2026).
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '8', rotulo: '8×8' },
  { id: '6', rotulo: '6×6' },
];

/**
 * Tabuleiro jogável de Reversi/Othello (ver `reversi-engine.ts`): toque numa casa marcada para jogar;
 * as peças encurraladas viram, girando. Sem lance, a vez passa sozinha. A dois no mesmo aparelho ou
 * contra o Linu (ele fica com as brancas).
 */
export function ReversiBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [tam, escolherTamanho] = useTamanho('reversi', TAMANHOS, '8');
  // a variante 'classica' (1883): começa vazio, e os 4 primeiros lances são livres nas casas do meio
  const [variante] = useVariante('reversi');
  const classica = variante === 'classica';
  const inicio = useCallback((): Passo => ({ s: createInitialState(Number(tam), classica) }), [tam, classica]);
  const h = useHistorico<Passo>(inicio, classica ? 'reversi:classica' : 'reversi');
  const { s: state, ultimo } = h.state;
  const n = state.board.length;
  useRecomecaNoTamanho(tam, String(n), h.reiniciar);
  const casa = useCasa(n, n === 6 ? 60 : 50);
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]!.s : null;
  const xp = useXpDeVitoria('reversi');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.s.turn, h.pilha[0]!.s.turn === 'b' ? 'w' : 'b', h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const moves = useMemo(() => legalMoves(state.board, state.turn, state.classica), [state]);
  const conta = useMemo(() => {
    const f = state.board.flat();
    return { b: f.filter((c) => c === 'b').length, w: f.filter((c) => c === 'w').length };
  }, [state]);

  const jogar = useCallback(
    (row: number, col: number) => {
      const next = makeMove(state, row, col);
      if (next === state) return;
      haptics.tapLight();
      h.jogar({ s: next, ultimo: [row, col] });
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.reversi[prefs.nivel];
    // no 6×6 a árvore é menor: o Linu olha um lance mais fundo
    const m = escolherLance(state, prof + (n === 6 && prof > 1 ? 1 : 0), BUSCA_REVERSI, ruido);
    if (m) jogar(m[0], m[1]);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: Color) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const placar = `${conta.b} × ${conta.w}`;
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: `Empate, ${placar}`, tom: 'empate' as const }
        : contraLinu
          ? state.winner !== LINU
            ? { texto: `Você venceu o Linu, ${placar}!`, tom: 'vitoria' as const }
            : { texto: `O Linu venceu, ${placar}.`, tom: 'derrota' as const }
          : { texto: `${NOME[state.winner]} venceram, ${placar}!`, tom: 'vitoria' as const };
  const fundo = tema.id === 'contraste' ? '#FFFFFF' : tema.id === 'noite' ? '#14532D' : FELTRO.normal;
  const grade = tema.id === 'contraste' ? '#000000' : FELTRO.linha;

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['b', 'w'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaRedonda jogo="reversi" lado={COR[c]} tamanho={18} />, extra: String(conta[c]) }))} vez={state.turn} terminou={state.winner !== null} />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {state.classica && state.board.flat().filter(Boolean).length < 4
            ? 'Abertura de 1883: ponha a peça numa das 4 casas do meio que estiverem vazias. Nada vira ainda.'
            : 'Toque numa casa marcada: as peças do outro que ficarem cercadas viram para você.'}
        </Instrucao>
      )}

      <Moldura largura={casa * n} altura={casa * n} fundo={fundo}>
        {state.board.map((linha, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {linha.map((p, col) => {
              const isMove = moves.some(([r, c]) => r === row && c === col);
              const nova = ultimo && ultimo[0] === row && ultimo[1] === col;
              const virou = !nova && p !== null && anterior?.board[row][col] !== null && anterior?.board[row][col] !== p;
              const disco = p && <PecaRedonda jogo="reversi" lado={COR[p]} tamanho={casa * 0.84} />;
              return (
                <Pressable
                  key={col}
                  disabled={vezDoLinu || !isMove}
                  onPress={() => jogar(row, col)}
                  style={{ width: casa, height: casa, borderWidth: 0.5, borderColor: grade, alignItems: 'center', justifyContent: 'center' }}
                >
                  {nova && prefs.ultimoLance && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.ultimo, opacity: 0.6 }} />}
                  {disco && nova ? <Surge key={`n${h.lances}`}>{disco}</Surge> : disco && virou ? <Vira key={`v${h.lances}`}>{disco}</Vira> : disco}
                  {!p && isMove && prefs.dicas && !vezDoLinu && (
                    <View style={{ width: casa * 0.3, height: casa * 0.3, borderRadius: casa, borderWidth: 2, borderColor: tema.id === 'contraste' ? '#0047FF' : 'rgba(255,255,255,0.85)' }} />
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
