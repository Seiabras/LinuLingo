import { Pressable, Text, View } from 'react-native';
import type { GameVariant } from '@/data/jogos-conhecimento';
import * as haptics from '@/services/haptics';
import { useVariante } from '@/services/jogos-prefs';

/** Como chamar a regra de sempre de cada jogo, no seletor (o padrão é “Clássica”). */
const NOME_CLASSICA: Record<string, string> = {
  damas: 'Brasileira (8×8)',
  moinho: 'Trilha de 9',
  conecta4: 'Clássico',
  roleta: 'Europeia (um zero)',
};

/** O nome curto de uma variante no seletor: sem o parêntese e sem as aspas do nome comprido. */
export const rotuloVariante = (v: GameVariant) => v.name.split(' (')[0]!.replace(/[“”"]/g, '').trim();

/**
 * O seletor “Variante” da página do jogo: a regra clássica e as variantes que dá para jogar no app
 * (as que têm `jogavel`). A escolha fica lembrada (jogosPrefs.variantes) e cada variante tem a sua
 * própria partida em andamento.
 */
export function SeletorVariante({ jogo, variantes }: { jogo: string; variantes?: GameVariant[] }) {
  const [atual, trocar] = useVariante(jogo);
  const jogaveis = (variantes ?? []).filter((v) => v.jogavel);
  if (!jogaveis.length) return null;
  const opcoes = [{ id: '', nome: NOME_CLASSICA[jogo] ?? 'Clássica' }, ...jogaveis.map((v) => ({ id: v.jogavel!, nome: rotuloVariante(v) }))];
  const valida = opcoes.some((o) => o.id === atual) ? atual : '';
  return (
    <View className="flex-row flex-wrap items-center gap-2">
      <Text className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400">Variante</Text>
      {opcoes.map((o) => (
        <Pressable
          key={o.id || 'classica'}
          accessibilityRole="radio"
          accessibilityLabel={`Variante: ${o.nome}`}
          accessibilityState={{ selected: valida === o.id }}
          aria-checked={valida === o.id}
          onPress={() => {
            haptics.tapLight();
            trocar(o.id);
          }}
          className={`rounded-full border-2 px-3 py-1 ${valida === o.id ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
        >
          <Text className={`text-xs font-bold ${valida === o.id ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{o.nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}
