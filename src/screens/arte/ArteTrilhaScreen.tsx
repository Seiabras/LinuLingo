import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AreaTrilha } from '@/components/area/AreaTrilha';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_ARTE, UNIDADES_ARTE } from '@/data/arte/trilha';

/** A Trilha da Arte: as unidades em ordem, no motor dos minicursos, e os ramos que vão chegar. */
export default function ArteTrilhaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="arte" titulo="Trilha" subtitulo="A cor, o desenho, a pintura, a escultura, a história da arte e a maquiagem, em unidades curtas." />
      <AreaTrilha area="arte" unidades={UNIDADES_ARTE} proximas={PROXIMAS_UNIDADES_ARTE}>
        <View ref={alvoDoTour('arte-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-fuchsia-50 p-3 dark:bg-fuchsia-950/40">
          <Linu mood="falando" size={56} />
          <Text className="flex-1 text-sm text-fuchsia-900 dark:text-fuchsia-100">
            Eu sou preto e branco, mas adoro cor! Separe papel e lápis: cada lição termina com um exercício no Ateliê.
          </Text>
        </View>
      </AreaTrilha>
    </Screen>
  );
}
