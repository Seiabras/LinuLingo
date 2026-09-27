import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onNeuralState, type NeuralState } from '@/services/neural-tts';

/**
 * Aviso da voz neural embutida: na primeira vez, o modelo do idioma (~63 MB) é baixado, e o aluno
 * precisa saber por que o som ainda não saiu. Some sozinho quando a voz fica pronta.
 */
export function NeuralVoiceToast() {
  const [s, setS] = useState<NeuralState | null>(null);
  const downloading = useRef(new Set<string>());
  const insets = useSafeAreaInsets();

  useEffect(
    () =>
      onNeuralState((st) => {
        if (st.status === 'baixando') {
          downloading.current.add(st.voice.id);
          setS(st);
        } else if (downloading.current.has(st.voice.id) || st.status === 'erro') {
          // «pronta» só aparece depois de um download (as outras vezes são instantâneas)
          downloading.current.delete(st.voice.id);
          setS(st);
        }
      }),
    [],
  );
  useEffect(() => {
    if (!s || s.status === 'baixando') return;
    const t = setTimeout(() => setS(null), s.status === 'erro' ? 6000 : 3500);
    return () => clearTimeout(t);
  }, [s]);
  if (!s) return null;

  const pct = s.total ? Math.min(100, Math.round((s.loaded / s.total) * 100)) : 0;
  const title =
    s.status === 'baixando' ? `🔊 Baixando a voz: ${s.voice.label}` : s.status === 'pronta' ? `✅ Voz pronta: ${s.voice.label}` : '⚠️ Não deu para baixar a voz';
  const sub =
    s.status === 'baixando'
      ? `${pct}% de ${s.voice.mb} MB · só na primeira vez; depois funciona sem internet`
      : s.status === 'pronta'
        ? 'Guardada neste aparelho: funciona também sem internet.'
        : 'Confira a internet e toque no som de novo.';
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      pointerEvents="none"
      style={{ position: 'absolute', top: insets.top + 8, left: 12, right: 12, alignItems: 'center', zIndex: 49 }}
    >
      <View
        accessibilityRole="alert"
        accessibilityLiveRegion="polite"
        className="w-full max-w-md gap-1.5 rounded-2xl border-2 border-blue-200 bg-white px-4 py-3 shadow-lg dark:border-blue-900 dark:bg-slate-900"
      >
        <Text className="text-sm font-extrabold text-slate-900 dark:text-white">{title}</Text>
        {s.status === 'baixando' && (
          <View className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <View style={{ width: `${pct}%` }} className="h-2 rounded-full bg-conecta" />
          </View>
        )}
        <Text className="text-xs text-slate-500 dark:text-slate-400">{sub}</Text>
      </View>
    </Animated.View>
  );
}
