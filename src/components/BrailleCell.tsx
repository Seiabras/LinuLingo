import { View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useIsDark } from '@/services/theme';

/**
 * Uma cela Braille: 6 pontos em duas colunas (1-2-3 à esquerda, 4-5-6 à direita). Os pontos em
 * relevo aparecem cheios; os outros, só o contorno, para dar para contar a posição.
 */
export function BrailleCell({ dots, size = 44, label }: { dots: string; size?: number; label?: string }) {
  const dark = useIsDark();
  const on = dark ? '#F8FAFC' : '#0F172A';
  const off = dark ? '#475569' : '#CBD5E1';
  const w = size * 0.7;
  const r = size * 0.1;
  const pos: Record<string, [number, number]> = { '1': [0, 0], '2': [0, 1], '3': [0, 2], '4': [1, 0], '5': [1, 1], '6': [1, 2] };
  return (
    <Svg width={w} height={size} viewBox={`0 0 ${w} ${size}`} accessibilityLabel={label ?? `Braille, pontos ${[...dots].join('-')}`}>
      <Rect x={0.5} y={0.5} width={w - 1} height={size - 1} rx={size * 0.12} fill="none" stroke={off} strokeWidth={1} />
      {Object.entries(pos).map(([d, [cx, cy]]) => {
        const x = w * (cx === 0 ? 0.32 : 0.68);
        const y = size * (0.2 + cy * 0.3);
        const raised = dots.includes(d);
        return <Circle key={d} cx={x} cy={y} r={r} fill={raised ? on : 'none'} stroke={raised ? on : off} strokeWidth={1.2} />;
      })}
    </Svg>
  );
}

/** Várias celas em sequência («1234 1» = duas celas), para ler palavras e números inteiros. */
export function BrailleWord({ dots, size = 44, label }: { dots: string; size?: number; label?: string }) {
  const cells = dots.split(' ');
  if (cells.length === 1) return <BrailleCell dots={dots} size={size} label={label} />;
  return (
    <View accessibilityLabel={label} className="flex-row flex-wrap gap-1">
      {cells.map((c, i) => (
        <BrailleCell key={i} dots={c} size={size} label={`cela ${i + 1}: pontos ${[...c].join('-') || 'nenhum'}`} />
      ))}
    </View>
  );
}
