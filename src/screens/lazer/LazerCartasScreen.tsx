import { View } from 'react-native';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { SubareaLazer } from '@/components/outros-jogos/SubareaLazer';

/** Lazer › Cartas: os baralhos do mundo, o baralho francês e os jogos de cartas colecionáveis. */
export default function LazerCartasScreen() {
  return (
    <Screen>
      <AreaCabecalho area="lazer" titulo="Cartas" />
      <View className="mt-3">
        <SubareaLazer area="cartas" />
      </View>
    </Screen>
  );
}
