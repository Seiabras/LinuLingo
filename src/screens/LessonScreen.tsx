import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { X } from 'lucide-react-native';
import { Screen, Button, ProgressBar } from '@/components/ui';
import { PageFlipTransition } from '@/components/PageFlipTransition';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { ImmersionStep, type WordResult } from '@/components/lesson/ImmersionStep';
import { ClozeStep } from '@/components/lesson/ClozeStep';
import { VoiceStep } from '@/components/lesson/VoiceStep';
import { CommunityStep } from '@/components/lesson/CommunityStep';
import { RewardStep } from '@/components/lesson/RewardStep';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { findLesson, JUMP_PASS, jumpLessons, resolveLesson } from '@/services/curriculum';
import { awardXp, completeLesson, listVocab, reviewWord, skipLessons, submitToCommunity, vocabByWords, xpByDay } from '@/database/queries';
import { lessonXp, localDay, XP } from '@/services/progress';
import { stopSpeaking } from '@/services/speech';
import { useIsDark } from '@/services/theme';
import { goBack } from '@/services/nav';
import type { VocabWithSRS } from '@/types';

const STEPS = ['Aprenda primeiro', 'Imersão', 'Lacunas', 'Voz', 'Comunidade', 'Recompensa'] as const;

/**
 * Lição diária em 6 etapas: card cultural/gramatical → associação imersiva →
 * cloze → voz → envio para a comunidade → recompensa (XP + SRS).
 */
export default function LessonScreen() {
  const { id, pular } = useLocalSearchParams<{ id: string; pular?: string }>();
  // teste para pular: a prova de uma unidade ainda bloqueada
  const jump = pular === '1';
  const { db, pack, user, refresh } = useApp();
  const dark = useIsDark();
  const found = useMemo(() => findLesson(pack, id), [pack, id]);
  const lesson = useMemo(() => (found ? resolveLesson(found.unit, found.lesson) : null), [found]);
  // o card "Aprenda primeiro" é da unidade, não da lição: só a primeira lição da unidade o mostra,
  // senão toda lição começaria repetindo o mesmo texto (já dá pra rever o card a qualquer hora, pelo
  // item "Dica de cultura e regra gramatical" na trilha).
  const isFirstLessonOfUnit = found ? found.unit.lessons[0].id === lesson?.id : true;

  const [step, setStep] = useState(() => (isFirstLessonOfUnit ? 0 : 1));
  const [words, setWords] = useState<VocabWithSRS[]>([]);
  const [pool, setPool] = useState<VocabWithSRS[]>([]);
  const [wordResults, setWordResults] = useState<WordResult[]>([]);
  const [clozeCorrect, setClozeCorrect] = useState(0);
  const [voiceCorrect, setVoiceCorrect] = useState(false);
  const [reward, setReward] = useState<{ xp: number; streak: number; usedFreeze: boolean; words: VocabWithSRS[]; todayXp: number; goalXp: number } | null>(null);
  const [jumped, setJumped] = useState<boolean | null>(null);

  useEffect(() => {
    if (!lesson) return;
    (async () => {
      const ws = await vocabByWords(db, pack.code, lesson.words);
      // mantém a ordem da lição
      setWords(lesson.words.map((w) => ws.find((v) => v.word_target === w)).filter(Boolean) as VocabWithSRS[]);
      setPool((await listVocab(db, pack.code)).filter((v) => v.emoji));
    })();
    return () => stopSpeaking();
  }, [lesson, db, pack.code]);

  if (!found || !lesson) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center gap-4 py-20">
          <Linu mood="triste" size={100} />
          <Text className="text-lg text-slate-700 dark:text-slate-200">Lição não encontrada.</Text>
          <Button title="Voltar para a trilha" onPress={() => router.replace('/')} />
        </View>
      </Screen>
    );
  }

  const finish = async (communityText: string | null) => {
    if (communityText) await submitToCommunity(db, pack.code, lesson.id, lesson.communityPrompt, communityText);
    for (const r of wordResults) await reviewWord(db, r.vocabId, r.quality);

    const total = wordResults.length + lesson.cloze.length + 1;
    const correct = wordResults.filter((r) => r.correct).length + clozeCorrect + (voiceCorrect ? 1 : 0);
    const xp = lessonXp(correct, total, lesson.kind === 'prova') + (communityText ? XP.communitySubmission : 0);
    if (!jump) await completeLesson(db, lesson.id, correct / total);
    else {
      const passed = correct / total >= JUMP_PASS;
      if (passed) await skipLessons(db, jumpLessons(pack, found!.unit.id), correct / total);
      setJumped(passed);
    }
    const streak = await awardXp(db, xp, `licao:${lesson.id}`);
    const updated = await vocabByWords(db, pack.code, lesson.words);
    const days = await xpByDay(db, 1);
    const todayXp = days.find((d) => d.day === localDay())?.xp ?? xp;
    setReward({ xp, streak: streak?.streak ?? 0, usedFreeze: streak?.usedFreeze ?? false, words: updated, todayXp, goalXp: user?.daily_goal_xp ?? 30 });
    setStep(5);
    refresh();
  };

  const total = wordResults.length + lesson.cloze.length + 1;
  const correct = wordResults.filter((r) => r.correct).length + clozeCorrect + (voiceCorrect ? 1 : 0);
  // sem o card "Aprenda primeiro", a lição tem 5 etapas visíveis, não 6
  const totalSteps = isFirstLessonOfUnit ? STEPS.length : STEPS.length - 1;
  const displayStep = isFirstLessonOfUnit ? step + 1 : step;

  return (
    <Screen edges={['top', 'bottom']} background={<FieldNotebookBackground variant="gelo" />}>
      <View className="flex-row items-center gap-3 py-3">
        {step < 5 && (
          <Pressable accessibilityLabel="Sair da lição" onPress={goBack} hitSlop={10}>
            <X size={26} color={dark ? '#94A3B8' : '#64748B'} />
          </Pressable>
        )}
        <ProgressBar value={(step + (step === 5 ? 1 : 0)) / totalSteps} className="flex-1" />
      </View>
      <Text className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {found.unit.emoji} {jump ? `Teste para pular · ${found.unit.level}` : lesson.title} · Etapa {displayStep} de {totalSteps} · {STEPS[step]}
      </Text>

      <PageFlipTransition pageKey={step}>
        {step === 0 && (
          <View className="gap-4">
            <CulturalGrammarCard card={found.unit.card} locale={pack.speechLocale} />
            <Button title="Entendi, vamos praticar!" variant="success" onPress={() => setStep(1)} />
          </View>
        )}

        {step === 1 && words.length > 0 && pool.length > 0 && (
          <ImmersionStep
            words={words}
            pool={pool}
            locale={pack.speechLocale}
            onDone={(r) => {
              setWordResults(r);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <ClozeStep
            items={lesson.cloze}
            locale={pack.speechLocale}
            specialChars={pack.specialChars}
            onDone={(c) => {
              setClozeCorrect(c);
              setStep(3);
            }}
          />
        )}

        {step === 3 && (
          <VoiceStep
            challenge={lesson.voice}
            locale={pack.speechLocale}
            onDone={(ok) => {
              setVoiceCorrect(ok);
              setStep(4);
            }}
          />
        )}

        {step === 4 && <CommunityStep prompt={lesson.communityPrompt} specialChars={pack.specialChars} onDone={finish} />}

        {step === 5 && jumped !== null && (
          <View className={`mb-4 gap-1 rounded-2xl p-4 ${jumped ? 'bg-green-50 dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}`}>
            <Text className={`text-lg font-extrabold ${jumped ? 'text-conquista' : 'text-amber-800 dark:text-amber-200'}`}>
              {jumped ? `⏩ Pronto: tudo até o ${found.unit.level} está concluído!` : '🐧 Quase! Ainda não deu para pular.'}
            </Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              {jumped
                ? 'A trilha continua na unidade seguinte. As palavras das unidades puladas continuam no cofre para revisar.'
                : `Para pular é preciso acertar ${Math.round(JUMP_PASS * 100)}%. Continue pela trilha ou tente de novo depois.`}
            </Text>
          </View>
        )}

        {step === 5 && reward && (
          <RewardStep
            xp={reward.xp}
            correct={correct}
            total={total}
            streak={reward.streak}
            usedFreeze={reward.usedFreeze}
            words={reward.words}
            todayXp={reward.todayXp}
            goalXp={reward.goalXp}
            onContinue={goBack}
          />
        )}
      </PageFlipTransition>
    </Screen>
  );
}
