import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';
import { Linu } from '../Linu';
import { Button, Card, ProgressBar } from '../ui';
import { retentionLevel } from '@/srs/sm2';
import type { VocabWithSRS } from '@/types';
import * as haptics from '@/services/haptics';

const CONFETTI = ['🎉', '✨', '⭐', '🎊', '💫', '🌟'];

/** Etapa 6 — recompensa: XP ganho, ofensiva e retenção das palavras no SRS. */
export function RewardStep({
  xp,
  correct,
  total,
  streak,
  usedFreeze,
  words,
  onContinue,
}: {
  xp: number;
  correct: number;
  total: number;
  streak: number;
  usedFreeze: boolean;
  words: VocabWithSRS[];
  onContinue: () => void;
}) {
  useEffect(() => haptics.success(), []);
  const pct = total ? Math.round((correct / total) * 100) : 100;

  return (
    <View className="flex-1 gap-4">
      <View className="flex-row justify-center gap-3">
        {CONFETTI.map((c, i) => (
          <Animated.Text key={i} entering={ZoomIn.delay(i * 90).springify()} className="text-2xl">
            {c}
          </Animated.Text>
        ))}
      </View>
      <View className="items-center">
        <Linu mood="comemorando" size={120} />
        <Text className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">Lição concluída!</Text>
        <Text className="text-slate-500 dark:text-slate-400">{pct === 100 ? 'Perfeito, sem nenhum erro!' : `Você acertou ${pct}%`}</Text>
      </View>

      <View className="flex-row gap-3">
        <Stat entering={0} label="XP ganho" value={`+${xp}`} color="text-amber-500" />
        <Stat entering={1} label="Acertos" value={`${correct}/${total}`} color="text-conquista" />
        <Stat entering={2} label="Ofensiva" value={`🔥 ${streak}`} color="text-fogo" />
      </View>
      {usedFreeze && <Text className="text-center text-sm text-conecta">🧊 Um congelamento protegeu sua ofensiva de ontem.</Text>}

      {words.length > 0 && (
        <Card className="gap-3">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Fixação no SRS</Text>
          {words.map((w) => {
            const r = retentionLevel(w.repetition, w.ease_factor);
            const days = w.interval ?? 0;
            return (
              <View key={w.id} className="gap-1">
                <View className="flex-row items-center justify-between">
                  <Text className="font-semibold text-slate-800 dark:text-slate-100">
                    {w.emoji} {w.word_target}
                  </Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400">revisar em {days} {days === 1 ? 'dia' : 'dias'}</Text>
                </View>
                <ProgressBar value={Math.max(0.08, r)} color={r >= 0.5 ? 'bg-conquista' : 'bg-conecta'} />
              </View>
            );
          })}
        </Card>
      )}

      <Button title="Continuar" variant="success" onPress={onContinue} />
    </View>
  );
}

function Stat({ label, value, color, entering }: { label: string; value: string; color: string; entering: number }) {
  return (
    <Animated.View entering={FadeInDown.delay(300 + entering * 120)} className="flex-1 items-center rounded-2xl border-2 border-slate-200 bg-white py-3 dark:border-slate-700 dark:bg-slate-900">
      <Text className={`text-2xl font-extrabold ${color}`}>{value}</Text>
      <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</Text>
    </Animated.View>
  );
}
