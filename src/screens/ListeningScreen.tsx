import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, Ipa, LetterPad, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { CLIPS } from '@/data/audio-index';
import {
  buildListenRound,
  checkDictation,
  listenMastery,
  listenPool,
  recordListen,
  speakerOf,
  type DictationResult,
  type ListenMode,
  type ListenProgress,
  type ListenQuestion,
} from '@/services/listening';
import { speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { logMistake } from '@/services/mistakes';
import { nomeIdioma } from '@/services/idioma-nome';

const ROUND = 10;

type Answer = { given: string; ok: boolean; result?: DictationResult };

/**
 * Escuta e ditado: a gravação de um nativo (ou a voz do aparelho, se o idioma ainda não tem
 * gravações) e você escolhe entre palavras que soam parecido ou escreve o que ouviu.
 */
export default function ListeningScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const clips = CLIPS[pack.code];
  const pool = useMemo(() => listenPool(pack, clips), [pack, clips]);
  const native = pool.some((i) => i.clip);
  const key = `escuta_prog_${pack.code}`;
  const [progress, setProgress] = useState<ListenProgress>({});
  const [game, setGame] = useState<{ qs: ListenQuestion[]; i: number; hits: number; answer: Answer | null } | null>(null);
  const [typed, setTyped] = useState('');
  const [mute, setMute] = useState(false);
  const input = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as ListenProgress) : {}));
    }, [db, key]),
  );

  const cur = game && game.i < game.qs.length ? game.qs[game.i] : null;
  const play = useCallback(
    async (rate = 0.9) => {
      if (!cur) return;
      const r = await speak(cur.item.word, pack.speechLocale, { rate });
      setMute(r === 'sem-voz');
    },
    [cur, pack.speechLocale],
  );
  // cada palavra toca sozinha ao aparecer
  const answered = !!game?.answer;
  useEffect(() => {
    if (!cur || answered) return;
    speak(cur.item.word, pack.speechLocale, { rate: 0.9 }).then((r) => setMute(r === 'sem-voz'));
  }, [cur, answered, pack.speechLocale]);

  const mastery = listenMastery(pool, progress);
  const start = (mode: ListenMode) => {
    setTyped('');
    setGame({ qs: buildListenRound(pool, progress, mode, ROUND, Math.random, pack.ipa), i: 0, hits: 0, answer: null });
  };

  const answer = async (given: string) => {
    if (!game || !cur || game.answer) return;
    const result = cur.mode === 'escrever' ? checkDictation(given, cur.item, pool, pack.ipa) : undefined;
    const ok = result ? ['certo', 'acentos', 'homofono'].includes(result.kind) : given === cur.item.word;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordListen(progress, cur, ok);
    if (!ok)
      logMistake(db, {
        language: pack.code,
        source: cur.mode === 'escrever' ? 'ditado' : 'escuta',
        key: cur.item.word,
        prompt: cur.mode === 'escrever' ? 'Escreva o que ouviu' : 'Qual palavra você ouviu?',
        expected: cur.item.word,
        given,
        note: cur.item.meaning,
        speak: cur.item.word,
        byEar: true,
        options: cur.options ?? null,
      });
    setProgress(next);
    setGame({ ...game, answer: { given, ok, result }, hits: game.hits + (ok ? 1 : 0) });
    await setMeta(db, key, JSON.stringify(next));
  };

  const nextQ = async () => {
    if (!game) return;
    setTyped('');
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, xpFor(game.hits, game.qs), 'escuta');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
    setTimeout(() => input.current?.focus(), 50);
  };

  if (!pool.length) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Este idioma ainda não tem palavras para ouvir.</Text>
      </Screen>
    );
  }

  if (game) {
    const finished = game.i >= game.qs.length;
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do treino" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished || !cur ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.qs.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Chip label={`+${xpFor(game.hits, game.qs)} XP`} tone="amber" />
            <Text className="text-center text-sm text-slate-600 dark:text-slate-400">As palavras que você errou voltam na próxima rodada.</Text>
            <Button title="Outra rodada" className="w-full" onPress={() => start(game.qs[0]?.mode ?? 'escolher')} />
            <Button title="Voltar" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-3 py-6">
              <Text className="text-center text-sm font-bold uppercase tracking-wide text-slate-500">
                {cur.mode === 'escolher' ? 'Qual palavra você ouviu?' : 'Escreva o que você ouviu'}
              </Text>
              <View className="flex-row gap-3">
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Ouvir de novo"
                  onPress={() => play()}
                  className="h-20 w-20 items-center justify-center rounded-full bg-conecta active:opacity-80"
                >
                  <Text className="text-4xl">🔊</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Ouvir devagar"
                  onPress={() => play(0.65)}
                  className="h-20 w-20 items-center justify-center rounded-full bg-slate-200 active:opacity-80 dark:bg-slate-800"
                >
                  <Text className="text-4xl">🐢</Text>
                </Pressable>
              </View>
              {mute && (
                <Text className="text-center text-sm text-rose-600">
                  Seu aparelho não tem voz em {nomeIdioma(pack.name)}. Veja em Perfil › Voz e microfone.
                </Text>
              )}
            </Card>

            {cur.mode === 'escolher' ? (
              <View className="gap-2">
                {cur.options!.map((o) => {
                  const right = game.answer && o === cur.item.word;
                  const wrong = game.answer?.given === o && o !== cur.item.word;
                  return (
                    <Pressable
                      key={o}
                      accessibilityRole="button"
                      accessibilityLabel={`Opção ${o}`}
                      onPress={() => answer(o)}
                      className={`rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                    >
                      <Text className="text-center text-xl font-bold text-slate-900 dark:text-white">{o}</Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : (
              <View className="gap-3">
                <TextInput
                  ref={input}
                  value={typed}
                  onChangeText={setTyped}
                  editable={!game.answer}
                  autoFocus
                  autoCapitalize="none"
                  autoCorrect={false}
                  spellCheck={false}
                  onSubmitEditing={() => typed.trim() && answer(typed)}
                  accessibilityLabel="O que você ouviu"
                  placeholder="escreva aqui"
                  placeholderTextColor="#94A3B8"
                  className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-center text-2xl font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                {!game.answer && (
                  <>
                    <LetterPad onInsert={(ch) => setTyped((t) => t + ch)} onBackspace={() => setTyped((t) => t.slice(0, -1))} small />
                    <Button title="Conferir" disabled={!typed.trim()} onPress={() => answer(typed)} />
                  </>
                )}
              </View>
            )}

            {game.answer && <Feedback q={cur} answer={game.answer} locale={pack.speechLocale} onNext={nextQ} last={game.i + 1 >= game.qs.length} />}
          </View>
        )}
      </Screen>
    );
  }

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🎧 Escuta e ditado</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Vamos treinar o ouvido! Você ouve uma palavra em ${nomeIdioma(pack.name)} e mostra o que entendeu. Você já reconhece ${mastery.done.toLocaleString('pt-BR')} de ${mastery.total.toLocaleString('pt-BR')}.`}</SpeechBubble>
      </View>
      <ProgressBar value={mastery.total ? mastery.done / mastery.total : 0} />
      <Text className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        {native
          ? `${mastery.total.toLocaleString('pt-BR')} palavras gravadas por falantes nativos (Lingua Libre), das mais usadas às menos.`
          : `O ${nomeIdioma(pack.name)} ainda não tem gravações de nativos no app: a voz é a do aparelho.`}
      </Text>

      <View className="mt-5 gap-3">
        <Button title="👂 Escolher o que ouviu" onPress={() => start('escolher')} />
        <Text className="-mt-1 text-center text-xs text-slate-500 dark:text-slate-400">4 opções que soam ou se escrevem parecido</Text>
        <Button title="✍️ Ditado" variant="success" onPress={() => start('escrever')} />
        <Text className="-mt-1 text-center text-xs text-slate-500 dark:text-slate-400">Escreva o que ouviu: vale o dobro de pontos</Text>
      </View>
      <Card className="mt-5 gap-1">
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
          🔊 ouve de novo e 🐢 ouve devagar. As palavras que você erra voltam mais vezes; depois de acertar algumas vezes (o ditado conta em dobro), a palavra fica dominada.
        </Text>
      </Card>
      {native && (
        <Button title="🎧 Quem gravou (créditos)" variant="ghost" className="mt-3" onPress={() => router.push('/creditos')} />
      )}
    </Screen>
  );
}

function xpFor(hits: number, qs: ListenQuestion[]): number {
  const per = qs[0]?.mode === 'escrever' ? 2 : 1;
  return hits * per + (hits === qs.length && qs.length ? 5 : 0);
}

function Feedback({ q, answer, locale, onNext, last }: { q: ListenQuestion; answer: Answer; locale: string; onNext: () => void; last: boolean }) {
  const w = q.item.word;
  const r = answer.result;
  const title = !r
    ? answer.ok
      ? 'Isso!'
      : `Era «${w}».`
    : r.kind === 'certo'
      ? 'Isso! Escrita perfeita.'
      : r.kind === 'acentos'
        ? `Certo, só faltou acento: «${w}».`
        : r.kind === 'homofono'
          ? `«${r.other}» soa igual! Aqui era «${w}».`
          : r.kind === 'quase'
            ? `Por uma letra! Era «${w}».`
            : `Era «${w}».`;
  return (
    <Card className="gap-2">
      <Text className={`text-lg font-extrabold ${answer.ok ? 'text-conquista' : 'text-rose-600'}`}>{title}</Text>
      <View className="flex-row items-center gap-2">
        <SpeakButton text={w} locale={locale} />
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{w}</Text>
      </View>
      <Ipa text={w} />
      <Text className="text-base text-slate-700 dark:text-slate-300">{q.item.meaning}</Text>
      <Text className="text-xs text-slate-400">
        {q.item.clip ? `🎙️ Voz de ${speakerOf(q.item.clip)} · Lingua Libre · ${q.item.clip.license}` : '🔈 Voz do aparelho'}
      </Text>
      <Button title={last ? 'Ver resultado' : 'Continuar'} variant="success" onPress={onNext} />
    </Card>
  );
}
