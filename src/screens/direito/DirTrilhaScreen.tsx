import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AreaTrilha } from '@/components/area/AreaTrilha';
import { AvisoDireito } from '@/components/direito/AvisoDireito';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_DIR, UNIDADES_DIR } from '@/data/direito/trilha';

/** A Trilha do Direito: as unidades em ordem, no motor dos minicursos, e os ramos que vão chegar. */
export default function DirTrilhaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="direito" titulo="Trilha" subtitulo="As regras que valem para todo mundo no Brasil, explicadas artigo por artigo, em unidades curtas." />
      <AvisoDireito />
      <AreaTrilha area="direito" unidades={UNIDADES_DIR} proximas={PROXIMAS_UNIDADES_DIR}>
        <View ref={alvoDoTour('dir-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-amber-50 p-3 dark:bg-amber-950/40">
          <Linu mood="falando" size={56} />
          <Text className="flex-1 text-sm text-amber-900 dark:text-amber-100">
            Comprou pela internet e se arrependeu? Quanto vale a hora extra? Toda lição tem o artigo da lei e termina num caso do dia a dia.
          </Text>
        </View>
      </AreaTrilha>
    </Screen>
  );
}
