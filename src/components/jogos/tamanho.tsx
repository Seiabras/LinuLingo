import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';

/** Um tamanho de tabuleiro para escolher: o id guardado nas preferências e o rótulo na tela. */
export interface OpcaoTamanho {
  id: string;
  rotulo: string;
}

/**
 * O tamanho do tabuleiro escolhido para o jogo (pedido do dono, item 21: “poder mudar o tamanho do
 * tabuleiro, naqueles em que é possível”). Fica guardado nas preferências (`tamanhos`), então a
 * escolha volta na próxima vez. Devolve o id escolhido (ou o padrão) e a função que troca.
 */
export function useTamanho(jogo: string, opcoes: OpcaoTamanho[], padrao: string): [string, (id: string) => void] {
  const [prefs, mudar] = useJogosPrefs();
  const salvo = prefs.tamanhos[jogo];
  const atual = salvo && opcoes.some((o) => o.id === salvo) ? salvo : padrao;
  const trocar = (id: string) => mudar({ tamanhos: { ...prefs.tamanhos, [jogo]: id } });
  return [atual, trocar];
}

/**
 * Recomeça a partida quando o tamanho escolhido não é o do tabuleiro em jogo (ao trocar o tamanho, ou
 * quando as preferências terminam de carregar). `doTabuleiro` é o tamanho da partida de agora.
 */
export function useRecomecaNoTamanho(escolhido: string, doTabuleiro: string, reiniciar: () => void) {
  useEffect(() => {
    if (escolhido !== doTabuleiro) reiniciar();
  }, [escolhido, doTabuleiro, reiniciar]);
}

/** Os botões de tamanho, no mesmo estilo dos do Hex, dos pontinhos e do kōnane. */
export function SeletorTamanho({ opcoes, atual, onEscolher }: { opcoes: OpcaoTamanho[]; atual: string; onEscolher: (id: string) => void }) {
  return (
    <View className="flex-row flex-wrap justify-center gap-2">
      {opcoes.map((o) => {
        const ativo = o.id === atual;
        return (
          <Pressable
            key={o.id}
            accessibilityRole="button"
            accessibilityLabel={`Tabuleiro ${o.rotulo}`}
            accessibilityState={{ selected: ativo }}
            onPress={() => {
              if (ativo) return;
              haptics.tapLight();
              onEscolher(o.id);
            }}
            className={`rounded-full border px-3 py-1.5 ${ativo ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${ativo ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{o.rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
