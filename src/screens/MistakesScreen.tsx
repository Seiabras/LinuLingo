import { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft, Volume2 } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import {
  buildMistakeRound,
  clearLearned,
  listMistakes,
  RESOLVE_STREAK,
  reviewMistake,
  SOURCES,
  type Mistake,
  type MistakeQuestion,
  type MistakeSource,
} from '@/services/mistakes';
import { speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

const ROUND = 10;
type Result = 'aprendido' | 'certo' | 'errado';

/**
 * Caderno de erros: tudo o que você errou nos treinos, com a sua resposta e a certa. Na revisão,
 * acertar RESOLVE_STREAK vezes seguidas tira o item do caderno; errar de novo num treino devolve.
 */
export default function MistakesScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [list, setList] = useState<Mistake[]>([]);
  const [filter, setFilter] = useState<MistakeSource | null>(null);
  const [showLearned, setShowLearned] = useState(false);
  const [game, setGame] = useState<{ qs: MistakeQuestion[]; i: number; hits: number; learned: number; answer: string | null; result: Result | null; reveal: boolean } | null>(null);

  const load = useCallback(async () => setList(await listMistakes(db, pack.code)), [db, pack.code]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const cur = game && game.i < game.qs.length ? game.qs[game.i] : null;
  const answered = !!game?.result;
  // as perguntas de ouvido tocam sozinhas
  useEffect(() => {
    if (cur?.byEar && cur.m.speak && !answered) speak(cur.m.speak, pack.speechLocale);
  }, [cur, answered, pack.speechLocale]);

  const open = list.filter((m) => !m.resolved_at);
  const learned = list.filter((m) => m.resolved_at);
  const sources = [...new Set(open.map((m) => m.source))];
  const shown = open.filter((m) => !filter || m.source === filter);

  const start = () => setGame({ qs: buildMistakeRound(filter ? shown : open, ROUND), i: 0, hits: 0, learned: 0, answer: null, result: null, reveal: false });
  const decide = async (ok: boolean, given: string | null) => {
    if (!game || !cur || game.result) return;
    if (ok) haptics.success();
    else haptics.error();
    const result = await reviewMistake(db, cur.m, ok);
    setGame({ ...game, answer: given, result, hits: game.hits + (ok ? 1 : 0), learned: game.learned + (result === 'aprendido' ? 1 : 0) });
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + game.learned * 2, 'caderno');
      refresh();
      load();
    }
    setGame({ ...game, i: game.i + 1, answer: null, result: null, reveal: false });
  };

  if (game) {
    const finished = game.i >= game.qs.length;
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable
            accessibilityLabel="Sair da revisão"
            onPress={() => {
              setGame(null);
              load();
            }}
            hitSlop={10}
          >
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished || !cur ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.learned > 0 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Text className="text-center text-base text-slate-700 dark:text-slate-300">
              {game.learned ? `${game.learned} ${game.learned === 1 ? 'item saiu' : 'itens saíram'} do caderno!` : 'Acerte de novo na próxima revisão para tirar os itens do caderno.'}
            </Text>
            <Chip label={`+${game.hits + game.learned * 2} XP`} tone="amber" />
            <Button
              title="Voltar ao caderno"
              className="w-full"
              onPress={() => {
                setGame(null);
                load();
              }}
            />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-3 py-6">
              <Chip label={`${SOURCES[cur.m.source].emoji} ${SOURCES[cur.m.source].name}`} />
              <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">{cur.m.prompt.replace(/^🔊 /, '')}</Text>
              {cur.byEar && cur.m.speak && (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Ouvir de novo"
                  onPress={() => speak(cur.m.speak!, pack.speechLocale)}
                  className="h-16 w-16 items-center justify-center rounded-full bg-conecta active:opacity-80"
                >
                  <Text className="text-3xl">🔊</Text>
                </Pressable>
              )}
            </Card>

            {cur.options.length ? (
              <View className="gap-2">
                {cur.options.map((o) => {
                  const right = game.result && o === cur.m.expected;
                  const wrong = game.result && game.answer === o && o !== cur.m.expected;
                  return (
                    <Pressable
                      key={o}
                      accessibilityRole="button"
                      accessibilityLabel={`Opção ${o}`}
                      onPress={() => decide(o === cur.m.expected, o)}
                      className={`rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.result && !right && !wrong ? 'opacity-50' : ''}`}
                    >
                      <Text className="text-center text-lg font-bold text-slate-900 dark:text-white">{o}</Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : !game.reveal ? (
              <Button title="Mostrar a resposta" onPress={() => setGame({ ...game, reveal: true })} />
            ) : (
              <Card className="gap-3">
                <Text className="text-center text-2xl font-extrabold text-conquista-dark dark:text-green-400">{cur.m.expected}</Text>
                {!game.result && (
                  <View className="flex-row gap-2">
                    <Button title="✓ Eu sabia" variant="success" className="flex-1" onPress={() => decide(true, null)} />
                    <Button title="✗ Não sabia" variant="ghost" className="flex-1" onPress={() => decide(false, null)} />
                  </View>
                )}
              </Card>
            )}

            {game.result && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.result === 'errado' ? 'text-rose-600' : 'text-conquista-dark dark:text-green-400'}`}>
                  {game.result === 'aprendido'
                    ? '🎉 Aprendido! Saiu do caderno.'
                    : game.result === 'certo'
                      ? `Isso! Mais ${RESOLVE_STREAK - (cur.m.streak + 1)} acerto seguido e sai do caderno.`
                      : `Era “${cur.m.expected}”.`}
                </Text>
                {cur.m.note && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{cur.m.note}</Text>}
                {cur.m.speak && (
                  <Pressable accessibilityRole="button" accessibilityLabel={`Ouvir: ${cur.m.speak}`} onPress={() => speak(cur.m.speak!, pack.speechLocale)} className="flex-row items-center gap-2 self-start">
                    <Volume2 size={18} color={dark ? '#93C5FD' : '#2563EB'} />
                    <Text className="font-bold text-slate-900 dark:text-white">{cur.m.speak}</Text>
                  </Pressable>
                )}
                <Button title={game.i + 1 >= game.qs.length ? 'Ver resultado' : 'Continuar'} variant="success" onPress={nextQ} />
              </Card>
            )}
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
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">📕 Caderno de erros</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood={open.length ? 'pensando' : 'feliz'} size={64} />
        <SpeechBubble className="mb-5">
          {open.length
            ? `Errar faz parte! ${open.length === 1 ? 'Tem 1 item' : `Tem ${open.length} itens`} no seu caderno de ${nomeIdioma(pack.name)}. Acerte ${RESOLVE_STREAK} vezes seguidas na revisão e ele sai daqui. As palavras erradas também voltam no sprint de amanhã, na frente da fila.`
            : 'Seu caderno está vazio! O que você errar nos treinos (lições, diário, shadowing, mapa…) vem para cá, com a sua resposta e a certa, e a palavra volta no sprint de amanhã.'}
        </SpeechBubble>
      </View>
      <Button title={`🎯 Revisar os erros (${Math.min(ROUND, shown.length)})`} variant="success" onPress={start} disabled={!shown.length} />

      {sources.length > 1 && (
        <View className="mt-4 flex-row flex-wrap gap-2">
          <FilterChip label={`Todos (${open.length})`} on={!filter} onPress={() => setFilter(null)} />
          {sources.map((s) => (
            <FilterChip key={s} label={`${SOURCES[s].emoji} ${SOURCES[s].name} (${open.filter((m) => m.source === s).length})`} on={filter === s} onPress={() => setFilter(filter === s ? null : s)} />
          ))}
        </View>
      )}

      <View className="mt-4 gap-3">
        {shown.map((m) => (
          <MistakeCard key={m.id} m={m} />
        ))}
      </View>

      {learned.length > 0 && (
        <View className="mt-6 gap-3">
          <Pressable accessibilityRole="button" accessibilityState={{ expanded: showLearned }} onPress={() => setShowLearned((v) => !v)}>
            <Text className="text-base font-extrabold text-conquista-dark dark:text-green-400">
              {showLearned ? '▾' : '▸'} ✓ Aprendidos ({learned.length})
            </Text>
          </Pressable>
          {showLearned && (
            <>
              {learned.map((m) => (
                <MistakeCard key={m.id} m={m} />
              ))}
              <Button
                title="Apagar os aprendidos"
                variant="ghost"
                onPress={async () => {
                  await clearLearned(db, pack.code);
                  load();
                }}
              />
            </>
          )}
        </View>
      )}
    </Screen>
  );
}

function FilterChip({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: on }} onPress={onPress} className={`rounded-full px-3 py-1.5 ${on ? 'bg-conecta' : 'bg-slate-200 dark:bg-slate-800'}`}>
      <Text className={`text-sm font-semibold ${on ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{label}</Text>
    </Pressable>
  );
}

function MistakeCard({ m }: { m: Mistake }) {
  const { pack } = useApp();
  const dark = useIsDark();
  return (
    <Card className={`gap-1.5 ${m.resolved_at ? 'opacity-70' : ''}`}>
      <View className="flex-row flex-wrap items-center gap-2">
        <Chip label={`${SOURCES[m.source].emoji} ${SOURCES[m.source].name}`} />
        <Chip label={`errou ${m.misses}×`} tone={m.misses >= 3 ? 'rose' : 'amber'} />
        {!m.resolved_at && m.streak > 0 && <Chip label={`${m.streak}/${RESOLVE_STREAK} acertos seguidos`} tone="green" />}
      </View>
      <Text className="text-base font-bold text-slate-900 dark:text-white">{m.prompt}</Text>
      {m.given && (
        <Text className="text-sm text-rose-600 line-through dark:text-rose-400" accessibilityLabel={`Você respondeu: ${m.given}`}>
          ✗ {m.given}
        </Text>
      )}
      <Text className="text-sm font-bold text-conquista-dark dark:text-green-400" accessibilityLabel={`Certo: ${m.expected}`}>
        ✓ {m.expected}
      </Text>
      {m.note && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{m.note}</Text>}
      {m.speak && (
        <Pressable accessibilityRole="button" accessibilityLabel={`Ouvir: ${m.speak}`} onPress={() => speak(m.speak!, pack.speechLocale)} className="flex-row items-center gap-2 self-start">
          <Volume2 size={16} color={dark ? '#93C5FD' : '#2563EB'} />
          <Text className="text-sm text-slate-700 dark:text-slate-300">{m.speak}</Text>
        </Pressable>
      )}
    </Card>
  );
}
