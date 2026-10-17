import { Pressable, Text, View } from 'react-native';
import { router, useIsFocused } from 'expo-router';
import { Map as MapIcon } from 'lucide-react-native';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { salvarModoApp } from '@/services/modo-app';

/** A marca de cada área (as classes ficam escritas por inteiro, para o Tailwind achar). */
const MARCA = {
  lazer: { rotulo: '🎲 Lazer', fundo: 'bg-teal-100 dark:bg-teal-950', texto: 'text-teal-800 dark:text-teal-300' },
  biologia: { rotulo: '🧬 Biologia', fundo: 'bg-emerald-100 dark:bg-emerald-950', texto: 'text-emerald-800 dark:text-emerald-300' },
  musica: { rotulo: '🎵 Música', fundo: 'bg-orange-100 dark:bg-orange-950', texto: 'text-orange-800 dark:text-orange-300' },
  psicologia: { rotulo: '🧠 Psicologia', fundo: 'bg-violet-100 dark:bg-violet-950', texto: 'text-violet-800 dark:text-violet-300' },
} as const;

/** O topo de cada aba de uma área do Perfil: a marca da área, o botão de voltar aos Idiomas e o título. */
export function AreaCabecalho({ area, titulo, subtitulo, semMapa }: { area: keyof typeof MARCA; titulo: string; subtitulo?: string; semMapa?: boolean }) {
  const { db } = useApp();
  const m = MARCA[area];
  // na web, as abas de trás continuam desenhadas por baixo da aba da frente: os botões delas ficam
  // escondidos do leitor de tela, que assim só anuncia o “← Idiomas” da aba em foco
  const focada = useIsFocused();
  return (
    <View className="gap-1">
      <View
        className="flex-row items-center justify-between"
        accessibilityElementsHidden={!focada}
        importantForAccessibility={focada ? 'auto' : 'no-hide-descendants'}
      >
        <View className={`flex-row items-center gap-2 rounded-full px-3 py-1 ${m.fundo}`}>
          <Text className={`text-xs font-extrabold uppercase tracking-wider ${m.texto}`}>{m.rotulo}</Text>
        </View>
        {/* no Lazer, as abas de baixo são as subáreas: o mapa dos jogos abre por aqui */}
        {area === 'lazer' && !semMapa && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Mapa dos jogos"
            onPress={() => router.push('/lazer-mapa')}
            className="ml-auto mr-2 flex-row items-center gap-1 rounded-full border border-teal-400 px-3 py-1 active:opacity-70"
          >
            <MapIcon size={14} color="#0D9488" />
            <Text className="text-xs font-bold text-teal-800 dark:text-teal-300">Mapa</Text>
          </Pressable>
        )}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar para os Idiomas"
          onPress={() => {
            haptics.tapLight();
            void salvarModoApp(db, 'idiomas');
          }}
          className="rounded-full border border-slate-300 px-3 py-1 active:opacity-70 dark:border-slate-600"
        >
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">← Idiomas</Text>
        </Pressable>
      </View>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{titulo}</Text>
      {subtitulo && <Text className="text-sm text-slate-600 dark:text-slate-400">{subtitulo}</Text>}
    </View>
  );
}
