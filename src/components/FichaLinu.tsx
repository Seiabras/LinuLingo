import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Card } from './ui';
import { Linu } from './Linu';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { calcularAtributos, DADOS_VAZIOS, lerDadosAtributos, pontoFraco, type AtributoId } from '@/services/atributos';
import { fraseDoCachecol, useCachecolConquistado, useUsarCachecol } from '@/services/cachecol';
import { CachecolSwitch } from './CachecolSwitch';
import { CordaAmostra } from './CordaAmostra';
import { useLinuOutfit } from '@/services/linu-outfit';
import { ROUPAS_LINU, slotOf } from '@/data/roupas-linu';

const BARRA: Record<AtributoId, string> = {
  vocabulario: 'bg-conecta',
  escuta: 'bg-aurora',
  fala: 'bg-fogo',
  escrita: 'bg-conquista',
  gramatica: 'bg-amber-500',
};

/**
 * A ficha do Linu (como a de um personagem de jogo): os cinco atributos, calculados do que o aluno já
 * fez no idioma estudado (src/services/atributos.ts), e o cachecol da corda conquistada pelo
 * vocabulário aprendido (src/services/cachecol.ts). Cada atributo leva ao treino dele; `onNavigate` avisa antes
 * (para fechar o modal em que a ficha está).
 */
export function FichaLinu({ onNavigate }: { onNavigate?: () => void }) {
  const { db, pack, user } = useApp();
  const dark = useIsDark();
  const [dados, setDados] = useState(DADOS_VAZIOS);
  const cachecol = useCachecolConquistado();
  const usando = useUsarCachecol();
  const look = useLinuOutfit();
  const corpo = look.find((o) => slotOf(o) === 'corpo');
  const roupaCorpo = corpo ? ROUPAS_LINU.find((o) => o.id === corpo)?.name : undefined;

  useFocusEffect(
    useCallback(() => {
      // `user` muda a cada refresh (depois de uma atividade): a ficha relê os números
      if (!user) return;
      let alive = true;
      lerDadosAtributos(db, pack)
        .then((d) => alive && setDados(d))
        .catch(() => {});
      return () => {
        alive = false;
      };
    }, [db, pack, user]),
  );

  const atributos = calcularAtributos(dados);
  const fraco = pontoFraco(atributos);

  return (
    <Card className="gap-3">
      <View className="flex-row items-center gap-3">
        <Linu size={52} animate={false} mood="feliz" />
        <View className="flex-1">
          <Text className="text-xs font-extrabold uppercase tracking-widest text-aurora-dark dark:text-aurora">📜 Ficha do Linu</Text>
          <Text className="text-xs text-slate-600 dark:text-slate-400">
            {pack.flag} {pack.name} · calculada do que você já fez
          </Text>
          <View className="mt-1 flex-row items-center gap-1.5">
            {cachecol ? <CordaAmostra corda={cachecol.corda} w={20} h={12} /> : <View className="h-3 w-5 rounded-sm border border-dashed border-slate-400 dark:border-slate-500" />}
            <Text className="flex-1 text-xs font-bold text-slate-800 dark:text-slate-100">{fraseDoCachecol(cachecol)}</Text>
          </View>
        </View>
      </View>
      <CachecolSwitch />
      {cachecol && usando && roupaCorpo && (
        <Text className="-mt-1 text-[11px] text-slate-600 dark:text-slate-400">Com a roupa do corpo ({roupaCorpo}), o cachecol fica por baixo dela.</Text>
      )}

      <View className="gap-2">
        {atributos.map((a) => (
          <Pressable
            key={a.id}
            accessibilityRole="button"
            accessibilityLabel={`${a.nome}: nível ${a.nivel}, faltam ${a.faltam} pontos para o próximo. ${a.origem}. Toque para treinar.`}
            onPress={() => {
              onNavigate?.();
              router.push(a.rota);
            }}
            className="rounded-xl bg-slate-50 px-3 py-2 active:opacity-70 dark:bg-slate-800/60"
          >
            <View className="flex-row items-center gap-2">
              <Text className="text-base">{a.emoji}</Text>
              <Text className="flex-1 text-sm font-extrabold text-slate-900 dark:text-white">{a.nome}</Text>
              <Text className="text-xs font-extrabold text-slate-700 dark:text-slate-200">Nv. {a.nivel}</Text>
              <ChevronRight size={14} color={dark ? '#64748B' : '#94A3B8'} />
            </View>
            <View className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <View className={`h-full rounded-full ${BARRA[a.id]}`} style={{ width: `${Math.round(a.progresso * 100)}%` }} />
            </View>
            <Text className="mt-1 text-[11px] leading-4 text-slate-600 dark:text-slate-400">{a.origem}</Text>
          </Pressable>
        ))}
      </View>
      {fraco && (
        <Text className="text-xs text-slate-600 dark:text-slate-300">
          Para equilibrar: <Text className="font-bold">{fraco.emoji} {fraco.nome}</Text> é o que mais pede treino. Toque num atributo para treinar.
        </Text>
      )}
    </Card>
  );
}
