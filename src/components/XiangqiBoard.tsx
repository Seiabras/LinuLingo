import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line, Text as SvgText } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type XiangqiPecas } from '@/services/jogos-prefs';
import { BUSCA_XIANGQI, escolherLance, NIVEIS } from '@/services/jogos-ia';
import {
  CARACTERES,
  COLUNAS_X,
  combinarEmpateX,
  createInitialState,
  cx,
  jogar,
  lancesDaPeca,
  LINHAS_X,
  lx,
  NOMES_X,
  type CorX,
  type PecaX,
  type TipoX,
  type XiangqiState,
} from '@/services/xiangqi-engine';
import { Desliza, Estouro } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorX, string> = { r: 'Vermelhas', b: 'Pretas' };
const inicio = () => createInitialState();

/** Como cada peça anda, em poucas palavras (aparece ao tocar na peça, para quem está aprendendo). */
const COMO_ANDA: Record<TipoX, string> = {
  g: 'um ponto reto, sem sair do palácio',
  a: 'um ponto na diagonal, sem sair do palácio',
  e: 'dois pontos na diagonal, sem atravessar o rio',
  h: 'um ponto reto e um na diagonal; não pula',
  r: 'quantos pontos quiser, reto',
  c: 'como o carro; captura pulando uma peça',
  s: 'para a frente; depois do rio, também para o lado',
};

/** Os estilos de peça (personalização): o disco, a borda e a cor dos caracteres de cada lado. */
export const ESTILOS_XIANGQI: Record<XiangqiPecas, { nome: string; disco: Record<CorX, string>; borda: Record<CorX, string>; letra: Record<CorX, string> }> = {
  classicas: { nome: 'Clássicas', disco: { r: '#F5E6C8', b: '#F5E6C8' }, borda: { r: '#B91C1C', b: '#1C1917' }, letra: { r: '#B91C1C', b: '#1C1917' } },
  jade: { nome: 'Jade', disco: { r: '#B9E2C6', b: '#B9E2C6' }, borda: { r: '#9F1239', b: '#0F2F1F' }, letra: { r: '#9F1239', b: '#0F2F1F' } },
  laca: { nome: 'Laca', disco: { r: '#B91C1C', b: '#1C1917' }, borda: { r: '#FDE68A', b: '#FDE68A' }, letra: { r: '#FDE68A', b: '#FDE68A' } },
};

/** Uma peça do xiangqi: o disco com o caractere chinês, no estilo escolhido. */
export function PecaXiangqi({ p, tamanho, estilo }: { p: PecaX; tamanho: number; estilo: XiangqiPecas }) {
  const e = ESTILOS_XIANGQI[estilo];
  return (
    <View
      style={{
        width: tamanho,
        height: tamanho,
        borderRadius: tamanho,
        backgroundColor: e.disco[p.cor],
        borderWidth: Math.max(2, tamanho * 0.08),
        borderColor: e.borda[p.cor],
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1.5 },
        elevation: 3,
      }}
    >
      <Text style={{ fontSize: tamanho * 0.52, lineHeight: tamanho * 0.66, fontWeight: '700', color: e.letra[p.cor] }}>{CARACTERES[p.cor][p.tipo]}</Text>
    </View>
  );
}

/**
 * Xadrez chinês (ver `xiangqi-engine.ts`): toque numa peça e depois num ponto marcado. Ao tocar numa
 * peça, a instrução diz o nome dela e como ela anda. As vermelhas ficam embaixo e começam. A dois no
 * mesmo aparelho ou contra o Linu (ele fica com as pretas).
 */
export function XiangqiBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(COLUNAS_X, 42, 30);
  const W = passo * COLUNAS_X;
  const H = passo * LINHAS_X;
  const h = useHistorico<XiangqiState>(inicio, 'xiangqi');
  const state = h.state;
  const xp = useXpDeVitoria('xiangqi');
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
      if (next.winner === 'r' || (next.winner === 'b' && !contraLinu)) xp.dar();
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
    const { prof, ruido } = NIVEIS.xiangqi[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_XIANGQI, ruido);
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
    h.desfazer(contraLinu && state.turn === 'r' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: CorX) => (contraLinu ? (c === 'r' ? 'Você' : 'Linu') : NOME[c]);
  const contar = (c: CorX) => state.board.filter((p) => p?.cor === c).length;
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: state.fim === 'repeticao' ? 'Empate: a mesma posição pela terceira vez' : 'Empate combinado', tom: 'empate' as const }
        : (() => {
            const como = state.fim === 'mate' ? 'Xeque-mate' : 'Sem nenhum lance';
            if (!contraLinu) return { texto: `${como}! As ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const };
            return state.winner === 'r' ? { texto: `${como}! Você venceu o Linu!`, tom: 'vitoria' as const } : { texto: `${como}: o Linu venceu desta vez.`, tom: 'derrota' as const };
          })();

  const pSel = sel !== null ? state.board[sel] : null;
  const instrucao = pSel
    ? `${NOMES_X[pSel.tipo][0]!.toUpperCase()}${NOMES_X[pSel.tipo].slice(1)} (${CARACTERES[pSel.cor][pSel.tipo]}): ${COMO_ANDA[pSel.tipo]}.`
    : `Vez das ${NOME[state.turn].toLowerCase()}: toque numa peça para ver como ela anda.`;

  const pt = (r: number, c: number) => ({ x: c * passo + passo / 2, y: r * passo + passo / 2 });
  const ultimo = state.ultimo;
  const estilo = prefs.xiangqiPecas;

  // as linhas: as horizontais inteiras; as verticais de dentro param no rio; os X dos palácios
  const linhas: [number, number, number, number][] = [];
  for (let r = 0; r < LINHAS_X; r++) linhas.push([r, 0, r, COLUNAS_X - 1]);
  for (let c = 0; c < COLUNAS_X; c++) {
    if (c === 0 || c === COLUNAS_X - 1) linhas.push([0, c, LINHAS_X - 1, c]);
    else {
      linhas.push([0, c, 4, c]);
      linhas.push([5, c, 9, c]);
    }
  }
  linhas.push([0, 3, 2, 5], [0, 5, 2, 3], [7, 3, 9, 5], [7, 5, 9, 3]);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['r', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaXiangqi p={{ cor: c, tipo: 'g' }} tamanho={20} estilo={estilo} />, extra: `${contar(c)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.emXeque && !vezDoLinu ? (
        <FaixaResultado texto={`Xeque! As ${NOME[state.turn].toLowerCase()} precisam proteger o general`} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={W} altura={H} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={H} tema={tema} unidade={passo * 2} />
        <Svg width={W} height={H}>
          {linhas.map(([r1, c1, r2, c2], k) => {
            const a = pt(r1, c1);
            const b = pt(r2, c2);
            return <Line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={tema.linha} strokeWidth={1.2} />;
          })}
          {/* o rio: “rio de Chu” e “fronteira de Han” */}
          <SvgText x={W * 0.27} y={passo * 5 + passo * 0.12} fontSize={passo * 0.5} fill={tema.linha} textAnchor="middle" opacity={0.75}>
            楚 河
          </SvgText>
          <SvgText x={W * 0.73} y={passo * 5 + passo * 0.12} fontSize={passo * 0.5} fill={tema.linha} textAnchor="middle" opacity={0.75}>
            漢 界
          </SvgText>
        </Svg>
        {state.board.map((p, i) => {
          const c = pt(lx(i), cx(i));
          const alvo = alvos.has(i);
          const veioDe = ultimo && ultimo.para === i ? ultimo.de : null;
          const peca = p && (
            <View>
              <PecaXiangqi p={p} tamanho={passo * 0.88} estilo={estilo} />
              {(sel === i || (alvo && p)) && (
                <View
                  style={{
                    position: 'absolute',
                    left: -3,
                    top: -3,
                    width: passo * 0.88 + 6,
                    height: passo * 0.88 + 6,
                    borderRadius: passo,
                    borderWidth: 3,
                    borderColor: alvo ? tema.captura : tema.selecao,
                  }}
                />
              )}
            </View>
          );
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Ponto ${lx(i) + 1}, ${cx(i) + 1}${p ? `: ${NOMES_X[p.tipo]} ${p.cor === 'r' ? 'vermelho' : 'preto'}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: c.x - passo / 2, top: c.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {alvo && !p && prefs.dicas && <View style={{ position: 'absolute', width: passo * 0.3, height: passo * 0.3, borderRadius: passo, backgroundColor: tema.dica, opacity: 0.9 }} />}
              {alvo && !p && !prefs.dicas && <View style={{ position: 'absolute', width: passo * 0.14, height: passo * 0.14, borderRadius: passo, backgroundColor: tema.dica }} />}
              {prefs.ultimoLance && ultimo && ultimo.de === i && (
                <View style={{ position: 'absolute', width: passo * 0.5, height: passo * 0.5, borderRadius: passo, borderWidth: 2, borderColor: tema.ultimo }} />
              )}
              {peca && veioDe !== null && prefs.animacoes ? (
                <Desliza key={h.lances} dx={(cx(veioDe) - cx(i)) * passo} dy={(lx(veioDe) - lx(i)) * passo}>
                  {peca}
                </Desliza>
              ) : (
                peca
              )}
              {ultimo?.capturada && ultimo.para === i && <Estouro key={`e${h.lances}`} tamanho={passo} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          state.winner === null && !contraLinu && h.lances > 0 ? (
            <Pressable accessibilityRole="button" onPress={() => h.jogar(combinarEmpateX(state))} className="rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800">
              <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Combinar empate</Text>
            </Pressable>
          ) : null
        }
      />
    </View>
  );
}
