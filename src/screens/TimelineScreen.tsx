import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { router } from 'expo-router';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { MAP_H, MAP_W, WORLD } from '@/data/mapa-mundi';
import { erasOf, TIMELINES } from '@/data/linha-do-tempo';
import { fitBox, focusBox, ringBoxes, type Box } from '@/services/mapa-geo';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const PLAY_MS = 2800;

/** A caixa que mostra todos os países acesos (o corpo principal de cada um, sem ilhas distantes). */
function frame(countries: string[], aspect: number): Box {
  const boxes = countries
    .map((iso) => WORLD.find((c) => c.iso === iso))
    .map((c) => (c?.d ? focusBox(ringBoxes(c.d)) : null))
    .filter((b): b is Box => !!b);
  if (!boxes.length) return { x: 0, y: 0, w: MAP_W, h: MAP_H };
  const x0 = Math.min(...boxes.map((b) => b.x));
  const y0 = Math.min(...boxes.map((b) => b.y));
  const x1 = Math.max(...boxes.map((b) => b.x + b.w));
  const y1 = Math.max(...boxes.map((b) => b.y + b.h));
  const v = fitBox({ x: x0, y: y0, w: x1 - x0, h: y1 - y0 }, aspect, 0.1);
  // nunca maior que o mundo
  if (v.w >= MAP_W) return { x: 0, y: Math.max(0, (MAP_H - MAP_W * aspect) / 2), w: MAP_W, h: MAP_W * aspect };
  return v;
}

/**
 * Linha do tempo das famílias de línguas no mapa: por onde as românicas, as eslavas, as germânicas e
 * as urálicas se espalharam ao longo dos séculos, sobre os países de hoje, até a etapa «hoje» (onde
 * uma língua da família é oficial, pelos dados do mapa).
 */
export default function TimelineScreen() {
  const dark = useIsDark();
  const { width: winW } = useWindowDimensions();
  const [famId, setFamId] = useState(TIMELINES[0].id);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const fam = TIMELINES.find((f) => f.id === famId)!;
  const eras = useMemo(() => erasOf(fam), [fam]);
  const era = eras[Math.min(step, eras.length - 1)];
  const lit = useMemo(() => new Set(era.countries), [era]);
  const mapH = Math.round(Math.min(420, Math.max(220, Math.min(winW, 680) * 0.55)));
  const aspect = mapH / Math.min(winW - 32, 680);
  const v = useMemo(() => frame(era.countries, aspect), [era, aspect]);

  // «▶ Ver a expansão»: passa pelas etapas sozinho e para na última
  const atEnd = step >= eras.length - 1;
  const running = playing && !atEnd;
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setStep((s) => Math.min(s + 1, eras.length - 1)), PLAY_MS);
    return () => clearInterval(t);
  }, [running, eras.length]);
  const play = () => {
    if (running) return setPlaying(false);
    if (atEnd) setStep(0);
    setPlaying(true);
  };

  const land = dark ? '#334155' : '#CBD5E1';
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">⏳ Linha do tempo das línguas</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} />
        <SpeechBubble className="mb-5">Veja como cada família de línguas se espalhou pelo mundo, século a século, até hoje.</SpeechBubble>
      </View>

      <View className="flex-row flex-wrap gap-2" accessibilityRole="tablist">
        {TIMELINES.map((f) => {
          const on = f.id === famId;
          return (
            <Pressable
              key={f.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              aria-selected={on}
              accessibilityLabel={`Família ${f.name}`}
              onPress={() => {
                setFamId(f.id);
                setStep(0);
                setPlaying(false);
              }}
              className={`flex-row items-center gap-1.5 rounded-full border-2 px-3 py-1.5 ${on ? 'bg-white dark:bg-slate-900' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              style={on ? { borderColor: f.color } : undefined}
            >
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: f.color }} />
              <Text className={`font-bold ${on ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                {f.emoji} {f.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View className="mt-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700" style={{ height: mapH }}>
        <Svg width="100%" height={mapH} viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`} preserveAspectRatio="xMidYMid meet">
          <Rect x={v.x - v.w} y={v.y - v.h} width={v.w * 3} height={v.h * 3} fill={dark ? '#0B1220' : '#E0F2FE'} />
          {WORLD.filter((c) => c.d).map((c) => (
            <Path
              key={c.iso}
              id={lit.has(c.iso) && c.area >= 2 ? `aceso-${c.iso}` : undefined}
              d={c.d}
              fill={lit.has(c.iso) ? fam.color : land}
              stroke={dark ? '#0F172A' : '#FFFFFF'}
              strokeWidth={v.w / 900}
            />
          ))}
          {/* os países pequenos demais para aparecer (Mônaco, San Marino, Vaticano…) ganham um ponto */}
          {WORLD.filter((c) => lit.has(c.iso) && (!c.d || c.area < 2)).map((c) => (
            <Circle key={`p-${c.iso}`} id={`aceso-${c.iso}`} cx={c.cx} cy={c.cy} r={v.w / 180} fill={fam.color} stroke={dark ? '#0F172A' : '#FFFFFF'} strokeWidth={v.w / 900} />
          ))}
        </Svg>
      </View>

      <View className="mt-4 px-1">
        {/* a linha: o trecho já percorrido na cor da família */}
        <View className="absolute left-9 right-9 top-[9px] h-1 overflow-hidden rounded-full" style={{ backgroundColor: dark ? '#334155' : '#CBD5E1' }}>
          <View className="h-1" style={{ width: `${(step / Math.max(1, eras.length - 1)) * 100}%`, backgroundColor: fam.color }} />
        </View>
        <View className="flex-row justify-between">
          {eras.map((e, i) => (
            <Pressable
              key={e.label}
              accessibilityRole="button"
              accessibilityState={{ selected: i === step }}
              aria-selected={i === step}
              accessibilityLabel={`Etapa ${e.label}`}
              onPress={() => {
                setStep(i);
                setPlaying(false);
              }}
              hitSlop={6}
              style={{ width: 64 }}
              className="items-center gap-1"
            >
              <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: i === step ? 22 : 14, height: i === step ? 22 : 14, borderRadius: 11, backgroundColor: i <= step ? fam.color : dark ? '#475569' : '#CBD5E1', borderWidth: 3, borderColor: dark ? '#0F172A' : '#FFFFFF' }} />
              </View>
              <Text className={`text-center text-[11px] ${i === step ? 'font-extrabold text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{e.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Card className="mt-3 gap-2">
        <View className="flex-row flex-wrap items-center gap-2">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {fam.emoji} {fam.name} · {era.label}
          </Text>
          <Chip label={`${era.countries.length} ${era.countries.length === 1 ? 'país' : 'países'} de hoje`} />
        </View>
        <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">{era.text}</Text>
        <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">
          {era.label === 'Hoje'
            ? 'Países onde uma língua da família é oficial (dados do Unicode CLDR, os mesmos do mapa).'
            : 'Aproximado, desenhado sobre os países de hoje: naquela época as fronteiras eram outras e a língua não cobria o país inteiro.'}
        </Text>
        <View className="flex-row gap-2">
          <Button title={running ? '⏸ Pausar' : atEnd ? '↺ Ver de novo' : '▶ Ver a expansão'} variant="ghost" className="flex-1" onPress={play} />
          {!atEnd && <Button title="Próxima ›" className="flex-1" onPress={() => setStep((s) => Math.min(eras.length - 1, s + 1))} />}
        </View>
      </Card>

      <Pressable accessibilityRole="link" onPress={() => router.push('/mapa?aba=antigos')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-amber-50 p-3 active:opacity-80 dark:bg-amber-950/40">
        <Text className="text-2xl">🏚️</Text>
        <Text className="flex-1 text-sm leading-5 text-slate-800 dark:text-slate-200">
          <Text className="font-extrabold">Países que deixaram de existir</Text> (ISO 3166-3): a Iugoslávia, a Tchecoslováquia, a União Soviética… e quem está no lugar deles hoje.
        </Text>
        <Text className="text-lg text-slate-400">›</Text>
      </Pressable>
    </Screen>
  );
}
