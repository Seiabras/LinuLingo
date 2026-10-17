import { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

/** As quatro cores do teste: o nome em português liga ao Cofre do idioma estudado. */
const CORES = [
  { pt: 'vermelho', hex: '#dc2626' },
  { pt: 'azul', hex: '#2563eb' },
  { pt: 'verde', hex: '#16a34a' },
  { pt: 'amarelo', hex: '#eab308' },
];
const POR_BLOCO = 8;

type Fase = 'inicio' | 'iguais' | 'diferentes' | 'fim';
interface Rodada {
  palavra: number;
  tinta: number;
}

/** O relógio do teste (fora do componente: só é lido nos toques). */
const agora = () => Date.now();
const sorteio = (n: number) => Math.floor(Math.random() * n);
function bloco(iguais: boolean): Rodada[] {
  return Array.from({ length: POR_BLOCO }, () => {
    const tinta = sorteio(4);
    const palavra = iguais ? tinta : (tinta + 1 + sorteio(3)) % 4;
    return { palavra, tinta };
  });
}
const media = (xs: number[]) => (xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : 0);

/**
 * O teste de Stroop (J. R. Stroop, 1935): toque na cor da TINTA, não na palavra. Primeiro um bloco em
 * que a palavra e a tinta combinam, depois um em que não combinam; o app compara os tempos. Dá para
 * fazer com os nomes das cores em português ou no idioma estudado (quando o Cofre tem as quatro cores).
 */
export function Stroop() {
  const { db, refresh, pack } = useApp();
  const noIdioma = CORES.map((c) => pack.vocab.find((v) => v.word_native.toLowerCase() === c.pt)?.word_target);
  const temIdioma = noIdioma.every(Boolean);
  const [lingua, setLingua] = useState<'pt' | 'idioma'>('pt');
  const [fase, setFase] = useState<Fase>('inicio');
  const [rodadas, setRodadas] = useState<Rodada[]>([]);
  const [i, setI] = useState(0);
  const [tempos, setTempos] = useState<{ iguais: number[]; diferentes: number[] }>({ iguais: [], diferentes: [] });
  const [erros, setErros] = useState(0);
  const inicio = useRef(0);

  const nome = (k: number) => (lingua === 'idioma' && temIdioma ? noIdioma[k]! : CORES[k]!.pt).toUpperCase();
  const comecar = (f: 'iguais' | 'diferentes') => {
    setFase(f);
    setRodadas(bloco(f === 'iguais'));
    setI(0);
    inicio.current = agora();
  };
  const responder = (k: number) => {
    if (fase !== 'iguais' && fase !== 'diferentes') return;
    const r = rodadas[i]!;
    const dt = agora() - inicio.current;
    if (k === r.tinta) {
      haptics.tapLight();
      setTempos((t) => ({ ...t, [fase]: [...t[fase], dt] }));
    } else {
      haptics.error();
      setErros((e) => e + 1);
    }
    if (i + 1 < rodadas.length) {
      setI(i + 1);
      inicio.current = agora();
    } else if (fase === 'iguais') {
      comecar('diferentes');
    } else {
      setFase('fim');
      if (db) void awardXp(db, 5, 'psi-lab:stroop').then(() => refresh());
    }
  };
  const reiniciar = () => {
    setTempos({ iguais: [], diferentes: [] });
    setErros(0);
    setFase('inicio');
  };

  const r = rodadas[i];
  return (
    <View className="gap-3">
      {fase === 'inicio' && (
        <Card className="gap-3">
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Vai aparecer o nome de uma cor, pintado de alguma cor. Toque no quadrado da cor da <Text className="font-extrabold">tinta</Text>, o mais rápido que
            puder, sem ligar para o que está escrito.
          </Text>
          {temIdioma && (
            <View className="flex-row gap-2">
              {(
                [
                  ['pt', '🇧🇷 Em português'],
                  ['idioma', `${pack.flag} Em ${pack.name.toLowerCase()}`],
                ] as const
              ).map(([k, rotulo]) => (
                <Pressable
                  key={k}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: lingua === k }}
                  onPress={() => setLingua(k)}
                  className={`flex-1 rounded-xl border-2 p-2 ${lingua === k ? 'border-violet-500 bg-violet-50 dark:bg-violet-950' : 'border-slate-200 dark:border-slate-700'}`}
                >
                  <Text className="text-center text-xs font-bold text-slate-700 dark:text-slate-200">{rotulo}</Text>
                </Pressable>
              ))}
            </View>
          )}
          <Button title="Começar" onPress={() => comecar('iguais')} />
        </Card>
      )}
      {(fase === 'iguais' || fase === 'diferentes') && r && (
        <Card className="items-center gap-4">
          <Text className="text-xs font-bold text-slate-500">
            {fase === 'iguais' ? 'Parte 1 de 2' : 'Parte 2 de 2'} · {i + 1}/{POR_BLOCO}
          </Text>
          <Text style={{ color: CORES[r.tinta]!.hex }} className="py-6 text-5xl font-black">
            {nome(r.palavra)}
          </Text>
          <View className="flex-row gap-3">
            {CORES.map((c, k) => (
              <Pressable
                key={c.pt}
                accessibilityRole="button"
                accessibilityLabel={c.pt}
                onPress={() => responder(k)}
                style={{ backgroundColor: c.hex }}
                className="h-16 w-16 rounded-2xl active:opacity-70"
              />
            ))}
          </View>
        </Card>
      )}
      {fase === 'fim' && (
        <Card className="gap-2">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">O seu efeito Stroop</Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Palavra e tinta iguais: <Text className="font-bold">{media(tempos.iguais)} ms</Text> por resposta.
          </Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            Palavra e tinta diferentes: <Text className="font-bold">{media(tempos.diferentes)} ms</Text> por resposta.
          </Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            {media(tempos.diferentes) > media(tempos.iguais)
              ? `A palavra te atrasou ${media(tempos.diferentes) - media(tempos.iguais)} ms em média: é o efeito Stroop. Ler é tão automático que atrapalha.`
              : 'Desta vez a palavra não te atrasou. Tente de novo, ou com o outro idioma.'}
            {erros ? ` Você errou ${erros} ${erros === 1 ? 'vez' : 'vezes'}.` : ''}
          </Text>
          <Button title="De novo" onPress={reiniciar} />
        </Card>
      )}
    </View>
  );
}
