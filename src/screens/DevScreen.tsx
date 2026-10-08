import { useEffect, useState } from 'react';
import { Alert, Platform, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Button, Card, Screen } from '@/components/ui';
import { RELEASES } from '@/data/changelog';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { useApp } from '@/services/app-state';
import { resetLanguageProgress, tableCounts } from '@/services/dev-tools';

/**
 * Modo desenvolvedor: uma página escondida, aberta com 3 toques seguidos em «Apagar meu progresso»
 * no Perfil (pedido do dono do app). Guarda o que é do projeto e não do estudo, como a lista de
 * atualizações, e ferramentas pra testar o app mais rápido.
 */
export default function DevScreen() {
  const dark = useIsDark();
  const { db, pack, refresh } = useApp();
  const [counts, setCounts] = useState<{ table: string; rows: number }[]>([]);
  const [loadingCounts, setLoadingCounts] = useState(true);

  useEffect(() => {
    tableCounts(db)
      .then(setCounts)
      .finally(() => setLoadingCounts(false));
  }, [db]);

  const resetarIdiomaAtual = () => {
    const run = async () => {
      await resetLanguageProgress(db, pack.code);
      await refresh();
      setCounts(await tableCounts(db));
    };
    const msg = `Apagar só o progresso de ${pack.name} (lições, revisões, histórias, diário, erros)? O XP total e os outros idiomas não mudam. Isso não pode ser desfeito.`;
    if (Platform.OS === 'web') {
      if (window.confirm(msg)) run();
    } else {
      Alert.alert('Resetar idioma', msg, [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Apagar', style: 'destructive', onPress: run },
      ]);
    }
  };

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

      <Text className="mt-6 text-sm font-bold text-slate-700 dark:text-slate-200">Testar o app</Text>
      <View className="mt-2 gap-2">
        <Button title={`🧹 Resetar só o progresso de ${pack.name}`} variant="ghost" onPress={resetarIdiomaAtual} />
      </View>

      <Text className="mt-6 text-sm font-bold text-slate-700 dark:text-slate-200">Estado bruto do banco</Text>
      <Card className="mt-2 gap-1">
        {loadingCounts && <Text className="text-xs text-slate-400">Contando…</Text>}
        {counts.map((c) => (
          <View key={c.table} className="flex-row justify-between">
            <Text className="text-xs text-slate-600 dark:text-slate-300">{c.table}</Text>
            <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{c.rows}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}
