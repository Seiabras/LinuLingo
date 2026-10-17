import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';
import Animated, {
  BounceIn,
  Easing,
  FlipInEasyY,
  ReducedMotionConfig,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { animacoesDoJogo, useMovimento } from '@/services/accessibility';

export function useAnimacoesDoJogo() {
  const [prefs] = useJogosPrefs();
  return animacoesDoJogo(prefs, useMovimento(), useReducedMotion());
}

/** Fica montado na tela do jogo: com “Animações” escolhida, as peças animam mesmo com o aparelho pedindo menos movimento. */
export function MovimentoDoJogo() {
  const { porCima } = useAnimacoesDoJogo();
  return porCima ? <ReducedMotionConfig mode={ReduceMotion.Never} /> : null;
}

/**
 * Animações dos tabuleiros. Todas respeitam a opção “Animações” da personalização (e o “reduzir
 * movimento” do aparelho, que a Reanimated já segue): desligadas, a peça só aparece no lugar.
 * Para animar só a peça que mexeu, quem usa dá a ela uma `key` nova a cada lance (ex. o número do
 * lance): a peça remonta e a animação de entrada roda uma vez.
 */
function useAnima() {
  return useAnimacoesDoJogo().ligadas;
}

/** A peça nasce crescendo (peça colocada: go, reversi, trilha, ligue 4 sem queda). */
export function Surge({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  const anima = useAnima();
  const k = useSharedValue(anima ? 0.2 : 1);
  useEffect(() => {
    if (!anima) return;
    k.value = withTiming(1, { duration: 220, easing: Easing.out(Easing.back(1.6)) });
    // a mesma garantia do Desliza: a peça nunca fica pequena demais se a animação travar
    const t = setTimeout(() => {
      k.value = 1;
    }, 650);
    return () => clearTimeout(t);
  }, [anima, k]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ scale: k.value }] }));
  if (!anima) return <View style={style}>{children}</View>;
  return <Animated.View style={[style, estilo]}>{children}</Animated.View>;
}

/** A peça vira (as peças do reversi trocam de cor girando). */
export function Vira({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  const anima = useAnima();
  if (!anima) return <View style={style}>{children}</View>;
  return (
    <Animated.View entering={FlipInEasyY.duration(320)} style={style}>
      {children}
    </Animated.View>
  );
}

/**
 * A peça desliza da casa de onde veio até a casa nova: `dx`/`dy` é a distância em pixels da casa
 * de origem até a de destino (origem − destino). Monta já deslocada e volta para o zero.
 */
export function Desliza({ dx, dy, children, duracao = 200, quica = false }: { dx: number; dy: number; children: ReactNode; duracao?: number; quica?: boolean }) {
  const anima = useAnima();
  const x = useSharedValue(anima ? dx : 0);
  const y = useSharedValue(anima ? dy : 0);
  useEffect(() => {
    if (!anima) return;
    const easing = quica ? Easing.bounce : Easing.out(Easing.cubic);
    x.value = withTiming(0, { duration: duracao + 60, easing });
    y.value = withTiming(0, { duration: duracao + 60, easing });
    // garantia: se o navegador atrasar ou pular os quadros da animação, a peça não fica parada no
    // meio do caminho (no Ligue 4, a peça ficava presa acima do tabuleiro e parecia sumir)
    const t = setTimeout(() => {
      x.value = 0;
      y.value = 0;
    }, duracao + 400);
    return () => clearTimeout(t);
  }, [anima, duracao, quica, x, y]);
  // a peça “levanta” no meio do caminho (cresce um pouco e volta), como se fosse pega com a mão
  const estilo = useAnimatedStyle(() => {
    const dist = Math.hypot(dx, dy) || 1;
    const falta = Math.hypot(x.value, y.value) / dist;
    const sobe = quica ? 1 : 1 + 0.18 * Math.sin(Math.PI * falta);
    return { transform: [{ translateX: x.value }, { translateY: y.value }, { scale: sobe }] };
  });
  return <Animated.View style={[{ zIndex: 5 }, estilo]}>{children}</Animated.View>;
}

// o ângulo do tabuleiro virado (0 a 180°), para as peças lá dentro girarem de volta e ficarem de pé
const GiroContext = createContext<SharedValue<number> | null>(null);

/**
 * O tabuleiro gira meia volta para o jogador ficar sempre embaixo (pedido do dono, 17/10/2026: contra
 * o Linu, quem joga não pode ficar com as peças de cima). Gira com animação quando `virado` muda
 * (partida nova, outra escolha de quem começa); ao abrir o jogo já virado, aparece direto virado.
 * Os toques seguem o desenho girado, então o tabuleiro não precisa traduzir as casas.
 */
export function Gira({ virado, children, style }: { virado: boolean; children: ReactNode; style?: ViewStyle }) {
  const anima = useAnima();
  const giro = useSharedValue(virado ? 180 : 0);
  useEffect(() => {
    const alvo = virado ? 180 : 0;
    if (giro.value === alvo) return;
    if (!anima) {
      giro.value = alvo;
      return;
    }
    giro.value = withTiming(alvo, { duration: 700, easing: Easing.inOut(Easing.cubic) });
    // a mesma garantia do Desliza: o tabuleiro nunca fica torto se a animação travar
    const t = setTimeout(() => {
      giro.value = alvo;
    }, 1100);
    return () => clearTimeout(t);
  }, [virado, anima, giro]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ rotate: `${giro.value}deg` }] }));
  return (
    <GiroContext.Provider value={giro}>
      <Animated.View style={[style, estilo]}>{children}</Animated.View>
    </GiroContext.Provider>
  );
}

/**
 * Uma peça dentro do tabuleiro virado gira de volta junto com ele, para a figura não ficar de cabeça
 * para baixo. Fora de um tabuleiro virado (ou dentro de outra peça que já desvirou), não faz nada.
 */
export function Desvira({ children }: { children: ReactNode }) {
  const giro = useContext(GiroContext);
  const estilo = useAnimatedStyle(() => ({ transform: [{ rotate: `${-(giro?.value ?? 0)}deg` }] }));
  if (!giro) return <>{children}</>;
  return (
    <GiroContext.Provider value={null}>
      <Animated.View style={estilo}>{children}</Animated.View>
    </GiroContext.Provider>
  );
}

/** Entrada do aviso de fim de jogo. */
export function Comemora({ children }: { children: ReactNode }) {
  const anima = useAnima();
  if (!anima) return <View>{children}</View>;
  return <Animated.View entering={BounceIn.duration(500)}>{children}</Animated.View>;
}

/** Cresce um pouco quando `ativo` (a vez de quem joga). */
export function Destaca({ ativo, children }: { ativo: boolean; children: ReactNode }) {
  const anima = useAnima();
  const s = useSharedValue(ativo ? 1.06 : 1);
  useEffect(() => {
    s.value = anima ? withTiming(ativo ? 1.06 : 1, { duration: 180 }) : ativo ? 1.06 : 1;
  }, [anima, ativo, s]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ scale: s.value }] }));
  return <Animated.View style={estilo}>{children}</Animated.View>;
}

/** Uma faísca do estouro, voando para fora numa das 6 direções. */
function Faisca({ k, t, tamanho, cor }: { k: number; t: SharedValue<number>; tamanho: number; cor: string }) {
  const estilo = useAnimatedStyle(() => {
    const a = (k / 6) * 2 * Math.PI;
    return { opacity: 1 - t.value, transform: [{ translateX: Math.cos(a) * tamanho * 0.6 * t.value }, { translateY: Math.sin(a) * tamanho * 0.6 * t.value }] };
  });
  return <Animated.View style={[{ position: 'absolute', width: 6, height: 6, borderRadius: 3, backgroundColor: k % 2 ? cor : '#FFFFFF' }, estilo]} />;
}

/**
 * Estouro de captura: um anel que se abre e some, com faíscas, no lugar da peça capturada. Quem usa
 * põe dentro de uma View do tamanho da casa e muda a `key` a cada lance.
 */
export function Estouro({ tamanho, cor = '#F59E0B' }: { tamanho: number; cor?: string }) {
  const anima = useAnima();
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withTiming(1, { duration: 480, easing: Easing.out(Easing.cubic) });
  }, [t]);
  const anel = useAnimatedStyle(() => ({ opacity: 1 - t.value, transform: [{ scale: 0.4 + t.value * 1.1 }] }));
  if (!anima) return null;
  return (
    <View style={{ position: 'absolute', width: tamanho, height: tamanho, alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 20 }}>
      <Animated.View style={[{ position: 'absolute', width: tamanho * 0.8, height: tamanho * 0.8, borderRadius: tamanho, borderWidth: 3, borderColor: cor }, anel]} />
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <Faisca key={k} k={k} t={t} tamanho={tamanho} cor={cor} />
      ))}
    </View>
  );
}

/**
 * A peça sai de cena: encolhe e some, andando `dx`/`dy` pixels (a bolinha do abalone que cai do
 * tabuleiro, a peça capturada do octi, as sementes capturadas do oware). Quem usa põe no lugar de onde
 * a peça sai e muda a `key` a cada lance. Com as animações desligadas, não desenha nada.
 */
export function Some({ dx = 0, dy = 0, duracao = 520, atraso = 0, children }: { dx?: number; dy?: number; duracao?: number; atraso?: number; children: ReactNode }) {
  const anima = useAnima();
  const t = useSharedValue(0);
  useEffect(() => {
    if (!anima) return;
    t.value = withDelay(atraso, withTiming(1, { duration: duracao, easing: Easing.in(Easing.quad) }));
    // garantia: se a animação travar, a peça não fica parada no tabuleiro
    const g = setTimeout(() => {
      t.value = 1;
    }, atraso + duracao + 400);
    return () => clearTimeout(g);
  }, [anima, atraso, duracao, t]);
  const estilo = useAnimatedStyle(() => ({
    opacity: 1 - t.value * t.value,
    transform: [{ translateX: dx * t.value }, { translateY: dy * t.value }, { scale: 1 - 0.65 * t.value }],
  }));
  if (!anima) return null;
  return <Animated.View style={[{ pointerEvents: 'none', zIndex: 6 }, estilo]}>{children}</Animated.View>;
}

/**
 * Destaque da linha vencedora: o anel em volta da peça acende com um pulo, um depois do outro
 * (`atraso`), e pulsa algumas vezes. Com `surge={false}` (a própria peça, que já estava na tela), só
 * pulsa. Desligadas as animações, só aparece.
 */
export function Pulsa({ atraso = 0, surge = true, children, style }: { atraso?: number; surge?: boolean; children: ReactNode; style?: ViewStyle }) {
  const anima = useAnima();
  const entra = useSharedValue(anima && surge ? 0 : 1);
  const pulso = useSharedValue(1);
  useEffect(() => {
    if (!anima) return;
    if (surge) entra.value = withDelay(atraso, withTiming(1, { duration: 260, easing: Easing.out(Easing.back(2)) }));
    const forte = surge ? 1.12 : 1.22;
    pulso.value = withDelay(atraso + (surge ? 260 : 0), withRepeat(withSequence(withTiming(forte, { duration: 380 }), withTiming(1, { duration: 380 })), surge ? 3 : 2, false));
    // garantia: o destaque nunca fica invisível se a animação travar
    const g = setTimeout(() => {
      entra.value = 1;
    }, atraso + 700);
    return () => clearTimeout(g);
  }, [anima, atraso, surge, entra, pulso]);
  const estilo = useAnimatedStyle(() => ({ opacity: Math.min(1, entra.value * 1.5), transform: [{ scale: entra.value * pulso.value }] }));
  if (!anima) return <View style={style}>{children}</View>;
  return <Animated.View style={[style, estilo]}>{children}</Animated.View>;
}

/**
 * O risco por cima da linha vencedora, desenhado da primeira à última casa (no jogo da velha).
 * Coordenadas em pixels dentro do tabuleiro; as pontas ficam arredondadas.
 */
export function Risca({ x1, y1, x2, y2, espessura, cor, opacidade = 1, atraso = 0 }: { x1: number; y1: number; x2: number; y2: number; espessura: number; cor: string; opacidade?: number; atraso?: number }) {
  const anima = useAnima();
  const k = useSharedValue(anima ? 0 : 1);
  useEffect(() => {
    if (!anima) return;
    k.value = withDelay(atraso, withTiming(1, { duration: 420, easing: Easing.out(Easing.cubic) }));
    const g = setTimeout(() => {
      k.value = 1;
    }, atraso + 820);
    return () => clearTimeout(g);
  }, [anima, atraso, k]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ scaleX: k.value }] }));
  const ang = Math.atan2(y2 - y1, x2 - x1);
  // o risco passa um pouco das casas das pontas (como a ponta redonda do traço)
  const ux = Math.cos(ang) * (espessura / 2);
  const uy = Math.sin(ang) * (espessura / 2);
  const len = Math.hypot(x2 - x1, y2 - y1) + espessura;
  return (
    <View
      style={{
        position: 'absolute',
        left: x1 - ux,
        top: y1 - uy - espessura / 2,
        width: len,
        height: espessura,
        transform: [{ rotate: `${ang}rad` }],
        transformOrigin: `0px ${espessura / 2}px`,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <Animated.View style={[{ width: len, height: espessura, borderRadius: espessura / 2, backgroundColor: cor, opacity: opacidade, transformOrigin: 'left center' }, estilo]} />
    </View>
  );
}
