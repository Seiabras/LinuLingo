import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { X } from 'lucide-react-native';
import { Screen, Button, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { PageFlipTransition } from '@/components/PageFlipTransition';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { ClozeStep } from '@/components/lesson/ClozeStep';
import { VoiceStep } from '@/components/lesson/VoiceStep';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { useApp } from '@/services/app-state';
import { awardXp, completeLesson } from '@/database/queries';
import { lessonXp } from '@/services/progress';
import { canSpeak, speak, stopSpeaking } from '@/services/speech';
import { logMistake } from '@/services/mistakes';
import * as haptics from '@/services/haptics';
import { normalize } from '@/services/answers';
import { useIsDark } from '@/services/theme';
import { goBack } from '@/services/nav';
import { targetTextStyle } from '@/services/direction';
import { rotaDaAventura } from '@/services/aventura';
import { buildTravessia, passou, travessiaTotal, TRAVESSIA_PASS, type ChoiceItem } from '@/services/travessia';
import { AMIGOS_LINU } from '@/data/amigos-linu';

type Fase = 'inicio' | 'escuta' | 'decisao' | 'lacunas' | 'voz' | 'fim';
const FASES: Fase[] = ['inicio', 'escuta', 'decisao', 'lacunas', 'voz', 'fim'];

const TITULO: Record<Fase, string> = {
  inicio: 'Antes de partir',
  escuta: '📻 Mensagem no rádio',
  decisao: '🧭 Decisão no convés',
  lacunas: '📓 Diário de bordo',
  voz: '🎙️ Chamado pelo rádio',
  fim: 'Chegada',
};

/**
 * A travessia: o desafio no fim de cada unidade, no lugar da prova (ver `src/services/travessia.ts`).
 * Escuta, decisão, lacunas e voz, com 80% para chegar à próxima parada da aventura. Errou demais? O
 * mar fica bravo e o Linu volta para a parada, para tentar de novo quando quiser.
 */
export default function CrossingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const unit = pack.units.find((u) => u.id === id) ?? null;
  const prova = unit?.lessons.find((l) => l.kind === 'prova') ?? unit?.lessons.at(-1) ?? null;
  const rota = useMemo(() => rotaDaAventura(pack), [pack]);
  const at = rota.findIndex((p) => p.level === unit?.level);
  const from = rota[at];
  const to = rota[at + 1] ?? null;
  const guia = to?.amigo ?? from?.amigo ?? 'jubarte';
  const guiaNome = AMIGOS_LINU.find((a) => a.id === guia)?.name ?? 'Jubi';

  const [round, setRound] = useState(0);
  const t = useMemo(() => (unit ? buildTravessia(unit) : null), [unit, round]); // eslint-disable-line react-hooks/exhaustive-deps
  const [fase, setFase] = useState<Fase>('inicio');
  const [score, setScore] = useState({ escuta: 0, decisao: 0, lacunas: 0, voz: 0 });
  const [xp, setXp] = useState(0);

  useEffect(() => () => stopSpeaking(), []);

  if (!unit || !t || !prova || !from) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center gap-4 py-20">
          <Linu mood="triste" size={100} />
          <Text className="text-lg text-slate-700 dark:text-slate-200">Travessia não encontrada.</Text>
          <Button title="Voltar para o mapa" onPress={() => router.replace('/')} />
        </View>
      </Screen>
    );
  }

  const total = travessiaTotal(t);
  const correct = score.escuta + score.decisao + score.lacunas + score.voz;
  const ok = passou(correct, total);
  const destino = to ? to.name : 'o fim da expedição';

  // pula as fases sem pergunta (unidades pequenas, de idiomas em construção)
  const next = (after: Fase) => {
    let i = FASES.indexOf(after) + 1;
    while (FASES[i] === 'escuta' && !t.escuta.length) i++;
    while (FASES[i] === 'decisao' && !t.decisao.length) i++;
    while (FASES[i] === 'lacunas' && !t.lacunas.length) i++;
    while (FASES[i] === 'voz' && !t.voz) i++;
    return FASES[i];
  };
  const go = (after: Fase) => {
    const n = next(after);
    if (n === 'fim') return finish();
    setFase(n);
  };

  const finish = async (final = score) => {
    const c = final.escuta + final.decisao + final.lacunas + final.voz;
    if (passou(c, total)) {
      haptics.success();
      await completeLesson(db, prova.id, c / total);
      const gained = lessonXp(c, total, true);
      await awardXp(db, gained, `travessia:${unit.id}`);
      setXp(gained);
      refresh();
    } else haptics.error();
    setFase('fim');
  };

  const again = () => {
    setScore({ escuta: 0, decisao: 0, lacunas: 0, voz: 0 });
    setRound((r) => r + 1);
    setFase('inicio');
  };

  const stepIndex = FASES.indexOf(fase);

  return (
    <Screen edges={['top', 'bottom']} background={<FieldNotebookBackground variant="gelo" />}>
      <View className="flex-row items-center gap-3 py-3">
        {fase !== 'fim' && (
          <Pressable accessibilityLabel="Sair da travessia" onPress={goBack} hitSlop={10}>
            <X size={26} color={dark ? '#94A3B8' : '#64748B'} />
          </Pressable>
        )}
        <ProgressBar value={stepIndex / (FASES.length - 1)} color="bg-aurora" className="flex-1" />
      </View>
      <Text className="mb-4 text-xs font-bold uppercase tracking-widest text-aurora-dark dark:text-aurora">
        🌊 Travessia {unit.level} · {from.name} → {destino} · {fase === 'fim' && !ok ? 'De volta à parada' : TITULO[fase]}
      </Text>

      <PageFlipTransition pageKey={`${fase}-${round}`}>
        {fase === 'inicio' && (
          <View className="gap-4">
            <View className="flex-row items-end gap-3">
              <LinuAmigo id={guia} size={84} />
              <SpeechBubble className="mb-6 flex-1">
                {to
                  ? `Bora atravessar até ${to.name}? No caminho vai ter rádio, decisões e conversa. Pra chegar do outro lado, ${Math.round(TRAVESSIA_PASS * 100)}% de acertos!`
                  : `Última travessia! Mostre tudo o que aprendeu: ${Math.round(TRAVESSIA_PASS * 100)}% de acertos e a expedição termina em festa.`}
              </SpeechBubble>
            </View>
            <FieldGuideCard label="O que vem pela frente">
              <View className="gap-1.5">
                {t.escuta.length > 0 && <Text className="text-slate-700 dark:text-slate-200">📻 {t.escuta.length} mensagens no rádio: só ouvindo</Text>}
                {t.decisao.length > 0 && <Text className="text-slate-700 dark:text-slate-200">🧭 {t.decisao.length} decisões: o que o Linu responde?</Text>}
                {t.lacunas.length > 0 && <Text className="text-slate-700 dark:text-slate-200">📓 {t.lacunas.length} frases do diário de bordo para completar</Text>}
                {t.voz && <Text className="text-slate-700 dark:text-slate-200">🎙️ 1 conversa pelo rádio, falando</Text>}
                <Text className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {total} perguntas · {guiaNome} vai junto · os erros vão para o caderno
                </Text>
              </View>
            </FieldGuideCard>
            <Button title="Zarpar! ⛵" variant="success" onPress={() => go('inicio')} />
          </View>
        )}

        {(fase === 'escuta' || fase === 'decisao') && (
          <ChoiceRun
            key={`${fase}-${round}`}
            items={fase === 'escuta' ? t.escuta : t.decisao}
            onDone={(c) => {
              setScore((s) => ({ ...s, [fase]: c }));
              go(fase);
            }}
          />
        )}

        {fase === 'lacunas' && (
          <ClozeStep
            items={t.lacunas}
            locale={pack.speechLocale}
            specialChars={pack.specialChars}
            onDone={(c) => {
              setScore((s) => ({ ...s, lacunas: c }));
              go('lacunas');
            }}
          />
        )}

        {fase === 'voz' && t.voz && (
          <VoiceStep
            challenge={t.voz}
            locale={pack.speechLocale}
            onDone={(v) => {
              const final = { ...score, voz: v ? 1 : 0 };
              setScore(final);
              finish(final);
            }}
          />
        )}

        {fase === 'fim' && (
          <View className="items-center gap-4">
            {ok ? (
              <>
                <View className="flex-row items-end gap-2">
                  <Linu mood="comemorando" size={110} />
                  {to?.amigo && <LinuAmigo id={to.amigo} size={80} />}
                </View>
                <Text className="text-center text-2xl font-extrabold text-conquista">{to ? `Chegamos: ${to.name}!` : 'Expedição completa! 🏁'}</Text>
                <Text className="text-center text-slate-700 dark:text-slate-200">
                  {correct} de {total} certas · +{xp} XP
                </Text>
                {to && (
                  <FieldGuideCard label={`${to.level} · ${to.region}`} className="w-full">
                    <Text className="text-slate-800 dark:text-slate-100">“{to.fala}”</Text>
                    {to.fact && <Text className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{to.fact}</Text>}
                  </FieldGuideCard>
                )}
                <Button title="Voltar para o mapa" variant="success" onPress={goBack} className="w-full" />
              </>
            ) : (
              <>
                <Linu mood="triste" size={110} />
                <Text className="text-center text-2xl font-extrabold text-amber-700 dark:text-amber-300">O mar ficou bravo!</Text>
                <Text className="text-center text-slate-700 dark:text-slate-200">
                  {correct} de {total} certas. Para atravessar é preciso acertar {Math.round(TRAVESSIA_PASS * 100)}%. O Linu voltou em segurança para {from.name}; revise as lições e tente de novo.
                </Text>
                <Button title="Tentar de novo" onPress={again} className="w-full" />
                <Button title="Voltar para o mapa" variant="ghost" onPress={goBack} className="w-full" />
              </>
            )}
          </View>
        )}
      </PageFlipTransition>
    </Screen>
  );
}

/** Escuta ou decisão: uma pergunta de cada vez, três opções. */
function ChoiceRun({ items, onDone }: { items: ChoiceItem[]; onDone: (correct: number) => void }) {
  const { db, pack } = useApp();
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [showText, setShowText] = useState(false);
  const [showTr, setShowTr] = useState(false);
  const [noVoice, setNoVoice] = useState(false);
  const item = items[i];

  useEffect(() => {
    canSpeak(pack.speechLocale).then((v) => setNoVoice(!v));
  }, [pack.speechLocale]);
  useEffect(() => {
    if (item) speak(item.text, pack.speechLocale);
  }, [item, pack.speechLocale]);

  if (!item) return null;
  const escuta = item.kind === 'escuta';
  const answered = answer !== null;
  const right = answered && normalize(answer) === normalize(item.answer);
  const textVisible = !escuta || showText || noVoice || answered;

  const choose = (o: string) => {
    if (answered) return;
    setAnswer(o);
    if (normalize(o) === normalize(item.answer)) {
      haptics.success();
      setCorrect((c) => c + 1);
    } else {
      haptics.error();
      logMistake(db, {
        language: pack.code,
        source: escuta ? 'escuta' : 'licao',
        key: `travessia:${item.text}`,
        prompt: escuta ? 'O que diz a mensagem?' : `Resposta para: ${item.text}`,
        expected: item.answer,
        given: o,
        note: item.translation,
        speak: item.text,
        options: item.options,
        byEar: escuta,
      });
    }
  };

  const nextItem = () => {
    setAnswer(null);
    setShowText(false);
    setShowTr(false);
    if (i + 1 >= items.length) onDone(correct);
    else setI(i + 1);
  };

  return (
    <View className="gap-4">
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {i + 1} de {items.length}
      </Text>
      <View className="gap-3 rounded-3xl border-2 border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <Text className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {escuta ? 'Chegou uma mensagem pelo rádio do navio. O que ela diz?' : 'Alguém fala com o Linu. O que ele responde?'}
        </Text>
        <View className="flex-row items-center gap-3">
          <SpeakButton text={item.text} locale={pack.speechLocale} size={26} />
          {textVisible ? (
            <Text style={targetTextStyle(pack)} className="flex-1 text-xl font-bold text-slate-900 dark:text-white">
              {item.text}
            </Text>
          ) : (
            <Pressable onPress={() => setShowText(true)} className="flex-1 p-1">
              <Text className="font-semibold text-conecta">👀 Não entendi: mostrar a frase</Text>
            </Pressable>
          )}
        </View>
        {!escuta && (showTr || answered) ? (
          <Text className="text-sm text-slate-600 dark:text-slate-300">🇧🇷 {item.translation}</Text>
        ) : (
          !escuta && (
            <Pressable onPress={() => setShowTr(true)} className="self-start">
              <Text className="text-sm font-semibold text-conecta">Ver tradução</Text>
            </Pressable>
          )
        )}
      </View>

      <View className="gap-2">
        {item.options.map((o) => {
          const isRight = answered && o === item.answer;
          const isWrong = answered && o === answer && !isRight;
          return (
            <Pressable
              key={o}
              accessibilityRole="button"
              disabled={answered}
              onPress={() => choose(o)}
              className={`min-h-[52px] justify-center rounded-2xl border-2 px-4 py-3 active:opacity-80 ${
                isRight ? 'border-conquista bg-conquista-light dark:bg-green-950' : isWrong ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
              }`}
            >
              <Text style={escuta ? undefined : targetTextStyle(pack)} className="text-base font-bold text-slate-800 dark:text-slate-100">
                {o}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {answered && (
        <View className={`gap-2 rounded-2xl p-4 ${right ? 'bg-conquista-light dark:bg-green-950' : 'bg-rose-50 dark:bg-rose-950'}`}>
          <Text className={`text-lg font-extrabold ${right ? 'text-conquista-dark dark:text-green-300' : 'text-rose-600 dark:text-rose-300'}`}>
            {right ? 'Isso! 🎉' : `Era: ${item.answer}`}
          </Text>
          <Button title="Continuar" variant={right ? 'success' : 'danger'} onPress={nextItem} />
        </View>
      )}
    </View>
  );
}
