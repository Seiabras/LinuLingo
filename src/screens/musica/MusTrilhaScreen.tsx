import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { router, useFocusEffect } from 'expo-router';
import { Card, ProgressBar, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Linu } from '@/components/Linu';
import { CURSOS_EM_BREVE, CURSOS_INSTRUMENTO, UNIDADES_MUS } from '@/data/musica/trilha';
import type { MiniCourse } from '@/data/cursos/tipos';
import { useApp } from '@/services/app-state';
import { lessonKey, loadMiniProgress, type MiniProgress } from '@/services/mini-courses';
import { allLessons } from '@/services/mini-practice';

function CartaoUnidade({ u, rotulo, feitas, liberada }: { u: MiniCourse; rotulo: string; feitas: MiniProgress; liberada: boolean }) {
  const ls = allLessons(u);
  const n = ls.filter((l) => feitas[lessonKey(u.id, l.id)]).length;
  const completa = n >= ls.length;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !liberada }}
      disabled={!liberada}
      onPress={() => router.push({ pathname: '/curso/[id]', params: { id: u.id } })}
      className={`active:opacity-80 ${liberada ? '' : 'opacity-50'}`}
    >
      <Card className="gap-2">
        <View className="flex-row items-center gap-3">
          <View className={`h-12 w-12 items-center justify-center rounded-full ${completa ? 'bg-orange-500' : 'bg-orange-100 dark:bg-orange-900'}`}>
            <Text className="text-2xl">{u.emoji}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-xs font-bold text-orange-700 dark:text-orange-400">{rotulo}</Text>
            <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{u.name}</Text>
          </View>
          <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">{liberada ? (completa ? '🏆' : `${n}/${ls.length}`) : '🔒'}</Text>
        </View>
        <Text className="text-sm text-slate-600 dark:text-slate-400">{u.summary}</Text>
        <ProgressBar value={ls.length ? n / ls.length : 0} color="bg-orange-500" />
      </Card>
    </Pressable>
  );
}

/**
 * A Trilha da Música: as unidades de teoria (com a partitura desde o começo) e os cursos de instrumento
 * (um curso para cada instrumento, pedido do dono de 17/10/2026), começando pelo teclado.
 */
export default function MusTrilhaScreen() {
  const { db } = useApp();
  const [feitas, setFeitas] = useState<MiniProgress>({});
  useFocusEffect(
    useCallback(() => {
      void loadMiniProgress(db).then(setFeitas);
    }, [db]),
  );
  const feitasDe = (u: MiniCourse) => allLessons(u).filter((l) => feitas[lessonKey(u.id, l.id)]).length;

  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Trilha" subtitulo="A teoria explicada, com a partitura desde o começo e o som de cada exemplo." />
      <View ref={alvoDoTour('mus-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-orange-50 p-3 dark:bg-orange-950/40">
        <Linu mood="falando" size={56} />
        <Text className="flex-1 text-sm text-orange-900 dark:text-orange-100">Sabia que os nomes das notas vêm de um poema em latim? Começa pela unidade das notas e depois aprende a ler a pauta.</Text>
      </View>

      <SectionTitle>Unidades</SectionTitle>
      <View className="gap-3">
        {UNIDADES_MUS.map((u, i) => {
          const ant = UNIDADES_MUS[i - 1];
          const liberada = !ant || feitasDe(ant) >= allLessons(ant).length - 1;
          return <CartaoUnidade key={u.id} u={u} rotulo={`Unidade ${i + 1}`} feitas={feitas} liberada={liberada} />;
        })}
      </View>

      <SectionTitle>Cursos de instrumento</SectionTitle>
      <View className="gap-3">
        <Pressable accessibilityRole="button" onPress={() => router.push('/instrumento/clarinete')} className="active:opacity-80">
          <Card className="gap-1">
            <View className="flex-row items-center gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <Text className="text-2xl">🎵</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs font-bold text-orange-700 dark:text-orange-400">Curso · Si♭, Dó, Lá ou Mi♭</Text>
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Curso de clarinete</Text>
              </View>
              <Text className="text-lg text-slate-500">›</Text>
            </View>
            <Text className="text-sm text-slate-600 dark:text-slate-400">O dedilhado desenhado, a partitura e o app ouvindo você tocar, no clarinete que você tem.</Text>
          </Card>
        </Pressable>
        {CURSOS_INSTRUMENTO.map((u) => (
          <CartaoUnidade key={u.id} u={u} rotulo="Curso" feitas={feitas} liberada />
        ))}
        {CURSOS_EM_BREVE.map((c) => (
          <View key={c.nome} className="flex-row items-center gap-3 rounded-2xl border border-dashed border-slate-300 p-3 dark:border-slate-700">
            <Text className="text-2xl">{c.emoji}</Text>
            <View className="flex-1">
              <Text className="font-bold text-slate-800 dark:text-slate-200">{c.nome} · em breve</Text>
              <Text className="text-xs text-slate-600 dark:text-slate-400">{c.sobre}</Text>
            </View>
          </View>
        ))}
      </View>
    </Screen>
  );
}
