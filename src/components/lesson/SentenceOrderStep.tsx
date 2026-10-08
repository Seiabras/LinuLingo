import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { ClozeItem } from '@/data/types';
import { Button, SpeakButton } from '../ui';
import { shuffle } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';

interface Sentenca {
  tokens: string[];
  translation: string;
}

/**
 * Deriva frases pra ordenar a partir das lacunas já escritas (sentence + answer), sem conteúdo
 * novo. Escritas sem espaço (japonês, chinês...) não dão frase com mais de 1 "token" — essas
 * entram vazias e a etapa pula sozinha, pra não quebrar esses idiomas.
 */
function sentencasDe(items: ClozeItem[]): Sentenca[] {
  return items
    .map((it) => ({
      tokens: it.sentence.replace('___', it.answer).trim().split(/\s+/),
      translation: it.translation,
    }))
    .filter((s) => s.tokens.length >= 3);
}

/**
 * Etapa "Ordene a frase": reconstruir, tocando palavra por palavra, a frase inteira das lacunas da
 * lição — treina a ordem das palavras, não só a palavra que falta.
 */
export function SentenceOrderStep({ items, locale, onDone }: { items: ClozeItem[]; locale: string; onDone: (correct: number, total: number) => void }) {
  const { pack } = useApp();
  const sentencas = useMemo(() => sentencasDe(items), [items]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const atual = sentencas[i];
  const embaralhado = useMemo(() => (atual ? shuffle(atual.tokens.map((t, idx) => ({ t, idx }))) : []), [atual]);

  if (sentencas.length === 0) {
    // nada pra ordenar nesta lição (ex.: escrita sem espaço) — segue sem pontuar nem penalizar
    onDone(0, 0);
    return null;
  }
  if (!atual) return null;

  const toggle = (idx: number) => {
    if (checked !== null) return;
    setPicked((p) => (p.includes(idx) ? p.filter((x) => x !== idx) : [...p, idx]));
  };

  const montada = picked.map((idx) => atual.tokens[idx]).join(' ');
  const completa = picked.length === atual.tokens.length;

  const verificar = () => {
    const ok = picked.every((idx, pos) => idx === pos);
    setChecked(ok);
    if (ok) {
      haptics.success();
      setCorrect((c) => c + 1);
    } else {
      haptics.error();
    }
  };

  const next = () => {
    setPicked([]);
    setChecked(null);
    if (i + 1 >= sentencas.length) onDone(correct, sentencas.length);
    else setI(i + 1);
  };

  return (
    <View className="flex-1 gap-5">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Ordene a frase</Text>
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {i + 1} de {sentencas.length}
      </Text>

      <View className="min-h-[64px] flex-row flex-wrap items-center gap-2 rounded-3xl border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
        {picked.length === 0 && <Text className="text-slate-400 dark:text-slate-500">Toque nas palavras abaixo, na ordem certa</Text>}
        {picked.map((idx, pos) => (
          <Pressable key={pos} onPress={() => checked === null && toggle(idx)}>
            <Text style={targetTextStyle(pack)} className="rounded-xl bg-conecta-light px-3 py-1 text-lg font-bold text-conecta-dark dark:bg-sky-950 dark:text-sky-200">
              {atual.tokens[idx]}
            </Text>
          </Pressable>
        ))}
        {completa && checked !== null && <SpeakButton text={montada} locale={locale} />}
      </View>

      {checked === null && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {embaralhado.map(({ t, idx }) => {
            const used = picked.includes(idx);
            return (
              <Pressable
                key={idx}
                disabled={used}
                onPress={() => toggle(idx)}
                className={`rounded-2xl border-2 px-4 py-3 active:opacity-80 ${used ? 'border-slate-100 bg-slate-50 opacity-30 dark:border-slate-800 dark:bg-slate-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text style={targetTextStyle(pack)} className="text-lg font-bold text-slate-800 dark:text-slate-100">{t}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {checked === null && completa && <Button title="Verificar" variant="success" onPress={verificar} />}

      {checked !== null && (
        <View className={`gap-2 rounded-2xl p-4 ${checked ? 'bg-conquista-light dark:bg-green-950' : 'bg-rose-50 dark:bg-rose-950'}`}>
          <Text className={`text-lg font-extrabold ${checked ? 'text-conquista-dark dark:text-green-300' : 'text-rose-600 dark:text-rose-300'}`}>
            {checked ? 'Perfeito! 🎉' : `Ordem certa: ${atual.tokens.join(' ')}`}
          </Text>
          <Text className="text-slate-700 dark:text-slate-300">🇧🇷 {atual.translation}</Text>
          <Button title="Continuar" variant={checked ? 'success' : 'danger'} onPress={next} />
        </View>
      )}
    </View>
  );
}
