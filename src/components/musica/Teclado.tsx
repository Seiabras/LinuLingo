import { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ehPreta, nomeNota } from '@/services/musica/notas';

/**
 * Os eventos de uma tecla: toca no onPressIn (sem esperar soltar); na web, um toque muito rápido às
 * vezes não dispara o onPressIn, e aí o onPress toca no lugar dele.
 */
function useToque(aoTocar: (midi: number) => void) {
  const tocou = useRef(false);
  return (m: number) => ({
    onPressIn: () => {
      tocou.current = true;
      aoTocar(m);
    },
    onPress: () => {
      if (!tocou.current) aoTocar(m);
      tocou.current = false;
    },
  });
}

/**
 * O teclado na tela (decisão do dono, 17/10/2026: o teclado é o primeiro instrumento). As teclas brancas
 * em fila e as pretas por cima, entre elas. `destaque` pinta teclas (a nota pedida, a certa, a errada).
 */
export function Teclado({
  de = 60,
  ate = 76,
  aoTocar,
  destaque = {},
  nomes = true,
}: {
  de?: number;
  ate?: number;
  aoTocar: (midi: number) => void;
  destaque?: Record<number, string>;
  nomes?: boolean;
}) {
  const toque = useToque(aoTocar);
  const todas = Array.from({ length: ate - de + 1 }, (_, i) => de + i);
  const brancas = todas.filter((m) => !ehPreta(m));
  const larg = 100 / brancas.length;
  return (
    <View style={{ height: 150 }} className="relative w-full overflow-hidden rounded-xl border border-slate-300 bg-slate-800 dark:border-slate-600">
      <View className="absolute inset-0 flex-row">
        {brancas.map((m) => (
          <Pressable
            key={m}
            accessibilityRole="button"
            accessibilityLabel={nomeNota(m)}
            {...toque(m)}
            style={{ width: `${larg}%`, backgroundColor: destaque[m] ?? '#ffffff' }}
            className="h-full items-center justify-end border-r border-slate-300 pb-1.5 active:bg-slate-200"
          >
            {nomes && <Text className="text-[10px] font-bold text-slate-500">{nomeNota(m)}</Text>}
          </Pressable>
        ))}
      </View>
      {todas
        .filter((m) => ehPreta(m))
        .map((m) => {
          // a preta fica na divisa entre a branca de baixo e a de cima
          const idxBrancaAntes = brancas.indexOf(m - 1);
          return (
            <Pressable
              key={m}
              accessibilityRole="button"
              accessibilityLabel={nomeNota(m)}
              {...toque(m)}
              style={{
                position: 'absolute',
                left: `${(idxBrancaAntes + 1) * larg - larg * 0.32}%`,
                width: `${larg * 0.64}%`,
                height: '60%',
                backgroundColor: destaque[m] ?? '#0f172a',
              }}
              className="rounded-b-md active:opacity-80"
            />
          );
        })}
    </View>
  );
}
