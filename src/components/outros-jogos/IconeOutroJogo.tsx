import { Image, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { IMAGENS_HANAFUDA } from '@/data/hanafuda-cartas';

/** Uma roda de roleta pequena, desenhada (setores vermelhos e pretos, o zero verde). */
function MiniRoda({ tamanho }: { tamanho: number }) {
  const c = tamanho / 2;
  const n = 12;
  return (
    <Svg width={tamanho} height={tamanho}>
      <Circle cx={c} cy={c} r={c} fill="#78350F" />
      {Array.from({ length: n }, (_, i) => {
        const a1 = (i / n) * 2 * Math.PI;
        const a2 = ((i + 1) / n) * 2 * Math.PI;
        const r = c * 0.86;
        const d = `M${c} ${c} L${c + r * Math.sin(a1)} ${c - r * Math.cos(a1)} A${r} ${r} 0 0 1 ${c + r * Math.sin(a2)} ${c - r * Math.cos(a2)} Z`;
        return <Path key={i} d={d} fill={i === 0 ? '#15803D' : i % 2 ? '#B91C1C' : '#1E293B'} />;
      })}
      <Circle cx={c} cy={c} r={c * 0.42} fill="#B45309" />
      <Circle cx={c * 1.45} cy={c * 0.35} r={c * 0.1} fill="#F8FAFC" />
    </Svg>
  );
}

/**
 * O desenho de um jogo das outras áreas, no cartão e no cabeçalho: a carta do grou para o Hanafuda,
 * uma roda para a roleta; os outros, por enquanto, o emoji do jogo num quadrado.
 */
export function IconeOutroJogo({ id, emoji, tamanho }: { id: string; emoji: string; tamanho: number }) {
  if (id === 'hanafuda')
    return (
      <View style={{ width: tamanho, height: tamanho }} className="items-center justify-center">
        <Image source={IMAGENS_HANAFUDA[0]} style={{ height: tamanho, width: tamanho * (147 / 240) }} resizeMode="contain" />
      </View>
    );
  if (id === 'roleta') return <MiniRoda tamanho={tamanho} />;
  return (
    <View style={{ width: tamanho, height: tamanho }} className="items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
      <Text style={{ fontSize: tamanho * 0.55 }}>{emoji}</Text>
    </View>
  );
}
