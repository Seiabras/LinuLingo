import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeakButton, Ipa } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { awardXp, reachEnding } from '@/database/queries';
import { endingIds, storyXp } from '@/services/stories';
import { speak, stopSpeaking } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { StoryChoice } from '@/data/types';

/**
 * Leitor de história interativa: o texto no idioma (com tradução opcional), as escolhas
 * no idioma. Escolha que mostra que o texto não foi entendido → dica do Linu e nova tentativa.
 */
export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const story = pack.stories.find((s) => s.id === id);
  const [nodeId, setNodeId] = useState(story?.start ?? '');
  const [path, setPath] = useState<string[]>([]);
  const [showTr, setShowTr] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [result, setResult] = useState<{ xp: number; first: boolean } | null>(null);
  const [showGlossary, setShowGlossary] = useState(false);
  const shake = useSharedValue(0);
  const scroll = useRef<ScrollView>(null);
  const node = story?.nodes[nodeId];

  useEffect(() => {
    if (node) speak(node.text, pack.speechLocale, { rate: 0.85 });
    return () => stopSpeaking();
  }, [node, pack.speechLocale]);

  const shakeStyle = useAnimatedStyle(() => ({ transform: [{ translateX: shake.value }] }));

  if (!story || !node) return null;

  const choose = async (c: StoryChoice) => {
    if (c.wrong) {
      haptics.error();
      setMistakes((m) => m + 1);
      setHint(c.wrong);
      shake.set(withSequence(withTiming(-8, { duration: 50 }), withTiming(8, { duration: 50 }), withTiming(-6, { duration: 50 }), withTiming(0, { duration: 50 })));
      return;
    }
    haptics.tapLight();
    setHint(null);
    setShowTr(false);
    setPath((p) => [...p, nodeId]);
    const next = c.next!;
    setNodeId(next);
    scroll.current?.scrollTo({ y: 0, animated: false });
    const n = story.nodes[next];
    if (n.ending) {
      const first = await reachEnding(db, story.id, next, mistakes);
      const xp = storyXp(first, mistakes, n.ending.tone);
      await awardXp(db, xp, `historia:${story.id}`);
      refresh();
      setResult({ xp, first });
      if (n.ending.tone === 'bom') haptics.success();
    }
  };

  const restart = () => {
    setNodeId(story.start);
    setPath([]);
    setMistakes(0);
    setHint(null);
    setResult(null);
  };

  const total = endingIds(story).length;
  const step = path.length + 1;

  return (
    <Screen edges={['top', 'bottom']}>
      <View className="flex-row items-center gap-3 py-3">
        <Pressable accessibilityLabel="Sair da história" onPress={goBack} hitSlop={10}>
          <X size={26} color={dark ? '#94A3B8' : '#64748B'} />
        </Pressable>
        <Text className="flex-1 text-base font-extrabold text-slate-900 dark:text-white">
          {story.emoji} {story.title}
        </Text>
        <Chip label={story.level} tone="blue" />
      </View>

      <Animated.View key={nodeId} entering={FadeInDown.duration(300)} style={{ gap: 16 }}>
        <Card className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-5xl">{node.emoji ?? '📖'}</Text>
            <View className="flex-row items-center gap-2">
              {!node.ending && <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">cena {step}</Text>}
              <SpeakButton text={node.text} locale={pack.speechLocale} slow />
            </View>
          </View>
          <Text style={targetTextStyle(pack)} className="text-xl leading-8 text-slate-900 dark:text-white">{node.text}</Text>
          {!!pack.reading?.(node.text) && <Text className="text-sm text-slate-600 dark:text-slate-400">{pack.reading(node.text)}</Text>}
          <Pressable onPress={() => setShowTr((v) => !v)}>
            <Text className="text-sm text-conecta dark:text-blue-400">{showTr ? `🇧🇷 ${node.translation}` : 'Ver tradução'}</Text>
          </Pressable>
        </Card>

        {hint && (
          <Animated.View entering={FadeInDown} style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8 }}>
            <Linu mood="pensando" size={52} animate={false} />
            <Text className="mb-2 flex-1 rounded-2xl bg-amber-100 p-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">{hint}</Text>
          </Animated.View>
        )}

        {node.choices && (
          <Animated.View style={[shakeStyle, { gap: 8 }]}>
            <Text className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">O que o Linu faz?</Text>
            {node.choices.map((c) => (
              <Pressable
                key={c.text}
                accessibilityRole="button"
                onPress={() => choose(c)}
                className="min-h-[52px] justify-center rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 active:border-conecta active:bg-conecta-light dark:border-slate-700 dark:bg-slate-900 dark:active:bg-blue-950"
              >
                <Text style={targetTextStyle(pack)} className="text-lg font-bold text-slate-800 dark:text-slate-100">{c.text}</Text>
                {!!pack.reading?.(c.text) && <Text className="text-xs text-slate-600 dark:text-slate-400">{pack.reading(c.text)}</Text>}
                {showTr && <Text className="text-sm text-slate-600 dark:text-slate-400">{c.translation}</Text>}
              </Pressable>
            ))}
          </Animated.View>
        )}

        {node.ending && result && (
          <View className={`items-center gap-3 rounded-3xl p-5 ${node.ending.tone === 'bom' ? 'bg-conquista-light dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}`}>
            <Linu mood={node.ending.tone === 'bom' ? 'comemorando' : 'triste'} size={90} />
            <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">{node.ending.title}</Text>
            <Text className="text-center text-base text-slate-700 dark:text-slate-300">{node.ending.message}</Text>
            <View className="flex-row flex-wrap justify-center gap-2">
              <Chip label={`+${result.xp} XP`} tone="amber" />
              {result.first && <Chip label="🆕 final descoberto" tone="green" />}
              <Chip label={total === 1 ? '1 final nesta história' : `${total} finais nesta história`} />
              {mistakes === 0 && <Chip label="sem nenhuma dica" tone="blue" />}
            </View>
            <Text className="text-center text-sm text-slate-600 dark:text-slate-400">💡 {story.cultural_context}</Text>
            <View className="w-full gap-2">
              <Button title="Jogar de novo e achar outro final" onPress={restart} />
              <Button title="Voltar às histórias" variant="ghost" onPress={goBack} />
            </View>
          </View>
        )}

        <Pressable onPress={() => setShowGlossary((v) => !v)} className="self-center p-2">
          <Text className="font-semibold text-conecta dark:text-blue-400">{showGlossary ? 'Esconder palavras' : '📒 Palavras da história'}</Text>
        </Pressable>
        {showGlossary && (
          <Card className="gap-2">
            {story.glossary.map(([ro, pt]) => (
              <View key={ro} className="flex-row items-center gap-2">
                <SpeakButton text={ro} locale={pack.speechLocale} size={14} />
                <Text style={targetTextStyle(pack)} className="font-bold text-slate-900 dark:text-white">{ro}</Text>
                <Ipa text={ro} className="text-xs" />
                <Text className="flex-1 text-slate-600 dark:text-slate-400">— {pt}</Text>
              </View>
            ))}
          </Card>
        )}
      </Animated.View>
    </Screen>
  );
}
