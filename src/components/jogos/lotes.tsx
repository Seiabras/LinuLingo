import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect } from 'react-native-svg';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { useJogosPrefs } from '@/services/jogos-prefs';

/** As peças de sorte dos jogos de corrida, desenho próprio do app. */
export type TipoLote = 'tetraedro' | 'vareta' | 'buzio' | 'yut';

/**
 * Um lote parado: `marcado` é o lado que conta (a ponta pintada do dado tetraédrico de Ur, o lado
 * claro da vareta do senet, a boca do búzio para cima, o lado chato da vareta do yut).
 */
export function Lote({ tipo, marcado, tamanho }: { tipo: TipoLote; marcado: boolean; tamanho: number }) {
  const t = tamanho;
  switch (tipo) {
    case 'tetraedro':
      // a pirâmide de 4 faces vista de lado, com a ponta de cima pintada ou não
      return (
        <Svg width={t} height={t} viewBox="0 0 40 40">
          <Polygon points="20,4 36,34 4,34" fill="#C9A66B" stroke="#4A3320" strokeWidth={1.6} strokeLinejoin="round" />
          <Polygon points="20,4 36,34 22,30" fill="#A9864E" stroke="#4A3320" strokeWidth={1.2} strokeLinejoin="round" />
          {marcado ? <Circle cx={20} cy={8} r={3.6} fill="#FFFFFF" stroke="#4A3320" strokeWidth={1} /> : <Circle cx={20} cy={8} r={2} fill="#4A3320" opacity={0.35} />}
        </Svg>
      );
    case 'vareta':
      // a vareta do senet: um lado claro (conta) e o outro escuro
      return (
        <Svg width={t * 0.4} height={t} viewBox="0 0 16 40">
          <Rect x={2} y={2} width={12} height={36} rx={6} fill={marcado ? '#F7EBD3' : '#5A3A22'} stroke="#2A1A0C" strokeWidth={1.4} />
          {!marcado && <Line x1={8} y1={8} x2={8} y2={32} stroke="#8A5E3B" strokeWidth={1.5} />}
        </Svg>
      );
    case 'buzio':
      // o búzio: de boca para cima (conta) mostra a fenda dentada; de costas, o dorso liso
      return (
        <Svg width={t * 0.8} height={t} viewBox="0 0 32 40">
          <Ellipse cx={16} cy={20} rx={12} ry={17} fill={marcado ? '#F3EAD6' : '#E6D3AE'} stroke="#7A6440" strokeWidth={1.4} />
          {marcado ? (
            <>
              <Path d="M16 6 C 13 14, 13 26, 16 34 C 19 26, 19 14, 16 6 Z" fill="#5C4A2E" />
              {[10, 14, 18, 22, 26, 30].map((y) => (
                <Line key={y} x1={13.5} y1={y} x2={18.5} y2={y} stroke="#F3EAD6" strokeWidth={0.9} />
              ))}
            </>
          ) : (
            <>
              <Ellipse cx={13} cy={15} rx={4} ry={6} fill="#FFFFFF" opacity={0.45} />
              {[12, 20, 28].map((y) => (
                <Circle key={y} cx={19} cy={y} r={1.6} fill="#B08A54" />
              ))}
            </>
          )}
        </Svg>
      );
    default:
      // a vareta do yut: o lado chato (conta, com as marcas gravadas) ou o lado redondo
      return (
        <Svg width={t * 0.45} height={t} viewBox="0 0 18 40">
          <Rect x={2} y={1} width={14} height={38} rx={marcado ? 3 : 7} fill={marcado ? '#F1DDB4' : '#B9874D'} stroke="#4A2E12" strokeWidth={1.4} />
          {marcado ? (
            <Path d="M5 9 L13 15 M13 9 L5 15 M5 25 L13 31 M13 25 L5 31" stroke="#7A4A1E" strokeWidth={1.4} strokeLinecap="round" />
          ) : (
            <Rect x={6} y={3} width={3} height={34} rx={1.5} fill="#E0B37A" opacity={0.6} />
          )}
        </Svg>
      );
  }
}

/** Um lote caindo: pula, gira e troca de lado algumas vezes antes de parar no resultado. */
function LoteCaindo({ tipo, marcado, tamanho, atraso }: { tipo: TipoLote; marcado: boolean; tamanho: number; atraso: number }) {
  const [prefs] = useJogosPrefs();
  const anima = prefs.animacoes;
  const [lado, setLado] = useState<boolean | null>(anima ? !marcado : null);
  const giro = useSharedValue(anima ? 1 : 0);
  const pulo = useSharedValue(0);
  useEffect(() => {
    if (!anima) return;
    giro.value = withDelay(atraso, withTiming(0, { duration: 560, easing: Easing.out(Easing.cubic) }));
    pulo.value = withDelay(atraso, withSequence(withTiming(-tamanho * 0.6, { duration: 170 }), withTiming(0, { duration: 280, easing: Easing.bounce })));
    let k = 0;
    const t = setInterval(() => {
      k++;
      if (k >= 6) {
        clearInterval(t);
        setLado(null);
      } else setLado((x) => !x);
    }, 90);
    const fim = setTimeout(() => setLado(null), 750 + atraso);
    return () => {
      clearInterval(t);
      clearTimeout(fim);
    };
  }, [anima, marcado, atraso, giro, pulo, tamanho]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ translateY: pulo.value }, { rotate: `${giro.value * 400}deg` }] }));
  return (
    <Animated.View style={estilo}>
      <Lote tipo={tipo} marcado={lado ?? marcado} tamanho={tamanho} />
    </Animated.View>
  );
}

/** Os lotes de um lançamento; `chave` muda a cada lançamento (aí eles caem de novo). */
export function LotesLancados({ tipo, lotes, chave, tamanho = 34 }: { tipo: TipoLote; lotes: boolean[]; chave: number; tamanho?: number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 6, minHeight: tamanho }}>
      {lotes.map((m, k) => (
        <LoteCaindo key={`${chave}-${k}`} tipo={tipo} marcado={m} tamanho={tamanho} atraso={k * 50} />
      ))}
    </View>
  );
}
