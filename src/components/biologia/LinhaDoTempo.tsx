import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card } from '@/components/ui';
import { anosPorExtenso, horaNoDia, MARCOS_DA_VIDA } from '@/data/biologia/linha-do-tempo';

/**
 * A linha do tempo da vida, em dois jeitos de ver: em anos e “se a história da Terra fosse um dia”,
 * em que a Terra nasce à meia-noite e hoje é meia-noite de novo.
 */
export function LinhaDoTempo() {
  const [dia, setDia] = useState(true);
  return (
    <Card className="gap-2">
      <View className="flex-row gap-2">
        {(
          [
            [true, 'Num dia de 24 horas'],
            [false, 'Em anos'],
          ] as const
        ).map(([v, nome]) => (
          <Pressable
            key={nome}
            accessibilityRole="radio"
            accessibilityState={{ selected: dia === v }}
            onPress={() => setDia(v)}
            className={`flex-1 rounded-xl border-2 p-1.5 ${dia === v ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 dark:border-slate-700'}`}
          >
            <Text className="text-center text-xs font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
          </Pressable>
        ))}
      </View>
      {dia && <Text className="text-xs text-slate-600 dark:text-slate-400">Se toda a história da Terra coubesse em um dia, a Terra nasceria à meia-noite e agora seria meia-noite de novo.</Text>}
      {MARCOS_DA_VIDA.map((m, i) => (
        <View key={m.titulo} className="flex-row gap-3">
          <View className="items-center">
            <Text className="text-xl">{m.emoji}</Text>
            {i < MARCOS_DA_VIDA.length - 1 && <View className="w-0.5 flex-1 bg-emerald-200 dark:bg-emerald-800" />}
          </View>
          <View className="flex-1 pb-2">
            <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{dia ? `às ${horaNoDia(m.anos)}` : `há ${anosPorExtenso(m.anos)}`}</Text>
            <Text className="font-extrabold text-slate-900 dark:text-white">{m.titulo}</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">{m.sobre}</Text>
          </View>
        </View>
      ))}
      <Text className="text-[10px] text-slate-500">Datas: Tabela Cronoestratigráfica Internacional (ICS, 2024) e os artigos citados no código.</Text>
    </Card>
  );
}
