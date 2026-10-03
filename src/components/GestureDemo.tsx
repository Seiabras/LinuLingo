import { useState } from 'react';
import { Text, View } from 'react-native';
import { SwipeCard, type SwipeDir } from '@/components/SwipeCard';

const GESTURE_FEEDBACK: Record<SwipeDir, string> = {
  direita: '→ Sei! As próximas revisões ficam mais espaçadas.',
  esquerda: '← Não sei. Ele volta amanhã e a contagem recomeça.',
  cima: '↑ Fácil! Os intervalos crescem mais rápido.',
  baixo: '↓ Difícil. Conta como acerto, mas os intervalos crescem devagar.',
};

/** Um cartão de treino para experimentar os 4 gestos do sprint e da revisão, com o que cada um faz. */
export function GestureDemo() {
  const [last, setLast] = useState<SwipeDir | null>(null);
  const [n, setN] = useState(0);
  return (
    <View className="items-center gap-1">
      <Text className="text-[11px] font-bold text-conquista">↑ fácil</Text>
      <View className="w-full flex-row items-center gap-2">
        <Text className="text-[11px] font-bold text-rose-500">
          ←{'\n'}não{'\n'}sei
        </Text>
        <View className="flex-1">
          {/* o cartão sai voando no gesto: a `key` traz um novo para tentar de novo */}
          <SwipeCard
            key={n}
            onSwipe={(d) => {
              setLast(d);
              setTimeout(() => setN((k) => k + 1), 250);
            }}
          >
            <View className="items-center rounded-2xl border-2 border-slate-200 bg-white py-2 dark:border-slate-700 dark:bg-slate-900">
              <Text style={{ fontSize: 34, lineHeight: 42 }}>🐧</Text>
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">pinguim</Text>
            </View>
          </SwipeCard>
        </View>
        <Text className="text-right text-[11px] font-bold text-conquista">→{'\n'}sei</Text>
      </View>
      <Text className="text-[11px] font-bold text-amber-600">↓ difícil</Text>
      <Text className="min-h-[36px] text-center text-sm font-semibold text-conecta">
        {last ? GESTURE_FEEDBACK[last] : 'Arraste o cartão para qualquer lado 👆'}
      </Text>
    </View>
  );
}
