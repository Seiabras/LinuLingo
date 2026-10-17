import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon, Text as SvgText } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante, type ShogiPecas } from '@/services/jogos-prefs';
import { ESTILOS_SHOGI, LETRAS_SHOGI } from '@/data/shogi-estilos';
import { BUSCA_SHOGI, escolherLance, NIVEIS } from '@/services/jogos-ia';
import {
  combinarEmpateS,
  corDe,
  createInitialState,
  createMinishogi,
  NOMES_KOMAOCHI,
  type Komaochi,
  cxN,
  desvirado,
  ePromovida,
  jogar,
  KANJI,
  lancesDaPeca,
  lancesDeDrop,
  lxN,
  movimento,
  N5,
  N9,
  NOMES_S,
  promovido,
  T,
  TIPOS_MAO,
  type CorS,
  type LanceS,
  type ShogiState,
} from '@/services/shogi-engine';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { DefsBrilho, DefsTextura, FundoSuperficie, idTextura } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ALTURA_AVISO, ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

export { ESTILOS_SHOGI };

const NOME: Record<CorS, string> = { s: 'Sente', g: 'Gote' };
/** colunas e fileiras como no shogi: colunas 9 a 1 da esquerda para a direita, fileiras 一 a 九 de cima para baixo */
const COLUNAS = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
const FILEIRAS = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];

/** Como cada peça anda, em poucas palavras (aparece ao tocar na peça). */
const COMO_ANDA: Record<number, string> = {
  1: 'uma casa para a frente',
  2: 'quantas casas quiser, só para a frente',
  3: 'salta duas casas para a frente e uma para o lado; é a única que pula',
  4: 'uma casa na diagonal ou uma para a frente',
  5: 'uma casa em qualquer direção, menos nas diagonais de trás',
  6: 'quantas casas quiser na diagonal',
  7: 'quantas casas quiser, reto',
  8: 'uma casa em qualquer direção',
  9: 'como o general de ouro',
  10: 'como o general de ouro',
  11: 'como o general de ouro',
  12: 'como o general de ouro',
  13: 'como o bispo e mais uma casa reta',
  14: 'como a torre e mais uma casa na diagonal',
};

/** As peças de verdade têm tamanhos diferentes: o rei é a maior e o peão, a menor. */
const ESCALA: Record<number, number> = { 1: 0.84, 2: 0.87, 3: 0.89, 4: 0.93, 5: 0.93, 6: 0.97, 7: 0.97, 8: 1 };
const escalaDe = (t: number) => ESCALA[t] ?? ESCALA[t >= 13 ? t - 7 : t - 8] ?? 0.9;

const MADEIRA = '#EFCB8A';
const BORDA = '#7C4A1E';
const TINTA = '#1C1917';
const VERMELHO = '#B91C1C';
const SETA = '#1D4ED8';

const maiuscula = (t: string) => t[0]!.toUpperCase() + t.slice(1);

/**
 * Uma peça do shogi: o pentágono de madeira com a ponta para o adversário (a do gote fica de cabeça
 * para baixo). A promovida tem o kanji (ou a letra) em vermelho, como o verso das peças de verdade.
 */
export function PecaShogi({ tipo, cor, tamanho, estilo }: { tipo: number; cor: CorS; tamanho: number; estilo: ShogiPecas }) {
  const e = ESTILOS_SHOGI[estilo];
  const k = escalaDe(tipo);
  const h = tamanho * k;
  const w = h * 0.88;
  const tinta = ePromovida(tipo) ? VERMELHO : TINTA;
  const mov = e.setas ? movimento(tipo) : null;
  // o centro das marcas de movimento, no desenho de 100×110
  const CX = 50;
  const CY = 66;
  const letra = LETRAS_SHOGI[tipo]!;
  return (
    <View style={{ width: w, height: h, transform: cor === 'g' ? [{ rotate: '180deg' }] : undefined }}>
      <Svg width={w} height={h} viewBox="0 0 100 110">
        <DefsTextura material="madeira" />
        <DefsBrilho />
        <Polygon points="50,3 84,20 96,107 4,107 16,20" fill={MADEIRA} stroke={BORDA} strokeWidth={4} strokeLinejoin="round" />
        {/* o veio da madeira e a luz de cima, como nas peças de buxo */}
        <Polygon points="50,3 84,20 96,107 4,107 16,20" fill={`url(#${idTextura('madeira')})`} />
        <Polygon points="50,3 84,20 96,107 4,107 16,20" fill="url(#tx-brilho)" />
        {mov &&
          mov.deslizes.map(([fr, dc], i) => {
            const d = fr !== 0 && dc !== 0 ? 30 : 36;
            return <Line key={`d${i}`} x1={CX + dc * 22} y1={CY - fr * 22} x2={CX + dc * d} y2={CY - fr * d} stroke={SETA} strokeWidth={7} strokeLinecap="round" />;
          })}
        {mov && mov.passos.map(([fr, dc], i) => <Circle key={`p${i}`} cx={CX + dc * 30} cy={CY - fr * 30} r={6} fill={SETA} />)}
        {mov?.salta && (
          <>
            <Circle cx={30} cy={26} r={6} fill={SETA} />
            <Circle cx={70} cy={26} r={6} fill={SETA} />
          </>
        )}
        {e.kanji ? (
          <SvgText x={50} y={e.setas ? 79 : 84} fontSize={e.setas ? 36 : 56} fontWeight="bold" fill={tinta} textAnchor="middle">
            {KANJI[tipo]}
          </SvgText>
        ) : (
          <SvgText x={50} y={78} fontSize={letra.length >= 3 ? 24 : letra.length === 2 ? 30 : 38} fontWeight="bold" fill={tinta} textAnchor="middle">
            {letra}
          </SvgText>
        )}
      </Svg>
    </View>
  );
}

type Selecao = { casa: number } | { mao: number } | null;

/**
 * Xadrez japonês (ver `shogi-engine.ts`): toque numa peça e depois numa casa marcada. As peças
 * capturadas ficam na mão (acima e abaixo do tabuleiro): toque numa delas e depois numa casa vazia
 * para largá-la. Quando a peça pode escolher se promove, aparecem as duas opções. O sente fica
 * embaixo e começa; contra o Linu, ele fica com o gote.
 */
export function ShogiBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  // as variantes: 'komaochi' (partida com vantagem) e 'mini' (minishogi, 5×5)
  const [variante] = useVariante('shogi');
  const mini = variante === 'mini';
  const n = mini ? N5 : N9;
  const passo = useCasa(n, mini ? 64 : 44, 30);
  const W = passo * n;
  const lx = (i: number) => lxN(i, n);
  const cx = (i: number) => cxN(i, n);
  const colunas = COLUNAS.slice(N9 - n);
  const fileiras = FILEIRAS.slice(0, n);
  // komaochi: o gote, o mais forte, tira peças e começa
  const komaochi = variante === 'komaochi';
  const [vantagem, setVantagem] = useState<Komaochi>('kaku');
  const inicio = useCallback(() => (mini ? createMinishogi() : createInitialState(komaochi ? vantagem : undefined)), [mini, komaochi, vantagem]);
  const h = useHistorico<ShogiState>(inicio, mini ? 'shogi:mini' : komaochi ? `shogi:komaochi:${vantagem}` : 'shogi');
  const state = h.state;
  const xp = useXpDeVitoria('shogi');
  const [sel, setSel] = useState<Selecao>(null);
  /** a promoção a escolher: os dois lances (promovendo e não) para a mesma casa */
  const [escolha, setEscolha] = useState<LanceS[] | null>(null);
  const estilo = prefs.shogiPecas;

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 's' ? 'g' : 's', h.pilha[0]!, h.lances);
  // contra o Linu, o jogador fica sempre embaixo: o tabuleiro gira quando o lado dele é o de cima
  const virado = contraLinu && LINU === 's';
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const doSel = useMemo(() => (sel === null ? [] : 'casa' in sel ? lancesDaPeca(state, sel.casa) : lancesDeDrop(state, sel.mao)), [state, sel]);
  const alvos = new Set(doSel.map((l) => l.para));

  const fazer = useCallback(
    (l: LanceS) => {
      const next = jogar(state, l.de, l.para, l.promove, l.drop ? l.tipo : 0);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      setEscolha(null);
      h.jogar(next, next.ultimo?.capturada ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    setEscolha(null);
    if (sel !== null && alvos.has(i)) {
      const ls = doSel.filter((l) => l.para === i);
      if (ls.length > 1) {
        haptics.tapLight();
        setEscolha(ls);
        return;
      }
      return fazer(ls[0]!);
    }
    const p = state.board[i]!;
    if (p !== 0 && corDe(p) === state.turn) {
      haptics.tapLight();
      setSel(sel && 'casa' in sel && sel.casa === i ? null : { casa: i });
    } else setSel(null);
  };

  const tocarMao = (cor: CorS, t: number) => {
    if (state.winner !== null || vezDoLinu || cor !== state.turn) return;
    haptics.tapLight();
    setEscolha(null);
    setSel(sel && 'mao' in sel && sel.mao === t ? null : { mao: t });
  };

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.shogi[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_SHOGI, ruido);
    if (m) fazer(m);
  });

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    setEscolha(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    setEscolha(null);
    h.desfazer(contraLinu && state.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: CorS) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const naMao = (c: CorS) => state.maos[c].reduce((a, b) => a + b, 0);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: state.fim === 'repeticao' ? 'Empate: a mesma posição pela quarta vez (sennichite)' : 'Empate combinado', tom: 'empate' as const }
        : (() => {
            const como = state.fim === 'mate' ? 'Xeque-mate' : state.fim === 'xeque-perpetuo' ? 'Xeque perpétuo é proibido' : 'Sem nenhum lance';
            if (!contraLinu) return { texto: `${como}! O ${NOME[state.winner].toLowerCase()} venceu!`, tom: 'vitoria' as const };
            return state.winner !== LINU ? { texto: `${como}! Você venceu o Linu!`, tom: 'vitoria' as const } : { texto: `${como}: o Linu venceu desta vez.`, tom: 'derrota' as const };
          })();

  const tipoSel = sel === null ? null : 'casa' in sel ? Math.abs(state.board[sel.casa]!) : sel.mao;
  const instrucao =
    tipoSel === null
      ? `${contraLinu ? (state.turn === LINU ? 'Vez do Linu' : 'Sua vez') : `Vez do ${NOME[state.turn].toLowerCase()}`}: toque numa peça para ver como ela anda.`
      : sel && 'mao' in sel
        ? `${maiuscula(NOMES_S[tipoSel]!)} (${KANJI[tipoSel]}) da mão: toque numa casa marcada para largá-lo.`
        : `${maiuscula(NOMES_S[tipoSel]!)} (${KANJI[tipoSel]}): ${COMO_ANDA[tipoSel]}.`;

  const ultimo = state.ultimo;
  const reiEmXeque = state.emXeque ? state.board.indexOf((state.turn === 's' ? 1 : -1) * T.K) : -1;
  const tamPeca = passo * 0.92;

  // as linhas da grade e os quatro pontos (hoshi) que marcam as zonas de promoção
  const linhas: [number, number, number, number][] = [];
  for (let k = 0; k <= n; k++) {
    linhas.push([0, k * passo, W, k * passo]);
    linhas.push([k * passo, 0, k * passo, W]);
  }

  /** a mão de um lado: as peças capturadas, por tipo, com quantas são */
  const mao = (cor: CorS) => {
    const tipos = TIPOS_MAO.filter((t) => state.maos[cor][t]! > 0);
    const chegou = ultimo?.capturada && state.turn !== cor ? desvirado(ultimo.capturada) : null;
    return (
      <View style={{ width: W + 14, minHeight: passo + 10, alignContent: 'center' }} className="flex-row flex-wrap items-center justify-center gap-1 rounded-xl bg-amber-100/70 px-1.5 py-1 dark:bg-amber-950/40">
        <Text className="mr-1 text-[11px] font-bold text-amber-900 dark:text-amber-200">{nomeDe(cor)}:</Text>
        {tipos.length === 0 && <Text className="text-[11px] text-amber-900/70 dark:text-amber-200/70">nenhuma peça na mão</Text>}
        {tipos.map((t) => {
          const ativo = sel !== null && 'mao' in sel && sel.mao === t && state.turn === cor;
          // na mão, a peça aponta para o adversário como no tabuleiro: com ele virado, a de baixo aponta para cima
          const peca = <PecaShogi tipo={t} cor={virado ? (cor === 's' ? 'g' : 's') : cor} tamanho={passo * 0.8} estilo={estilo} />;
          const nova = chegou === t;
          return (
            <Pressable
              key={t}
              accessibilityRole="button"
              accessibilityLabel={`${NOMES_S[t]} na mão de ${nomeDe(cor)}: ${state.maos[cor][t]}`}
              onPress={() => tocarMao(cor, t)}
              style={{ borderRadius: 8, borderWidth: 2, borderColor: ativo ? tema.selecao : 'transparent', paddingHorizontal: 2, flexDirection: 'row', alignItems: 'flex-end' }}
            >
              {nova ? <Surge key={`m${h.lances}`}>{peca}</Surge> : peca}
              {state.maos[cor][t]! > 1 && <Text className="text-xs font-extrabold text-amber-900 dark:text-amber-100">×{state.maos[cor][t]}</Text>}
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View className="items-center gap-2">
      {komaochi && (
        <View className="items-center gap-1">
          <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">{contraLinu ? 'O Linu (em cima) dá a vantagem e começa:' : 'O lado de cima dá a vantagem e começa:'}</Text>
          <View className="flex-row flex-wrap justify-center gap-1.5">
            {(Object.keys(NOMES_KOMAOCHI) as Komaochi[]).map((k) => (
              <Pressable
                key={k}
                accessibilityRole="button"
                accessibilityState={{ selected: vantagem === k }}
                onPress={() => {
                  setSel(null);
                  setEscolha(null);
                  setVantagem(k);
                }}
                className={`rounded-full border px-2.5 py-1 ${vantagem === k ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
              >
                <Text className={`text-xs font-bold ${vantagem === k ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{NOMES_KOMAOCHI[k]}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      <PlacarJogo
        jogadores={(['s', 'g'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaShogi tipo={T.K} cor={c} tamanho={20} estilo={estilo} />, extra: `${naMao(c)} na mão` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {escolha ? (
        <View style={{ minHeight: ALTURA_AVISO }} className="flex-row flex-wrap items-center justify-center gap-2">
          <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Promover?</Text>
          {[true, false].map((pro) => {
            const l = escolha.find((x) => x.promove === pro)!;
            return (
              <Pressable
                key={String(pro)}
                accessibilityRole="button"
                accessibilityLabel={pro ? 'Promover' : 'Não promover'}
                onPress={() => fazer(l)}
                className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 active:bg-slate-200 dark:bg-slate-800"
              >
                <PecaShogi tipo={pro ? promovido(l.tipo) : l.tipo} cor="s" tamanho={28} estilo={estilo} />
                <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{pro ? 'Sim' : 'Não'}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.emXeque && !vezDoLinu ? (
        <FaixaResultado texto={`Xeque! O rei do ${NOME[state.turn].toLowerCase()} precisa escapar`} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      {/* a mão de cada lado fica junto dele: a do jogador embaixo, também com o tabuleiro virado */}
      {mao(virado ? 's' : 'g')}
      <Moldura virado={virado} largura={W} altura={W} casa={passo} colunas={colunas} linhas={fileiras} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={W} tema={tema} unidade={passo * 2} />
        <Svg width={W} height={W} style={{ position: 'absolute', left: 0, top: 0 }}>
          {linhas.map(([x1, y1, x2, y2], k) => (
            <Line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={tema.linha} strokeWidth={1.2} />
          ))}
          {(mini ? [] : [3, 6]).flatMap((r) => [3, 6].map((c) => <Circle key={`${r}${c}`} cx={c * passo} cy={r * passo} r={Math.max(2.5, passo * 0.07)} fill={tema.linha} />))}
        </Svg>
        {state.board.map((p, i) => {
          const r = lx(i);
          const c = cx(i);
          const alvo = alvos.has(i);
          const selecionada = sel !== null && 'casa' in sel && sel.casa === i;
          const marcaUltimo = prefs.ultimoLance && ultimo && (ultimo.para === i || ultimo.de === i);
          const veioDe = ultimo && ultimo.para === i && !ultimo.drop ? ultimo.de : null;
          const largada = ultimo && ultimo.para === i && ultimo.drop;
          const peca = p !== 0 && <PecaShogi tipo={Math.abs(p)} cor={corDe(p)} tamanho={tamPeca} estilo={estilo} />;
          const fundo = selecionada ? tema.selecao : i === reiEmXeque ? tema.xeque : marcaUltimo ? tema.ultimo : null;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${colunas[c]}${fileiras[r]}${p ? `: ${NOMES_S[Math.abs(p)]} do ${NOME[corDe(p)].toLowerCase()}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: c * passo, top: r * passo, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {fundo && <View style={{ position: 'absolute', left: 1, top: 1, right: 1, bottom: 1, backgroundColor: fundo, opacity: selecionada ? 0.55 : 0.4 }} />}
              {alvo && !p && <View style={{ position: 'absolute', width: passo * (prefs.dicas ? 0.3 : 0.14), height: passo * (prefs.dicas ? 0.3 : 0.14), borderRadius: passo, backgroundColor: tema.dica, opacity: 0.9 }} />}
              {alvo && p !== 0 && <View style={{ position: 'absolute', left: 2, top: 2, right: 2, bottom: 2, borderRadius: 6, borderWidth: 3, borderColor: tema.captura }} />}
              {peca && veioDe !== null && prefs.animacoes ? (
                <Desliza key={h.lances} dx={(cx(veioDe) - c) * passo} dy={(lx(veioDe) - r) * passo}>
                  {peca}
                </Desliza>
              ) : peca && largada ? (
                <Surge key={`s${h.lances}`}>{peca}</Surge>
              ) : (
                peca
              )}
              {ultimo?.capturada && ultimo.para === i && <Estouro key={`e${h.lances}`} tamanho={passo} />}
            </Pressable>
          );
        })}
      </Moldura>
      {mao(virado ? 'g' : 's')}

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          state.winner === null && !contraLinu && h.lances > 0 ? (
            <Pressable accessibilityRole="button" onPress={() => h.jogar(combinarEmpateS(state))} className="rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800">
              <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Combinar empate</Text>
            </Pressable>
          ) : null
        }
      />
    </View>
  );
}
