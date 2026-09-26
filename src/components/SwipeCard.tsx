import type { ReactNode } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

export type SwipeDir = 'direita' | 'esquerda' | 'cima' | 'baixo';

const THRESHOLD = 90;

/**
 * Cartão que responde a gestos nas 4 direções (estilo Drops).
 * Direções fora de `enabled` voltam ao centro com mola.
 */
export function SwipeCard({
  children,
  onSwipe,
  enabled = ['direita', 'esquerda', 'cima', 'baixo'],
}: {
  children: ReactNode;
  onSwipe: (dir: SwipeDir) => void;
  enabled?: SwipeDir[];
}) {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      x.value = e.translationX;
      y.value = e.translationY;
    })
    .onEnd((e) => {
      const horizontal = Math.abs(e.translationX) > Math.abs(e.translationY);
      let dir: SwipeDir | null = null;
      if (horizontal && Math.abs(e.translationX) > THRESHOLD) dir = e.translationX > 0 ? 'direita' : 'esquerda';
      if (!horizontal && Math.abs(e.translationY) > THRESHOLD) dir = e.translationY > 0 ? 'baixo' : 'cima';
      if (dir && enabled.includes(dir)) {
        const tx = dir === 'direita' ? 600 : dir === 'esquerda' ? -600 : 0;
        const ty = dir === 'baixo' ? 700 : dir === 'cima' ? -700 : 0;
        x.value = withTiming(tx, { duration: 180 });
        y.value = withTiming(ty, { duration: 180 }, () => {
          x.value = 0;
          y.value = 0;
        });
        scheduleOnRN(onSwipe, dir);
      } else {
        x.value = withSpring(0);
        y.value = withSpring(0);
      }
    });

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { rotate: `${interpolate(x.value, [-300, 300], [-14, 14])}deg` },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[{ width: '100%' }, style]}>{children}</Animated.View>
    </GestureDetector>
  );
}
