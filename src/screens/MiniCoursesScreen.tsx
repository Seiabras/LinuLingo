import { useCallback, useState } from 'react';
import { Linking, Platform, Pressable, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { BrailleWord } from '@/components/BrailleCell';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { KIND_LABEL, MINI_COURSES, miniCourse, type MiniCourse, type MiniLesson, type MiniQuestion } from '@/data/cursos';
import { lessonKey, loadMiniProgress, markMiniLesson, miniXp, type MiniProgress } from '@/services/mini-courses';
import { openVLibras } from '@/services/vlibras';
import { allLessons, FINAL_EXAM_ID, lessonPractice } from '@/services/mini-practice';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';

function useProgress(dep?: string): MiniProgress {
  const { db } = useApp();
  const [done, setDone] = useState<MiniProgress>({});
  // relê ao voltar para a tela e ao sair de uma lição (que acabou de ser feita)
  useFocusEffect(
    useCallback(() => {
      let alive = true;
      // «dep» (a lição aberta) só serve para reler ao sair dela
      void dep;
      loadMiniProgress(db).then((p) => alive && setDone(p));
      return () => {
        alive = false;
      };
    }, [db, dep]),
  );
  return done;
}

function Header({ title }: { title: string }) {
  const dark = useIsDark();
  return (
    <View className="flex-row items-center gap-3 pt-3">
      <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
        <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
      </Pressable>
      <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">{title}</Text>
    </View>
  );
}

const lessonsDone = (c: MiniCourse, done: MiniProgress) => allLessons(c).filter((l) => done[lessonKey(c.id, l.id)]).length;

/** /cursos: os mini-cursos, por tipo (línguas de sinais, táteis, artificiais). */
export function MiniCoursesScreen() {
  const done = useProgress();
  return (
    <Screen>
      <Header title="🎓 Cursos" />
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="feliz" size={60} animate={false} />
        <SpeechBubble className="mb-5">Línguas que não cabem na trilha: de sinais, táteis e inventadas. Cada curso tem lições com exercícios, XP e uma prova final.</SpeechBubble>
      </View>
      {(Object.keys(KIND_LABEL) as (keyof typeof KIND_LABEL)[]).map((k) => (
        <View key={k} className="mt-4 gap-3">
          <Text className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {KIND_LABEL[k].emoji} {KIND_LABEL[k].label}
          </Text>
          <Text className="text-sm text-slate-600 dark:text-slate-400">{KIND_LABEL[k].text}</Text>
          {MINI_COURSES.filter((c) => c.kind === k).map((c) => {
            const n = lessonsDone(c, done);
            return (
              <Pressable
                key={c.id}
                accessibilityRole="button"
                onPress={() => router.push({ pathname: '/curso/[id]', params: { id: c.id } })}
                className="flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 active:opacity-80 dark:border-slate-800 dark:bg-slate-900"
              >
                <Text className="text-3xl">{c.emoji}</Text>
                <View className="flex-1 gap-0.5">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">{c.name}</Text>
                  <Text className="text-sm text-slate-600 dark:text-slate-400" numberOfLines={2}>
                    {c.summary}
                  </Text>
                  <Text className={`text-xs font-bold ${n === allLessons(c).length ? 'text-conquista' : 'text-slate-500'}`}>
                    {n === allLessons(c).length ? '🏆 concluído' : `${n} de ${allLessons(c).length} lições`}
                  </Text>
                </View>
                <Text className="text-xl text-slate-400">›</Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </Screen>
  );
}

/** /curso/[id] (e ?licao=…): as lições do curso, ou uma lição aberta. */
export function MiniCourseScreen() {
  const { id, licao } = useLocalSearchParams<{ id: string; licao?: string }>();
  const course = miniCourse(id);
  const done = useProgress(licao);
  if (!course) {
    return (
      <Screen>
        <Header title="Curso" />
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Curso não encontrado.</Text>
      </Screen>
    );
  }
  const lessons = allLessons(course);
  const lesson = lessons.find((l) => l.id === licao);
  if (lesson) return <LessonView key={lesson.id} course={course} lesson={lesson} />;
  return (
    <Screen>
      <Header title={`${course.emoji} ${course.name}`} />
      <Text className="mt-2 text-base leading-6 text-slate-700 dark:text-slate-300">{course.summary}</Text>
      {course.vlibras && (
        <Card className="mt-3 gap-1">
          <Text className="font-bold text-slate-900 dark:text-white">🤟 Os sinais aparecem no VLibras</Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">
            «Ver em Libras» abre, numa janela à parte, o avatar do VLibras (a ferramenta do governo federal que traduz português para Libras) sinalizando a palavra. Precisa de internet.
          </Text>
        </Card>
      )}
      <View className="mt-4 gap-3">
        {lessons.map((l, i) => {
          const d = done[lessonKey(course.id, l.id)];
          return (
            <Pressable
              key={l.id}
              accessibilityRole="button"
              // push (e não setParams): o voltar do aparelho e do cabeçalho volta para esta lista
              onPress={() => router.push({ pathname: '/curso/[id]', params: { id: course.id, licao: l.id } })}
              className="flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 active:opacity-80 dark:border-slate-800 dark:bg-slate-900"
            >
              <Text className="text-2xl">{l.emoji}</Text>
              <View className="flex-1">
                <Text className="text-xs font-bold text-conecta">{l.id === FINAL_EXAM_ID ? 'Fecha o curso' : `Lição ${i + 1}`}</Text>
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{l.title}</Text>
              </View>
              {d ? <Chip label={`✓ ${d.hits}/${d.total}`} tone="green" /> : <Text className="text-xl text-slate-400">›</Text>}
            </Pressable>
          );
        })}
      </View>
      <Card className="mt-4 gap-1">
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Para ir além</Text>
        {course.sources.map((s) => (
          <Text key={s.url} accessibilityRole="link" onPress={() => Linking.openURL(s.url)} className="text-sm font-semibold text-conecta underline">
            {s.label}
          </Text>
        ))}
      </Card>
    </Screen>
  );
}

function LessonView({ course, lesson }: { course: MiniCourse; lesson: MiniLesson }) {
  const { db, refresh } = useApp();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{ xp: number; hits: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const lessons = allLessons(course);
  const index = lessons.indexOf(lesson);
  const next = lessons[index + 1];
  // as perguntas escritas para a lição e os exercícios gerados dos itens
  const quiz = lesson.id === FINAL_EXAM_ID ? lesson.quiz : [...lesson.quiz, ...lessonPractice(course, lesson)];
  const allAnswered = quiz.every((_, i) => answers[i] !== undefined);
  const hits = quiz.filter((q, i) => answers[i] === q.answer).length;

  const pick = (i: number, k: number) => {
    if (answers[i] !== undefined) return;
    setAnswers((a) => ({ ...a, [i]: k }));
    if (k === quiz[i].answer) haptics.success();
    else haptics.error();
  };
  const finish = async () => {
    // dois toques rápidos não podem contar a lição duas vezes
    if (saving) return;
    setSaving(true);
    const { first } = await markMiniLesson(db, course.id, lesson.id, hits, quiz.length);
    const xp = miniXp(first, hits, quiz.length) * (lesson.id === FINAL_EXAM_ID ? 2 : 1);
    await awardXp(db, xp, 'minicurso');
    refresh();
    setResult({ xp, hits });
  };

  return (
    <Screen>
      <Header title={`${lesson.emoji} ${lesson.title}`} />
      <Text className="mt-1 text-sm font-bold text-conecta">
        {course.emoji} {course.name} · {lesson.id === FINAL_EXAM_ID ? 'prova final' : `lição ${index + 1} de ${course.lessons.length}`}
      </Text>
      <Card className="mt-3 gap-2">
        {lesson.intro.map((p) => (
          <Text key={p} className="text-base leading-6 text-slate-800 dark:text-slate-200">
            {p}
          </Text>
        ))}
      </Card>

      <View className="mt-3 gap-2">
        {lesson.items.map((it) => (
          <Card key={it.term} className="flex-row items-center gap-3">
            {it.braille !== undefined && <BrailleWord dots={it.braille} size={it.braille.includes(' ') ? 40 : 52} label={`${it.term} em Braille: ${it.how ?? ''}`} />}
            <View className="flex-1 gap-0.5">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{it.term}</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-400">{it.meaning}</Text>
              {it.how && <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{it.how}</Text>}
            </View>
            {it.vlibras && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Ver em Libras: ${it.term}`}
                onPress={() => openVLibras(it.vlibras!)}
                className="rounded-xl bg-conecta px-3 py-2 active:opacity-90"
              >
                <Text className="text-sm font-bold text-white">🤟 Ver em Libras</Text>
              </Pressable>
            )}
          </Card>
        ))}
      </View>

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Pratique</Text>
      <View className="gap-3">
        {quiz.map((q, i) => (
          <Question key={q.q + i} q={q} picked={answers[i]} onPick={(k) => pick(i, k)} />
        ))}
      </View>

      {result ? (
        <View className="mt-4 flex-row items-end gap-2">
          <Linu mood={result.hits === quiz.length ? 'comemorando' : 'feliz'} size={60} />
          <Card className="mb-4 flex-1 gap-2">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">
              {result.hits} de {quiz.length} certas · +{result.xp} XP
            </Text>
            {next ? (
              <Button title={`Próxima: ${next.title}`} onPress={() => router.replace({ pathname: '/curso/[id]', params: { id: course.id, licao: next.id } })} />
            ) : (
              <Text className="text-sm text-conquista">🎉 Você terminou o curso!</Text>
            )}
            <Button title="Voltar às lições" variant="ghost" onPress={goBack} />
          </Card>
        </View>
      ) : (
        <Button title="Terminar a lição" variant="success" className="mt-4" disabled={!allAnswered || saving} onPress={finish} />
      )}
      {Platform.OS === 'web' && course.vlibras && <Text className="mt-3 text-xs text-slate-400">O VLibras abre numa janela à parte: o app roda isolado por segurança, e o avatar precisa carregar arquivos de vlibras.gov.br.</Text>}
    </Screen>
  );
}

function Question({ q, picked, onPick }: { q: MiniQuestion; picked?: number; onPick: (k: number) => void }) {
  const answered = picked !== undefined;
  return (
    <Card className="gap-2">
      <View className="flex-row items-center gap-3">
        {q.braille && <BrailleWord dots={q.braille} size={56} />}
        <Text className="flex-1 font-extrabold text-slate-900 dark:text-white">{q.q}</Text>
      </View>
      {q.options.map((o, k) => {
        const good = answered && k === q.answer;
        const bad = answered && k === picked && k !== q.answer;
        return (
          <Pressable
            key={o}
            accessibilityRole="button"
            accessibilityState={{ disabled: answered, selected: k === picked }}
            disabled={answered}
            onPress={() => onPick(k)}
            className={`rounded-xl border-2 px-3 py-2 ${good ? 'border-conquista bg-conquista-light dark:bg-green-950' : bad ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 dark:border-slate-700'}`}
          >
            <Text className="text-slate-800 dark:text-slate-100">{o}</Text>
          </Pressable>
        );
      })}
      {answered && q.why && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">💡 {q.why}</Text>}
    </Card>
  );
}
