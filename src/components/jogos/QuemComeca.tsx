import { Pressable, Text, View } from 'react-native';
import { SEM_QUEM_COMECA } from '@/data/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type QuemComeca as Escolha } from '@/services/jogos-prefs';

const OPCOES: { id: Escolha; nome: string }[] = [
  { id: 'eu', nome: 'Eu começo' },
  { id: 'linu', nome: 'O Linu começa' },
  { id: 'sorteio', nome: 'Sorteio' },
];

/**
 * Quem começa contra o Linu (pedido do dono, 16/10/2026): “Eu começo”, “O Linu começa” ou “Sorteio”,
 * nos mesmos botões do seletor de variante. Uma escolha só para todos os jogos (jogosPrefs.quemComeca);
 * vale a partir da próxima partida, ou na hora se ninguém jogou ainda. Nos jogos em que a regra decide
 * quem começa, os botões aparecem desligados, com a explicação.
 */
export function QuemComeca({ jogo }: { jogo?: string }) {
  const [prefs, mudar] = useJogosPrefs();
  const motivo = jogo ? SEM_QUEM_COMECA[jogo] : undefined;
  return (
    <View className="gap-1">
      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Quem começa:</Text>
        {OPCOES.map((o) => {
          const ativo = !motivo && prefs.quemComeca === o.id;
          return (
            <Pressable
              key={o.id}
              accessibilityRole="radio"
              accessibilityLabel={`Quem começa: ${o.nome}`}
              accessibilityState={{ selected: ativo, disabled: !!motivo }}
              aria-checked={ativo}
              disabled={!!motivo}
              onPress={() => {
                if (ativo) return;
                haptics.tapLight();
                mudar({ quemComeca: o.id });
              }}
              className={`rounded-full border px-3 py-1.5 ${motivo ? 'opacity-40' : ''} ${ativo ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
            >
              <Text className={`text-xs font-bold ${ativo ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{o.nome}</Text>
            </Pressable>
          );
        })}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        {motivo ?? 'Vale a partir da próxima partida (ou já, se ninguém jogou ainda).'}
      </Text>
    </View>
  );
}
