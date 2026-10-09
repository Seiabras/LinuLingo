import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { AccentMap, AccentVoices } from '@/components/AccentsPanel';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { accentMastery, buildAccentRound, recordAccent, type AccentProgress, type AccentQuestion } from '@/services/accent-quiz';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { logMistake } from '@/services/mistakes';
import { KIND } from '@/services/variedade';
import { findAccentAnywhere } from '@/data/linguas-proprias';

const ROUND = 8;

/**
 * Treino de um sotaque ou dialeto: como soa, frases e palavras típicas, e um jogo com as palavras
 * nos dois sentidos e frases para reconhecer de onde são. Abre o sotaque escolhido ou o da rota (?id=),
 * que pode ser de outro idioma do app (as línguas próprias).
 */
export default function AccentPracticeScreen() {
  const { db, pack, accent: chosen, setAccent, refresh } = useApp();
  const dark = useIsDark();
  const { id } = useLocalSearchParams<{ id?: string }>();
  // pela aba «Línguas próprias» dá para treinar uma língua de outro idioma do app (o sámi estudando romeno)
  const found = id ? findAccentAnywhere(id) : null;
  const owner = found?.pack ?? pack;
  const accents = owner.accents ?? [];
  const a = found?.accent ?? chosen ?? accents[0];
  const key = `sotaque_prog_${a?.id}`;
  const [progress, setProgress] = useState<AccentProgress>({});
  const [game, setGame] = useState<{ qs: AccentQuestion[]; i: number; hits: number; answer: string | null } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as AccentProgress) : {}));
    }, [db, key]),
  );

  if (!a) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Este idioma ainda não tem sotaques para estudar.</Text>
      </Screen>
    );
  }
  const locale = a.speechLocale ?? owner.speechLocale;
  const mastery = accentMastery(a, progress);
  const start = () => setGame({ qs: buildAccentRound(a, accents, progress, ROUND), i: 0, hits: 0, answer: null });

  const answer = async (opt: string) => {
    if (!game || game.answer) return;
    const cur = game.qs[game.i];
    const ok = opt === cur.answer;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordAccent(progress, cur, ok);
    if (!ok)
      logMistake(db, {
        language: pack.code,
        source: 'sotaque',
        key: `${a.id}:${cur.kind}:${cur.prompt}`,
        prompt: cur.kind === 'significa' ? `O que quer dizer “${cur.prompt}”? (${a.name})` : cur.kind === 'como-se-diz' ? `Como se diz “${cur.prompt}”? (${a.name})` : `De onde é esta frase: “${cur.prompt}”?`,
        expected: cur.answer,
        given: opt,
        note: cur.kind === 'de-onde' ? cur.translation : null,
        speak: cur.kind === 'como-se-diz' ? null : cur.prompt,
        options: cur.options,
      });
    setProgress(next);
    await setMeta(db, key, JSON.stringify(next));
    setGame({ ...game, answer: opt, hits: game.hits + (ok ? 1 : 0) });
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'sotaque');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  if (game) {
    const finished = game.i >= game.qs.length;
    const cur = game.qs[game.i];
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do treino" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.qs.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Chip label={`+${game.hits + (game.hits === game.qs.length ? 5 : 0)} XP`} tone="amber" />
            <Button title="Treinar de novo" className="w-full" onPress={start} />
            <Button title="Voltar ao sotaque" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-6">
              <Text className="text-center text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                {cur.kind === 'significa' ? `O que quer dizer? · ${a.name}` : cur.kind === 'como-se-diz' ? `Como se diz? · ${a.name}` : 'De onde é esta frase?'}
              </Text>
              <View className="flex-row items-center gap-2">
                {cur.kind !== 'como-se-diz' && <SpeakButton text={cur.prompt} locale={locale} size={16} />}
                <Text accessibilityLabel={`Pergunta: ${cur.prompt}`} className="shrink text-center text-3xl font-extrabold text-slate-900 dark:text-white">
                  {cur.kind === 'como-se-diz' ? `“${cur.prompt}”` : cur.prompt}
                </Text>
              </View>
              {cur.kind === 'de-onde' && game.answer && <Text className="text-sm text-slate-600 dark:text-slate-400">{cur.translation}</Text>}
            </Card>
            <View className="gap-2">
              {cur.options.map((o) => {
                const right = game.answer && o === cur.answer;
                const wrong = game.answer === o && o !== cur.answer;
                return (
                  <Pressable
                    key={o}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${o}`}
                    onPress={() => answer(o)}
                    className={`rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                  >
                    <Text className="text-lg font-bold text-slate-900 dark:text-white">{o}</Text>
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer === cur.answer ? 'text-conquista-dark dark:text-green-400' : 'text-rose-600'}`}>
                  {game.answer === cur.answer ? 'Isso!' : `Era “${cur.answer}”.`}
                </Text>
                <Button title="Continuar" variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  const isChosen = chosen?.id === a.id;
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          {a.emoji} {a.name}
        </Text>
      </View>
      <Text className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {KIND[a.kind].name} · {a.region}
      </Text>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Vamos treinar ${KIND[a.kind].este}: ${a.name}! Você já domina ${mastery.done} de ${mastery.total} perguntas.`}</SpeechBubble>
      </View>
      <ProgressBar value={mastery.total ? mastery.done / mastery.total : 0} />
      {isChosen ? (
        <View className="mt-3 flex-row flex-wrap items-center gap-2">
          <Chip label={`✓ ${KIND[a.kind].o} que você estuda`} tone="green" />
          <Button title="Voltar ao padrão" variant="ghost" onPress={() => setAccent(null)} />
        </View>
      ) : owner.code === pack.code ? (
        <Button title={`Estudar ${KIND[a.kind].este}`} variant="ghost" className="mt-3" onPress={() => setAccent(a.id)} />
      ) : null}
      <Button title={`🎯 Treinar (${ROUND} perguntas)`} variant="success" className="mt-2" onPress={start} />

      <View className="mt-4 gap-3">
        <AccentMap a={a} />
        <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{a.summary}</Text>
        <AccentVoices a={a} />
        <View className="gap-1.5">
          {a.features.map((f) => (
            <Text key={f} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
              • {f}
            </Text>
          ))}
        </View>
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Frases</Text>
        {a.examples.map(([t, tr, note]) => (
          <View key={t} className="gap-0.5 rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
            <View className="flex-row items-center gap-2">
              <SpeakButton text={t} locale={locale} size={14} />
              <Text className="flex-1 font-bold text-slate-900 dark:text-white">{t}</Text>
            </View>
            <Text className="text-sm text-slate-600 dark:text-slate-400">{tr}</Text>
            {note && <Text className={`text-sm text-amber-700 dark:text-amber-300 ${note.startsWith('[') ? 'font-mono' : ''}`}>{note}</Text>}
          </View>
        ))}
        {a.words && a.words.length > 0 && (
          <>
            <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Palavras típicas</Text>
            {a.words.map(([w, m]) => (
              <View key={w} className="flex-row items-center gap-2 rounded-xl bg-white px-3 py-2 dark:bg-slate-900">
                <SpeakButton text={w.split('/')[0].trim()} locale={locale} size={14} />
                <Text className="flex-1 text-sm text-slate-700 dark:text-slate-300">
                  <Text className="font-bold text-slate-900 dark:text-white">{w}</Text> · {m}
                </Text>
              </View>
            ))}
          </>
        )}
        <Text className="text-xs text-slate-500 dark:text-slate-400">A voz do aparelho imita pouco os sotaques: para o som de verdade, ouça a gente de lá (🎙️) e siga a transcrição.</Text>
      </View>
    </Screen>
  );
}
