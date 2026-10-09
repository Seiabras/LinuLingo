import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
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
import { GUESS_QUESTIONS, GUESS_REGIONS, guessAccent, pointsTo, type GuessAnswers, type GuessRegion, type RegionId } from '@/data/quiz-sotaque';
import { QUIZ_SOTAQUE_IDIOMAS } from '@/data/quiz-sotaque-idiomas';
import * as haptics from '@/services/haptics';

const QUIZ_XP = 10;
const regionById = (id: RegionId | 'outro') => GUESS_REGIONS.find((r) => r.id === id);

type Phase = { kind: 'intro' } | { kind: 'pergunta'; i: number } | { kind: 'palpite' } | { kind: 'corrigir' } | { kind: 'fim'; actual: RegionId | 'outro' };

/**
 * «Qual é o seu sotaque?»: 12 perguntas de «como você diz…?» sobre o português de quem usa o app
 * (legal: maneiro, massa, da hora, tri…), o palpite do Linu e a pessoa dizendo se ele acertou —
 * uma pesquisa que fica no aparelho, com quantas vezes o Linu acertou.
 */
export default function AccentGuessScreen() {
  const { db, refresh, pack } = useApp();
  const dark = useIsDark();
  // quando o idioma estudado também tem quiz de sotaque (hoje: es/ro/ru), dá pra trocar de um pra
  // outro na tela inicial — se a pessoa estuda português (`pt`), não tem o que trocar.
  const quizIdioma = pack.code !== 'pt' ? QUIZ_SOTAQUE_IDIOMAS[pack.code] : undefined;
  const [phase, setPhase] = useState<Phase>({ kind: 'intro' });
  const [answers, setAnswers] = useState<GuessAnswers>({});
  const [survey, setSurvey] = useState<SurveyEntry[]>([]);
  const [shared, setShared] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadSurvey(db).then(setSurvey);
    }, [db]),
  );

  const ranking = guessAccent(answers);
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
    setAnswers((a) => ({ ...a, [GUESS_QUESTIONS[i].id]: option }));
    setPhase(i + 1 < GUESS_QUESTIONS.length ? { kind: 'pergunta', i: i + 1 } : { kind: 'palpite' });
  };
  const confirm = async (actual: RegionId | 'outro') => {
    if (!guess) return;
    if (actual === guess.id) haptics.success();
    const list = await saveSurveyEntry(db, { at: new Date().toISOString(), answers, guess: guess.id, actual });
    setSurvey(list);
    await awardXp(db, QUIZ_XP, 'pesquisa-sotaque');
    refresh();
    setPhase({ kind: 'fim', actual });
  };
  const share = async (actual: RegionId | 'outro') => {
    if (!guess) return;
    const hit = actual === guess.id;
    const mine = regionById(actual);
    const text = hit
      ? `O Linu adivinhou que o meu sotaque é ${guess.accent} ${guess.emoji} — e acertou! E o seu?`
      : `O Linu achou que o meu sotaque era ${guess.accent}, mas é ${mine ? mine.accent : 'de outro lugar'}. Será que ele acerta o seu?`;
    const how = await sendLink(`${siteUrl()}/qual-sotaque`, text);
    setShared(how === 'compartilhado' ? 'Compartilhado!' : how === 'copiado' ? 'Link copiado!' : 'Não deu para compartilhar.');
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🕵️ Qual é o seu sotaque em português?</Text>
      </View>

      {phase.kind === 'intro' && (
        <View className="mt-4 gap-3">
          {quizIdioma && (
            <View className="flex-row gap-2">
              <Button title="🇧🇷 Português" variant="primary" className="flex-1" onPress={() => {}} />
              <Button title={`🌍 ${quizIdioma.idioma}`} variant="ghost" className="flex-1" onPress={() => router.replace(`/qual-sotaque-idioma/${pack.code}`)} />
            </View>
          )}
          <View className="flex-row items-end gap-2">
            <Linu mood="pensando" size={64} />
            <SpeechBubble className="mb-5">
              Vou perguntar como você fala umas coisas — como é “legal” no seu sotaque, o nome da mandioca, o som do “r”… — e no fim tento adivinhar de onde é o seu sotaque. Você me diz se eu acertei!
            </SpeechBubble>
          </View>
          <Card className="gap-2">
            <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
              São {GUESS_QUESTIONS.length} perguntas sobre o português que você fala (do Brasil ou de Portugal). É uma pesquisa: as respostas ficam só no seu aparelho, e servem para ver quantas vezes eu acerto.
            </Text>
            {stats.total > 0 && (
              <Text className="text-sm font-semibold text-conecta dark:text-blue-400">
                Neste aparelho eu já tentei {stats.total} {stats.total === 1 ? 'vez' : 'vezes'} e acertei {stats.hits}.
              </Text>
            )}
          </Card>
          <Button title="Começar" onPress={start} />
          <Text className="text-xs leading-5 text-slate-600 dark:text-slate-400">
            As palavras e as pronúncias vêm dos estudos de variação do português, como o Atlas Linguístico do Brasil. Cada resposta é mais comum em algumas regiões, mas as pessoas se mudam e todo mundo mistura: nenhum jeito é mais certo que outro.
          </Text>
        </View>
      )}

      {phase.kind === 'pergunta' && (
        <View className="mt-4 gap-3">
          <View className="flex-row items-center gap-2">
            <View className="flex-1">
              <ProgressBar value={phase.i / GUESS_QUESTIONS.length} />
            </View>
            <Text className="text-sm font-bold text-slate-600 dark:text-slate-400">
              {phase.i + 1}/{GUESS_QUESTIONS.length}
            </Text>
          </View>
          <Card className="gap-3">
            <Text className="text-4xl">{GUESS_QUESTIONS[phase.i].emoji}</Text>
            <Text className="text-xl font-extrabold leading-7 text-slate-900 dark:text-white">{GUESS_QUESTIONS[phase.i].question}</Text>
            <View className="gap-2">
              {GUESS_QUESTIONS[phase.i].options.map((o, k) => (
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
              {GUESS_REGIONS.filter((r) => r.id !== guess.id).map((r) => (
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
            {GUESS_QUESTIONS.map((q) => {
              const o = q.options[answers[q.id]];
              if (!o) return null;
              const to = pointsTo(o);
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
