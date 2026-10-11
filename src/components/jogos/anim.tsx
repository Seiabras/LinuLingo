import { useEffect, type ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';
import Animated, { BounceIn, Easing, FlipInEasyY, useAnimatedStyle, useSharedValue, withTiming, ZoomIn, type SharedValue } from 'react-native-reanimated';
import { useJogosPrefs } from '@/services/jogos-prefs';

/**
 * Animações dos tabuleiros. Todas respeitam a opção “Animações” da personalização (e o “reduzir
 * movimento” do aparelho, que a Reanimated já segue): desligadas, a peça só aparece no lugar.
 * Para animar só a peça que mexeu, quem usa dá a ela uma `key` nova a cada lance (ex. o número do
 * lance): a peça remonta e a animação de entrada roda uma vez.
 */
function useAnima() {
  const [prefs] = useJogosPrefs();
  return prefs.animacoes;
}

/** A peça nasce crescendo (peça colocada: go, reversi, trilha, conecta 4 sem queda). */
export function Surge({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  const anima = useAnima();
  if (!anima) return <View style={style}>{children}</View>;
  return (
    <Animated.View entering={ZoomIn.duration(220)} style={style}>
      {children}
    </Animated.View>
  );
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
