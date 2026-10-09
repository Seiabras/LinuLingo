import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeakButton } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { articlesOf, readingVocab, type ArticleSeed } from '@/data/artigos';
import { articleXp, markArticleRead } from '@/services/articles';
import { coverage } from '@/services/leitura';
import { logMistake } from '@/services/mistakes';
import { stopSpeaking } from '@/services/speech';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';

/** Um trecho do parágrafo: texto comum ou uma palavra do glossário (destacada, toca para traduzir). */
type Piece = { text: string; gloss?: [string, string]; tail?: string };

/** Acha as palavras do glossário no parágrafo (a marca de tônica do russo é opcional). */
function pieces(text: string, glossary: [string, string][]): Piece[] {
  const paragraph = text.normalize('NFC');
  if (!glossary.length) return [{ text: paragraph }];
  const esc = (w: string) =>
    [...w.normalize('NFC').replace(/\u0301/g, '')]
      .map((ch) => ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\u0301?')
      .join('');
  // uma entrada pode trazer várias formas da mesma palavra: «ру́сской / ру́сского»
  const sorted = glossary.flatMap(([w, t]) => w.split(' / ').map((alt) => [alt, t] as [string, string])).sort((a, b) => b[0].length - a[0].length);
  const re = new RegExp(`(?<![\\p{L}\\u0301])(${sorted.map(([w]) => esc(w)).join('|')})(?![\\p{L}\\u0301])`, 'giu');
  const out: Piece[] = [];
  let last = 0;
  for (const m of paragraph.matchAll(re)) {
    const found = m[0].replace(/\u0301/g, '').toLowerCase();
    const g = sorted.find(([w]) => w.normalize('NFC').replace(/\u0301/g, '').toLowerCase() === found);
    if (m.index! > last) out.push({ text: paragraph.slice(last, m.index) });
    out.push({ text: m[0], gloss: g });
    last = m.index! + m[0].length;
  }
  if (last < paragraph.length) out.push({ text: paragraph.slice(last) });
  // a pontuação logo depois de uma palavra destacada vai junto dela (senão o ponto quebra sozinho de linha)
  for (let i = 0; i < out.length - 1; i++) {
    const m = out[i].gloss && /^[.,;:!?”)…]+/.exec(out[i + 1].text);
    if (m) {
      out[i].tail = m[0];
      out[i + 1] = { text: out[i + 1].text.slice(m[0].length) };
    }
  }
  return out;
}

/**
 * Artigo cultural graduado: o texto no idioma, com as palavras novas para o nível destacadas (tocar
 * mostra a tradução), a voz de cada parágrafo, a tradução sob demanda e perguntas de compreensão.
 */
export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const article = articlesOf(pack.code).find((a) => a.id === id);
  const [word, setWord] = useState<{ p: number; g: [string, string] } | null>(null);
  const [shownTr, setShownTr] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ xp: number; hits: number } | null>(null);
  useEffect(() => () => stopSpeaking(), []);

  const cov = useMemo(() => (article ? coverage(article.paragraphs.join(' '), readingVocab(pack.code), article.level, pack.code, article.glossary, article.forms) : null), [article, pack]);
  if (!article || !cov) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Artigo não encontrado.</Text>
      </Screen>
    );
  }
  const done = article.questions.every((_, i) => answers[i] !== undefined);
  const hits = article.questions.filter((q, i) => answers[i] === q.answer).length;

  const answer = (i: number, k: number) => {
    if (answers[i] !== undefined) return;
    const q = article.questions[i];
    setAnswers((a) => ({ ...a, [i]: k }));
    if (k === q.answer) haptics.success();
    else {
      haptics.error();
      logMistake(db, {
        language: pack.code,
        source: 'leitura',
        key: `${article.id}:${i}`,
        prompt: `${article.title}: ${q.q}`,
        expected: q.options[q.answer],
        given: q.options[k],
        note: null,
        speak: null,
      });
    }
  };
  const finish = async () => {
    const { first } = await markArticleRead(db, article.id, hits, article.questions.length);
    const xp = articleXp(first, hits, article.questions.length);
    await awardXp(db, xp, 'artigo');
    refresh();
    setResult({ xp, hits });
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          {article.emoji} {article.title}
        </Text>
      </View>
      <View className="mt-2 flex-row flex-wrap items-center gap-2">
        <Chip label={article.level} tone={article.level.startsWith('A') ? 'green' : article.level.startsWith('B') ? 'blue' : 'orange'} />
        <Chip label={`${cov.total} palavras · ${article.glossary.length} ${article.glossary.length === 1 ? 'nova' : 'novas'}`} />
      </View>
      <Text className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-400">
        Escrito para o {article.level}: as palavras que ainda são novas nesse nível estão <Text className="font-bold text-amber-700 dark:text-amber-300">destacadas</Text> — toque para ver o que querem dizer.
      </Text>

      <View className="mt-4 gap-3">
        {article.paragraphs.map((p, i) => (
          <Card key={i} className="gap-2">
            <View className="flex-row items-start gap-2">
              <SpeakButton text={p} locale={pack.speechLocale} size={18} />
              <Text className="flex-1 text-lg leading-8 text-slate-900 dark:text-white">
                {pieces(p, article.glossary).map((pc, k) =>
                  pc.gloss ? (
                    <Text key={k}>
                      {/* “link” vira um elemento em linha no navegador; “button” vira inline-block e deixa o ponto quebrar de linha */}
                      <Text
                        accessibilityRole="link"
                        accessibilityLabel={`Palavra nova: ${pc.text}`}
                        onPress={() => setWord(word?.p === i && word.g === pc.gloss ? null : { p: i, g: pc.gloss! })}
                        className="rounded bg-amber-100 font-bold text-amber-900 underline dark:bg-amber-900/50 dark:text-amber-200"
                      >
                        {pc.text}
                      </Text>
                      {pc.tail}
                    </Text>
                  ) : (
                    <Text key={k}>{pc.text}</Text>
                  ),
                )}
              </Text>
            </View>
            {word?.p === i && (
              <Text className="rounded-xl bg-amber-50 px-3 py-2 text-base text-slate-800 dark:bg-amber-950/40 dark:text-slate-100">
                <Text className="font-extrabold">{word.g[0]}</Text> · {word.g[1]}
              </Text>
            )}
            {shownTr.has(i) ? (
              <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">🇧🇷 {article.translation[i]}</Text>
            ) : (
              <Pressable accessibilityRole="button" onPress={() => setShownTr((s) => new Set(s).add(i))} className="self-start">
                <Text className="text-sm font-semibold text-conecta dark:text-blue-400">Ver a tradução</Text>
              </Pressable>
            )}
          </Card>
        ))}
      </View>

      {article.glossary.length > 0 && (
        <Card className="mt-3 gap-1">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Palavras novas</Text>
          {article.glossary.map(([w, t]) => (
            <Text key={w} className="text-sm text-slate-700 dark:text-slate-300">
              <Text className="font-bold text-slate-900 dark:text-white">{w}</Text> · {t}
            </Text>
          ))}
        </Card>
      )}

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Entendeu?</Text>
      <View className="gap-3">
        {article.questions.map((q, i) => (
          <Question key={i} q={q} picked={answers[i]} onPick={(k) => answer(i, k)} />
        ))}
      </View>

      {result ? (
        <View className="mt-4 flex-row items-end gap-2">
          <Linu mood={result.hits === article.questions.length ? 'comemorando' : 'feliz'} size={60} />
          <Card className="mb-4 flex-1 gap-1">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">
              {result.hits} de {article.questions.length} certas · +{result.xp} XP
            </Text>
            <Button title="Voltar aos artigos" variant="ghost" onPress={goBack} />
          </Card>
        </View>
      ) : (
        <Button title="Terminar a leitura" variant="success" className="mt-4" disabled={!done} onPress={finish} />
      )}
    </Screen>
  );
}

function Question({ q, picked, onPick }: { q: ArticleSeed['questions'][number]; picked?: number; onPick: (k: number) => void }) {
  return (
    <Card className="gap-2">
      <Text className="text-base font-bold text-slate-900 dark:text-white">{q.q}</Text>
      {q.options.map((o, k) => {
        const answered = picked !== undefined;
        const right = answered && k === q.answer;
        const wrong = answered && k === picked && k !== q.answer;
        return (
          <Pressable
            key={o}
            accessibilityRole="button"
            accessibilityLabel={`Resposta: ${o}`}
            disabled={answered}
            onPress={() => onPick(k)}
            className={`rounded-xl border-2 px-3 py-2 ${right ? 'border-conquista bg-conquista-light dark:bg-green-950' : wrong ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className={`text-base ${right ? 'font-bold text-conquista-dark dark:text-green-300' : wrong ? 'text-rose-600 dark:text-rose-300' : 'text-slate-800 dark:text-slate-100'}`}>
              {o}
              {right ? ' ✓' : ''}
            </Text>
          </Pressable>
        );
      })}
    </Card>
  );
}
