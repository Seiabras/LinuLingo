import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Button, Card, Screen } from '@/components/ui';
import { RELEASES } from '@/data/changelog';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * Modo desenvolvedor: uma página escondida, aberta com 3 toques seguidos em «Apagar meu progresso»
 * no Perfil (pedido do dono do app). Guarda o que é do projeto e não do estudo, como a lista de
 * atualizações.
 */
export default function DevScreen() {
  const dark = useIsDark();
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🛠️ Modo desenvolvedor</Text>
      </View>
      <Card className="mt-4 gap-1">
        <Text className="text-sm text-slate-600 dark:text-slate-300">
          Você achou o canto secreto do LinuLingo! Aqui fica o que é do projeto, não do estudo. Para voltar aqui, toque 3 vezes seguidas em «Apagar meu progresso» no Perfil.
        </Text>
        <Text className="text-xs text-slate-400">Última atualização: v{RELEASES[0]?.v} — {RELEASES[0]?.title ?? '—'}</Text>
      </Card>
      <View className="mt-4 gap-2">
        <Button title={`🗓️ Atualizações do app (${RELEASES.length})`} variant="ghost" onPress={() => router.push('/atualizacoes')} />
        {__DEV__ && <Button title="🐧 Galeria das roupinhas e cachecóis" variant="ghost" onPress={() => router.push('/dev-galeria')} />}
      </View>
    </Screen>
  );
}
