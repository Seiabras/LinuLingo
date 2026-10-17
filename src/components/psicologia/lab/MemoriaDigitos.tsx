import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

type Fase = 'inicio' | 'mostrando' | 'digitando' | 'fim';
const novaSequencia = (n: number) => Array.from({ length: n }, () => Math.floor(Math.random() * 10));

/**
 * A memória de dígitos (o “span”): o app mostra números um de cada vez e você repete. A cada acerto, a
 * sequência cresce; dois erros seguidos no mesmo tamanho encerram. No fim, o resultado ao lado do
 * “sete, mais ou menos dois” de George A. Miller (1956).
 */
export function MemoriaDigitos() {
  const { db, refresh } = useApp();
  const [fase, setFase] = useState<Fase>('inicio');
  const [tam, setTam] = useState(3);
  const [seq, setSeq] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [resp, setResp] = useState<number[]>([]);
  const [errosSeguidos, setErrosSeguidos] = useState(0);
  const [melhor, setMelhor] = useState(0);

  // mostra um número por vez (900 ms cada) e depois passa para a digitação
  useEffect(() => {
    if (fase !== 'mostrando') return;
    const t = setTimeout(() => {
      if (pos + 1 < seq.length) setPos(pos + 1);
      else setFase('digitando');
    }, 900);
    return () => clearTimeout(t);
  }, [fase, pos, seq.length]);

  const rodada = (n: number) => {
    setTam(n);
    setSeq(novaSequencia(n));
    setPos(0);
    setResp([]);
    setFase('mostrando');
  };
  const digitar = (d: number) => {
    const r = [...resp, d];
    setResp(r);
    if (r.length < seq.length) return;
    if (r.every((x, k) => x === seq[k])) {
      haptics.success();
      setMelhor((m) => Math.max(m, seq.length));
      setErrosSeguidos(0);
      rodada(tam + 1);
    } else {
      haptics.error();
      if (errosSeguidos + 1 >= 2) {
        setFase('fim');
        if (db) void awardXp(db, 5, 'psi-lab:digitos').then(() => refresh());
      } else {
        setErrosSeguidos(errosSeguidos + 1);
        rodada(tam);
      }
    }
  };

  return (
    <Card className="gap-3">
      {fase === 'inicio' && (
        <>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Vão aparecer alguns números, um de cada vez. Guarde na cabeça e depois digite na mesma ordem. A cada acerto, vem um número a mais.
          </Text>
          <Button
            title="Começar"
            onPress={() => {
              setMelhor(0);
              setErrosSeguidos(0);
              rodada(3);
            }}
          />
        </>
      )}
      {fase === 'mostrando' && (
        <View className="items-center gap-2 py-6">
          <Text className="text-xs font-bold text-slate-500">
            {pos + 1} de {seq.length}
          </Text>
          <Text key={pos} className="text-7xl font-black text-violet-700 dark:text-violet-300">
            {seq[pos]}
          </Text>
        </View>
      )}
      {fase === 'digitando' && (
        <>
          <Text className="text-center text-sm text-slate-700 dark:text-slate-300">Digite os {seq.length} números:</Text>
          <Text className="text-center text-3xl font-black tracking-widest text-slate-900 dark:text-white">{resp.join(' ') || '…'}</Text>
          <View className="flex-row flex-wrap justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((d) => (
              <Pressable
                key={d}
                accessibilityRole="button"
                onPress={() => digitar(d)}
                className="h-14 w-[28%] items-center justify-center rounded-xl border-2 border-slate-200 active:bg-violet-100 dark:border-slate-700"
              >
                <Text className="text-2xl font-bold text-slate-800 dark:text-slate-100">{d}</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}
      {fase === 'fim' && (
        <>
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Você guardou até {melhor} números.</Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            {melhor >= 5 && melhor <= 9
              ? 'Bem no “sete, mais ou menos dois” de Miller (1956): a faixa em que fica quase todo mundo.'
              : melhor > 9
                ? 'Mais que o “sete, mais ou menos dois” de Miller! Você juntou os números em blocos?'
                : 'Um pouco abaixo do “sete, mais ou menos dois” de Miller (1956). Com atenção e juntando em blocos, costuma subir.'}
          </Text>
          <Button title="De novo" onPress={() => setFase('inicio')} />
        </>
      )}
    </Card>
  );
}
