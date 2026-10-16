import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming, type SharedValue } from 'react-native-reanimated';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import type { ClimaTema } from '@/data/temas-jogos';
import type { Celebracao } from '@/data/efeitos-jogos';

/**
 * Os efeitos de cada tema (pedido do dono, 11/10/2026: “essas animações têm que ser únicas”):
 *   - o clima, que fica rodando em volta e por cima do tabuleiro (pétalas no Japão, chuva e névoa em
 *     Londres, neve no gelo, vaga-lumes na Amazônia…);
 *   - a comemoração de vitória, diferente em cada tema (moedas nos piratas, fogos em Londres…).
 * Nada disso pega toque, e tudo some com a opção “Animações” desligada (quem chama confere).
 * As posições são “sorteadas” por contas com o índice (sem Math.random): espalhadas, mas estáveis.
 */

const pseudo = (i: number, k: number) => (((i * 9301 + k * 49297) % 233280) / 233280 + 1) % 1;

// ── desenho de cada partícula ───────────────────────────────────────────────────────────────────

export function Desenho({ tipo, i, t }: { tipo: string; i: number; t: number }) {
  switch (tipo) {
    case 'petalas':
      return (
        <Svg width={t} height={t} viewBox="0 0 20 20">
          <Path d="M10 1 C 16 5, 16 13, 10 19 C 4 13, 4 5, 10 1 Z" fill={i % 3 ? '#F9C5D5' : '#F4A7BE'} stroke="#E886A6" strokeWidth={0.6} />
        </Svg>
      );
    case 'chuva':
      return <View style={{ width: 1.5, height: t, backgroundColor: 'rgba(210,225,240,0.75)', borderRadius: 1 }} />;
    case 'neve':
      return <View style={{ width: t * 0.5, height: t * 0.5, borderRadius: t, backgroundColor: 'rgba(255,255,255,0.9)' }} />;
    case 'areia':
      return <View style={{ width: t * 0.3, height: t * 0.3, borderRadius: t, backgroundColor: i % 2 ? 'rgba(232,192,125,0.85)' : 'rgba(255,230,170,0.85)' }} />;
    case 'vagalumes':
      return <View style={{ width: t * 0.45, height: t * 0.45, borderRadius: t, backgroundColor: '#FFF59D', shadowColor: '#FFF176', shadowOpacity: 1, shadowRadius: 6 }} />;
    case 'papel':
      return (
        <Svg width={t} height={t} viewBox="0 0 20 20">
          <Path d="M2 2 H18 V14 L10 18 L2 14 Z" fill={['#E4007C', '#00A6A6', '#FFB000', '#7B2CBF', '#FF5A1F'][i % 5]} />
          <Circle cx={10} cy={8} r={2.2} fill="rgba(0,0,0,0.3)" />
        </Svg>
      );
    case 'moedas':
      return (
        <Svg width={t} height={t} viewBox="0 0 20 20">
          <Circle cx={10} cy={10} r={9} fill="#E6B422" stroke="#8A6400" strokeWidth={1.2} />
          <Circle cx={10} cy={10} r={5.5} fill="none" stroke="#8A6400" strokeWidth={1} />
        </Svg>
      );
    case 'folhas':
      return (
        <Svg width={t} height={t} viewBox="0 0 20 20">
          <Path d="M3 17 Q 2 3 17 3 Q 18 17 3 17 Z" fill={i % 2 ? '#3FA34D' : '#7CC36B'} />
          <Path d="M3 17 L 15 5" stroke="#1F5E27" strokeWidth={0.8} />
        </Svg>
      );
    case 'bolhas':
      return <View style={{ width: t * 0.7, height: t * 0.7, borderRadius: t, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.85)', backgroundColor: 'rgba(160,220,255,0.25)' }} />;
    case 'brasas':
      return <View style={{ width: t * 0.35, height: t * 0.35, borderRadius: t, backgroundColor: i % 2 ? '#FF7A1A' : '#FFC14D' }} />;
    case 'estrelas':
      return (
        <Svg width={t} height={t} viewBox="0 0 20 20">
          <Path d="M10 1 L12.4 7.6 L19 10 L12.4 12.4 L10 19 L7.6 12.4 L1 10 L7.6 7.6 Z" fill={i % 2 ? '#FFFFFF' : '#C4B5FD'} />
        </Svg>
      );
    case 'fogos':
      return <View style={{ width: t * 0.3, height: t * 0.3, borderRadius: t, backgroundColor: ['#F43F5E', '#FACC15', '#38BDF8', '#A3E635', '#F472B6'][i % 5] }} />;
    default:
      // confete
      return <View style={{ width: t * 0.4, height: i % 3 ? t * 0.6 : t * 0.4, borderRadius: 2, backgroundColor: ['#F43F5E', '#F59E0B', '#10B981', '#3B82F6', '#A855F7', '#FACC15'][i % 6] }} />;
  }
}

// ── clima: partículas em laço ───────────────────────────────────────────────────────────────────

function ParticulaClima({ tipo, i, largura, altura }: { tipo: ClimaTema; i: number; largura: number; altura: number }) {
  const t = useSharedValue(0);
  const dur = tipo === 'chuva' ? 700 + pseudo(i, 1) * 400 : tipo === 'vagalumes' ? 2600 + pseudo(i, 1) * 2000 : 4200 + pseudo(i, 1) * 3500;
  useEffect(() => {
    t.value = withDelay(pseudo(i, 2) * dur, withRepeat(withTiming(1, { duration: dur, easing: Easing.linear }), -1, false));
  }, [t, i, dur]);
  const x0 = pseudo(i, 3) * largura;
  const y0 = pseudo(i, 4) * altura;
  const estilo = useAnimatedStyle(() => {
    const v = t.value;
    switch (tipo) {
      case 'chuva':
        return { opacity: 0.8, transform: [{ translateX: x0 - v * 40 }, { translateY: -30 + v * (altura + 60) }, { rotate: '12deg' }] };
      case 'neve':
      case 'petalas':
      case 'papel':
        return {
          opacity: Math.min(1, 4 * v) * Math.min(1, 4 * (1 - v)),
          transform: [{ translateX: x0 + Math.sin(v * Math.PI * 4 + i) * 18 }, { translateY: -20 + v * (altura + 40) }, { rotate: `${v * 360 * (i % 2 ? 1 : -1)}deg` }],
        };
      case 'areia':
        return { opacity: 0.8 * Math.sin(Math.PI * v), transform: [{ translateX: -20 + v * (largura + 40) }, { translateY: y0 + Math.sin(v * 8 + i) * 6 }] };
      case 'vagalumes':
        return { opacity: 0.25 + 0.75 * Math.abs(Math.sin(v * Math.PI * 2)), transform: [{ translateX: x0 + Math.sin(v * Math.PI * 2 + i) * 22 }, { translateY: y0 + Math.cos(v * Math.PI * 2 + i * 2) * 16 }] };
      default:
        return { opacity: 0 };
    }
  });
  const tam = tipo === 'chuva' ? 12 + pseudo(i, 5) * 8 : tipo === 'petalas' || tipo === 'papel' ? 10 + pseudo(i, 5) * 6 : 8 + pseudo(i, 5) * 6;
  return (
    <Animated.View style={[{ position: 'absolute', left: 0, top: 0 }, estilo]}>
      <Desenho tipo={tipo} i={i} t={tam} />
    </Animated.View>
  );
}

/** Névoa de Londres: manchas brancas e translúcidas indo e voltando devagar pelas bordas. */
function Nevoa({ largura, altura }: { largura: number; altura: number }) {
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withRepeat(withTiming(1, { duration: 9000, easing: Easing.inOut(Easing.sin) }), -1, true);
  }, [t]);
  const a = useAnimatedStyle(() => ({ transform: [{ translateX: -30 + t.value * 60 }] }));
  const b = useAnimatedStyle(() => ({ transform: [{ translateX: 30 - t.value * 60 }] }));
  return (
    <>
      <Animated.View style={[{ position: 'absolute', left: -40, top: -10, width: largura + 80, height: altura * 0.22 }, a]}>
        <Svg width={largura + 80} height={altura * 0.22}>
          <Ellipse cx={(largura + 80) * 0.3} cy={altura * 0.08} rx={largura * 0.4} ry={altura * 0.09} fill="rgba(235,238,242,0.4)" />
          <Ellipse cx={(largura + 80) * 0.75} cy={altura * 0.1} rx={largura * 0.35} ry={altura * 0.08} fill="rgba(235,238,242,0.32)" />
        </Svg>
      </Animated.View>
      <Animated.View style={[{ position: 'absolute', left: -40, bottom: -10, width: largura + 80, height: altura * 0.22 }, b]}>
        <Svg width={largura + 80} height={altura * 0.22}>
          <Ellipse cx={(largura + 80) * 0.6} cy={altura * 0.14} rx={largura * 0.45} ry={altura * 0.09} fill="rgba(235,238,242,0.38)" />
          <Rect x={0} y={altura * 0.15} width={largura + 80} height={altura * 0.07} fill="rgba(235,238,242,0.25)" />
        </Svg>
      </Animated.View>
    </>
  );
}

/** Aurora: duas faixas de luz verde e lilás ondulando no alto. */
function Aurora({ largura, altura }: { largura: number; altura: number }) {
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withRepeat(withTiming(1, { duration: 6000, easing: Easing.inOut(Easing.sin) }), -1, true);
  }, [t]);
  const e = useAnimatedStyle(() => ({ opacity: 0.25 + t.value * 0.35, transform: [{ translateX: -20 + t.value * 40 }, { scaleY: 0.8 + t.value * 0.4 }] }));
  return (
    <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width: largura, height: altura * 0.35 }, e]}>
      <Svg width={largura} height={altura * 0.35}>
        <Path d={`M0 ${altura * 0.18} Q ${largura * 0.25} ${altura * 0.02} ${largura * 0.5} ${altura * 0.15} T ${largura} ${altura * 0.1} V0 H0 Z`} fill="rgba(52,211,153,0.45)" />
        <Path d={`M0 ${altura * 0.1} Q ${largura * 0.3} ${altura * 0.22} ${largura * 0.6} ${altura * 0.06} T ${largura} ${altura * 0.16} V0 H0 Z`} fill="rgba(167,139,250,0.35)" />
      </Svg>
    </Animated.View>
  );
}

/** O clima do tema, por cima da moldura e do tabuleiro, sem pegar toque. */
export function Clima({ tipo, largura, altura }: { tipo: ClimaTema; largura: number; altura: number }) {
  const quantos = tipo === 'chuva' ? 34 : tipo === 'vagalumes' ? 10 : tipo === 'aurora' ? 8 : 14;
  return (
    <View style={{ position: 'absolute', left: 0, top: 0, width: largura, height: altura, overflow: 'hidden', borderRadius: 14, pointerEvents: 'none', zIndex: 30 }}>
      {tipo === 'aurora' && <Aurora largura={largura} altura={altura} />}
      {tipo === 'chuva' && <Nevoa largura={largura} altura={altura} />}
      {Array.from({ length: quantos }, (_, i) => (
        <ParticulaClima key={i} tipo={tipo === 'aurora' ? 'neve' : tipo} i={i} largura={largura} altura={altura} />
      ))}
    </View>
  );
}

// ── comemoração de vitória ──────────────────────────────────────────────────────────────────────

export type { Celebracao };

function ParticulaVitoria({ tipo, i, t, largura }: { tipo: Celebracao; i: number; t: SharedValue<number>; largura: number }) {
  const ang = pseudo(i, 1) * Math.PI * 2;
  const forca = 0.4 + pseudo(i, 2) * 0.6;
  const x0 = (pseudo(i, 3) - 0.5) * largura;
  // fogos: três pontos de explosão; cada partícula sai de um deles
  const centro = [(-0.3) * largura, 0, 0.3 * largura][i % 3]!;
  const estilo = useAnimatedStyle(() => {
    const v = t.value;
    switch (tipo) {
      case 'fogos': {
        const r = Math.min(1, v * 2.2) * 90 * forca;
        return { opacity: 1 - v, transform: [{ translateX: centro + Math.cos(ang) * r }, { translateY: -60 - (i % 3) * 20 + Math.sin(ang) * r + v * v * 40 }] };
      }
      case 'areia':
      case 'bolhas':
      case 'brasas':
        // sobem do chão balançando
        return { opacity: Math.sin(Math.PI * v), transform: [{ translateX: x0 + Math.sin(v * 6 + i) * 14 }, { translateY: 140 - v * 260 * forca }] };
      case 'estrelas':
        return { opacity: Math.sin(Math.PI * v), transform: [{ translateX: x0 + v * 80 }, { translateY: -40 + v * 120 * forca }, { scale: 0.6 + Math.sin(v * 10 + i) * 0.4 }] };
      case 'moedas':
        return { opacity: 1 - v * v, transform: [{ translateX: x0 }, { translateY: -80 + v * 260 * forca }, { scaleX: Math.cos(v * 14 + i) }] };
      case 'petalas':
      case 'folhas':
      case 'neve':
      case 'papel':
        return { opacity: 1 - v * v, transform: [{ translateX: x0 + Math.sin(v * 7 + i) * 26 }, { translateY: -70 + v * 230 * forca }, { rotate: `${v * 300 * (i % 2 ? 1 : -1)}deg` }] };
      default: {
        // confete: sai do meio para cima e cai girando
        const dx = Math.cos(ang) * largura * 0.45 * forca;
        const y = -90 * forca * Math.sin(Math.PI * Math.min(v * 1.4, 1)) + v * v * 170;
        return { opacity: 1 - v, transform: [{ translateX: dx * v }, { translateY: y }, { rotate: `${v * (360 + i * 40)}deg` }] };
      }
    }
  });
  return (
    <Animated.View style={[{ position: 'absolute', left: largura / 2, top: 20 }, estilo]}>
      <Desenho tipo={tipo} i={i} t={tipo === 'moedas' ? 18 : 14} />
    </Animated.View>
  );
}

/** Amostra parada de um efeito (para escolher no Personalizar): algumas partículas espalhadas. */
export function AmostraEfeito({ tipo, tamanho = 44 }: { tipo: string; tamanho?: number }) {
  const pos = [
    [0.18, 0.2],
    [0.62, 0.12],
    [0.4, 0.5],
    [0.12, 0.66],
    [0.7, 0.62],
  ];
  return (
    <View style={{ width: tamanho, height: tamanho, borderRadius: 8, backgroundColor: '#1E293B', overflow: 'hidden' }}>
      {pos.map(([x, y], i) => (
        <View key={i} style={{ position: 'absolute', left: x! * tamanho, top: y! * tamanho }}>
          <Desenho tipo={tipo} i={i} t={tamanho * 0.3} />
        </View>
      ))}
    </View>
  );
}

/** A comemoração de vitória do tema (uma vez, ao aparecer). */
export function Comemoracao({ tipo, largura = 320 }: { tipo: Celebracao; largura?: number }) {
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withTiming(1, { duration: tipo === 'fogos' ? 1500 : 2000, easing: Easing.out(Easing.quad) });
  }, [t, tipo]);
  const quantos = tipo === 'fogos' ? 42 : tipo === 'moedas' ? 22 : 34;
  return (
    <View style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 1, alignItems: 'center', pointerEvents: 'none', zIndex: 50 }}>
      <View style={{ width: largura, height: 1 }}>
        {Array.from({ length: quantos }, (_, i) => (
          <ParticulaVitoria key={i} tipo={tipo} i={i} t={t} largura={largura} />
        ))}
      </View>
    </View>
  );
}
