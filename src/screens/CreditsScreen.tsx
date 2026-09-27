import { useMemo, useState } from 'react';
import { FlatList, Linking, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Card } from '@/components/ui';
import { allClips } from '@/data/audio-index';
import { LINU_PHOTOS } from '@/data/fotos-linu';
import { speak } from '@/services/speech';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const LOCALE: Record<string, string> = { ro: 'ro-RO', ru: 'ru-RU' };

/**
 * Créditos das gravações de falantes nativos (Lingua Libre / Wikimedia Commons).
 * A licença CC BY-SA pede o nome do autor, a licença e o link de cada arquivo.
 */
export default function CreditsScreen() {
  const dark = useIsDark();
  const [q, setQ] = useState('');
  const clips = useMemo(() => allClips(), []);
  const authors = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of clips) m.set(c.clip.author, (m.get(c.clip.author) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [clips]);
  const list = q.trim() ? clips.filter((c) => c.word.toLowerCase().includes(q.trim().toLowerCase()) || c.clip.author.toLowerCase().includes(q.trim().toLowerCase())) : clips;

  const header = (
    <View className="gap-3 pb-3">
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🎧 Créditos dos áudios</Text>
      </View>
      <Card className="gap-2">
        <Text className="text-base text-slate-700 dark:text-slate-300">
          As {clips.length} gravações de palavras foram feitas por falantes nativos voluntários do projeto <Text className="font-bold">Lingua Libre</Text> e estão no{' '}
          <Text className="font-bold">Wikimedia Commons</Text> sob licenças livres (em geral CC BY-SA 4.0). Muito obrigado a {authors.length === 1 ? 'quem gravou' : `todas as ${authors.length} pessoas que gravaram`}!
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          {authors.map(([a, n]) => `${a} (${n})`).join(' · ')}
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🗺️ Mapa: contornos do Natural Earth (domínio público). Países, territórios e subdivisões: listas ISO 3166-1, 3166-2 e 3166-3 com nomes em português do projeto iso-codes (LGPL-2.1).
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          📷 Fotos do pinguim-de-barbicha (Wikimedia Commons):{' '}
          {LINU_PHOTOS.map((p) => `${p.author} (${p.license})`).join(' · ')}.
        </Text>
        <Pressable onPress={() => Linking.openURL('https://lingualibre.org')}>
          <Text className="text-sm font-semibold text-conecta">Grave também no Lingua Libre ›</Text>
        </Pressable>
      </Card>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Buscar palavra ou autor…"
        placeholderTextColor="#94A3B8"
        className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
    </View>
  );

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-suave dark:bg-grafite">
      <View className="w-full max-w-2xl flex-1 self-center px-4">
        <FlatList
          data={list}
          keyExtractor={(c) => `${c.lang}-${c.word}`}
          ListHeaderComponent={header}
          initialNumToRender={25}
          contentContainerStyle={{ paddingBottom: 24 }}
          ItemSeparatorComponent={() => <View className="h-1.5" />}
          renderItem={({ item }) => (
            <View className="flex-row items-center gap-3 rounded-xl bg-white px-3 py-2 dark:bg-slate-900">
              <Pressable accessibilityLabel={`Ouvir ${item.word}`} onPress={() => speak(item.word, LOCALE[item.lang] ?? item.lang)} className="flex-1 flex-row items-center gap-3 active:opacity-70">
                <Text className="text-lg">🔊</Text>
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-white">{item.word}</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400">
                    {item.clip.author} · {item.clip.license}
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => Linking.openURL(item.clip.page)} hitSlop={8}>
                <Text className="text-xs font-semibold text-conecta">arquivo ›</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
