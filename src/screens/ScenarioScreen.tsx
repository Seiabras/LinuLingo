import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { HScroll } from '@/components/HScroll';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Mic, Send } from 'lucide-react-native';
import { Linu } from '@/components/Linu';
import { Button, Chip, SpeakButton, Ipa } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { targetInputStyle, targetTextStyle } from '@/services/direction';
import { canRecognize, listen, speak, stopSpeaking } from '@/services/speech';
import { keywordHits, registerBreaks } from '@/services/answers';
import { awardXp } from '@/database/queries';
import { XP } from '@/services/progress';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

type Msg =
  | { from: 'bot'; text: string; translation: string }
  | { from: 'me'; text: string }
  | { from: 'linu'; text: string; tone: 'ok' | 'warn' | 'retry' };

/**
 * Cenário de conversa guiada com persona. O Linu avalia cada resposta:
 * faz sentido? (palavras-chave) e combina com o registro pedido? (polidez).
 */
export default function ScenarioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const scenario = pack.scenarios.find((s) => s.id === id);
  const [turn, setTurn] = useState(0);
  const [msgs, setMsgs] = useState<Msg[]>(() => {
    const t = scenario?.turns[0];
    return t ? [{ from: 'bot', text: t.bot, translation: t.botTranslation }] : [];
  });
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const [good, setGood] = useState(0);
  const [polite, setPolite] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [done, setDone] = useState<null | number>(null);
  const [showTr, setShowTr] = useState<Set<number>>(new Set());
  const scroll = useRef<ScrollView>(null);

  useEffect(() => {
    if (!scenario) return;
    speak(scenario.turns[0].bot, pack.speechLocale);
    return () => stopSpeaking();
  }, [scenario, pack.speechLocale]);

  useEffect(() => {
    setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 50);
  }, [msgs, done]);

  if (!scenario) return null;
  const current = scenario.turns[turn];
  const formal = scenario.register === 'formal';

  const send = async (text: string) => {
    const answer = text.trim();
    if (!answer || done !== null) return;
    setInput('');
    const hits = keywordHits(answer, current.keywords);
    const breaks = registerBreaks(answer, current.registerBreakers);
    const out: Msg[] = [{ from: 'me', text: answer }];

    if (hits === 0) {
      haptics.error();
      out.push({ from: 'linu', tone: 'retry', text: `Hmm, acho que a pessoa não vai entender. Tente algo como: “${current.suggestions[0]}”` });
      setMsgs((m) => [...m, ...out]);
      return;
    }

    haptics.success();
    setAnswered((n) => n + 1);
    setGood((n) => n + 1);
    if (breaks.length) {
      out.push({
        from: 'linu',
        tone: 'warn',
        text: formal
          ? `Entendido, mas cuidado com o tom: “${breaks.join('”, “')}” soa íntimo demais aqui. Com ${scenario.persona.split(',')[0]} use o formal (${pack.formalMarkers}).`
          : `Entendido! Só que “${breaks.join('”, “')}” soa formal demais entre amigos. Relaxa! 😄`,
      });
    } else {
      setPolite((n) => n + 1);
      out.push({ from: 'linu', tone: 'ok', text: formal ? 'Ótimo, resposta adequada e educada! 🎩' : 'Boa, falou como um local! 🤙' });
    }

    const nextTurn = turn + 1;
    if (nextTurn < scenario.turns.length) {
      const t = scenario.turns[nextTurn];
      out.push({ from: 'bot', text: t.bot, translation: t.botTranslation });
      setTurn(nextTurn);
      setTimeout(() => speak(t.bot, pack.speechLocale), 400);
    } else {
      const xp = (good + 1) * XP.conversationTurn;
      await awardXp(db, xp, `conversa:${scenario.id}`);
      refresh();
      setDone(xp);
    }
    setMsgs((m) => [...m, ...out]);
  };

  const record = async () => {
    setListening(true);
    try {
      const heard = await listen(pack.speechLocale);
      if (heard) setInput(heard);
    } catch {
      // sem permissão ou sem suporte: o aluno digita
    } finally {
      setListening(false);
    }
  };

  const politeness = answered ? Math.round((polite / answered) * 100) : 0;

  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-suave dark:bg-grafite">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="w-full max-w-2xl flex-1 self-center">
        <View className="flex-row items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <Text className="text-2xl">{scenario.emoji}</Text>
          <View className="flex-1">
            <Text className="font-extrabold text-slate-900 dark:text-white">{scenario.title}</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400">{scenario.persona}</Text>
          </View>
          <Chip label={formal ? '🎩 formal' : '🤙 informal'} tone={formal ? 'amber' : 'green'} />
        </View>

        <ScrollView ref={scroll} className="flex-1 px-4" contentContainerStyle={{ paddingVertical: 16, gap: 10 }}>
          {msgs.map((m, i) =>
            m.from === 'bot' ? (
              <View key={i} className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-white p-3 dark:bg-slate-900">
                <View className="flex-row items-center gap-2">
                  <Text style={targetTextStyle(pack)} className="flex-shrink text-lg font-semibold text-slate-900 dark:text-white">{m.text}</Text>
                  <SpeakButton text={m.text} locale={pack.speechLocale} size={16} />
                </View>
                <Ipa text={m.text} className="text-xs" />
                <Pressable onPress={() => setShowTr((s) => new Set(s).add(i))}>
                  <Text className="mt-1 text-sm text-conecta dark:text-blue-400">{showTr.has(i) ? `🇧🇷 ${m.translation}` : 'traduzir'}</Text>
                </Pressable>
              </View>
            ) : m.from === 'me' ? (
              <View key={i} className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-conecta p-3">
                <Text style={targetTextStyle(pack)} className="text-lg text-white">{m.text}</Text>
              </View>
            ) : (
              <View key={i} className="flex-row items-end gap-2 self-center">
                <Linu mood={m.tone === 'ok' ? 'feliz' : m.tone === 'warn' ? 'pensando' : 'triste'} size={36} animate={false} />
                <Text
                  className={`flex-shrink rounded-xl px-3 py-2 text-sm ${
                    m.tone === 'ok' ? 'bg-conquista-light text-conquista-dark dark:bg-green-950 dark:text-green-300' : m.tone === 'warn' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200' : 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                  }`}
                >
                  {m.text}
                </Text>
              </View>
            ),
          )}

          {done !== null && (
            <View className="mt-4 items-center gap-3 rounded-3xl bg-white p-5 dark:bg-slate-900">
              <Linu mood="comemorando" size={90} />
              <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">Conversa concluída!</Text>
              <View className="flex-row gap-2">
                <Chip label={`+${done} XP`} tone="amber" />
                <Chip label={`Adequação ao tom: ${politeness}%`} tone={politeness >= 75 ? 'green' : 'orange'} />
              </View>
              <Button title="Voltar às conversas" variant="success" onPress={goBack} className="w-full" />
            </View>
          )}
        </ScrollView>

        {done === null && (
          <View className="gap-2 border-t border-slate-200 px-4 py-3 dark:border-slate-800">
            <HScroll label="as sugestões" contentContainerStyle={{ gap: 8 }}>
              {current.suggestions.map((s) => (
                <Pressable key={s} onPress={() => setInput(s)} className="rounded-full border border-conecta/40 px-3 py-1.5 active:bg-conecta-light">
                  <Text style={targetTextStyle(pack)} className="text-sm text-conecta dark:text-blue-400">💡 {s}</Text>
                  {!!pack.reading?.(s) && <Text className="text-xs text-conecta/70">{pack.reading(s)}</Text>}
                </Pressable>
              ))}
            </HScroll>
            <View className="flex-row items-center gap-2">
              {canRecognize() && (
                <Pressable accessibilityLabel="Falar" onPress={record} disabled={listening} className={`h-12 w-12 items-center justify-center rounded-full ${listening ? 'bg-rose-500' : 'bg-conecta-light dark:bg-blue-950'}`}>
                  <Mic size={22} color={listening ? '#fff' : '#2563EB'} />
                </Pressable>
              )}
              <TextInput
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => send(input)}
                placeholder={listening ? 'Ouvindo…' : `Responda em ${nomeIdioma(pack.name)}…`}
                placeholderTextColor="#94A3B8"
                autoCapitalize="none"
                style={targetInputStyle(pack)}
                className="flex-1 rounded-full border-2 border-slate-200 bg-white px-4 py-2.5 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
              <Pressable accessibilityLabel="Enviar" onPress={() => send(input)} disabled={!input.trim()} className={`h-12 w-12 items-center justify-center rounded-full bg-conecta ${input.trim() ? '' : 'opacity-40'}`}>
                <Send size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
