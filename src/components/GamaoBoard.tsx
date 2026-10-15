import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Polygon, Rect, Stop, Text as SvgText } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { lanceGamao } from '@/services/jogos-ia';
import {
  createInitialState,
  agruparPassos,
  daCor,
  jogarMovimento,
  movimentosLegais,
  passarVez,
  pips,
  podePassar,
  rolar,
  type CorG,
  type DestinoG,
  type GamaoState,
  type MovimentoG,
  type OrigemG,
  type PassoG,
} from '@/services/gamao-engine';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorG, string> = { w: 'Claras', p: 'Escuras' };
const LADO: Record<CorG, 'clara' | 'escura'> = { w: 'clara', p: 'escura' };
/** 6 pontos, a barra, 6 pontos e a bandeja das peças tiradas */
const COLUNAS = 14;
const LINHAS = 12;

/** As bolinhas de cada face do dado, numa grade 3×3 (0 a 8). */
const FACES: Record<number, number[]> = { 1: [4], 2: [2, 6], 3: [2, 4, 6], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };

/** Um dado desenhado: a face e as bolinhas. */
function FaceDado({ n, tamanho, cor, usado }: { n: number; tamanho: number; cor: CorG; usado?: boolean }) {
  const fundo = cor === 'w' ? '#FBF7EE' : '#2A2622';
  const ponto = cor === 'w' ? '#1C1917' : '#F5EFE0';
  const b = tamanho * 0.17;
  return (
    <View
      style={{
        width: tamanho,
        height: tamanho,
        borderRadius: tamanho * 0.2,
        backgroundColor: fundo,
        borderWidth: 1.5,
        borderColor: cor === 'w' ? '#8A8170' : '#000',
        opacity: usado ? 0.35 : 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: tamanho * 0.1,
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1.5 },
        elevation: 3,
      }}
    >
      {Array.from({ length: 9 }, (_, k) => (
        <View key={k} style={{ width: '33.33%', height: '33.33%', alignItems: 'center', justifyContent: 'center' }}>
          {FACES[n]?.includes(k) && <View style={{ width: b, height: b, borderRadius: b, backgroundColor: ponto }} />}
        </View>
      ))}
    </View>
  );
}

/**
 * O dado que rola: gira e troca de face algumas vezes antes de parar no número sorteado (a chave da
 * rolagem remonta o componente e a animação roda de novo). Sem animações, aparece já parado.
 */
function DadoRolando({ n, tamanho, cor, usado, atraso = 0 }: { n: number; tamanho: number; cor: CorG; usado?: boolean; atraso?: number }) {
  const [prefs] = useJogosPrefs();
  const anima = prefs.animacoes;
  // a face que aparece enquanto o dado gira (null = já parou no número sorteado)
  const [girando, setGirando] = useState<number | null>(anima ? (n % 6) + 1 : null);
  const giro = useSharedValue(anima ? 1 : 0);
  const pulo = useSharedValue(0);
  useEffect(() => {
    if (!anima) return;
    giro.value = withTiming(0, { duration: 520 + atraso, easing: Easing.out(Easing.cubic) });
    pulo.value = withSequence(withTiming(-tamanho * 0.5, { duration: 160 }), withTiming(0, { duration: 260, easing: Easing.bounce }));
    let k = 0;
    const t = setInterval(() => {
      k++;
      if (k >= 6) {
        clearInterval(t);
        setGirando(null);
      } else setGirando(1 + Math.floor(Math.random() * 6));
    }, 80 + atraso / 6);
    // garantia: o número certo aparece mesmo se o intervalo for cortado
    const fim = setTimeout(() => setGirando(null), 700 + atraso);
    return () => {
      clearInterval(t);
      clearTimeout(fim);
    };
  }, [anima, n, atraso, giro, pulo, tamanho]);
  const face = anima && girando !== null ? girando : n;
  const estilo = useAnimatedStyle(() => ({ transform: [{ translateY: pulo.value }, { rotate: `${giro.value * 540}deg` }] }));
  return (
    <Animated.View style={estilo}>
      <FaceDado n={face} tamanho={tamanho} cor={cor} usado={usado} />
    </Animated.View>
  );
}

/**
 * A peça andando por um caminho de paradas (a soma dos dados: 3 e depois 5), ponto a ponto, até o
 * lugar dela. `pontos` são as distâncias de cada parada até o lugar final (o último é 0, 0). Com
 * `some`, ela some no fim (a peça tirada, que vira uma fatia na bandeja). Sem animações, ela só
 * aparece no lugar.
 */
function Percurso({ pontos, some = false, children }: { pontos: { x: number; y: number }[]; some?: boolean; children: ReactNode }) {
  const [prefs] = useJogosPrefs();
  const anima = prefs.animacoes && pontos.length > 1;
  const x = useSharedValue(anima ? pontos[0]!.x : 0);
  const y = useSharedValue(anima ? pontos[0]!.y : 0);
  const sobe = useSharedValue(1);
  const opa = useSharedValue(1);
  const trecho = 220;
  useEffect(() => {
    if (!anima) return;
    const resto = pontos.slice(1);
    const ease = { duration: trecho, easing: Easing.inOut(Easing.cubic) };
    x.value = withSequence(...resto.map((p) => withTiming(p.x, ease)));
    y.value = withSequence(...resto.map((p) => withTiming(p.y, ease)));
    // a peça “levanta” no começo e pousa no fim, como se fosse pega com a mão
    sobe.value = withSequence(withTiming(1.18, { duration: 120 }), withTiming(1.18, { duration: trecho * resto.length - 220 }), withTiming(1, { duration: 100 }));
    if (some) opa.value = withSequence(withTiming(1, { duration: trecho * resto.length }), withTiming(0, { duration: 160 }));
    // garantia: se o navegador pular quadros, a peça não fica parada no meio do caminho
    const t = setTimeout(() => {
      x.value = 0;
      y.value = 0;
      sobe.value = 1;
      if (some) opa.value = 0;
    }, trecho * resto.length + 500);
    return () => clearTimeout(t);
    // o caminho é fixo para cada toque (o componente remonta com a chave do lance)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anima]);
  const estilo = useAnimatedStyle(() => ({ opacity: opa.value, transform: [{ translateX: x.value }, { translateY: y.value }, { scale: sobe.value }] }));
  if (!anima) return some ? null : <View>{children}</View>;
  return <Animated.View style={[{ zIndex: 5 }, estilo]}>{children}</Animated.View>;
}

/**
 * Gamão (ver `gamao-engine.ts`): role os dados, toque numa peça e depois num ponto marcado. As claras
 * andam do ponto 24 para o 1 (a casa delas fica embaixo, à direita) e as escuras ao contrário. A dois
 * no mesmo aparelho ou contra o Linu (ele fica com as escuras).
 */
export function GamaoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const c = useCasa(COLUNAS, 40, 20);
  const W = c * COLUNAS;
  const H = c * LINHAS;
  const d = c * 0.92;
  // as variantes: 'hypergammon' (3 peças de cada lado) e 'tavla' (abertura rolada de novo, sem backgammon)
  const [variante] = useVariante('gamao');
  const regra = variante === 'hypergammon' || variante === 'tavla' ? variante : '';
  const inicio = useCallback(() => createInitialState(regra), [regra]);
  const h = useHistorico<GamaoState>(inicio, regra ? `gamao:${regra}` : 'gamao');
  const state = h.state;
  const xp = useXpDeVitoria('gamao');
  const [sel, setSel] = useState<OrigemG | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'p' && state.winner === null && state.fase !== 'abrir';
  // os movimentos de agora: com um dado só ou com a soma de vários na mesma peça
  const legais = useMemo(() => movimentosLegais(state), [state]);
  const origensValidas = useMemo(() => new Set<OrigemG>(legais.map((m) => m.de)), [legais]);
  // com uma origem só (ex. a peça na barra), ela já vem escolhida
  const selEf: OrigemG | null = sel !== null && origensValidas.has(sel) ? sel : origensValidas.size === 1 ? [...origensValidas][0]! : null;
  /** para onde a peça escolhida pode ir, com o dado ou a soma que ela usa */
  const alvos = useMemo(() => {
    const m = new Map<DestinoG, MovimentoG>();
    if (selEf === null) return m;
    for (const x of legais) if (x.de === selEf) m.set(x.para, x);
    return m;
  }, [legais, selEf]);

  const fimDeJogo = useCallback(
    (next: GamaoState) => {
      if (next.winner === 'w' || (next.winner === 'p' && !contraLinu)) xp.dar();
    },
    [contraLinu, xp],
  );

  const mover = useCallback(
    (m: MovimentoG) => {
      const next = jogarMovimento(state, m);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, m.passos.some((p) => p.bateu) ? 'captura' : undefined);
      fimDeJogo(next);
    },
    [state, h, fimDeJogo],
  );

  const rolarDados = useCallback(() => {
    if (state.fase !== 'abrir' && state.fase !== 'rolar') return;
    haptics.tapLight();
    setSel(null);
    // a rolagem entra no histórico com o som dos dados no lugar do som da peça
    h.jogar(rolar(state), 'dados');
  }, [state, h]);

  const passar = useCallback(() => {
    if (!podePassar(state)) return;
    haptics.tapLight();
    setSel(null);
    h.jogar(passarVez(state));
  }, [state, h]);

  const tocarOrigem = (o: OrigemG) => {
    if (state.winner !== null || vezDoLinu || state.fase !== 'mover') return;
    if (selEf !== null && typeof o === 'number' && alvos.has(o)) return mover(alvos.get(o)!);
    if (origensValidas.has(o)) {
      haptics.tapLight();
      setSel(o === sel ? null : o);
    } else setSel(null);
  };

  // a vez do Linu: rola, joga uma peça por vez (com a soma dos dados, se ela anda mais de um) e passa
  const plano = useRef<{ rolagem: number; movimentos: MovimentoG[] } | null>(null);
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (state.fase === 'rolar') {
        h.jogar(rolar(state), 'dados');
        return;
      }
      if (state.fase !== 'mover') return;
      if (!plano.current || plano.current.rolagem !== state.rolagens) plano.current = { rolagem: state.rolagens, movimentos: agruparPassos(lanceGamao(state, prefs.nivel)) };
      // o próximo movimento é o que começa no passo em que a vez está
      let feitos = 0;
      const m = plano.current.movimentos.find((x) => {
        const achou = feitos === state.passos.length;
        feitos += x.passos.length;
        return achou;
      });
      if (m) {
        const next = jogarMovimento(state, m);
        if (next !== state) {
          h.jogar(next, m.passos.some((p) => p.bateu) ? 'captura' : undefined);
          fimDeJogo(next);
          return;
        }
      }
      h.jogar(passarVez(state));
    },
    state.fase === 'rolar' ? 600 : 750,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    plano.current = null;
    h.reiniciar();
    xp.zerar();
  };
  // desfazer só volta os passos da vez de agora: os dados já rolados não voltam
  const podeDesfazer = state.fase === 'mover' && state.passos.length > 0 && !vezDoLinu && !pensando && state.winner === null;
  const desfazer = () => {
    if (!podeDesfazer) return;
    haptics.tapLight();
    setSel(null);
    h.desfazer(1);
  };

  const nomeDe = (cor: CorG) => (contraLinu ? (cor === 'w' ? 'Você' : 'Linu') : NOME[cor]);
  const resultado = (() => {
    if (state.winner === null) return null;
    const como = state.vitoria === 'backgammon' ? 'Backgammon (3 pontos)' : state.vitoria === 'gamao' ? 'Gamão (2 pontos)' : 'Vitória simples (1 ponto)';
    if (!contraLinu) return { texto: `${como}: as ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const };
    return state.winner === 'w' ? { texto: `${como}: você venceu o Linu!`, tom: 'vitoria' as const } : { texto: `${como}: o Linu venceu desta vez.`, tom: 'derrota' as const };
  })();

  const vez = NOME[state.turn].toLowerCase();
  const instrucao = (() => {
    if (state.fase === 'abrir') {
      if (state.abertura && state.abertura[0] === state.abertura[1]) return 'Empate nos dados: rolem de novo para ver quem começa.';
      return 'Cada lado rola um dado: quem tirar mais começa, usando os dois números.';
    }
    if (state.fase === 'rolar') {
      // na tavla, quem ganha a abertura rola de novo os dois dados
      if (state.regra === 'tavla' && state.abertura && h.pilha[h.pilha.length - 2]?.fase === 'abrir')
        return `As claras tiraram ${state.abertura[0]} e as escuras, ${state.abertura[1]}: as ${vez} começam e, na tavla, rolam de novo os dois dados.`;
      return `Vez das ${vez}: role os dados.`;
    }
    if (podePassar(state)) return state.passos.length > 0 ? 'Dados usados. Toque em “Passar a vez”.' : `Nenhum lance possível com ${state.dados.join(' e ')}: a vez passa.`;
    if (state.bar[state.turn] > 0) return `Vez das ${vez}: primeiro, entre com a peça da barra.`;
    if (selEf !== null) return `Toque num ponto marcado${alvos.has('fora') ? ', ou na bandeja para tirar a peça' : ''}: o número é o dado que a peça usa, ou a soma (3+5) para andar com vários de uma vez.`;
    // logo depois da abertura, conta quem tirou quanto
    const anterior = h.pilha[h.pilha.length - 2];
    if (state.abertura && state.passos.length === 0 && anterior?.fase === 'abrir')
      return `As claras tiraram ${state.abertura[0]} e as escuras, ${state.abertura[1]}: as ${vez} começam, com ${state.dados.join(' e ')}. Toque numa peça.`;
    return `Vez das ${vez}: toque numa peça para movê-la.`;
  })();

  // ── geometria ──────────────────────────────────────────────────────────────────────────────────
  /** a coluna e se está em cima de cada índice (as claras têm a casa embaixo, à direita) */
  const colDe = (i: number) => (i < 6 ? 12 - i : i < 12 ? 11 - i : i < 18 ? i - 12 : i - 11);
  const emCima = (i: number) => i >= 12;
  const ALTO = c * 5;
  const gapPilha = (n: number) => (n <= 5 ? d : (ALTO - d) / (n - 1));
  /** o centro da k-ésima peça (0 = a da ponta de fora) de um ponto com n peças */
  const centroPeca = (i: number, k: number, n: number) => {
    const x = colDe(i) * c + c / 2;
    const y = emCima(i) ? d / 2 + 2 + k * gapPilha(n) : H - d / 2 - 2 - k * gapPilha(n);
    return { x, y };
  };
  /** as peças na barra: as claras na metade de cima, as escuras na de baixo, perto do meio */
  const centroBarra = (cor: CorG, k: number) => ({ x: 6 * c + c / 2, y: cor === 'w' ? H / 2 - c * 1.2 - d / 2 - k * d * 0.6 : H / 2 + c * 1.2 + d / 2 + k * d * 0.6 });

  // o último toque (um dado só, ou a soma de vários): os passos que entraram desde a posição anterior
  const anterior = h.pilha[h.pilha.length - 2];
  const acao: PassoG[] = anterior && anterior.fase === 'mover' && anterior.turn === state.turn && state.passos.length > anterior.passos.length ? state.passos.slice(anterior.passos.length) : [];
  const ultimo = acao.length > 0 ? acao[acao.length - 1]! : null;
  const primeiro = acao[0] ?? null;
  /** o caminho da peça, da origem às paradas do meio (no estado de agora) */
  const caminho = (() => {
    if (!primeiro || !ultimo) return [];
    const cor = primeiro.cor;
    const pontosXY = [];
    if (primeiro.de === 'bar') pontosXY.push(centroBarra(cor, state.bar[cor]));
    else {
      const n = daCor(state.pts, primeiro.de, cor);
      pontosXY.push(centroPeca(primeiro.de, n, n + 1));
    }
    for (const p of acao.slice(0, -1)) {
      if (typeof p.para !== 'number') continue;
      const n = daCor(state.pts, p.para, cor);
      pontosXY.push(centroPeca(p.para, n, n + 1));
    }
    return pontosXY;
  })();
  const batidas = acao.filter((p) => p.bateu && typeof p.para === 'number').map((p) => p.para as number);
  /** a peça andando pelo caminho até (x, y) */
  const andando = (x: number, y: number, disco: ReactNode, some = false) => (
    <Percurso key={`c${h.lances}`} pontos={[...caminho.map((q) => ({ x: q.x - x, y: q.y - y })), { x: 0, y: 0 }]} some={some}>
      {disco}
    </Percurso>
  );

  // ── desenho do tabuleiro (os triângulos, a barra e a bandeja) ────────────────────────────────────
  const triangulos = [];
  for (let i = 0; i < 24; i++) {
    const x0 = colDe(i) * c;
    const cima = emCima(i);
    const pontaY = cima ? ALTO : H - ALTO;
    const baseY = cima ? 0 : H;
    const cor = i % 2 === 0 ? tema.escuro : tema.claro;
    triangulos.push(<Polygon key={`t${i}`} points={`${x0 + 1},${baseY} ${x0 + c - 1},${baseY} ${x0 + c / 2},${pontaY}`} fill={cor} stroke={tema.linha} strokeWidth={0.6} strokeOpacity={0.5} />);
    // o número do ponto, do lado de quem tem a vez (contra o Linu, sempre o seu)
    const num = contraLinu || state.turn === 'w' ? i + 1 : 24 - i;
    triangulos.push(
      <SvgText key={`n${i}`} x={x0 + c / 2} y={cima ? ALTO + c * 0.42 : H - ALTO - c * 0.18} fontSize={c * 0.34} fontWeight="bold" fill={tema.linha} opacity={0.55} textAnchor="middle">
        {num}
      </SvgText>,
    );
  }

  const pecas = [];
  for (let i = 0; i < 24; i++) {
    const n = Math.abs(state.pts[i]!);
    const cor: CorG = state.pts[i]! > 0 ? 'w' : 'p';
    for (let k = 0; k < n; k++) {
      const { x, y } = centroPeca(i, k, n);
      const topo = k === n - 1;
      const chegou = !!(topo && ultimo && ultimo.para === i && ultimo.cor === cor);
      const disco = <PecaRedonda jogo="gamao" lado={LADO[cor]} tamanho={d} />;
      pecas.push(
        <View key={`p${i}-${k}-${chegou ? h.lances : 0}`} style={{ position: 'absolute', left: x - d / 2, top: y - d / 2, width: d, height: d, zIndex: chegou ? 6 : 2, pointerEvents: 'none' }}>
          {chegou && prefs.animacoes ? andando(x, y, disco) : disco}
          {topo && n > 5 && (
            <View style={{ position: 'absolute', left: 0, top: 0, width: d, height: d, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: d * 0.42, fontWeight: '900', color: cor === 'w' ? '#1C1917' : '#FFFFFF' }}>{n}</Text>
            </View>
          )}
        </View>,
      );
    }
    // o estouro em cada ponto onde a peça bateu (no fim ou numa parada do meio)
    const k = batidas.indexOf(i);
    if (k >= 0) {
      const { x, y } = centroPeca(i, 0, Math.max(1, n));
      pecas.push(
        <View key={`e${h.lances}-${i}`} style={{ position: 'absolute', left: x - c / 2, top: y - c / 2, width: c, height: c, zIndex: 8, pointerEvents: 'none' }}>
          <Estouro key={`e${h.lances}`} tamanho={c} />
        </View>,
      );
    }
  }
  // na barra
  for (const cor of ['w', 'p'] as const) {
    for (let k = 0; k < state.bar[cor]; k++) {
      const { x, y } = centroBarra(cor, k);
      // as peças batidas neste toque são as últimas da barra, na ordem das batidas
      const t = ultimo && cor !== ultimo.cor ? k - (state.bar[cor] - batidas.length) : -1;
      const batida = t >= 0;
      const disco = <PecaRedonda jogo="gamao" lado={LADO[cor]} tamanho={d} />;
      const de = batida ? centroPeca(batidas[t]!, 0, 1) : null;
      pecas.push(
        <View key={`b${cor}${k}-${batida ? h.lances : 0}`} style={{ position: 'absolute', left: x - d / 2, top: y - d / 2, width: d, height: d, zIndex: 7, pointerEvents: 'none' }}>
          {de && prefs.animacoes ? (
            <Desliza key={`b${h.lances}`} dx={de.x - x} dy={de.y - y} duracao={320}>
              {disco}
            </Desliza>
          ) : (
            disco
          )}
        </View>,
      );
    }
  }

  // a bandeja: as peças tiradas, deitadas (as escuras em cima, as claras embaixo)
  const fatia = Math.min(c * 0.32, (ALTO - c * 0.6) / 15);
  const bandeja = (['p', 'w'] as const).map((cor) =>
    Array.from({ length: state.fora[cor] }, (_, k) => {
      const y = cor === 'p' ? 4 + k * fatia : H - 4 - (k + 1) * fatia;
      const nova = ultimo?.para === 'fora' && ultimo.cor === cor && k === state.fora[cor] - 1;
      const barra = (
        <View
          style={{
            width: c * 0.8,
            height: fatia - 1,
            borderRadius: 2,
            backgroundColor: cor === 'w' ? '#F6F3EA' : '#1C1F24',
            borderWidth: 1,
            borderColor: cor === 'w' ? '#2B2B2B' : '#000',
          }}
        />
      );
      return (
        <View key={`f${cor}${k}-${nova ? h.lances : 0}`} style={{ position: 'absolute', left: 13 * c + c * 0.1, top: y, pointerEvents: 'none' }}>
          {nova ? <Surge key={h.lances}>{barra}</Surge> : barra}
        </View>
      );
    }),
  );

  // a peça tirada: um “fantasma” dela anda pelo caminho até a bandeja e some
  const fantasma =
    ultimo?.para === 'fora' && prefs.animacoes
      ? (() => {
          const cor = ultimo.cor;
          const k = state.fora[cor] - 1;
          const x = 13 * c + c / 2;
          const y = (cor === 'p' ? 4 + k * fatia : H - 4 - (k + 1) * fatia) + fatia / 2;
          return (
            <View key={`g${h.lances}`} style={{ position: 'absolute', left: x - d / 2, top: y - d / 2, width: d, height: d, zIndex: 9, pointerEvents: 'none' }}>
              {andando(x, y, <PecaRedonda jogo="gamao" lado={LADO[cor]} tamanho={d} />, true)}
            </View>
          );
        })()
      : null;

  // os dados no meio, do lado de quem rola
  const tamDado = Math.max(18, c * 0.85);
  const restamCopia = [...state.restam];
  const listaDados = state.fase === 'abrir' || state.dados.length === 0 ? [] : state.dados[0] === state.dados[1] && state.fase !== 'rolar' ? [state.dados[0]!, state.dados[0]!, state.dados[0]!, state.dados[0]!] : state.dados;
  const dadosVisiveis = listaDados.map((n) => {
    const k = restamCopia.indexOf(n);
    if (k >= 0) restamCopia.splice(k, 1);
    return { n, usado: state.fase === 'mover' && k < 0 };
  });
  const metadeX = (cor: CorG) => (cor === 'w' ? 7 * c : 0);
  const podeRolar = (state.fase === 'abrir' || state.fase === 'rolar') && !vezDoLinu && state.winner === null;
  const meio = (
    <>
      {state.fase === 'abrir' && state.abertura && (
        <>
          {(['w', 'p'] as const).map((cor, j) => (
            <View key={`ab${cor}${state.rolagens}`} style={{ position: 'absolute', left: metadeX(cor) + 3 * c - tamDado / 2, top: H / 2 - tamDado / 2, zIndex: 9, pointerEvents: 'none' }}>
              <DadoRolando n={state.abertura![j]!} tamanho={tamDado} cor={cor} />
            </View>
          ))}
        </>
      )}
      {state.fase !== 'abrir' && state.dados.length > 0 && state.fase !== 'rolar' && state.winner === null && (
        <View
          style={{ position: 'absolute', left: metadeX(state.turn), width: 6 * c, top: H / 2 - tamDado / 2, height: tamDado, flexDirection: 'row', justifyContent: 'center', gap: c * 0.25, zIndex: 9, pointerEvents: 'none' }}
        >
          {dadosVisiveis.map((x, k) => (
            <DadoRolando key={`${state.rolagens}-${k}`} n={x.n} tamanho={dadosVisiveis.length > 2 ? tamDado * 0.85 : tamDado} cor={state.turn} usado={x.usado} atraso={k * 60} />
          ))}
        </View>
      )}
      {podeRolar && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Rolar os dados"
          onPress={rolarDados}
          style={{
            position: 'absolute',
            left: (state.fase === 'abrir' ? 3.5 * c : metadeX(state.turn)) + c * 0.6,
            width: (state.fase === 'abrir' ? 7 : 6) * c - c * 1.2,
            top: H / 2 - c * 0.75,
            height: c * 1.5,
            borderRadius: c,
            backgroundColor: 'rgba(0,0,0,0.55)',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 6,
            zIndex: 12,
          }}
        >
          <FaceDado n={5} tamanho={c * 0.8} cor="w" />
          <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: Math.max(11, c * 0.42) }}>Rolar</Text>
        </Pressable>
      )}
    </>
  );

  // os alvos: os pontos marcados e a bandeja. Com as dicas ligadas, cada marca mostra quanto a peça
  // anda: o número de um dado, ou a soma (com um anel branco) quando ela usa vários dados juntos
  const rotulo = (m: MovimentoG) => m.passos.map((p) => p.dado).join('+');
  const andaTotal = (m: MovimentoG) => m.passos.reduce((t, p) => t + p.dado, 0);
  const marcas = [];
  for (const [para, m] of alvos) {
    if (para === 'fora') continue;
    const n = daCor(state.pts, para, state.turn);
    const { x, y } = centroPeca(para, Math.min(n, 4), Math.max(n + 1, 1));
    const soma = m.passos.length > 1;
    const lado = prefs.dicas ? d * 0.84 : d * 0.4;
    marcas.push(
      <View
        key={`a${para}`}
        accessibilityLabel={soma ? `${rotulo(m)} = ${andaTotal(m)}` : `${andaTotal(m)}`}
        style={{
          position: 'absolute',
          left: x - lado / 2,
          top: y - lado / 2,
          width: lado,
          height: lado,
          borderRadius: d,
          backgroundColor: tema.dica,
          borderWidth: soma && prefs.dicas ? 2 : 0,
          borderColor: '#FFFFFF',
          opacity: 0.92,
          zIndex: 4,
          pointerEvents: 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {prefs.dicas && <Text style={{ color: '#FFFFFF', fontWeight: '900', fontSize: Math.max(9, d * (andaTotal(m) >= 10 ? 0.4 : 0.48)) }}>{andaTotal(m)}</Text>}
      </View>,
    );
  }

  const destaqueOrigem = (() => {
    if (selEf === null) return null;
    let xy;
    if (selEf === 'bar') xy = centroBarra(state.turn, state.bar[state.turn] - 1);
    else {
      const n = daCor(state.pts, selEf, state.turn);
      xy = centroPeca(selEf, n - 1, n);
    }
    return (
      <View
        style={{ position: 'absolute', left: xy.x - d / 2 - 3, top: xy.y - d / 2 - 3, width: d + 6, height: d + 6, borderRadius: d, borderWidth: 3, borderColor: tema.selecao, zIndex: 7, pointerEvents: 'none' }}
      />
    );
  })();

  // o último toque: um anel no ponto de onde a peça saiu
  const marcaUltimo =
    prefs.ultimoLance && primeiro && typeof primeiro.de === 'number'
      ? (() => {
          const n = daCor(state.pts, primeiro.de, primeiro.cor);
          const { x, y } = centroPeca(primeiro.de, n, n + 1);
          return <View style={{ position: 'absolute', left: x - d * 0.3, top: y - d * 0.3, width: d * 0.6, height: d * 0.6, borderRadius: d, borderWidth: 2, borderColor: tema.ultimo, zIndex: 3, pointerEvents: 'none' }} />;
        })()
      : null;

  // as áreas de toque: cada ponto (a metade do tabuleiro), a barra e a bandeja
  const toques = [];
  for (let i = 0; i < 24; i++) {
    const n = Math.abs(state.pts[i]!);
    toques.push(
      <Pressable
        key={`q${i}`}
        accessibilityLabel={`Ponto ${contraLinu || state.turn === 'w' ? i + 1 : 24 - i}${n ? `: ${n} ${state.pts[i]! > 0 ? 'claras' : 'escuras'}` : ''}`}
        onPress={() => tocarOrigem(i)}
        style={{ position: 'absolute', left: colDe(i) * c, top: emCima(i) ? 0 : H - ALTO - c * 0.5, width: c, height: ALTO + c * 0.5, zIndex: 11 }}
      />,
    );
  }
  toques.push(
    <Pressable key="barra" accessibilityLabel="Barra" onPress={() => tocarOrigem('bar')} style={{ position: 'absolute', left: 6 * c, top: 0, width: c, height: H, zIndex: 11 }} />,
  );
  const bandejaAlvo = alvos.has('fora');
  toques.push(
    <Pressable
      key="bandeja"
      accessibilityLabel="Bandeja das peças tiradas"
      onPress={() => {
        const m = alvos.get('fora');
        if (m) mover(m);
      }}
      style={{
        position: 'absolute',
        left: 13 * c,
        top: state.turn === 'w' ? H / 2 : 0,
        width: c,
        height: H / 2,
        zIndex: 11,
        borderRadius: 4,
        borderWidth: bandejaAlvo ? 3 : 0,
        borderColor: tema.dica,
        backgroundColor: bandejaAlvo && prefs.dicas ? tema.dica : 'transparent',
        opacity: bandejaAlvo ? 0.75 : 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {bandejaAlvo && prefs.dicas && <Text style={{ color: '#FFFFFF', fontWeight: '900', fontSize: Math.max(9, c * 0.36), textAlign: 'center' }}>{alvos.get('fora')!.passos.map((p) => p.dado).join('\n+')}</Text>}
    </Pressable>,
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'p'] as const).map((cor) => ({
          id: cor,
          nome: nomeDe(cor),
          amostra: <PecaRedonda jogo="gamao" lado={LADO[cor]} tamanho={18} />,
          extra: `${pips(state, cor)} pips${state.fora[cor] ? ` · ${state.fora[cor]} fora` : ''}`,
        }))}
        vez={state.turn}
        terminou={state.winner !== null || state.fase === 'abrir'}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={W} altura={H} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={H} tema={tema} unidade={c * 2} />
        <Svg width={W} height={H} style={{ position: 'absolute', left: 0, top: 0 }}>
          <Defs>
            <LinearGradient id="gamao-barra" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#000" stopOpacity={0.35} />
              <Stop offset="0.5" stopColor="#000" stopOpacity={0.15} />
              <Stop offset="1" stopColor="#000" stopOpacity={0.35} />
            </LinearGradient>
          </Defs>
          {triangulos}
          {/* a barra no meio e a bandeja à direita */}
          <Rect x={6 * c} y={0} width={c} height={H} fill={tema.moldura} />
          <Rect x={6 * c} y={0} width={c} height={H} fill="url(#gamao-barra)" />
          <Rect x={13 * c} y={0} width={c} height={H} fill={tema.moldura} opacity={0.85} />
          <Rect x={13 * c + 2} y={2} width={c - 4} height={H / 2 - 4} rx={3} fill="#000" opacity={0.22} />
          <Rect x={13 * c + 2} y={H / 2 + 2} width={c - 4} height={H / 2 - 4} rx={3} fill="#000" opacity={0.22} />
        </Svg>
        {marcaUltimo}
        {pecas}
        {bandeja}
        {fantasma}
        {marcas}
        {destaqueOrigem}
        {meio}
        {toques}
      </Moldura>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={podeDesfazer}
        extra={
          podePassar(state) && !vezDoLinu ? (
            <Pressable accessibilityRole="button" onPress={passar} className="rounded-full bg-emerald-600 px-3.5 py-2 active:bg-emerald-700 dark:bg-emerald-500">
              <Text className="text-sm font-bold text-white">Passar a vez</Text>
            </Pressable>
          ) : podeRolar ? (
            <Pressable accessibilityRole="button" onPress={rolarDados} className="rounded-full bg-emerald-600 px-3.5 py-2 active:bg-emerald-700 dark:bg-emerald-500">
              <Text className="text-sm font-bold text-white">Rolar os dados</Text>
            </Pressable>
          ) : null
        }
      />
    </View>
  );
}
