import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { CARACTERES_MENDEL, type CaracterMendel } from '@/data/biologia/laboratorio';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';

type Etapa = 'pais' | 'f1' | 'f2';

/** Um filho de Aa × Aa: cada pai passa uma das duas letras, ao acaso. */
const filhoF2 = () => (Math.random() < 0.5 ? 'A' : 'a') + (Math.random() < 0.5 ? 'A' : 'a');

function Semente({ cor, tamanho = 14 }: { cor: string; tamanho?: number }) {
  return <View style={{ width: tamanho, height: tamanho, borderRadius: tamanho / 2, backgroundColor: cor, borderWidth: 1, borderColor: '#64748b' }} />;
}

/**
 * As ervilhas de Mendel: cruzar uma planta pura de cada forma, ver a primeira geração toda igual e,
 * cruzando os filhos entre si, ver a forma escondida voltar em cerca de 1 a cada 4. No fim, a conta
 * do aluno ao lado da conta do próprio Mendel (1866).
 */
export function Mendel() {
  const { db, refresh } = useApp();
  const [c, setC] = useState<CaracterMendel>(CARACTERES_MENDEL[0]!);
  const [etapa, setEtapa] = useState<Etapa>('pais');
  const [f2, setF2] = useState<string[]>([]);
  const [ganhou, setGanhou] = useState(false);

  const trocar = (x: CaracterMendel) => {
    setC(x);
    setEtapa('pais');
    setF2([]);
  };
  const cruzarF1 = () => {
    setF2(Array.from({ length: 100 }, filhoF2));
    setEtapa('f2');
    if (!ganhou && db) {
      setGanhou(true);
      void awardXp(db, 10, 'bio-lab:mendel').then(() => refresh());
    }
  };
  const dom = f2.filter((g) => g.includes('A')).length;
  const rec = f2.length - dom;
  const razao = (a: number, b: number) => (b ? (a / b).toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : '—');

  return (
    <View className="gap-3">
      <View className="flex-row flex-wrap gap-1.5">
        {CARACTERES_MENDEL.map((x) => (
          <Pressable
            key={x.id}
            accessibilityRole="radio"
            accessibilityState={{ selected: c.id === x.id }}
            onPress={() => trocar(x)}
            className={`rounded-full border-2 px-3 py-1 ${c.id === x.id ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{x.nome}</Text>
          </Pressable>
        ))}
      </View>

      <Card className="gap-2">
        <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Os pais (geração P)</Text>
        <View className="flex-row items-center justify-around">
          <View className="items-center gap-1">
            <Semente cor={c.corDom} tamanho={28} />
            <Text className="text-xs text-slate-700 dark:text-slate-300">{c.dominante}</Text>
            <Text className="text-xs font-bold text-slate-500">AA</Text>
          </View>
          <Text className="text-xl text-slate-500">×</Text>
          <View className="items-center gap-1">
            <Semente cor={c.corRec} tamanho={28} />
            <Text className="text-xs text-slate-700 dark:text-slate-300">{c.recessivo}</Text>
            <Text className="text-xs font-bold text-slate-500">aa</Text>
          </View>
        </View>
        {etapa === 'pais' && <Button title="Cruzar os dois" onPress={() => setEtapa('f1')} />}
      </Card>

      {etapa !== 'pais' && (
        <Card className="gap-2">
          <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Os filhos (geração F1)</Text>
          <View className="flex-row flex-wrap justify-center gap-1.5">
            {Array.from({ length: 12 }, (_, i) => (
              <Semente key={i} cor={c.corDom} tamanho={20} />
            ))}
          </View>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Todos saíram com a forma {c.dominante}! A forma {c.recessivo} sumiu? Cada filho recebeu um A de um pai e um a do outro (Aa), e o A manda: é o caráter <Text className="font-bold">dominante</Text>. O a ficou escondido (é o <Text className="font-bold">recessivo</Text>).
          </Text>
          {etapa === 'f1' && <Button title="Cruzar os filhos entre si" onPress={cruzarF1} />}
        </Card>
      )}

      {etapa === 'f2' && (
        <Card className="gap-2">
          <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Os netos (geração F2): 100 plantas</Text>
          <View className="flex-row flex-wrap gap-1">
            {f2.map((g, i) => (
              <Semente key={i} cor={g.includes('A') ? c.corDom : c.corRec} />
            ))}
          </View>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Forma {c.dominante}: {dom} · forma {c.recessivo}: {rec}. Dá {razao(dom, rec)} para 1, e a forma {c.recessivo} voltou!
          </Text>
          <View className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
            <Text className="mb-1 text-xs font-bold text-slate-600 dark:text-slate-400">Por que cerca de 3 para 1? (o quadro de Punnett)</Text>
            <View className="flex-row">
              {['', 'A', 'a'].map((h) => (
                <Text key={h || 'v'} className="w-12 text-center text-xs font-bold text-slate-500">{h}</Text>
              ))}
            </View>
            {['A', 'a'].map((l) => (
              <View key={l} className="flex-row">
                <Text className="w-12 text-center text-xs font-bold text-slate-500">{l}</Text>
                {['A', 'a'].map((k) => (
                  <Text key={k} className={`w-12 text-center text-sm font-bold ${l + k === 'aa' ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {l === 'a' && k === 'A' ? 'Aa' : l + k}
                  </Text>
                ))}
              </View>
            ))}
            <Text className="mt-1 text-xs text-slate-600 dark:text-slate-400">Três das quatro combinações têm pelo menos um A. Só a aa mostra a forma {c.recessivo}.</Text>
          </View>
          <View className="rounded-xl bg-emerald-50 p-2 dark:bg-emerald-950/50">
            <Text className="text-xs text-emerald-900 dark:text-emerald-100">
              E o Mendel? No mesmo cruzamento, ele contou <Text className="font-bold">{c.f2[0].toLocaleString('pt-BR')}</Text> ({c.dominante}) e <Text className="font-bold">{c.f2[1].toLocaleString('pt-BR')}</Text> ({c.recessivo}): {razao(c.f2[0], c.f2[1])} para 1. Quanto mais plantas, mais perto de 3 para 1.
            </Text>
          </View>
          <Button title="Plantar de novo" variant="ghost" onPress={cruzarF1} />
          <Text className="text-[10px] text-slate-500">Números do Mendel: “Versuche über Pflanzen-Hybriden”, 1866.</Text>
        </Card>
      )}
    </View>
  );
}
