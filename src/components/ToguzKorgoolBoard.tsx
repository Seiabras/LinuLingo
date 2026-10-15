import { Text } from 'react-native';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { NIVEIS_TOGUZ } from '@/services/mancala-familia-ia';
import * as Toguz from '@/services/toguz-korgool-engine';
import { TabuleiroMancalaFamilia } from './jogos/MancalaFamilia';
import { useVisualMancala } from './jogos/mancala';

const inicio = () => Toguz.createInitialState(Math.random() < 0.5 ? 0 : 1);

/**
 * Toguz korgool (ver `toguz-korgool-engine.ts`): 9 covas de cada lado, 9 bolinhas em cada. A primeira
 * bolinha cai na cova que você esvaziou; terminando do outro lado com número par, você captura; com 3,
 * a cova vira a sua “tuz” e tudo o que cair nela passa a ser seu.
 */
export function ToguzKorgoolBoard() {
  const [prefs] = useJogosPrefs();
  const visual = useVisualMancala('toguz-korgool');
  return (
    <TabuleiroMancalaFamilia
      id="toguz-korgool"
      motor={Toguz}
      inicio={inicio}
      visual={visual}
      dicas={prefs.dicas}
      ultimoLance={prefs.ultimoLance}
      niveis={NIVEIS_TOGUZ}
      nomeDeposito="kazan"
      instrucao={(s, nome) =>
        `${nome(s.turn) === 'Você' ? 'Sua vez' : `Vez de ${nome(s.turn)}`}: toque numa cova ${s.turn === 0 ? 'de baixo' : 'de cima'}. Terminando do outro lado com número par, captura; com 3, a cova vira a sua tuz${s.tuz?.[s.turn] != null ? ' (você já tem a sua)' : ''}.`
      }
      rodape={<Text className="text-[11px] text-slate-500 dark:text-slate-400">Vence quem juntar mais de 81 das 162 bolinhas. A tuz aparece com a marca roxa.</Text>}
    />
  );
}
