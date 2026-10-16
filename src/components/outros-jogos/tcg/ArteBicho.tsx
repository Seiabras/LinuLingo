import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import { LinuAmigo } from '@/components/LinuAmigo';
import { bichoDe, type BichoInfo } from '@/services/tcg/comum';

/**
 * O retrato de um bicho na carta, desenho próprio do app: os Amigos do Linu com o desenho que já têm
 * (`LinuAmigo`); os outros num desenho simples, montado pela forma (ave, felino, roedor…), com as
 * cores e as marcas (pintas, listras) da espécie. Quadro de `largura` × `altura`.
 */
export function ArteBicho({ id, largura, altura }: { id: string; largura: number; altura: number }) {
  const b = bichoDe(id);
  if (b.amigo) {
    const t = Math.min(largura, altura / (140 / 120)) * 0.95;
    return (
      <View style={{ width: largura, height: altura, alignItems: 'center', justifyContent: 'flex-end' }}>
        <LinuAmigo id={b.amigo} size={t} />
      </View>
    );
  }
  return (
    <View style={{ width: largura, height: altura }} accessibilityRole="image" accessibilityLabel={b.nome}>
      <Svg width={largura} height={altura} viewBox="0 0 100 80">
        <Ellipse cx={50} cy={74} rx={30} ry={4} fill="#000" opacity={0.18} />
        {desenho(b)}
      </Svg>
    </View>
  );
}

function marcas(b: BichoInfo, cx: number, cy: number, rx: number, ry: number): ReactNode {
  const [, escura] = b.cores ?? ['#999', '#333'];
  if (b.marca === 'pintas')
    return [
      [-0.4, -0.2],
      [0.1, -0.4],
      [0.45, 0],
      [-0.1, 0.3],
      [0.3, 0.45],
      [-0.5, 0.35],
    ].map(([dx, dy], i) => <Circle key={i} cx={cx + dx! * rx} cy={cy + dy! * ry} r={Math.max(1.6, rx * 0.09)} fill={escura} opacity={0.75} />);
  if (b.marca === 'listras')
    return [-0.5, -0.15, 0.2, 0.55].map((dx, i) => (
      <Path key={i} d={`M${cx + dx * rx} ${cy - ry * 0.9} q ${rx * 0.12} ${ry * 0.9} 0 ${ry * 1.8}`} stroke={escura} strokeWidth={Math.max(1.5, rx * 0.09)} fill="none" opacity={0.8} />
    ));
  return null;
}

const olho = (x: number, y: number, r = 2.6) => (
  <G>
    <Circle cx={x} cy={y} r={r} fill="#1C1917" />
    <Circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.35} fill="#FFFFFF" />
  </G>
);

function desenho(b: BichoInfo): ReactNode {
  const [cor, det] = b.cores ?? ['#A8A29E', '#44403C'];
  const borda = { stroke: '#1C1917', strokeWidth: 1.4, strokeLinejoin: 'round' as const };
  switch (b.forma) {
    case 'ave':
      return (
        <G>
          <Ellipse cx={46} cy={46} rx={22} ry={16} fill={cor} {...borda} />
          <Path d="M30 44 Q 46 22 64 40 Q 50 50 30 44 Z" fill={det} {...borda} />
          <Circle cx={68} cy={30} r={11} fill={cor} {...borda} />
          <Path d="M78 28 L92 33 L78 36 Z" fill="#F59E0B" {...borda} />
          <Path d="M24 50 L10 58 L26 56 Z" fill={det} {...borda} />
          <Path d="M42 61 V72 M52 61 V72" stroke="#78350F" strokeWidth={2.2} strokeLinecap="round" />
          {olho(71, 28)}
        </G>
      );
    case 'felino':
      return (
        <G>
          <Ellipse cx={44} cy={50} rx={26} ry={14} fill={cor} {...borda} />
          {marcas(b, 44, 50, 26, 14)}
          <Path d="M18 48 Q 6 40 10 30" stroke={cor} strokeWidth={5} fill="none" strokeLinecap="round" />
          <Path d="M28 60 V72 M38 62 V72 M54 62 V72 M64 60 V72" stroke={cor} strokeWidth={5} strokeLinecap="round" />
          <Circle cx={72} cy={36} r={14} fill={cor} {...borda} />
          {marcas(b, 72, 36, 12, 10)}
          <Path d="M62 26 L64 16 L70 24 Z M76 24 L82 16 L83 27 Z" fill={cor} {...borda} />
          <Ellipse cx={78} cy={42} rx={5} ry={3.5} fill="#FDE7C3" />
          <Path d="M77 40 L79 40 L78 42 Z" fill="#1C1917" />
          {olho(68, 33, 2.4)}
          {olho(78, 33, 2.4)}
        </G>
      );
    case 'roedor':
      return (
        <G>
          <Ellipse cx={46} cy={50} rx={22} ry={16} fill={cor} {...borda} />
          {marcas(b, 46, 50, 20, 14)}
          <Circle cx={68} cy={38} r={12} fill={cor} {...borda} />
          <Circle cx={62} cy={27} r={4.5} fill={det} {...borda} />
          <Ellipse cx={78} cy={42} rx={4} ry={3} fill={det} />
          <Path d="M36 64 V72 M56 64 V72" stroke={det} strokeWidth={4} strokeLinecap="round" />
          {olho(70, 35, 2.4)}
        </G>
      );
    case 'inseto':
      return (
        <G>
          {b.id === 'borboleta' ? (
            <>
              <Path d="M50 40 Q 20 10 16 34 Q 14 52 50 42 Z M50 40 Q 80 10 84 34 Q 86 52 50 42 Z" fill={cor} {...borda} />
              <Path d="M50 44 Q 26 50 30 66 Q 44 66 50 46 Z M50 44 Q 74 50 70 66 Q 56 66 50 46 Z" fill={det} {...borda} />
              <Ellipse cx={50} cy={44} rx={3} ry={14} fill="#1C1917" />
              <Path d="M49 30 Q 44 20 40 18 M51 30 Q 56 20 60 18" stroke="#1C1917" strokeWidth={1.4} fill="none" />
            </>
          ) : (
            <>
              <Path d="M30 62 L22 72 M42 64 L42 74 M56 64 L60 74 M36 60 L30 52" stroke="#1C1917" strokeWidth={1.8} />
              <Ellipse cx={30} cy={52} rx={12} ry={9} fill={cor} {...borda} />
              <Ellipse cx={48} cy={54} rx={8} ry={7} fill={cor} {...borda} />
              <Circle cx={64} cy={48} r={9} fill={det} {...borda} />
              <Path d="M66 40 Q 70 26 80 22 M62 40 Q 60 28 66 18" stroke="#1C1917" strokeWidth={1.6} fill="none" />
              <Path d="M72 54 L86 44 L84 58 Z" fill="#65A30D" {...borda} />
              {olho(67, 46, 1.8)}
            </>
          )}
        </G>
      );
    case 'anfibio':
      return (
        <G>
          <Ellipse cx={50} cy={52} rx={28} ry={18} fill={cor} {...borda} />
          {marcas(b, 50, 52, 24, 14)}
          <Circle cx={38} cy={34} r={7} fill={cor} {...borda} />
          <Circle cx={62} cy={34} r={7} fill={cor} {...borda} />
          {olho(38, 33, 3.2)}
          {olho(62, 33, 3.2)}
          <Path d="M36 52 Q 50 60 64 52" stroke="#1C1917" strokeWidth={1.6} fill="none" />
          <Path d="M22 66 L14 72 M78 66 L86 72" stroke={det} strokeWidth={4} strokeLinecap="round" />
        </G>
      );
    case 'cobra':
      return (
        <G>
          <Path d="M10 64 Q 26 44 42 60 T 72 56 Q 82 52 80 40" stroke={cor} strokeWidth={12} fill="none" strokeLinecap="round" />
          <Path d="M10 64 Q 26 44 42 60 T 72 56 Q 82 52 80 40" stroke={det} strokeWidth={2} strokeDasharray="3 7" fill="none" />
          <Ellipse cx={82} cy={34} rx={10} ry={7} fill={cor} {...borda} />
          <Path d="M91 35 L98 33 M91 35 L98 38" stroke="#DC2626" strokeWidth={1.4} />
          {olho(84, 31, 2)}
        </G>
      );
    case 'larva':
      return (
        <G>
          {[18, 30, 42, 54].map((x, i) => (
            <Circle key={x} cx={x} cy={58 - (i % 2) * 2} r={b.id === 'girino' ? 7 - i * 1.4 : 8} fill={cor} {...borda} />
          ))}
          <Circle cx={66} cy={50} r={11} fill={cor} {...borda} />
          {olho(69, 47, 2.6)}
          {b.id === 'girino' && <Path d="M10 58 Q 4 50 2 60" stroke={cor} strokeWidth={4} fill="none" />}
        </G>
      );
    case 'elefante':
      return (
        <G>
          <Ellipse cx={44} cy={44} rx={28} ry={20} fill={cor} {...borda} />
          <Rect x={22} y={56} width={9} height={16} rx={3} fill={cor} {...borda} />
          <Rect x={52} y={56} width={9} height={16} rx={3} fill={cor} {...borda} />
          <Circle cx={74} cy={36} r={14} fill={cor} {...borda} />
          <Ellipse cx={66} cy={36} rx={9} ry={13} fill={det} {...borda} />
          <Path d="M84 40 Q 92 56 84 68" stroke={cor} strokeWidth={6} fill="none" strokeLinecap="round" />
          <Path d="M80 46 Q 86 50 90 46" stroke="#FFFBEB" strokeWidth={2.5} fill="none" />
          {olho(78, 32, 2.2)}
        </G>
      );
    case 'girafa':
      return (
        <G>
          <Ellipse cx={36} cy={52} rx={20} ry={12} fill={cor} {...borda} />
          {marcas(b, 36, 52, 18, 10)}
          <Path d="M50 46 L66 14" stroke={cor} strokeWidth={9} strokeLinecap="round" />
          <Ellipse cx={72} cy={12} rx={9} ry={6} fill={cor} {...borda} />
          <Path d="M66 6 V1 M71 5 V0" stroke={det} strokeWidth={2} strokeLinecap="round" />
          <Path d="M22 62 V74 M30 63 V74 M44 63 V74 M50 62 V74" stroke={cor} strokeWidth={4} strokeLinecap="round" />
          {olho(72, 10, 1.8)}
        </G>
      );
    default:
      // quadrúpede: lhama, vicunha, iaque, zebra, gnu, hiena, rinoceronte, tamanduá
      return (
        <G>
          <Ellipse cx={44} cy={46} rx={26} ry={15} fill={cor} {...borda} />
          {marcas(b, 44, 46, 24, 13)}
          <Path d="M24 58 V72 M34 60 V72 M54 60 V72 M64 58 V72" stroke={det} strokeWidth={4.5} strokeLinecap="round" />
          {b.id === 'tamandua' ? (
            <Path d="M66 42 L94 52 L66 50 Z" fill={cor} {...borda} />
          ) : (
            <>
              <Path d={b.id === 'lhama' || b.id === 'vicunha' ? 'M62 40 L68 18' : 'M64 42 L72 32'} stroke={cor} strokeWidth={8} strokeLinecap="round" />
              <Ellipse cx={b.id === 'lhama' || b.id === 'vicunha' ? 72 : 78} cy={b.id === 'lhama' || b.id === 'vicunha' ? 16 : 32} rx={10} ry={7} fill={cor} {...borda} />
            </>
          )}
          {b.id === 'rinoceronte' && <Path d="M84 30 L92 18 L88 32 Z" fill="#E7E5E4" {...borda} />}
          {b.id === 'iaque' && <Path d="M70 26 Q 66 18 72 16 M84 26 Q 88 18 82 16" stroke="#E7E5E4" strokeWidth={2.5} fill="none" />}
          {b.id === 'gnu' && <Path d="M72 26 Q 68 16 74 18 M84 26 Q 90 16 84 18" stroke="#A8A29E" strokeWidth={2.5} fill="none" />}
          {b.id !== 'tamandua' && olho(b.id === 'lhama' || b.id === 'vicunha' ? 74 : 80, b.id === 'lhama' || b.id === 'vicunha' ? 14 : 30, 2)}
          {b.id === 'tamandua' && olho(72, 46, 1.8)}
          <Path d="M18 44 Q 10 46 12 56" stroke={det} strokeWidth={3} fill="none" strokeLinecap="round" />
        </G>
      );
  }
}
