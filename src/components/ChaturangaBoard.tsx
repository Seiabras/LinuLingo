import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { lanceChaturanga } from '@/services/chaturanga-ia';
import { createInitialState, cx, jogar, lancesDaPeca, lx, NOMES_C, NOMES_ELEFANTE, type CorC, type ChaturangaState, type Elefante, type PecaC, type TipoC } from '@/services/chaturanga-engine';
import type { PieceType } from '@/services/xadrez-engine';
import { PecaXadrez } from './ChessBoard';
import { Desliza, Estouro } from './jogos/anim';
import { FundoTabuleiro } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorC, string> = { w: 'Brancas', b: 'Pretas' };
const COLUNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const LINHAS = ['8', '7', '6', '5', '4', '3', '2', '1'];


/**
 * O desenho de cada peça: as figuras do xadrez que descendem delas (o mantri virou a dama; o gaja, o
 * bispo; o ratha, a torre).
 */
const FIGURA: Record<TipoC, PieceType> = { k: 'k', m: 'q', g: 'b', n: 'n', r: 'r', p: 'p' };

const COMO_ANDA: Record<TipoC, string> = {
  k: 'uma casa em qualquer direção',
  m: 'uma casa na diagonal',
  g: '',
  n: 'como o cavalo do xadrez, pulando',
  r: 'quantas casas quiser, reto',
  p: 'uma casa para a frente; captura na diagonal; vira mantri na última fileira',
};

export function PecaChaturanga({ p, tamanho }: { p: PecaC; tamanho: number }) {
  return <PecaXadrez cor={p.cor} tipo={FIGURA[p.tipo]} tamanho={tamanho} estilo="desenho" />;
}

/**
 * Chaturanga (ver `chaturanga-engine.ts`): toque numa peça e depois numa casa marcada. As brancas
 * ficam embaixo e começam. Antes, dá para escolher como o gaja anda (as três reconstruções). A dois
 * no mesmo aparelho ou contra o Linu (ele fica com as pretas).
 */
export function ChaturangaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(8, 46, 30);
  const W = casa * 8;
  // a reconstrução do gaja é a variante escolhida no seletor da página (fica guardada em jogosPrefs);
  // cada uma tem a sua própria partida
  const [variante] = useVariante('chaturanga');
  const elefante: Elefante = variante === 'biruni' ? 'biruni' : variante === 'adli' ? 'adli' : 'alfil';
  const inicio = useCallback(() => createInitialState(elefante), [elefante]);
  const h = useHistorico<ChaturangaState>(inicio, elefante === 'alfil' ? 'chaturanga' : `chaturanga:${elefante}`);
  const state = h.state;
  const xp = useXpDeVitoria('chaturanga');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 'w' ? 'b' : 'w', h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const doSel = useMemo(() => (sel === null ? [] : lancesDaPeca(state, sel)), [state, sel]);
  const alvos = new Set(doSel.map((l) => l.para));

  const fazer = useCallback(
    (de: number, para: number) => {
      const next = jogar(state, de, para);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, next.ultimo?.capturada ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
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
    const m = lanceChaturanga(state, prefs.nivel);
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
    h.desfazer(contraLinu && state.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: CorC) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const contar = (c: CorC) => state.board.filter((p) => p?.cor === c).length;

  const resultado = (() => {
    if (state.winner === null) return null;
    if (state.winner === 'empate') {
      const por = state.fim === 'empate-nu' ? 'Os dois reis ficaram sozinhos: empate' : state.fim === 'limite' ? '200 lances sem final: empate' : 'Empate: a mesma posição pela terceira vez';
      return { texto: por, tom: 'empate' as const };
    }
    const como = state.fim === 'mate' ? 'Xeque-mate' : state.fim === 'afogado' ? 'Afogado (quem fica sem lance vence)' : 'Rei nu (o raja ficou sozinho)';
    if (!contraLinu) return { texto: `${como}! As ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const };
    return state.winner !== LINU ? { texto: `${como}! Você venceu o Linu!`, tom: 'vitoria' as const } : { texto: `${como}: o Linu venceu desta vez.`, tom: 'derrota' as const };
  })();

  const pSel = sel !== null ? state.board[sel] : null;
  const instrucao = pSel
    ? `${NOMES_C[pSel.tipo][0]!.toUpperCase()}${NOMES_C[pSel.tipo].slice(1)}: ${pSel.tipo === 'g' ? NOMES_ELEFANTE[state.elefante] : COMO_ANDA[pSel.tipo]}.`
    : `${contraLinu ? (state.turn === LINU ? 'Vez do Linu' : 'Sua vez') : `Vez das ${NOME[state.turn].toLowerCase()}`}: toque numa peça para ver como ela anda.`;

  const ultimo = state.ultimo;
  const reiEmXeque = state.emXeque ? state.board.findIndex((p) => p?.cor === state.turn && p.tipo === 'k') : -1;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaChaturanga p={{ cor: c, tipo: 'k' }} tamanho={20} />, extra: `${contar(c)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      <Text className="text-center text-xs text-slate-600 dark:text-slate-300">O gaja (elefante) anda: {NOMES_ELEFANTE[state.elefante]}. Troque no seletor de variante.</Text>
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.emXeque && !vezDoLinu ? (
        <FaixaResultado texto={`Xeque! ${contraLinu ? 'Proteja o seu raja' : `As ${NOME[state.turn].toLowerCase()} precisam proteger o raja`}`} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={W} altura={W} casa={casa} colunas={COLUNAS} linhas={LINHAS}>
        {/* o ashtapada, o tabuleiro do chaturanga, não tem casas de duas cores: todas iguais, com as linhas */}
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
          const peca = p && <PecaChaturanga p={p} tamanho={casa * 0.86} />;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${COLUNAS[cx(i)]}${LINHAS[lx(i)]}${p ? `: ${NOMES_C[p.tipo]} ${p.cor === 'w' ? 'branco' : 'preto'}` : ''}`}
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
