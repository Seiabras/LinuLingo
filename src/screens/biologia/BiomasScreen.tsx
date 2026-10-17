import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { BioCabecalho } from '@/components/biologia/BioCabecalho';
import { BIOMAS } from '@/data/biologia/biomas';
import { CAIXA_BRASIL, ECORREGIOES_BRASIL } from '@/data/biologia/biomas-brasil';
import { NoIdioma } from '@/components/biologia/NoIdioma';
import { CONTORNO_BIOMA, COR_BIOMA, ECORREGIOES_DO_BIOMA, PAISES_DO_BIOMA } from '@/data/biologia/biomas-mapa';
import { bichosDosPaises } from '@/data/biologia/seres';
import { MAP_H, MAP_W, WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import * as haptics from '@/services/haptics';

const paisDe = (iso: string) => WORLD.find((c) => c.iso === iso);

/** A palavra em português de cada bioma que costuma estar no Cofre dos idiomas (a ponte com os idiomas). */
const PALAVRA_DO_BIOMA: Record<number, string> = {
  1: 'floresta',
  2: 'floresta',
  3: 'floresta',
  4: 'floresta',
  5: 'floresta',
  6: 'floresta',
  7: 'savana',
  8: 'campo',
  9: 'campo',
  10: 'montanha',
  11: 'tundra',
  12: 'floresta',
  13: 'deserto',
  14: 'mangue',
};

/**
 * Biomas: um ramo da Biologia. O mapa-múndi do app pintado com os 14 biomas terrestres do Ecoregions
 * 2017 (Resolve, CC BY 4.0). Tocar num bioma (no mapa ou na legenda) mostra o que ele é, ecorregiões de
 * exemplo, os países onde ele aparece e os bichos do álbum desses países.
 */
export default function BiomasScreen() {
  const [sel, setSel] = useState<number | null>(null);
  const [onde, setOnde] = useState<'mundo' | 'brasil'>('mundo');
  const [eco, setEco] = useState<string | null>(null);
  const ecoSel = ECORREGIOES_BRASIL.find((e) => e.nome === eco);
  const escolher = (n: number) => {
    haptics.tapLight();
    setSel((s) => (s === n ? null : n));
  };
  const bioma = sel != null ? BIOMAS.find((b) => b.num === sel) : undefined;
  const paises = sel != null ? (PAISES_DO_BIOMA[sel] ?? []) : [];
  const bichos = bichosDosPaises(paises).slice(0, 8);

  return (
    <Screen>
      <BioCabecalho titulo="Biomas" subtitulo="As grandes paisagens vivas da Terra: cada cor do mapa é um tipo de vegetação e de clima. Toque num bioma." />

      <View className="mt-3 flex-row gap-2">
        {(
          [
            ['mundo', '🌍 O mundo'],
            ['brasil', '🇧🇷 O Brasil'],
          ] as const
        ).map(([k, nome]) => (
          <Pressable
            key={k}
            accessibilityRole="radio"
            accessibilityState={{ selected: onde === k }}
            onPress={() => setOnde(k)}
            className={`flex-1 rounded-xl border-2 p-2 ${onde === k ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
          </Pressable>
        ))}
      </View>

      {onde === 'brasil' ? (
        <>
          <View className="mt-3 overflow-hidden rounded-2xl bg-sky-100 dark:bg-slate-800">
            <Svg viewBox={CAIXA_BRASIL.join(' ')} width="100%" style={{ aspectRatio: CAIXA_BRASIL[2] / CAIXA_BRASIL[3] }}>
              {WORLD.filter((c) => c.d).map((c) => (
                <Path key={c.iso} d={c.d} fill="#e2e8f0" stroke="#94a3b8" strokeWidth={0.08} />
              ))}
              {ECORREGIOES_BRASIL.map((e) => (
                <Path
                  key={e.nome}
                  d={e.d}
                  fill={COR_BIOMA[e.bioma]}
                  fillRule="evenodd"
                  opacity={eco == null || eco === e.nome ? 0.92 : 0.3}
                  stroke={eco === e.nome ? '#0f172a' : '#ffffff'}
                  strokeWidth={eco === e.nome ? 0.25 : 0.06}
                  onPress={() => {
                    haptics.tapLight();
                    setEco((x) => (x === e.nome ? null : e.nome));
                  }}
                />
              ))}
            </Svg>
          </View>
          {ecoSel ? (
            <Card className="mt-2 gap-1">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{ecoSel.nome}</Text>
              <View className="flex-row items-center gap-2">
                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COR_BIOMA[ecoSel.bioma] }} />
                <Text className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{BIOMAS.find((b) => b.num === ecoSel.bioma)?.nome}</Text>
              </View>
              <Text className="text-sm text-slate-700 dark:text-slate-300">{BIOMAS.find((b) => b.num === ecoSel.bioma)?.sobre}</Text>
              <Text className="text-xs text-slate-500 dark:text-slate-400">O nome é o original do Ecoregions 2017.</Text>
            </Card>
          ) : (
            <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Toque numa ecorregião: são {ECORREGIOES_BRASIL.length} no Brasil, de {new Set(ECORREGIOES_BRASIL.map((e) => e.bioma)).size} biomas diferentes. A
              cor é a do bioma.
            </Text>
          )}
          <Text className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Esta é a divisão em ecorregiões do Ecoregions 2017, a mesma do mapa-múndi. O IBGE divide o Brasil de outro jeito, em seis biomas (Amazônia, Cerrado,
            Mata Atlântica, Caatinga, Pampa e Pantanal).
          </Text>
        </>
      ) : (
        <>
          <View className="mt-3 overflow-hidden rounded-2xl bg-sky-100 dark:bg-slate-800">
            <Svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} width="100%" style={{ aspectRatio: MAP_W / MAP_H }}>
              {WORLD.filter((c) => c.d).map((c) => (
                <Path key={c.iso} d={c.d} fill="#e2e8f0" stroke="#94a3b8" strokeWidth={0.3} />
              ))}
              {BIOMAS.map((b) =>
                CONTORNO_BIOMA[b.num] ? (
                  <Path
                    key={b.num}
                    d={CONTORNO_BIOMA[b.num]}
                    fill={COR_BIOMA[b.num]}
                    fillRule="evenodd"
                    opacity={sel == null || sel === b.num ? 0.9 : 0.15}
                    stroke={sel === b.num ? '#0f172a' : 'none'}
                    strokeWidth={0.6}
                    onPress={() => escolher(b.num)}
                  />
                ) : null,
              )}
            </Svg>
          </View>
          <View className="mt-2 flex-row flex-wrap gap-1.5">
            {BIOMAS.map((b) => (
              <Pressable
                key={b.num}
                accessibilityRole="radio"
                accessibilityState={{ selected: sel === b.num }}
                onPress={() => escolher(b.num)}
                className={`flex-row items-center gap-1.5 rounded-full border-2 px-2.5 py-1 ${sel === b.num ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COR_BIOMA[b.num] }} />
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{b.nome}</Text>
              </Pressable>
            ))}
          </View>

          {bioma && (
            <>
              <Card className="mt-3 gap-1.5">
                <View className="flex-row items-center gap-2">
                  <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: COR_BIOMA[bioma.num] }} />
                  <Text className="flex-1 text-lg font-extrabold text-slate-900 dark:text-white">{bioma.nome}</Text>
                </View>
                <Text className="text-xs italic text-slate-500 dark:text-slate-400">{bioma.original}</Text>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{bioma.sobre}</Text>
                {PALAVRA_DO_BIOMA[bioma.num] && <NoIdioma pt={PALAVRA_DO_BIOMA[bioma.num]!} />}
                {!!ECORREGIOES_DO_BIOMA[bioma.num]?.length && (
                  <>
                    <Text className="mt-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Ecorregiões de exemplo (as maiores, com o nome original)
                    </Text>
                    <Text className="text-sm text-slate-700 dark:text-slate-300">{ECORREGIOES_DO_BIOMA[bioma.num]!.join(' · ')}</Text>
                  </>
                )}
                {bioma.num === 14 && (
                  <Text className="text-xs text-slate-500 dark:text-slate-400">
                    Os manguezais são faixas finas no litoral: no tamanho do mapa, só os maiores aparecem.
                  </Text>
                )}
              </Card>

              {paises.length > 0 && (
                <>
                  <SectionTitle>Onde fica</SectionTitle>
                  <View className="flex-row flex-wrap gap-1.5">
                    {paises.map((iso) => {
                      const c = paisDe(iso);
                      return (
                        <View key={iso} className="rounded-full bg-slate-100 px-2.5 py-0.5 dark:bg-slate-800">
                          <Text className="text-xs text-slate-700 dark:text-slate-200">{c ? `${flagOf(c.iso2)} ${c.name}` : iso}</Text>
                        </View>
                      );
                    })}
                  </View>
                </>
              )}

              {bichos.length > 0 && (
                <>
                  <SectionTitle>Bichos desses países</SectionTitle>
                  <Text className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                    Do álbum do app. Nem todo bicho do país vive neste bioma: é um ponto de partida.
                  </Text>
                  <View className="gap-2">
                    {bichos.map((b) => (
                      <Card key={`${b.iso}-${b.nome}`} className="gap-0.5">
                        <Text className="font-extrabold text-slate-900 dark:text-white">
                          {flagOf(paisDe(b.iso)?.iso2 ?? '')} {b.nome}
                          {b.local ? <Text className="font-semibold text-emerald-700 dark:text-emerald-400"> · {b.local}</Text> : null}
                        </Text>
                        <Text className="text-sm text-slate-700 dark:text-slate-300">{b.fato}</Text>
                      </Card>
                    ))}
                  </View>
                </>
              )}
            </>
          )}
        </>
      )}

      <Text className="mt-4 text-[10px] text-slate-500 dark:text-slate-500">
        Mapa dos biomas: Ecoregions 2017 (Resolve; Dinerstein et al. 2017, BioScience 67(6)), licença CC BY 4.0, simplificado para o app. Países: Natural Earth
        (domínio público).
      </Text>
    </Screen>
  );
}
