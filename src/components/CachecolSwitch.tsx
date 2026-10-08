import { Pressable, Text, View } from 'react-native';
import { useApp } from '@/services/app-state';
import { CORDAS, setUsarCachecol, useCachecolConquistado, useUsarCachecol } from '@/services/cachecol';
import { CordaAmostra } from './CordaAmostra';

/**
 * Usar ou guardar o cachecol da corda, com ou sem roupinha. Guardado, ele continua conquistado e
 * volta com um toque.
 */
export function CachecolSwitch() {
  const { db } = useApp();
  const conquistado = useCachecolConquistado();
  const usar = useUsarCachecol();
  if (!conquistado) return null;
  const nome = CORDAS[conquistado.corda].nome;
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: usar }}
      aria-checked={usar}
      accessibilityLabel={`Usar o cachecol ${nome}`}
      onPress={() => setUsarCachecol(db, !usar)}
      className="flex-row items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-3 py-2 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
    >
      <CordaAmostra corda={conquistado.corda} apagada={!usar} />
      <Text className="flex-1 text-sm font-bold text-slate-800 dark:text-slate-100">🧣 Usar o cachecol {nome}</Text>
      <View className={`h-6 w-11 justify-center rounded-full px-0.5 ${usar ? 'bg-conquista' : 'bg-slate-300 dark:bg-slate-600'}`}>
        <View className={`h-5 w-5 rounded-full bg-white ${usar ? 'self-end' : 'self-start'}`} />
      </View>
    </Pressable>
  );
}
