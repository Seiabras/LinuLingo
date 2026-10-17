import { useCallback, useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Card, ProgressBar, SectionTitle } from '@/components/ui';
import type { MiniCourse } from '@/data/cursos/tipos';
import { useApp } from '@/services/app-state';
import { lessonKey, loadMiniProgress, type MiniProgress } from '@/services/mini-courses';
import { allLessons } from '@/services/mini-practice';

/** As cores de cada área (as classes ficam escritas por inteiro, para o Tailwind achar). */
export const TEMA_AREA = {
  marketing: {
    bolinha: 'bg-pink-100 dark:bg-pink-900',
    bolinhaFeita: 'bg-pink-500',
    rotulo: 'text-pink-700 dark:text-pink-400',
    barra: 'bg-pink-500',
    caixa: 'bg-pink-50 dark:bg-pink-950/40',
    caixaTexto: 'text-pink-900 dark:text-pink-100',
    linha: 'bg-pink-200 dark:bg-pink-800',
    marcado: 'border-pink-500 bg-pink-50 dark:bg-pink-950',
    botao: 'bg-pink-600',
    hex: '#db2777',
  },
  astronomia: {
    bolinha: 'bg-indigo-100 dark:bg-indigo-900',
    bolinhaFeita: 'bg-indigo-500',
    rotulo: 'text-indigo-700 dark:text-indigo-400',
    barra: 'bg-indigo-500',
    caixa: 'bg-indigo-50 dark:bg-indigo-950/40',
    caixaTexto: 'text-indigo-900 dark:text-indigo-100',
    linha: 'bg-indigo-200 dark:bg-indigo-800',
    marcado: 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950',
    botao: 'bg-indigo-600',
    hex: '#4f46e5',
  },
  direito: {
    bolinha: 'bg-amber-100 dark:bg-amber-900',
    bolinhaFeita: 'bg-amber-500',
    rotulo: 'text-amber-700 dark:text-amber-400',
    barra: 'bg-amber-500',
    caixa: 'bg-amber-50 dark:bg-amber-950/40',
    caixaTexto: 'text-amber-900 dark:text-amber-100',
    linha: 'bg-amber-200 dark:bg-amber-800',
    marcado: 'border-amber-500 bg-amber-50 dark:bg-amber-950',
    botao: 'bg-amber-600',
    hex: '#d97706',
  },
} as const;
export type AreaComTema = keyof typeof TEMA_AREA;

export interface ProximaUnidade {
  emoji: string;
  nome: string;
  sobre: string;
}

/**
 * A lista de unidades da Trilha de uma área (no molde da Trilha da Psicologia): cada unidade abre no
 * motor dos minicursos e libera a seguinte quando quase todas as lições dela estão feitas. Depois, os
 * ramos que ainda vão chegar.
 */
export function AreaTrilha({ area, unidades, proximas, children }: { area: AreaComTema; unidades: MiniCourse[]; proximas: ProximaUnidade[]; children?: ReactNode }) {
  const { db } = useApp();
  const t = TEMA_AREA[area];
  const [feitas, setFeitas] = useState<MiniProgress>({});
  useFocusEffect(
    useCallback(() => {
      void loadMiniProgress(db).then(setFeitas);
    }, [db]),
  );
  const progresso = unidades.map((u) => {
    const ls = allLessons(u);
    return { n: ls.filter((l) => feitas[lessonKey(u.id, l.id)]).length, total: ls.length };
  });

  return (
    <>
      {children}
      <SectionTitle>Unidades</SectionTitle>
      <View className="gap-3">
        {unidades.map((u, i) => {
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
                  <View className={`h-12 w-12 items-center justify-center rounded-full ${completa ? t.bolinhaFeita : t.bolinha}`}>
                    <Text className="text-2xl">{u.emoji}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className={`text-xs font-bold ${t.rotulo}`}>Unidade {i + 1}</Text>
                    <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{u.name}</Text>
                  </View>
                  <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">{liberada ? (completa ? '🏆' : `${p.n}/${p.total}`) : '🔒'}</Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{u.summary}</Text>
                <ProgressBar value={p.total ? p.n / p.total : 0} color={t.barra} />
              </Card>
            </Pressable>
          );
        })}
      </View>

      <SectionTitle>Os próximos ramos</SectionTitle>
      <View className="gap-2">
        {proximas.map((u) => (
          <View key={u.nome} className="flex-row items-center gap-3 rounded-2xl border border-dashed border-slate-300 p-3 dark:border-slate-700">
            <Text className="text-2xl">{u.emoji}</Text>
            <View className="flex-1">
              <Text className="font-bold text-slate-800 dark:text-slate-200">{u.nome} · em breve</Text>
              <Text className="text-xs text-slate-600 dark:text-slate-400">{u.sobre}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
}

export interface MarcoArea {
  ano: string;
  titulo: string;
  sobre: string;
}

/** A história de uma área em marcos, numa linha do tempo vertical (como a aba Brasil da Psicologia). */
export function MarcosArea({ area, marcos }: { area: AreaComTema; marcos: MarcoArea[] }) {
  const t = TEMA_AREA[area];
  return (
    <Card className="gap-0">
      {marcos.map((m, i) => (
        <View key={m.titulo} className="flex-row gap-3">
          <View className="w-16 items-center">
            <Text className={`text-center text-xs font-extrabold ${t.rotulo}`}>{m.ano}</Text>
            {i < marcos.length - 1 && <View className={`mt-1 w-0.5 flex-1 ${t.linha}`} />}
          </View>
          <View className="flex-1 pb-3">
            <Text className="font-extrabold text-slate-900 dark:text-white">{m.titulo}</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">{m.sobre}</Text>
          </View>
        </View>
      ))}
    </Card>
  );
}

/** Um cartão de texto: título e parágrafos (as fichas das abas de consulta). */
export function FichaArea({ titulo, linha, paragrafos }: { titulo: string; linha?: string; paragrafos: string[] }) {
  return (
    <Card className="gap-1">
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{titulo}</Text>
      {linha ? <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">{linha}</Text> : null}
      {paragrafos.map((p) => (
        <Text key={p} className="text-sm text-slate-700 dark:text-slate-300">
          {p}
        </Text>
      ))}
    </Card>
  );
}

/** As abas de dentro de uma tela (“No mundo”, “No Brasil”…). */
export function SeletorArea<K extends string>({ area, opcoes, valor, aoEscolher }: { area: AreaComTema; opcoes: readonly (readonly [K, string])[]; valor: K; aoEscolher: (k: K) => void }) {
  const t = TEMA_AREA[area];
  return (
    <View className="mt-3 flex-row flex-wrap gap-2">
      {opcoes.map(([k, nome]) => (
        <Pressable
          key={k}
          accessibilityRole="tab"
          accessibilityState={{ selected: valor === k }}
          onPress={() => aoEscolher(k)}
          className={`min-w-[30%] flex-1 rounded-xl border-2 p-2 ${valor === k ? t.marcado : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
        >
          <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}
