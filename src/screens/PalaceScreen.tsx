import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeakButton, SpeechBubble, Ipa } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, palaceNouns, saveMnemonic, type PalaceNoun } from '@/database/queries';
import { defaultMnemonic, genderTip, ROOMS, type Gender } from '@/services/mnemonics';
import { shuffle } from '@/services/answers';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';

const ROUNDS = 10;
const GENDERS: Gender[] = ['m', 'f', 'n'];

/**
 * Palácio da memória: cada gênero mora numa sala (Forja, Lago, Jardim do Camaleão).
 * O jogo «Em que sala mora?» treina o gênero; cada palavra pode ganhar um mnemônico próprio.
 */
export default function PalaceScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [nouns, setNouns] = useState<PalaceNoun[]>([]);
  const [room, setRoom] = useState<Gender | null>(null);
  const [game, setGame] = useState<{ deck: PalaceNoun[]; i: number; hits: number; answer: Gender | null } | null>(null);

  const load = useCallback(() => {
    palaceNouns(db, pack.code).then(setNouns);
  }, [db, pack.code]);
  useFocusEffect(load);

  const counts = useMemo(() => {
    const c = { m: { all: 0, learned: 0 }, f: { all: 0, learned: 0 }, n: { all: 0, learned: 0 } };
    for (const n of nouns) {
      c[n.gender].all++;
      if (n.learned) c[n.gender].learned++;
    }
    return c;
  }, [nouns]);

  const startGame = () => {
    const learned = nouns.filter((n) => n.learned);
    const pool = learned.length >= ROUNDS ? learned : nouns.slice(0, 150);
    setGame({ deck: shuffle(pool).slice(0, ROUNDS), i: 0, hits: 0, answer: null });
  };

  const answer = (g: Gender) => {
    if (!game || game.answer) return;
    const ok = game.deck[game.i].gender === g;
    if (ok) haptics.success();
    else haptics.error();
    setGame({ ...game, answer: g, hits: game.hits + (ok ? 1 : 0) });
  };

  const nextRound = async () => {
    if (!game) return;
    if (game.i + 1 >= game.deck.length) {
      const xp = game.hits + (game.hits === game.deck.length ? 5 : 0);
      await awardXp(db, xp, 'palacio');
      refresh();
      setGame({ ...game, i: game.deck.length, answer: null });
      return;
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  // ---------- jogo ----------
  if (game) {
    const finished = game.i >= game.deck.length;
    const w = game.deck[game.i];
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do jogo" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <Text className="flex-1 text-xl font-extrabold text-slate-900 dark:text-white">Em que sala mora?</Text>
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.deck.length}`} />
        </View>
        {finished ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.deck.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.deck.length} acertos
            </Text>
            <Chip label={`+${game.hits + (game.hits === game.deck.length ? 5 : 0)} XP`} tone="amber" />
            <Button title="Jogar de novo" className="w-full" onPress={startGame} />
            <Button title="Voltar ao palácio" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-8">
              <Text style={{ fontSize: 72, lineHeight: 88 }}>{w.emoji ?? '🔤'}</Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-4xl font-extrabold text-slate-900 dark:text-white">{w.word_target}</Text>
                <SpeakButton text={w.word_target} locale={pack.speechLocale} />
              </View>
              <Ipa text={w.word_target} />
              <Text className="text-slate-500 dark:text-slate-400">{w.word_native}</Text>
            </Card>
            <View className="gap-2">
              {GENDERS.map((g) => {
                const r = ROOMS[g];
                const picked = game.answer === g;
                const right = game.answer && w.gender === g;
                return (
                  <Pressable
                    key={g}
                    accessibilityRole="button"
                    onPress={() => answer(g)}
                    style={{ borderColor: right ? '#16A34A' : picked ? '#E11D48' : r.color }}
                    className={`flex-row items-center gap-3 rounded-2xl border-2 bg-white p-4 dark:bg-slate-900 ${game.answer && !right && !picked ? 'opacity-40' : ''}`}
                  >
                    <Text className="text-3xl">{r.emoji}</Text>
                    <Text className="flex-1 text-lg font-bold text-slate-900 dark:text-white">{r.name}</Text>
                    {right && <Text className="text-xl">✅</Text>}
                    {picked && !right && <Text className="text-xl">❌</Text>}
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className="text-base text-slate-700 dark:text-slate-300">💡 {genderTip(w.word_target, w.gender)}</Text>
                <Button title="Continuar" variant="success" onPress={nextRound} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  // ---------- sala aberta ----------
  if (room) {
    const r = ROOMS[room];
    const list = nouns.filter((n) => n.gender === room);
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Voltar ao palácio" onPress={() => setRoom(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">
            {r.emoji} {r.name}
          </Text>
        </View>
        <Card className="mt-4 gap-2" >
          <Text className="text-base italic text-slate-700 dark:text-slate-300">{r.scene}</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-400">{r.rule}</Text>
        </Card>
        <SectionTitle>
          {counts[room].learned} vistas de {counts[room].all} palavras
        </SectionTitle>
        <View className="gap-2">
          {list.slice(0, 80).map((n) => (
            <MnemonicRow key={n.id} n={n} locale={pack.speechLocale} onSave={async (text) => {
              await saveMnemonic(db, n.id, n.gender, text);
              load();
            }} />
          ))}
        </View>
      </Screen>
    );
  }

  // ---------- palácio ----------
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🏛️ Palácio da memória</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} />
        <SpeechBubble className="mb-5">
          O romeno tem 3 gêneros. Imagine cada palavra morando numa sala do palácio: fica muito mais fácil lembrar se é «un» ou «o»!
        </SpeechBubble>
      </View>
      <View className="gap-3">
        {GENDERS.map((g) => {
          const r = ROOMS[g];
          return (
            <Pressable key={g} accessibilityRole="button" onPress={() => setRoom(g)} style={{ borderColor: r.color }} className="flex-row items-center gap-4 rounded-2xl border-2 bg-white p-4 active:opacity-80 dark:bg-slate-900">
              <Text className="text-4xl">{r.emoji}</Text>
              <View className="flex-1">
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{r.name}</Text>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{{ m: 'masculino', f: 'feminino', n: 'neutro' }[g]} · {counts[g].all} palavras</Text>
              </View>
              <Chip label={`${counts[g].learned} vistas`} tone={r.tone} />
            </Pressable>
          );
        })}
      </View>
      <Button title="🎯 Jogar: em que sala mora?" className="mt-5" disabled={nouns.length === 0} onPress={startGame} />
      <Text className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">O jogo usa as palavras que você já viu; no começo, as mais frequentes.</Text>
    </Screen>
  );
}

function MnemonicRow({ n, locale, onSave }: { n: PalaceNoun; locale: string; onSave: (t: string) => Promise<void> }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(n.mnemonic_prompt ?? '');
  return (
    <Card className="gap-1.5">
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl">{n.emoji ?? '🔤'}</Text>
        <Text className="text-lg font-bold text-slate-900 dark:text-white">{n.word_target}</Text>
        <Text className="flex-1 text-slate-500 dark:text-slate-400">{n.word_native}</Text>
        {!n.learned && <Chip label="nova" />}
        <SpeakButton text={n.word_target} locale={locale} size={14} />
      </View>
      {editing ? (
        <View className="gap-2">
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            placeholder={defaultMnemonic(n.word_target, n.word_native, n.gender)}
            placeholderTextColor="#94A3B8"
            className="min-h-[60px] rounded-xl border-2 border-slate-200 bg-white p-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <Button
            title="Guardar mnemônico"
            variant="success"
            onPress={async () => {
              await onSave(text.trim() || defaultMnemonic(n.word_target, n.word_native, n.gender));
              setEditing(false);
            }}
          />
        </View>
      ) : (
        <Pressable onPress={() => setEditing(true)}>
          <Text className="text-sm italic text-slate-600 dark:text-slate-400">
            {n.mnemonic_prompt ?? defaultMnemonic(n.word_target, n.word_native, n.gender)} <Text className="font-semibold not-italic text-conecta">✏️ {n.mnemonic_prompt ? 'editar' : 'criar o meu'}</Text>
          </Text>
        </Pressable>
      )}
    </Card>
  );
}
