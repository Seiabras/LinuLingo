import { useCallback, useEffect, useState } from 'react';
import { Linking, Platform, Pressable, Text, View } from 'react-native';
import { ArrowLeft, ChevronDown, ChevronUp, Copy } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { Linu, type LinuMood } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { canRecognize, findVoice, resetVoiceCache, speak, type VoiceInfo } from '@/services/speech';
import { detectPlatform, OS_ICON, OS_LABEL, type OS } from '@/services/platform-info';
import { ALL_OS, voiceGuide, type GuideStep } from '@/data/guias-voz';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { hasNeuralVoice, neuralCached, onNeuralState, prepareNeural, speakNeural } from '@/services/neural-tts';
import { neuralVoiceFor } from '@/data/vozes-neurais';

type Status = 'verificando' | 'natural' | 'robotica' | 'nenhuma';

/** Configuração da voz: detecta o sistema, testa a voz do idioma e mostra o passo a passo de cada sistema. */
export default function VoiceSetupScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [{ os, browser }] = useState(detectPlatform);
  const [voice, setVoice] = useState<VoiceInfo | null>(null);
  const [status, setStatus] = useState<Status>('verificando');
  const [open, setOpen] = useState<OS | null>(null);

  const check = useCallback(async () => {
    setStatus('verificando');
    resetVoiceCache();
    const v = await findVoice(pack.speechLocale);
    setVoice(v);
    setStatus(v ? (v.natural ? 'natural' : 'robotica') : 'nenhuma');
  }, [pack.speechLocale]);

  useEffect(() => {
    // findVoice é assíncrono: o estado só muda depois da lista de vozes chegar
    findVoice(pack.speechLocale).then((v) => {
      setVoice(v);
      setStatus(v ? (v.natural ? 'natural' : 'robotica') : 'nenhuma');
    });
  }, [pack.speechLocale]);

  // sem voz natural no aparelho, a voz neural embutida do LinuLingo fala no lugar (só na web)
  const neural = hasNeuralVoice(pack.speechLocale);
  const mood: LinuMood = status === 'natural' || (neural && status !== 'verificando') ? 'comemorando' : status === 'nenhuma' ? 'triste' : status === 'robotica' ? 'feliz' : 'pensando';
  const bubble =
    neural && (status === 'nenhuma' || status === 'robotica')
      ? `${status === 'nenhuma' ? 'Seu aparelho não tem' : 'Seu aparelho só tem uma voz robótica em'} ${status === 'nenhuma' ? `voz em ${nomeIdioma(pack.name)}` : nomeIdioma(pack.name)}, mas tudo bem: eu tenho a minha própria voz neural, que roda aqui no navegador. Quando não houver gravação de um nativo, é ela que fala.`
      : {
          verificando: 'Deixa eu procurar uma voz aqui no seu aparelho…',
          natural: `Achei uma voz ${nomeIdioma(pack.name)} bem natural! Toque em “Ouvir” para testar.`,
          robotica: `Tem voz em ${nomeIdioma(pack.name)}, mas é meio robótica. Dá para trocar por uma mais natural, olha o passo a passo abaixo.`,
          nenhuma: `Ainda não tem voz em ${nomeIdioma(pack.name)} neste aparelho. É rapidinho: siga os passos do seu sistema aqui embaixo.`,
        }[status];
  const others = ALL_OS.filter((o) => o !== os);
  const mic = canRecognize();

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🔊 Voz e microfone</Text>
      </View>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood={mood} size={76} />
        <SpeechBubble className="mb-6">{bubble}</SpeechBubble>
      </View>

      <Card className="gap-3">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-slate-800 dark:text-slate-100">
            Voz em {nomeIdioma(pack.name)} {pack.flag}
          </Text>
          <Chip
            label={{ verificando: 'verificando…', natural: '✓ natural', robotica: '✓ robótica', nenhuma: neural ? 'sem voz do sistema' : '✗ não encontrada' }[status]}
            tone={{ verificando: 'slate', natural: 'green', robotica: 'amber', nenhuma: neural ? 'slate' : 'rose' }[status] as 'slate'}
          />
        </View>
        {voice && <Text className="text-sm text-slate-600 dark:text-slate-400">Usando: {voice.name}</Text>}
        <View className="flex-row gap-2">
          <Button title="▶ Ouvir" className="flex-1" disabled={status === 'verificando'} onPress={() => speak(pack.sampleSentence, pack.speechLocale)} />
          <Button title="Verificar de novo" variant="ghost" className="flex-1" onPress={check} />
        </View>
        <Text style={targetTextStyle(pack)} className="text-xs italic text-slate-600 dark:text-slate-400">“{pack.sampleSentence}”</Text>
      </Card>

      {neural && <NeuralVoiceCard locale={pack.speechLocale} sample={pack.sampleSentence} preferred={status !== 'natural'} />}

      <Card className="mt-3 flex-row items-center gap-3">
        <Text className="text-2xl">🎙️</Text>
        <Text className="flex-1 text-sm text-slate-700 dark:text-slate-300">
          {mic
            ? 'Reconhecimento de fala disponível: nos desafios de voz é só tocar no microfone e falar.'
            : Platform.OS === 'web'
              ? `Este navegador${browser === 'firefox' ? ' (Firefox)' : ''} não reconhece fala. Você digita o que falou, ou usa o Chrome, o Edge ou o Safari para falar com o microfone.`
              : 'No app, por enquanto, você fala em voz alta e digita o que disse.'}
        </Text>
      </Card>

      <SectionTitle>
        {OS_ICON[os]} Seu sistema: {OS_LABEL[os]}
      </SectionTitle>
      <Guide steps={voiceGuide(os, pack.code, pack.name, pack.nativeName, pack.greeting)} />

      <SectionTitle>Outros sistemas</SectionTitle>
      <View className="gap-2">
        {others.map((o) => (
          <View key={o}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: open === o }}
              onPress={() => setOpen(open === o ? null : o)}
              className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
            >
              <Text className="text-xl">{OS_ICON[o]}</Text>
              <Text className="flex-1 font-semibold text-slate-800 dark:text-slate-100">{OS_LABEL[o]}</Text>
              {open === o ? <ChevronUp size={18} color="#94A3B8" /> : <ChevronDown size={18} color="#94A3B8" />}
            </Pressable>
            {open === o && (
              <View className="mt-2">
                <Guide steps={voiceGuide(o, pack.code, pack.name, pack.nativeName, pack.greeting)} />
              </View>
            )}
          </View>
        ))}
      </View>
    </Screen>
  );
}

/** A voz neural embutida do idioma: se já está guardada, baixar agora (para usar sem internet) e ouvir. */
function NeuralVoiceCard({ locale, sample, preferred }: { locale: string; sample: string; preferred: boolean }) {
  const voice = neuralVoiceFor(locale)!;
  const [cached, setCached] = useState<boolean | null>(null);
  const [pct, setPct] = useState<number | null>(null);
  useEffect(() => {
    neuralCached(locale).then(setCached);
    return onNeuralState((st) => {
      if (st.voice.id !== voice.id) return;
      if (st.status === 'baixando') setPct(st.total ? Math.round((st.loaded / st.total) * 100) : 0);
      else {
        setPct(null);
        neuralCached(locale).then(setCached);
      }
    });
  }, [locale, voice.id]);
  return (
    <Card className="mt-3 gap-3">
      <View className="flex-row items-center justify-between gap-2">
        <Text className="flex-1 font-bold text-slate-800 dark:text-slate-100">🐧 Voz neural do LinuLingo</Text>
        <Chip label={pct !== null ? `baixando ${pct}%` : cached ? '✓ guardada' : `${voice.mb} MB`} tone={cached ? 'green' : 'slate'} />
      </View>
      <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">
        {preferred
          ? 'É ela que fala quando não há gravação de um nativo. '
          : 'Fica de reserva: aqui a voz do aparelho já é natural. '}
        Voz {voice.label}, do projeto {voice.project}, sintetizada no próprio navegador. Na primeira vez ela é baixada ({voice.mb} MB) e depois funciona sem internet.
      </Text>
      <View className="flex-row gap-2">
        <Button title="▶ Ouvir esta voz" className="flex-1" onPress={() => speakNeural(sample, locale)} />
        {!cached && <Button title={pct !== null ? `Baixando… ${pct}%` : 'Baixar agora'} variant="ghost" className="flex-1" disabled={pct !== null} onPress={() => prepareNeural(locale)} />}
      </View>
      <Pressable accessibilityRole="link" onPress={() => Linking.openURL(voice.page)}>
        <Text className="text-xs text-slate-500 dark:text-slate-400 underline">
          Licença da voz: {voice.license} · motor: {voice.local ? 'ONNX Runtime (MIT)' : 'Piper (MIT), espeak-ng (GPL-3.0) e ONNX Runtime (MIT)'}
        </Text>
      </Pressable>
    </Card>
  );
}

function Guide({ steps }: { steps: GuideStep[] }) {
  return (
    <Card className="gap-3">
      {steps.map((s, i) => (
        <View key={i} className="flex-row gap-3">
          <View className="mt-0.5 h-7 w-7 items-center justify-center self-start rounded-full bg-conecta">
            <Text className="font-bold text-white">{i + 1}</Text>
          </View>
          <View className="flex-1 gap-1.5">
            <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{s.text}</Text>
            {s.code && <CodeLine code={s.code} />}
          </View>
        </View>
      ))}
    </Card>
  );
}

function CodeLine({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const canCopy = Platform.OS === 'web' && typeof navigator !== 'undefined' && !!navigator.clipboard;
  return (
    <View className="flex-row items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 dark:bg-black">
      {/* endereços longos (git clone https://…) não têm onde quebrar: na web, quebra em qualquer letra */}
      <Text selectable className="flex-1 font-mono text-sm text-green-300" style={Platform.OS === 'web' ? ({ wordBreak: 'break-all' } as object) : undefined}>
        {code}
      </Text>
      {canCopy && (
        <Pressable
          accessibilityLabel="Copiar comando"
          onPress={() => {
            navigator.clipboard.writeText(code).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          }}
          hitSlop={8}
        >
          {copied ? <Text className="text-xs font-bold text-green-300">copiado!</Text> : <Copy size={16} color="#86EFAC" />}
        </Pressable>
      )}
    </View>
  );
}
