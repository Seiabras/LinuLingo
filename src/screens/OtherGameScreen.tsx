import { useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Collapsible, Screen } from '@/components/ui';
import { SeletorVariante } from '@/components/jogos/SeletorVariante';
import { IconeOutroJogo } from '@/components/outros-jogos/IconeOutroJogo';
import { JOGOS_JOGAVEIS } from '@/components/outros-jogos/registro';
import { EPOCAS, REGIOES } from '@/data/jogos-conhecimento';
import { AREAS_JOGO, outroJogo } from '@/data/outros-jogos';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * A página de um jogo das outras áreas (cartas, azar, brincadeiras, esportes, videogames): o jogo,
 * a história, as regras, as variantes e as fontes, no mesmo estilo da página dos jogos de tabuleiro.
 */
export default function OtherGameScreen() {
  const { area, id } = useLocalSearchParams<{ area: string; id: string }>();
  const dark = useIsDark();
  const jogo = outroJogo(area, id);
  const [aberto, setAberto] = useState<string | null>(null);
  if (!jogo) {
    return (
      <Screen>
        <Text className="pt-6 text-base text-slate-700 dark:text-slate-200">Jogo não encontrado.</Text>
      </Screen>
    );
  }
  const Jogo = jogo.playable ? JOGOS_JOGAVEIS[jogo.id] : undefined;
  const epoca = EPOCAS.find((e) => e.id === jogo.epoca)?.nome;
  const regiao = REGIOES.find((r) => r.id === jogo.regiao)?.nome;
  const nomeArea = AREAS_JOGO.find((a) => a.id === jogo.area)?.nome;
  const alterna = (k: string) => setAberto(aberto === k ? null : k);

  return (
    <Screen scroll>
      <View className="gap-3 pt-3">
        <View className="flex-row items-center gap-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#E2E8F0' : '#334155'} />
          </Pressable>
          <IconeOutroJogo id={jogo.id} emoji={jogo.emoji} tamanho={44} />
          <View className="flex-1">
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{jogo.name}</Text>
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">{[nomeArea, regiao, jogo.povo, epoca].filter(Boolean).join(' · ')}</Text>
          </View>
        </View>

        {Jogo && <SeletorVariante jogo={jogo.id} variantes={jogo.variants} />}

        {Jogo && (
          <Card className="items-center">
            <Jogo />
          </Card>
        )}

        {!!jogo.about && (
          <Card className="gap-2">
            <Text className="text-xs text-slate-600 dark:text-slate-400">{[jogo.year, jogo.where].filter(Boolean).join(' · ')}</Text>
            <Text className="text-sm leading-6 text-slate-700 dark:text-slate-300">{jogo.about}</Text>
            {!!jogo.etimologia && (
              <View className="gap-1 rounded-xl bg-sky-50 p-2.5 dark:bg-sky-950/40">
                <Text className="text-xs font-extrabold uppercase tracking-wide text-sky-900 dark:text-sky-200">De onde vem o nome</Text>
                <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{jogo.etimologia}</Text>
              </View>
            )}
            {jogo.rules && (
              <Collapsible title="Como se joga" open={aberto === 'regras'} onToggle={() => alterna('regras')}>
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
              <Collapsible title="Variantes" count={jogo.variants.length} open={aberto === 'variantes'} onToggle={() => alterna('variantes')}>
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
            {jogo.fontes && jogo.fontes.length > 0 && (
              <Collapsible title="Fontes" count={jogo.fontes.length} open={aberto === 'fontes'} onToggle={() => alterna('fontes')}>
                <View className="gap-1 pt-1">
                  {jogo.fontes.map((f) => (
                    <Text key={f.url} accessibilityRole="link" onPress={() => Linking.openURL(f.url)} className="text-sm font-semibold text-conecta dark:text-blue-400">
                      {f.titulo} ›
                    </Text>
                  ))}
                </View>
              </Collapsible>
            )}
          </Card>
        )}
      </View>
    </Screen>
  );
}
