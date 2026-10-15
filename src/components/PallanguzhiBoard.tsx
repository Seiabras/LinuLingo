import { Text } from 'react-native';
import { useJogosPrefs } from '@/services/jogos-prefs';
import * as Pallanguzhi from '@/services/pallanguzhi-engine';
import { TabuleiroMancalaFamilia } from './jogos/MancalaFamilia';
import { useVisualMancala } from './jogos/mancala';

const inicio = () => Pallanguzhi.createInitialState(Math.random() < 0.5 ? 0 : 1);

/**
 * Pallanguzhi (ver `pallanguzhi-engine.ts`): toque numa casa sua para semear. Depois da última
 * semente, a mão pega a cova seguinte e continua; cova seguinte vazia, captura a de depois; a cova que
 * chega a 4 (o “pasu”) é de quem deixou a semente.
 */
export function PallanguzhiBoard() {
  const [prefs] = useJogosPrefs();
  const visual = useVisualMancala('pallanguzhi');
  return (
    <TabuleiroMancalaFamilia
      id="pallanguzhi"
      motor={Pallanguzhi}
      inicio={inicio}
      visual={visual}
      dicas={prefs.dicas}
      ultimoLance={prefs.ultimoLance}
      instrucao={(s, nome) =>
        `${nome(s.turn) === 'Você' ? 'Sua vez' : `Vez de ${nome(s.turn)}`}: toque numa casa ${s.turn === 0 ? 'de baixo' : 'de cima'}. A mão continua pela cova seguinte; a cova que chega a 4 é sua.`
      }
      rodape={<Text className="text-[11px] text-slate-500 dark:text-slate-400">Os depósitos guardam o que cada um capturou; a semeadura passa direto por eles.</Text>}
    />
  );
}
