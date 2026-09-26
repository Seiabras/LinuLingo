import { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';

export type LinuMood = 'feliz' | 'pensando' | 'comemorando' | 'triste' | 'falando';

const INK = '#1F2A44';
const WHITE = '#F8FAFC';
const BEAK = '#111827';
const FEET = '#F4A6B8';
const STRAP = '#1F2A44';

/**
 * Linu, um pinguim-de-barbicha (Pygoscelis antarctica): boné preto, rosto branco,
 * a «barbicha» — faixa preta fina sob o queixo —, bico preto e pés rosados.
 * Desenhado em SVG para ficar nítido em qualquer tela; `animate` faz ele balançar.
 */
export function Linu({ mood = 'feliz', size = 96, animate = true }: { mood?: LinuMood; size?: number; animate?: boolean }) {
  const bob = useSharedValue(0);

  useEffect(() => {
    if (!animate) return;
    const amp = mood === 'comemorando' ? -8 : -3;
    bob.value = withRepeat(
      withSequence(
        withTiming(amp, { duration: mood === 'comemorando' ? 260 : 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: mood === 'comemorando' ? 260 : 900, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
    );
  }, [animate, mood, bob]);

  const style = useAnimatedStyle(() => ({ transform: [{ translateY: bob.value }] }));
  const up = mood === 'comemorando';

  return (
    <Animated.View style={[{ width: size, height: size * (140 / 120) }, style]} accessibilityRole="image" accessibilityLabel={`Linu, o pinguim-de-barbicha, ${mood}`}>
      <Svg width="100%" height="100%" viewBox="0 0 120 140">
        {up && (
          <G>
            <Circle cx="12" cy="20" r="3" fill="#EA580C" />
            <Circle cx="104" cy="14" r="3" fill="#16A34A" />
            <Path d="M96 34 l6 -4 l2 6 z" fill="#2563EB" />
            <Path d="M18 40 l-6 -2 l3 -5 z" fill="#F59E0B" />
            <Circle cx="110" cy="44" r="2.5" fill="#EA580C" />
          </G>
        )}

        {/* nadadeiras */}
        {up ? (
          <G fill={INK}>
            <Path d="M26 76 Q4 52 12 30 Q28 48 34 72 Z" />
            <Path d="M94 76 Q116 52 108 30 Q92 48 86 72 Z" />
          </G>
        ) : (
          <G fill={INK}>
            <Path d="M24 76 Q6 100 18 120 Q30 104 30 82 Z" />
            {mood === 'pensando' ? (
              <Path d="M92 84 Q104 82 88 70 Q80 72 84 84 Z" />
            ) : (
              <Path d="M96 76 Q114 100 102 120 Q90 104 90 82 Z" />
            )}
          </G>
        )}

        {/* pés */}
        <Ellipse cx="46" cy="132" rx="11" ry="5" fill={FEET} />
        <Ellipse cx="74" cy="132" rx="11" ry="5" fill={FEET} />

        {/* corpo, cabeça (boné preto) e frente branca */}
        <Ellipse cx="60" cy="84" rx="40" ry="48" fill={INK} />
        <Circle cx="60" cy="50" r="33" fill={INK} />
        <Ellipse cx="60" cy="96" rx="28" ry="34" fill={WHITE} />
        <Path d="M29 56 Q30 40 44 40 Q60 44 76 40 Q90 40 91 56 Q93 80 80 92 Q60 100 40 92 Q27 80 29 56 Z" fill={WHITE} />

        {/* a barbicha: faixa fina de orelha a orelha, passando sob o bico */}
        <Path d="M31 44 Q30 70 42 78 Q60 88 78 78 Q90 70 89 44" stroke={STRAP} strokeWidth="1.8" fill="none" strokeLinecap="round" />

        <Eyes mood={mood} />

        {/* bochechas */}
        {(mood === 'feliz' || mood === 'comemorando' || mood === 'falando') && (
          <G fill="#FB7185" opacity={0.4}>
            <Circle cx="39" cy="63" r="3.8" />
            <Circle cx="81" cy="63" r="3.8" />
          </G>
        )}

        {/* bico */}
        {mood === 'falando' || mood === 'comemorando' ? (
          <G fill={BEAK}>
            <Path d="M53 60 L67 60 L60 66 Z" />
            <Path d="M55 68 L65 68 L60 73 Z" />
            <Path d="M56 66.5 L64 66.5 L60 68.5 Z" fill="#F87171" />
          </G>
        ) : (
          <Path d="M53 60 L67 60 L60 70 Z" fill={BEAK} />
        )}

        {mood === 'triste' && <Path d="M80 58 Q83 64 80 67 Q77 64 80 58 Z" fill="#60A5FA" />}
        {mood === 'pensando' && (
          <G fill="#2563EB">
            <Circle cx="100" cy="30" r="3" />
            <Circle cx="108" cy="20" r="4.5" />
          </G>
        )}
      </Svg>
    </Animated.View>
  );
}

function Eyes({ mood }: { mood: LinuMood }) {
  if (mood === 'feliz' || mood === 'comemorando') {
    return (
      <G stroke={INK} strokeWidth="3.2" strokeLinecap="round" fill="none">
        <Path d="M40 54 Q46 47 52 54" />
        <Path d="M68 54 Q74 47 80 54" />
      </G>
    );
  }
  const dy = mood === 'triste' ? 3 : mood === 'pensando' ? -4 : 0;
  const dx = mood === 'pensando' ? 3 : 0;
  return (
    <G>
      {/* íris castanho-avermelhada, como na espécie */}
      <Circle cx={46 + dx} cy={52 + dy} r="5.5" fill="#7C2D12" />
      <Circle cx={74 + dx} cy={52 + dy} r="5.5" fill="#7C2D12" />
      <Circle cx={46 + dx} cy={52 + dy} r="3.4" fill={INK} />
      <Circle cx={74 + dx} cy={52 + dy} r="3.4" fill={INK} />
      <Circle cx={47.6 + dx} cy={50.2 + dy} r="1.5" fill="#fff" />
      <Circle cx={75.6 + dx} cy={50.2 + dy} r="1.5" fill="#fff" />
      {mood === 'triste' && (
        <G stroke={INK} strokeWidth="2.5" strokeLinecap="round">
          <Path d="M38 43 L51 45" />
          <Path d="M82 43 L69 45" />
        </G>
      )}
    </G>
  );
}
