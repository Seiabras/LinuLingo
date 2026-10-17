import { View } from 'react-native';
import { Screen } from '@/components/ui';
import { AmigoEscondido } from '@/components/AmigoEscondido';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { SubareaLazer } from '@/components/outros-jogos/SubareaLazer';
import { AREAS_JOGO, type AreaJogo } from '@/data/outros-jogos';
import { alvoDoTour } from '@/services/tour';

/**
 * Uma aba do Lazer para cada subárea (pedido do dono, 17/10/2026: “separar assim como estava:
 * tabuleiro, cartas, esportes, azar…”, como no Perfil antes do Lazer virar um app próprio).
 */
export function LazerSubareaScreen({ area }: { area: AreaJogo }) {
  const info = AREAS_JOGO.find((a) => a.id === area)!;
  return (
    <Screen>
      <AreaCabecalho area="lazer" titulo={info.nome} />
      {/* amigos do Linu escondidos nas abas do Lazer (ver amigos-linu.ts) */}
      {area === 'cartas' && <AmigoEscondido id="skua" tamanho={38} style={{ position: 'absolute', right: 4, top: 26 }} />}
      {area === 'esportes' && <AmigoEscondido id="saltador" tamanho={38} style={{ position: 'absolute', right: 4, top: 26 }} />}
      <View ref={alvoDoTour(`lazer-${area}`)} className="mt-3">
        <SubareaLazer area={area} />
      </View>
    </Screen>
  );
}
