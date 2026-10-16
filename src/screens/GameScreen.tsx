import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Maximize2, Palette, X } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Collapsible, Screen } from '@/components/ui';
import { CursoJogo } from '@/components/jogos/CursoJogo';
import { IconeJogo } from '@/components/jogos/IconeJogo';
import { PainelPersonalizar } from '@/components/jogos/PainelPersonalizar';
import { SeletorVariante } from '@/components/jogos/SeletorVariante';
import { TABULEIROS } from '@/components/jogos/tabuleiros';
import { AmpliadoContext, MesaDoJogo } from '@/components/jogos/ui';
import { CURSOS_JOGOS } from '@/data/cursos-jogos';
import { EPOCAS, KNOWLEDGE_GAMES, REGIOES } from '@/data/jogos-conhecimento';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { alvoDoTour } from '@/services/tour';

/**
 * A página de um jogo do conhecimento (Cultura → Jogos → toque num jogo): o tabuleiro, o botão de
 * ampliar (o tabuleiro grande numa janela por cima, com o fundo desfocado, para focar no jogo), a
 * personalização, o curso “Aprenda a jogar” (quando o jogo tem), a história, as regras e as variantes.
 */
export default function GameScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const dark = useIsDark();
  const jogo = KNOWLEDGE_GAMES.find((g) => g.id === id);
  const Tabuleiro = jogo ? TABULEIROS[jogo.id] : undefined;
  const [ampliado, setAmpliado] = useState(false);
  const [personalizar, setPersonalizar] = useState(false);
  const [aberto, setAberto] = useState<string | null>(CURSOS_JOGOS[id ?? ''] ? 'curso' : null);
  const cor = dark ? '#E2E8F0' : '#334155';

  if (!jogo) {
    return (
      <Screen>
        <Text className="pt-6 text-base text-slate-700 dark:text-slate-200">Jogo não encontrado.</Text>
      </Screen>
    );
  }

  const botao = (rotulo: string, icone: React.ReactNode, onPress: () => void, ativo = false) => (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className={`flex-row items-center gap-1.5 rounded-full px-3.5 py-2 ${ativo ? 'bg-conecta dark:bg-blue-500' : 'bg-slate-100 dark:bg-slate-800'}`}
    >
      {icone}
      <Text className={`text-sm font-bold ${ativo ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{rotulo}</Text>
    </Pressable>
  );
  const epoca = EPOCAS.find((e) => e.id === jogo.epoca)?.nome;
  const regiao = REGIOES.find((r) => r.id === jogo.regiao)?.nome;

  return (
    <Screen scroll>
      <View className="gap-3 pt-3">
        <View className="flex-row items-center gap-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={cor} />
          </Pressable>
          <IconeJogo id={jogo.id} tamanho={44} />
          <View className="flex-1">
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{jogo.name}</Text>
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">{[regiao, jogo.povo, epoca].filter(Boolean).join(' · ')}</Text>
          </View>
        </View>

        <View ref={alvoDoTour('jogo-botoes')} className="flex-row flex-wrap gap-2">
          {Tabuleiro && botao('Ampliar', <Maximize2 size={16} color={cor} />, () => setAmpliado(true))}
          {botao('Personalizar', <Palette size={16} color={personalizar ? '#FFFFFF' : cor} />, () => setPersonalizar((v) => !v), personalizar)}
        </View>

        {personalizar && (
          <Card>
            <PainelPersonalizar jogo={jogo.id} linu={!!jogo.linu} />
          </Card>
        )}

        {Tabuleiro && (
          <Card className="items-center gap-3">
            <SeletorVariante jogo={jogo.id} variantes={jogo.variants} />
            {ampliado ? (
              <Text className="py-8 text-sm font-semibold text-slate-600 dark:text-slate-300">O tabuleiro está ampliado.</Text>
            ) : (
              <MesaDoJogo>
                <Tabuleiro />
              </MesaDoJogo>
            )}
          </Card>
        )}

        {CURSOS_JOGOS[jogo.id] && (
          <Card>
            <Collapsible title="Aprenda a jogar" open={aberto === 'curso'} onToggle={() => setAberto(aberto === 'curso' ? null : 'curso')}>
              <CursoJogo jogo={jogo.id} />
            </Collapsible>
          </Card>
        )}

        <Card className="gap-2">
          <Text className="text-xs text-slate-600 dark:text-slate-400">
            {jogo.year} · {jogo.where}
          </Text>
          <Text className="text-sm leading-6 text-slate-700 dark:text-slate-300">{jogo.about}</Text>
          {!!jogo.etimologia && (
            <View className="gap-1 rounded-xl bg-sky-50 p-2.5 dark:bg-sky-950/40">
              <Text className="text-xs font-extrabold uppercase tracking-wide text-sky-900 dark:text-sky-200">De onde vem o nome</Text>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{jogo.etimologia}</Text>
            </View>
          )}
          {jogo.rules && (
            <Collapsible title="Como se joga" open={aberto === 'regras'} onToggle={() => setAberto(aberto === 'regras' ? null : 'regras')}>
              <View className="gap-2 pt-1">
                {jogo.rules.map((r) => (
                  <View key={r.title}>
                    <Text className="text-sm font-bold text-slate-900 dark:text-white">{r.title}</Text>
                    <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{r.text}</Text>
                  </View>
                ))}
              </View>
            </Collapsible>
          )}
          {jogo.variants && jogo.variants.length > 0 && (
            <Collapsible
              title="Variantes"
              count={jogo.variants.length}
              open={aberto === 'variantes'}
              onToggle={() => setAberto(aberto === 'variantes' ? null : 'variantes')}
            >
              <View className="gap-2 pt-1">
                {jogo.variants.map((v) => (
                  <View key={v.name} className="rounded-xl bg-amber-50 p-2.5 dark:bg-amber-950/40">
                    <Text className="text-sm font-bold text-slate-900 dark:text-white">{v.name}</Text>
                    <Text className="text-xs text-slate-600 dark:text-slate-400">📍 {v.where}</Text>
                    <Text className="mt-1 text-sm leading-5 text-slate-700 dark:text-slate-300">{v.text}</Text>
                  </View>
                ))}
              </View>
            </Collapsible>
          )}
        </Card>
      </View>

      {/* montado só enquanto aberto: o “fade” do Modal na web às vezes não termina de sumir */}
      {Tabuleiro && ampliado && (
        <Modal visible transparent animationType="none" onRequestClose={() => setAmpliado(false)}>
          <Animated.View entering={FadeIn.duration(220)} style={{ flex: 1 }}>
            <BlurView intensity={45} tint={dark ? 'dark' : 'light'} style={{ flex: 1 }}>
              <View
                style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: dark ? 'rgba(2,6,23,0.45)' : 'rgba(15,23,42,0.25)' }}
              />
              <SafeAreaView style={{ flex: 1 }}>
                <View className="flex-row items-center justify-between px-4 pt-2">
                  <Text className="text-lg font-extrabold text-white" style={{ textShadowColor: 'rgba(0,0,0,0.6)', textShadowRadius: 4 }}>
                    {jogo.name}
                  </Text>
                  <Pressable
                    accessibilityLabel="Fechar o tabuleiro ampliado"
                    onPress={() => setAmpliado(false)}
                    hitSlop={10}
                    className="rounded-full bg-white/90 p-2 dark:bg-slate-900/90"
                  >
                    <X size={22} color={cor} />
                  </Pressable>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 }}>
                  <View className="rounded-3xl bg-white/85 p-3 dark:bg-slate-900/85">
                    <AmpliadoContext.Provider value>
                      <Tabuleiro />
                    </AmpliadoContext.Provider>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </BlurView>
          </Animated.View>
        </Modal>
      )}
    </Screen>
  );
}
