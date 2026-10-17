import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { LinuAmigo } from '@/components/LinuAmigo';
import { amigosDaBiologia, CLASSE_DO_AMIGO, NOME_CLASSE, SOBRE_CLASSE, type ClasseBio } from '@/data/biologia/seres';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

const CLASSES: ClasseBio[] = ['ave', 'mamifero', 'crustaceo'];

/** Embaralha sem mudar a ordem a cada render. */
function embaralhar<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Classifique os seres vivos: cada amigo do Linu é ave, mamífero ou crustáceo? */
export function Classifique() {
  const { db, refresh } = useApp();
  const [rodada, setRodada] = useState(0);
  const fila = useMemo(() => embaralhar(amigosDaBiologia()), [rodada]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [resposta, setResposta] = useState<ClasseBio | null>(null);
  const atual = fila[i];
  const fim = i >= fila.length;

  const responder = (c: ClasseBio) => {
    if (resposta || !atual) return;
    const certo = CLASSE_DO_AMIGO[atual.id] === c;
    if (certo) haptics.success();
    else haptics.error();
    setResposta(c);
    if (certo) setAcertos((n) => n + 1);
  };
  const proximo = () => {
    const n = i + 1;
    setResposta(null);
    setI(n);
    if (n >= fila.length && db) {
      void awardXp(db, 10, 'bio-lab:classificar').then(() => refresh());
    }
  };
  const recomecar = () => {
    setRodada((r) => r + 1);
    setI(0);
    setAcertos(0);
    setResposta(null);
  };

  return (
    <Card className="gap-3">
      {fim ? (
        <View className="items-center gap-2">
          <Text className="text-3xl">🧪</Text>
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {acertos} de {fila.length} certos
          </Text>
          <Text className="text-center text-sm text-slate-600 dark:text-slate-400">+10 XP pelo experimento.</Text>
          <Button title="De novo" onPress={recomecar} />
        </View>
      ) : atual ? (
        <>
          <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {i + 1} de {fila.length}
          </Text>
          <View className="flex-row items-center gap-3">
            <LinuAmigo id={atual.id} size={72} />
            <View className="flex-1">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{atual.species}</Text>
              <Text className="text-sm italic text-slate-600 dark:text-slate-400">{atual.scientific}</Text>
            </View>
          </View>
          <Text className="text-sm text-slate-700 dark:text-slate-300">Em que grupo ele entra?</Text>
          <View className="flex-row gap-2">
            {CLASSES.map((c) => {
              const certa = CLASSE_DO_AMIGO[atual.id] === c;
              const cor = !resposta
                ? 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                : certa
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950'
                  : resposta === c
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950'
                    : 'border-slate-200 bg-white opacity-50 dark:border-slate-700 dark:bg-slate-900';
              return (
                <Pressable key={c} accessibilityRole="button" onPress={() => responder(c)} className={`flex-1 items-center rounded-xl border-2 py-3 ${cor}`}>
                  <Text className="font-bold text-slate-800 dark:text-slate-100">{NOME_CLASSE[c]}</Text>
                </Pressable>
              );
            })}
          </View>
          {resposta && (
            <>
              <Text className="text-sm text-slate-700 dark:text-slate-300">
                {CLASSE_DO_AMIGO[atual.id] === resposta ? 'Isso! ' : `É ${NOME_CLASSE[CLASSE_DO_AMIGO[atual.id]!].toLowerCase()}. `}
                {SOBRE_CLASSE[CLASSE_DO_AMIGO[atual.id]!]}
              </Text>
              <Button title={i + 1 >= fila.length ? 'Ver o resultado' : 'Próximo'} onPress={proximo} />
            </>
          )}
        </>
      ) : null}
    </Card>
  );
}
