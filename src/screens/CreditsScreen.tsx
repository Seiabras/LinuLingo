import { useMemo, useState } from 'react';
import { FlatList, Linking, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Card } from '@/components/ui';
import { allAccentVoices, allClips } from '@/data/audio-index';
import { AMIGOS_LINU } from '@/data/amigos-linu';
import { LINU_PHOTOS } from '@/data/fotos-linu';
import { WORD_PHOTOS } from '@/data/fotos-palavras';
import { FOTOS_AMIGOS } from '@/data/fotos-amigos';
import { FOTOS_ALBUM } from '@/data/fotos-album';
import { ICON_CREDITS, WORD_ICONS, type IconSource } from '@/data/icones-palavras';
import { PICTO_CREDIT, WORD_PICTOS } from '@/data/pictogramas-palavras';
import { playClip, speak } from '@/services/speech';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { SONS } from '@/data/sons';
import { SONS_AMBIENTE } from '@/data/sons-ambiente';
import { NEURAL_VOICES } from '@/data/vozes-neurais';

const LOCALE: Record<string, string> = { ro: 'ro-RO', ru: 'ru-RU' };
/** quantos símbolos do Mulberry Symbols aparecem nas palavras */
const PICTO_COUNT = new Set(Object.values(WORD_PICTOS).map((p) => p.symbol)).size;
// os ícones usados, por acervo, e os autores do game-icons.net (a licença credita por ícone)
const ICON_COUNT = new Map<IconSource, Set<string>>();
for (const i of Object.values(WORD_ICONS)) {
  if (!ICON_COUNT.has(i.source)) ICON_COUNT.set(i.source, new Set());
  ICON_COUNT.get(i.source)!.add(i.id);
}
const GAME_ICONS_AUTHORS = [...new Set(Object.values(WORD_ICONS).flatMap((i) => (i.author ? [i.author] : [])))].sort((a, b) => a.localeCompare(b));

/**
 * Créditos das gravações de falantes nativos: a maioria do projeto Lingua Libre, e as que ele ainda
 * não tinha, de outras coleções livres do Wikimedia Commons (Wikcionário, projeto Shtooka).
 * As licenças (CC BY, CC BY-SA, CC0) pedem o nome do autor, a licença e o link de cada arquivo.
 */
export default function CreditsScreen() {
  const dark = useIsDark();
  const [q, setQ] = useState('');
  // as palavras e, depois, as gravações de cada sotaque (com o lugar de quem falou)
  const clips = useMemo(
    () => [
      ...allClips().map((c) => ({ ...c, key: `${c.lang}-${c.word}`, place: null as string | null })),
      ...allAccentVoices().map((v) => ({ lang: v.lang, word: v.voice.word, clip: v.voice, key: `${v.lang}-${v.accent}-${v.voice.speaker}-${v.voice.word}`, place: v.voice.place })),
    ],
    [],
  );
  // as fotos das palavras entram na mesma busca (🖼️), cada uma com o link do arquivo
  const photos = useMemo(
    () => [
      ...Object.entries(WORD_PHOTOS).map(([word, p]) => ({ lang: 'foto', word, clip: p, key: `foto-${word}`, place: null as string | null })),
      ...Object.entries(FOTOS_AMIGOS).map(([id, p]) => ({
        lang: 'foto',
        word: AMIGOS_LINU.find((a) => a.id === id)?.species ?? id,
        clip: p,
        key: `amigo-${id}`,
        place: null as string | null,
      })),
      ...Object.entries(FOTOS_ALBUM).map(([name, p]) => ({ lang: 'foto', word: name, clip: p, key: `album-${name}`, place: null as string | null })),
    ],
    [],
  );
  const authors = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of clips) m.set(c.clip.author, (m.get(c.clip.author) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [clips]);
  const t = q.trim().toLowerCase();
  const all = useMemo(() => [...clips, ...photos], [clips, photos]);
  const list = t ? all.filter((c) => c.word.toLowerCase().includes(t) || c.clip.author.toLowerCase().includes(t) || c.place?.toLowerCase().includes(t)) : all;

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
          As {clips.length} gravações de palavras (incluindo as de cada sotaque, com o lugar de quem gravou) foram feitas por falantes nativos voluntários, a maioria do projeto <Text className="font-bold">Lingua Libre</Text> e o resto de outras coleções livres do Wikcionário e do projeto Shtooka, todas no <Text className="font-bold">Wikimedia Commons</Text> sob licenças livres (CC BY, CC BY-SA ou CC0). Muito obrigado a {authors.length === 1 ? 'quem gravou' : `todas as ${authors.length} pessoas que gravaram`}!
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          {authors.map(([a, n]) => `${a} (${n})`).join(' · ')}
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🗺️ Mapa: contornos do Natural Earth (domínio público). Países, territórios e subdivisões: listas ISO 3166-1, 3166-2 e 3166-3 com nomes em português do projeto iso-codes (LGPL-2.1).
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🖼️ Fotos das palavras: {photos.length} fotos do Wikimedia Commons (a imagem principal do item de cada conceito no Wikidata), encaixadas num quadrado sem cortar nada, sob licenças livres (CC BY, CC BY-SA, CC0 ou domínio público). O autor e a licença aparecem embaixo da foto e na busca abaixo.
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🧩 Pictogramas das palavras sem foto: {PICTO_COUNT} símbolos do Mulberry Symbols, de {PICTO_CREDIT.author.replace(/ \(.*\)$/, '')}, sob licença {PICTO_CREDIT.license} (convertidos em imagens quadradas com fundo branco; as imagens seguem a mesma licença).{' '}
          <Text accessibilityRole="link" className="font-semibold text-conecta" onPress={() => Linking.openURL(PICTO_CREDIT.page)}>
            mulberrysymbols.org ›
          </Text>
        </Text>
        {ICON_COUNT.size > 0 && (
          <Text className="text-sm text-slate-500 dark:text-slate-400">
            🔷 Ícones das palavras sem foto nem pictograma (convertidos em imagens quadradas com fundo branco; os de uma cor só, pintados de azul):{' '}
            {[...ICON_COUNT.entries()].map(([s, ids], k) => (
              <Text key={s}>
                {k > 0 ? ' · ' : ''}
                <Text accessibilityRole="link" className="font-semibold text-conecta" onPress={() => Linking.openURL(ICON_CREDITS[s].page)}>
                  {ICON_CREDITS[s].name}
                </Text>
                {` (${ids.size}, ${ICON_CREDITS[s].license})`}
              </Text>
            ))}
            {GAME_ICONS_AUTHORS.length > 0 && `. Ícones do game-icons.net feitos por ${GAME_ICONS_AUTHORS.join(', ')}`}. As palavras sem nenhuma imagem própria ganham um cartão com a palavra, desenhado pelo app.
          </Text>
        )}
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          📷 Fotos do pinguim-de-barbicha (Wikimedia Commons):{' '}
          {LINU_PHOTOS.map((p) => `${p.author} (${p.license})`).join(' · ')}.
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🔊 Sons de bichos e instrumentos (Wikimedia Commons):{' '}
          {Object.entries(SONS)
            .map(([id, c]) => `${id} — ${c.author} (${c.license})`)
            .join(' · ')}
          .
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🌬️ Sons ambiente do abrigo (Wikimedia Commons, cortados em laço):{' '}
          {Object.entries(SONS_AMBIENTE)
            .map(([id, c]) => `${id} — “${c.file}”, ${c.author} (${c.license})`)
            .join(' · ')}
          .
        </Text>
        <Text className="text-sm text-slate-500 dark:text-slate-400">
          🐧 Voz neural (quando não há gravação de nativo nem voz natural no aparelho): vozes do projeto Piper (Rhasspy / Open Home Foundation) —{' '}
          {Object.values(NEURAL_VOICES)
            .filter((v) => v.project === 'Piper')
            .map((v) => `${v.label} (${v.license})`)
            .join(' · ')}
          ; e, do projeto MMS-TTS da Meta (Massively Multilingual Speech):{' '}
          {Object.values(NEURAL_VOICES)
            .filter((v) => v.project !== 'Piper')
            .map((v) => `${v.label} (${v.license})`)
            .join(' · ')}
          . Motor: Piper e piper-phonemize (MIT), espeak-ng (GPL-3.0, código em github.com/espeak-ng/espeak-ng) e ONNX Runtime Web (MIT, Microsoft).
        </Text>
        <Pressable onPress={() => Linking.openURL('https://lingualibre.org')}>
          <Text className="text-sm font-semibold text-conecta">Grave também no Lingua Libre ›</Text>
        </Pressable>
      </Card>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Buscar palavra, foto, autor ou lugar…"
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
          keyExtractor={(c) => c.key}
          ListHeaderComponent={header}
          initialNumToRender={25}
          contentContainerStyle={{ paddingBottom: 24 }}
          ItemSeparatorComponent={() => <View className="h-1.5" />}
          renderItem={({ item }) => (
            <View className="flex-row items-center gap-3 rounded-xl bg-white px-3 py-2 dark:bg-slate-900">
              <Pressable
                accessibilityLabel={item.lang === 'foto' ? `Foto: ${item.word}` : `Ouvir ${item.word}`}
                onPress={() => (item.lang === 'foto' ? Linking.openURL(item.clip.page) : item.place ? playClip(item.clip.src) : speak(item.word, LOCALE[item.lang] ?? item.lang))}
                className="flex-1 flex-row items-center gap-3 active:opacity-70"
              >
                <Text className="text-lg">{item.lang === 'foto' ? '🖼️' : '🔊'}</Text>
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-white">{item.word}</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400">
                    {item.clip.author} · {item.clip.license}
                    {item.place ? ` · 🗺️ ${item.place}` : ''}
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
