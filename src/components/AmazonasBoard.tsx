import { useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceAmazonas } from '@/services/amazonas-ia';
import { alcance, andar, atirar, createInitialState, cx, lx, N_A, pecaDe, type AmazonasState, type CorA, type LanceA } from '@/services/amazonas-engine';
import { PecaXadrez } from './ChessBoard';
import { Desliza, Surge } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorA, string> = { w: 'Brancas', b: 'Pretas' };
const inicio = () => createInitialState();
const COLUNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const LINHAS = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

/** A flecha que queima a casa: um disco escuro com um X, desenho próprio do app. */
export function Flecha({ tamanho }: { tamanho: number }) {
  const r = tamanho / 2;
  return (
    <Svg width={tamanho} height={tamanho}>
      <Circle cx={r} cy={r} r={r * 0.78} fill="#3F2A1D" stroke="#000" strokeWidth={1.2} />
      <Line x1={r * 0.55} y1={r * 0.55} x2={r * 1.45} y2={r * 1.45} stroke="#F59E0B" strokeWidth={r * 0.18} strokeLinecap="round" />
      <Line x1={r * 1.45} y1={r * 0.55} x2={r * 0.55} y2={r * 1.45} stroke="#F59E0B" strokeWidth={r * 0.18} strokeLinecap="round" />
    </Svg>
  );
}

/**
 * Jogo das Amazonas (ver `amazonas-engine.ts`): toque numa amazona sua e numa casa marcada para andar;
 * depois, numa casa marcada para atirar a flecha. As brancas começam. A dois no mesmo aparelho ou
 * contra o Linu (ele fica com as pretas).
 */
export function AmazonasBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(N_A, 40, 26);
  const W = casa * N_A;
  const h = useHistorico<AmazonasState>(inicio, 'amazonas');
  const state = h.state;
  const xp = useXpDeVitoria('amazonas');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'b' && state.winner === null;
  // os alvos: para onde a amazona escolhida anda, ou onde a flecha pode cair
  const alvos = useMemo(() => {
    if (state.atirando !== null) return new Set(alcance(state.board, state.atirando));
    if (sel !== null) return new Set(alcance(state.board, sel));
    return new Set<number>();
  }, [state, sel]);

  const registrar = useCallback(
    (next: AmazonasState) => {
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next);
      if (next.winner === 'w' || (next.winner === 'b' && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    if (state.atirando !== null) {
      if (alvos.has(i)) registrar(atirar(state, i));
      return;
    }
    if (sel !== null && alvos.has(i)) return registrar(andar(state, sel, i));
    if (state.board[i] === pecaDe(state.turn)) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    } else setSel(null);
  };

  // a vez do Linu: escolhe o lance inteiro, anda e, num segundo tempo, atira
  const plano = useRef<LanceA | null>(null);
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (state.atirando === null) {
        const l = lanceAmazonas(state, prefs.nivel);
        if (!l) return;
        plano.current = l;
        registrar(andar(state, l.de, l.para));
      } else if (plano.current) registrar(atirar(state, plano.current.flecha));
    },
    state.atirando === null ? 450 : 500,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    // contra o Linu, volta até a sua vez de novo (o lance dele tem duas partes)
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && (h.pilha[h.pilha.length - 1 - k]!.turn === 'b' || h.pilha[h.pilha.length - 1 - k]!.atirando !== null)) k++;
    h.desfazer(k);
  };

  const nomeDe = (c: CorA) => (contraLinu ? (c === 'w' ? 'Você' : 'Linu') : NOME[c]);
  const livres = (c: CorA) => {
    let n = 0;
    state.board.forEach((v, i) => v === pecaDe(c) && (n += alcance(state.board, i).length));
    return n;
  };
  const resultado =
    state.winner === null
      ? null
      : !contraLinu
        ? { texto: `As ${NOME[state.winner === 'w' ? 'b' : 'w'].toLowerCase()} ficaram sem lance: as ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const }
        : state.winner === 'w'
          ? { texto: 'O Linu ficou sem lance: você venceu!', tom: 'vitoria' as const }
          : { texto: 'Você ficou sem lance: o Linu venceu desta vez.', tom: 'derrota' as const };
  const instrucao =
    state.atirando !== null
      ? 'Agora atire a flecha: toque numa casa marcada (em linha reta ou diagonal, a partir da amazona).'
      : sel !== null
        ? 'Toque numa casa marcada: a amazona anda como a dama do xadrez.'
        : `Vez das ${NOME[state.turn].toLowerCase()}: toque numa amazona sua.`;

  const ultimo = state.ultimo;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaXadrez cor={c} tipo="q" tamanho={20} estilo="desenho" />, extra: `${livres(c)} casas ao alcance` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={W} altura={W} casa={casa} colunas={COLUNAS} linhas={LINHAS}>
        <FundoTabuleiro cols={N_A} rows={N_A} casa={casa} tema={tema} />
        {state.board.map((v, i) => {
          const alvo = alvos.has(i);
          // a amazona que acabou de andar (nesta vez, ou no último lance)
          const veioDe = state.atirando === i ? state.veioDe : ultimo && ultimo.para === i && state.atirando === null ? ultimo.de : null;
          const amazona = (v === 1 || v === 2) && <PecaXadrez cor={v === 1 ? 'w' : 'b'} tipo="q" tamanho={casa * 0.86} estilo="desenho" />;
          const flechaNova = v === 3 && ultimo?.flecha === i && state.atirando === null;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${COLUNAS[cx(i)]}${LINHAS[lx(i)]}${v === 1 ? ': amazona branca' : v === 2 ? ': amazona preta' : v === 3 ? ': flecha' : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: cx(i) * casa, top: lx(i) * casa, width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}
            >
              {prefs.ultimoLance && ultimo && state.atirando === null && (ultimo.de === i || ultimo.para === i) && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.ultimo }} />}
              {(sel === i || state.atirando === i) && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.selecao }} />}
              {alvo && prefs.dicas && (
                <View style={{ position: 'absolute', width: casa * 0.32, height: casa * 0.32, borderRadius: casa, backgroundColor: state.atirando !== null ? 'rgba(245, 158, 11, 0.85)' : tema.dica }} />
              )}
              {alvo && !prefs.dicas && <View style={{ position: 'absolute', width: casa * 0.14, height: casa * 0.14, borderRadius: casa, backgroundColor: tema.dica }} />}
              {amazona && veioDe !== null && prefs.animacoes ? (
                <Desliza key={`a${h.lances}`} dx={(cx(veioDe) - cx(i)) * casa} dy={(lx(veioDe) - lx(i)) * casa}>
                  {amazona}
                </Desliza>
              ) : (
                amazona
              )}
              {v === 3 && (flechaNova ? <Surge key={`f${h.lances}`}>{<Flecha tamanho={casa * 0.8} />}</Surge> : <Flecha tamanho={casa * 0.8} />)}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
