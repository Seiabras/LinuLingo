import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Pseudociencias } from '@/components/ciencia/Pseudociencias';
import { FAMILIA_DO_INSTRUMENTO, FAMILIAS, PESSOAS_MUSICA, PROFISSOES_MUSICA, type Familia } from '@/data/musica/mundo';
import { INSTRUMENTOS } from '@/data/sons-nomes';
import { useApp } from '@/services/app-state';
import { SONS } from '@/data/sons';
import { playClip } from '@/services/speech';

type Parte = 'instrumentos' | 'pessoas' | 'profissoes' | 'ciencia';

/** O Mundo da Música: os instrumentos por família (com o som e o nome no idioma estudado), as pessoas, as profissões e as pseudociências. */
export default function MundoMusicaScreen() {
  const { pack } = useApp();
  const [parte, setParte] = useState<Parte>('instrumentos');
  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Mundo" subtitulo="Os instrumentos, as pessoas e as profissões da música, e o que é mito." />
      <View className="mt-3 flex-row flex-wrap gap-1.5">
        {(
          [
            ['instrumentos', 'Instrumentos'],
            ['pessoas', 'Pessoas'],
            ['profissoes', 'Profissões'],
            ['ciencia', 'Ciência ou não?'],
          ] as const
        ).map(([k, n]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: parte === k }}
            onPress={() => setParte(k)}
            className={`rounded-full border-2 px-3 py-1.5 ${parte === k ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{n}</Text>
          </Pressable>
        ))}
      </View>

      {parte === 'instrumentos' &&
        (Object.keys(FAMILIAS) as Familia[]).map((f) => {
          const lista = INSTRUMENTOS.filter((i) => FAMILIA_DO_INSTRUMENTO[i.id] === f);
          return (
            <View key={f}>
              <SectionTitle>{FAMILIAS[f].nome}</SectionTitle>
              <Text className="mb-2 text-sm text-slate-600 dark:text-slate-400">{FAMILIAS[f].como}</Text>
              <View className="flex-row flex-wrap gap-2">
                {lista.map((i) => (
                  <Pressable key={i.id} accessibilityRole="button" accessibilityLabel={`Ouvir ${i.pt}`} onPress={() => SONS[i.id] && playClip(SONS[i.id]!.src)} className="w-[48%] active:opacity-80">
                    <Card className="gap-0.5">
                      <Text className="font-extrabold text-slate-900 dark:text-white">{i.pt}</Text>
                      {i.names[pack.code] && (
                        <Text className="text-xs text-conecta-dark dark:text-conecta-300">
                          {pack.flag} {i.names[pack.code]}
                        </Text>
                      )}
                      <Text className="text-[11px] font-bold text-orange-700 dark:text-orange-400">▶ ouvir</Text>
                    </Card>
                  </Pressable>
                ))}
              </View>
              {lista.length === 0 && <Text className="text-xs text-slate-500">Os sons desta família ainda vão chegar.</Text>}
            </View>
          );
        })}
      {parte === 'instrumentos' && <Text className="mt-3 text-[10px] text-slate-500">Classificação de Hornbostel e Sachs (1914), pelo jeito de produzir o som.</Text>}

      {parte === 'pessoas' && (
        <View className="mt-3 gap-2">
          {PESSOAS_MUSICA.map((p) => (
            <Card key={p.nome} className="gap-0.5">
              <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
              {p.anos && <Text className="text-xs font-bold text-orange-700 dark:text-orange-400">{p.anos}</Text>}
              <Text className="text-sm text-slate-700 dark:text-slate-300">{p.fez}</Text>
            </Card>
          ))}
        </View>
      )}

      {parte === 'profissoes' && (
        <View className="mt-3 gap-2">
          {PROFISSOES_MUSICA.map((p) => (
            <Card key={p.nome} className="flex-row items-center gap-3">
              <Text className="text-2xl">{p.emoji}</Text>
              <View className="flex-1">
                <Text className="font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{p.sobre}</Text>
              </View>
            </Card>
          ))}
        </View>
      )}

      {parte === 'ciencia' && (
        <View className="mt-3">
          <Pseudociencias area="musica" intro="Ideias famosas sobre música e cérebro que a pesquisa não sustenta, com o que se sabe de verdade." />
        </View>
      )}
    </Screen>
  );
}
