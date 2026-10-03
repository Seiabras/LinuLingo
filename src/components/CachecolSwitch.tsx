import { Pressable, Text, View } from 'react-native';
import { useApp } from '@/services/app-state';
import { CORES_CACHECOL, setUsarCachecol, useCachecolConquistado, useUsarCachecol } from '@/services/cachecol';

/**
 * Usar ou guardar o cachecol do nível, com ou sem roupinha. Só aparece depois de conquistado (na
 * primeira travessia vencida); guardado, ele continua conquistado e volta com um toque.
 */
export function CachecolSwitch() {
  const { db } = useApp();
  const conquistado = useCachecolConquistado();
  const usar = useUsarCachecol();
  if (!conquistado) return null;
  const cor = CORES_CACHECOL[conquistado.cefr];
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: usar }}
      aria-checked={usar}
      accessibilityLabel={`Usar o cachecol ${cor.nome}`}
      onPress={() => setUsarCachecol(db, !usar)}
      className="flex-row items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-3 py-2 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
    >
      <View className="h-4 w-7 rounded-sm border" style={{ backgroundColor: cor.cores[1], borderColor: cor.cores[2], opacity: usar ? 1 : 0.35 }} />
      <Text className="flex-1 text-sm font-bold text-slate-800 dark:text-slate-100">🧣 Usar o cachecol {cor.nome}</Text>
      <View className={`h-6 w-11 justify-center rounded-full px-0.5 ${usar ? 'bg-conquista' : 'bg-slate-300 dark:bg-slate-600'}`}>
        <View className={`h-5 w-5 rounded-full bg-white ${usar ? 'self-end' : 'self-start'}`} />
      </View>
    </Pressable>
  );
}
