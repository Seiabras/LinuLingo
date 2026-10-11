import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_DAMAS, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { createInitialState, legalMovesFrom, makeMove, playerLegalMoves, type DamasState, type PlayerId, type Pos } from '@/services/damas-engine';
import { Desliza, Estouro } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: DamasState;
  ultimo?: { from: Pos; to: Pos; captured: Pos[] };
}

const COR: Record<PlayerId, 'escura' | 'clara'> = { 0: 'escura', 1: 'clara' };
const NOME: Record<PlayerId, string> = { 0: 'Escuras', 1: 'Claras' };
const inicio = (): Passo => ({ s: createInitialState() });

/**
 * Tabuleiro jogável de Damas (regras brasileiras, ver `damas-engine.ts`: captura obrigatória, lei da
 * maioria, dama voa). A dois no mesmo aparelho ou contra o Linu (ele fica com as escuras, que
 * começam). Quando há captura, só as casas de captura aparecem marcadas: o lance simples não vale.
 */
export function DamasBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(8, 52);
  const h = useHistorico<Passo>(inicio, 'damas');
  const { s: state, ultimo } = h.state;
  const [selected, setSelected] = useState<Pos | null>(null);
  const xp = useXpDeVitoria('damas');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 0 && state.winner === null;
  const moves = useMemo(() => (selected ? legalMovesFrom(state, selected) : []), [state, selected]);
  // peças que podem jogar agora (com captura obrigatória, só as que capturam)
  const podemJogar = useMemo(() => new Set(playerLegalMoves(state, state.turn).map((m) => `${m.from.row},${m.from.col}`)), [state]);
  const contagem = useMemo(() => {
    const c = { 0: 0, 1: 0 };
    for (const l of state.board) for (const p of l) if (p) c[p.player]++;
    return c;
  }, [state]);

  const aplicar = useCallback(
    (from: Pos, to: Pos) => {
      const next = makeMove(state, from, to);
      if (next === state) return;
      haptics.tapLight();
      const captured = legalMovesFrom(state, from).find((m) => m.to.row === to.row && m.to.col === to.col)?.captured ?? [];
      h.jogar({ s: next, ultimo: { from, to, captured } }, captured.length > 0 ? 'captura' : undefined);
      setSelected(null);
      if (next.winner !== null && !(contraLinu && next.winner === 0)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.damas[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_DAMAS, ruido);
    if (m) aplicar(m.from, m.to);
  });

  const aoTocar = (pos: Pos) => {
    if (state.winner !== null || vezDoLinu) return;
    const destino = moves.find((m) => m.to.row === pos.row && m.to.col === pos.col);
    if (selected && destino) return aplicar(selected, destino.to);
    const p = state.board[pos.row][pos.col];
    if (p && p.player === state.turn) {
      haptics.tapLight();
      setSelected(selected?.row === pos.row && selected?.col === pos.col ? null : pos);
    } else setSelected(null);
  };

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setSelected(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn === 1 && h.lances >= 2 ? 2 : 1);
    setSelected(null);
  };

  const nomeDe = (p: PlayerId) => (contraLinu ? (p === 0 ? 'Linu' : 'Você') : NOME[p]);
  const resultado =
    state.winner === null
      ? null
      : contraLinu
        ? state.winner === 1
          ? { texto: 'Você venceu o Linu!', tom: 'vitoria' as const }
          : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const }
        : { texto: `${NOME[state.winner]} venceram!`, tom: 'vitoria' as const };
  const temCaptura = playerLegalMoves(state, state.turn).some((m) => m.captured.length > 0);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([1, 0] as const).map((p) => ({ id: p, nome: nomeDe(p), amostra: <PecaRedonda jogo="damas" lado={COR[p]} tamanho={18} figura="p" />, extra: `${contagem[p]} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{temCaptura ? 'Captura obrigatória: só valem as peças marcadas.' : `Vez das ${NOME[state.turn].toLowerCase()}: toque numa peça e depois numa casa marcada.`}</Instrucao>
      )}

      <Moldura largura={casa * 8} altura={casa * 8} casa={casa} colunas={'abcdefgh'.split('')} linhas={['8', '7', '6', '5', '4', '3', '2', '1']}>
        <FundoTabuleiro cols={8} rows={8} casa={casa} tema={tema} />
        {state.board.map((linha, row) => (
          // a fileira da peça que acabou de mexer fica por cima, para o deslize não passar por baixo das outras
          <View key={row} style={{ flexDirection: 'row', zIndex: ultimo?.to.row === row ? 2 : 0 }}>
            {linha.map((p, col) => {
              const sel = selected?.row === row && selected?.col === col;
              const opcao = moves.find((m) => m.to.row === row && m.to.col === col);
              const doUltimo = prefs.ultimoLance && ultimo && ((ultimo.from.row === row && ultimo.from.col === col) || (ultimo.to.row === row && ultimo.to.col === col));
              const veioAgora = ultimo && ultimo.to.row === row && ultimo.to.col === col;
              const podeJogar = prefs.dicas && !selected && p?.player === state.turn && podemJogar.has(`${row},${col}`) && temCaptura;
              const peca = p && <PecaRedonda jogo="damas" lado={COR[p.player]} tamanho={casa * 0.82} marca={p.dama ? 'dama' : undefined} figura={p.dama ? 'q' : 'p'} />;
              const capturadaAqui = ultimo?.captured.some((c) => c.row === row && c.col === col);
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocar({ row, col })}
                  style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: veioAgora ? 2 : 0 }}
                >
                  {doUltimo && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.ultimo }} />}
                  {sel && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.selecao }} />}
                  {podeJogar && <View style={{ position: 'absolute', width: casa - 2, height: casa - 2, borderRadius: casa, borderWidth: 3, borderColor: tema.captura }} />}
                  {peca && veioAgora ? (
                    <Desliza key={h.lances} dx={(ultimo.from.col - col) * casa} dy={(ultimo.from.row - row) * casa}>
                      {peca}
                    </Desliza>
                  ) : (
                    peca
                  )}
                  {capturadaAqui && <Estouro key={`e${h.lances}`} tamanho={casa} />}
                  {prefs.dicas && opcao && !p && (
                    <View style={{ position: 'absolute', width: casa * 0.32, height: casa * 0.32, borderRadius: casa, backgroundColor: opcao.captured.length > 0 ? tema.xeque : tema.dica }} />
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
