import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { SubareaLazer } from '@/components/outros-jogos/SubareaLazer';
import { AREAS_JOGO, jogosDaArea, type AreaJogo } from '@/data/outros-jogos';

/** Lazer › Mais jogos: as subáreas que não são tabuleiro nem cartas (azar, brincadeiras, esportes…). */
export default function LazerMaisScreen() {
  const areas = AREAS_JOGO.filter((a) => a.id !== 'cartas');
  const [area, setArea] = useState<AreaJogo>(areas[0].id);
  return (
    <Screen>
      <AreaCabecalho area="lazer" titulo="Mais jogos" subtitulo="Azar, brincadeiras, esportes, videogames e RPG." />
      <View className="mt-3 flex-row flex-wrap gap-1.5">
        {areas.map((a) => {
          const n = jogosDaArea(a.id).filter((g) => g.status === 'pronto').length;
          return (
            <Pressable
              key={a.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: area === a.id }}
              accessibilityLabel={`${a.nome}, ${n} ${n === 1 ? 'jogo' : 'jogos'}`}
              onPress={() => setArea(a.id)}
              className={`rounded-full border-2 px-3 py-1.5 ${area === a.id ? 'border-teal-500 bg-teal-50 dark:bg-teal-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
                {a.emoji} {a.nome} ({n})
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View className="mt-3">
        <SubareaLazer key={area} area={area} />
      </View>
    </Screen>
  );
}
