import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { PECAS_XADREZ_SVG } from '@/data/pecas-xadrez';
import { useJogosPrefs, useVariante, type EstiloPecas } from '@/services/jogos-prefs';
import { BUSCA_XADREZ, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { colunaLetra, linhaNumero, notacao } from '@/services/xadrez-notacao';
import {
  createInitialState,
  fileira960,
  legalMoves,
  makeMove,
  moveNeedsPromotion,
  type ChessState,
  type Color,
  type Move,
  type PieceType,
  type Pos,
} from '@/services/xadrez-engine';
import { Desliza, Estouro } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { Figura, FiguraAmigo, pecaDoExercito, useCoresLado } from './jogos/Figura';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** os símbolos cheios (♚♛…) nas duas cores, com contorno: leem melhor que os vazados ♔♕ */
const GLIFO: Record<PieceType, string> = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
const PROMO: PieceType[] = ['q', 'r', 'b', 'n'];
const NOME_PECA: Record<PieceType, string> = { q: 'Dama', r: 'Torre', b: 'Bispo', n: 'Cavalo', p: 'Peão', k: 'Rei' };
const NOME_COR: Record<Color, string> = { w: 'Brancas', b: 'Pretas' };
const VALOR: Record<PieceType, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const INICIAL: Record<PieceType, number> = { p: 8, n: 2, b: 2, r: 2, q: 1, k: 1 };

/**
 * O desenho do Cburnett com a cor escolhida pelo jogador: nas brancas troca o branco do corpo; nas
 * pretas troca o preto do corpo e o branco dos detalhes pelo contorno, para o desenho continuar legível.
 */
function recolorir(xml: string, cor: Color, fundo: string, contorno: string): string {
  if (cor === 'w') return fundo.toUpperCase() === '#FBF7EC' ? xml : xml.replace(/fill:#ffffff/gi, `fill:${fundo}`);
  if (fundo.toUpperCase() === '#1E1E22') return xml;
  return xml.replace(/fill:#000000/gi, `fill:${fundo}`).replace(/stroke:#ffffff/gi, `stroke:${contorno}`).replace(/fill:#ffffff/gi, `fill:${contorno}`);
}

/**
 * Uma peça de xadrez: a figura do exército do jogador (camelo, capitão pirata…), ou, no clássico, o
 * desenho do Cburnett ou o símbolo do texto, conforme a personalização.
 */
export function PecaXadrez({ cor, tipo, tamanho, estilo, exercito }: { cor: Color; tipo: PieceType; tamanho: number; estilo: EstiloPecas; exercito?: string }) {
  const doLado = useCoresLado();
  const fig = pecaDoExercito(exercito, tipo);
  if (fig?.amigo) return <FiguraAmigo amigo={fig.amigo} tamanho={tamanho} cor={cor} />;
  if (fig) return <Figura d={fig.d} detalhe={fig.detalhe} tamanho={tamanho} cor={cor} traco={fig.traco} />;
  const c = doLado(cor);
  if (estilo === 'desenho') return <SvgXml xml={recolorir(PECAS_XADREZ_SVG[`${cor}${tipo}`]!, cor, c.fundo, c.contorno)} width={tamanho} height={tamanho} />;
  return (
    <Text
      style={{
        fontSize: tamanho * 0.82,
        lineHeight: tamanho,
        width: tamanho,
        textAlign: 'center',
        color: c.fundo,
        textShadowColor: c.contorno,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2.5,
      }}
    >
      {/* o seletor de variação de texto (U+FE0E) impede o ♟ de virar emoji colorido */}
      {`${GLIFO[tipo]}︎`}
    </Text>
  );
}

/** Casa do rei de quem tem a vez, só quando ele está em xeque. */
function reiEmXeque(state: ChessState): Pos | null {
  if (!state.inCheck) return null;
  for (let row = 0; row < 8; row++)
    for (let col = 0; col < 8; col++) {
      const p = state.board[row][col];
      if (p && p.type === 'k' && p.color === state.turn) return { row, col };
    }
  return null;
}

/** Peças que cada cor já perdeu e a vantagem de material (em pontos: peão 1, cavalo e bispo 3, torre 5, dama 9). */
function perdas(state: ChessState) {
  const resta: Record<Color, Record<PieceType, number>> = { w: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 }, b: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 } };
  for (const linha of state.board) for (const p of linha) if (p) resta[p.color][p.type]++;
  const perdeu = (c: Color) => (['q', 'r', 'b', 'n', 'p'] as PieceType[]).flatMap((t) => Array(Math.max(0, INICIAL[t] - resta[c][t])).fill(t) as PieceType[]);
  const pontos = (c: Color) => (Object.keys(resta[c]) as PieceType[]).reduce((s, t) => s + resta[c][t] * VALOR[t], 0);
  return { w: perdeu('w'), b: perdeu('b'), vantagem: pontos('w') - pontos('b') };
}

const ROQUE_TORRE = { K: { de: 7, para: 5 }, Q: { de: 0, para: 3 } } as const;

/**
 * Tabuleiro jogável de Xadrez (regras da FIDE, ver `xadrez-engine.ts`). Toque numa peça sua para
 * escolher e numa casa marcada para mover. A dois no mesmo aparelho, ou contra o Linu (ele joga de
 * pretas). Mostra o último lance, as coordenadas, as peças capturadas e a lista de lances; dá para
 * desfazer. A aparência (tema, peças, dicas, animação) vem da personalização dos jogos.
 */
export function ChessBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(8, 54);
  // Xadrez960: cada partida nova sorteia a fileira de trás
  const [variante] = useVariante('xadrez');
  const x960 = variante === '960';
  const inicio = useCallback(() => (x960 ? createInitialState(fileira960()) : createInitialState()), [x960]);
  const h = useHistorico<ChessState>(inicio, x960 ? 'xadrez:960' : 'xadrez');
  const { state, pilha } = h;
  const [selected, setSelected] = useState<Pos | null>(null);
  const [promocao, setPromocao] = useState<{ from: Pos; to: Pos; color: Color } | null>(null);
  const xp = useXpDeVitoria('xadrez');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'b' && state.result.status === 'playing';
  // o exército de cada lado: o jogador 1 joga de brancas
  const ex = (c: Color) => (c === 'w' ? prefs.exercito1 : prefs.exercito2);
  const virado = !contraLinu && prefs.girar && state.turn === 'b';

  const lancesDaPeca = useMemo(() => (selected ? legalMoves(state).filter((m) => m.from.row === selected.row && m.from.col === selected.col) : []), [state, selected]);
  const xeque = useMemo(() => reiEmXeque(state), [state]);
  const capturadas = useMemo(() => perdas(state), [state]);
  const ultimo: Move | undefined = state.history[state.history.length - 1];
  const lista = useMemo(() => pilha.slice(1).map((s, k) => notacao(pilha[k]!, s.history[s.history.length - 1]!, s)), [pilha]);

  const aplicar = useCallback(
    (next: ChessState) => {
      haptics.tapLight();
      h.jogar(next, next.history[next.history.length - 1]?.captured ? 'captura' : undefined);
      setSelected(null);
      setPromocao(null);
      if (next.result.status === 'checkmate' && !(contraLinu && next.result.winner === 'b')) xp.dar();
    },
    [h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.xadrez[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_XADREZ, ruido);
    if (m) aplicar(makeMove(state, m.from, m.to, 'q'));
  });

  const concluir = (from: Pos, to: Pos, promotion?: PieceType) => {
    const next = makeMove(state, from, to, promotion);
    if (next !== state) aplicar(next);
  };

  const aoTocar = (pos: Pos) => {
    if (promocao || state.result.status !== 'playing' || vezDoLinu) return;
    if (selected && lancesDaPeca.some((m) => m.to.row === pos.row && m.to.col === pos.col)) {
      if (moveNeedsPromotion(state, selected, pos)) {
        haptics.tapLight();
        setPromocao({ from: selected, to: pos, color: state.turn });
      } else concluir(selected, pos);
      return;
    }
    const p = state.board[pos.row][pos.col];
    if (p && p.color === state.turn) {
      haptics.tapLight();
      setSelected(selected?.row === pos.row && selected?.col === pos.col ? null : pos);
    } else setSelected(null);
  };

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setSelected(null);
    setPromocao(null);
    xp.zerar();
  };

  const desfazer = () => {
    haptics.tapLight();
    // contra o Linu, volta também o lance dele, para ser de novo a sua vez
    h.desfazer(contraLinu && state.turn === 'w' && h.lances >= 2 ? 2 : 1);
    setSelected(null);
    setPromocao(null);
  };

  // casa na tela ↔ casa no motor (o tabuleiro pode estar virado para as pretas)
  const motor = (i: number) => (virado ? 7 - i : i);
  const tela = motor;
  const colunas = Array.from({ length: 8 }, (_, i) => colunaLetra(motor(i)));
  const linhas = Array.from({ length: 8 }, (_, i) => linhaNumero(motor(i)));

  const resultado = (() => {
    const r = state.result;
    if (r.status === 'checkmate') {
      if (contraLinu) return { texto: r.winner === 'w' ? 'Xeque-mate! Você venceu o Linu!' : 'Xeque-mate! O Linu venceu desta vez.', tom: r.winner === 'w' ? ('vitoria' as const) : ('derrota' as const) };
      return { texto: `Xeque-mate! ${NOME_COR[r.winner]} venceram!`, tom: 'vitoria' as const };
    }
    if (r.status === 'stalemate') return { texto: 'Afogamento: empate (sem lance legal e sem xeque)', tom: 'empate' as const };
    if (r.status === 'draw') return { texto: r.reason === '50-lances' ? 'Empate: 50 lances sem captura nem lance de peão' : 'Empate: a mesma posição se repetiu 3 vezes', tom: 'empate' as const };
    return null;
  })();

  const amostra = (c: Color) => <PecaXadrez cor={c} tipo="k" tamanho={18} estilo={prefs.pecas} exercito={ex(c)} />;
  const linhaCapturadas = (c: Color) => (
    <View className="min-h-[18px] flex-row flex-wrap items-center justify-center">
      {capturadas[c].map((t, i) => (
        <PecaXadrez key={i} cor={c} tipo={t} tamanho={16} estilo={prefs.pecas} exercito={ex(c)} />
      ))}
      {(c === 'b' ? capturadas.vantagem > 0 : capturadas.vantagem < 0) && (
        <Text className="ml-1 text-xs font-bold text-slate-600 dark:text-slate-300">+{Math.abs(capturadas.vantagem)}</Text>
      )}
    </View>
  );

  // peças que deslizam por cima do tabuleiro (a do último lance e, no roque, a torre)
  const deslizando: { de: Pos; para: Pos }[] = [];
  if (ultimo) {
    deslizando.push({ de: ultimo.from, para: ultimo.to });
    if (ultimo.isCastle) {
      // o rei vai para a coluna g ou c; no Xadrez960 o lance aponta para a torre, então corrige o destino
      const row = ultimo.from.row;
      deslizando[0] = { de: ultimo.from, para: { row, col: ultimo.isCastle === 'K' ? 6 : 2 } };
      deslizando.push({ de: { row, col: ultimo.rookFrom ?? ROQUE_TORRE[ultimo.isCastle].de }, para: { row, col: ROQUE_TORRE[ultimo.isCastle].para } });
    }
  }
  const estaDeslizando = (row: number, col: number) => deslizando.some((d) => d.para.row === row && d.para.col === col);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={[
          { id: 'w', nome: contraLinu ? 'Você' : NOME_COR.w, amostra: amostra('w') },
          { id: 'b', nome: contraLinu ? 'Linu' : NOME_COR.b, amostra: amostra('b') },
        ]}
        vez={state.turn}
        terminou={state.result.status !== 'playing'}
      />

      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.inCheck ? (
        <FaixaResultado texto={`Xeque! ${NOME_COR[state.turn]} precisam proteger o rei`} tom="alerta" />
      ) : contraLinu ? (
        <LinuPensando visivel={pensando} />
      ) : (
        <Instrucao>
          Vez das {NOME_COR[state.turn].toLowerCase()}: toque numa peça e depois numa casa marcada.{x960 ? ' Roque: toque no rei e depois na torre.' : ''}
        </Instrucao>
      )}

      {linhaCapturadas(virado ? 'w' : 'b')}
      <Moldura largura={casa * 8} altura={casa * 8} casa={casa} colunas={colunas} linhas={linhas}>
        <FundoTabuleiro cols={8} rows={8} casa={casa} tema={tema} />
        {Array.from({ length: 8 }, (_, dr) => (
          <View key={dr} style={{ flexDirection: 'row' }}>
            {Array.from({ length: 8 }, (__, dc) => {
              const row = motor(dr);
              const col = motor(dc);
              const p = state.board[row][col];
              const sel = selected?.row === row && selected?.col === col;
              const lance = lancesDaPeca.find((m) => m.to.row === row && m.to.col === col);
              const doUltimo = prefs.ultimoLance && ultimo && ((ultimo.from.row === row && ultimo.from.col === col) || (ultimo.to.row === row && ultimo.to.col === col));
              const emXeque = xeque?.row === row && xeque?.col === col;
              return (
                <Pressable
                  key={dc}
                  accessibilityLabel={`${colunaLetra(col)}${linhaNumero(row)}${p ? `, ${NOME_PECA[p.type]} ${p.color === 'w' ? 'branco' : 'preto'}` : ''}`}
                  onPress={() => aoTocar({ row, col })}
                  style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}
                >
                  {doUltimo && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.ultimo }} />}
                  {sel && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.selecao }} />}
                  {emXeque && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.xeque, borderRadius: casa / 2 }} />}
                  {p && !estaDeslizando(row, col) && <PecaXadrez cor={p.color} tipo={p.type} tamanho={casa * 0.9} estilo={prefs.pecas} exercito={ex(p.color)} />}
                  {prefs.dicas && lance && !p && <View style={{ position: 'absolute', width: casa * 0.32, height: casa * 0.32, borderRadius: casa, backgroundColor: tema.dica }} />}
                  {prefs.dicas && lance && p && (
                    <View style={{ position: 'absolute', width: casa - 2, height: casa - 2, borderRadius: casa, borderWidth: Math.max(3, casa * 0.09), borderColor: tema.captura }} />
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
        {/* peças que acabaram de mexer, deslizando por cima das casas (não recebem toque) */}
        <View style={{ position: 'absolute', left: 0, top: 0, width: casa * 8, height: casa * 8, pointerEvents: 'none' }}>
          {ultimo?.captured && (
            <View key={`estouro-${h.lances}`} style={{ position: 'absolute', left: tela(ultimo.to.col) * casa, top: tela(ultimo.to.row) * casa, width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}>
              <Estouro tamanho={casa} cor={tema.captura.startsWith('#') ? tema.captura : '#F59E0B'} />
            </View>
          )}
          {deslizando.map((d, i) => {
            const p = state.board[d.para.row][d.para.col];
            if (!p) return null;
            const x = tela(d.para.col) * casa;
            const y = tela(d.para.row) * casa;
            return (
              <View key={`${h.lances}-${i}`} style={{ position: 'absolute', left: x, top: y, width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}>
                <Desliza dx={(tela(d.de.col) - tela(d.para.col)) * casa} dy={(tela(d.de.row) - tela(d.para.row)) * casa}>
                  <PecaXadrez cor={p.color} tipo={p.type} tamanho={casa * 0.9} estilo={prefs.pecas} exercito={ex(p.color)} />
                </Desliza>
              </View>
            );
          })}
        </View>
      </Moldura>
      {linhaCapturadas(virado ? 'b' : 'w')}

      {promocao && (
        <View className="items-center gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
          <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">O peão chegou ao fim! Vira:</Text>
          <View className="flex-row gap-2">
            {PROMO.map((t) => (
              <Pressable
                key={t}
                accessibilityLabel={`Promover a ${NOME_PECA[t]}`}
                onPress={() => concluir(promocao.from, promocao.to, t)}
                className="items-center gap-0.5 rounded-xl px-2 py-1.5"
                style={{ backgroundColor: tema.claro }}
              >
                <PecaXadrez cor={promocao.color} tipo={t} tamanho={40} estilo={prefs.pecas} exercito={ex(promocao.color)} />
                <Text className="text-[11px] font-bold text-slate-800">{NOME_PECA[t]}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {lista.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="max-w-full" contentContainerStyle={{ gap: 6, paddingHorizontal: 4 }}>
          {Array.from({ length: Math.ceil(lista.length / 2) }, (_, k) => (
            <View key={k} className="flex-row items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">
              <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400">{k + 1}.</Text>
              <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{lista[2 * k]}</Text>
              {lista[2 * k + 1] && <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{lista[2 * k + 1]}</Text>}
            </View>
          ))}
        </ScrollView>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
