import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { SONS } from '@/data/sons';
import { buildSoundRound, recordSound, soundPool, type SoundItem, type SoundProgress, type SoundQuestion } from '@/services/guess-sound';
import { logMistake } from '@/services/mistakes';
import { playClip } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

const ROUND = 10;
const AVAILABLE = new Set(Object.keys(SONS));

/**
 * Adivinhe o som: a gravação de verdade de um bicho ou de um instrumento (Wikimedia Commons) e as
 * opções com o nome no idioma estudado.
 */
export default function GuessSoundScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const pool = useMemo(() => soundPool(pack.code, pack.animalSounds, AVAILABLE), [pack.code, pack.animalSounds]);
  const byId = useMemo(() => new Map(pool.map((p) => [p.id, p])), [pool]);
  const key = `sons_prog_${pack.code}`;
  const [progress, setProgress] = useState<SoundProgress>({});
  const [game, setGame] = useState<{ qs: SoundQuestion[]; i: number; hits: number; answer: string | null } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as SoundProgress) : {}));
    }, [db, key]),
  );

  const cur = game && game.i < game.qs.length ? game.qs[game.i] : null;
  const answered = !!game?.answer;
  // cada som toca sozinho ao aparecer
  useEffect(() => {
    if (cur && !answered) playClip(SONS[cur.item.id].src);
  }, [cur, answered]);

  const start = () => setGame({ qs: buildSoundRound(pool, progress, ROUND), i: 0, hits: 0, answer: null });
  const answer = async (id: string) => {
    if (!game || !cur || game.answer) return;
    const ok = id === cur.item.id;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordSound(progress, cur.item.id, ok);
    if (!ok) {
      const given = byId.get(id);
      logMistake(db, {
        language: pack.code,
        source: 'sons',
        key: cur.item.id,
        prompt: cur.item.kind === 'bicho' ? 'Que bicho é este som?' : 'Que instrumento é este som?',
        expected: cur.item.name,
        given: given?.name ?? null,
        note: `${cur.item.emoji} ${cur.item.name} = ${cur.item.pt}`,
        speak: cur.item.name,
        options: cur.options.map((o) => byId.get(o)?.name ?? o),
      });
    }
    setProgress(next);
    setGame({ ...game, answer: id, hits: game.hits + (ok ? 1 : 0) });
    await setMeta(db, key, JSON.stringify(next));
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'sons');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  if (!pool.length) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Ainda não há sons para este idioma.</Text>
      </Screen>
    );
  }

  if (game) {
    const finished = game.i >= game.qs.length || !cur;
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do jogo" onPress={() => setGame(null)} hitSlop={10}>
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
            <Chip label={`+${game.hits + (game.hits === game.qs.length ? 5 : 0)} XP`} tone="amber" />
            <Button title="Jogar de novo" className="w-full" onPress={start} />
            <Button title="Voltar" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-3 py-6">
              <Text className="text-center text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                {cur.item.kind === 'bicho' ? 'Que bicho é?' : 'Que instrumento é?'}
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Ouvir de novo"
                onPress={() => playClip(SONS[cur.item.id].src)}
                className="h-24 w-24 items-center justify-center rounded-full bg-conecta active:opacity-80"
              >
                <Text className="text-5xl">🔊</Text>
              </Pressable>
            </Card>
            <View className="gap-2">
              {cur.options.map((o) => {
                const it = byId.get(o);
                const right = game.answer && o === cur.item.id;
                const wrong = game.answer === o && o !== cur.item.id;
                return (
                  <Pressable
                    key={o}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${it?.name}`}
                    onPress={() => answer(o)}
                    className={`rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                  >
                    <Text className="text-center text-xl font-bold text-slate-900 dark:text-white">
                      {game.answer ? `${it?.emoji} ` : ''}
                      {it?.name}
                    </Text>
                    {game.answer && <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{it?.pt}</Text>}
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer === cur.item.id ? 'text-conquista-dark dark:text-green-400' : 'text-rose-600'}`}>
                  {game.answer === cur.item.id ? 'Isso!' : `Era ${cur.item.emoji} “${cur.item.name}”.`}
                </Text>
                <View className="flex-row items-center gap-2">
                  <SpeakButton text={cur.item.name} locale={pack.speechLocale} />
                  <Text className="flex-1 text-base text-slate-800 dark:text-slate-200">
                    <Text className="font-bold">{cur.item.name}</Text> = {cur.item.pt}
                  </Text>
                </View>
                <Credit id={cur.item.id} />
                <Button title={game.i + 1 >= game.qs.length ? 'Ver resultado' : 'Continuar'} variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  const bichos = pool.filter((p) => p.kind === 'bicho');
  const instrumentos = pool.filter((p) => p.kind === 'instrumento');
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🔊 Adivinhe o som</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Ouça e adivinhe: que bicho ou que instrumento é? As opções vêm em ${nomeIdioma(pack.name)}, então você aprende o nome de cada um. Os sons são gravações de verdade.`}</SpeechBubble>
      </View>
      <Button title={`🎯 Jogar (${ROUND} sons)`} variant="success" onPress={start} />
      <SoundGrid title="Bichos" items={bichos} />
      <SoundGrid title="Instrumentos" items={instrumentos} />
      <Text className="mt-3 text-xs text-slate-500 dark:text-slate-400">Sons do Wikimedia Commons, com licenças livres (autores em Perfil › Créditos dos áudios).</Text>
    </Screen>
  );
}

function SoundGrid({ title, items }: { title: string; items: SoundItem[] }) {
  if (!items.length) return null;
  return (
    <View className="mt-5 gap-2">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">{title}</Text>
      <View className="flex-row flex-wrap gap-2">
        {items.map((it) => (
          <Pressable
            key={it.id}
            accessibilityRole="button"
            accessibilityLabel={`Ouvir: ${it.name} (${it.pt})`}
            onPress={() => playClip(SONS[it.id].src)}
            style={{ width: 104 }}
            className="items-center gap-0.5 rounded-2xl border-2 border-slate-200 bg-white p-2 active:opacity-70 dark:border-slate-700 dark:bg-slate-900"
          >
            <Text className="text-3xl">{it.emoji}</Text>
            <Text numberOfLines={1} className="text-center text-sm font-bold text-slate-900 dark:text-white">
              {it.name}
            </Text>
            <Text numberOfLines={1} className="text-center text-xs text-slate-600 dark:text-slate-400">
              {it.pt}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export function Credit({ id }: { id: string }) {
  const c = SONS[id];
  if (!c) return null;
  return (
    <Text className="text-xs text-slate-500 dark:text-slate-400">
      Som: {c.author} · {c.license} (Wikimedia Commons)
    </Text>
  );
}
