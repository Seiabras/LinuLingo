import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Card, SpeakButton } from '@/components/ui';
import { MINI_COURSES } from '@/data/cursos';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

/** Quantas expressões aparecem antes do “mostrar todas”. */
const PRIMEIRAS = 20;

/**
 * Cultura → Gírias e expressões (pedido do dono, 16/10/2026): junta num lugar só o que o app já tem
 * de gíria e de expressão, sem conteúdo novo — os minicursos de gíria (gíria gamer, Mabelleto) e as
 * expressões do idioma que a pessoa estuda (o vocabulário da categoria “Expressões”). Os criptoletos
 * ficam só em Tipos de línguas › Secretas e cifras (decisão do dono, 16/10/2026).
 */
export function GiriasTab() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [todas, setTodas] = useState(false);
  const cursos = MINI_COURSES.filter((c) => c.kind === 'giria');
  const expressoes = pack.vocab.filter((v) => v.category === 'Expressões');
  const visiveis = todas ? expressoes : expressoes.slice(0, PRIMEIRAS);
  const titulo = 'text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400';

  return (
    <View className="mt-3 gap-3">
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        Gíria é o vocabulário de um grupo (quem joga, quem vive num bairro, uma pessoa só); expressão é o jeito pronto de dizer algo, que não se traduz palavra por palavra.
      </Text>

      <Text className={titulo}>Gírias para aprender</Text>
      {cursos.map((c) => (
        <Pressable
          key={c.id}
          accessibilityRole="button"
          onPress={() => router.push({ pathname: '/curso/[id]', params: { id: c.id } })}
          className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
        >
          <Text className="text-3xl">{c.emoji}</Text>
          <View className="flex-1">
            <Text className="font-bold text-slate-900 dark:text-white">
              {c.name}
              {c.rascunho ? <Text className="text-xs font-semibold text-amber-700 dark:text-amber-400"> · em construção</Text> : null}
            </Text>
            <Text className="text-xs text-slate-600 dark:text-slate-400" numberOfLines={3}>
              {c.summary}
            </Text>
          </View>
          <ChevronRight size={20} color={dark ? '#94a3b8' : '#64748b'} />
        </Pressable>
      ))}

      <Text className={titulo}>Expressões do {nomeIdioma(pack.name)}</Text>
      {expressoes.length === 0 ? (
        <Card>
          <Text className="text-sm text-slate-600 dark:text-slate-400">O {nomeIdioma(pack.name)} ainda não tem expressões separadas no vocabulário.</Text>
        </Card>
      ) : (
        <Card className="gap-2">
          {visiveis.map((v) => (
            <View key={v.id} className="flex-row items-center gap-2 border-b border-slate-100 pb-2 last:border-b-0 dark:border-slate-800">
              <View className="flex-1">
                <Text className="font-semibold text-slate-900 dark:text-white">{v.word_target}</Text>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{v.word_native}</Text>
              </View>
              {pack.speechLocale && <SpeakButton text={v.word_target} locale={pack.speechLocale} size={18} />}
            </View>
          ))}
          {expressoes.length > PRIMEIRAS && (
            <Pressable accessibilityRole="button" onPress={() => setTodas((t) => !t)} className="items-center py-1">
              <Text className="text-sm font-bold text-conecta dark:text-conecta-400">{todas ? 'Mostrar menos' : `Mostrar todas (${expressoes.length})`}</Text>
            </Pressable>
          )}
        </Card>
      )}
    </View>
  );
}
