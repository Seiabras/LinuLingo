import { View } from 'react-native';
import { Linu } from '@/components/Linu';
import { SpeechBubble } from '@/components/ui';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { fraseDoLinu, ROUPA_DO_TEMA } from '@/data/linu-na-partida';
import { useEventoPartida } from './ui';

/**
 * O Linu na partida (item 17 do PENDENTES.md): quando se joga contra ele, ele aparece em cima do
 * tabuleiro com a roupa do tema (se a loja tem uma do mesmo país; senão, a que a pessoa escolheu
 * para ele) e comenta a partida: o começo, as capturas, alguns lances e o resultado. As frases
 * podem ser desligadas no Personalizar.
 */
export function LinuNaPartida() {
  const [prefs] = useJogosPrefs();
  const evento = useEventoPartida();
  const roupa = ROUPA_DO_TEMA[prefs.tema];
  const frases = prefs.frasesLinu ?? true;
  // nos lances comuns, ele fala de vez em quando (a cada 4 acontecimentos), para não cansar
  const fala =
    !frases
      ? null
      : evento.tipo === 'lance'
        ? evento.n % 4 === 0
          ? fraseDoLinu('lance', evento.n / 4)
          : null
        : fraseDoLinu(evento.tipo, evento.n);
  const humor = evento.tipo === 'derrota' ? 'comemorando' : evento.tipo === 'vitoria' ? 'triste' : fala ? 'falando' : 'feliz';
  return (
    <View className="flex-row items-end gap-2 self-stretch" style={{ minHeight: 60 }}>
      <Linu size={56} mood={humor} outfit={roupa ?? undefined} animate={false} />
      {fala && <SpeechBubble className="py-2">{fala}</SpeechBubble>}
    </View>
  );
}
