import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onNativeSpeaker, type NativeSpeaker } from '@/services/speech';
import { FALANTES } from '@/data/falantes';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';

/** De onde é quem gravou: «Cartagena das Índias, Colômbia» (sem o país repetido quando o lugar já é ele). */
export function speakerPlace(lang: string, speaker: string): { text: string; flag: string } | null {
  const f = FALANTES[lang]?.[speaker] ?? FALANTES[lang]?.[speaker.replace(/ /g, '_')] ?? FALANTES[lang]?.[speaker.replace(/_/g, ' ')];
  if (!f) return null;
  const c = WORLD.find((w) => w.iso === f.country);
  const country = c?.name ?? f.country;
  return { text: f.place === country ? country : `${f.place}, ${country}`, flag: c ? flagOf(c.iso2) : '' };
}

/**
 * Aviso discreto quando toca a gravação de um falante nativo: quem fala e de onde ele é — o sotaque
 * vem de lá. Some sozinho em alguns segundos.
 */
export function NativeSpeakerToast() {
  const [s, setS] = useState<(NativeSpeaker & { n: number }) | null>(null);
  const count = useRef(0);
  const insets = useSafeAreaInsets();
  // cada gravação nova reinicia o aviso (a chave muda)
  useEffect(() => onNativeSpeaker((x) => setS({ ...x, n: ++count.current })), []);
  useEffect(() => {
    if (!s) return;
    const t = setTimeout(() => setS(null), 3500);
    return () => clearTimeout(t);
  }, [s]);
  if (!s) return null;
  const where = speakerPlace(s.lang, s.speaker);
  return (
    <Animated.View
      key={s.n}
      entering={FadeInDown}
      exiting={FadeOutDown}
      pointerEvents="none"
      style={{ position: 'absolute', bottom: insets.bottom + 72, left: 12, right: 12, alignItems: 'center', zIndex: 48 }}
    >
      <View accessibilityRole="text" accessibilityLabel={`Gravação de ${s.speaker}${where ? `, de ${where.text}` : ''}`} className="max-w-md flex-row items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow dark:border-slate-700 dark:bg-slate-900/95">
        <Text className="text-sm">🎙️</Text>
        <Text numberOfLines={2} className="shrink text-xs text-slate-700 dark:text-slate-200">
          <Text className="font-extrabold">{s.speaker}</Text>
          {where ? ` · ${where.flag} ${where.text}` : ' · falante nativo'}
          <Text className="text-slate-400"> · {s.license}</Text>
        </Text>
      </View>
    </Animated.View>
  );
}
