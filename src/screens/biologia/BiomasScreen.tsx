import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { AmigoEscondido } from '@/components/AmigoEscondido';
import Svg, { Path } from 'react-native-svg';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { BioCabecalho } from '@/components/biologia/BioCabecalho';
import { BIOMAS } from '@/data/biologia/biomas';
import { BiomasBrasil } from '@/components/biologia/BiomasBrasil';
import { CartaoBicho } from '@/components/biologia/CartaoBicho';
import { bichosDoBiomaMundo } from '@/data/biologia/bichos-bioma';
import { plantasDoBiomaMundo } from '@/data/biologia/plantas-bioma';
import { NoIdioma } from '@/components/biologia/NoIdioma';
import { CONTORNO_BIOMA, COR_BIOMA, ECORREGIOES_DO_BIOMA, PAISES_DO_BIOMA } from '@/data/biologia/biomas-mapa';
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
 * exemplo, os países onde ele aparece e os bichos que vivem nele (`bichos-bioma.ts`). Na aba “O
 * Brasil”, os 6 biomas do IBGE.
 */
export default function BiomasScreen() {
  const [sel, setSel] = useState<number | null>(null);
  const [onde, setOnde] = useState<'mundo' | 'brasil'>('mundo');
  const escolher = (n: number) => {
    haptics.tapLight();
    setSel((s) => (s === n ? null : n));
  };
  const bioma = sel != null ? BIOMAS.find((b) => b.num === sel) : undefined;
  const paises = sel != null ? (PAISES_DO_BIOMA[sel] ?? []) : [];
  const bichos = sel != null ? bichosDoBiomaMundo(sel) : [];
  const plantas = sel != null ? plantasDoBiomaMundo(sel) : [];

  return (
    <Screen>
      <BioCabecalho titulo="Biomas" subtitulo="As grandes paisagens vivas da Terra: cada cor do mapa é um tipo de vegetação e de clima. Toque num bioma." />
      {/* um amigo do Linu escondido aqui (ver amigos-linu.ts) */}
      <AmigoEscondido id="barbicha" tamanho={38} style={{ position: 'absolute', right: 4, top: 26 }} />

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
        <BiomasBrasil />
      ) : (
        <>
          <View ref={alvoDoTour('bio-mapa')} className="mt-3 overflow-hidden rounded-2xl bg-sky-100 dark:bg-slate-800">
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

              <SectionTitle>Bichos deste bioma</SectionTitle>
              {bichos.length ? (
                <View className="gap-2">
                  {bichos.map((b) => (
                    <CartaoBicho key={b.nome} b={b} />
                  ))}
                </View>
              ) : (
                <Text className="text-sm text-slate-600 dark:text-slate-400">Os bichos deste bioma ainda estão sendo reunidos, com fonte.</Text>
              )}

              <SectionTitle>Plantas deste bioma</SectionTitle>
              {plantas.length ? (
                <View className="gap-2">
                  {plantas.map((p) => (
                    <CartaoBicho key={p.nome} b={p} />
                  ))}
                </View>
              ) : (
                <Text className="text-sm text-slate-600 dark:text-slate-400">As plantas deste bioma ainda estão sendo reunidas, com fonte.</Text>
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
