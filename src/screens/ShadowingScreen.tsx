import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { ArrowLeft, Headphones, Mic, Square } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeechBubble, Ipa } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { useMicCapture, type MicSample } from '@/services/mic';
import { finalContour, intonation, melodyShape, melodySimilarity, melodyTip, pitchTrack, rhythmScore, type Contour } from '@/services/pitch';
import { modelSamples, speakTimed, stopSpeaking } from '@/services/speech';
import { awardXp, saveShadowing } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';
import { logMistake } from '@/services/mistakes';

const RATES = [0.6, 0.8, 1.0];
const CONTOUR_LABEL: Record<Contour, string> = { sobe: '↗ sobe', desce: '↘ desce', plano: '→ reta' };
const VOICED = 0.08;
const SHADOW_XP = 3;

interface Result {
  userMs: number;
  modelMs: number;
  rhythm: number;
  contour: Contour | null;
  expected: 'sobe' | 'desce' | null;
  /** melodia parecida com a do modelo (0–100); null sem a curva do modelo ou sem voz suficiente */
  melody: number | null;
  /** a curva da sua voz, para desenhar por cima da do modelo */
  userTrack: (number | null)[];
}

/** A curva do modelo de uma frase (a chave diz de qual frase e velocidade ela é). */
interface ModelCurve {
  key: string;
  track: (number | null)[] | null;
  source: 'nativo' | 'neural' | null;
}

/**
 * Shadowing: ouvir a frase e repetir (depois do modelo ou junto com ele). Mostra a onda
 * e a curva de altura da voz ao vivo e compara o ritmo e a entonação do fim da frase.
 */
export default function ShadowingScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const mic = useMicCapture();
  const [i, setI] = useState(0);
  const [rate, setRate] = useState(0.8);
  const [together, setTogether] = useState(false);
  const [modelMs, setModelMs] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showTr, setShowTr] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [done, setDone] = useState<Set<number>>(new Set());
  const [width, setWidth] = useState(320);
  const [melodyWidth, setMelodyWidth] = useState(300);
  const autoStop = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [phrase, translation] = pack.shadowing[i];
  const into = intonation(phrase, pack.code);
  const expected = into.contour;

  // a melodia do modelo (gravação de nativo ou voz embutida), calculada quando a frase muda
  const modelKey = `${pack.code}|${phrase}|${rate}`;
  const [curve, setCurve] = useState<ModelCurve | null>(null);
  useEffect(() => {
    let alive = true;
    modelSamples(phrase, pack.speechLocale, rate)
      .then((m) => alive && setCurve({ key: modelKey, track: m ? pitchTrack(m.samples, m.sampleRate) : null, source: m?.source ?? null }))
      .catch(() => alive && setCurve({ key: modelKey, track: null, source: null }));
    return () => {
      alive = false;
    };
  }, [modelKey, phrase, pack.speechLocale, rate]);
  const model = curve?.key === modelKey ? curve : null;

  useEffect(
    () => () => {
      stopSpeaking();
      if (autoStop.current) clearTimeout(autoStop.current);
    },
    [],
  );

  const playModel = async () => {
    setPlaying(true);
    const ms = await speakTimed(phrase, pack.speechLocale, rate);
    setModelMs(ms);
    setPlaying(false);
    return ms;
  };

  const modelCurve = model;
  const analyse = async (samples: MicSample[], modelMs: number) => {
    const voiced = samples.filter((s) => s.level > VOICED);
    const userMs = voiced.length > 1 ? voiced[voiced.length - 1].t - voiced[0].t : 0;
    const contour = mic.supportsPitch ? finalContour(voiced.map((s) => s.pitch)) : null;
    const userTrack = samples.map((s) => (s.level > VOICED ? s.pitch : null));
    const melody = mic.supportsPitch && modelCurve?.track ? melodySimilarity(userTrack, modelCurve.track) : null;
    const r: Result = { userMs, modelMs, rhythm: rhythmScore(userMs, modelMs), contour, expected, melody, userTrack };
    setResult(r);
    const good = r.rhythm >= 60 && (contour === null || expected === null || contour === expected) && (melody === null || melody >= 50);
    if (good) haptics.success();
    else if (userMs > 0) {
      // ritmo longe do modelo ou melodia do fim trocada: a frase vai para o caderno de erros
      const off = [
        r.rhythm < 60 ? `ritmo ${r.rhythm}%` : null,
        contour && expected && contour !== expected ? `a voz ${contour === 'sobe' ? 'subiu' : contour === 'desce' ? 'desceu' : 'ficou plana'} no fim` : null,
        melody !== null && melody < 50 ? `melodia ${melody}% parecida` : null,
      ]
        .filter(Boolean)
        .join(' · ');
      logMistake(db, {
        language: pack.code,
        source: 'shadowing',
        key: phrase,
        prompt: `🎙️ Repita com o ritmo e a melodia do modelo: “${phrase}”`,
        expected: phrase,
        given: off || null,
        note: into.tip,
        speak: phrase,
      });
    }
    await saveShadowing(db, phrase, r.rhythm, contour === null || expected === null ? null : contour === expected);
    if (userMs > 0 && !done.has(i)) {
      await awardXp(db, SHADOW_XP, 'shadowing');
      refresh();
      setDone((d) => new Set(d).add(i));
    }
  };

  const record = async () => {
    setResult(null);
    if (together) {
      await mic.start();
      const ms = await playModel();
      autoStop.current = setTimeout(async () => {
        const samples = await mic.stop();
        analyse(samples, ms);
      }, 900);
    } else {
      await mic.start();
    }
  };

  const stop = async () => {
    if (autoStop.current) clearTimeout(autoStop.current);
    const samples = await mic.stop();
    const model = modelMs ?? (await playModel());
    analyse(samples, model);
  };

  const go = (d: number) => {
    setI((x) => (x + d + pack.shadowing.length) % pack.shadowing.length);
    setResult(null);
    setModelMs(null);
    setShowTr(false);
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🎙️ Shadowing</Text>
        <Chip label={`${i + 1}/${pack.shadowing.length}`} />
      </View>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">Ouça e repita imitando o ritmo e a melodia, como uma sombra. Com fones, dá para falar junto com o modelo!</SpeechBubble>
      </View>

      <Card className="gap-3">
        <Text className="text-2xl font-extrabold leading-9 text-slate-900 dark:text-white">{phrase}</Text>
        <Ipa text={phrase} />
        <Pressable onPress={() => setShowTr((v) => !v)}>
          <Text className="text-sm text-conecta dark:text-blue-400">{showTr ? `🇧🇷 ${translation}` : 'Ver tradução'}</Text>
        </Pressable>
        <View className="flex-row flex-wrap items-center gap-2">
          <Chip label={expected ? `Entonação do fim: ${CONTOUR_LABEL[expected]}` : 'Entonação: pico na palavra-chave'} tone="blue" />
          <Text className="flex-1 text-xs text-slate-600 dark:text-slate-400">{into.tip}</Text>
        </View>
        <View className="flex-row gap-2">
          {RATES.map((r) => (
            <Pressable key={r} onPress={() => setRate(r)} className={`flex-1 items-center rounded-xl border-2 py-2 ${rate === r ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 dark:border-slate-700'}`}>
              <Text className={`font-bold ${rate === r ? 'text-conecta dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>{r === 1 ? 'normal' : `${r}×`}</Text>
            </Pressable>
          ))}
        </View>
        <Button title={playing ? 'Tocando…' : '▶ Ouvir o modelo'} variant="ghost" disabled={playing || mic.recording} onPress={playModel} />
      </Card>

      {model?.track && (
        <Card className="mt-3 gap-2">
          <View className="flex-row items-center justify-between gap-2">
            <Text className="font-bold text-slate-800 dark:text-slate-100">🎼 Sombra sonora: a melodia</Text>
            {result?.melody != null && <Chip label={`Melodia: ${result.melody}% parecida`} tone={result.melody >= 75 ? 'green' : result.melody >= 50 ? 'amber' : 'rose'} />}
          </View>
          <View onLayout={(e) => setMelodyWidth(e.nativeEvent.layout.width)}>
            <MelodyChart model={melodyShape(model.track)} user={result && result.userMs > 0 ? melodyShape(result.userTrack) : null} width={melodyWidth} height={110} dark={dark} />
          </View>
          <View className="flex-row flex-wrap items-center gap-3">
            <Text className="text-xs font-bold text-blue-500">━ modelo ({model.source === 'nativo' ? 'gravação de nativo' : 'voz embutida'})</Text>
            {result && result.userMs > 0 && <Text className="text-xs font-bold text-amber-500">━ você</Text>}
          </View>
          <Text className="text-xs leading-5 text-slate-600 dark:text-slate-400">{melodyTip(pack.code)}</Text>
        </Card>
      )}

      <View className="mt-3 flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {[
          [false, 'Repetir depois'],
          [true, '🎧 Falar junto'],
        ].map(([v, label]) => (
          <Pressable key={String(v)} onPress={() => setTogether(v as boolean)} className={`flex-1 items-center rounded-xl py-2 ${together === v ? 'bg-white dark:bg-slate-950' : ''}`}>
            <Text className={`font-bold ${together === v ? 'text-conecta dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>{label as string}</Text>
          </Pressable>
        ))}
      </View>
      {together && (
        <View className="mt-2 flex-row items-center gap-2">
          <Headphones size={14} color="#64748B" />
          <Text className="flex-1 text-xs text-slate-600 dark:text-slate-400">Use fones: sem eles, o microfone capta a voz do modelo junto com a sua.</Text>
        </View>
      )}

      <View className="mt-3 overflow-hidden rounded-2xl bg-slate-900" onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        <Waveform samples={mic.samples} width={width} height={130} />
      </View>
      {!mic.supportsPitch && <Text className="mt-1 text-xs text-slate-600 dark:text-slate-400">Neste aparelho a curva de entonação não está disponível; ritmo e volume funcionam. Na versão web aparece a curva completa.</Text>}
      {mic.error && <Text className="mt-2 text-center text-rose-500">{mic.error}</Text>}

      {!mic.recording ? (
        <Button title={together ? 'Falar junto com o modelo' : 'Gravar minha voz'} className="mt-3" disabled={playing} icon={<Mic size={18} color="#fff" />} onPress={record} />
      ) : (
        <Button title="Parar" variant="danger" className="mt-3" icon={<Square size={16} color="#fff" fill="#fff" />} onPress={stop} disabled={together} />
      )}

      {result && (
        <Card className="mt-3 gap-2">
          {result.userMs === 0 ? (
            <Text className="text-center text-amber-600">Não ouvi sua voz. Fale mais perto do microfone e tente de novo.</Text>
          ) : (
            <>
              <View className="flex-row flex-wrap gap-2">
                <Chip label={`Ritmo: ${result.rhythm}%`} tone={result.rhythm >= 75 ? 'green' : result.rhythm >= 50 ? 'amber' : 'rose'} />
                <Chip label={`você ${(result.userMs / 1000).toFixed(1)} s · modelo ${(result.modelMs / 1000).toFixed(1)} s`} />
                {result.contour && result.expected && (
                  <Chip label={`fim ${CONTOUR_LABEL[result.contour]} ${result.contour === result.expected ? '✓' : '✗'}`} tone={result.contour === result.expected ? 'green' : 'rose'} />
                )}
              </View>
              <Text className="text-sm text-slate-600 dark:text-slate-300">
                {result.userMs > result.modelMs * 1.25
                  ? 'Você falou mais devagar que o modelo. Tente juntar as palavras, sem pausas no meio.'
                  : result.userMs < result.modelMs * 0.75
                    ? 'Você falou mais rápido que o modelo. Respire e acompanhe as sílabas.'
                    : 'Ritmo parecido com o do modelo. Boa!'}
                {result.contour && result.expected && result.contour !== result.expected ? ` No fim, a voz deveria ${result.expected === 'sobe' ? 'subir, como numa pergunta' : 'descer'}.` : ''}
              </Text>
            </>
          )}
        </Card>
      )}

      <View className="mt-4 flex-row gap-2">
        <Button title="‹ Anterior" variant="ghost" className="flex-1" onPress={() => go(-1)} />
        <Button title="Próxima ›" variant="success" className="flex-1" onPress={() => go(1)} />
      </View>
      <Text className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">O modelo é a gravação de um nativo quando a frase tem uma; senão, a voz do aparelho ou a voz embutida. A curva azul é a melodia do modelo, e a amarela, a sua, as duas na mesma escala (semitons em relação ao tom de cada voz), para uma voz grave e uma aguda poderem ser comparadas.</Text>
    </Screen>
  );
}

/** Onda (volume) em barras e altura da voz em pontos (escala logarítmica 70–400 Hz). */
function Waveform({ samples, width, height }: { samples: MicSample[]; width: number; height: number }) {
  const n = Math.max(60, samples.length);
  const step = width / n;
  const mid = height / 2;
  const y = (hz: number) => {
    const t = (Math.log(hz) - Math.log(70)) / (Math.log(400) - Math.log(70));
    return height - 8 - Math.max(0, Math.min(1, t)) * (height - 16);
  };
  const pitchPath = samples
    .map((s, k) => (s.pitch ? `${k * step},${y(s.pitch)}` : null))
    .reduce<string[]>((acc, p, k, arr) => {
      if (!p) return acc;
      acc.push(`${arr[k - 1] ? 'L' : 'M'}${p}`);
      return acc;
    }, [])
    .join(' ');
  return (
    <Svg width={width} height={height}>
      <Line x1={0} y1={mid} x2={width} y2={mid} stroke="#334155" strokeWidth={1} />
      {samples.map((s, k) => (
        <Rect key={k} x={k * step} y={mid - (s.level * height) / 2} width={Math.max(1, step - 1)} height={Math.max(1, s.level * height)} fill="#60A5FA" opacity={0.55} rx={1} />
      ))}
      {pitchPath ? <Path d={pitchPath} stroke="#FBBF24" strokeWidth={2.5} fill="none" strokeLinejoin="round" /> : null}
      {samples.length > 0 && samples[samples.length - 1].pitch ? <Circle cx={(samples.length - 1) * step} cy={y(samples[samples.length - 1].pitch!)} r={4} fill="#FBBF24" /> : null}
    </Svg>
  );
}

/** As duas melodias (em semitons, centradas), a do modelo tracejada em azul e a sua em amarelo. */
function MelodyChart({ model, user, width, height, dark }: { model: number[] | null; user: number[] | null; width: number; height: number; dark: boolean }) {
  const RANGE = 7; // ±7 semitons
  const path = (pts: number[]) =>
    pts
      .map((v, k) => {
        const x = 8 + (k * (width - 16)) / (pts.length - 1);
        const y = height / 2 - (Math.max(-RANGE, Math.min(RANGE, v)) / RANGE) * (height / 2 - 8);
        return `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  return (
    <Svg width={width} height={height}>
      <Rect x={0} y={0} width={width} height={height} rx={12} fill={dark ? '#0F172A' : '#F1F5F9'} />
      <Line x1={8} y1={height / 2} x2={width - 8} y2={height / 2} stroke={dark ? '#334155' : '#CBD5E1'} strokeWidth={1} strokeDasharray="3 4" />
      {model && <Path d={path(model)} stroke="#3B82F6" strokeWidth={3} fill="none" strokeDasharray="7 5" strokeLinecap="round" strokeLinejoin="round" />}
      {user && <Path d={path(user)} stroke="#F59E0B" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
    </Svg>
  );
}
