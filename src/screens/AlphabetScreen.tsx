import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react-native';
import { Screen, Button, Card, Chip, Ipa, ProgressBar, SectionTitle, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { buildRound, lower, masteredCount, MASTERED, recordAnswer, type AlphabetProgress, type AlphabetQuestion } from '@/services/alphabet';
import { speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { AlphabetLetter } from '@/data/types';
import { logMistake } from '@/services/mistakes';
import { alfabetoAutomatico } from '@/services/alfabeto-auto';
import { fraseAberturaEscrita } from '@/services/sistema-escrita';

const GROUPS: { key: AlphabetLetter['group']; title: string; text: string }[] = [
  { key: 'igual', title: '✅ Iguais às nossas', text: 'Mesma forma e som parecido: você já sabe.' },
  { key: 'falsa', title: '⚠️ Falsas amigas', text: 'Parecem letras nossas, mas o som é outro. É aqui que todo mundo tropeça!' },
  { key: 'nova', title: '🆕 Novas', text: 'Letras que o português não tem: cada uma com um som próprio.' },
  {
    key: 'internacional',
    title: '🌐 Só em palavras estrangeiras',
    text: 'Existem no alfabeto oficial, mas só aparecem em nomes próprios e palavras internacionais — nunca numa palavra nativa.',
  },
];

/** Selo curto de cada categoria, pra marcar a letra sem esconder a sequência oficial. */
const GROUP_BADGE: Record<AlphabetLetter['group'], string> = { igual: '✅', falsa: '⚠️', nova: '🆕', internacional: '🌐' };
const GROUP_LABEL: Record<AlphabetLetter['group'], string> = {
  igual: 'igual à nossa',
  falsa: 'falsa amiga',
  nova: 'nova',
  internacional: 'só em palavras estrangeiras',
};

/** Treino do alfabeto de outro idioma (cirílico): conhecer as letras e jogar. */
export default function AlphabetScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const data = useMemo(() => alfabetoAutomatico(pack), [pack]);
  const key = `alfabeto_${pack.code}`;
  const [progress, setProgress] = useState<AlphabetProgress>({});
  const [picked, setPicked] = useState<AlphabetLetter | null>(null);
  const [game, setGame] = useState<{ qs: AlphabetQuestion[]; i: number; hits: number; answer: string | null } | null>(null);
  // a sequência oficial (ordem que um nativo aprende na escola) é a vista principal; a separação por
  // categoria (igual/falsa/nova/internacional) fica como vista complementar, fechada por padrão
  // (pedido do dono do app, 08/10/2026: a ordem deixa de ser "escondida" dentro dos grupos)
  const [porCategoria, setPorCategoria] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as AlphabetProgress) : {}));
    }, [db, key]),
  );

  if (!data) {
    return (
      <Screen>
        <Text className="py-20 text-center text-slate-600 dark:text-slate-400">Este idioma usa o nosso alfabeto.</Text>
      </Screen>
    );
  }

  const mastered = masteredCount(data, progress);
  const start = () => {
    setPicked(null);
    setGame({ qs: buildRound(data, progress), i: 0, hits: 0, answer: null });
  };

  const pickLetter = (l: AlphabetLetter) => {
    setPicked(l);
    // letras 'internacional' sem exemplo cadastrado (ex.: Q no romeno) não têm o que falar
    if (l.example) speak(l.example[0], pack.speechLocale);
  };

  const answer = async (opt: string) => {
    if (!game || game.answer) return;
    const q = game.qs[game.i];
    const ok = opt === q.answer;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordAnswer(progress, q, ok);
    if (!ok)
      logMistake(db, {
        language: pack.code,
        source: 'alfabeto',
        key: `${q.kind}:${q.kind === 'leitura' ? q.word[0] : q.letter.letter}`,
        prompt: q.kind === 'som' ? `Que som tem a letra ${q.letter.letter}?` : q.kind === 'letra' ? `Qual letra faz o som “${q.letter.short}” ${q.letter.ipa}?` : `Leia: o que é “${q.word[0]}”?`,
        expected: q.answer,
        given: opt,
        note: q.kind === 'leitura' ? q.word[2] : q.letter.sound,
        speak: (q.kind === 'leitura' ? q.word[0] : q.letter.example?.[0]) ?? null,
        options: q.options,
      });
    setProgress(next);
    await setMeta(db, key, JSON.stringify(next));
    setGame({ ...game, answer: opt, hits: game.hits + (ok ? 1 : 0) });
    // ouvir a palavra de exemplo ajuda a fixar o som — letras 'internacional' sem exemplo
    // cadastrado (ex.: Q no romeno) não têm o que falar
    const paraFalar = q.kind === 'leitura' ? q.word[0] : q.letter.example?.[0];
    if (paraFalar) speak(paraFalar, pack.speechLocale);
  };

  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'alfabeto');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  // ---------- jogo ----------
  if (game) {
    const finished = game.i >= game.qs.length;
    const q = game.qs[game.i];
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
            <Text className="text-center text-slate-600 dark:text-slate-400">
              {mastered}/{data.letters.length} letras dominadas
            </Text>
            <Button title="Treinar de novo" className="w-full" onPress={start} />
            <Button title="Ver as letras" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-6">
              {q.kind === 'som' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Que som tem esta letra?</Text>
                  <Text accessibilityLabel={`Letra ${q.letter.letter}`} style={{ fontSize: letterSize(88, q.letter.letter, 300), lineHeight: Math.round(letterSize(88, q.letter.letter, 300) * 1.18) }} className="font-extrabold text-slate-900 dark:text-white">
                    {q.letter.letter}
                  </Text>
                </>
              )}
              {q.kind === 'letra' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Qual letra faz este som?</Text>
                  <Text className="text-5xl font-extrabold text-conecta dark:text-blue-400">“{q.letter.short}”</Text>
                  <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{q.letter.ipa}</Text>
                </>
              )}
              {q.kind === 'leitura' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Leia: o que é?</Text>
                  <Text accessibilityLabel={`Palavra ${q.word[0]}`} className="text-5xl font-extrabold text-slate-900 dark:text-white">
                    {q.word[0]}
                  </Text>
                </>
              )}
            </Card>
            <View className="flex-row flex-wrap gap-2">
              {q.options.map((o) => {
                const right = game.answer && o === q.answer;
                const wrong = game.answer === o && o !== q.answer;
                return (
                  <Pressable
                    key={o}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${o}`}
                    onPress={() => answer(o)}
                    className={`min-w-[47%] flex-1 items-center rounded-2xl border-2 py-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                  >
                    <Text className={`font-bold text-slate-900 dark:text-white ${q.kind === 'leitura' ? 'text-4xl' : 'text-2xl'}`}>{o}</Text>
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer === q.answer ? 'text-conquista-dark dark:text-green-400' : 'text-rose-600'}`}>
                  {game.answer === q.answer ? 'Isso!' : `Era “${q.answer}”.`}
                </Text>
                {q.kind === 'leitura' ? (
                  <Text className="text-base text-slate-700 dark:text-slate-300">
                    {q.word[0]} = {q.word[2]}. Você leu russo! 🎉
                  </Text>
                ) : (
                  <LetterInfo letter={q.letter} locale={pack.speechLocale} />
                )}
                <Button title="Continuar" variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  // ---------- as letras ----------
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🔤 Alfabeto</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">
          {`${fraseAberturaEscrita(pack)} São ${data.letters.length} letras. Toque numa para ouvir e ver o som. Você já domina ${mastered}!`}
        </SpeechBubble>
      </View>
      <ProgressBar value={mastered / data.letters.length} />
      <Button title="🎯 Treinar (12 perguntas)" variant="success" className="mt-3" onPress={start} />

      {picked && (
        <Card className="mt-4 gap-2 border-2 border-conecta">
          <View className="flex-row items-center gap-3">
            <Text style={{ fontSize: letterSize(48, picked.letter, 200), lineHeight: Math.round(letterSize(48, picked.letter, 200) * 1.2) }} className="shrink font-extrabold text-slate-900 dark:text-white">
              {picked.letter}
            </Text>
            <Chip
              label={picked.group === 'falsa' ? '⚠️ falsa amiga' : picked.group === 'igual' ? 'igual à nossa' : picked.group === 'internacional' ? '🌐 só estrangeira' : 'nova'}
              tone={picked.group === 'falsa' ? 'rose' : picked.group === 'igual' ? 'green' : picked.group === 'internacional' ? 'orange' : 'blue'}
            />
          </View>
          <LetterInfo letter={picked} locale={pack.speechLocale} />
        </Card>
      )}

      {/* sequência oficial: a ordem que um nativo aprende na escola — vem primeiro, com a categoria
          marcada como selo em cada letra, não escondida dentro de um grupo (pedido do dono do app,
          08/10/2026) */}
      <View className="mt-5 gap-2">
        <SectionTitle>🔤 O alfabeto, em ordem</SectionTitle>
        <Text className="text-sm text-slate-600 dark:text-slate-400">
          Na sequência oficial, do jeito que um nativo aprende na escola. O selo em cada letra mostra a categoria: {GROUP_BADGE.igual} igual à nossa ·{' '}
          {GROUP_BADGE.falsa} falsa amiga · {GROUP_BADGE.nova} nova · {GROUP_BADGE.internacional} só estrangeira.
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {data.letters.map((l) => (
            <LetterTile key={l.letter} letter={l} progress={progress} picked={picked} onPick={() => pickLetter(l)} />
          ))}
        </View>
      </View>

      {/* escritas cujo cursivo (letra de mão) é um traçado diferente por letra, não uma forma
          reposicionada — hoje hebraico e russo (pedido do dono do app, 08/10/2026). Só texto: sem
          fonte cursiva licenciada no app pra desenhar o traçado de verdade (ver PENDENTES.md) */}
      {data.cursiveInfo && (
        <Card className="mt-5 gap-2">
          <SectionTitle>✍️ A letra cursiva (escrita à mão)</SectionTitle>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{data.cursiveInfo}</Text>
        </Card>
      )}

      <Button
        title={porCategoria ? 'Esconder a separação por categoria' : '📂 Ver separado por categoria (igual, falsa amiga, nova…)'}
        variant="ghost"
        className="mt-5"
        icon={porCategoria ? <ChevronDown size={18} color={dark ? '#CBD5E1' : '#334155'} /> : <ChevronRight size={18} color={dark ? '#CBD5E1' : '#334155'} />}
        onPress={() => setPorCategoria((v) => !v)}
      />

      {porCategoria &&
        GROUPS.map((g) => (
          <View key={g.key} className="mt-5 gap-2">
            <SectionTitle>{g.title}</SectionTitle>
            <Text className="text-sm text-slate-600 dark:text-slate-400">{g.text}</Text>
            <View className="flex-row flex-wrap gap-2">
              {data.letters
                .filter((l) => l.group === g.key)
                .map((l) => (
                  <LetterTile key={l.letter} letter={l} progress={progress} picked={picked} onPick={() => pickLetter(l)} />
                ))}
            </View>
          </View>
        ))}
    </Screen>
  );
}

/** Uma letra na grade: minúscula, som curto, progresso e o selo da categoria no canto. */
function LetterTile({
  letter: l,
  progress,
  picked,
  onPick,
}: {
  letter: AlphabetLetter;
  progress: AlphabetProgress;
  picked: AlphabetLetter | null;
  onPick: () => void;
}) {
  const n = progress[l.letter] ?? 0;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Letra ${l.letter}, som ${l.short}, ${GROUP_LABEL[l.group]}`}
      onPress={onPick}
      className={`min-w-[72px] items-center rounded-2xl border-2 px-2 py-2 ${picked?.letter === l.letter ? 'border-conecta' : 'border-slate-200 dark:border-slate-700'} ${n >= MASTERED ? 'bg-green-50 dark:bg-green-950' : 'bg-white dark:bg-slate-900'}`}
    >
      <Text className="text-xs leading-none">{GROUP_BADGE[l.group]}</Text>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{lower(l)}</Text>
      <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">{l.short}</Text>
      <Text className="text-[10px]">{n >= MASTERED ? '⭐' : '•'.repeat(n) || ' '}</Text>
    </Pressable>
  );
}

/**
 * O tamanho da letra grande: num alfabeto como o amárico, cada “letra” é uma família de sílabas
 * (ሀሁሂሃሄህሆ), e no tamanho de uma letra só ela passaria da tela. `width` é a largura disponível.
 */
function letterSize(base: number, text: string, width: number): number {
  const n = [...text].length;
  return n <= 2 ? base : Math.min(base, Math.floor(width / (n * 1.1)));
}

function LetterInfo({ letter, locale }: { letter: AlphabetLetter; locale: string }) {
  return (
    <View className="gap-1">
      <Text className="text-base text-slate-700 dark:text-slate-300">
        {letter.ipa} · {letter.sound}
      </Text>
      {letter.example ? (
        <>
          <View className="flex-row items-center gap-2">
            <Text className="text-xl font-bold text-slate-900 dark:text-white">{letter.example[0]}</Text>
            <SpeakButton text={letter.example[0]} locale={locale} size={16} />
            <Text className="text-slate-600 dark:text-slate-400">{letter.example[1]}</Text>
          </View>
          <Ipa text={letter.example[0]} />
        </>
      ) : (
        // letra 'internacional' sem palavra do vocabulário cadastrada ainda com ela: melhor
        // avisar do que inventar um exemplo ou um som que não existem
        <Text className="text-sm italic text-slate-600 dark:text-slate-400">Ainda não há palavra do vocabulário com esta letra.</Text>
      )}
      {letter.joining && <JoiningForms joining={letter.joining} />}
    </View>
  );
}

/** A escrita árabe sempre conecta as letras — cada uma muda de forma conforme a posição na palavra. */
function JoiningForms({ joining }: { joining: NonNullable<AlphabetLetter['joining']> }) {
  const forms: [string, string | undefined][] = [
    ['isolada', joining.isolated],
    ['inicial', joining.initial],
    ['medial', joining.medial],
    ['final', joining.final],
  ];
  return (
    <View className="mt-2 gap-1">
      <Text className="text-xs uppercase text-slate-600 dark:text-slate-400">Forma conectada, conforme a posição na palavra</Text>
      <View className="flex-row flex-wrap gap-3">
        {forms.map(([label, form]) =>
          form ? (
            <View key={label} className="items-center">
              <Text className="text-3xl text-slate-900 dark:text-white">{form}</Text>
              <Text className="text-xs text-slate-600 dark:text-slate-400">{label}</Text>
            </View>
          ) : null,
        )}
      </View>
    </View>
  );
}
