import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SwipeCard, type SwipeDir } from '@/components/SwipeCard';
import { useAppReduceMotion } from '@/services/accessibility';

const GESTURE_FEEDBACK: Record<SwipeDir, string> = {
  direita: '→ Sei! As próximas revisões ficam mais espaçadas.',
  esquerda: '← Não sei. Ele volta amanhã e a contagem recomeça.',
  cima: '↑ Fácil! Os intervalos crescem mais rápido.',
  baixo: '↓ Difícil. Conta como acerto, mas os intervalos crescem devagar.',
};

const EXEMPLO_TEXTO = 'Este é só um exemplo: aperte em Próximo para continuar o tutorial.';

/**
 * Um cartão de treino para experimentar os 4 gestos do sprint e da revisão, com o que cada um faz.
 * Pedido do Matheus (04-05/10/2026): quem repete o MESMO lado sem avançar pro tutorial real
 * provavelmente não viu o aviso — a partir da 2ª vez em seguida, o aviso pisca em vermelho/cinza
 * (parado se "reduzir movimento" estiver ligado); a partir da 4ª, ele vira um card bem grande na
 * FRENTE do pinguim, com "ok" embaixo como se o Linu tivesse falando.
 */
export function GestureDemo() {
  const [last, setLast] = useState<SwipeDir | null>(null);
  const [n, setN] = useState(0);
  const [sameDirCount, setSameDirCount] = useState(0);
  const [blinkOn, setBlinkOn] = useState(true);
  const reduceMotion = useAppReduceMotion();
  const destacar = sameDirCount >= 2;
  const emFrente = sameDirCount >= 4;

  useEffect(() => {
    if (!destacar || emFrente || reduceMotion) return;
    const id = setInterval(() => setBlinkOn((b) => !b), 450);
    return () => clearInterval(id);
  }, [destacar, emFrente, reduceMotion]);

  const onSwipe = (d: SwipeDir) => {
    setSameDirCount((c) => (d === last ? c + 1 : 1));
    setLast(d);
    setTimeout(() => setN((k) => k + 1), 250);
  };

  return (
    <View className="items-center gap-1">
      <Text className="text-[11px] font-bold text-conquista-dark dark:text-green-400">↑ fácil</Text>
      <View className="w-full flex-row items-center gap-2">
        <Text className="text-[11px] font-bold text-rose-600 dark:text-rose-400">
          ←{'\n'}não{'\n'}sei
        </Text>
        <View className="flex-1" style={{ overflow: 'hidden', paddingVertical: 90 }}>
          {/* o cartão sai voando no gesto: a `key` traz um novo para tentar de novo. `overflow:
              hidden` + `distance` curta (menor que o respiro de `paddingVertical`) impedem o
              cartão de atravessar o balão do tutorial e vazar por cima da barra de abas durante
              a animação (achado real do Matheus testando no celular). */}
          <SwipeCard key={n} distance={70} onSwipe={onSwipe}>
            <View className="items-center rounded-2xl border-2 border-slate-200 bg-white py-2 dark:border-slate-700 dark:bg-slate-900">
              <Text style={{ fontSize: 34, lineHeight: 42 }}>🐧</Text>
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">pinguim</Text>
            </View>
          </SwipeCard>
          {emFrente && (
            <View className="absolute inset-0 items-center justify-center gap-1 rounded-2xl bg-white/95 px-3 dark:bg-slate-900/95">
              <Text className="text-center text-base font-extrabold leading-5 text-rose-600 dark:text-rose-400">{EXEMPLO_TEXTO}</Text>
              <Text className="text-sm font-bold text-slate-600 dark:text-slate-400">— ok</Text>
            </View>
          )}
        </View>
        <Text className="text-right text-[11px] font-bold text-conquista-dark dark:text-green-400">→{'\n'}sei</Text>
      </View>
      <Text className="text-[11px] font-bold text-amber-700 dark:text-amber-400">↓ difícil</Text>
      <Text className="min-h-[36px] text-center text-sm font-semibold text-conecta dark:text-blue-400">
        {last ? GESTURE_FEEDBACK[last] : 'Arraste o cartão para qualquer lado 👆'}
      </Text>
      {last && !emFrente && (
        <Text
          className={`text-center text-xs font-semibold ${destacar ? (blinkOn ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400') : 'text-slate-600 dark:text-slate-400'}`}
        >
          {EXEMPLO_TEXTO}
        </Text>
      )}
    </View>
  );
}
