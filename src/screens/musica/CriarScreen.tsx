import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card, Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { Pauta } from '@/components/musica/Pauta';
import { tocarClique, tocarNota } from '@/services/musica/motor';
import { nomeNota } from '@/services/musica/notas';

const LINHAS = [72, 71, 69, 67, 65, 64, 62, 60]; // a escala de dó, de cima (agudo) para baixo
const COLUNAS = 16;
const CORES = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899'];

/**
 * Criar: uma grade para montar melodias (como o Song Maker do Chrome Music Lab e o Ableton Learning
 * Music). Cada linha é uma nota da escala de dó, cada coluna um tempo; a última linha é a batida. A
 * melodia aparece também na pauta.
 */
export default function CriarScreen() {
  const [grade, setGrade] = useState<boolean[][]>(() => LINHAS.map(() => Array(COLUNAS).fill(false)));
  const [batida, setBatida] = useState<boolean[]>(() => Array.from({ length: COLUNAS }, (_, i) => i % 4 === 0));
  const [tocando, setTocando] = useState(false);
  const [coluna, setColuna] = useState(-1);
  const [bpm, setBpm] = useState(110);
  const estado = useRef({ grade, batida });
  useEffect(() => {
    estado.current = { grade, batida };
  }, [grade, batida]);

  useEffect(() => {
    if (!tocando) return;
    let c = 0;
    const passo = () => {
      const { grade: g, batida: b } = estado.current;
      LINHAS.forEach((m, i) => g[i]![c] && tocarNota(m, { duracao: 0.5, volume: 0.35 }));
      if (b[c]) tocarClique(c % 4 === 0);
      setColuna(c);
      c = (c + 1) % COLUNAS;
    };
    passo();
    const id = setInterval(passo, 60000 / bpm / 2); // cada coluna é uma colcheia
    return () => {
      clearInterval(id);
      setColuna(-1);
    };
  }, [tocando, bpm]);

  const alternar = (l: number, c: number) => {
    setGrade((g) => g.map((linha, i) => (i === l ? linha.map((v, j) => (j === c ? !v : v)) : linha)));
    if (!grade[l]![c]) tocarNota(LINHAS[l]!, { duracao: 0.4 });
  };

  // a melodia na pauta: em cada coluna, a nota mais aguda marcada
  const melodia = Array.from({ length: COLUNAS }, (_, c) => LINHAS.find((_, l) => grade[l]![c]))
    .filter((m): m is number => m != null)
    .slice(0, 12);

  return (
    <Screen>
      <AreaCabecalho area="musica" titulo="Criar" subtitulo="Toque nos quadrados para montar uma melodia e uma batida. Cada linha é uma nota; cada coluna, um tempo." />
      <Card className="mt-3 gap-2">
        <View className="gap-0.5">
          {LINHAS.map((m, l) => (
            <View key={m} className="flex-row items-center gap-0.5">
              <Text className="w-7 text-[10px] font-bold text-slate-500">{nomeNota(m)}</Text>
              {grade[l]!.map((v, c) => (
                <Pressable
                  key={c}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: v }}
                  accessibilityLabel={`${nomeNota(m)}, tempo ${c + 1}`}
                  onPress={() => alternar(l, c)}
                  style={{ backgroundColor: v ? CORES[l] : undefined, opacity: coluna === c && !v ? 0.6 : 1 }}
                  className={`aspect-square flex-1 rounded-sm ${v ? '' : c % 4 === 0 ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'} ${coluna === c ? 'border border-orange-500' : ''}`}
                />
              ))}
            </View>
          ))}
          <View className="mt-1 flex-row items-center gap-0.5">
            <Text className="w-7 text-[10px] font-bold text-slate-500">bat.</Text>
            {batida.map((v, c) => (
              <Pressable
                key={c}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: v }}
                accessibilityLabel={`batida, tempo ${c + 1}`}
                onPress={() => setBatida((b) => b.map((x, j) => (j === c ? !x : x)))}
                className={`aspect-square flex-1 rounded-full ${v ? 'bg-slate-700 dark:bg-slate-300' : 'bg-slate-100 dark:bg-slate-800'} ${coluna === c ? 'border border-orange-500' : ''}`}
              />
            ))}
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <Button title={tocando ? '■ Parar' : '▶ Tocar'} className="flex-1" onPress={() => setTocando((t) => !t)} />
          <Pressable accessibilityRole="button" onPress={() => setBpm((b) => Math.max(60, b - 10))} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
            <Text className="font-bold text-slate-700 dark:text-slate-200">−</Text>
          </Pressable>
          <Text className="w-16 text-center text-xs font-bold text-slate-600 dark:text-slate-300">{bpm} bpm</Text>
          <Pressable accessibilityRole="button" onPress={() => setBpm((b) => Math.min(200, b + 10))} className="h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
            <Text className="font-bold text-slate-700 dark:text-slate-200">+</Text>
          </Pressable>
        </View>
        <Button
          title="Limpar"
          variant="ghost"
          onPress={() => {
            setGrade(LINHAS.map(() => Array(COLUNAS).fill(false)));
          }}
        />
      </Card>
      {melodia.length > 0 && (
        <Card className="mt-3 gap-1">
          <Text className="text-xs font-bold text-orange-700 dark:text-orange-400">A sua melodia na pauta</Text>
          <Pauta notas={melodia.map((m) => ({ midi: m }))} rotulos nomes={nomeNota} />
        </Card>
      )}
    </Screen>
  );
}
