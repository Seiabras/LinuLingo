import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AreaTrilha } from '@/components/area/AreaTrilha';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_ASTRO, UNIDADES_ASTRO } from '@/data/astronomia/trilha';

/** A Trilha da Astronomia: as unidades em ordem, no motor dos minicursos, e os ramos que vão chegar. */
export default function AstroTrilhaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="astronomia" titulo="Trilha" subtitulo="Do céu da janela ao começo do Universo, em unidades curtas." />
      <AreaTrilha area="astronomia" unidades={UNIDADES_ASTRO} proximas={PROXIMAS_UNIDADES_ASTRO}>
        <View ref={alvoDoTour('astro-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-indigo-50 p-3 dark:bg-indigo-950/40">
          <Linu mood="falando" size={56} />
          <Text className="flex-1 text-sm text-indigo-900 dark:text-indigo-100">
            Lá na Antártica, o inverno tem noites de meses e o céu fica cheio de estrelas. Bora entender o que tem lá em cima? Cada lição termina numa conta ou no céu de verdade.
          </Text>
        </View>
      </AreaTrilha>
    </Screen>
  );
}
