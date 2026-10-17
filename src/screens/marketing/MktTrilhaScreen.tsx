import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AreaTrilha } from '@/components/area/AreaTrilha';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_MKT, UNIDADES_MKT } from '@/data/marketing/trilha';

/** A Trilha do Marketing: as unidades em ordem, no motor dos minicursos, e os ramos que vão chegar. */
export default function MktTrilhaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="marketing" titulo="Trilha" subtitulo="Entender quem precisa do quê e levar até a pessoa algo que valha a troca, em unidades curtas." />
      <AreaTrilha area="marketing" unidades={UNIDADES_MKT} proximas={PROXIMAS_UNIDADES_MKT}>
        <View ref={alvoDoTour('mkt-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-pink-50 p-3 dark:bg-pink-950/40">
          <Linu mood="falando" size={56} />
          <Text className="flex-1 text-sm text-pink-900 dark:text-pink-100">
            Por que tanta coisa custa R$ 9,99? E por que o pacote médio de pipoca quase custa o da grande? Toda lição termina numa conta ou num caso de verdade.
          </Text>
        </View>
      </AreaTrilha>
    </Screen>
  );
}
