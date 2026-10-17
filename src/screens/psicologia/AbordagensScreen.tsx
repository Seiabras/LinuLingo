import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Linu } from '@/components/Linu';
import { ABORDAGENS, SITUACAO } from '@/data/psicologia/abordagens';
import { PSICANALISE_E_CIENCIA } from '@/data/psicologia/psicanalise';
import { Pseudociencias } from '@/components/ciencia/Pseudociencias';
import * as haptics from '@/services/haptics';

/**
 * As abordagens da psicologia: cada uma é uma lente diferente para olhar a mente. No topo, a mesma
 * situação vista por cada lente, para mostrar a diferença entre elas; embaixo, as fichas.
 */
export default function AbordagensScreen() {
  const [lente, setLente] = useState(ABORDAGENS[0]!.id);
  const [parte, setParte] = useState<'escolas' | 'psicanalise' | 'pseudo'>('escolas');
  const a = ABORDAGENS.find((x) => x.id === lente)!;
  return (
    <Screen>
      <AreaCabecalho area="psicologia" titulo="Abordagens" subtitulo="A psicologia tem várias escolas, cada uma com uma pergunta diferente sobre a mente." />

      <View className="mt-3 flex-row gap-1.5">
        {(
          [
            ['escolas', 'As escolas'],
            ['psicanalise', 'Psicanálise e ciência'],
            ['pseudo', 'Pseudociências'],
          ] as const
        ).map(([k, nome]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: parte === k }}
            onPress={() => setParte(k)}
            className={`flex-1 rounded-xl border-2 px-1 py-2 ${parte === k ? 'border-violet-500 bg-violet-50 dark:bg-violet-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-xs font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
          </Pressable>
        ))}
      </View>

      {parte === 'escolas' && (
        <>
          <SectionTitle>A mesma situação, cinco lentes</SectionTitle>
          <Card className="gap-2">
            <View className="flex-row items-center gap-3">
              <Linu mood="pensando" size={52} />
              <Text className="flex-1 text-sm font-bold text-slate-800 dark:text-slate-100">{SITUACAO}</Text>
            </View>
            <View className="flex-row flex-wrap gap-1.5">
              {ABORDAGENS.map((x) => (
                <Pressable
                  key={x.id}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: lente === x.id }}
                  onPress={() => {
                    haptics.tapLight();
                    setLente(x.id);
                  }}
                  className={`rounded-full border-2 px-2.5 py-1 ${lente === x.id ? 'border-violet-500 bg-violet-50 dark:bg-violet-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
                >
                  <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    {x.emoji} {x.nome.split(' (')[0]}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View className="rounded-xl bg-violet-50 p-2 dark:bg-violet-950/50">
              <Text className="text-xs font-bold text-violet-700 dark:text-violet-300">{a.pergunta}</Text>
              <Text className="text-sm text-violet-950 dark:text-violet-100">{a.olhar}</Text>
            </View>
            <Text className="text-[11px] text-slate-500">É só para entender a diferença entre as lentes, não um conselho.</Text>
          </Card>

          <SectionTitle>As escolas</SectionTitle>
          <View className="gap-2">
            {ABORDAGENS.map((x) => (
              <Card key={x.id} className="gap-1.5">
                <View className="flex-row items-center gap-2">
                  <Text className="text-2xl">{x.emoji}</Text>
                  <View className="flex-1">
                    <Text className="text-base font-extrabold text-slate-900 dark:text-white">{x.nome}</Text>
                    <Text className="text-xs font-bold text-violet-700 dark:text-violet-400">{x.pergunta}</Text>
                  </View>
                </View>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{x.ideia}</Text>
                {x.pessoas.map((p) => (
                  <Text key={p.nome} className="text-xs text-slate-600 dark:text-slate-400">
                    <Text className="font-bold">{p.nome}</Text>: {p.obra}
                  </Text>
                ))}
              </Card>
            ))}
          </View>
        </>
      )}

      {parte === 'psicanalise' && (
        <View className="mt-3 gap-2">
          {PSICANALISE_E_CIENCIA.map((b) => (
            <Card key={b.titulo} className="gap-1.5">
              <Text className="text-base font-extrabold text-slate-900 dark:text-white">{b.titulo}</Text>
              {b.paragrafos.map((t) => (
                <Text key={t} className="text-sm text-slate-700 dark:text-slate-300">
                  {t}
                </Text>
              ))}
            </Card>
          ))}
          <Text className="text-[10px] text-slate-500">
            Fontes: Popper, “Conjectures and Refutations” (1963); Grünbaum, “The Foundations of Psychoanalysis” (1984); Shedler, American Psychologist 65(2)
            (2010); Pasternak e Orsi, “Que bobagem!” (2023) e a resposta da SBPSP; O Povo (15/11/2025) sobre os bacharelados.
          </Text>
        </View>
      )}

      {parte === 'pseudo' && (
        <View className="mt-3">
          <Pseudociencias
            area="psicologia"
            intro="Pseudociência é o que se apresenta como ciência sem passar pelos testes da ciência. Aqui estão práticas ligadas à mente que a pesquisa não sustenta, cada uma com o que promete e o que se sabe. Toque num cartão para ver a evidência."
          />
        </View>
      )}

      <Text className="mt-3 text-[10px] text-slate-500">Referência geral: OpenStax, “Psychology 2e”, caps. 1 e 16 (CC BY 4.0).</Text>
    </Screen>
  );
}
