import { useMemo, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Pseudociencias } from '@/components/ciencia/Pseudociencias';
import { FAMILIA_DO_INSTRUMENTO, FAMILIAS, PESSOAS_MUSICA, PROFISSOES_MUSICA, type Familia } from '@/data/musica/mundo';
import { INSTRUMENTOS } from '@/data/sons-nomes';
import { useApp } from '@/services/app-state';
import { SONS } from '@/data/sons';
import { playClip } from '@/services/speech';
import { MapaArea, nomeDoPais } from '@/components/mapa/MapaArea';
import { FAUNA_MUSICA } from '@/data/fauna-musica';
import { FOTOS_ALBUM } from '@/data/fotos-album';

type Parte = 'instrumentos' | 'mapa' | 'pessoas' | 'profissoes' | 'ciencia';

/** O Mundo da Música: os instrumentos por família (com o som e o nome no idioma estudado), as pessoas, as profissões e as pseudociências. */
export default function MundoMusicaScreen() {
  const { pack } = useApp();
  const [parte, setParte] = useState<Parte>('instrumentos');
  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Mundo" subtitulo="Os instrumentos, as pessoas e as profissões da música, e o que é mito." />
      <View ref={alvoDoTour('mus-mundo')} className="mt-3 flex-row flex-wrap gap-1.5">
        {(
          [
            ['instrumentos', 'Instrumentos'],
            ['mapa', 'Mapa'],
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

      {parte === 'mapa' && <MapaDaMusica />}

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

/** A foto do álbum de um instrumento (a mesma chave do /mapa: o nome em português, minúsculo). */
const fotoAlbum = (nome: string) => FOTOS_ALBUM[nome.normalize('NFC').toLowerCase().trim()];

/**
 * O mapa da música: os instrumentos típicos ou criados em cada país (os mesmos do álbum e do /mapa,
 * src/data/fauna-musica.ts) e as pessoas da música de lá.
 */
function MapaDaMusica() {
  const [pais, setPais] = useState<string | null>(null);
  const contagem = useMemo(() => {
    const c: Record<string, number> = {};
    for (const [iso, n] of Object.entries(FAUNA_MUSICA)) if (n.instruments.length) c[iso] = n.instruments.length;
    for (const p of PESSOAS_MUSICA) c[p.pais] = (c[p.pais] ?? 0) + 1;
    return c;
  }, []);
  const instrumentos = pais ? (FAUNA_MUSICA[pais]?.instruments ?? []) : [];
  const pessoas = pais ? PESSOAS_MUSICA.filter((p) => p.pais === pais) : [];
  return (
    <View className="mt-3 gap-3">
      <MapaArea contagem={contagem} cor="#F97316" selecionado={pais} aoEscolher={setPais} unidade={['item', 'itens']} />
      {!pais && <Text className="text-sm text-slate-600 dark:text-slate-400">Toque num país para ver os instrumentos de lá e quem fez música ali.</Text>}
      {pais && (
        <View className="gap-2">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">{nomeDoPais(pais)}</Text>
          {instrumentos.map((i) => {
            const foto = fotoAlbum(i.name);
            return (
              <Card key={i.name} className="flex-row gap-3">
                {foto && <Image source={foto.src} accessibilityLabel={i.name} style={{ width: 64, height: 64, borderRadius: 12 }} resizeMode="cover" />}
                <View className="flex-1 gap-0.5">
                  <Text className="font-extrabold text-slate-900 dark:text-white">{i.name}</Text>
                  {i.local && i.local !== i.name && <Text className="text-xs italic text-orange-700 dark:text-orange-400">{i.local}</Text>}
                  <Text className="text-sm text-slate-700 dark:text-slate-300">{i.fact}</Text>
                  {foto && (
                    <Text className="text-[10px] text-slate-500">
                      Foto: {foto.author}, {foto.license}
                    </Text>
                  )}
                </View>
              </Card>
            );
          })}
          {pessoas.length > 0 && <SectionTitle>Pessoas</SectionTitle>}
          {pessoas.map((p) => (
            <Card key={p.nome} className="gap-0.5">
              <Text className="font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
              <Text className="text-sm text-slate-700 dark:text-slate-300">{p.fez}</Text>
            </Card>
          ))}
        </View>
      )}
    </View>
  );
}
