import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Mic, MicOff } from 'lucide-react-native';
import type { VoiceChallenge } from '@/data/types';
import { Linu } from '../Linu';
import { Button, SpeakButton, SpeechBubble, Ipa } from '../ui';
import { router } from 'expo-router';
import { canRecognize, canSpeak, listen, speak } from '@/services/speech';
import { recognitionErrorMessage } from '@/services/recognition-error';
import { markWords, matchesAny, pronunciationScore, type WordMark } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { useApp } from '@/services/app-state';
import { targetInputStyle, targetTextStyle } from '@/services/direction';

const MARK_CLASS: Record<WordMark, string> = {
  ok: 'bg-conquista-light text-conquista-dark dark:bg-green-950 dark:text-green-300',
  quase: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  faltou: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
};

/**
 * Etapa 4 — desafio de voz (Mondly / Speakly). O Linu faz uma pergunta, o aluno responde
 * falando (ou digitando, quando o aparelho não reconhece fala). As palavras da resposta-modelo
 * ficam verdes (ditas), amarelas (quase) ou vermelhas (faltaram).
 */
export function VoiceStep({ challenge, locale, onDone }: { challenge: VoiceChallenge; locale: string; onDone: (correct: boolean) => void }) {
  const { pack } = useApp();
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const [typed, setTyped] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [noVoice, setNoVoice] = useState(false);
  const mic = canRecognize();
  const model = challenge.expected[0];

  useEffect(() => {
    speak(challenge.bot, locale);
    canSpeak(locale).then((ok) => setNoVoice(!ok));
  }, [challenge.bot, locale]);

  const evaluate = (text: string) => {
    setHeard(text);
    const ok = matchesAny(text, challenge.expected);
    if (ok) haptics.success();
    else haptics.error();
  };

  const record = async () => {
    setError(null);
    setListening(true);
    try {
      const text = await listen(locale);
      if (text.trim()) evaluate(text);
      else setError('Não consegui ouvir. Tente de novo mais perto do microfone.');
    } catch (e) {
      setError(recognitionErrorMessage((e as Error).message));
    } finally {
      setListening(false);
    }
  };

  const marks = heard !== null ? markWords(model, heard) : [];
  const accepted = heard !== null && matchesAny(heard, challenge.expected);
  const score = pronunciationScore(marks);

  return (
    <View className="flex-1 gap-4">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Desafio de voz</Text>

      <View className="flex-row items-end gap-2">
        <Linu mood={heard === null ? 'falando' : accepted ? 'comemorando' : 'pensando'} size={76} />
        <SpeechBubble className="mb-8">
          <View className="flex-row items-center gap-2">
            <Text style={targetTextStyle(pack)} className="flex-1 text-xl font-bold text-slate-900 dark:text-white">{challenge.bot}</Text>
            <SpeakButton text={challenge.bot} locale={locale} />
          </View>
          <Ipa text={challenge.bot} className="text-xs" />
          <Pressable onPress={() => setShowTranslation((s) => !s)}>
            <Text className="mt-1 text-sm text-conecta">{showTranslation ? `🇧🇷 ${challenge.botTranslation}` : 'Ver tradução'}</Text>
          </Pressable>
        </SpeechBubble>
      </View>

      <Text className="text-center text-sm text-slate-500 dark:text-slate-400">💡 {challenge.hint}</Text>
      {noVoice && (
        <Pressable onPress={() => router.push('/voz')} className="self-center">
          <Text className="text-sm font-semibold text-amber-600">🔇 Sem voz neste aparelho, não dá para me ouvir. Como instalar?</Text>
        </Pressable>
      )}

      {heard === null && (
        <View className="items-center gap-4">
          {mic ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={listening ? 'Ouvindo' : 'Falar a resposta'}
              onPress={record}
              disabled={listening}
              className={`h-24 w-24 items-center justify-center rounded-full ${listening ? 'bg-rose-500' : 'bg-conecta active:bg-conecta-dark'}`}
            >
              <Mic size={40} color="#fff" />
            </Pressable>
          ) : (
            <View className="flex-row items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">
              <MicOff size={16} color="#64748B" />
              <Text className="flex-1 text-xs text-slate-600 dark:text-slate-400">Este aparelho ainda não reconhece fala no app. Fale em voz alta e digite o que disse.</Text>
            </View>
          )}
          {listening && <Text className="font-bold text-rose-500">Ouvindo… fale agora</Text>}
          {error && <Text className="text-center text-rose-500">{error}</Text>}
          <View className="w-full gap-2">
            <TextInput
              value={typed}
              onChangeText={setTyped}
              placeholder={mic ? 'ou digite sua resposta' : 'Digite sua resposta'}
              placeholderTextColor="#94A3B8"
              autoCapitalize="none"
              onSubmitEditing={() => typed.trim() && evaluate(typed)}
              style={targetInputStyle(pack)}
              className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <Button title="Verificar" disabled={!typed.trim()} onPress={() => evaluate(typed)} />
            <Pressable onPress={() => onDone(false)} className="self-center p-2">
              <Text className="font-semibold text-slate-500">Não posso falar agora</Text>
            </Pressable>
          </View>
        </View>
      )}

      {heard !== null && (
        <View className={`gap-3 rounded-2xl p-4 ${accepted ? 'bg-conquista-light dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}`}>
          <Text className="text-sm text-slate-600 dark:text-slate-300">Você disse: “{heard}”</Text>
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Resposta-modelo · {score}% de acerto</Text>
          <View className="flex-row flex-wrap gap-1.5">
            {marks.map((m, k) => (
              <Text key={k} style={targetTextStyle(pack)} className={`overflow-hidden rounded-lg px-2 py-1 text-lg font-bold ${MARK_CLASS[m.mark]}`}>
                {m.word}
              </Text>
            ))}
            <SpeakButton text={model} locale={locale} size={18} slow />
          </View>
          <Ipa text={model} />
          <Text className={`text-lg font-extrabold ${accepted ? 'text-conquista-dark dark:text-green-300' : 'text-amber-700 dark:text-amber-300'}`}>
            {accepted ? 'Resposta adequada! 🎉' : 'Quase! Ouça o modelo e tente de novo.'}
          </Text>
          {accepted ? (
            <Button title="Continuar" variant="success" onPress={() => onDone(true)} />
          ) : (
            <View className="gap-2">
              <Button title="Tentar de novo" onPress={() => { setHeard(null); setTyped(''); }} />
              <Pressable onPress={() => onDone(false)} className="self-center p-2">
                <Text className="font-semibold text-slate-500">Seguir em frente</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
