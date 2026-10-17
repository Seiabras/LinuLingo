import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { SeletorArea } from '@/components/area/AreaTrilha';
import { CIRCULO, HARMONIAS, type Harmonia } from '@/data/arte/consulta';

const T = 260;
const C = T / 2;
const R_FORA = 120;
const R_DENTRO = 62;

/** A fatia `i` do círculo de 12 (o amarelo no alto, girando no sentido do relógio). */
function fatia(i: number, rFora: number, rDentro: number): string {
  const a0 = ((i * 30 - 15 - 90) * Math.PI) / 180;
  const a1 = ((i * 30 + 15 - 90) * Math.PI) / 180;
  const p = (r: number, a: number) => `${(C + r * Math.cos(a)).toFixed(2)} ${(C + r * Math.sin(a)).toFixed(2)}`;
  return `M ${p(rFora, a0)} A ${rFora} ${rFora} 0 0 1 ${p(rFora, a1)} L ${p(rDentro, a1)} A ${rDentro} ${rDentro} 0 0 0 ${p(rDentro, a0)} Z`;
}

/**
 * O círculo cromático dos pintores, para brincar: escolha uma cor (nos botões de baixo; o toque direto
 * no desenho não funciona na web) e uma harmonia, e o círculo destaca as cores que combinam, com as
 * amostras lado a lado.
 */
export function CirculoCromatico() {
  const [cor, setCor] = useState(4);
  const [harmonia, setHarmonia] = useState<Harmonia>('complementar');
  const h = HARMONIAS.find((x) => x.id === harmonia)!;
  const escolhidas = h.passos.map((p) => (((cor + p) % 12) + 12) % 12);
  return (
    <View className="gap-3">
      <View className="items-center">
        <Svg width={T} height={T} viewBox={`0 0 ${T} ${T}`} accessibilityLabel={`Círculo cromático: ${escolhidas.map((i) => CIRCULO[i]!.nome).join(', ')}`}>
          {CIRCULO.map((c, i) => {
            const marcada = escolhidas.includes(i);
            return (
              <Path
                key={c.nome}
                d={fatia(i, marcada ? R_FORA : R_FORA - 12, R_DENTRO)}
                fill={c.hex}
                opacity={marcada ? 1 : 0.35}
                stroke={i === cor ? '#0F172A' : '#FFFFFF'}
                strokeWidth={i === cor ? 3 : 1.5}
              />
            );
          })}
          <Circle cx={C} cy={C} r={R_DENTRO - 6} fill={CIRCULO[cor]!.hex} />
        </Svg>
      </View>
      <View className="flex-row flex-wrap justify-center gap-1.5">
        {CIRCULO.map((c, i) => (
          <Pressable
            key={c.nome}
            accessibilityRole="button"
            accessibilityLabel={c.nome}
            accessibilityState={{ selected: i === cor }}
            onPress={() => setCor(i)}
            style={{ backgroundColor: c.hex }}
            className={`h-9 w-9 rounded-full ${i === cor ? 'border-4 border-slate-900 dark:border-white' : 'border border-white'}`}
          />
        ))}
      </View>
      <SeletorArea area="arte" valor={harmonia} aoEscolher={setHarmonia} opcoes={HARMONIAS.map((x) => [x.id, x.curto] as const)} />
      <View className="gap-2 rounded-xl bg-fuchsia-50 p-3 dark:bg-fuchsia-950/50">
        <Text className="text-sm text-slate-700 dark:text-slate-300">
          <Text className="font-extrabold">{h.nome}: </Text>
          {h.sobre}
        </Text>
        <View className="flex-row overflow-hidden rounded-lg">
          {escolhidas.map((i) => (
            <View key={i} style={{ backgroundColor: CIRCULO[i]!.hex }} className="h-14 flex-1" />
          ))}
        </View>
        <Text className="text-sm font-bold text-slate-900 dark:text-white">{escolhidas.map((i) => `${CIRCULO[i]!.nome} (${CIRCULO[i]!.tipo})`).join(' · ')}</Text>
      </View>
    </View>
  );
}
