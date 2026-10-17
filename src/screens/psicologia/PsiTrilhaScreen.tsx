import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { router, useFocusEffect } from 'expo-router';
import { Card, ProgressBar, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { CuidadoCard } from '@/components/psicologia/CuidadoCard';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_PSI, UNIDADES_PSI } from '@/data/psicologia/trilha';
import { useApp } from '@/services/app-state';
import { lessonKey, loadMiniProgress, type MiniProgress } from '@/services/mini-courses';
import { allLessons } from '@/services/mini-practice';

/**
 * A Trilha da Psicologia: as unidades em ordem, cada uma liberada quando a anterior termina (as lições
 * usam o motor dos minicursos: explicação, itens, perguntas, XP e prova final). Depois, os ramos que
 * ainda vão chegar.
 */
export default function PsiTrilhaScreen() {
  const { db } = useApp();
  const [feitas, setFeitas] = useState<MiniProgress>({});
  useFocusEffect(
    useCallback(() => {
      void loadMiniProgress(db).then(setFeitas);
    }, [db]),
  );

  const progresso = UNIDADES_PSI.map((u) => {
    const ls = allLessons(u);
    const n = ls.filter((l) => feitas[lessonKey(u.id, l.id)]).length;
    return { n, total: ls.length };
  });

  return (
    <Screen>
      <AreaCabecalho
        area="psicologia"
        titulo="Trilha"
        subtitulo="A psicologia como ciência: como a gente percebe, lembra e vive com os outros, em unidades curtas."
      />
      <CuidadoCard />
      <View ref={alvoDoTour('psi-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-violet-50 p-3 dark:bg-violet-950/40">
        <Linu mood="falando" size={56} />
        <Text className="flex-1 text-sm text-violet-900 dark:text-violet-100">
          Sabia que o Cofre usa uma descoberta da psicologia para você não esquecer as palavras? Vamos começar pelo começo: o que é psicologia.
        </Text>
      </View>

      <SectionTitle>Unidades</SectionTitle>
      <View className="gap-3">
        {UNIDADES_PSI.map((u, i) => {
          const p = progresso[i]!;
          const liberada = i === 0 || progresso[i - 1]!.n >= progresso[i - 1]!.total - 1;
          const completa = p.n >= p.total;
          return (
            <Pressable
              key={u.id}
              accessibilityRole="button"
              accessibilityState={{ disabled: !liberada }}
              disabled={!liberada}
              onPress={() => router.push({ pathname: '/curso/[id]', params: { id: u.id } })}
              className={`active:opacity-80 ${liberada ? '' : 'opacity-50'}`}
            >
              <Card className="gap-2">
                <View className="flex-row items-center gap-3">
                  <View className={`h-12 w-12 items-center justify-center rounded-full ${completa ? 'bg-violet-500' : 'bg-violet-100 dark:bg-violet-900'}`}>
                    <Text className="text-2xl">{u.emoji}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-xs font-bold text-violet-700 dark:text-violet-400">Unidade {i + 1}</Text>
                    <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{u.name}</Text>
                  </View>
                  <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">{liberada ? (completa ? '🏆' : `${p.n}/${p.total}`) : '🔒'}</Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{u.summary}</Text>
                <ProgressBar value={p.total ? p.n / p.total : 0} color="bg-violet-500" />
              </Card>
            </Pressable>
          );
        })}
      </View>

      <SectionTitle>Os próximos ramos</SectionTitle>
      <View className="gap-2">
        {PROXIMAS_UNIDADES_PSI.map((u) => (
          <View key={u.nome} className="flex-row items-center gap-3 rounded-2xl border border-dashed border-slate-300 p-3 dark:border-slate-700">
            <Text className="text-2xl">{u.emoji}</Text>
            <View className="flex-1">
              <Text className="font-bold text-slate-800 dark:text-slate-200">{u.nome} · em breve</Text>
              <Text className="text-xs text-slate-600 dark:text-slate-400">{u.sobre}</Text>
            </View>
          </View>
        ))}
      </View>
    </Screen>
  );
}
