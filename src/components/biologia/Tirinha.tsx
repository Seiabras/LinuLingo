import { Text, View } from 'react-native';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import type { Quadrinho } from '@/data/biologia/tirinhas';

/** Uma tirinha de três quadrinhos: em cada um, o bicho que fala e o balão com a fala. */
export function Tirinha({ quadros }: { quadros: Quadrinho[] }) {
  return (
    <View className="flex-row gap-1.5">
      {quadros.map((q, i) => (
        <View key={i} className="flex-1 justify-between gap-1 rounded-xl border-2 border-slate-800 bg-sky-50 p-1.5 dark:border-slate-300 dark:bg-slate-800">
          <View className="rounded-lg border border-slate-300 bg-white px-1.5 py-1 dark:border-slate-600 dark:bg-slate-900">
            <Text className="text-[11px] leading-tight text-slate-800 dark:text-slate-100">{q.fala}</Text>
          </View>
          <View className="items-center">{q.quem === 'linu' ? <Linu mood="falando" size={48} /> : <LinuAmigo id={q.quem} size={48} />}</View>
        </View>
      ))}
    </View>
  );
}
