import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import { Button, Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AvisoMicrofone } from '@/components/musica/AvisoMicrofone';
import { tocarClique } from '@/services/musica/motor';
import { letraNota, nomeNota, oitava } from '@/services/musica/notas';
import { useMicrofone } from '@/services/musica/useMicrofone';

/** O ponteiro do afinador: -50 a +50 cents, verde no centro (até 5 cents). */
function Ponteiro({ cents }: { cents: number | null }) {
  const ang = ((cents ?? 0) / 50) * 60; // ±60 graus
  const rad = ((ang - 90) * Math.PI) / 180;
  const ok = cents != null && Math.abs(cents) <= 5;
  return (
    <Svg viewBox="0 0 200 110" width="100%" style={{ aspectRatio: 200 / 110 }}>
      <Path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#cbd5e1" strokeWidth={10} fill="none" strokeLinecap="round" />
      <Path d="M 93 21 A 80 80 0 0 1 107 21" stroke="#22c55e" strokeWidth={10} fill="none" />
      {cents != null && <Line x1={100} y1={100} x2={100 + 78 * Math.cos(rad)} y2={100 + 78 * Math.sin(rad)} stroke={ok ? '#16a34a' : '#ea580c'} strokeWidth={4} strokeLinecap="round" />}
      <Circle cx={100} cy={100} r={6} fill="#334155" />
    </Svg>
  );
}

const COMPASSOS = [2, 3, 4, 6];

/**
 * O afinador (pelo microfone: a nota mais perto e quanto ela está acima ou abaixo, em cents) e o
 * metrônomo (andamento, compasso e o primeiro tempo mais forte), como os do Cifra Club e do
 * Soundbrenner.
 */
export default function AfinadorScreen() {
  const [afinando, setAfinando] = useState(false);
  const { nota, erro } = useMicrofone(afinando);

  const [bpm, setBpm] = useState(80);
  const [tempos, setTempos] = useState(4);
  const [ligado, setLigado] = useState(false);
  const [tempo, setTempo] = useState(0);
  const contador = useRef(0);

  useEffect(() => {
    if (!ligado) return;
    contador.current = 0;
    const tique = () => {
      const t = contador.current % tempos;
      tocarClique(t === 0);
      setTempo(t);
      contador.current++;
    };
    tique();
    const id = setInterval(tique, 60000 / bpm);
    return () => clearInterval(id);
  }, [ligado, bpm, tempos]);

  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Afinador" subtitulo="O afinador ouve o seu instrumento ou a sua voz; o metrônomo marca o tempo." />

      <SectionTitle>Afinador</SectionTitle>
      <Card className="items-center gap-2">
        <Ponteiro cents={nota?.cents ?? null} />
        <Text className="text-4xl font-black text-slate-900 dark:text-white">{nota ? `${nomeNota(nota.midi)}${oitava(nota.midi)}` : '—'}</Text>
        <Text className="text-sm text-slate-600 dark:text-slate-400">
          {nota
            ? `${letraNota(nota.midi)}${oitava(nota.midi)} · ${nota.hz.toFixed(1)} Hz · ${Math.abs(nota.cents) <= 5 ? 'afinado!' : nota.cents > 0 ? `${nota.cents} cents acima (agudo demais)` : `${-nota.cents} cents abaixo (grave demais)`}`
            : afinando
              ? 'Toque uma corda ou cante uma nota.'
              : 'Ligue o afinador e toque uma nota.'}
        </Text>
        <Button title={afinando ? 'Desligar o afinador' : '🎤 Ligar o afinador'} variant={afinando ? 'ghost' : 'primary'} onPress={() => setAfinando((a) => !a)} />
        <AvisoMicrofone erro={erro} />
        <Text className="text-[11px] text-slate-500">Afinação padrão: lá 4 = 440 Hz. 100 cents = 1 semitom.</Text>
      </Card>

      <SectionTitle>Metrônomo</SectionTitle>
      <Card className="gap-3">
        <View className="flex-row items-center justify-center gap-3">
          {[-10, -1].map((d) => (
            <Pressable key={d} accessibilityRole="button" accessibilityLabel={`${d} batidas por minuto`} onPress={() => setBpm((b) => Math.max(30, b + d))} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
              <Text className="font-bold text-slate-700 dark:text-slate-200">{d}</Text>
            </Pressable>
          ))}
          <View className="items-center">
            <Text className="text-4xl font-black text-slate-900 dark:text-white">{bpm}</Text>
            <Text className="text-xs text-slate-500">batidas por minuto</Text>
          </View>
          {[1, 10].map((d) => (
            <Pressable key={d} accessibilityRole="button" accessibilityLabel={`mais ${d} batidas por minuto`} onPress={() => setBpm((b) => Math.min(240, b + d))} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
              <Text className="font-bold text-slate-700 dark:text-slate-200">+{d}</Text>
            </Pressable>
          ))}
        </View>
        <View className="flex-row justify-center gap-2">
          {COMPASSOS.map((c) => (
            <Pressable
              key={c}
              accessibilityRole="radio"
              accessibilityState={{ selected: tempos === c }}
              onPress={() => setTempos(c)}
              className={`rounded-full border-2 px-3 py-1 ${tempos === c ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' : 'border-slate-200 dark:border-slate-700'}`}
            >
              <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{c}/4</Text>
            </Pressable>
          ))}
        </View>
        <View className="flex-row justify-center gap-2">
          {Array.from({ length: tempos }, (_, i) => (
            <View key={i} className={`h-5 w-5 rounded-full ${ligado && tempo === i ? (i === 0 ? 'bg-orange-500' : 'bg-orange-300') : 'bg-slate-200 dark:bg-slate-700'}`} />
          ))}
        </View>
        <Button title={ligado ? 'Parar' : 'Começar'} onPress={() => setLigado((l) => !l)} />
      </Card>
    </Screen>
  );
}
