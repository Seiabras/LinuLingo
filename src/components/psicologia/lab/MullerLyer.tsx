import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { Button, Card } from '@/components/ui';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';

const FIXA = 140;
const ALETA = 18;

/** Uma linha com as aletas: 'fora' é >—< (parece maior), 'dentro' é <—> (parece menor). */
function Figura({ cx, y, comp, tipo }: { cx: number; y: number; comp: number; tipo: 'fora' | 'dentro' }) {
  const x1 = cx - comp / 2;
  const x2 = cx + comp / 2;
  const s = tipo === 'fora' ? -1 : 1;
  const cor = '#334155';
  return (
    <>
      <Line x1={x1} y1={y} x2={x2} y2={y} stroke={cor} strokeWidth={3} />
      <Line x1={x1} y1={y} x2={x1 + s * ALETA * 0.8} y2={y - ALETA * 0.6} stroke={cor} strokeWidth={3} />
      <Line x1={x1} y1={y} x2={x1 + s * ALETA * 0.8} y2={y + ALETA * 0.6} stroke={cor} strokeWidth={3} />
      <Line x1={x2} y1={y} x2={x2 - s * ALETA * 0.8} y2={y - ALETA * 0.6} stroke={cor} strokeWidth={3} />
      <Line x1={x2} y1={y} x2={x2 - s * ALETA * 0.8} y2={y + ALETA * 0.6} stroke={cor} strokeWidth={3} />
    </>
  );
}

/**
 * A ilusão de Müller-Lyer (1889): ajuste a linha de baixo (<—>) até ela parecer do mesmo tamanho da
 * de cima (>—<). No fim, o app mostra o tamanho de verdade e o quanto a ilusão puxou.
 */
export function MullerLyer() {
  const { db, refresh } = useApp();
  const [comp, setComp] = useState(() => 100 + Math.round(Math.random() * 60));
  const [pronto, setPronto] = useState(false);
  const diff = Math.round(((comp - FIXA) / FIXA) * 100);
  const mudar = (d: number) => setComp((c) => Math.min(230, Math.max(60, c + d)));

  return (
    <Card className="gap-3">
      <Text className="text-sm text-slate-700 dark:text-slate-300">
        Use os botões para deixar a linha de baixo do mesmo tamanho da de cima. Olhe só para a linha do meio, sem as pontas.
      </Text>
      <Svg viewBox="0 0 300 150" width="100%" style={{ aspectRatio: 2 }}>
        <Figura cx={150} y={45} comp={FIXA} tipo="fora" />
        <Figura cx={150} y={110} comp={comp} tipo="dentro" />
        {pronto && (
          <>
            <Line x1={150 - FIXA / 2} y1={20} x2={150 - FIXA / 2} y2={135} stroke="#8b5cf6" strokeWidth={1} strokeDasharray="4 3" />
            <Line x1={150 + FIXA / 2} y1={20} x2={150 + FIXA / 2} y2={135} stroke="#8b5cf6" strokeWidth={1} strokeDasharray="4 3" />
          </>
        )}
      </Svg>
      {!pronto ? (
        <>
          <View className="flex-row justify-center gap-2">
            {[-10, -2, 2, 10].map((d) => (
              <Pressable
                key={d}
                accessibilityRole="button"
                onPress={() => mudar(d)}
                className="w-16 items-center rounded-xl border-2 border-slate-200 py-2 active:opacity-70 dark:border-slate-700"
              >
                <Text className="font-bold text-slate-800 dark:text-slate-100">{d > 0 ? `+${d}` : d}</Text>
              </Pressable>
            ))}
          </View>
          <Button
            title="Pronto, estão iguais"
            onPress={() => {
              setPronto(true);
              if (db) void awardXp(db, 5, 'psi-lab:muller-lyer').then(() => refresh());
            }}
          />
        </>
      ) : (
        <>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            {diff === 0
              ? 'Exatamente igual! Você venceu a ilusão desta vez.'
              : `A sua linha ficou ${Math.abs(diff)}% ${diff > 0 ? 'maior' : 'menor'} que a de cima. ${diff > 0 ? 'É a ilusão: as setas para dentro fazem a linha parecer mais curta, então você a esticou.' : 'Curioso: a maioria das pessoas estica a linha de baixo.'}`}
          </Text>
          <Text className="text-xs text-slate-500">As linhas tracejadas mostram onde a de cima começa e termina.</Text>
          <Button
            title="De novo"
            variant="ghost"
            onPress={() => {
              setComp(100 + Math.round(Math.random() * 60));
              setPronto(false);
            }}
          />
        </>
      )}
    </Card>
  );
}
