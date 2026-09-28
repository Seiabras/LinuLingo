import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { logMistake } from '@/services/mistakes';
import { shuffle } from '@/services/answers';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import { areSiblings, KIN_LANGS, WORD_FAMILIES, wordIn, type KinGroup, type KinLang, type WordFamily } from '@/data/palavras-irmas';

const ROUND = 5;
const XP_PER_HIT = 2;

/**
 * Palavras irmãs: a mesma ideia em várias línguas, com a árvore da raiz comum (reconstruída no
 * indo-europeu) e os ramos (latim, germânico, eslavo). Mostra também as que vieram de outra raiz,
 * para o aluno aprender a desconfiar do «parece, logo é». Com um jogo: qual palavra do português é irmã?
 */
/** O jogo precisa de palavras irmãs do português; as línguas urálicas quase não têm. */
const MIN_FOR_QUIZ = 5;
const siblingCount = (lang: KinLang) => WORD_FAMILIES.filter((f) => areSiblings(f, lang, 'pt')).length;

export default function WordFamiliesScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const studied = (pack.code in KIN_LANGS ? pack.code : null) as KinLang | null;
  const [open, setOpen] = useState<string | null>(null);
  const [quiz, setQuiz] = useState(false);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🌳 Palavras irmãs</Text>
      </View>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} />
        <SpeechBubble className="mb-5">
          Palavras de línguas diferentes que vêm da mesma raiz. Reconhecer o parentesco ajuda a lembrar — e a desconfiar: «day» parece «dia» e não é parente; «день» não parece e é.
        </SpeechBubble>
      </View>

      {studied && studied !== 'pt' && siblingCount(studied) < MIN_FOR_QUIZ && (
        <Card className="mb-3 gap-2">
          <Text className="font-bold text-slate-800 dark:text-slate-100">🌍 Outra família</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-400">
            O {nomeIdioma(pack.name)} não é indo-europeu: é da família urálica, como o finlandês, o estoniano e o húngaro. Por isso quase nenhuma palavra dele é irmã do português — compare nas árvores abaixo, na linha «Fínico».
          </Text>
        </Card>
      )}
      {studied && studied !== 'pt' && siblingCount(studied) >= MIN_FOR_QUIZ && (
        <Card className="mb-3 gap-2">
          <Text className="font-bold text-slate-800 dark:text-slate-100">🎯 Qual é a irmã?</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-400">
            Uma palavra do {nomeIdioma(pack.name)} e três do português: ache a que vem da mesma raiz. +{XP_PER_HIT} XP por acerto.
          </Text>
          {quiz ? <SiblingQuiz lang={studied} locale={pack.speechLocale} onEnd={() => setQuiz(false)} onHit={async () => { await awardXp(db, XP_PER_HIT, 'irmas'); refresh(); }} onMiss={(f, picked) => logMistake(db, { language: pack.code, source: 'irmas', key: f.id, prompt: `Qual palavra do português é irmã de «${wordIn(f, studied)!.word}»?`, expected: wordIn(f, 'pt')!.word, given: picked, note: f.note ?? null, speak: wordIn(f, studied)!.word })} /> : <Button title="Jogar (5 perguntas)" onPress={() => setQuiz(true)} />}
        </Card>
      )}

      <View className="gap-2">
        {WORD_FAMILIES.map((f) => {
          const mine = studied ? wordIn(f, studied) : null;
          const expanded = open === f.id;
          return (
            <View key={f.id} className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ expanded }}
                accessibilityLabel={`Família de «${f.meaning}»`}
                onPress={() => setOpen(expanded ? null : f.id)}
                className="flex-row items-center gap-3 p-3 active:opacity-80"
              >
                <Text className="text-3xl">{f.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{f.meaning}</Text>
                  {mine && studied !== 'pt' && (
                    <Text className="text-sm text-slate-600 dark:text-slate-400">
                      {KIN_LANGS[studied!].flag} {mine.word} · {areSiblings(f, studied!, 'pt') ? 'irmã do português' : 'outra raiz'}
                    </Text>
                  )}
                </View>
                <Text className="text-xl text-slate-400">{expanded ? '▾' : '▸'}</Text>
              </Pressable>
              {expanded && <FamilyTree f={f} studied={studied} studiedLocale={pack.speechLocale} />}
            </View>
          );
        })}
      </View>
      <Text className="mt-4 text-center text-xs text-slate-400">
        As raízes com asterisco (*) são reconstruídas pelos linguistas: não há registro escrito delas. Fontes: dicionários etimológicos de cada língua.
      </Text>
    </Screen>
  );
}

/** Ordem das palavras num grupo: a língua estudada, o português e as outras. */
function orderedWords(g: KinGroup, studied: KinLang | null): [KinLang, string][] {
  const all = Object.entries(g.words) as [KinLang, string][];
  const rank = (l: KinLang) => (l === studied ? 0 : l === 'pt' ? 1 : 2);
  return all.sort((a, b) => rank(a[0]) - rank(b[0]));
}

function WordChip({ lang, word, studied, studiedLocale }: { lang: KinLang; word: string; studied: KinLang | null; studiedLocale: string }) {
  const mine = lang === studied;
  return (
    <View className={`flex-row items-center gap-1 rounded-full border-2 py-0.5 pl-2.5 pr-0.5 ${mine ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}>
      <Text className="text-sm">{KIN_LANGS[lang].flag}</Text>
      <Text className={`text-base ${mine ? 'font-extrabold text-conecta-dark dark:text-blue-200' : 'font-semibold text-slate-800 dark:text-slate-100'}`}>{word}</Text>
      <SpeakButton text={word} locale={mine ? studiedLocale : KIN_LANGS[lang].locale} size={14} />
    </View>
  );
}

function FamilyTree({ f, studied, studiedLocale }: { f: WordFamily; studied: KinLang | null; studiedLocale: string }) {
  const kin = f.groups.filter((g) => g.kin || f.root === null);
  const other = f.root === null ? [] : f.groups.filter((g) => !g.kin);
  return (
    <View className="gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
      {f.root && (
        <View className="items-center">
          <View className="rounded-xl bg-amber-100 px-3 py-1.5 dark:bg-amber-950">
            <Text className="text-center text-sm font-extrabold text-amber-900 dark:text-amber-200">🌳 {f.root}</Text>
          </View>
          <View className="h-3 w-0.5 bg-amber-300 dark:bg-amber-800" />
        </View>
      )}
      <View className={f.root ? 'gap-2 border-l-2 border-amber-300 pl-3 dark:border-amber-800' : 'gap-2'}>
        {kin.map((g) => (
          <View key={g.label} className="gap-1.5">
            <Text className="text-xs font-bold text-slate-500">{g.label}</Text>
            <View className="flex-row flex-wrap gap-1.5">
              {orderedWords(g, studied).map(([l, w]) => (
                <WordChip key={l} lang={l} word={w} studied={studied} studiedLocale={studiedLocale} />
              ))}
            </View>
          </View>
        ))}
      </View>
      {other.length > 0 && (
        <View className="mt-1 gap-2 rounded-xl border-2 border-dashed border-slate-300 p-2.5 dark:border-slate-600">
          <Text className="text-xs font-extrabold uppercase tracking-wide text-rose-600 dark:text-rose-400">Outra raiz (não são irmãs destas)</Text>
          {other.map((g) => (
            <View key={g.label} className="gap-1.5">
              <Text className="text-xs font-bold text-slate-500">{g.label}</Text>
              <View className="flex-row flex-wrap gap-1.5">
                {orderedWords(g, studied).map(([l, w]) => (
                  <WordChip key={l} lang={l} word={w} studied={studied} studiedLocale={studiedLocale} />
                ))}
              </View>
            </View>
          ))}
        </View>
      )}
      {f.note && <Text className="rounded-xl bg-slate-100 p-2.5 text-sm leading-5 text-slate-700 dark:bg-slate-800 dark:text-slate-300">💡 {f.note}</Text>}
    </View>
  );
}

interface Question {
  f: WordFamily;
  options: string[];
}

function SiblingQuiz({ lang, locale, onEnd, onHit, onMiss }: { lang: KinLang; locale: string; onEnd: () => void; onHit: () => Promise<void>; onMiss: (f: WordFamily, picked: string) => void }) {
  const questions = useMemo<Question[]>(() => {
    const pool = shuffle(WORD_FAMILIES.filter((f) => areSiblings(f, lang, 'pt')));
    return pool.slice(0, ROUND).map((f) => {
      const right = wordIn(f, 'pt')!.word;
      // as erradas: palavras do português de famílias em que a palavra estudada NÃO é irmã delas
      const wrong = shuffle(WORD_FAMILIES.filter((o) => o.id !== f.id).map((o) => wordIn(o, 'pt')!.word)).slice(0, 2);
      return { f, options: shuffle([right, ...wrong]) };
    });
  }, [lang]);
  const [k, setK] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [hits, setHits] = useState(0);
  if (k >= questions.length)
    return (
      <View className="gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
          {hits}/{questions.length} irmãs encontradas {hits === questions.length ? '🎉' : ''}
        </Text>
        <Button title="Fechar" variant="ghost" onPress={onEnd} />
      </View>
    );
  const q = questions[k];
  const word = wordIn(q.f, lang)!.word;
  const right = wordIn(q.f, 'pt')!.word;
  return (
    <View className="gap-2">
      <Chip label={`${k + 1}/${questions.length}`} />
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {KIN_LANGS[lang].flag} {word}
        </Text>
        <SpeakButton text={word} locale={locale} />
      </View>
      <Text className="text-sm text-slate-600 dark:text-slate-400">Qual palavra do português vem da mesma raiz?</Text>
      {q.options.map((o) => {
        const done = picked !== null;
        const tone = done && o === right ? 'border-conquista bg-green-50 dark:bg-green-950' : done && o === picked ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900';
        return (
          <Pressable
            key={o}
            accessibilityRole="button"
            accessibilityLabel={`Opção: ${o}`}
            disabled={done}
            onPress={async () => {
              setPicked(o);
              if (o === right) {
                haptics.success();
                setHits((h) => h + 1);
                await onHit();
              } else {
                haptics.error();
                onMiss(q.f, o);
              }
            }}
            className={`rounded-xl border-2 px-3 py-2.5 ${tone}`}
          >
            <Text className="text-base font-semibold text-slate-900 dark:text-white">🇵🇹 {o}</Text>
          </Pressable>
        );
      })}
      {picked !== null && (
        <>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
            {picked === right ? 'Isso!' : `Era «${right}».`} As duas vêm de {(q.f.root ?? wordIn(q.f, lang)!.group.label).replace(/^Indo-europeu /, 'indo-europeu ').replace(/^Latim /, 'latim ')}. {q.f.note ?? ''}
          </Text>
          <Button
            title="Próxima"
            onPress={() => {
              setK(k + 1);
              setPicked(null);
            }}
          />
        </>
      )}
    </View>
  );
}
