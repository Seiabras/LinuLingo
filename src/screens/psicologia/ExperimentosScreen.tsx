import { useState, type ComponentType } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AmigoEscondido } from '@/components/AmigoEscondido';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { MemoriaDigitos } from '@/components/psicologia/lab/MemoriaDigitos';
import { MullerLyer } from '@/components/psicologia/lab/MullerLyer';
import { Stroop } from '@/components/psicologia/lab/Stroop';
import { TempoReacao } from '@/components/psicologia/lab/TempoReacao';
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
  {
    id: 'stroop',
    emoji: '🎨',
    nome: 'O teste de Stroop',
    ramo: 'Atenção · 1935',
    sobre: 'Toque na cor da tinta, não na palavra. Dá para fazer com as cores no idioma que você estuda.',
    Componente: Stroop,
  },
  {
    id: 'muller-lyer',
    emoji: '↔️',
    nome: 'As setas que enganam',
    ramo: 'Percepção · 1889',
    sobre: 'Deixe as duas linhas do mesmo tamanho e veja o quanto a ilusão de Müller-Lyer te puxa.',
    Componente: MullerLyer,
  },
  {
    id: 'digitos',
    emoji: '🔢',
    nome: 'Quantos números você guarda?',
    ramo: 'Memória · 1956',
    sobre: 'A memória de curto prazo e o “sete, mais ou menos dois” de Miller.',
    Componente: MemoriaDigitos,
  },
  {
    id: 'reacao',
    emoji: '⚡',
    nome: 'Tempo de reação',
    ramo: 'Psicologia experimental · 1879',
    sobre: 'Toque quando ficar verde: a medida dos primeiros laboratórios de psicologia.',
    Componente: TempoReacao,
  },
];

/** O Laboratório da Psicologia: os experimentos clássicos, para fazer em você mesmo. */
export default function ExperimentosScreen() {
  const [aberto, setAberto] = useState<string | null>(null);
  const exp = EXPERIMENTOS.find((e) => e.id === aberto);

  if (exp) {
    const { Componente } = exp;
    return (
      <Screen>
        <AreaCabecalho area="psicologia" titulo={exp.nome} subtitulo={exp.sobre} />
        <Pressable accessibilityRole="button" onPress={() => setAberto(null)} className="mb-2 mt-2 self-start active:opacity-70">
          <Text className="text-sm font-bold text-violet-700 dark:text-violet-400">‹ Todos os experimentos</Text>
        </Pressable>
        <Componente />
      </Screen>
    );
  }

  return (
    <Screen>
      <AreaCabecalho
        area="psicologia"
        titulo="Laboratório"
        subtitulo="Os experimentos clássicos da psicologia, para fazer em você mesmo. Nenhum resultado é diagnóstico: é para ver a mente funcionando."
      />
      {/* um amigo do Linu escondido aqui (ver amigos-linu.ts) */}
      <AmigoEscondido id="pomba-antartica" tamanho={38} style={{ position: 'absolute', right: 4, top: 26 }} />
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
              <View className="h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900">
                <Text className="text-2xl">{e.emoji}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs font-bold text-violet-700 dark:text-violet-400">{e.ramo}</Text>
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
