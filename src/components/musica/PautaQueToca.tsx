import { Pressable, Text, View } from 'react-native';
import { Pauta } from '@/components/musica/Pauta';
import { tocarNota } from '@/services/musica/motor';
import { nomeNota } from '@/services/musica/notas';

/** A pauta de um exemplo das lições de Música, com o botão que toca as notas uma depois da outra. */
export function PautaQueToca({ notas }: { notas: number[] }) {
  const tocar = () => notas.forEach((m, i) => tocarNota(m, { duracao: 0.7, atraso: i * 0.45 }));
  return (
    <View className="gap-1">
      <Pauta notas={notas.map((m) => ({ midi: m }))} rotulos nomes={nomeNota} />
      <Pressable accessibilityRole="button" accessibilityLabel="Ouvir" onPress={tocar} className="self-start rounded-full bg-orange-500 px-3 py-1 active:opacity-80">
        <Text className="text-xs font-bold text-white">▶ Ouvir</Text>
      </Pressable>
    </View>
  );
}
