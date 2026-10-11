import { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BOARD_SIZE, CORNERS, THRONE, createInitialState, legalMovesFrom, makeMove, type HnefataflState, type Pos, type Side } from '@/services/hnefatafl-engine';
import { Desliza, Estouro } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: HnefataflState;
  ultimo?: { from: Pos; to: Pos; capturadas: Pos[] };
}

const NOME: Record<Side, string> = { a: 'Atacantes', d: 'Defensores' };
const COR: Record<Side, 'escura' | 'clara'> = { a: 'escura', d: 'clara' };
const especial = (row: number, col: number) => (row === THRONE.row && col === THRONE.col) || CORNERS.some((c) => c.row === row && c.col === col);
const inicio = (): Passo => ({ s: createInitialState() });

/**
 * Tabuleiro jogável de Hnefatafl (regras de Copenhague, ver `hnefatafl-engine.ts`). A dois no mesmo
 * aparelho: os atacantes (peças escuras) tentam cercar o rei; os defensores (peças claras e o rei,
 * com a cruz dourada) tentam levar o rei a um dos 4 cantos. O trono e os cantos (casas douradas) só
 * o rei pode ocupar.
 */
export function HnefataflBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(BOARD_SIZE, 36);
  const h = useHistorico<Passo>(inicio, 'hnefatafl');
  const { s: state, ultimo } = h.state;
  const [selected, setSelected] = useState<Pos | null>(null);
  const xp = useXpDeVitoria('hnefatafl');

  const moves = useMemo(() => (selected ? legalMovesFrom(state, selected) : []), [state, selected]);
  const conta = useMemo(() => {
    const c = { a: 0, d: 0 };
    for (const l of state.board) for (const p of l) if (p) c[p.side]++;
    return c;
  }, [state]);

  const aoTocar = (pos: Pos) => {
    if (state.result.status !== 'playing') return;
    if (selected && moves.some((m) => m.row === pos.row && m.col === pos.col)) {
      const next = makeMove(state, selected, pos);
      if (next === state) return;
      haptics.tapLight();
      // as peças que sumiram (fora a que andou) foram capturadas
      const capturadas: Pos[] = [];
      state.board.forEach((l, r) => l.forEach((p, c) => p && !next.board[r][c] && !(r === selected.row && c === selected.col) && capturadas.push({ row: r, col: c })));
      h.jogar({ s: next, ultimo: { from: selected, to: pos, capturadas } }, capturadas.length > 0 ? 'captura' : undefined);
      setSelected(null);
      if (next.result.status === 'vitoria') xp.dar();
      return;
    }
    const p = state.board[pos.row][pos.col];
    if (p && p.side === state.turn) {
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
    h.desfazer(1);
    setSelected(null);
  };

  const resultado = (() => {
    if (state.result.status !== 'vitoria') return null;
    const { lado, motivo } = state.result;
    const texto = motivo === 'rei_fugiu' ? 'o rei fugiu para o canto' : motivo === 'rei_capturado' ? 'o rei foi capturado' : 'o outro lado ficou sem lance';
    return `${NOME[lado]} venceram: ${texto}!`;
  })();

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['a', 'd'] as const).map((s) => ({ id: s, nome: NOME[s], amostra: <PecaRedonda jogo="hnefatafl" lado={COR[s]} tamanho={18} marca={s === 'd' ? 'rei' : undefined} figura={s === 'd' ? 'k' : 'p'} />, extra: `${conta[s]} peças` }))}
        vez={state.turn}
        terminou={state.result.status !== 'playing'}
      />
      {resultado ? <FaixaResultado texto={resultado} /> : <Instrucao>Vez dos {NOME[state.turn].toLowerCase()}. As peças andam em linha reta, quantas casas quiserem, como a torre do xadrez.</Instrucao>}

      <Moldura largura={casa * BOARD_SIZE} altura={casa * BOARD_SIZE}>
        <FundoTabuleiro cols={BOARD_SIZE} rows={BOARD_SIZE} casa={casa} tema={tema} especial={especial} />
        {state.board.map((linha, row) => (
          <View key={row} style={{ flexDirection: 'row', zIndex: ultimo?.to.row === row ? 2 : 0 }}>
            {linha.map((p, col) => {
              const sel = selected?.row === row && selected?.col === col;
              const isMove = moves.some((m) => m.row === row && m.col === col);
              const doUltimo = prefs.ultimoLance && ultimo && ((ultimo.from.row === row && ultimo.from.col === col) || (ultimo.to.row === row && ultimo.to.col === col));
              const veioAgora = ultimo && ultimo.to.row === row && ultimo.to.col === col;
              const peca = p && <PecaRedonda jogo="hnefatafl" lado={COR[p.side]} tamanho={casa * 0.84} marca={p.king ? 'rei' : undefined} figura={p.king ? 'k' : 'p'} />;
              const capturadaAqui = ultimo?.capturadas.some((c) => c.row === row && c.col === col);
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocar({ row, col })}
                  style={{
                    width: casa,
                    height: casa,
                    borderWidth: especial(row, col) ? 2 : 0,
                    borderColor: tema.moldura,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: veioAgora ? 2 : 0,
                  }}
                >
                  {doUltimo && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.ultimo }} />}
                  {sel && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.selecao }} />}
                  {peca && veioAgora ? (
                    <Desliza key={h.lances} dx={(ultimo.from.col - col) * casa} dy={(ultimo.from.row - row) * casa}>
                      {peca}
                    </Desliza>
                  ) : (
                    peca
                  )}
                  {capturadaAqui && <Estouro key={`e${h.lances}`} tamanho={casa} />}
                  {prefs.dicas && isMove && !p && <View style={{ position: 'absolute', width: casa * 0.3, height: casa * 0.3, borderRadius: casa, backgroundColor: tema.dica }} />}
                </Pressable>
              );
            })}
          </View>
        ))}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0} />
    </View>
  );
}
