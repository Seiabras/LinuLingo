import { Image, Text, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
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
 * uma roda para a roleta, a carta das fadas para o Encantados; os outros, por enquanto, o emoji do jogo num quadrado.
 */
export function IconeOutroJogo({ id, emoji, tamanho }: { id: string; emoji: string; tamanho: number }) {
  if (id === 'hanafuda')
    return (
      <View style={{ width: tamanho, height: tamanho }} className="items-center justify-center">
        <Image source={IMAGENS_HANAFUDA[0]} style={{ height: tamanho, width: tamanho * (147 / 240) }} resizeMode="contain" />
      </View>
    );
  if (id === 'roleta') return <MiniRoda tamanho={tamanho} />;
  if (id === 'encantados')
    // a carta das fadas do baralho desenhado pelo app (ver EncantadosJogo), com uma carta de goblin atrás
    return (
      <Svg width={tamanho} height={tamanho} viewBox="0 0 48 48">
        <Rect x={17} y={4} width={26} height={36} rx={4} fill="#15803d" stroke="#0f172a" strokeOpacity={0.3} strokeWidth={1.5} transform="rotate(12 30 22)" />
        <Rect x={6} y={8} width={26} height={36} rx={4} fill="#db2777" stroke="#0f172a" strokeOpacity={0.3} strokeWidth={1.5} />
        <Path d="M19 24 C15 17 10 21 13 25 C14.5 27 17.5 26.5 19 24 Z M19 24 C23 17 28 21 25 25 C23.5 27 20.5 26.5 19 24 Z" fill="#fff" />
        <Path d="M19 22 L19 33" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      </Svg>
    );
  if (id === 'breakout')
    // a parede de tijolos em faixas de cor, a bola e a raquete, sobre o fundo preto
    return (
      <Svg width={tamanho} height={tamanho} viewBox="0 0 48 48">
        <Rect x={0} y={0} width={48} height={48} rx={8} fill="#000" />
        {['#E5484D', '#F2994A', '#3DBE6B', '#F2D649'].map((cor, f) =>
          [0, 1, 2, 3, 4].map((c) => <Rect key={`${f}-${c}`} x={4 + c * 8.2} y={7 + f * 5} width={7.4} height={4} fill={cor} />),
        )}
        <Rect x={22} y={31} width={3.5} height={3.5} fill="#fff" />
        <Rect x={15} y={40} width={16} height={3} fill="#fff" />
      </Svg>
    );
  return (
    <View style={{ width: tamanho, height: tamanho }} className="items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
      <Text style={{ fontSize: tamanho * 0.55 }}>{emoji}</Text>
    </View>
  );
}
