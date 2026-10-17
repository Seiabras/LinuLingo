import { useState, type ComponentType } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { BioCabecalho } from '@/components/biologia/BioCabecalho';
import { Celula } from '@/components/biologia/lab/Celula';
import { Classifique } from '@/components/biologia/lab/Classifique';
import { DescubraBicho } from '@/components/biologia/lab/DescubraBicho';
import { Mariposas } from '@/components/biologia/lab/Mariposas';
import { Mendel } from '@/components/biologia/lab/Mendel';
import * as haptics from '@/services/haptics';

interface Experimento {
  id: string;
  emoji: string;
  nome: string;
  sobre: string;
  ramo: string;
  Componente: ComponentType;
}

const EXPERIMENTOS: Experimento[] = [
  { id: 'classifique', emoji: '🧪', nome: 'Classifique os seres vivos', ramo: 'Zoologia', sobre: 'Cada amigo do Linu é ave, mamífero ou crustáceo?', Componente: Classifique },
  { id: 'descubra', emoji: '🔎', nome: 'Descubra o bicho', ramo: 'Zoologia', sobre: 'O Linu pensa num amigo e você descobre com perguntas de sim ou não, como numa chave de identificação.', Componente: DescubraBicho },
  { id: 'celula', emoji: '🔬', nome: 'Monte uma célula', ramo: 'Citologia', sobre: 'As partes da célula animal e da vegetal: explore e depois ache cada uma.', Componente: Celula },
  { id: 'mendel', emoji: '🫛', nome: 'As ervilhas de Mendel', ramo: 'Genética', sobre: 'Cruze ervilhas e veja a forma escondida voltar, como Mendel contou em 1866.', Componente: Mendel },
  { id: 'mariposas', emoji: '🦋', nome: 'As mariposas da cidade', ramo: 'Evolução', sobre: 'Seja o passarinho e veja a seleção natural mudar a cor das mariposas, geração após geração.', Componente: Mariposas },
];

/** O Laboratório: os experimentos de mão na massa, um ramo da biologia em cada um. */
export default function LaboratorioScreen() {
  const [aberto, setAberto] = useState<string | null>(null);
  const exp = EXPERIMENTOS.find((e) => e.id === aberto);

  if (exp) {
    const { Componente } = exp;
    return (
      <Screen>
        <BioCabecalho titulo={exp.nome} subtitulo={exp.sobre} />
        <Pressable accessibilityRole="button" onPress={() => setAberto(null)} className="mb-2 mt-2 self-start active:opacity-70">
          <Text className="text-sm font-bold text-emerald-700 dark:text-emerald-400">‹ Todos os experimentos</Text>
        </Pressable>
        <Componente />
      </Screen>
    );
  }

  return (
    <Screen>
      <BioCabecalho titulo="Laboratório" subtitulo="Biologia de mão na massa: experimentos curtos para ver as ideias funcionando." />
      <SectionTitle>Experimentos</SectionTitle>
      <View className="gap-2">
        {EXPERIMENTOS.map((e) => (
          <Pressable
            key={e.id}
            accessibilityRole="button"
            onPress={() => {
              haptics.tapLight();
              setAberto(e.id);
            }}
            className="active:opacity-80"
          >
            <Card className="flex-row items-center gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                <Text className="text-2xl">{e.emoji}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{e.ramo}</Text>
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{e.nome}</Text>
                <Text className="text-xs text-slate-600 dark:text-slate-400">{e.sobre}</Text>
              </View>
              <Text className="text-lg text-slate-500">›</Text>
            </Card>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
