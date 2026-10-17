import { View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { MarcosArea } from '@/components/area/AreaTrilha';
import { MARCOS_ARTE_MUNDO } from '@/data/arte/consulta';

/** A história da arte no mundo, em marcos: das cavernas à Pop Art. */
export default function ArteHistoriaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="arte" titulo="História da arte" subtitulo="Das cavernas à Pop Art: os movimentos e as obras que mudaram o jeito de ver." />
      <SectionTitle>A linha do tempo</SectionTitle>
      <View ref={alvoDoTour('arte-historia')}>
        <MarcosArea area="arte" marcos={MARCOS_ARTE_MUNDO} />
      </View>
    </Screen>
  );
}
