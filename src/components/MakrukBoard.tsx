import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceMakruk } from '@/services/makruk-ia';
import { createInitialState, cx, jogar, lancesDaPeca, lx, NOMES_M, type CorM, type MakrukState, type PecaM, type TipoM } from '@/services/makruk-engine';
import type { PieceType } from '@/services/xadrez-engine';
import { PecaXadrez } from './ChessBoard';
import { Desliza, Estouro } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorM, string> = { w: 'Brancas', b: 'Pretas' };
const inicio = () => createInitialState();
const COLUNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const LINHAS = ['8', '7', '6', '5', '4', '3', '2', '1'];

/**
 * O desenho de cada peça: as figuras do xadrez de que elas descendem (a do met é a da dama, a do khon a
 * do bispo). O bia ngai, o “búzio virado”, é o bia de cabeça para baixo.
 */
const FIGURA: Record<TipoM, PieceType> = { k: 'k', m: 'q', s: 'b', n: 'n', r: 'r', p: 'p', f: 'p' };

/** Como cada peça anda, em poucas palavras (aparece ao tocar na peça). */
const COMO_ANDA: Record<TipoM, string> = {
  k: 'uma casa em qualquer direção',
  m: 'uma casa na diagonal',
  s: 'uma casa na diagonal ou uma para a frente',
  n: 'como o cavalo do xadrez, pulando',
  r: 'quantas casas quiser, reto',
  p: 'uma casa para a frente; captura na diagonal; vira bia ngai na 6ª fileira',
  f: 'uma casa na diagonal, como o met',
};

export function PecaMakruk({ p, tamanho }: { p: PecaM; tamanho: number }) {
  const figura = <PecaXadrez cor={p.cor} tipo={FIGURA[p.tipo]} tamanho={tamanho} estilo="desenho" />;
  return p.tipo === 'f' ? <View style={{ transform: [{ rotate: '180deg' }] }}>{figura}</View> : figura;
}

/**
 * Xadrez tailandês (ver `makruk-engine.ts`): toque numa peça e depois numa casa marcada. As brancas
 * ficam embaixo e começam. A dois no mesmo aparelho ou contra o Linu (ele fica com as pretas).
 */
export function MakrukBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(8, 46, 30);
  const W = casa * 8;
  const h = useHistorico<MakrukState>(inicio, 'makruk');
  const state = h.state;
  const xp = useXpDeVitoria('makruk');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'b' && state.winner === null;
  const doSel = useMemo(() => (sel === null ? [] : lancesDaPeca(state, sel)), [state, sel]);
  const alvos = new Set(doSel.map((l) => l.para));

  const fazer = useCallback(
    (de: number, para: number) => {
      const next = jogar(state, de, para);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, next.ultimo?.capturada ? 'captura' : undefined);
      if (next.winner === 'w' || (next.winner === 'b' && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    if (sel !== null && alvos.has(i)) return fazer(sel, i);
    const p = state.board[i];
    if (p && p.cor === state.turn) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    } else setSel(null);
  };

  const pensando = useLinuJoga(vezDoLinu, () => {
    const m = lanceMakruk(state, prefs.nivel);
    if (m) fazer(m.de, m.para);
  });

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    h.desfazer(contraLinu && state.turn === 'w' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: CorM) => (contraLinu ? (c === 'w' ? 'Você' : 'Linu') : NOME[c]);
  const contar = (c: CorM) => state.board.filter((p) => p?.cor === c).length;
  const resultado = (() => {
    if (state.winner === null) return null;
    if (state.winner === 'empate') {
      const por =
        state.fim === 'afogado'
          ? 'Afogado: empate'
          : state.fim === 'contagem'
            ? `A contagem passou de ${state.contagem?.limite}: empate`
            : state.fim === 'material'
              ? 'Só os dois khuns: empate'
              : 'Empate: a mesma posição pela terceira vez';
      return { texto: por, tom: 'empate' as const };
    }
    if (!contraLinu) return { texto: `Xeque-mate! As ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const };
    return state.winner === 'w' ? { texto: 'Xeque-mate! Você venceu o Linu!', tom: 'vitoria' as const } : { texto: 'Xeque-mate: o Linu venceu desta vez.', tom: 'derrota' as const };
  })();

  const pSel = sel !== null ? state.board[sel] : null;
  const ct = state.contagem;
  const contagemTexto = ct
    ? ct.tipo === 'pecas'
      ? `Contagem das peças: as ${NOME[ct.quem].toLowerCase()} contam ${ct.numero} de ${ct.limite}.`
      : `Contagem do tabuleiro: as ${NOME[ct.quem].toLowerCase()} contam ${ct.numero} de 64.`
    : '';
  const instrucao = pSel
    ? `${NOMES_M[pSel.tipo][0]!.toUpperCase()}${NOMES_M[pSel.tipo].slice(1)}: ${COMO_ANDA[pSel.tipo]}.`
    : `${contagemTexto ? `${contagemTexto} ` : ''}Vez das ${NOME[state.turn].toLowerCase()}: toque numa peça para ver como ela anda.`;

  const ultimo = state.ultimo;
  const reiEmXeque = state.emXeque ? state.board.findIndex((p) => p?.cor === state.turn && p.tipo === 'k') : -1;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaMakruk p={{ cor: c, tipo: 'k' }} tamanho={20} />, extra: `${contar(c)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.emXeque && !vezDoLinu ? (
        <FaixaResultado texto={`Xeque! ${contraLinu ? 'Proteja o seu khun' : `As ${NOME[state.turn].toLowerCase()} precisam proteger o khun`}`} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={W} altura={W} casa={casa} colunas={COLUNAS} linhas={LINHAS}>
        {/* o tabuleiro do makruk não tem casas de duas cores: todas iguais, com as linhas por cima */}
        <FundoTabuleiro cols={8} rows={8} casa={casa} tema={tema} tudoEscuro />
        <Svg width={W} height={W} style={{ position: 'absolute', left: 0, top: 0 }}>
          {Array.from({ length: 9 }, (_, k) => (
            <Line key={`h${k}`} x1={0} y1={k * casa} x2={W} y2={k * casa} stroke={tema.linha} strokeWidth={1.2} />
          ))}
          {Array.from({ length: 9 }, (_, k) => (
            <Line key={`v${k}`} x1={k * casa} y1={0} x2={k * casa} y2={W} stroke={tema.linha} strokeWidth={1.2} />
          ))}
        </Svg>
        {state.board.map((p, i) => {
          const alvo = alvos.has(i);
          const veioDe = ultimo && ultimo.para === i ? ultimo.de : null;
          const peca = p && <PecaMakruk p={p} tamanho={casa * 0.86} />;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${COLUNAS[cx(i)]}${LINHAS[lx(i)]}${p ? `: ${NOMES_M[p.tipo]} ${p.cor === 'w' ? 'branco' : 'preto'}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: cx(i) * casa, top: lx(i) * casa, width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}
            >
              {prefs.ultimoLance && ultimo && (ultimo.de === i || ultimo.para === i) && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.ultimo }} />}
              {reiEmXeque === i && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.xeque }} />}
              {sel === i && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.selecao }} />}
              {alvo && !p && prefs.dicas && <View style={{ position: 'absolute', width: casa * 0.3, height: casa * 0.3, borderRadius: casa, backgroundColor: tema.dica }} />}
              {alvo && !p && !prefs.dicas && <View style={{ position: 'absolute', width: casa * 0.14, height: casa * 0.14, borderRadius: casa, backgroundColor: tema.dica }} />}
              {alvo && p && <View style={{ position: 'absolute', width: casa * 0.94, height: casa * 0.94, borderRadius: casa, borderWidth: 3, borderColor: tema.captura }} />}
              {peca && veioDe !== null && prefs.animacoes ? (
                <Desliza key={h.lances} dx={(cx(veioDe) - cx(i)) * casa} dy={(lx(veioDe) - lx(i)) * casa}>
                  {peca}
                </Desliza>
              ) : (
                peca
              )}
              {ultimo?.capturada && ultimo.para === i && <Estouro key={`e${h.lances}`} tamanho={casa} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
