import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onAjusteXp, type AjusteXp } from '@/services/xp-regras';

const TEXTO: Record<NonNullable<AjusteXp['motivo']>, string> = {
  repetido: 'Você já tinha feito isto: repetir vale metade do XP. Conteúdo novo vale inteiro!',
  limite: 'Já foram 3 rodadas desta prática hoje: até amanhã ela vale metade do XP.',
};

/** Avisa, por cima de qualquer tela, quando o XP veio pela metade (regras em xp-regras.ts). */
export function XpToast() {
  const [a, setA] = useState<(AjusteXp & { original: number }) | null>(null);
  const insets = useSafeAreaInsets();
  useEffect(() => onAjusteXp(setA), []);
  useEffect(() => {
    if (!a) return;
    const t = setTimeout(() => setA(null), 4500);
    return () => clearTimeout(t);
  }, [a]);
  if (!a?.motivo) return null;
  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutDown}
      pointerEvents="none"
      style={{ position: 'absolute', bottom: insets.bottom + 72, left: 12, right: 12, alignItems: 'center', zIndex: 47 }}
    >
      <View
        accessibilityRole="alert"
        accessibilityLiveRegion="polite"
        className="w-full max-w-md flex-row items-center gap-2 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-2 shadow dark:border-amber-700 dark:bg-slate-900"
      >
        <Text className="text-base">⚡</Text>
        <Text className="shrink text-xs text-slate-700 dark:text-slate-200">
          <Text className="font-extrabold">+{a.xp} XP</Text> · {TEXTO[a.motivo]}
        </Text>
      </View>
    </Animated.View>
  );
}
