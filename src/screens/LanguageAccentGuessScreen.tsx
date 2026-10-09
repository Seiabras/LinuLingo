import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, ProgressBar, SectionTitle, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { siteUrl } from '@/services/site-url';
import { sendLink } from '@/services/share';
import { loadSurvey, saveSurveyEntry, surveyStats, type SurveyEntry } from '@/services/accent-survey';
import { guessAccent, pointsTo, type GuessAnswers, type GuessRegion } from '@/services/sotaque-quiz';
import { QUIZ_SOTAQUE_IDIOMAS } from '@/data/quiz-sotaque-idiomas';
import * as haptics from '@/services/haptics';

const QUIZ_XP = 10;

type Phase = { kind: 'intro' } | { kind: 'pergunta'; i: number } | { kind: 'palpite' } | { kind: 'corrigir' } | { kind: 'fim'; actual: string };

/**
 * «Qual é o seu sotaque [no idioma]?»: a mesma mecânica do quiz em português
 * (`AccentGuessScreen.tsx`), só que para quem estuda espanhol, romeno ou russo — perguntas «como se
 * diz…?» tiradas das palavras e pronúncias já documentadas em `sotaques.ts` de cada idioma. Pede o
 * idioma pela URL (`/qual-sotaque-idioma/[lang]`) e busca o conjunto de perguntas em
 * `quiz-sotaque-idiomas.ts`; se o idioma não tiver quiz pronto, não deveria nem aparecer um link pra
 * aqui (ver `HomeScreen.tsx`), mas a tela devolve um aviso em vez de quebrar.
 */
export default function LanguageAccentGuessScreen() {
  const { lang } = useLocalSearchParams<{ lang: string }>();
  const { db, refresh } = useApp();
  const dark = useIsDark();
  const data = lang ? QUIZ_SOTAQUE_IDIOMAS[lang] : undefined;
  const [phase, setPhase] = useState<Phase>({ kind: 'intro' });
  const [answers, setAnswers] = useState<GuessAnswers>({});
  const [survey, setSurvey] = useState<SurveyEntry[]>([]);
  const [shared, setShared] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (lang) loadSurvey(db, lang).then(setSurvey);
    }, [db, lang]),
  );

  if (!data || !lang) {
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
        </View>
        <Text className="mt-6 text-center text-base text-slate-600 dark:text-slate-400">Este idioma ainda não tem esse quiz.</Text>
      </Screen>
    );
  }
  const { regions, questions, idioma } = data;
  const regionById = (id: string) => regions.find((r) => r.id === id);

  const ranking = guessAccent(regions, questions, answers);
  const guess = ranking[0]?.region;
  // o que também pareceu: as seguintes com pelo menos metade das respostas apontando para elas
  const alsoLike = ranking.slice(1, 3).filter((r) => r.score >= 0.5);
  const stats = surveyStats(survey);

  const start = () => {
    setAnswers({});
    setShared(null);
    setPhase({ kind: 'pergunta', i: 0 });
  };
  const answer = (i: number, option: number) => {
    haptics.tapLight();
    setAnswers((a) => ({ ...a, [questions[i].id]: option }));
    setPhase(i + 1 < questions.length ? { kind: 'pergunta', i: i + 1 } : { kind: 'palpite' });
  };
  const confirm = async (actual: string) => {
    if (!guess) return;
    if (actual === guess.id) haptics.success();
    const list = await saveSurveyEntry(db, { at: new Date().toISOString(), answers, guess: guess.id, actual }, lang);
    setSurvey(list);
    await awardXp(db, QUIZ_XP, 'pesquisa-sotaque');
    refresh();
    setPhase({ kind: 'fim', actual });
  };
  const share = async (actual: string) => {
    if (!guess) return;
    const hit = actual === guess.id;
    const mine = regionById(actual);
    const text = hit
      ? `O Linu adivinhou que o meu sotaque em ${idioma} é ${guess.accent} ${guess.emoji} — e acertou! E o seu?`
      : `O Linu achou que o meu sotaque em ${idioma} era ${guess.accent}, mas é ${mine ? mine.accent : 'de outro lugar'}. Será que ele acerta o seu?`;
    const how = await sendLink(`${siteUrl()}/qual-sotaque-idioma/${lang}`, text);
    setShared(how === 'compartilhado' ? 'Compartilhado!' : how === 'copiado' ? 'Link copiado!' : 'Não deu para compartilhar.');
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🕵️ Qual é o seu sotaque em {idioma}?</Text>
      </View>

      {phase.kind === 'intro' && (
        <View className="mt-4 gap-3">
          <View className="flex-row gap-2">
            <Button title="🇧🇷 Português" variant="ghost" className="flex-1" onPress={() => router.replace('/qual-sotaque')} />
            <Button title={`🌍 ${idioma}`} variant="primary" className="flex-1" onPress={() => {}} />
          </View>
          <View className="flex-row items-end gap-2">
            <Linu mood="pensando" size={64} />
            <SpeechBubble className="mb-5">
              Vou perguntar como você diz umas coisas em {idioma} — e no fim tento adivinhar qual falar regional combina mais com você. Você me diz se eu acertei!
            </SpeechBubble>
          </View>
          <Card className="gap-2">
            <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
              São {questions.length} perguntas sobre jeitos diferentes de falar {idioma}. É uma pesquisa: as respostas ficam só no seu aparelho, e servem para ver quantas vezes eu acerto.
            </Text>
            {stats.total > 0 && (
              <Text className="text-sm font-semibold text-conecta dark:text-blue-400">
                Neste aparelho eu já tentei {stats.total} {stats.total === 1 ? 'vez' : 'vezes'} e acertei {stats.hits}.
              </Text>
            )}
          </Card>
          <Button title="Começar" onPress={start} />
          <Text className="text-xs leading-5 text-slate-600 dark:text-slate-400">
            As palavras e as pronúncias vêm dos estudos de variação do idioma, catalogados na aba Cultura. Cada resposta é mais comum em algumas regiões, mas as pessoas se mudam e todo mundo
            mistura: nenhum jeito é mais certo que outro.
          </Text>
        </View>
      )}

      {phase.kind === 'pergunta' && (
        <View className="mt-4 gap-3">
          <View className="flex-row items-center gap-2">
            <View className="flex-1">
              <ProgressBar value={phase.i / questions.length} />
            </View>
            <Text className="text-sm font-bold text-slate-600 dark:text-slate-400">
              {phase.i + 1}/{questions.length}
            </Text>
          </View>
          <Card className="gap-3">
            <Text className="text-4xl">{questions[phase.i].emoji}</Text>
            <Text className="text-xl font-extrabold leading-7 text-slate-900 dark:text-white">{questions[phase.i].question}</Text>
            <View className="gap-2">
              {questions[phase.i].options.map((o, k) => (
                <Pressable
                  key={o.label}
                  accessibilityRole="button"
                  accessibilityLabel={`Resposta: ${o.label}`}
                  onPress={() => answer(phase.i, k)}
                  className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 active:border-conecta active:bg-conecta-light dark:border-slate-700 dark:bg-slate-900 dark:active:bg-blue-950"
                >
                  <Text className="text-base font-bold text-slate-800 dark:text-slate-100">{o.label}</Text>
                </Pressable>
              ))}
            </View>
          </Card>
          {phase.i > 0 && (
            <Pressable accessibilityRole="button" onPress={() => setPhase({ kind: 'pergunta', i: phase.i - 1 })} className="self-start">
              <Text className="text-sm font-semibold text-conecta dark:text-blue-400">‹ Voltar à pergunta anterior</Text>
            </Pressable>
          )}
        </View>
      )}

      {(phase.kind === 'palpite' || phase.kind === 'corrigir') && guess && (
        <View className="mt-4 gap-3">
          <View className="flex-row items-end gap-2">
            <Linu mood="falando" size={64} />
            <SpeechBubble className="mb-5">{phase.kind === 'palpite' ? 'Hmm… já sei! Acho que o seu sotaque é…' : 'Poxa, errei! De onde é o seu sotaque, então?'}</SpeechBubble>
          </View>
          <Card className="items-center gap-1">
            <Text className="text-6xl">{guess.emoji}</Text>
            <Text className="text-3xl font-extrabold text-slate-900 dark:text-white">{guess.accent}</Text>
            <Text className="text-center text-sm text-slate-600 dark:text-slate-400">{guess.where}</Text>
            {alsoLike.length > 0 && (
              <Text className="mt-1 text-center text-sm text-slate-600 dark:text-slate-400">
                também parece: {alsoLike.map((r) => `${r.region.emoji} ${r.region.accent}`).join(', ')}
              </Text>
            )}
          </Card>
          {phase.kind === 'palpite' ? (
            <>
              <Text className="text-center text-base font-bold text-slate-800 dark:text-slate-200">Acertei?</Text>
              <View className="flex-row gap-2">
                <Button title="🎯 Acertou!" variant="success" className="flex-1" onPress={() => confirm(guess.id)} />
                <Button title="❌ Errou" variant="ghost" className="flex-1" onPress={() => setPhase({ kind: 'corrigir' })} />
              </View>
            </>
          ) : (
            <View className="flex-row flex-wrap gap-2">
              {regions.filter((r) => r.id !== guess.id).map((r) => (
                <RegionChip key={r.id} r={r} onPress={() => confirm(r.id)} />
              ))}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Meu sotaque: outro lugar"
                onPress={() => confirm('outro')}
                className="rounded-full border-2 border-dashed border-slate-300 px-3 py-1.5 dark:border-slate-600"
              >
                <Text className="font-bold text-slate-600 dark:text-slate-300">🌎 outro lugar</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}

      {phase.kind === 'fim' && guess && (
        <View className="mt-4 gap-3">
          <View className="flex-row items-end gap-2">
            <Linu mood={phase.actual === guess.id ? 'comemorando' : 'feliz'} size={64} />
            <SpeechBubble className="mb-5">
              {phase.actual === guess.id
                ? `Oba, acertei: sotaque ${guess.accent}! Obrigado por participar da pesquisa. (+${QUIZ_XP} XP)`
                : `Valeu por me corrigir: ${regionById(phase.actual) ? `sotaque ${regionById(phase.actual)!.accent}` : 'de outro lugar'}! É assim que eu aprendo. (+${QUIZ_XP} XP)`}
            </SpeechBubble>
          </View>
          <Card className="gap-1">
            <Text className="text-base font-bold text-slate-900 dark:text-white">
              Neste aparelho eu acertei {stats.hits} de {stats.total} {stats.total === 1 ? 'palpite' : 'palpites'}.
            </Text>
            <ProgressBar value={stats.total ? stats.hits / stats.total : 0} />
          </Card>
          <SectionTitle>Suas respostas e para onde elas apontam</SectionTitle>
          <View className="gap-2">
            {questions.map((q) => {
              const o = q.options[answers[q.id]];
              if (!o) return null;
              const to = pointsTo(regions, o);
              return (
                <View key={q.id} className="flex-row gap-3 rounded-2xl bg-white p-3 dark:bg-slate-900">
                  <Text className="text-2xl">{q.emoji}</Text>
                  <View className="flex-1">
                    <Text className="text-base font-extrabold text-slate-900 dark:text-white">{o.label}</Text>
                    <Text className="text-sm text-slate-600 dark:text-slate-400">{to.length ? `mais comum em: ${to.map((r) => `${r.emoji} ${r.where}`).join('; ')}` : 'comum em quase todo lugar'}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <Button title="📤 Desafiar alguém" variant="primary" onPress={() => share(phase.actual)} />
          {shared && <Text className="text-center text-sm font-semibold text-conquista">{shared}</Text>}
          <Button title="↺ Responder de novo" variant="ghost" onPress={start} />
        </View>
      )}
    </Screen>
  );
}

function RegionChip({ r, onPress }: { r: GuessRegion; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Meu sotaque: ${r.accent}`}
      onPress={onPress}
      className="rounded-full border-2 border-slate-200 bg-white px-3 py-1.5 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
    >
      <Text className="font-bold text-slate-700 dark:text-slate-200">
        {r.emoji} {r.accent}
      </Text>
    </Pressable>
  );
}
