import { Pressable, Text, View } from 'react-native';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { salvarModoApp } from '@/services/modo-app';

/** A marca de cada área (as classes ficam escritas por inteiro, para o Tailwind achar). */
const MARCA = {
  lazer: { rotulo: '🎲 Lazer', fundo: 'bg-teal-100 dark:bg-teal-950', texto: 'text-teal-800 dark:text-teal-300' },
  biologia: { rotulo: '🧬 Biologia', fundo: 'bg-emerald-100 dark:bg-emerald-950', texto: 'text-emerald-800 dark:text-emerald-300' },
  musica: { rotulo: '🎵 Música', fundo: 'bg-orange-100 dark:bg-orange-950', texto: 'text-orange-800 dark:text-orange-300' },
  psicologia: { rotulo: '🧠 Psicologia', fundo: 'bg-violet-100 dark:bg-violet-950', texto: 'text-violet-800 dark:text-violet-300' },
} as const;

/** O topo de cada aba de uma área do Perfil: a marca da área, o botão de voltar aos Idiomas e o título. */
export function AreaCabecalho({ area, titulo, subtitulo }: { area: keyof typeof MARCA; titulo: string; subtitulo?: string }) {
  const { db } = useApp();
  const m = MARCA[area];
  return (
    <View className="gap-1">
      <View className="flex-row items-center justify-between">
        <View className={`flex-row items-center gap-2 rounded-full px-3 py-1 ${m.fundo}`}>
          <Text className={`text-xs font-extrabold uppercase tracking-wider ${m.texto}`}>{m.rotulo}</Text>
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
