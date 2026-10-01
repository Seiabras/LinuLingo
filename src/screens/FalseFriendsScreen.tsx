import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, Ipa, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { buildFFRound, recordFF, type FFProgress, type FFQuestion } from '@/services/false-friends';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { FalseFriend } from '@/data/types';
import { logMistake } from '@/services/mistakes';
import { nomeIdioma } from '@/services/idioma-nome';

/** Falsos amigos: palavras que parecem portuguesas e querem dizer outra coisa. Lista e treino. */
export default function FalseFriendsScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const list = pack.falseFriends ?? [];
  const key = `falsos_${pack.code}`;
  const [progress, setProgress] = useState<FFProgress>({});
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<FalseFriend | null>(null);
  const [game, setGame] = useState<{ qs: FFQuestion[]; i: number; hits: number; answer: string | null } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as FFProgress) : {}));
    }, [db, key]),
  );

  const learned = list.filter((f) => (progress[f.word] ?? 0) >= 2).length;
  const start = () => setGame({ qs: buildFFRound(list, progress), i: 0, hits: 0, answer: null });

  const answer = async (opt: string) => {
    if (!game || game.answer) return;
    const cur = game.qs[game.i];
    const ok = opt === cur.answer;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordFF(progress, cur, ok);
    if (!ok)
      logMistake(db, {
        language: pack.code,
        source: 'falsos-amigos',
        key: `${cur.kind}:${cur.ff.word}`,
        prompt: cur.kind === 'significa' ? `O que quer dizer “${cur.ff.word}”?` : `Como se diz “${cur.ff.looksLike.split(/[/;,(]/)[0].trim()}” em ${nomeIdioma(pack.name)}?`,
        expected: cur.answer,
        given: opt,
        note: `${cur.ff.word} = ${cur.ff.means}; parece “${cur.ff.looksLike}”, que se diz “${cur.ff.forThat}”.`,
        speak: cur.kind === 'significa' ? cur.ff.word : null,
        options: cur.options,
      });
    setProgress(next);
    await setMeta(db, key, JSON.stringify(next));
    setGame({ ...game, answer: opt, hits: game.hits + (ok ? 1 : 0) });
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'falsos-amigos');
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
            <Button title="Ver a lista" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-6">
              <Text className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {cur.kind === 'significa' ? `O que quer dizer em ${nomeIdioma(pack.name)}?` : `Como se diz em ${nomeIdioma(pack.name)}?`}
              </Text>
              <Text accessibilityLabel={`Pergunta: ${cur.kind === 'significa' ? cur.ff.word : cur.ff.looksLike}`} className="text-center text-4xl font-extrabold text-slate-900 dark:text-white">
                {cur.kind === 'significa' ? cur.ff.word : `“${cur.ff.looksLike.split(/[/;,(]/)[0].trim()}”`}
              </Text>
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
                <Text className={`text-lg font-extrabold ${game.answer === cur.answer ? 'text-conquista' : 'text-rose-600'}`}>
                  {game.answer === cur.answer ? 'Isso!' : game.answer === cur.trap ? 'Caiu na armadilha! 🪤' : `Era “${cur.answer}”.`}
                </Text>
                <FFInfo ff={cur.ff} locale={pack.speechLocale} />
                <Button title="Continuar" variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  const term = q.trim().toLowerCase();
  const shown = term ? list.filter((f) => `${f.word} ${f.means} ${f.looksLike}`.toLowerCase().includes(term)) : list;
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🪤 Falsos amigos</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} />
        <SpeechBubble className="mb-5">
          {`Parecem português, mas querem dizer outra coisa! São ${list.length} armadilhas; você já domina ${learned}.`}
        </SpeechBubble>
      </View>
      <ProgressBar value={list.length ? learned / list.length : 0} />
      <Button title="🎯 Treinar (10 perguntas)" variant="success" className="mt-3" onPress={start} />
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Buscar: exquisito, oficina…"
        placeholderTextColor="#94A3B8"
        className="mt-4 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <View className="mt-3 gap-2">
        {shown.map((f) => (
          // o detalhe (com o botão de ouvir) fica fora do botão do cabeçalho: botão dentro de botão não vale na web
          <View key={f.word} className="gap-2 rounded-2xl bg-white p-3 dark:bg-slate-900">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Falso amigo ${f.word}`}
              accessibilityState={{ expanded: open?.word === f.word }}
              onPress={() => setOpen(open?.word === f.word ? null : f)}
              className="flex-row items-center gap-3 active:opacity-80"
            >
              <Text className="text-2xl">{f.emoji}</Text>
              <View className="flex-1">
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{f.word}</Text>
                <Text className="text-sm text-slate-600 dark:text-slate-400">
                  = {f.means} <Text className="text-rose-500">(≠ {f.looksLike})</Text>
                </Text>
              </View>
              {(progress[f.word] ?? 0) >= 2 && <Text>⭐</Text>}
            </Pressable>
            {open?.word === f.word && <FFInfo ff={f} locale={pack.speechLocale} />}
          </View>
        ))}
      </View>
    </Screen>
  );
}

function FFInfo({ ff, locale }: { ff: FalseFriend; locale: string }) {
  return (
    <View className="gap-1">
      <Text className="text-base text-slate-700 dark:text-slate-300">
        <Text className="font-bold">{ff.word}</Text> = {ff.means}. Para dizer “{ff.looksLike}”, use <Text className="font-bold">{ff.forThat}</Text>.
      </Text>
      <View className="flex-row items-center gap-2">
        <SpeakButton text={ff.example[0]} locale={locale} size={14} />
        <Text className="flex-1 font-semibold text-conecta">{ff.example[0]}</Text>
      </View>
      <Ipa text={ff.example[0]} />
      <Text className="text-sm text-slate-500 dark:text-slate-400">{ff.example[1]}</Text>
    </View>
  );
}
