import { Pressable, Text, View } from 'react-native';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { salvarModoApp } from '@/services/modo-app';

/** O topo de cada aba da Biologia: o título, a marca da área e o botão de voltar aos Idiomas. */
export function BioCabecalho({ titulo, subtitulo }: { titulo: string; subtitulo?: string }) {
  const { db } = useApp();
  return (
    <View className="gap-1">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 dark:bg-emerald-950">
          <Text className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">🧬 Biologia</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar para os Idiomas"
          onPress={() => {
            haptics.tapLight();
            void salvarModoApp(db, 'idiomas');
          }}
          className="rounded-full border border-slate-300 px-3 py-1 active:opacity-70 dark:border-slate-600"
        >
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">← Idiomas</Text>
        </Pressable>
      </View>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{titulo}</Text>
      {subtitulo && <Text className="text-sm text-slate-600 dark:text-slate-400">{subtitulo}</Text>}
    </View>
  );
}
