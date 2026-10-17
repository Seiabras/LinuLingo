import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { CartaoJogo } from '@/components/KnowledgeGamesTab';
import { IconeOutroJogo } from '@/components/outros-jogos/IconeOutroJogo';
import { MapaArea, nomeDoPais } from '@/components/mapa/MapaArea';
import { KNOWLEDGE_GAMES } from '@/data/jogos-conhecimento';
import { PAISES_DO_JOGO, PAISES_DO_OUTRO_JOGO } from '@/data/jogos-paises';
import { AREAS_JOGO, OUTROS_JOGOS } from '@/data/outros-jogos';

const TABULEIRO = KNOWLEDGE_GAMES.filter((g) => g.status === 'pronto' && PAISES_DO_JOGO[g.id]);
const OUTROS = OUTROS_JOGOS.filter((g) => g.status === 'pronto' && PAISES_DO_OUTRO_JOGO[g.id]);

/** Lazer › Mapa: de onde vem cada jogo do app, tabuleiro, cartas, azar, esportes e videogames. */
export default function LazerMapaScreen() {
  const [pais, setPais] = useState<string | null>(null);
  const contagem = useMemo(() => {
    const c: Record<string, number> = {};
    for (const g of TABULEIRO) for (const iso of PAISES_DO_JOGO[g.id]) c[iso] = (c[iso] ?? 0) + 1;
    for (const g of OUTROS) for (const iso of PAISES_DO_OUTRO_JOGO[g.id]) c[iso] = (c[iso] ?? 0) + 1;
    return c;
  }, []);
  const tabuleiro = pais ? TABULEIRO.filter((g) => PAISES_DO_JOGO[g.id].includes(pais)) : [];
  const outros = pais ? OUTROS.filter((g) => PAISES_DO_OUTRO_JOGO[g.id].includes(pais)) : [];
  return (
    <Screen>
      <AreaCabecalho area="lazer" semMapa titulo="Mapa" subtitulo="De onde vem cada jogo: onde nasceu, foi criado ou virou o que é hoje." />
      <View className="mt-3 gap-3">
        <MapaArea contagem={contagem} cor="#0D9488" selecionado={pais} aoEscolher={setPais} unidade={['jogo', 'jogos']} />
        {!pais && <Text className="text-sm text-slate-600 dark:text-slate-400">Toque num país para ver os jogos de lá.</Text>}
        {pais && (
          <View className="gap-2">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">
              {nomeDoPais(pais)}: {contagem[pais]} {contagem[pais] === 1 ? 'jogo' : 'jogos'}
            </Text>
            {tabuleiro.length > 0 && (
              <View className="flex-row flex-wrap justify-between gap-y-3">
                {tabuleiro.map((g) => (
                  <CartaoJogo key={g.id} g={g} />
                ))}
              </View>
            )}
            {outros.map((g) => (
              <Pressable
                key={g.id}
                accessibilityRole="button"
                onPress={() => router.push(`/jogos/${g.area}/${g.id}`)}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-3 active:opacity-80 dark:bg-slate-900"
              >
                <IconeOutroJogo id={g.id} emoji={g.emoji} tamanho={40} />
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-white">{g.name}</Text>
                  <Text className="text-xs text-slate-600 dark:text-slate-400">{AREAS_JOGO.find((a) => a.id === g.area)?.nome}</Text>
                </View>
                <Text className="text-lg text-slate-500 dark:text-slate-400">›</Text>
              </Pressable>
            ))}
            {[...tabuleiro, ...outros].map((g) => (
              <Text key={g.id} className="text-xs text-slate-600 dark:text-slate-400">
                <Text className="font-bold">{g.name}:</Text> {g.where}
              </Text>
            ))}
          </View>
        )}
      </View>
    </Screen>
  );
}
