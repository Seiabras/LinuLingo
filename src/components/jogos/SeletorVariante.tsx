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
  chaturanga: 'Gaja alfil',
  paciencia: 'Comprando 1 carta',
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
  // no mesmo estilo dos botões de tamanho (`jogos/tamanho.tsx`), logo acima do tabuleiro
  return (
    <View className="flex-row flex-wrap items-center justify-center gap-2">
      <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Variante:</Text>
      {opcoes.map((o) => {
        const ativo = valida === o.id;
        return (
          <Pressable
            key={o.id || 'classica'}
            accessibilityRole="radio"
            accessibilityLabel={`Variante: ${o.nome}`}
            accessibilityState={{ selected: ativo }}
            aria-checked={ativo}
            onPress={() => {
              if (ativo) return;
              haptics.tapLight();
              trocar(o.id);
            }}
            className={`rounded-full border px-3 py-1.5 ${ativo ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${ativo ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{o.nome}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
