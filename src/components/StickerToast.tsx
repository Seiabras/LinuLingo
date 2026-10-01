import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onSticker, type StickerEvent } from '@/services/album';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';

/** Aviso de figurinha nova, por cima de qualquer tela; toque para abrir o álbum. */
export function StickerToast() {
  const [e, setE] = useState<StickerEvent | null>(null);
  const insets = useSafeAreaInsets();
  useEffect(() => onSticker(setE), []);
  useEffect(() => {
    if (!e) return;
    const t = setTimeout(() => setE(null), 4000);
    return () => clearTimeout(t);
  }, [e]);
  if (!e) return null;
  const c = WORLD.find((w) => w.iso === e.sticker.iso);
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      pointerEvents="box-none"
      style={{ position: 'absolute', top: insets.top + 8, left: 12, right: 12, alignItems: 'center', zIndex: 50 }}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${e.rare ? 'Figurinha rara' : e.isNew ? 'Figurinha nova' : 'Figurinha repetida'}: ${e.sticker.item.name}. Abrir o álbum`}
        onPress={() => {
          setE(null);
          router.push({ pathname: '/album', params: { sticker: e.sticker.id } });
        }}
        className="w-full max-w-md flex-row items-center gap-3 rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-3 shadow-lg dark:border-amber-700 dark:bg-slate-900"
      >
        <Text className="text-4xl">{e.sticker.item.emoji}</Text>
        <View className="flex-1">
          <Text className="text-xs font-extrabold uppercase tracking-wide text-amber-700 dark:text-amber-300">
            {e.rare ? '✨ Figurinha rara!' : e.isNew ? '🎁 Figurinha nova!' : `Repetida (×${e.count})`}
          </Text>
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">{e.sticker.item.name}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">{c ? `${flagOf(c.iso2)} ${c.name}` : e.sticker.iso} · toque para ver o álbum</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}
