import { Text } from 'react-native';
import { useJogosPrefs } from '@/services/jogos-prefs';
import * as Sungka from '@/services/sungka-engine';
import { TabuleiroMancalaFamilia } from './jogos/MancalaFamilia';
import { useVisualMancala } from './jogos/mancala';

const inicio = () => Sungka.createInitialState(Math.random() < 0.5 ? 0 : 1);

/**
 * Sungka (ver `sungka-engine.ts`): 7 casinhas de cada lado com 7 conchas. A semeadura passa pelo seu
 * depósito; terminando nele, você joga de novo; numa casinha com conchas, pega todas e continua; numa
 * casinha vazia sua, captura a da frente.
 */
export function SungkaBoard() {
  const [prefs] = useJogosPrefs();
  const visual = useVisualMancala('sungka');
  return (
    <TabuleiroMancalaFamilia
      id="sungka"
      motor={Sungka}
      inicio={inicio}
      visual={visual}
      dicas={prefs.dicas}
      ultimoLance={prefs.ultimoLance}
      instrucao={(s, nome) =>
        s.ultimo?.jogaDeNovo && s.winner === null
          ? `A última concha caiu no depósito: ${nome(s.turn) === 'Você' ? 'você joga' : `${nome(s.turn)} joga`} de novo!`
          : s.ultimo?.passou
            ? `${nome(s.turn === 0 ? 1 : 0)} não tem conchas e passa a vez.`
            : `${nome(s.turn) === 'Você' ? 'Sua vez' : `Vez de ${nome(s.turn)}`}: toque numa casinha ${s.turn === 0 ? 'de baixo' : 'de cima'}. Caindo numa casinha com conchas, a mão continua.`
      }
      rodape={<Text className="text-[11px] text-slate-500 dark:text-slate-400">O depósito de cada um fica à direita de quem joga. No sungka de verdade, o primeiro lance é dos dois ao mesmo tempo; aqui, um de cada vez.</Text>}
    />
  );
}
