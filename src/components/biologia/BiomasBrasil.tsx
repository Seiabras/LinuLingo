import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Card, SectionTitle } from '@/components/ui';
import { CartaoBicho } from '@/components/biologia/CartaoBicho';
import { bichosDoBiomaBrasil } from '@/data/biologia/bichos-bioma';
import { plantasDoBiomaBrasil } from '@/data/biologia/plantas-bioma';
import { BIOMAS } from '@/data/biologia/biomas';
import { CAIXA_BRASIL, ECORREGIOES_BRASIL } from '@/data/biologia/biomas-brasil';
import { BIOMAS_BRASIL } from '@/data/biologia/biomas-brasil-info';
import { AREA_BIOMA_BRASIL, CAIXA_BIOMAS_BRASIL, CONTORNO_BIOMA_BRASIL, type BiomaBrasil } from '@/data/biologia/biomas-ibge';
import { COR_BIOMA } from '@/data/biologia/biomas-mapa';
import { WORLD } from '@/data/mapa-mundi';
import * as haptics from '@/services/haptics';

const TOTAL = Object.values(AREA_BIOMA_BRASIL).reduce((a, b) => a + b, 0);

/**
 * Os biomas do Brasil: os 6 do IBGE no mapa, cada um com a área, o que ele é e os bichos que vivem nele.
 * Embaixo, quem quiser vê as 45 ecorregiões do Ecoregions 2017 dentro do Brasil (a divisão mais fina).
 */
export function BiomasBrasil() {
  const [sel, setSel] = useState<BiomaBrasil | null>(null);
  const [camada, setCamada] = useState<'ibge' | 'eco'>('ibge');
  const [eco, setEco] = useState<string | null>(null);
  const info = BIOMAS_BRASIL.find((b) => b.id === sel);
  const ecoSel = ECORREGIOES_BRASIL.find((e) => e.nome === eco);
  const escolher = (id: BiomaBrasil) => {
    haptics.tapLight();
    setSel((s) => (s === id ? null : id));
  };
  const caixa = camada === 'ibge' ? CAIXA_BIOMAS_BRASIL : CAIXA_BRASIL;

  return (
    <>
      <View className="mt-3 overflow-hidden rounded-2xl bg-sky-100 dark:bg-slate-800">
        <Svg viewBox={caixa.join(' ')} width="100%" style={{ aspectRatio: caixa[2] / caixa[3] }}>
          {WORLD.filter((c) => c.d).map((c) => (
            <Path key={c.iso} d={c.d} fill="#e2e8f0" stroke="#94a3b8" strokeWidth={0.08} />
          ))}
          {camada === 'ibge'
            ? BIOMAS_BRASIL.map((b) => (
                <Path
                  key={b.id}
                  d={CONTORNO_BIOMA_BRASIL[b.id]}
                  fill={b.cor}
                  fillRule="evenodd"
                  opacity={sel == null || sel === b.id ? 0.9 : 0.25}
                  stroke={sel === b.id ? '#0f172a' : '#ffffff'}
                  strokeWidth={sel === b.id ? 0.3 : 0.1}
                  onPress={() => escolher(b.id)}
                />
              ))
            : ECORREGIOES_BRASIL.map((e) => (
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

      {camada === 'ibge' ? (
        <>
          <View className="mt-2 flex-row flex-wrap gap-1.5">
            {BIOMAS_BRASIL.map((b) => (
              <Pressable
                key={b.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: sel === b.id }}
                onPress={() => escolher(b.id)}
                className={`flex-row items-center gap-1.5 rounded-full border-2 px-2.5 py-1 ${sel === b.id ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: b.cor }} />
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{b.nome}</Text>
              </Pressable>
            ))}
          </View>
          {info ? (
            <>
              <Card className="mt-3 gap-1.5">
                <View className="flex-row items-center gap-2">
                  <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: info.cor }} />
                  <Text className="flex-1 text-lg font-extrabold text-slate-900 dark:text-white">{info.nome}</Text>
                </View>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{info.sobre}</Text>
                <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  Cerca de {AREA_BIOMA_BRASIL[info.id].toLocaleString('pt-BR')} km², {Math.round((AREA_BIOMA_BRASIL[info.id] / TOTAL) * 1000) / 10}% do Brasil
                </Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">
                  No mapa-múndi, fica junto com: {BIOMAS.find((x) => x.num === info.mundo)?.nome}.
                </Text>
              </Card>
              <SectionTitle>
                Bichos {info.nome === 'Pantanal' || info.nome === 'Cerrado' || info.nome === 'Pampa' ? 'do' : 'da'} {info.nome}
              </SectionTitle>
              <View className="gap-2">
                {bichosDoBiomaBrasil(info.id).map((b) => (
                  <CartaoBicho key={b.nome} b={b} />
                ))}
              </View>
              <SectionTitle>
                Plantas {info.nome === 'Pantanal' || info.nome === 'Cerrado' || info.nome === 'Pampa' ? 'do' : 'da'} {info.nome}
              </SectionTitle>
              <View className="gap-2">
                {plantasDoBiomaBrasil(info.id).map((p) => (
                  <CartaoBicho key={p.nome} b={p} />
                ))}
              </View>
            </>
          ) : (
            <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">Toque num bioma para ver o que ele é e os bichos que vivem nele.</Text>
          )}
        </>
      ) : ecoSel ? (
        <Card className="mt-2 gap-1">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{ecoSel.nome}</Text>
          <Text className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{BIOMAS.find((b) => b.num === ecoSel.bioma)?.nome}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">O nome é o original do Ecoregions 2017.</Text>
        </Card>
      ) : (
        <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Toque numa ecorregião: são {ECORREGIOES_BRASIL.length} no Brasil, uma divisão mais fina que a dos biomas. A cor é a do bioma do mapa-múndi.
        </Text>
      )}

      <Pressable
        accessibilityRole="button"
        onPress={() => setCamada((c) => (c === 'ibge' ? 'eco' : 'ibge'))}
        className="mt-3 self-start rounded-full border border-slate-300 px-3 py-1 active:opacity-70 dark:border-slate-600"
      >
        <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{camada === 'ibge' ? 'Ver as ecorregiões' : 'Voltar aos 6 biomas'}</Text>
      </Pressable>
      <Text className="mt-2 text-[10px] text-slate-500">
        Biomas do Brasil: IBGE, “Biomas e Sistema Costeiro-Marinho do Brasil”, 1:250.000 (2019). Ecorregiões: Ecoregions 2017 (Resolve), CC BY 4.0. Os
        manguezais e o litoral ficam no Sistema Costeiro-Marinho, fora dos 6 biomas.
      </Text>
    </>
  );
}
