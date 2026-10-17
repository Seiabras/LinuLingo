import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { router, useFocusEffect } from 'expo-router';
import { Card, ProgressBar, Screen, SectionTitle } from '@/components/ui';
import { BioCabecalho } from '@/components/biologia/BioCabecalho';
import { Linu } from '@/components/Linu';
import { LinhaDoTempo } from '@/components/biologia/LinhaDoTempo';
import { Tirinha } from '@/components/biologia/Tirinha';
import { Pseudociencias } from '@/components/ciencia/Pseudociencias';
import { TIRINHAS } from '@/data/biologia/tirinhas';
import { PROXIMAS_UNIDADES, UNIDADES_BIO } from '@/data/biologia/trilha';
import { useApp } from '@/services/app-state';
import { lessonKey, loadMiniProgress, type MiniProgress } from '@/services/mini-courses';
import { allLessons } from '@/services/mini-practice';

/**
 * A Trilha da Biologia: as unidades em ordem, cada uma liberada quando a anterior termina (as lições
 * usam o motor dos minicursos: explicação, itens, perguntas, XP e prova final). Depois, os ramos que
 * ainda vão chegar.
 */
export default function BioTrilhaScreen() {
  const { db } = useApp();
  const [feitas, setFeitas] = useState<MiniProgress>({});
  useFocusEffect(
    useCallback(() => {
      void loadMiniProgress(db).then(setFeitas);
    }, [db]),
  );

  const progresso = UNIDADES_BIO.map((u) => {
    const ls = allLessons(u);
    const n = ls.filter((l) => feitas[lessonKey(u.id, l.id)]).length;
    return { n, total: ls.length };
  });

  return (
    <Screen>
      <BioCabecalho
        titulo="Trilha"
        subtitulo="A biologia em unidades curtas, contadas pelo Linu e pelos amigos dele, com a ponte para o idioma que você estuda."
      />
      <View ref={alvoDoTour('bio-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
        <Linu mood="falando" size={56} />
        <Text className="flex-1 text-sm text-emerald-900 dark:text-emerald-100">
          Eu sou um pinguim, então começo pelo que conheço: os bichos do frio. Depois vamos ver de onde vem o nome científico de cada um.
        </Text>
      </View>

      <SectionTitle>Unidades</SectionTitle>
      <View className="gap-3">
        {UNIDADES_BIO.map((u, i) => {
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
                  <View className={`h-12 w-12 items-center justify-center rounded-full ${completa ? 'bg-emerald-500' : 'bg-emerald-100 dark:bg-emerald-900'}`}>
                    <Text className="text-2xl">{u.emoji}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Unidade {i + 1}</Text>
                    <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{u.name}</Text>
                  </View>
                  <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">{liberada ? (completa ? '🏆' : `${p.n}/${p.total}`) : '🔒'}</Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{u.summary}</Text>
                {TIRINHAS[u.id] && <Tirinha quadros={TIRINHAS[u.id]!} />}
                <ProgressBar value={p.total ? p.n / p.total : 0} color="bg-emerald-500" />
              </Card>
            </Pressable>
          );
        })}
      </View>

      <SectionTitle>A linha do tempo da vida</SectionTitle>
      <LinhaDoTempo />

      <SectionTitle>Ciência ou não?</SectionTitle>
      <Pseudociencias
        area="biologia"
        intro="Pseudociência é o que se apresenta como ciência sem passar pelos testes da ciência. Na biologia, algumas já entraram até em sala de aula ou em leis. Toque num cartão para ver a evidência."
      />

      <SectionTitle>Os próximos ramos</SectionTitle>
      <View className="gap-2">
        {PROXIMAS_UNIDADES.map((u) => (
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
