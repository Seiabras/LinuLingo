import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { X } from 'lucide-react-native';
import { WordImage } from '@/components/WordImage';
import { SwipeCard, type SwipeDir } from './SwipeCard';
import { Linu } from './Linu';
import { Button, GENDER_LABEL, Chip, ProgressBar, Screen, SpeakButton, Ipa } from './ui';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { awardXp, reviewWord } from '@/database/queries';
import { speak, stopSpeaking } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { ROOMS } from '@/services/mnemonics';
import type { VocabWithSRS } from '@/types';
import { logMistake } from '@/services/mistakes';

/** Qualidade SM-2 por gesto: → sei, ← não sei, ↑ fácil demais, ↓ difícil. */
const QUALITY: Record<SwipeDir, number> = {
  direita: 4,
  esquerda: 1,
  cima: 5,
  baixo: 3,
};
const LABEL: Record<SwipeDir, string> = {
  direita: 'Sei',
  esquerda: 'Não sei',
  cima: 'Fácil',
  baixo: 'Difícil',
};

/**
 * Sessão de cartões com gestos. No sprint há cronômetro de 5 min; na revisão, o baralho
 * são as palavras vencidas no SRS. Tocar no cartão vira e mostra a tradução.
 */
export function DeckSession({
  title,
  deck,
  seconds,
  xpPerCard,
  source,
  onFinish,
}: {
  title: string;
  deck: VocabWithSRS[];
  seconds?: number;
  xpPerCard: number;
  source: string;
  /** chamado uma vez quando a sessão termina, com quantos cartões foram respondidos */
  onFinish?: (reviewed: number) => void;
}) {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [left, setLeft] = useState(seconds ?? 0);
  const [tally, setTally] = useState<Record<SwipeDir, number>>({
    direita: 0,
    esquerda: 0,
    cima: 0,
    baixo: 0,
  });
  const [done, setDone] = useState(false);
  const [earned, setEarned] = useState(0);
  const finished = useRef(false);
  const busy = useRef(false);
  const card = deck[i];

  useEffect(() => {
    if (!seconds || done) return;
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [seconds, done]);

  useEffect(() => {
    if (card && !done) speak(card.word_target, pack.speechLocale);
  }, [card, done, pack.speechLocale]);

  useEffect(() => () => stopSpeaking(), []);

  const count = Object.values(tally).reduce((a, b) => a + b, 0);

  const finish = async (reviewed: number) => {
    if (finished.current) return;
    finished.current = true;
    const pedido = reviewed * xpPerCard;
    const r = pedido > 0 ? await awardXp(db, pedido, source) : null;
    setEarned(r?.xp ?? pedido);
    setDone(true);
    onFinish?.(reviewed);
    refresh();
  };

  useEffect(() => {
    if (seconds && left === 0 && !done) finish(count);
  }, [left]); // eslint-disable-line react-hooks/exhaustive-deps

  const swipe = async (dir: SwipeDir) => {
    if (!card || done || busy.current) return;
    busy.current = true;
    if (dir === 'esquerda') {
      haptics.error();
      logMistake(db, { language: pack.code, source: 'revisao', key: card.id, prompt: `O que é “${card.word_target}”?`, expected: card.word_native, note: card.example_sentence ?? null, speak: card.word_target });
    } else haptics.success();
    await reviewWord(db, card.id, QUALITY[dir]);
    setTally((t) => ({ ...t, [dir]: t[dir] + 1 }));
    setFlipped(false);
    busy.current = false;
    if (i + 1 >= deck.length) finish(count + 1);
    else setI(i + 1);
  };

  if (!deck.length || done) {
    return (
      <Screen edges={['top', 'bottom']}>
        <View className="flex-1 items-center justify-center gap-4 py-16">
          <Linu mood={deck.length ? 'comemorando' : 'feliz'} size={120} />
          <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
            {deck.length ? `${title} concluído!` : 'Nada para revisar agora 🎉'}
          </Text>
          {deck.length > 0 ? (
            <View className="w-full gap-2">
              <Text className="text-center text-lg text-slate-600 dark:text-slate-300">
                {count} {count === 1 ? 'palavra' : 'palavras'} · <Text className="font-bold text-amber-500">+{earned} XP</Text>
              </Text>
              <View className="flex-row flex-wrap justify-center gap-2">
                {(Object.keys(tally) as SwipeDir[]).map((d) => (
                  <Chip key={d} label={`${LABEL[d]}: ${tally[d]}`} tone={d === 'esquerda' ? 'rose' : d === 'baixo' ? 'amber' : 'green'} />
                ))}
              </View>
            </View>
          ) : (
            <Text className="text-center text-slate-600 dark:text-slate-300">O SRS avisa quando for a hora certa de revisar cada palavra.</Text>
          )}
          <Button title="Voltar" variant="success" onPress={goBack} className="w-full" />
        </View>
      </Screen>
    );
  }

  const mm = String(Math.floor(left / 60)).padStart(1, '0');
  const ss = String(left % 60).padStart(2, '0');
  const g = card.gender ? GENDER_LABEL[card.gender] : null;

  return (
    <Screen edges={['top', 'bottom']}>
      <View className="flex-row items-center gap-3 py-3">
        <Pressable accessibilityLabel="Sair" onPress={() => (count ? finish(count) : goBack())} hitSlop={10}>
          <X size={26} color={dark ? '#94A3B8' : '#64748B'} />
        </Pressable>
        <ProgressBar value={seconds ? 1 - left / seconds : i / deck.length} color={seconds ? 'bg-fogo' : 'bg-conecta'} className="flex-1" />
        <Text className="w-14 text-right font-extrabold text-slate-700 dark:text-slate-200">{seconds ? `${mm}:${ss}` : `${i + 1}/${deck.length}`}</Text>
      </View>
      <Text className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{title}</Text>

      <View className="relative items-center">
        <Text className="absolute -top-1 text-xs font-bold text-conquista">↑ fácil</Text>
        <SwipeCard key={card.id} onSwipe={swipe}>
          <View
            style={card.gender ? { borderColor: ROOMS[card.gender].color } : undefined}
            className="mx-2 mt-5 items-center gap-3 rounded-3xl border-2 border-slate-200 bg-white px-4 pb-8 dark:border-slate-700 dark:bg-slate-900"
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Virar cartão"
              onPress={() => setFlipped((f) => !f)}
              className="w-full items-center gap-3 pt-10"
            >
              <WordImage wordNative={card.word_native} emoji={card.emoji} size={120} credit={flipped} pos={card.part_of_speech} target={card.word_target} />
              <Text style={targetTextStyle(pack)} className="text-4xl font-extrabold text-slate-900 dark:text-white">{card.word_target}</Text>
              <Ipa text={card.word_target} className="text-base" />
              {g && card.gender && <Chip label={`${ROOMS[card.gender].emoji} ${g.label}`} tone={g.tone} />}
              {flipped ? (
                <View className="items-center gap-1">
                  <Text className="text-xl font-bold text-conecta">{card.word_native}</Text>
                  {card.example_sentence && <Text style={targetTextStyle(pack)} className="text-center italic text-slate-500 dark:text-slate-400">{card.example_sentence}</Text>}
                </View>
              ) : (
                <Text className="text-sm text-slate-400">toque para ver o significado</Text>
              )}
            </Pressable>
            <SpeakButton text={card.word_target} locale={pack.speechLocale} size={24} />
          </View>
        </SwipeCard>
        <Text className="mt-2 text-xs font-bold text-amber-600">↓ difícil</Text>
      </View>

      <View className="mt-5 flex-row gap-2">
        <Button title="← Não sei" variant="danger" className="flex-1" onPress={() => swipe('esquerda')} />
        <Button title="Sei →" variant="success" className="flex-1" onPress={() => swipe('direita')} />
      </View>
      <View className="mt-2 flex-row gap-2">
        <Button title="↓ Difícil" variant="ghost" className="flex-1" onPress={() => swipe('baixo')} />
        <Button title="↑ Fácil" variant="ghost" className="flex-1" onPress={() => swipe('cima')} />
      </View>
    </Screen>
  );
}
