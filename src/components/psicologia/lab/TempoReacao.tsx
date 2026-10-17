import { useEffect, useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { Button, Card } from '@/components/ui';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';

type Fase = 'parado' | 'esperando' | 'ja' | 'cedo' | 'fim';
const TENTATIVAS = 5;

/**
 * O tempo de reação, o tipo de medida do laboratório de Wundt (1879): espere o quadro ficar verde e
 * toque o mais rápido que puder. Cinco tentativas e a média.
 */
export function TempoReacao() {
  const { db, refresh } = useApp();
  const [fase, setFase] = useState<Fase>('parado');
  const [tempos, setTempos] = useState<number[]>([]);
  const inicio = useRef(0);

  useEffect(() => {
    if (fase !== 'esperando') return;
    const t = setTimeout(
      () => {
        inicio.current = Date.now();
        setFase('ja');
      },
      1500 + Math.random() * 2500,
    );
    return () => clearTimeout(t);
  }, [fase]);

  const tocar = () => {
    if (fase === 'esperando') setFase('cedo');
    else if (fase === 'ja') {
      const t = [...tempos, Date.now() - inicio.current];
      setTempos(t);
      if (t.length >= TENTATIVAS) {
        setFase('fim');
        if (db) void awardXp(db, 5, 'psi-lab:reacao').then(() => refresh());
      } else setFase('parado');
    } else if (fase === 'parado' || fase === 'cedo') setFase('esperando');
  };

  const media = tempos.length ? Math.round(tempos.reduce((a, b) => a + b, 0) / tempos.length) : 0;
  const cor = fase === 'ja' ? 'bg-green-500' : fase === 'esperando' ? 'bg-rose-500' : fase === 'cedo' ? 'bg-amber-400' : 'bg-violet-500';
  const texto =
    fase === 'esperando'
      ? 'Espere o verde…'
      : fase === 'ja'
        ? 'Toque!'
        : fase === 'cedo'
          ? 'Cedo demais! Toque para tentar de novo.'
          : tempos.length
            ? `${tempos[tempos.length - 1]} ms. Toque para a próxima (${tempos.length}/${TENTATIVAS}).`
            : 'Toque para começar.';

  return (
    <Card className="gap-3">
      {fase !== 'fim' ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={texto}
          {...({ delayPressIn: 0 } as object)}
          onPressIn={tocar}
          className={`h-56 items-center justify-center rounded-2xl px-4 ${cor}`}
        >
          <Text className="text-center text-2xl font-black text-white">{texto}</Text>
        </Pressable>
      ) : (
        <>
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">A sua média: {media} ms</Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Os seus tempos: {tempos.join(', ')} ms. Um milissegundo é um milésimo de segundo: entre ver o verde e o dedo tocar, o sinal passa pelos olhos, pelo
            cérebro e pelos nervos até a mão.
          </Text>
          <Button
            title="De novo"
            onPress={() => {
              setTempos([]);
              setFase('parado');
            }}
          />
        </>
      )}
    </Card>
  );
}
