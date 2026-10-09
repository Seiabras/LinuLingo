import { useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft, Mic } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeakButton, SpeechBubble, LetterPad } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { useApp } from '@/services/app-state';
import { targetInputStyle, targetTextStyle } from '@/services/direction';
import { awardXp, listJournal, saveJournal, submitToCommunity, type JournalEntry } from '@/database/queries';
import { buildLexicon, checkJournal, countSentences, type JournalIssue } from '@/services/journal';
import { canRecognize, listen } from '@/services/speech';
import { localDay } from '@/services/progress';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';
import { logMistake } from '@/services/mistakes';

const KIND_TONE = { acento: 'blue', gênero: 'rose', expressão: 'amber' } as const;
export const JOURNAL_XP = 10;

/**
 * Micro-diário: 3 frases por dia sobre a sua vida. O corretor offline devolve acentos,
 * acerta o gênero pelo vocabulário e pega erros típicos de lusófonos; a versão corrigida
 * é a «como um nativo diria». O texto pode ir para a fila da comunidade.
 */
export default function JournalScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ corrected: string; issues: JournalIssue[] } | null>(null);
  const [saved, setSaved] = useState<number | null>(null);
  const [history, setHistory] = useState<JournalEntry[]>([]);
  const [listening, setListening] = useState(false);
  const [sent, setSent] = useState(false);

  const today = localDay();
  const dayIndex = Math.floor(new Date(today + 'T12:00').getTime() / 86_400_000);
  const [prompt, promptPt] = pack.journalPrompts[dayIndex % pack.journalPrompts.length];

  const lexicon = useMemo(() => {
    const texts = [
      ...pack.vocab.flatMap((v) => [v.word_target, v.example_sentence]),
      ...pack.units.flatMap((u) => u.lessons.flatMap((l) => [...l.cloze.map((c) => c.sentence.replace('___', c.answer)), ...l.voice.expected])),
      ...pack.stories.flatMap((s) => Object.values(s.nodes).flatMap((n) => [n.text, ...(n.choices ?? []).map((c) => c.text)])),
      ...pack.scenarios.flatMap((s) => s.turns.flatMap((t) => [t.bot, ...t.suggestions])),
    ];
    const nouns = pack.vocab.filter((v) => v.gender).map((v) => ({ word: v.word_target, gender: v.gender! }));
    return buildLexicon(texts, nouns);
  }, [pack]);

  const load = useCallback(() => {
    listJournal(db, pack.code).then(setHistory);
  }, [db, pack.code]);
  useFocusEffect(load);

  const sentences = countSentences(text);
  const doneToday = history.some((h) => h.day === today);

  // cada ajuste do corretor vai para o caderno de erros (uma vez por sessão, mesmo corrigindo de novo)
  const logged = useRef(new Set<string>());
  const check = () => {
    const r = checkJournal(text.trim(), lexicon, pack.code);
    setResult(r);
    if (r.issues.length) haptics.tapLight();
    else haptics.success();
    for (const issue of r.issues) {
      const key = `${issue.kind}:${issue.original.toLowerCase()}`;
      if (logged.current.has(key)) continue;
      logged.current.add(key);
      logMistake(db, {
        language: pack.code,
        source: 'diario',
        key,
        prompt: `Como se escreve certo? “${issue.original}”`,
        expected: issue.suggestion,
        given: issue.original,
        note: issue.why,
        speak: issue.suggestion,
        // a palavra do vocabulário é a última da sugestão («la viaje» → «el viaje»: viaje)
        word: issue.suggestion.split(/\s+/).at(-1) ?? null,
      });
    }
  };

  const save = async () => {
    if (!result) return;
    const first = await saveJournal(db, pack.code, today, prompt, text.trim(), result.corrected);
    const xp = first ? JOURNAL_XP : 2;
    await awardXp(db, xp, 'diario');
    refresh();
    setSaved(xp);
    load();
  };

  const dictate = async () => {
    setListening(true);
    try {
      const heard = await listen(pack.speechLocale, 10000);
      if (heard) setText((t) => (t ? `${t.trim()} ${heard}` : heard));
    } catch {
      // sem permissão ou sem suporte
    } finally {
      setListening(false);
    }
  };

  const reset = () => {
    setText('');
    setResult(null);
    setSaved(null);
    setSent(false);
  };

  return (
    <Screen background={<FieldNotebookBackground variant="pergaminho" />}>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">📓 Diário</Text>
        {doneToday && <Chip label="✓ hoje" tone="green" />}
      </View>

      <FieldGuideCard label="FLOCO TROUXE" className="mb-6 mt-4">
        <View className="flex-row items-end gap-2">
          <LinuAmigo id="petrel" size={70} />
          <SpeechBubble>
            <Text className="text-sm text-slate-600 dark:text-slate-400">Voei bem longe e trouxe esse tema para o seu diário de hoje:</Text>
            <Text style={targetTextStyle(pack)} className="text-xl font-bold text-slate-900 dark:text-white">{prompt}</Text>
            {!!pack.reading?.(prompt) && <Text className="text-sm text-slate-600 dark:text-slate-400">{pack.reading(prompt)}</Text>}
            <Text className="text-sm text-slate-600 dark:text-slate-400">🇧🇷 {promptPt} Escreva 3 frases curtas.</Text>
          </SpeechBubble>
        </View>
      </FieldGuideCard>

      {saved === null ? (
        <>
          <TextInput
            value={text}
            onChangeText={(t) => {
              setText(t);
              setResult(null);
            }}
            multiline
            textAlignVertical="top"
            autoCapitalize="sentences"
            placeholder="Azi am… Apoi… Seara…"
            placeholderTextColor="#94A3B8"
            accessibilityLabel="Seu texto do diário"
            style={targetInputStyle(pack)}
            className="min-h-[130px] rounded-2xl border-2 border-slate-200 bg-white p-4 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <View className="mt-2 flex-row flex-wrap items-center gap-2">
            {!pack.keyboardRows && <LetterPad small onInsert={(ch) => setText((t) => t + ch)} />}
            {canRecognize() && (
              <Pressable accessibilityLabel="Ditar" onPress={dictate} disabled={listening} className={`h-10 flex-row items-center gap-1 rounded-xl px-3 ${listening ? 'bg-rose-500' : 'bg-conecta-light dark:bg-blue-950'}`}>
                <Mic size={16} color={listening ? '#fff' : '#2563EB'} />
                <Text className={`text-sm font-bold ${listening ? 'text-white' : 'text-conecta dark:text-blue-400'}`}>{listening ? 'ouvindo…' : 'ditar'}</Text>
              </Pressable>
            )}
            <Text className="ml-auto text-xs font-bold text-slate-600 dark:text-slate-400">{Math.min(sentences, 3)}/3 frases</Text>
          </View>
          {pack.keyboardRows && <LetterPad onInsert={(ch) => setText((t) => t + ch)} onBackspace={() => setText((t) => t.slice(0, -1))} />}

          {!result ? (
            <Button title="Corrigir" className="mt-4" disabled={sentences < 1} onPress={check} />
          ) : (
            <View className="mt-4 gap-3">
              {result.issues.length === 0 ? (
                <Card className="flex-row items-center gap-3">
                  <Linu mood="comemorando" size={50} animate={false} />
                  <Text className="flex-1 text-base font-semibold text-conquista-dark dark:text-green-300">
                    Não achei nenhum erro dos que eu sei checar. Muito bem!
                  </Text>
                </Card>
              ) : (
                <Card className="gap-3">
                  <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    {result.issues.length} {result.issues.length === 1 ? 'ajuste' : 'ajustes'}
                  </Text>
                  {result.issues.map((i, k) => (
                    <View key={k} className="gap-1">
                      <View className="flex-row flex-wrap items-center gap-2">
                        <Chip label={i.kind} tone={KIND_TONE[i.kind]} />
                        <Text style={targetTextStyle(pack)} className="text-base text-rose-600 line-through dark:text-rose-400">{i.original}</Text>
                        <Text className="text-base text-slate-500 dark:text-slate-400">→</Text>
                        <Text style={targetTextStyle(pack)} className="text-base font-bold text-conquista-dark dark:text-green-300">{i.suggestion}</Text>
                      </View>
                      <Text className="text-sm text-slate-600 dark:text-slate-400">{i.why}</Text>
                    </View>
                  ))}
                </Card>
              )}
              <Card className="gap-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-xs font-bold uppercase tracking-wide text-conquista">Como um nativo diria</Text>
                  <SpeakButton text={result.corrected} locale={pack.speechLocale} size={16} />
                </View>
                <Text style={targetTextStyle(pack)} className="text-lg leading-7 text-slate-900 dark:text-white">{result.corrected}</Text>
              </Card>
              <Text className="text-center text-xs text-slate-600 dark:text-slate-400">
                O corretor funciona sem internet e checa acentos{pack.genders?.length ? ', gênero' : ''} e erros comuns de quem fala português. Ele não pega tudo: para uma correção completa, mande para um nativo avaliar pela aba Comunidade.
              </Text>
              <Button title={`Salvar no diário (+${doneToday ? 2 : JOURNAL_XP} XP)`} variant="success" onPress={save} />
            </View>
          )}
        </>
      ) : (
        <Card className="items-center gap-3">
          <Linu mood="comemorando" size={90} />
          <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">Salvo! +{saved} XP</Text>
          <Text className="text-center text-slate-600 dark:text-slate-300">Volte amanhã para um tema novo.</Text>
          {!sent ? (
            <>
              <Button
                title="Pôr também nos meus envios"
                variant="ghost"
                className="w-full"
                onPress={async () => {
                  await submitToCommunity(db, pack.code, null, `Diário: ${prompt}`, result?.corrected ?? text);
                  setSent(true);
                }}
              />
              <Text className="text-center text-xs text-slate-600 dark:text-slate-400">Fica na aba Comunidade, de onde você manda por link para um colega ou um nativo avaliar.</Text>
            </>
          ) : (
            <Chip label="✓ nos seus envios da Comunidade" tone="green" />
          )}
          <Button title="Escrever outra entrada" className="w-full" onPress={reset} />
        </Card>
      )}

      {history.length > 0 && (
        <>
          <SectionTitle>Entradas anteriores</SectionTitle>
          <View className="gap-2">
            {history.slice(0, 20).map((h) => (
              <Card key={h.id} className="gap-1">
                <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {new Date(h.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })} · {h.prompt}
                </Text>
                <Text className="text-base text-slate-900 dark:text-white">{h.corrected_input ?? h.raw_user_input}</Text>
              </Card>
            ))}
          </View>
        </>
      )}
    </Screen>
  );
}
